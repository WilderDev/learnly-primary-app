// * Types

import { Database } from './db';

// Schedule View Options
export type TScheduleView =
  | 'upcoming'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly';

//

// * Interfaces
// Schedule Tab Item
export interface IScheduleTabItem {
  label: string;
  component: () => JSX.Element;
}

// Calendar Day
export interface ICalendarDay {
  date: Date;
  dateString: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}

// Calendar Event
export interface ICalendarEvent {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  url: string;
  type: Database['public']['Enums']['event'];
  datetime: string;
  location: string;
  lengthInMin: number;
  attendees: {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  }[];
}
