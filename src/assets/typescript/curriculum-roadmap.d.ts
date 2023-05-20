import { Database } from './db';

export interface ICurriculumListItem {
  id: string;
  name: string;
  image: string;
  description: string;
  completion_percentage: number;
  url?: string;
  type?: Database['public']['Enums']['module_type'];
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
