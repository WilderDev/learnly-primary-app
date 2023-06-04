import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import { IAssignmentWithLessonPlan } from '@/assets/typescript/assignment';
import { ISimpleStudent } from '@/assets/typescript/user';
import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableBody from '../(home)/(assignments-table)/AssignmentsTableBody';
import AssignmentsTableHead from '../(home)/(assignments-table)/AssignmentsTableHead';
import { revalidatePath } from 'next/cache';

export default async function AssignmentsPage() {
  const {
    upcomingAssignments,
    inProgessAssignments,
    completedAssignments,
    canceledAssignments,
  } = await getAssignmentsWithLessonDetails();

  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Upcoming Assignments" />
          {upcomingAssignments?.length > 0 ? (
            <Table>
              <AssignmentsTableHead />

              <AssignmentsTableBody assignments={upcomingAssignments} />
            </Table>
          ) : (
            <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
              No Upcoming Assignments
            </p>
          )}
        </DashPanel>

        <DashPanel colNum={1}>
          <DashPanelHeader title="In Progress Assignments" />
          {inProgessAssignments?.length > 0 ? (
            <Table>
              <AssignmentsTableHead />

              <AssignmentsTableBody assignments={inProgessAssignments} />
            </Table>
          ) : (
            <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
              No Assignments In Progress
            </p>
          )}
        </DashPanel>

        <DashPanel colNum={1}>
          <DashPanelHeader title="Completed Assignments" />
          {completedAssignments?.length > 0 ? (
            <Table>
              <AssignmentsTableHead />

              <AssignmentsTableBody assignments={completedAssignments} />
            </Table>
          ) : (
            <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
              No Completed Assignments
            </p>
          )}
        </DashPanel>

        <DashPanel colNum={1}>
          <DashPanelHeader title="Canceled Assignments" />
          {canceledAssignments?.length > 0 ? (
            <Table>
              <AssignmentsTableHead />

              <AssignmentsTableBody assignments={canceledAssignments} />
            </Table>
          ) : (
            <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
              No Canceled Assignments
            </p>
          )}
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
async function getAssignmentsWithLessonDetails() {
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('assignments_with_details_view')
    .select('*')
    .eq('teacher_id', session?.user.id);

  if (error) {
    return {
      upcomingAssignments: [],
      inProgessAssignments: [],
      completedAssignments: [],
      canceledAssignments: [],
    };
  }

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

  // Sort assignments
  const upcomingAssignments = transformedData.filter(
    (assignment) => assignment.status === 'PENDING'
  );
  const inProgessAssignments = transformedData.filter(
    (assignment) => assignment.status === 'IN_PROGRESS'
  );
  const completedAssignments = transformedData.filter(
    (assignment) => assignment.status === 'COMPLETED'
  );
  const canceledAssignments = transformedData.filter(
    (assignment) => assignment.status === 'CANCELED'
  );

  return {
    upcomingAssignments,
    inProgessAssignments,
    completedAssignments,
    canceledAssignments,
  };
}
