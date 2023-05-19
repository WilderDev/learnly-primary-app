import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import HelpCenterChat from './HelpCenterChat';

export default function HelpCenterPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol className="xl:col-span-7 2xl:col-span-7">
        {/* Help Center Chat */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Help Center Chat" />
          <HelpCenterChat />
        </DashPanel>

        {/* Help Center Prompts */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Help Center Prompts" />
          {/* TSK */}
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol className="xl:col-span-5 2xl:col-span-5">
        {/* Help Center FAQ */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Help Center FAQ" />
          {/* TSK */}
        </DashPanel>
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
