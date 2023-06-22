'use client';

import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useState } from 'react';
import PrintableMarkdownContainer from '@/lib/components/markdown/PrintableMarkdownContainer';
import Button from '@/lib/components/ui/Button';
import {
  ILessonPlanWithCreator,
  IUserLessonPlanBasic,
} from '@/assets/typescript/lesson-plan';
import { usePrint } from '@/lib/hooks/usePrint';
import { PrinterIcon } from '@heroicons/react/24/outline';

// * Props
interface IProps {
  lessonPlan: ILessonPlanWithCreator;
  userLessonPlan?: IUserLessonPlanBasic;
  assignmentContent?: string;
}

// * Component
export default function Assignment({
  lessonPlan,
  userLessonPlan,
  assignmentContent,
}: IProps) {
  // * Hooks
  const { componentRef, handlePrint } = usePrint();

  return assignmentContent ? (
    <>
      <div className="flex items-center justify-between sm:flex-row pt-1">
        <h2 className="text-sm font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base xl:text-lg">
          Assignment
        </h2>
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
      </div>
      <div ref={componentRef}>
        <PrintableMarkdownContainer content={assignmentContent} />
      </div>

      {/* <Button onClick={handlePrint} className="print:hidden">
        Print
      </Button> */}
    </>
  ) : (
    <AssignmentCreatorForm
      isModal={false}
      lessonPlan={lessonPlan}
      userLessonPlan={userLessonPlan}
    />
  );
}
