import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableHead from './(assignments-table)/AssignmentsTableHead';
import AssignmentsTableBody from './(assignments-table)/AssignmentsTableBody';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { ISimpleStudent } from '@/assets/typescript/user';
import { IAssignmentWithLessonPlan } from '@/assets/typescript/assignment';
import MobileAssignmentsTable from './(assignments-table)/MobileAssignmentsTable';

// * Component
export default async function AssignmentsTable() {
  const assignments = await getAssignmentsWithLessonDetails();

  return assignments?.length > 0 ? (
    <>
      {/* Under XL Screens render the Mobile Assignemts Table */}
      <Table className="hidden 2xl:block">
        <AssignmentsTableHead />

        <AssignmentsTableBody assignments={assignments} />
      </Table>
      <MobileAssignmentsTable assignments={assignments} />
    </>
  ) : (
    <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
      No assignments found
    </p>
  );
}

async function getAssignmentsWithLessonDetails() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('assignments_with_details_view')
    .select('*')
    .eq('teacher_id', session?.user.id);

  if (error) return [];

  const transformedData: IAssignmentWithLessonPlan[] = data.map(
    (assignment) => ({
      id: assignment.assignment_id!,
      title: assignment.assignment_title!,
      content: assignment.assignment_content!,
      status: assignment.assignment_status!,
      assignedOn: assignment.assigned_on!,
      dueOn: assignment.due_date!,
      lessonPlan: {
        id: assignment.lesson_plan_id!,
        title: assignment.lesson_plan_title!,
        subject: assignment.lesson_plan_subject_name!,
        students: (assignment.students as any[])?.map((s) => ({
          id: s.id!,
          firstName: s.first_name!,
          lastName: s.last_name!,
          avatarUrl: s.avatar_url!,
        })) as ISimpleStudent[],
      },
    })
  );

  return transformedData;
}
