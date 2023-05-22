import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import CurriculumLessonForm from './CurriculumLessonForm';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';

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
  const { lessonForm, lessonPlan } = await getCurriculumRoadmapLesson(
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
          <DashPanelHeader
            title={`Create "${lessonForm.lesson_name}" Lesson`}
          />
          {lessonPlan ? (
            <>{lessonPlan.content}</>
          ) : (
            <CurriculumLessonForm lesson={lessonForm} />
          )}
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

  // Get the curriculum roadmap lesson data
  const { data, error } = await supabase
    .from('curriculum_lesson_with_user_lesson_view')
    .select('*')
    .eq('curriculum_lesson_id', lessonId)
    .single();

  // Handle errors
  if (error || !data)
    return redirect(
      `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}`,
    );

  // Create lesson plan form data
  const lessonFormData = {
    curriculum_name: data.curriculum_name!,
    subject_name: data.subject_name!,
    level_name: data.level_name!,
    topic_name: data.topic_name!,
    lesson_name: data.lesson_name!,
    lesson_description: data.lesson_description!,
    students: data.students! as IStudentPromptReq['students'],
    // teacher data???? And then show a modal if the user_curriculum or if students is emtpy is not set up and they need to save the curriculum to continue (TSK)
  };

  // Return data
  return {
    lessonForm: lessonFormData,
    lessonPlan:
      (data.lesson_plan as {
        id: string;
        title: string;
        content: string;
        tags: string[];
        image_path: string;
        length_in_min: number;
        // . . . Creator info, etc.
      }) || null,
  };
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
