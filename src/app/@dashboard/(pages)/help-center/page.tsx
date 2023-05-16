import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';

export default function HelpCenterPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Help Center Form */}
        {/* TSK */}

        {/* Help Center Templates */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Help Center */}
        {/* TSK */}
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Help Center',
  description:
    'Homeschool parents Learnly dashboard help center page. Get help with anything related to homeschooling with a simple chat interface.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
