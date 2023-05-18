import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import ScheduleEventViewerPanel from './ScheduleEventViewerPanel';
import UnassignedLessonsPanel from './UnassignedLessonsPanel';

export default function ScheduleBuilderPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Event Views (Daily, Weekly, Monthly, Yearly) */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Event Views" />
          <ScheduleEventViewerPanel />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Past Events */}
        {/* TSK */}

        {/* Unscheduled Lessons */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Unscheduled Lessons" />
          {/* @ts-expect-error Server Component */}
          <UnassignedLessonsPanel />
        </DashPanel>
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Schedule Builder',
  description: 'Homeschool parents Learnly dashboard schedule builder page.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
