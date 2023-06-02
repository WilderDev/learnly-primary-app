import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';

export default async function AssignmentsPage() {
  const { upcomingAssignments, completedAssignments } =
    await getAssignmentsByStatus();

  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Upcoming Assignments" />
          {/* TSK */}
        </DashPanel>

        <DashPanel colNum={2}>
          <DashPanelHeader title="Completed Assignments" />
        </DashPanel>

        {/* ... */}
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="TSK" />
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}

// * Fetcher
async function getAssignmentsByStatus() {
  const supabase = supabaseServer();

  // ... TSK (use a view to get what you want)

  return {
    upcomingAssignments: [],
    completedAssignments: [],
  };
}
