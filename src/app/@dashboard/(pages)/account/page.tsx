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

        {/* Add Credit Card for 50% off if on trial */}
        {/* TSK */}
      </DashSideCol>
    </AccountProvider>
  );
}

export const metadata = {
  title: 'Your Account',
  description:
    'Homeschool parents Learnly dashboard account page. Account settings for homeschool parents.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
