'use client';

import {
  ArrowDownOnSquareIcon,
  PrinterIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

import cn from '@/lib/common/cn';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { handleShare } from '@/app/@dashboard/(pages)/lesson-creator/helpers';
import CurriculumLessonSaveModal from './CurriculumLessonSaveModal';
import { usePrint } from '@/lib/hooks/usePrint';

// * Props
export interface IProps {
  id: string;
  studentIds: string[];
  isScheduled: boolean;
  handlePrint: () => void;
}

export default function CurriculumLessonActionItems({
  id,
  studentIds,
  isScheduled,
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
          disabled={isScheduled}
        >
          <ArrowDownOnSquareIcon
            className={cn(
              'h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300',
              isScheduled && 'text-green-700 dark:text-green-400'
            )}
          />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            {isScheduled ? 'Saved' : 'Save'}
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
          onClick={() => handleShare(`/lesson-plans/${id}`)}
        >
          <ShareIcon className="h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300" />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            Share
          </span>
        </button>
      </div>

      {/* Save Modal */}
      <CurriculumLessonSaveModal
        lessonPlanId={id!}
        studentIds={studentIds}
        isVisible={isSaveModalOpen}
        close={() => setSaveModalOpen(false)}
      />
    </>
  );
}
