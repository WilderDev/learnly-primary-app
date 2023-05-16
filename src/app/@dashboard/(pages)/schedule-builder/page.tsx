import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';

export default function ScheduleBuilderPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Schedule Builder TSK */}
        {/* TSK */}

        {/* Schedule Builder TSK */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Schedule Builder TSK */}
        {/* TSK */}
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Schedule Builder',
  description: 'Homeschool parents Learnly dashboard schedule builder page.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
