import { Table } from '@/lib/components/ui/Table';

// * Data
const headers: string[] = [
  'Student',
  'Title',
  'Status',
  'Subject',
  'Assignment Date',
  'Due Date',
];

// * Component
export default function AssignmentsTableHead() {
  // * Render
  return (
    <Table.Head>
      <Table.Row>
        {/* Table Columns */}
        {headers.map((item, i) => (
          <Table.Header isFirst={i === 0} isLast={false} key={i}>
            {item}
          </Table.Header>
        ))}

        {/* More Column */}
        <Table.Header isFirst={false} isLast={true}>
          More
        </Table.Header>
      </Table.Row>
    </Table.Head>
  );
}
