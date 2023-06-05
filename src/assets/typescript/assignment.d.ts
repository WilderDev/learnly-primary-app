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

export interface IAssignmentWithLessonPlan {
  id: string;
  title: string;
  content: string;
  status: TAssignmentStatus;
  assignedOn: string;
  dueOn: string;
  lessonPlan: {
    id: string;
    title: string;
    subject: string;
    students: ISimpleStudent[];
  };
}

export interface ILessonPlanWithoutAssignments {
  user_lesson_plan_id: string;
  lesson_plan_name: string;
  lesson_plan_content: string;
  lesson_plan_level_name: string;
}
