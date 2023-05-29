import { Database } from './db';
import {
  TGoal,
  TLearningEnvironment,
  TLearningResource,
  TLearningStyle,
  TSpecialNeed,
  TTeachingStrategy,
} from './user';
import { Me } from './user';

export type TObjective = Database['public']['Enums']['objective'];
export type TStandard = Database['public']['Enums']['standard'];
export type TFormat = Database['public']['Enums']['format'];
export type TDifficulty = Database['public']['Enums']['difficulty'];
export type TPhilosophy = Database['public']['Enums']['philosophy'];
export type TMaterial = Database['public']['Enums']['material'];
export type TPace = Database['public']['Enums']['pace'];

// Lesson Plan Output
export interface ILessonPlan {
  id: string;
  title: string;
  content: string;
  subject: string;
  level: string;
  topic: string;
  tags: string[];
  image_path: string;
  is_public: boolean;
  length_in_min: number;
  creator_avatar_url: string;
  creator_first_name: string;
  creator_last_name: string;
  creator_type: Database['public']['Enums']['profile_type'];
  students: string[] | null;
  scheduled_date: Date | null;
  completion_date: Date | null;
  subject_name: string;
  level_name: string;
  topic_name: string;
}

// Lesson Plan Prompt Input (Lesson Object)
export interface ILessonPlanPromptReq {
  subject: string;
  level: string;
  topic: string;
  objectives: TObjective[];
  difficulty: TDifficulty | null;
  standards: TStandard[];
  format: TFormat | null;
  teaching_strategy: TTeachingStrategy | null;
  philosophy: TPhilosophy | null;
  length_in_min: number;
  pace: TPace | null;
  materials: TMaterial[];
  special_considerations: string;
  learning_styles?: TLearningStyle[];
}

// Lesson Plan Prompt Input (Teacher Object)
export interface ITeacherPromptReq {
  name: string;
  role: Database['public']['Enums']['profile_type'];
  teaching_preferences?: Me['teachingPreferences'];
}

// Lesson Plan Prompt Input (Students Object)
export interface IStudentPromptReq {
  students: {
    id: string;
    name: string;
    age: number;
    learningStyles: TLearningStyle[];
    favoriteSubjects: string[];
    interests: string[];
    goals: TGoal[];
    learningEnvironments: TLearningEnvironment[];
    learningResources: TLearningResource[];
    specialNeeds: TSpecialNeed[];
  }[];
}
