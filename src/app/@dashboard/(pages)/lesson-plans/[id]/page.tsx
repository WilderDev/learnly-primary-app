import { supabaseServer } from '@/lib/auth/supabaseServer';
import LessonPlanContainer from './LessonPlanContainer';
import {
  ILessonPlanWithCreator,
  IUserLessonPlanBasic,
} from '@/assets/typescript/lesson-plan';
import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import { redirect } from 'next/navigation';
import LessonPlanContainerSkeleton from './LessonPlanContainerSkeleton';
import Assignment from './(assignments)/Assignment';
import LessonPlanSimilarLessons from './LessonPlanSimilarLessons';

// * Params
export interface IParams {
  params: {
    id: string;
  };
}

// * Page
export default async function LessonPlanPage({ params: { id } }: IParams) {
  // * Data
  const lessonPlan = await getLessonPlan(id); // Get lesson plan
  const userLessonPlan = await getUserLessonPlan(id); // Get user lesson plan (if exists)
  const assignment = await getAssignmentByLessonPlanId(id); // Get assignment

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol className="2xl:col-span-8">
        {/* Lesson Plan Container (Output) */}
        <DashPanel
          colNum={1}
          suspenseFallback={<LessonPlanContainerSkeleton />}
        >
          <LessonPlanContainer
            lessonPlan={lessonPlan}
            userLessonPlan={userLessonPlan}
          />
        </DashPanel>

        {/* Lesson Plan Comments */}
        {/* <DashPanel colNum={2}>
          <DashPanelHeader title="Comments" />
        </DashPanel> */}

        {/* Lesson Plan Similar Lessons */}
        <DashPanel colNum={2} className="print:hidden">
          <DashPanelHeader title="Similar Lessons" />
          {/* @ts-expect-error Server Component */}
          <LessonPlanSimilarLessons lessonId={id} />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="2xl:col-span-4">
        {/* Lesson Plan Assessments */}
        <DashPanel colNum={1}>
          {/* <DashPanelHeader title="Assignment" /> */}
          {/* Assessment */}
          <Assignment
            assignmentContent={assignment?.content}
            lessonPlan={lessonPlan}
            userLessonPlan={userLessonPlan || undefined}
          />
        </DashPanel>

        {/* Get Help on Lesson Plan */}
      </DashSideCol>
    </>
  );
}

// * Fetcher
async function getAssignmentByLessonPlanId(id: string) {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .rpc('get_assignments_by_lesson_plan_and_teacher', {
      lesson_plan_uuid: id,
      teacher_uuid: session?.user.id!,
    })
    .select('content')
    .single();

  if (error || !data.content) return null;

  return data;
}

async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plan_with_creator_view')
    .select('*')
    .eq('id', id)
    .single();

  if (error) redirect('/lesson-creator');

  const transformedData: ILessonPlanWithCreator = {
    id: data.id!,
    title: data.title!,
    image_path: data.image_path!,
    content: data.content!,
    tags: data.tags!,
    subject_name: data.subject_name!,
    level_name: data.level_name!,
    topic_name: data.topic_name!,
    creator: {
      id: data.creator_id!,
      firstName: data.creator_first_name!,
      lastName: data.creator_last_name!,
      avatarUrl: data.creator_avatar_url!,
    },
  };

  return transformedData;
}

async function getUserLessonPlan(id: string) {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('user_lesson_plans')
    .select('*')
    .eq('lesson_plan_id', id)
    .eq('teacher_id', session?.user.id!)
    .maybeSingle();

  if (error || !data) return null;

  const transformedData: IUserLessonPlanBasic = {
    id: data.id!,
    completionDate: data.completion_date!,
    scheduledDate: data.scheduled_date!,
    studentIds: data.students!,
  };

  return transformedData;
}

// * Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const { title, image_path, subject_name, level_name, topic_name, tags } =
    await getLessonPlan(id);

  return {
    slug: `/lesson-plans/${id}`,
    title,
    image: image_path,
    keywords: ['Homeschool Lesson Plan', title, tags],
    description: `Homeschool lesson plan for ${topic_name} in ${subject_name} for ${level_name} grade`,
    openGraph: {
      title: title,
      description: `Homeschool lesson plan for ${topic_name} in ${subject_name} for ${level_name} grade`,
      images: [
        {
          url: image_path,
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
  };
}

// * Static Params
export async function generateStaticParams() {
  const supabase = supabaseServer();

  const { data: lessonPlans } = await supabase
    .from('lesson_plans')
    .select('id');

  const dynamicRoutes = lessonPlans?.map((lp) => ({ id: lp.id }));

  return dynamicRoutes;
}

export const revalidate = 0;
