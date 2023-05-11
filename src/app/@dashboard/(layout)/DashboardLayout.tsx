import { PropsWithChildren } from 'react';
import DashboardContainer from './DashboardContainer';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';
import TopHeader from '../(navigation)/(top-header)/TopHeader';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Top Header */}
      <TopHeader />

      {/* Mobile Search Bar */}
      {/* TSK */}

      {/* Right Sidebar */}
      {/* TSK */}

      {/* Main Content */}
      <DashboardContainer>{children}</DashboardContainer>

      {/* Chat Bubble (Bottom Right) */}
      {/* TSK */}
    </>
  );
}

export const dynamic = 'force-dynamic';
