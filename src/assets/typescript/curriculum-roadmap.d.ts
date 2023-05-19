import { Database } from './db';

export interface ICurriculumListItem {
  id: string;
  name: string;
  type: Database['public']['Enums']['module_type'];
  image: string;
  description: string;
  completion_percentage: number;
  url: string;
}
