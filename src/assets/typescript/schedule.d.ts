export type TScheduleView =
  | 'upcoming'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly';

export interface ICalendarDay {
  date: Date;
  dateString: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}
