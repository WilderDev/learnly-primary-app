import { Database } from './db';
import { IStudentPromptReq, TDifficulty, TPhilosophy } from './lesson-plan';
import { TLearningStyle } from './user';

export type TCurriculumStatus =
  Database['public']['Enums']['curriculum_status'];

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
  philosophy: TPhilosophy;
  difficulty: TDifficulty;
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
}

export interface ICurriculumLessonPlan {
  lesson_plan: {
    id: string;
    creator_id: string;
    title: string;
    content: string;
    tags: string[];
    image_path: string;
    length_in_min: number;
    creator_name: string;
    creator_avatar_url: string;
    scheduled_date: string | null;
    completion_date: string | null;
  } | null;
}

export interface INextCurriculumLesson {
  teacher_id: string;
  user_curriculum_id: string;
  curriculum_id: string;
  curriculum_subject_id: string;
  curriculum_level_id: string;
  curriculum_topic_id: string;
  curriculum_lesson_id: string;
  curriculum_name: string;
  subject_name: string;
  level_name: string;
  topic_name: string;
  lesson_name: string;
  lesson_description: string;
  lesson_number: number;
  lesson_image_path: string;
}
