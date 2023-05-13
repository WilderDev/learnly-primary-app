import { PropsWithChildren } from 'react';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';
import TopHeader from '../(navigation)/(top-header)/TopHeader';
import DashboardContainer from '../(layout)/DashboardContainer';

export default function DashboardLayout({ children }: any) {
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
