'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useLessonCreator } from './LessonCreatorCtx';
import Button from '@/lib/components/ui/Button';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/solid';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import LessonCreatorDock from './LessonCreatorDock';
import cn from '@/lib/common/cn';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

// * Component
export default function LessonCreatorModal() {
  // * Hooks / Context
  const { id, lessonContent, complete, reset, isLoading } = useLessonCreator();

  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

  // * Return
  return (
    <>
      {/* Modal (Content) */}
      <Modal
        closeBtn={false}
        isVisible={isLoading || lessonContent !== ''}
        close={() => reset(true)}
        noCloseOnOutsideClick={true}
        size="lg"
      >
        {/* Header */}
        {complete && (
          <Button
            type="button"
            onClick={() => reset(true)}
            className="!p-3 absolute top-2 right-2 print:hidden"
            rounded="full"
            url={`/lesson-plans/${id}`}
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </Button>
        )}

        <div ref={componentRef} className="print:p-6">
          {/* This is the new div */}
          <div className="mt-6 mb-4 pr-4">
            <LessonPlanMarkdown content={lessonContent} />
          </div>
        </div>
      </Modal>

      {/* Close Button */}
      {complete && (
        <button
          className={cn(
            'fixed print:hidden top-4 left-4 p-1 z-[1001] rounded-full group hocus:bg-slate-700 dark:hocus:bg-navy-800 transition-colors'
          )}
          onClick={() => reset(false)}
        >
          <XMarkIcon className="w-6 h-6 text-slate-300 group:text-slate-100 dark:text-navy-200 dark:focus:text-navy-100" />
        </button>
      )}

      {/* Actions Dock */}
      {complete && <LessonCreatorDock handlePrint={handlePrint} />}
    </>
  );
}
