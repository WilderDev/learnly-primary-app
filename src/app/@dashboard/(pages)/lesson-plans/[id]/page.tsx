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

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol className="2xl:col-span-8">
        {/* Lesson Plan Container (Output) */}
        <DashPanel colNum={1}>
          <LessonPlanContainer lessonPlan={lessonPlan} />
        </DashPanel>

        {/* Lesson Plan Comments */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Comments" />
          {/* Comments */}
          {/* TSK */}
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="2xl:col-span-4">
        {/* Lesson Plan Assessments */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Assessments" />
          {/* Assessments */}
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}

async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans')
    .select('*, creator:creator_id(first_name, last_name, avatar_url)')
    .eq('id', id)
    .single();

  console.log('data:', data);
  console.log('error:', error);

  if (error) redirect('/lesson-creator');

  return data as ILessonPlan;
}
