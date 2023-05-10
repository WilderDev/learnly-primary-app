import { PropsWithChildren } from 'react';
import DashboardContainer from './DashboardContainer';
import LeftSidebar from '../(navigation)/(left-sidebar)/LeftSidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Top Header */}
      {/* TSK */}

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
