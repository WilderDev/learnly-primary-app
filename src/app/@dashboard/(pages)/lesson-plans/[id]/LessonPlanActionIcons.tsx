'use client';

import {
  ArrowDownOnSquareIcon,
  PrinterIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

import cn from '@/lib/common/cn';
import { usePathname } from 'next/navigation';
import { handleShare } from '../../lesson-creator/helpers';
import { useState } from 'react';
import LessonPlanSaveDetailsModalForm from './LessonPlanSaveDetailsModal';

// * Props
export interface IProps {
  id: string;
  scheduled_date: Date | null;
  handlePrint: () => void;
}

export default function LessonPlanActionIcons({
  id,
  scheduled_date,
  handlePrint,
}: IProps) {
  // * Hooks
  const pathname = usePathname();

  // * State
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);

  // * Render
  return (
    <>
      {/* Actions */}
      <div className="flex items-center space-x-6">
        {/* Save Button */}
        <button
          className="group flex h-12 flex-col items-center"
          type="button"
          onClick={() => setSaveModalOpen(true)}
          disabled={!!scheduled_date}
        >
          <ArrowDownOnSquareIcon
            className={cn(
              'h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300',
              !!scheduled_date && 'text-green-700 dark:text-green-400'
            )}
          />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            {!!scheduled_date ? 'Saved' : 'Save'}
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

      {/* Save Modal */}
      <LessonPlanSaveDetailsModalForm
        lessonPlanId={id!}
        defaultStudentIds={[]}
        isVisible={isSaveModalOpen}
        close={() => setSaveModalOpen(false)}
      />
    </>
  );
}

// Print Lesson
// See if Lesson Plan is saved
// Save Lesson plan _actions
