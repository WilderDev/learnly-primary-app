import DashMainCol from './(layout)/DashMainCol';
import DashSideCol from './(layout)/DashSideCol';

export default function ParentDashboardHomePage() {
  return (
    <>
      {/* Main Col */}
      <DashMainCol>
        {/* Home Welcome / Streak */}
        {/* TSK */}

        {/* Home Upcoming Lessons */}
        {/* TSK */}

        {/* Home Assignments */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Col */}
      <DashSideCol>
        {/* Home Completed Lessons */}
        {/* TSK */}

        {/* Home Calendar */}
        {/* TSK */}
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Home',
  description: 'TSK',
};

export const dynamic = 'force-dynamic';
