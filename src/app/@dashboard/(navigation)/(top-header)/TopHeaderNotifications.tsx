'use client';

import { useState } from 'react';
import { BellAlertIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import cn from '@/lib/common/cn';
import { INotification } from '@/assets/typescript/notification';
import NotificationItem from './NotificationItem';

// * Props
interface IProps {
  notifications: INotification[];
}

// * Component
export default function TopHeaderNotifications({ notifications }: IProps) {
  // * State
  const [isMenuOpen, setMenuOpen] = useState(false);

  // * Data
  const unreadNotificationsLength =
    notifications.filter((n) => !n.read_at).length || 0;

  // * Render
  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="group relative z-20 flex h-8 w-8 items-center justify-center rounded-full p-0 transition-colors hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:bg-navy-400/20 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/20"
        whileTap={{ scale: 0.8 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div>
          <BellAlertIcon className="icon-wiggle h-5 w-5 text-slate-600/90 dark:text-navy-200/90" />

          {/* Red Bubble */}
          {unreadNotificationsLength > 0 && (
            <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-500/90" />
          )}
        </div>
      </motion.button>

      {/* Notification Menu */}
      {isMenuOpen && (
        <motion.div
          className={cn(
            'absolute -right-10 sm:right-0 z-20 mt-2 w-56 sm:w-80 origin-top-right rounded-md border border-slate-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-navy-400/90 dark:bg-navy-400',
            isMenuOpen ? 'block' : 'hidden',
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="rounded-md px-4 py-3 shadow dark:bg-navy-500/90">
            <p className="flex items-center text-sm font-semibold text-slate-900 dark:text-navy-100">
              <span className="">Notifications</span>
              {/* bubble showing how many */}
              {unreadNotificationsLength > 0 && (
                <span className="ml-2 rounded-full bg-blue-500/90 px-2 py-0.5 text-xs font-medium text-white dark:bg-blue-700/90">
                  {unreadNotificationsLength}
                </span>
              )}
            </p>
          </div>

          {/* All Notifications */}
          <ul>
            {notifications?.map((notification) => (
              <NotificationItem
                notification={notification}
                key={notification.id}
              />
            ))}
          </ul>

          {/* View All Notifications Btn */}
          <div className="border-t border-slate-200 shadow dark:border-navy-700 dark:bg-navy-500/90">
            <Link
              href="/account?view=notifications"
              className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 dark:text-navy-200 dark:hover:bg-navy-400/90"
            >
              View all notifications
            </Link>
          </div>

          {/* Little triangle connecting to button */}
          <span className="absolute -top-2 right-12 sm:right-2 -z-10 h-4 w-4 rotate-45 transform rounded-sm bg-white shadow dark:bg-navy-500/90"></span>
        </motion.div>
      )}
    </>
  );
}
