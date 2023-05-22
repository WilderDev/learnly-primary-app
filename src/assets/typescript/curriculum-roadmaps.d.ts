import { Database } from './db';

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
