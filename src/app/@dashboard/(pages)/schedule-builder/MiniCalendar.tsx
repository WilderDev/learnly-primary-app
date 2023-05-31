'use client';

import cn from '@/lib/common/cn';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useSchedule } from './ScheduleCtx';
import { getEventColor } from '@/lib/theme/enumColors';
import { ICalendarDayEvent } from '@/assets/typescript/schedule';
import { useState } from 'react';
import Link from 'next/link';

export default function MiniCalendar() {
  // * Context / Hooks
  const { date, setDate, prevMonth, nextMonth, calendarDays } = useSchedule();

  // * State
  const [selectedDayEvents, setSelectedDayEvents] = useState<
    ICalendarDayEvent[]
  >(() => calendarDays.find((day) => day.isSelected)?.events || []);

  // * Render
  return (
    <article className="rounded-lg bg-white shadow p-3 dark:bg-navy-700">
      {/* Content */}
      <div className="space-y-1 text-center text-xs">
        {/* Header */}
        <header className="flex items-center justify-between px-2 pb-4 sm:pr-8 lg:pr-2">
          {/* Month and Year */}
          <p className="text-sm font-medium text-slate-700 dark:text-navy-100">
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>

          {/* Month Navigation */}
          <div className="-mr-1.5 flex space-x-2">
            {/* Previous Month */}
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-full p-0 text-center outline-2 outline-offset-2 outline-transparent transition-colors duration-200 ease-in-out active:bg-slate-300/25 hocus:bg-slate-300/20 dark:active:bg-navy-300/25 dark:hocus:bg-navy-300/20"
              onClick={prevMonth}
            >
              <ChevronLeftIcon className="h-4 w-4 text-slate-700 dark:text-navy-100" />
            </button>

            {/* Next Month */}
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-full p-0 text-center outline-2 outline-offset-2 outline-transparent transition-colors duration-200 ease-in-out active:bg-slate-300/25 hocus:bg-slate-300/20 dark:active:bg-navy-300/25 dark:hocus:bg-navy-300/20"
              onClick={nextMonth}
            >
              <ChevronRightIcon className="h-4 w-4 text-slate-700 dark:text-navy-100" />
            </button>
          </div>
        </header>

        {/* Calendar */}
        <div className="grid grid-cols-7 pb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dow) => (
            <div
              className="text-sm font-semibold text-green-500 dark:text-green-400 text-left pl-2.5 lg:text-center lg:pl-0"
              key={dow}
            >
              {dow}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-transparent text-sm">
          {calendarDays.map((day) => (
            <button
              className={cn(
                // Base Styles
                'h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-xl relative',
                !day.isSelected &&
                  'hocus:bg-green-500/10 hocus:text-slate-800 dark:hocus:bg-green-400/10 dark:hocus:text-green-400', // Unselected hover/focus states
                day.isCurrentMonth
                  ? 'text-slate-900   dark:text-navy-100 ' // Current Month
                  : 'text-slate-400 dark:text-navy-300', // Not Current Month
                day.isToday && 'text-green-600 dark:text-green-500', // Today
                day.isSelected && 'text-white', // Selected
                (day.isSelected || day.isToday) && 'font-semibold', // Selected or Today
                day.isSelected &&
                  day.isToday &&
                  'bg-green-600 text-white dark:text-white', // Selected and Today
                day.isSelected &&
                  !day.isToday &&
                  'bg-slate-200/80 text-slate-900 dark:bg-navy-900/80', // Selected and not Today
              )}
              type="button"
              onClick={(e) => {
                e.currentTarget.blur(); // Blur
                setDate(day.date); // Set Date
                setSelectedDayEvents(day.events); // Set Events
              }}
              key={day.dateString}
            >
              {/* Date */}
              <time
                dateTime={day.dateString}
                className="mx-auto flex h-4 w-4 sm:h-7 sm:w-7 items-center justify-center rounded-full text-xs sm:text-sm md:text-base"
              >
                {day.dateString.split('-')[2]}
              </time>

              {/* Bubble */}
              {day.events.length > 0 && (
                <span
                  className={cn(
                    'absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full',
                    getEventColor(day.events[0].type).BG.LIGHT,
                  )}
                />
              )}
            </button>
          ))}
        </div>

        {/* Events of Selected Day */}
        {selectedDayEvents.length > 0 && (
          <div className="pt-3 space-y-2">
            {selectedDayEvents.map((event) => (
              <div className="flex items-center space-x-2" key={event.id}>
                <span
                  className={cn(
                    'h-2.5 w-2.5 rounded-full',
                    getEventColor(event.type).BG.LIGHT,
                  )}
                />

                {event.url ? (
                  event.url.startsWith('http') ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-900 dark:text-navy-100"
                    >
                      {event.name}
                    </a>
                  ) : (
                    <Link
                      href={event.url}
                      className="text-xs text-slate-900 dark:text-navy-100"
                    >
                      {event.name}
                    </Link>
                  )
                ) : (
                  <span className="text-xs text-slate-900 dark:text-navy-100">
                    {event.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
