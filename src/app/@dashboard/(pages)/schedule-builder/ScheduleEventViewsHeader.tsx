'use client';

import { Fragment, useState } from 'react';
import { useSchedule } from './ScheduleCtx';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid';
import capitalize from '@/lib/common/capitalize';
import cn from '@/lib/common/cn';
import { Menu, Transition } from '@headlessui/react';
import AddEventModal from './AddEventModal';

export default function ScheduleEventViewsHeader() {
  // * Context / Hooks
  const {
    views,
    view,
    setView,
    dateString,
    nextDay,
    nextWeek,
    nextMonth,
    prevDay,
    prevWeek,
    prevMonth,
    setDate,
  } = useSchedule();

  // * State
  const [isEventModalOpen, setEventModalOpen] = useState(false);

  // * Render
  return (
    <>
      <header className="flex flex-none items-center justify-between rounded-t-lg border-b border-slate-200 bg-gradient-to-t from-slate-100 to-slate-50 px-6 py-4 dark:border-navy-600 dark:from-navy-900 dark:to-navy-800">
        {/* Date Display */}
        <h1 className="text-base font-semibold leading-6 text-slate-900 dark:text-navy-50">
          <time dateTime={dateString}>
            {getDatestringFromTimestamp(
              dateString,
              true,
              view === 'daily',
              true,
            )}
          </time>
        </h1>

        {/* Header Content */}
        <div className="flex items-center">
          {/* Reset to Today */}
          <button
            type="button"
            className="hidden items-center justify-center rounded-md py-2 pl-3 pr-4 text-slate-400 focus:relative hocus:text-slate-500 dark:bg-navy-700 dark:text-navy-200 dark:hocus:text-navy-100 md:mr-4 md:flex md:w-9 md:px-2 md:hocus:bg-slate-50 dark:md:hocus:bg-navy-900"
            onClick={(e) => {
              e.currentTarget.blur(); // Blur

              setDate(new Date());
            }}
          >
            <span className="sr-only">Reset to Today</span>
            <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Date Navigator - Desktop */}
          {/* TSK: this will need to be different for every view... for now it's okay */}
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <div
              className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-slate-300 dark:ring-navy-500"
              aria-hidden="true"
            />

            <button
              className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-slate-400 focus:relative hocus:text-slate-500 dark:bg-navy-700 dark:text-navy-200 dark:hocus:text-navy-100 md:w-9 md:px-2 md:hocus:bg-slate-50 dark:md:hocus:bg-navy-900"
              type="button"
              onClick={() => prevWeek()}
            >
              <span className="sr-only">Previous week</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="hidden px-3.5 text-sm font-semibold text-slate-900 focus:relative hocus:bg-slate-50 dark:bg-navy-700 dark:text-navy-50 dark:hocus:bg-navy-800 md:block"
            >
              {dateString}
            </button>

            <span className="relative -mx-px h-5 w-px bg-slate-300 md:hidden" />

            <button
              className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-slate-400 focus:relative hocus:text-slate-500 dark:bg-navy-700 dark:text-navy-200 dark:hocus:text-navy-100 md:w-9 md:px-2 md:hocus:bg-slate-50 dark:md:hocus:bg-navy-900"
              type="button"
              onClick={() => nextWeek()}
            >
              <span className="sr-only">Next week</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* View Selector - Desktop */}
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hocus:bg-slate-50 dark:bg-navy-700 dark:text-navy-50 dark:ring-navy-500 dark:hocus:bg-navy-800"
              >
                {capitalize(view)} view
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-slate-400 dark:text-navy-200"
                  aria-hidden="true"
                />
              </Menu.Button>

              {/* View Selector Options */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-700 dark:ring-navy-200">
                  <div className="py-1">
                    {views
                      ?.filter((v) => v !== view)
                      ?.map((v) => (
                        <Menu.Item key={v}>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={() => setView(v)}
                              className={cn(
                                active
                                  ? 'bg-slate-100 text-slate-900 dark:bg-navy-600 dark:text-navy-50'
                                  : 'text-slate-700 dark:text-navy-100',
                                'block w-full px-4 py-2 text-left text-sm',
                              )}
                            >
                              {capitalize(v)} view
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Divider */}
            <div className="ml-6 h-6 w-px bg-slate-300 dark:bg-navy-500" />

            {/* Add Event Button */}
            <button
              type="button"
              className="ml-6 rounded-md  bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hocus:bg-green-500 dark:text-navy-50"
              onClick={() => setEventModalOpen(true)}
            >
              Add event
            </button>
          </div>

          {/* Mobile */}
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-slate-400 hocus:text-slate-500 dark:bg-navy-700 dark:text-navy-200 dark:hocus:text-navy-100">
              <span className="sr-only">Open menu</span>
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            {/* Nav Items (Mobile) */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-slate-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-navy-400 dark:bg-navy-700 dark:ring-navy-200">
                {/* Action */}
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={cn(
                          active
                            ? 'bg-slate-100 text-slate-900 dark:bg-navy-700 dark:text-navy-50'
                            : 'text-slate-700 dark:text-navy-200',
                          'block px-4 py-2 text-sm',
                        )}
                        onClick={() => setEventModalOpen(true)}
                        type="button"
                      >
                        Create event
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Date Navigator */}
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={cn(
                          active
                            ? 'bg-slate-100 text-slate-900 dark:bg-navy-700 dark:text-navy-50'
                            : 'text-slate-700 dark:text-navy-200',
                          'block px-4 py-2 text-sm',
                        )}
                        type="button"
                        onClick={() => {
                          const newDate = new Date();
                          setDate(newDate);
                        }}
                      >
                        Go to today
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* View Toggle */}
                <div className="py-1">
                  {views?.map((v) => (
                    <Menu.Item key={v}>
                      {({ active }) => (
                        <button
                          className={cn(
                            active
                              ? 'bg-slate-100 text-slate-900 dark:bg-navy-700 dark:text-navy-50'
                              : 'text-slate-700 dark:text-navy-200',
                            'block px-4 py-2 text-sm',
                          )}
                          onClick={() => setView(v)}
                          type="button"
                        >
                          {capitalize(v)}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      {/* Event Modal */}
      <AddEventModal
        isOpen={isEventModalOpen}
        close={() => setEventModalOpen(false)}
      />
    </>
  );
}
