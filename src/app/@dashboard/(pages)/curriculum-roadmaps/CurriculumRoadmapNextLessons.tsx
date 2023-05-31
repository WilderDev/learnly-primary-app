import { INextCurriculumLesson } from '@/assets/typescript/curriculum-roadmaps';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors, getSubjectColor } from '@/lib/theme/enumColors';

export default async function CurriculumRoadmapNextLessons() {
  // * Data
  const nextLessons = await getCurriculumRoadmapNextLessons();

  // * Render
  return (
    <CardContainer>
      {nextLessons?.map((lesson, idx) => (
        <Card
          className="relative group h-full"
          url={`/curriculum-roadmaps/user/${lesson.user_curriculum_id}/${lesson.curriculum_subject_id}/${lesson.curriculum_level_id}/${lesson.curriculum_topic_id}/${lesson.curriculum_lesson_id}`}
          decoration={getSubjectColor(lesson.subject_name).BG.GRADIENT}
          key={lesson.curriculum_lesson_id}
        >
          <Card.Bubble
            content={lesson.curriculum_name}
            colors={getIndexColors(idx).BLEND.SUBDUED}
          />

          <Card.Title className="mt-6 md:text-lg transition-colors duration-300 group-hover:text-green-900 dark:group-hover:text-green-500">
            {lesson.lesson_name}
          </Card.Title>
          <Card.Subtitle className="line-clamp-2">
            {lesson.lesson_description}
          </Card.Subtitle>

          <Card.Footer className="mt-auto pt-10 justify-self-end flex items-center justify-between text-sm">
            <p>
              {lesson.subject_name} | {lesson.level_name} | {lesson.topic_name}
            </p>
          </Card.Footer>
        </Card>
      ))}
    </CardContainer>
  );
}

// * Fetcher
async function getCurriculumRoadmapNextLessons() {
  const supabase = supabaseServer(); // Create supabase instance for server-side
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: curriculum_roadmap_next_lessons, error } = await supabase
    .from('next_lesson_per_subject_per_curriculum_view')
    .select('*')
    .eq('teacher_id', session?.user.id)
    .order('curriculum_id', { ascending: true });

  // Handle errors
  if (error) return [];

  // Return data
  return curriculum_roadmap_next_lessons as INextCurriculumLesson[];
}
