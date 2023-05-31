'use client';

import { IScheduleTabItem } from '@/assets/typescript/schedule';
import { useSchedule } from './ScheduleCtx';
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  tabs: IScheduleTabItem[];
}

export default function ScheduleEventViewsContent({ tabs }: IProps) {
  // * Context / Hooks
  const { view } = useSchedule();

  // * Render
  return (
    <div className="flex-1 overflow-y-auto rounded-b-lg bg-white px-2 sm:px-6 py-4 dark:bg-navy-800">
      {tabs?.map(({ label, component: Component }) => (
        <div
          className={cn(view === label.toLowerCase() ? 'block' : 'hidden')}
          data-view={view}
          data-active-view={view}
          key={label}
        >
          <Component />
        </div>
      ))}
    </div>
  );
}
