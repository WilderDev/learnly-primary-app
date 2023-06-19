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

          <AdminDashCurrentUsers />
        </DashPanel>

        {/* Prospects / Trial Users */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Prospects / Trial Users" />

          <AdminDashTrialUsers />
        </DashPanel>

        {/* Past Users */}
        <DashPanel colNum={3}>
          <DashPanelHeader title="Past Users" />

          <AdminDashPastUsers />
        </DashPanel>
      </DashMainCol>

      {/* Side Panel */}
      <DashSideCol>
        {/* Statistics */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Statistics" />

          <AdminDashStatistics />
        </DashPanel>

        {/* Webhooks */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Webhooks" />

          <AdminDashWebhooks />
        </DashPanel>
      </DashSideCol>
    </>
  );
}
