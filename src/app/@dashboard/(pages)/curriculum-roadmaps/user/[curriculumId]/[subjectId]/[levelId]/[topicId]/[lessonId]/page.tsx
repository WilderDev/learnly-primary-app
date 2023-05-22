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
import {
  ICurriculumFormData,
  ICurriculumLessonPlan,
} from '@/assets/typescript/curriculum-roadmaps';
import LessonPlanContainer from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanContainer';
import CurriculumLessonPlanContainer from './CurriculumLessonPlanContainer';

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
            title={`Create "${lessonForm.lesson.name}" Lesson`}
          />
          {lessonPlan ? (
            <CurriculumLessonPlanContainer lessonPlan={lessonPlan} />
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
      `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}/${topicId}`,
    );

  // Create lesson plan form data
  const lessonFormData: ICurriculumFormData = {
    curriculum: {
      id: curriculumId,
      name: data.curriculum_name!,
    },
    subject: {
      id: subjectId,
      subjectId: data.subject_id!,
      name: data.subject_name!,
    },
    level: {
      id: levelId,
      levelId: data.level_id!,
      name: data.level_name!,
    },
    topic: {
      id: topicId,
      topicId: data.topic_id!,
      name: data.topic_name!,
    },
    lesson: {
      id: lessonId,
      name: data.lesson_name!,
      description: data.lesson_description!,
      image_path: data.lesson_image_path!,
    },
    students: data.students! as IStudentPromptReq['students'],
  };

  // Return data
  return {
    lessonForm: lessonFormData,
    lessonPlan:
      data.lesson_plan as unknown as ICurriculumLessonPlan['lesson_plan'],
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
    .eq('user_curriculum_id', curriculumId)
    .eq('curriculum_subject_id', subjectId)
    .eq('curriculum_level_id', levelId)
    .eq('curriculum_topic_id', topicId)
    .eq('curriculum_lesson_id', lessonId)
    .single();

  return {
    slug: `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}/${topicId}/${lessonId}`,
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
      'user_curriculum_id, curriculum_subject_id, curriculum_level_id, curriculum_topic_id, curriculum_lesson_id',
    );

  const paths =
    data?.map((c) => ({
      curriculumId: c.user_curriculum_id,
      subjectId: c.curriculum_subject_id,
      levelId: c.curriculum_level_id,
      topicId: c.curriculum_topic_id,
      lessonId: c.curriculum_lesson_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
