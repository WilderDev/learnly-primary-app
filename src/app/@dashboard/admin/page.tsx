import DashMainCol from '../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../(layout)/DashPanel';
import DashSideCol from '../(layout)/DashSideCol';
import AdminDashCurrentUsers from './AdminDashCurrentUsers';
import AdminDashPastUsers from './AdminDashPastUsers';
import AdminDashStatistics from './AdminDashStatistics';
import AdminDashTrialUsers from './AdminDashTrialUsers';
import AdminDashWebhooks from './AdminDashWebhooks';

export default function AdminPage() {
  // * Render
  return (
    <>
      {/* Main Panel */}
      <DashMainCol>
        {/* Current Users */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Current Users" />

          {/* @ts-expect-error Server Component */}
          <AdminDashCurrentUsers />
        </DashPanel>

        {/* Prospects / Trial Users */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Prospects / Trial Users" />

          {/* @ts-expect-error Server Component */}
          <AdminDashTrialUsers />
        </DashPanel>

        {/* Past Users */}
        <DashPanel colNum={3}>
          <DashPanelHeader title="Past Users" />

          {/* @ts-expect-error Server Component */}
          <AdminDashPastUsers />
        </DashPanel>
      </DashMainCol>

      {/* Side Panel */}
      <DashSideCol>
        {/* Statistics */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Statistics" />

          {/* @ts-expect-error Server Component */}
          <AdminDashStatistics />
        </DashPanel>

        {/* Webhooks */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Webhooks" />

          {/* @ts-expect-error Server Component */}
          <AdminDashWebhooks />
        </DashPanel>
      </DashSideCol>
    </>
  );
}
