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
  totalUsers: number;
  totalActiveUsers: number;
  totalInactiveUsers: number;
  totalMonthlySubscriptions: number;
  totalYearlySubscriptions: number;
  // TSK: Landing Page Visits, Trial Sign Ups, Trial Conversions, Monthly users, Annual Users, Total Revenue, etc.
}

export interface IAdminWebhooks {
  totalWebhooks: number;
  // TSK
}
