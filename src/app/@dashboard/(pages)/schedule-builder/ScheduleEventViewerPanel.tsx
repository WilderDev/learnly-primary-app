import { IScheduleTabItem } from '@/assets/typescript/schedule';
import UpcomingScheduleView from './UpcomingScheduleView';
import WeeklyScheduleView from './WeeklyScheduleView';
import ScheduleEventViewsHeader from './ScheduleEventViewsHeader';
import ScheduleEventViewsContent from './ScheduleEventViewsContent';

// * Data
const scheduleTabs: IScheduleTabItem[] = [
  {
    label: 'Upcoming',
    component: UpcomingScheduleView,
  },
  // Daily
  {
    label: 'Weekly',
    component: WeeklyScheduleView,
  },
  // Monthly
  // Yearly
];

export default function ScheduleEventViewerPanel() {
  // * Render
  return (
    <div className="flex flex-col rounded-lg shadow-lg">
      {/* Header */}
      <ScheduleEventViewsHeader />

      {/* Content */}
      <ScheduleEventViewsContent tabs={scheduleTabs} />
    </div>
  );
}
