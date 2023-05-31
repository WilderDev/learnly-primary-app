'use client';

import { Fragment, useEffect, useState, useTransition } from 'react';
import MiniCalendar from './MiniCalendar';
import OverlappingImages from '@/lib/components/images/OverlappingImages';
import {
  CalendarIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import cn from '@/lib/common/cn';
import Link from 'next/link';
import Image from 'next/image';
import { useSchedule } from './ScheduleCtx';
import Avatar from '@/lib/components/images/Avatar';
import { ICalendarEvent } from '@/assets/typescript/schedule';
import { getEventColor } from '@/lib/theme/enumColors';
import { IUpcomingEventsGetRes } from '@/app/api/events/upcoming/route';
import { Menu, Transition } from '@headlessui/react';
import AddEventModal from './AddEventModal';
import {
  getDatestringFromTimestamp,
  getTimeFromTimestamp,
} from '@/lib/common/date.helpers';
import LoadingDoubleBubble from '@/lib/components/loading/LoadingDoubleBubble';
import baseUrl from '@/lib/common/baseUrl';
import { toast } from 'sonner';
import { useRequest } from '@/lib/hooks/useRequest';
import { deleteEvent } from './_actions';
import EditEventModal from './EditEventModal';

// * Component
export default function UpcomingScheduleView() {
  // * Hooks / Context
  const { date, setDate } = useSchedule();

  // * State
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
  const [editEventModalId, setEditEventModalId] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState<ICalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  let [isPending, startTransition] = useTransition();

  // * Requests / Mutations
  const { mutate } = useRequest(deleteEvent, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Event Deleted!');
        setDate(new Date());
      } else {
        toast.error(
          'Something went wrong... Please try again or contact support.',
        );
      }
    },
  });

  // * Effects
  // Fetch upcoming events
  useEffect(() => {
    // Fetch the upcoming events for the date provided
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(`/api/events/upcoming?date=${date}`, {
        method: 'GET',
      });

      setLoading(false);
      const data = (await res.json()) as IUpcomingEventsGetRes;

      setUpcomingEvents(data.events);
    };

    fetchEvents();
  }, [date]);

  // * Render
  return (
    <>
      {/* Header */}
      <h2 className="text-base font-semibold leading-6 text-slate-900 dark:text-navy-50">
        Events by Date
      </h2>

      {/* Content */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        {/* Mini Calendar */}
        <div className="mt-4 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 xl:col-start-8 2xl:col-start-9">
          <MiniCalendar />

          <button
            className="mt-6 w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hocus:bg-green-500"
            type="button"
            onClick={() => setAddEventModalOpen(true)}
          >
            Add event
          </button>
        </div>

        {/* Upcoming Event List */}
        {loading ? (
          <LoadingDoubleBubble className="mt-4" />
        ) : (
          <ol className="mt-4 divide-y divide-slate-100 text-sm leading-6 dark:divide-navy-500 lg:col-span-7 xl:col-span-7 2xl:col-span-8">
            {upcomingEvents?.map(
              ({
                id,
                name,
                description,
                imagePath,
                url,
                type,
                datetime,
                location,
                attendees,
              }) => (
                <li className="relative flex space-x-6 py-6 xl:static" key={id}>
                  {/* Event Image */}
                  <Image
                    src={imagePath}
                    alt={name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 flex-none rounded-full"
                    width={56}
                    height={56}
                    priority={true}
                  />

                  {/* Event Info */}
                  <div className="flex-auto">
                    {/* Top Info */}
                    <div className="flex flex-col pr-10 sm:flex-row sm:items-center xl:pr-0">
                      {/* Name of Event */}
                      <h3 className="order-2 font-semibold text-slate-900 dark:text-navy-50 sm:order-1">
                        {url ? (
                          url.includes(baseUrl) ? (
                            <Link
                              className="hocus:text-slate-800 dark:hocus:text-green-100"
                              href={url}
                              target="_blank"
                            >
                              {name}
                            </Link>
                          ) : (
                            <a
                              className="hocus:text-slate-800 dark:hocus:text-green-100"
                              href={url}
                              target="_blank"
                            >
                              {name}
                            </a>
                          )
                        ) : (
                          name
                        )}
                      </h3>

                      {/* Type Bubble */}
                      <span
                        className={cn(
                          'order-1 max-w-[125px] inline-flex items-center justify-center rounded-full bg-gradient-to-bl px-2.5 py-0.5 text-center text-xs font-medium sm:order-2 sm:ml-2',
                          getEventColor(type).BG.GRADIENT,
                        )}
                      >
                        {type}
                      </span>
                    </div>

                    {/* Detail Info: Date, Time, Location, Attendees */}
                    <dl className="mt-2 flex flex-col text-slate-500 dark:text-navy-200 xl:flex-row">
                      {/* Date & Time */}
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon
                            className="h-5 w-5 text-slate-400 dark:text-navy-300"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>
                          <time dateTime={datetime}>
                            {getDatestringFromTimestamp(datetime)} at{' '}
                            {getTimeFromTimestamp(datetime)}
                          </time>
                        </dd>
                      </div>

                      {/* Location */}
                      <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-slate-400 xl:border-opacity-50 xl:pl-3.5 dark:xl:border-navy-200">
                        <dt className="mt-0.5">
                          <span className="sr-only">Location</span>
                          <MapPinIcon
                            className="h-5 w-5 text-slate-400 dark:text-navy-300"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>{location}</dd>
                      </div>

                      {/* Attendees */}
                      <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-slate-400 xl:border-opacity-50 xl:pl-3.5 dark:xl:border-navy-200">
                        <dt className="mt-0.5">
                          <span className="sr-only">Attendees</span>
                          <UserGroupIcon
                            className="h-5 w-5 text-slate-400 dark:text-navy-300"
                            aria-hidden="true"
                          />
                        </dt>

                        <dd>
                          <OverlappingImages className="m-0.5 ml-1">
                            {attendees?.map((attendee) => (
                              <Fragment key={attendee.id}>
                                <span className="sr-only">
                                  {attendee.firstName}
                                </span>
                                <Avatar
                                  src={attendee.avatarUrl}
                                  alt={attendee.firstName}
                                  url="/account?view=students"
                                  size="sm"
                                  key={attendee.id}
                                />
                              </Fragment>
                            ))}
                          </OverlappingImages>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Options Menu */}
                  <Menu
                    as="div"
                    className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center"
                  >
                    {/* Menu Toggler */}
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-slate-500 hocus:text-slate-600 dark:text-navy-300 dark:hocus:text-navy-100">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    {/* Menu */}
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {/* Items */}
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-navy-700 dark:ring-navy-200">
                        <div className="py-1">
                          {/* Url */}
                          {url && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className={cn(
                                    active
                                      ? 'bg-slate-100 text-slate-900 dark:bg-navy-600 dark:text-navy-50'
                                      : 'text-slate-700 dark:text-navy-100',
                                    'block px-4 py-2 text-sm w-full text-left',
                                  )}
                                  target="_blank"
                                  href={url}
                                >
                                  View
                                </Link>
                              )}
                            </Menu.Item>
                          )}

                          {/* Edit */}
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={cn(
                                  active
                                    ? 'bg-slate-100 text-slate-900 dark:bg-navy-600 dark:text-navy-50'
                                    : 'text-slate-700 dark:text-navy-100',
                                  'block px-4 py-2 text-sm w-full text-left',
                                )}
                                onClick={() => setEditEventModalId(id)}
                              >
                                Edit
                              </button>
                            )}
                          </Menu.Item>

                          {/* Delete */}
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={cn(
                                  active
                                    ? 'bg-slate-100 text-slate-900 dark:bg-navy-600 dark:text-navy-50'
                                    : 'text-slate-700 dark:text-navy-100',
                                  'block px-4 py-2 text-sm w-full text-left',
                                )}
                                onClick={() =>
                                  startTransition(() => mutate({ id }))
                                }
                                type="button"
                              >
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              ),
            )}
          </ol>
        )}
      </div>

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={isAddEventModalOpen}
        close={() => setAddEventModalOpen(false)}
      />

      {/* Edit Event Modal */}
      {!!editEventModalId && (
        <EditEventModal
          isOpen={!!editEventModalId}
          close={() => setEditEventModalId('')}
          event={upcomingEvents.find((e) => e.id === editEventModalId)!}
        />
      )}
    </>
  );
}
