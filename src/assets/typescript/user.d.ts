import { Database } from './db';

export type ITeachingStrategy =
  Database['public']['Enums']['teaching_strategy'];
export type ILessonDetailLevel =
  Database['public']['Enums']['lesson_detail_level'];
export type ITeachingTool = Database['public']['Enums']['teaching_tool'];
export type ILessonStructure = Database['public']['Enums']['lesson_structure'];

export interface IUserSubscription {
  isAuthorized: boolean;
  isEndingSoon: boolean;
  trialEnd: string | null;
  billing_portal_session_url: string | null;
  status: Database['public']['Enums']['subscription_status'];
}

export interface Me {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  status: Database['public']['Enums']['profile_status'];
  type: Database['public']['Enums']['profile_type'];
  role: Database['public']['Enums']['user_role'];
  teachingPreferences: {
    teachingStrategies: ITeachingStrategy[];
    lessonDetailLevel: ILessonDetailLevel;
    teachingTools: ITeachingTool[];
    lessonStructure: ILessonStructure | null;
  };
}

export interface UserStudent {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  birthday: string;
  learningStyles: Database['public']['Enums']['learning_style'][];
}
