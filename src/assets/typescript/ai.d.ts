import { Database } from './db';

export type TDifficulty = 'EASY' | 'MODERATE' | 'CHALLENGING';

export interface ILessonPlanPromptReq {
  subject: string;
  level: string;
  topic: string;
  objectives: string[];
  difficulty: TDifficulty;
  standards: string[]; // TSK: enum
  format: string; // TSK: enum
  teaching_strategy: string; // TSK: enum
  philosophy: string; // TSK: enum
  length_in_min: number;
  pace: string; // TSK: enum
  materials?: string[];
  special_considerations?: string;
  reflections?: {
    // TSK
  };
  learning_styles?: string[]; // TSK: enum
}

export interface ITeacherPromptReq {
  name: string;
  role: Database['public']['Enums']['profile_type'];
  years_experience?: number;
  teaching_preferences?: {}; // TSK
}

export interface IStudentPromptReq {
  children: {
    name: string;
    age: number;
    learning_styles: Database['public']['Enums']['learning_style'][];
    // interests?
    // strengths?
    // weaknesses?
    // goals?
    // special_needs?
    // learning_environment_preferences?
    // learning_resources_preferences?
  }[];
}
