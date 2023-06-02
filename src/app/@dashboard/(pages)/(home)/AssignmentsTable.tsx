import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableHead from './(assignments-table)/AssignmentsTableHead';
import AssignmentsTableBody from './(assignments-table)/AssignmentsTableBody';
import { supabaseServer } from '@/lib/auth/supabaseServer';

// * Component
export default async function AssignmentsTable() {
  const assignments = await getAssignmentsWithLessonDetails();

  return assignments?.length > 0 ? (
    <Table>
      <AssignmentsTableHead />

      <AssignmentsTableBody assignments={assignments} />
    </Table>
  ) : (
    <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
      No assignments found
    </p>
  );
}

async function getAssignmentsWithLessonDetails() {
  const supabase = supabaseServer();

  // ... TSK

  return [];
}
