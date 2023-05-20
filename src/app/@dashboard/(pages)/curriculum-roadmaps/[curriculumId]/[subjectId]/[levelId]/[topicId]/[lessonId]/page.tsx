import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
    topicId: string;
    lessonId: string;
  };
}

// * Page
export default async function CurriculumRoadmapLessonPage({
  params: { curriculumId, subjectId, levelId, topicId, lessonId },
}: IParams) {
  // * Data
  const lesson = await getCurriculumRoadmapLesson(
    curriculumId,
    subjectId,
    levelId,
    topicId,
    lessonId,
  );

  // * Render
  return (
    <>
      <h1>Lesson: {lesson.name}</h1>
    </>
  );
}

// * Fetcher
async function getCurriculumRoadmapLesson(
  curriculumId: string,
  subjectId: string,
  levelId: string,
  topicId: string,
  lessonId: string,
) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_lessons')
    .select('*')
    .eq('id', lessonId)
    .single();

  // Handle errors
  if (error || !data)
    return redirect(
      `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}`,
    );

  // Transform data

  // Return transformed data
  return data;
}
