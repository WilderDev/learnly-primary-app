import { PropsWithChildren } from 'react';
import { ScheduleProvider } from '@/app/@dashboard/(pages)/schedule-builder/ScheduleCtx';
import { GrayscaleProvider } from '@/lib/theme/GrayscaleCtx';
import { RightSidebarProvider } from '@/app/@dashboard/(navigation)/(right-sidebar)/RightSidebarCtx';

// * Component
export default function DashProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <RightSidebarProvider>
      <GrayscaleProvider>
        <ScheduleProvider>{children}</ScheduleProvider>
      </GrayscaleProvider>
    </RightSidebarProvider>
  );
}
