'use client';

import {
  ArrowDownOnSquareIcon,
  PencilSquareIcon,
  PrinterIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

import cn from '@/lib/common/cn';
import { usePathname } from 'next/navigation';
import { handleShare } from '../../lesson-creator/helpers';
import { useState } from 'react';
import LessonPlanSaveDetailsModalForm from './LessonPlanSaveDetailsModal';
import Modal from '@/lib/components/popouts/Modal';
import LessonPlanEditModal from './LessonPlanEditModal';
import { ILessonPlanWithCreator } from '@/assets/typescript/lesson-plan';
import { useUser } from '@/lib/components/providers/UserProvider';

// * Props
export interface IProps {
  id: string;
  lessonPlan: ILessonPlanWithCreator;
  hasScheduledDate: boolean;
  handlePrint: () => void;
}

export default function LessonPlanActionIcons({
  id,
  lessonPlan,
  hasScheduledDate,
  handlePrint,
}: IProps) {
  // * Hooks
  const pathname = usePathname();
  const { user } = useUser();

  // * State
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

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
          disabled={hasScheduledDate}
        >
          <ArrowDownOnSquareIcon
            className={cn(
              'h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300',
              hasScheduledDate && 'text-green-700 dark:text-green-400',
            )}
          />

          <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
            {hasScheduledDate ? 'Saved' : 'Save'}
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

        {/* Edit Button */}
        {user?.id === lessonPlan.creator.id && (
          <button
            className="group flex h-12 flex-col items-center"
            type="button"
            onClick={() => setEditModal(true)}
          >
            <PencilSquareIcon className="h-6 w-6 text-green-900 transition-colors duration-300 group-hover:text-green-700 group-focus:text-green-700 dark:text-navy-200 dark:group-hover:text-emerald-300 dark:group-focus:text-emerald-300" />

            <span className="mt-auto self-end text-xs text-slate-600 group-hover:text-slate-700 group-focus:text-slate-700 dark:text-navy-200 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100">
              Edit
            </span>
          </button>
        )}
      </div>

      {/* Save Modal */}
      <LessonPlanSaveDetailsModalForm
        lessonPlanId={id!}
        defaultStudentIds={[]}
        isVisible={isSaveModalOpen}
        close={() => setSaveModalOpen(false)}
      />

      {/* Edit Modal */}
      <LessonPlanEditModal
        close={() => setEditModal(false)}
        isVisible={editModal}
        lessonPlan={lessonPlan}
      />
    </>
  );
}
