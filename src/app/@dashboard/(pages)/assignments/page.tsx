import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import { IAssignmentWithLessonPlan } from '@/assets/typescript/assignment';
import { ISimpleStudent } from '@/assets/typescript/user';
import { Table } from '@/lib/components/ui/Table';
import AssignmentsTableBody from '../(home)/(assignments-table)/AssignmentsTableBody';
import AssignmentsTableHead from '../(home)/(assignments-table)/AssignmentsTableHead';
import MobileAssignmentsTable from '../(home)/(assignments-table)/MobileAssignmentsTable';
import AssignmentsAdd from './AssignmentsAdd';

export default async function AssignmentsPage() {
  // Data
  const {
    upcomingAssignments,
    inProgessAssignments,
    completedAssignments,
    canceledAssignments,
  } = await getAssignmentsWithLessonDetails();
  const lessonPlansWithoutAssignments =
    await getUserLessonPlansWithoutAssignment();

  // Assignment Panels
  const assignemtPanels = [
    {
      title: 'Upcoming Assignments',
      assignments: upcomingAssignments,
      text: 'No Upcoming Assignments',
    },
    {
      title: 'In Progress Assignments',
      assignments: inProgessAssignments,
      text: 'No Assignments In Progress',
    },
    {
      title: 'Completed Assignments',
      assignments: completedAssignments,
      text: 'No Completed Assignments',
    },
    {
      title: 'Canceled Assignments',
      assignments: canceledAssignments,
      text: 'No Canceled Assignments',
    },
  ];

  return (
    <>
      <DashMainCol>
        {assignemtPanels.map((panel, i) => (
          <DashPanel colNum={1} key={i}>
            <DashPanelHeader title={panel.title} />

            {panel.assignments?.length > 0 ? (
              <>
                {/* Default Table */}
                <Table className="hidden 2xl:block">
                  <AssignmentsTableHead />

                  <AssignmentsTableBody assignments={panel.assignments} />
                </Table>

                {/* Mobile Table */}
                <MobileAssignmentsTable assignments={panel.assignments} />
              </>
            ) : (
              <p className="text-sm font-semibold text-slate-600 dark:text-navy-200">
                {panel.text}
              </p>
            )}
          </DashPanel>
        ))}
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Awaiting Assignments" />

          {/* Assignments Quick Add */}
          <AssignmentsAdd
            lessonPlansWithoutAssignments={lessonPlansWithoutAssignments}
          />
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
    .eq('teacher_id', session?.user.id)
    .limit(20);

  if (error) {
    return {
      upcomingAssignments: [],
      inProgessAssignments: [],
      completedAssignments: [],
      canceledAssignments: [],
    };
  }

  // Transform Assignments
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

async function getUserLessonPlansWithoutAssignment() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans_without_assignments_view')
    .select('*')
    .limit(10);

  if (error) return [];

  return data as {
    user_lesson_plan_id: string;
    lesson_plan_name: string;
    lesson_plan_content: string;
    lesson_plan_level_name: string;
  }[];
}
