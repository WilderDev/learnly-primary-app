import { PropsWithChildren } from 'react';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';
import TopHeader from '../(navigation)/(top-header)/TopHeader';
import DashContainer from '../(layout)/DashContainer';
import DashProviders from '@/lib/components/providers/DashProviders';
import RightSidebar from '../(navigation)/(right-sidebar)/RightSidebar';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import LeftSidebarMobile from '../(navigation)/(left-sidebar)/(mobile)/LeftSidebarMobile';
import DashChatBubble from '../(layout)/DashChatBubble';
import dynamic from 'next/dynamic';
import RightSidebarQuickReport from '../(navigation)/(right-sidebar)/RightSidebarQuickReport';

const OnboardingTourContainer = dynamic(
  () => import('../(navigation)/(onboarding-tour)/OnboardingTourContainer'),
  {
    ssr: false,
  },
);

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashProviders>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Left Sidebar Mobile */}
      <LeftSidebarMobile />

      {/* Top Header */}
      <TopHeader />

      {/* Mobile Search Bar */}
      {/* <TopHeaderMobile /> */}

      {/* Right Sidebar */}
      <RightSidebar>
        <DashPanel>
          <DashPanelHeader title="Quick Report" />
          {/* Quick Report */}
          <RightSidebarQuickReport />
        </DashPanel>
      </RightSidebar>

      {/* Main Content */}
      <DashContainer>{children}</DashContainer>

      {/* Chat Bubble (Bottom Right) */}
      <DashChatBubble />

      {/* Onboarding Tour */}
      {/* @ts-ignore */}
      <OnboardingTourContainer />
    </DashProviders>
  );
}
