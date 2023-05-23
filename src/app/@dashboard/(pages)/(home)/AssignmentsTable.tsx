import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableHead from './(assignments-table)/AssignmentsTableHead';
import AssignmentsTableBody from './(assignments-table)/AssignmentsTableBody';

interface IProps {
  assignments: any[];
}
export default function AssignmentsTable({ assignments }: IProps) {
  const dumbAssignments = [
    {
      id: '07e84099-d585-4954-b4ea-fe3a63f6d700',
      status: 'PENDING',
      student: { name: 'joseph' },
      title: 'Exploring The Jungle',
    },

    {
      id: '07e84099-d585-4954-b4ea-fe3a63f6d704',
      status: 'IN_PROGRESS',
      student: { name: 'joseph' },
      title: 'Exploring The Wild',
    },
  ];

  return (
    <Table>
      <AssignmentsTableHead />
      <AssignmentsTableBody assignments={dumbAssignments} />
    </Table>
  );
}
