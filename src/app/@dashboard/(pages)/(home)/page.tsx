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
import BirthdayModal from './BirthdayModal';
import Activities from './Activities';
import ActivitiesCreateModal from './(activites)/ActivitiesCreateModal';

export default async function ParentDashboardHomePage() {
  // * Data
  const lessonPlansWithoutAssignment =
    await getUserLessonPlansWithoutAssignment();

  const activities = await getActivities();

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

        {/* Activities */}
        <DashPanel colNum={1}>
          <DashPanelHeader
            title="Activities"
            hasModal={true}
            modalSize="sm"
            modalContent={<ActivitiesCreateModal />}
          />
          <Activities activities={activities} />
        </DashPanel>
      </DashSideCol>

      {/* Birthday Modal */}
      <BirthdayModal />
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

async function getActivities() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('activities')
    .select('*, subjects(name), levels(name)')
    .eq('creator_id', session?.user.id);

  if (error) return [];

  console.log(data);

  return data as {
    activity_timestamp: string;
    created_at: string;
    creator_id: string;
    id: string;
    level_id: string;
    subject_id: string;
    updated_at: string;
    subjects: { name: string }[];
    levels: { name: string }[];
  }[];
}
