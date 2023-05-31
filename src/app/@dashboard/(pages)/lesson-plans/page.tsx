import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import UsersLessonPlansPanel from './UsersLessonPlansPanel';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';

export default async function LessonCreatorPage() {
  // * Data
  const { lessonPlans, lessonPlanTemplates } =
    await getLessonPlansAndTemplates();

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Lesson Plans */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Your Lesson Plans" />
          <UsersLessonPlansPanel lessons={lessonPlans as ILessonPlan[]} />
        </DashPanel>

        {/* POST_MVP: Wait until we get more users */}
        {/* Community Lesson Plans */}
        {/* <DashPanel colNum={1}>
          <DashPanelHeader title="Community Lesson Plans" />
        </DashPanel> */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Lesson Plan Templates */}
        {lessonPlanTemplates.length > 0 && (
          <DashPanel colNum={1}>
            <DashPanelHeader title="Your Lesson Plan Templates" />
            {/* TSK */}
          </DashPanel>
        )}
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Lesson Plans',
  description: 'View all of your lesson plans.',
};

export const dynamic = 'force-dynamic';

async function getLessonPlansAndTemplates() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: lessonPlans, error: lessonPlansError } = await supabase
    .from('lesson_plans_with_creator_and_students_view')
    .select('*')
    .eq('creator_id', session?.user.id)
    .order('completion_date', { ascending: false });

  const { data: lessonPlanTemplates, error: lessonPlanTemplatesError } =
    await supabase.from('lesson_plan_templates_with_students_view').select('*');

  if (lessonPlansError || lessonPlanTemplatesError)
    return {
      lessonPlans: [],
      lessonPlanTemplates: [],
    };

  return {
    lessonPlans,
    lessonPlanTemplates,
  };
}
