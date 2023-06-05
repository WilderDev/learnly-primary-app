import { PropsWithChildren } from 'react';
import { ScheduleProvider } from '@/app/@dashboard/(pages)/schedule-builder/ScheduleCtx';
import { GrayscaleProvider } from '@/lib/theme/GrayscaleCtx';
import { RightSidebarProvider } from '@/app/@dashboard/(navigation)/(right-sidebar)/RightSidebarCtx';
import { CommandPaletteProvider } from '@/app/@dashboard/(navigation)/(top-header)/CommandPaletteCtx';

// * Component
export default function DashProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    <RightSidebarProvider>
      <GrayscaleProvider>
        <CommandPaletteProvider>
          <ScheduleProvider>{children}</ScheduleProvider>
        </CommandPaletteProvider>
      </GrayscaleProvider>
    </RightSidebarProvider>
  );
}
