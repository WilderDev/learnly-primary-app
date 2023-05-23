import { Database } from './db';
import { IStudentPromptReq } from './lesson-plan';

export interface ICurriculumListItem {
  id: string;
  name: string;
  image: string;
  description: string;
  progress: number;
  url?: string;
  type?: Database['public']['Enums']['module_type'];
  tags?: string[];
  students?: { name: string; avatar_url: string }[];
}

export interface IShareableCurriculumListItem {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  url: string;
}

export interface ICurriculumLessonPromptReq {
  curriculum: string;
  subject: string;
  level: string;
  topic: string;
  lessonName: string;
  lessonDescription: string;
  philosophy: Database['public']['Enums']['philosophy'];
  difficulty: Database['public']['Enums']['difficulty'];
  length_in_min: number;
  additional_requests: string;
}

export interface ICurriculumFormData {
  curriculum: {
    id: string;
    name: string;
  };
  subject: {
    id: string;
    subjectId: string;
    name: string;
  };
  level: {
    id: string;
    levelId: string;
    name: string;
  };
  topic: {
    id: string;
    topicId: string;
    name: string;
  };
  lesson: {
    id: string;
    name: string;
    description: string;
    image_path: string;
  };
  students: {
    id: string;
    first_name: string;
    last_name: string;
    avatar_url: string;
    age: number;
    learning_styles: Database['public']['Enums']['learning_style'][];
  }[];
}

export interface ICurriculumLessonPlan {
  lesson_plan: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    image_path: string;
    length_in_min: number;
    creator_name: string;
    creator_avatar_url: string;
    // . . . Creator info, etc.
  } | null;
}
