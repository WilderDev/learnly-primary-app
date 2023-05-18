'use client';

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ICalendarDay, TScheduleView } from '@/assets/typescript/schedule';
import { getWeekRange } from '@/lib/common/date.helpers';

// * Initialization
// Props
interface IScheduleCtxProps {
  views: TScheduleView[];
  view: TScheduleView;
  setView: (view: TScheduleView) => void;
  date: Date;
  dateString: string;
  setDate: (date: Date) => void;
  nextMonth: () => void;
  prevMonth: () => void;
  nextWeek: () => void;
  prevWeek: () => void;
  nextDay: () => void;
  prevDay: () => void;
  calendarDays: ICalendarDay[];
  weekDays: Date[];
} // Create an interface for the context props

// Initial State
const initialState: IScheduleCtxProps = {
  views: ['upcoming', 'daily', 'weekly', 'monthly', 'yearly'],
  view: 'upcoming',
  setView: () => {},
  date: new Date(),
  dateString: new Date().toISOString().split('T')[0],
  setDate: () => {},
  nextMonth: () => {},
  prevMonth: () => {},
  nextWeek: () => {},
  prevWeek: () => {},
  nextDay: () => {},
  prevDay: () => {},
  calendarDays: [],
  weekDays: [],
}; // Create a context object with default value

// Context
const ScheduleCtx = createContext(initialState); // Create Context Object

// * Provider
export function ScheduleProvider({ children }: PropsWithChildren) {
  // * Context

  // * State
  const [currentView, setCurrentView] = useState<TScheduleView>('upcoming');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>([]);
  const [weekDays, setWeekdays] = useState<Date[]>([]);

  // * Handlers
  // Set month to next month
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Set month to previous month
  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Set week to next week
  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Set week to previous week
  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Set day to next day
  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Set day to previous day
  const prevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  // Build calendar days
  const buildCalendarDays = useCallback(() => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();

    const calendarDays: ICalendarDay[] = [];

    // * Build days in previous month
    const daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();
    for (let i = firstDayOfWeek; i > 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        daysInPreviousMonth - i + 1,
      );
      calendarDays.push({
        date,
        dateString: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // * Build days in current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i,
      );
      calendarDays.push({
        date,
        dateString: date.toISOString().split('T')[0],
        isCurrentMonth: true,
        isToday: false,
      });
    }

    // * Build days in next month
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i,
      );
      calendarDays.push({
        date,
        dateString: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // * Set today
    const today = new Date();
    const todayIndex = calendarDays.findIndex(
      (day) => day.dateString === today.toISOString().split('T')[0],
    );
    if (todayIndex !== -1) {
      calendarDays[todayIndex] = { ...calendarDays[todayIndex], isToday: true };
    }

    // * Set isSelected
    const selectedIndex = calendarDays.findIndex(
      (day) => day.dateString === currentDate.toISOString().split('T')[0],
    );
    if (selectedIndex !== -1) {
      calendarDays[selectedIndex] = {
        ...calendarDays[selectedIndex],
        isSelected: true,
      };
    }

    setCalendarDays(calendarDays);
  }, [currentDate]);

  // Build Weekdays
  const buildWeekDays = useCallback(() => {
    const { start, end } = getWeekRange(currentDate);

    const weekDays: Date[] = [];
    let date = start;

    while (date <= end) {
      weekDays.push(date);
      date = new Date(date);
      date.setDate(date.getDate() + 1);
    }

    setWeekdays(weekDays);
  }, [currentDate]);

  // * Effects
  // Update calendar days anytime they select a new date
  useEffect(() => {
    buildCalendarDays();
  }, [currentDate, buildCalendarDays]);

  // Update weekdays anytime they select a new date
  useEffect(() => {
    buildWeekDays();
  }, [currentDate, buildWeekDays]);

  // * Value
  const value: IScheduleCtxProps = {
    // views: ['upcoming', 'daily', 'weekly', 'monthly', 'yearly'],
    views: ['upcoming', 'weekly'],
    view: currentView,
    setView: setCurrentView,
    date: currentDate,
    dateString: currentDate.toISOString().split('T')[0],
    setDate: setCurrentDate,
    nextMonth,
    prevMonth,
    nextWeek,
    prevWeek,
    nextDay,
    prevDay,
    calendarDays,
    weekDays,
  };

  // * Render
  return <ScheduleCtx.Provider value={value}>{children}</ScheduleCtx.Provider>;
}

// * Hook
export function useSchedule() {
  const ctx = useContext(ScheduleCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error('useSchedule must be used within a ScheduleProvider');
  }

  return ctx; // Return the context object to be used in the component
}
