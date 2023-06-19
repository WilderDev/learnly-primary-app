import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import ChatContainer from './ChatContainer';
import { HelpCenterProvider } from './HelpCenterCtx';
import HelpCenterFAQ from './HelpCenterFAQ';
import HelpCenterPrompts from './HelpCenterPrompts';
import HelpCenterSupportTicket from './HelpCenterSupportTicket';

export default function HelpCenterPage() {
  return (
    <>
      <HelpCenterProvider>
        {/* Main Column */}
        <DashMainCol className="2xl:col-span-8">
          {/* Help Center Chat */}
          <DashPanel colNum={1}>
            <DashPanelHeader title="Help Center Chat" />
            <ChatContainer />
          </DashPanel>

          {/* Help Center Prompts */}
          <DashPanel colNum={2}>
            <DashPanelHeader title="Help Center Prompts" />
            <HelpCenterPrompts />
          </DashPanel>
        </DashMainCol>
      </HelpCenterProvider>

      {/* Side Column */}
      <DashSideCol className="2xl:col-span-4">
        {/* Help Center FAQ */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Help Center FAQ" />
          <HelpCenterFAQ />
        </DashPanel>

        {/* Help Center Support Ticket */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Create Support Ticket" />
          <HelpCenterSupportTicket />
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

export const dynamic = 'force-dynamic';
