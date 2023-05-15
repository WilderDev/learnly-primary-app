'use client';

import {
  ArrowDownOnSquareIcon,
  PrinterIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

import cn from '@/lib/common/cn';
import { usePathname } from 'next/navigation';
import { handlePrint, handleShare } from '../../lesson-creator/actions';

export default function LessonPlanActionIcons() {
  // * Hooks
  const pathname = usePathname();

  // * Render
  return (
    <>
      {/* Actions */}
      <div className="flex items-center space-x-6">
        {/* Save Button */}
        <button className="group flex h-12 flex-col items-center" type="button">
          <ArrowDownOnSquareIcon
            className={cn(
              'h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300',
              // userHasLesson && 'text-green-700 dark:text-green-400',
            )}
          />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            {/* {userHasLesson ? 'Saved' : 'Save'} */}
            Save
          </span>
        </button>

        {/* Print Button */}
        <button
          className="group flex h-12 flex-col items-center"
          type="button"
          onClick={handlePrint}
        >
          <PrinterIcon className="h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300" />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            Print
          </span>
        </button>

        {/* Share Button */}
        <button
          className="group flex h-12 flex-col items-center"
          type="button"
          onClick={() => handleShare(pathname)}
        >
          <ShareIcon className="h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300" />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            Share
          </span>
        </button>
      </div>
    </>
  );
}

// Print Lesson
// See if Lesson Plan is saved
// Save Lesson plan _actions
