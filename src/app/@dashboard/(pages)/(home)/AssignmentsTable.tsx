import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableHead from './(assignments-table)/AssignmentsTableHead';
import AssignmentsTableBody from './(assignments-table)/AssignmentsTableBody';

interface IProps {
  assignments: any[];
}
export default function AssignmentsTable({ assignments }: IProps) {
  return (
    <>
      {assignments.length > 0 ? (
        <Table>
          <AssignmentsTableHead />
          <AssignmentsTableBody assignments={assignments} />
        </Table>
      ) : (
        <p className="text-sm font-semibold text-slate-500">No assignments</p>
      )}
    </>
  );
}
