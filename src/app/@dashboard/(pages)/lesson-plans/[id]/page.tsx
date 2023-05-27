import { supabaseServer } from '@/lib/auth/supabaseServer';
import LessonPlanContainer from './LessonPlanContainer';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import { redirect } from 'next/navigation';
import LessonPlanContainerSkeleton from './LessonPlanContainerSkeleton';
import { fetchAssignmentCall } from './(assignments)/_actions';
import Assignment from './(assignments)/Assignment';

// * Params
interface IParams {
  params: {
    id: string;
  };
}

// * Page
export default async function LessonPlanPage({ params: { id } }: IParams) {
  // * Data
  const lessonPlan = await getLessonPlan(id);

  const assignment = await fetchAssignmentCall({ lesson_plan_id: id });

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
          <LessonPlanContainer lessonPlan={lessonPlan} />
        </DashPanel>

        {/* Lesson Plan Comments */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Comments" />
          {/* Comments */}
          {/* TSK */}
        </DashPanel>

        {/* Lesson Plan Similar Lessons */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="2xl:col-span-4">
        {/* Lesson Plan Assessments */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Assignment" />
          {/* Assessment */}
          <Assignment assignment={assignment} lessonPlan={lessonPlan} />

          {/* TSK */}
        </DashPanel>

        {/* Get Help on Lesson Plan */}
      </DashSideCol>
    </>
  );
}

// * Fetcher
// async function getLessonPlan(id: string) {
//   const supabase = supabaseServer();

//   const { data, error } = await supabase
//     .from('lesson_plans_with_creator_and_students_view')
//     .select('*, level:levels(name)')
//     .eq('id', id)
//     .single();

//   if (error) redirect('/lesson-creator');

//   return data as ILessonPlan;
// }
async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans_with_creator_and_students_view')
    .select('*, level:levels(name)')
    .eq('id', id)
    .single();

  if (error) redirect('/lesson-creator');

  // Fetch related data from the user_lesson_plans table
  const { data: userLessonPlanData, error: userLessonPlanError } =
    await supabase
      .from('user_lesson_plans')
      .select('id')
      .eq('lesson_plan_id', id)
      .maybeSingle();

  if (userLessonPlanError) throw userLessonPlanError;

  // Attach the related data to the response
  if (data) {
    (data as any).user_lesson_plan = userLessonPlanData;
  }

  return data as ILessonPlan;
}

// * Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const { title, image_path, subject, level, topic, tags } =
    await getLessonPlan(id);

  return {
    slug: `/lesson-plans/${id}`,
    title,
    image: image_path,
    keywords: ['Homeschool Lesson Plan', title, tags],
    description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
    openGraph: {
      title: title,
      description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
      images: [
        {
          url: image_path,
          width: 800,
          height: 600,
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
