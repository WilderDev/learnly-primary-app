'use client';

import { useState } from 'react';
import cn from '@/lib/common/cn';
import RightSidebarQuickReportContent from './RightSidebarQuickReportContent';

export default function RightSidebarQuickReport() {
  // State
  const [tab, setTab] = useState(1);

  return (
    <div className="flex flex-col p-4 gap-8">
      {/* Tabs */}
      <div className="flex justify-center items-center">
        <ul className=" text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow dark:divide-gray-700 dark:text-gray-400 w-full flex ring ring-gray-500/5">
          <li
            onClick={() => setTab(0)}
            className={cn(
              'cursor-pointer transition-all duration-200 ease-in-out w-full rounded-l-lg py-3 px-4  bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
              tab === 0 &&
                'bg-green-600 text-white hover:bg-green-700 hover:text-white dark:bg-gray-900/80',
            )}
          >
            All Time
          </li>
          <li
            onClick={() => setTab(1)}
            className={cn(
              'cursor-pointer transition-all duration-200 ease-in-out w-full rounded-r-lg py-3 px-4   bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700',
              tab === 1 &&
                'bg-green-600 text-white hover:bg-green-700 hover:text-white dark:bg-gray-900/80',
            )}
          >
            Past Week
          </li>
        </ul>
      </div>

      {/* Context for sidebar */}
      <RightSidebarQuickReportContent tab={tab} />
    </div>
  );
}
