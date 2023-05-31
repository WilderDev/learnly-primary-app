'use client';

import {
  getDatestringFromTimestamp,
  getWeekRange,
  isSameDay,
} from '@/lib/common/date.helpers';
import { useSchedule } from './ScheduleCtx';
import { Fragment, useEffect, useRef, useState } from 'react';
import cn from '@/lib/common/cn';
import Link from 'next/link';
import { IUpcomingEventsGetRes } from '@/app/api/events/upcoming/route';
import { ICalendarEvent } from '@/assets/typescript/schedule';
import { getTimeFromTimestamp } from '../../../../lib/common/date.helpers';

// * Component
export default function WeeklyScheduleView() {
  // * Context
  const { date, weekDays, setDate } = useSchedule();
  const { start } = getWeekRange(date);

  // * State
  const [events, setEvents] = useState<ICalendarEvent[]>([]);

  // * Refs
  const container = useRef<HTMLDivElement>(null); // container ref
  const containerNav = useRef<HTMLDivElement>(null); // container nav ref
  const containerOffset = useRef<HTMLDivElement>(null); // container offset ref

  // * Helpers
  // Get the row and row span based on the start date and length of the event.
  const getRow = (startDate: Date, lengthInMin: number) => {
    // Get the time in minutes.
    const time = (startDate.getHours() - 1) * 60 + startDate.getMinutes();

    // Get the row based on the time. Each row is 5 minutes
    // so we divide the time by 5 and round up.
    const rowStart = Math.ceil(time / 5) + 1;

    // Get the row span based on the length of the event.
    const rowSpan = Math.ceil(lengthInMin / 5) + 1;

    return { rowStart, rowSpan };
  };

  // Get the column based on the day of the week.
  const getCol = (eventDate: Date) => {
    // See if the date even falls inside the weekDays
    const day = weekDays.findIndex((day) => isSameDay(day, eventDate));

    // If it doesn't, return 0.
    if (day === -1) return 0;

    // Get the day of the week
    const dayOfWeek = eventDate.getDay();

    return dayOfWeek === 0 ? 7 : dayOfWeek;
  };

  // * Effects
  // Move the container to the current time on load.
  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;

    if (container.current && containerNav.current && containerOffset.current) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);

  // Fetch the events for the week.
  useEffect(() => {
    // Fetch the events for the week.
    const fetchEvents = async () => {
      const res = await fetch(`/api/events/upcoming?date=${start}`, {
        method: 'GET',
      });

      const data = (await res.json()) as IUpcomingEventsGetRes;

      // Only set events if the data has changed
      if (JSON.stringify(data.events) !== JSON.stringify(events)) {
        setEvents(data.events);
      }
    };

    fetchEvents();
  }, [start, events]);

  // * Render
  return (
    <div
      ref={container}
      className="isolate flex flex-auto flex-col overflow-auto bg-white dark:bg-navy-800"
    >
      <div
        style={{ width: '165%' }}
        className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
      >
        <div
          ref={containerNav}
          className="sticky top-0 z-30 flex-none bg-white ring-1 ring-black ring-opacity-5 dark:bg-navy-800 dark:ring-navy-400 sm:pr-8"
        >
          {/* Week Date Columns (Mobile) */}
          <div className="grid grid-cols-7 text-xs leading-6 text-slate-500 dark:text-navy-200 sm:hidden">
            {weekDays.map((day, i) => (
              <button
                className="flex items-center justify-center py-3"
                onClick={() => setDate(day)}
                key={i}
              >
                <span className="flex flex-col items-center justify-center">
                  {day.toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}{' '}
                  <span
                    className={cn(
                      'flex items-center justify-center font-semibold',
                      isSameDay(day, date)
                        ? 'flex h-6 w-6 rounded-full bg-green-600 text-white'
                        : 'text-slate-900 dark:text-navy-50',
                    )}
                  >
                    {day.getDate()}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Week Date Columns (Desktop) */}
          <div className="-mr-px hidden grid-cols-7 divide-x divide-slate-100 border-r border-slate-100 text-sm leading-6 text-slate-500 dark:divide-navy-700 dark:border-navy-700 dark:text-navy-200 sm:grid">
            <div className="col-end-1 w-14" />
            {weekDays.map((day, i) => (
              <button
                className="flex items-center justify-center py-3"
                onClick={() => setDate(day)}
                key={i}
              >
                <span
                  className={cn(isSameDay(day, date) && 'flex items-baseline')}
                >
                  {day.toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}{' '}
                  <span
                    className={cn(
                      'items-center justify-center font-semibold',
                      isSameDay(day, date)
                        ? 'ml-1.5 flex h-8 w-8 rounded-full bg-green-600 text-white'
                        : 'text-slate-900 dark:text-navy-50',
                    )}
                  >
                    {day.getDate()}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-auto">
          <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-slate-100 dark:bg-navy-800 dark:ring-navy-700" />
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            {/* Horizontal lines */}
            <div
              className="col-start-1 col-end-2 row-start-1 grid divide-y divide-slate-100 dark:divide-navy-700"
              style={{ gridTemplateRows: 'repeat(24, minmax(3.5rem, 1fr))' }}
            >
              <div ref={containerOffset} className="row-end-1 h-7"></div>

              {Array.from({ length: 13 }).map((_, i) => (
                <Fragment key={i}>
                  <div>
                    <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-slate-400 dark:text-navy-200">
                      {i + 6 > 12 ? i + 6 - 12 : i + 6}{' '}
                      {i + 6 < 12 ? 'AM' : 'PM'}
                    </div>
                  </div>
                  {i !== 12 && <div />}
                </Fragment>
              ))}
            </div>

            {/* Vertical lines */}
            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-slate-100 dark:divide-navy-700 sm:grid sm:grid-cols-7">
              <div className="col-start-1 row-span-full" />
              <div className="col-start-2 row-span-full" />
              <div className="col-start-3 row-span-full" />
              <div className="col-start-4 row-span-full" />
              <div className="col-start-5 row-span-full" />
              <div className="col-start-6 row-span-full" />
              <div className="col-start-7 row-span-full" />
              <div className="col-start-8 row-span-full w-8" />
            </div>

            {/* Events */}
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
              style={{
                gridTemplateRows: '1.75rem repeat(144, minmax(0, 1fr)) auto',
              }}
            >
              {events?.map(({ id, name, url, datetime, lengthInMin }) => {
                const eDate = new Date(datetime); // event date
                const { rowStart, rowSpan } = getRow(eDate, lengthInMin); // 60 minutes default
                const colStart = getCol(eDate); // 0-7

                return (
                  <li
                    key={id}
                    className={cn(
                      'relative mt-px flex',
                      colStart === 1 && 'sm:col-start-1',
                      colStart === 2 && 'sm:col-start-2',
                      colStart === 3 && 'sm:col-start-3',
                      colStart === 4 && 'sm:col-start-4',
                      colStart === 5 && 'sm:col-start-5',
                      colStart === 6 && 'sm:col-start-6',
                      colStart === 7 && 'sm:col-start-7',
                      colStart === 0 && 'hidden',
                    )}
                    style={{ gridRow: `${rowStart} / span ${rowSpan}` }}
                  >
                    {url ? (
                      <Link
                        className="group absolute inset-1 flex flex-col overflow-y-auto transition-all duration-300 rounded-lg bg-green-50 p-2 text-xs leading-5 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-900/80"
                        href={url}
                      >
                        <p className="order-1 font-semibold text-green-700 dark:text-green-200">
                          {name}
                        </p>
                        <p className="text-green-500 group-hover:text-green-700 dark:text-green-300 transition-colors duration-300 dark:group-hover:text-green-400">
                          <time dateTime={datetime}>
                            {getDatestringFromTimestamp(datetime)} at{' '}
                            {getTimeFromTimestamp(datetime)}
                          </time>
                        </p>
                      </Link>
                    ) : (
                      <div className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg transition-all duration-300 bg-green-50 p-2 text-xs leading-5 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-900/80">
                        <p className="order-1 font-semibold text-green-700 dark:text-green-200">
                          {name}
                        </p>
                        <p className="text-green-500 group-hover:text-green-700 dark:text-green-300 transition-colors duration-300 dark:group-hover:text-green-400">
                          <time dateTime={datetime}>
                            {getDatestringFromTimestamp(datetime)} at{' '}
                            {getTimeFromTimestamp(datetime)}
                          </time>
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

// TSK: Responsiveness
