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
import { IAssignment } from '@/assets/typescript/assignment';

import { AssignmentCreator } from './AssignmentCreator';
import { fetchAssignmentCall } from './(assignments)/_actions';
import Assignment from './(assignments)/Assignment';
// import { useAssignmentStore } from '@/lib/store/assignmentStore';

// * Props
interface IProps {
  params: {
    id: string;
  };
}

// * Component
export default async function LessonPlanPage({ params: { id } }: IProps) {
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

async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans_with_creator_and_students_view')
    .select('*, level:levels(name)')
    .eq('id', id)
    .single();

  if (error) redirect('/lesson-creator');

  return data as ILessonPlan;
}

export async function generateMetadata({ params: { id } }: IProps) {
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

export async function generateStaticParams() {
  const supabase = supabaseServer();

  const { data: lessonPlans } = await supabase
    .from('lesson_plans')
    .select('id');

  const dynamicRoutes = lessonPlans?.map((lp) => ({ id: lp.id }));

  return dynamicRoutes;
}
