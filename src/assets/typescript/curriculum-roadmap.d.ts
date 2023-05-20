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
