import { Database } from './db';

export type TNotificationType =
  Database['public']['Enums']['notification_type'];
export type TNotificationStatus =
  Database['public']['Enums']['notification_status'];

export interface INotification {
  id: string;
  title: string;
  body: string;
  status: TNotificationStatus;
  type: TNotificationType;
  sent_at: string | null;
  read_at: string | null;
  action_text: string | null;
  action_url: string | null;
  from: {
    id: string;
    name: string;
    avatar: string;
  };
}
