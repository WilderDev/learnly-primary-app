import { Database } from './db';

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
  creator: {
    first_name: string;
    last_name: string;
    avatar_url: string;
  };
}

export type TDifficulty = 'EASY' | 'MODERATE' | 'CHALLENGING'; // Enum for Lesson Difficulty

// Lesson Plan Prompt Input (Lesson Object)
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

// Lesson Plan Prompt Input (Teacher Object)
export interface ITeacherPromptReq {
  name: string;
  role: Database['public']['Enums']['profile_type'];
  years_experience?: number;
  teaching_preferences?: {}; // TSK
}

// Lesson Plan Prompt Input (Students Object)
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
