import { PropsWithChildren } from 'react';
import { ScheduleProvider } from '@/app/@dashboard/(pages)/schedule-builder/ScheduleCtx';
import { GrayscaleProvider } from '@/lib/theme/GrayscaleCtx';

// * Component
export default function DashProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <GrayscaleProvider>
      <ScheduleProvider>{children}</ScheduleProvider>
    </GrayscaleProvider>
  );
}
