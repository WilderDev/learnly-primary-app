import { Card, CardContainer } from '@/lib/components/ui/Card';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Image from 'next/image';

// * Props
interface IProps {
  lessonId: string;
}

// * Component
export default async function LessonPlanSimilarLessons({ lessonId }: IProps) {
  // * Data
  const similarLessons = await getSimilarLessons(lessonId);

  // level, subject, topic, image_path, length_in_min, creator

  // * Render
  return similarLessons?.length > 0 ? (
    <CardContainer>
      {similarLessons.map((lesson) => (
        <Card
          className="w-full md:w-1/2 lg:w-1/3 xl:w-full flex flex-col justify-between space-y-4"
          url={`/lesson-plans/${lesson.id}`}
          key={lesson.id}
        >
          <div className="flex items-center space-x-4 w-full">
            {/* Image */}
            <Image
              className="rounded-full w-8 h-8"
              src={lesson.image_path || ''}
              alt={lesson.title || 'lesson image'}
              width={1600}
              height={900}
            />

            {/* Title */}
            <h3 className="text-sm font-semibold">{lesson.title}</h3>
          </div>

          {/* Length in Min */}
          {/* <Card.Bubble
            content={lesson.tags![0]}
            colors={getSubjectColor(lesson.tags![0]).BLEND.LIGHT}
          /> */}

          <Card.Footer className="flex justify-around">
            {/* Length in Min */}
            <p className="text-xs text-slate-700 dark:text-navy-200 ml-1">
              {lesson.length_in_min} min
            </p>

            {/* Creator */}
            <p className="self-end items-end ml-auto text-xs text-slate-700 dark:text-navy-200">
              {lesson.first_name} {lesson.last_name}
            </p>
          </Card.Footer>
        </Card>
      ))}
    </CardContainer>
  ) : (
    <p className="text-center text-slate-700 dark:text-navy-200">
      No similar lessons found.
    </p>
  );
}

// * Fetcher
async function getSimilarLessons(lessonId: string) {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.rpc('similar_lessons', {
    lesson_id: lessonId,
    user_id: session?.user.id!,
  });

  if (error) return [];

  return data;
}
