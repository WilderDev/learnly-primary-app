import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import HomeWelcomePanel from './HomeWelcomePanel';
import UpcomingLessonsCards from './UpcomingLessonsCards';
import RecentlyCompletedLessonsAccordions from './RecentlyCompletedLessonsAccordions';
import MiniCalendar from '../schedule-builder/MiniCalendar';
import AssignmentsTable from './AssignmentsTable';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import AssignmentsFormModal from './AssignmentsFormModal';
import AssignmentForm from './AssignmentForm';

export default async function ParentDashboardHomePage() {
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
            hasModal={true}
            modalSize="lg"
            modalContent={<h1>TSK. Modal to add form. Less options</h1>}
          />
          {/* @ts-expect-error Server Component */}
          <UpcomingLessonsCards />
        </DashPanel>

        {/* Home Assignments */}
        <DashPanel colNum={3}>
          <DashPanelHeader
            title="Assignments"
            ctaText="View All Assignments"
            ctaLink="/assignments"
            hasModal={true}
            modalSize="lg"
            modalContent={
              <div className="h-full">
                <AssignmentForm isModal={true} />
              </div>
            }
          />
          <AssignmentsTable />
          {/* TSK */}
        </DashPanel>
      </DashMainCol>

      {/* Side Col */}
      <DashSideCol>
        {/* Home Completed Lessons */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Recently Completed" />
          {/* @ts-expect-error Server Component */}
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
