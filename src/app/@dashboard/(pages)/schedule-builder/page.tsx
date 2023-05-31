import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import LessonTimeline from './LessonTimeline';
import ScheduleEventViewerPanel from './ScheduleEventViewerPanel';
import UnassignedLessonsPanel from './UnassignedLessonsPanel';

export default function ScheduleBuilderPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol className="xl:col-span-12">
        {/* Event Views (Daily, Weekly, Monthly, Yearly) */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Event Views" />
          <ScheduleEventViewerPanel />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="xl:col-span-12">
        {/* Timeline */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Timeline" />
          {/* @ts-expect-error Server Component */}
          <LessonTimeline />
        </DashPanel>

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

export const dynamic = 'force-dynamic';
