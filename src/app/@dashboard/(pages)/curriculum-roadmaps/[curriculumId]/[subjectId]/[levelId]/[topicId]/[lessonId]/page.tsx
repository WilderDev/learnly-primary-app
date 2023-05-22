import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import CurriculumLessonForm from './CurriculumLessonForm';

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
      {/* Main Column */}
      <DashMainCol>
        {/* Form */}
        <DashPanel colNum={1}>
          <DashPanelHeader title={`Create "${lesson.name}" Lesson`} />
          <CurriculumLessonForm lesson={lesson} />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Community Lessons */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Community Creations" />
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
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

  // Return data
  return data;
}

// * Metadata
export async function generateMetadata({
  params: { curriculumId, subjectId, levelId, topicId, lessonId },
}: IParams) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  const { data } = await supabase
    .from('curriculum_lessons_with_progress_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('curriculum_subject_id', subjectId)
    .eq('curriculum_level_id', levelId)
    .eq('curriculum_topic_id', topicId)
    .eq('curriculum_lesson_id', lessonId)
    .single();

  return {
    slug: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}/${lessonId}`,
    title: `${data?.lesson_name} | Curriculum Lessons Creator | ${data?.curriculum_name}`,
    image: data?.lesson_image_path,
    keywords: ['Homeschool Curriculum Roadmap', 'Homeschool Curriculum'],
    description: data?.lesson_description,
    openGraph: {
      title: `${data?.lesson_name} | Curriculum Lessons Creator | ${data?.curriculum_name}`,
      description: data?.lesson_description,
      images: [
        {
          url: data?.lesson_image_path,
          width: 800,
          height: 600,
          alt: data?.lesson_name || 'Curriculum Lesson Creator',
        },
      ],
    },
  };
}

// * Static Params
export async function getStaticPaths() {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data } = await supabase
    .from('curriculum_lessons_with_progress_view')
    .select(
      'curriculum_id, curriculum_subject_id, curriculum_level_id, curriculum_topic_id, curriculum_lesson_id',
    );

  const paths =
    data?.map((c) => ({
      curriculumId: c.curriculum_id,
      subjectId: c.curriculum_subject_id,
      levelId: c.curriculum_level_id,
      topicId: c.curriculum_topic_id,
      lessonId: c.curriculum_lesson_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
