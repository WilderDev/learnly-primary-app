import { PropsWithChildren } from 'react';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';
import TopHeader from '../(navigation)/(top-header)/TopHeader';
import DashContainer from '../(layout)/DashContainer';

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
      <DashContainer>{children}</DashContainer>

      {/* Chat Bubble (Bottom Right) */}
      {/* TSK */}
    </>
  );
}
