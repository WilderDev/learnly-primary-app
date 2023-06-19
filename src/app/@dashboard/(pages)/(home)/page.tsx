import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import HomeWelcomePanel from './HomeWelcomePanel';
import UpcomingLessonsCards from './UpcomingLessonsCards';
import RecentlyCompletedLessonsAccordions from './RecentlyCompletedLessonsAccordions';
import MiniCalendar from '../schedule-builder/MiniCalendar';
import AssignmentsTable from './AssignmentsTable';
import AssignmentCreatorModal from './(assignments-table)/AssignmentCreatorModal';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function ParentDashboardHomePage() {
  // * Data
  const lessonPlansWithoutAssignment =
    await getUserLessonPlansWithoutAssignment();

  // * Render
  return (
    <>
      {/* Main Col */}
      <DashMainCol>
        {/* Home Welcome / Streak */}
        <HomeWelcomePanel />

        {/* Home Upcoming Lessons */}
        <DashPanel colNum={2}>
          <DashPanelHeader
            title="Upcoming Lessons"
            ctaText="View All Lessons"
            ctaLink="/lesson-plans"
            modalSize="lg"
          />
          {/* @ts-ignore */}
          <UpcomingLessonsCards />
        </DashPanel>

        {/* Home Assignments */}
        <DashPanel colNum={3}>
          <DashPanelHeader
            title="Assignments"
            ctaText="View All Assignments"
            ctaLink="/assignments"
            hideCta={false}
            hasModal={true}
            modalSize="lg"
            modalContent={
              <AssignmentCreatorModal
                lessonPlans={lessonPlansWithoutAssignment}
              />
            }
            noCloseOnOutsideClick={true}
          />
          {/* @ts-ignore */}
          <AssignmentsTable />
        </DashPanel>
      </DashMainCol>

      {/* Side Col */}
      <DashSideCol>
        {/* Home Completed Lessons */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Recently Completed" />
          {/* @ts-ignore */}
          <RecentlyCompletedLessonsAccordions />
        </DashPanel>

        {/* Home Calendar */}
        <DashPanel colNum={2}>
          <DashPanelHeader
            title="Your Calendar"
            ctaText="View Schedule"
            ctaLink="/schedule-builder"
          />
          <MiniCalendar />
        </DashPanel>
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Home | Learnly',
  description: 'Homeschool parents Learnly dashboard home page.',
};

export const dynamic = 'force-dynamic';

async function getUserLessonPlansWithoutAssignment() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans_without_assignments_view')
    .select('*');

  if (error) return [];

  return data as {
    user_lesson_plan_id: string;
    lesson_plan_name: string;
    lesson_plan_content: string;
    lesson_plan_level_name: string;
  }[];
}
