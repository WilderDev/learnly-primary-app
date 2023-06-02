export type TAssignmentStatus =
  Database['public']['Enums']['assignment_status'];

export interface IAssignment {
  id: string;
  title: string;
  content: string;
  lesson_plan_id: string;
  creator_id: string;
  user_lesson_plan_id: string;
  status: TAssignmentStatus;
  assigned_on: string;
  due_date: string;
}
