import { Database } from './db';

export type TTeachingStrategy =
  Database['public']['Enums']['teaching_strategy'];
export type TLessonDetailLevel =
  Database['public']['Enums']['lesson_detail_level'];
export type TTeachingTool = Database['public']['Enums']['teaching_tool'];
export type TLessonStructure = Database['public']['Enums']['lesson_structure'];
export type TLearningStyle = Database['public']['Enums']['learning_style'];
export type TGoal = Database['public']['Enums']['student_goals'];
export type TLearningEnvironment =
  Database['public']['Enums']['environment_preferences'];
export type TLearningResource =
  Database['public']['Enums']['resource_preferences'];
export type TSpecialNeed = Database['public']['Enums']['learning_disabilities'];

export interface IUserSubscription {
  isAuthorized: boolean;
  isEndingSoon: boolean;
  trialEnd: string | null;
  billingPortalSessionUrl: string | null;
  status: Database['public']['Enums']['subscription_status'];
  stripeSubscriptionId: string | null;
  stripeCustomerId: string | null;
  renewalDate: string | null;
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
    teachingStrategies: TTeachingStrategy[];
    lessonDetailLevel: TLessonDetailLevel;
    teachingTools: TTeachingTool[];
    lessonStructure: TLessonStructure | null;
  };
}

export interface UserStudent {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  birthday: string;
  learningStyles: TLearningStyle[];
  favoriteSubjects: string[];
  interests: string[];
  goals: TGoal[];
  learningEnvironments: TLearningEnvironment[];
  learningResources: TLearningResource[];
  specialNeeds: TSpecialNeed[];
}

export interface ISimpleStudent {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
