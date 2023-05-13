import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';

export default function AccountPage() {
  return (
    <>
      {/* Side Column */}
      <DashSideCol>
        {/* Account Navigation */}
        {/* TSK */}
      </DashSideCol>

      {/* Main Column */}
      <DashMainCol>
        {/* Account TSK */}
        {/* TSK */}

        {/* Account TSK */}
        {/* TSK */}
      </DashMainCol>
    </>
  );
}

export const metadata = {
  title: 'Your Account',
  description: 'TSK',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
