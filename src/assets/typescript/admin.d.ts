import { Database } from './db';

export interface IAdminUser {
  id: string;
  name: string;
  email: string;
  role: Database['public']['Enums']['user_role'];
  lastActivity: string;
  subscriptionStatus: Database['public']['Enums']['subscription_status'];
  expirationDate: string;
}

export interface IAdminStatistics {
  totalTrialSignUps: number;
  monthlyTrialSignUps: number;
  totalTrialConversions: number;
  monthlyTrialConversions: number;
  activeMonthlyUsers: number;
  activeYearlyUsers: number;
}

export interface IAdminWebhooks {
  totalWebhooks: number;
  // TSK
}
