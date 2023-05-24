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
  creator_avatar_url: string;
  creator_first_name: string;
  creator_last_name: string;
  creator_type: Database['public']['Enums']['profile_type'];
  students: string[] | null;
  scheduled_date: Date | null;
  completion_date: Date | null;
}

// Lesson Plan Prompt Input (Lesson Object)
export interface ILessonPlanPromptReq {
  subject: string;
  level: string;
  topic: string;
  objectives: Database['public']['Enums']['objective'][];
  difficulty: Database['public']['Enums']['difficulty'] | null;
  standards: Database['public']['Enums']['standard'][];
  format: Database['public']['Enums']['format'] | null;
  teaching_strategy: Database['public']['Enums']['teaching_strategy'] | null;
  philosophy: Database['public']['Enums']['philosophy'] | null;
  length_in_min: number;
  pace: Database['public']['Enums']['pace'] | null;
  materials: Database['public']['Enums']['material'][];
  special_considerations: string;
  learning_styles?: Database['public']['Enums']['learning_style'][];
}

// Lesson Plan Prompt Input (Teacher Object)
export interface ITeacherPromptReq {
  name: string;
  role: Database['public']['Enums']['profile_type'];
  teaching_preferences?: {}; // TSK
}

// Lesson Plan Prompt Input (Students Object)
export interface IStudentPromptReq {
  students: {
    id: string;
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
