import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import HomeWelcomePanel from './HomeWelcomePanel';
import UpcomingLessonsCards from './UpcomingLessonsCards';
import RecentlyCompletedLessonsAccordions from './RecentlyCompletedLessonsAccordions';
import MiniCalendar from '../schedule-builder/MiniCalendar';

export default function ParentDashboardHomePage() {
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
          {/* @ts-expect-error Server Component */}
          <UpcomingLessonsCards />
        </DashPanel>

        {/* Home Assignments */}
        <DashPanel colNum={3}>
          <DashPanelHeader title="Assignments" />
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
