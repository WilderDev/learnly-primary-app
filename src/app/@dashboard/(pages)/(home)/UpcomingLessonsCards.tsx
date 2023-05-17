import { supabaseServer } from '@/lib/auth/supabaseServer';
import {
  dateToReadableString,
  formatDateString,
} from '@/lib/common/date.helpers';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import Button from '@/lib/components/ui/Button';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getSubjectColor } from '@/lib/theme/enumColors';
import { PlusIcon } from '@heroicons/react/24/solid';

// * Component
export default async function UpcomingLessonsCards() {
  // * Data
  const upcomingLessons = await getUpcomingLessons();

  // * Render
  const hasThree = upcomingLessons?.length > 2;
  return (
    <CardContainer>
      {upcomingLessons
        .slice(0, 3)
        .map(({ id, title, subject, scheduled_date, tags, students }) => (
          <Card decoration={getSubjectColor(subject!).BG.GRADIENT} key={id}>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>
              {formatDateString(scheduled_date!, {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
            </Card.Subtitle>

            {/* Card Categories */}
            <Card.Tags>
              {tags?.slice(0, 3).map((t, i) => (
                <Card.Tag
                  content={t}
                  colors={getSubjectColor(subject!).BLEND.SUBDUED}
                  url={`/lesson-plans?tag=${t}`}
                  key={i}
                />
              ))}
            </Card.Tags>

            {/* Card Footer */}
            <Card.Footer>
              {/* Attending */}
              <OverlappingImages>
                {students?.map((s, i) => (
                  <Avatar
                    src={s.avatar_url}
                    alt={s.first_name}
                    url="/account?view=children"
                    key={i}
                  />
                ))}
              </OverlappingImages>

              {/* Link */}
              <Card.Action url={`/lesson-plans/${id}`} />
            </Card.Footer>
          </Card>
        ))}

      {/* Add Lesson */}
      {!hasThree && (
        <Card className="items-center justify-center">
          <Card.Title>Add Lesson</Card.Title>
          <Card.Subtitle>Looks like you could use a lesson plan!</Card.Subtitle>

          <Button
            className="p-3 md:p-3 mt-2"
            size="sm"
            rounded="full"
            url="/lesson-creator"
          >
            <PlusIcon className="w-5 h-5" />
          </Button>
          {/* <Button>Create Lesson Plan</Button> */}
        </Card>
      )}
    </CardContainer>
  );
}

async function getUpcomingLessons() {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('upcoming_lesson_plans_view')
    .select('*');

  if (error) return [];

  const transfomedData = data?.map((lesson) => ({
    id: lesson.id!,
    title: lesson.title!,
    subject: lesson.subject!,
    scheduled_date: lesson.scheduled_date!,
    tags: lesson.tags!,
    students: lesson.students! as {
      id: string;
      first_name: string;
      last_name: string;
      avatar_url: string;
    }[],
  }));

  return transfomedData;
}
