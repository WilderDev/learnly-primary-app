import { dateToReadableString } from '@/lib/common/date.helpers';
import Avatar from '@/lib/components/images/Avatar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getSubjectColor } from '@/lib/theme/enumColors';

// * Component
export default async function UpcomingLessonsCards() {
  // * Data
  const upcomingLessons = await getUpcomingLessons();

  // * Render
  return (
    <CardContainer cols={3}>
      {upcomingLessons?.slice(0, 3).map((lesson) => (
        <Card
          key={lesson.id}
          decoration={getSubjectColor(lesson.subject).BG.GRADIENT}
        >
          <Card.Title>{lesson.title}</Card.Title>
          <Card.Subtitle>
            {dateToReadableString(lesson.scheduled_date)}
          </Card.Subtitle>
          {/* <Card.Subtitle>
            <span>
              {getDayOfWeekFromTimestamp(lesson.user_lesson_scheduled_for!)}
            </span>
            <span className="mx-2">•</span>
            <span>
              {getDateFromTimestamp(lesson.user_lesson_scheduled_for!)}
            </span>
          </Card.Subtitle> */}

          {/* Card Categories */}
          <Card.Tags>
            {lesson.tags?.slice(0, 3).map((t, i) => (
              <Card.Tag
                content={t}
                colors={getSubjectColor(lesson.subject).BLEND.SUBDUED}
                url={`/lesson-plans?tag=${t}`}
                key={i}
              />
            ))}
          </Card.Tags>

          {/* Card Footer */}
          <Card.Footer>
            {/* Attending */}
            <OverlappingImages>
              {lesson.students?.map((s, i) => (
                <Avatar
                  src={s.avatar_url}
                  alt={s.first_name}
                  //   url="/account?view=children"
                  key={i}
                />
              ))}
            </OverlappingImages>

            {/* Link */}
            <Card.Action url={`/lesson-plans/${lesson.id}`} />
          </Card.Footer>
        </Card>
      ))}
    </CardContainer>
  );
}

async function getUpcomingLessons() {
  return [
    {
      id: 'abc',
      title: 'Lesson 1',
      subject: 'Mathematics',
      level: 'Pre-K',
      topic: 'Addition',
      image_path: 'https://source.unsplash.com/random/300x200',
      tags: ['Addition', 'Math', 'Pre-K'],
      length_in_min: 60,
      scheduled_date: new Date(),
      students: [
        {
          id: 'abc',
          first_name: 'John',
          last_name: 'Doe',
          avatar_url: '/static/icons/avatars/bear.png',
        },
      ],
    },
    {
      id: 'abc',
      title: 'Lesson 1',
      subject: 'Math',
      level: 'Pre-K',
      topic: 'Addition',
      image_path: 'https://source.unsplash.com/random/300x200',
      tags: ['Addition', 'Math', 'Pre-K'],
      length_in_min: 60,
      scheduled_date: new Date(),
      students: [
        {
          id: 'abc',
          first_name: 'John',
          last_name: 'Doe',
          avatar_url: '/static/icons/avatars/bear.png',
        },
      ],
    },
    {
      id: 'abc',
      title: 'Lesson 1',
      subject: 'Math',
      level: 'Pre-K',
      topic: 'Addition',
      image_path: 'https://source.unsplash.com/random/300x200',
      tags: ['Addition', 'Math', 'Pre-K'],
      length_in_min: 60,
      scheduled_date: new Date(),
      students: [
        {
          id: 'abc',
          first_name: 'John',
          last_name: 'Doe',
          avatar_url: '/static/icons/avatars/bear.png',
        },
      ],
    },
    {
      id: 'abc',
      title: 'Lesson 1',
      subject: 'Math',
      level: 'Pre-K',
      topic: 'Addition',
      image_path: 'https://source.unsplash.com/random/300x200',
      tags: ['Addition', 'Math', 'Pre-K'],
      length_in_min: 60,
      scheduled_date: new Date(),
      students: [
        {
          id: 'abc',
          first_name: 'John',
          last_name: 'Doe',
          avatar_url: '/static/icons/avatars/bear.png',
        },
      ],
    },
  ];
}

//  lessons: [

//       ],
