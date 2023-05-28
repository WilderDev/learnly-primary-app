import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import { AccountProvider } from './AccountCtx';
import AccountNav from './AccountNav';

export default function AccountPage() {
  return (
    <AccountProvider>
      {/* Side Column */}
      <DashSideCol>
        {/* Account Navigation */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Account" />
          <AccountNav />
        </DashPanel>
      </DashSideCol>
    </AccountProvider>
  );
}

export const metadata = {
  title: 'Your Account',
  description:
    'Homeschool parents Learnly dashboard account page. Account settings for homeschool parents.',
};

export const dynamic = 'force-dynamic';
