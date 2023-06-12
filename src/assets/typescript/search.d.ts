import { Database } from './db';

export type TSearchAssignmentRecord = {
  status: Database['public']['Enums']['assignment_status'];
};
export type TSearchLessonPlanRecord = {
  students: {
    id: string;
    first_name: string;
    avatar_url: string;
  }[];
};
export type TSearchCurriculumRecord = {
  image_url: string;
};

export type TSearchRecordType =
  | TSearchAssignmentRecord
  | TSearchLessonPlanRecord
  | TSearchCurriculumRecord;

export interface ISearchItem {
  id: string;
  name: string;
  category: string;
  url: string;
  record: TSearchRecordType;
}
