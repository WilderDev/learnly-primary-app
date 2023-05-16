import { Database } from './db';

export interface Me {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  status: Database['public']['Enums']['profile_status'];
  type: Database['public']['Enums']['profile_type'];
  role: Database['public']['Enums']['user_role'];
}

export interface UserStudent {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  birthday: string;
  learningStyles: Database['public']['Enums']['learning_style'][];
}
