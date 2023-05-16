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

// Lesson Plan Prompt Input (Lesson Object)
export interface ILessonPlanPromptReq {
  subject: string;
  level: string;
  topic: string;
  objectives: Database['public']['Enums']['objective'][];
  difficulty: Database['public']['Enums']['difficulty'];
  standards: Database['public']['Enums']['standard'][];
  format: Database['public']['Enums']['format'] | null;
  teaching_strategy: Database['public']['Enums']['teaching_strategy'];
  philosophy: Database['public']['Enums']['philosophy'];
  length_in_min: number;
  pace: Database['public']['Enums']['pace'];
  materials: Database['public']['Enums']['material'][];
  special_considerations: string;
  reflections: any; // TSK
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
  children: {
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
