import { supabaseServer } from '@/lib/auth/supabaseServer';
import { formatDateString } from '@/lib/common/date.helpers';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import Accordion from '@/lib/components/ui/Accordion';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getSubjectColor } from '@/lib/theme/enumColors';

// * Component
export default async function RecentlyCompletedLessonsAccordions() {
  // * Data
  const recentlyCompletedLessons = await getRecentlyCompletedLessons();

  // * Render
  const hasCompletedLessons = recentlyCompletedLessons?.length > 0;
  return hasCompletedLessons ? (
    <CardContainer className="md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
      {recentlyCompletedLessons
        .slice(0, 3)
        .map(
          (
            { id, title, completion_date, image_path, subject, students },
            idx,
          ) => (
            <Accordion
              title={title}
              subInfo={formatDateString(completion_date, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
              image={image_path}
              itemNum={idx + 1}
              url={`/lesson-plans/${id}`}
              bubbleColor={getSubjectColor(subject).BG.DEFAULT}
              key={id}
            >
              <Card className="bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent">
                <Card.Footer className="mt-0">
                  <OverlappingImages>
                    {students?.map((s, idx) => (
                      <Avatar
                        src={s.avatar_url}
                        alt={s.first_name}
                        url="/account?view=students"
                        key={idx}
                      />
                    ))}
                  </OverlappingImages>

                  {/* Link */}
                  <div className="flex items-center">
                    <span className="text-xs mr-2 text-slate-600 dark:text-navy-200">
                      View Lesson
                    </span>
                    <Card.Action url={`/lesson-plans/${id}`} />
                  </div>
                </Card.Footer>
              </Card>
            </Accordion>
          ),
        )}
    </CardContainer>
  ) : (
    <p className="text-sm font-semibold text-slate-500">
      No recently completed lessons
    </p>
  );
}

// * Fetcher
async function getRecentlyCompletedLessons() {
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('recently_completed_lesson_plans_view')
    .select('*');

  if (error) return [];

  const transfomedData = data?.map((lesson) => ({
    id: lesson.id!,
    title: lesson.title!,
    subject: lesson.subject!,
    completion_date: lesson.completion_date!,
    image_path: lesson.image_path!,
    students: lesson.students! as {
      id: string;
      first_name: string;
      last_name: string;
      avatar_url: string;
    }[],
  }));

  return transfomedData;
}
