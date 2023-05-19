import { PropsWithChildren } from 'react';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';
import TopHeader from '../(navigation)/(top-header)/TopHeader';
import DashContainer from '../(layout)/DashContainer';
import DashProviders from '@/lib/components/providers/DashProviders';
import RightSidebar from '../(navigation)/(right-sidebar)/RightSidebar';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import LeftSidebarMobile from '../(navigation)/(left-sidebar)/(mobile)/LeftSidebarMobile';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashProviders>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Left Sidebar Mobile */}
      <LeftSidebarMobile />

      {/* Top Header */}
      <TopHeader />

      {/* Mobile Search Bar */}
      {/* TSK */}

      {/* Right Sidebar */}
      <RightSidebar>
        <DashPanel>
          <DashPanelHeader title="Quick Report" />
          {/* Quick Report */}
          {/* TSK */}
          Under Construction
        </DashPanel>
      </RightSidebar>

      {/* Main Content */}
      <DashContainer>{children}</DashContainer>

      {/* Chat Bubble (Bottom Right) */}
      {/* TSK */}
    </DashProviders>
  );
}
