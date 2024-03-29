'use client';

import Button from '@/lib/components/ui/Button';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import LessonPlanCompletionModal from './LessonPlanCompletionModal';

// * Props
interface IProps {
  isComplete: boolean;
  lessonPlanIdProp?: string;
}

export default function LessonPlanMarkComplete({
  isComplete,
  lessonPlanIdProp,
}: IProps) {
  // * State
  const [isCompletionModalOpen, setCompletionModalOpen] = useState(false);

  // * Render
  return (
    <>
      {/* Mark Complete Button */}
      {isComplete ? (
        <Button className="mt-6 w-full print:hidden" type="button" disabled>
          Completed <CheckCircleIcon className="w-5 h-5 ml-2" />
        </Button>
      ) : (
        <Button
          className="mt-6 w-full print:hidden"
          type="button"
          onClick={() => setCompletionModalOpen(true)}
        >
          Mark as Complete <CheckCircleIcon className="w-5 h-5 ml-2" />
        </Button>
      )}

      {/* Completion Modal */}
      <LessonPlanCompletionModal
        lessonPlanIdProp={lessonPlanIdProp}
        isOpen={isCompletionModalOpen}
        close={() => setCompletionModalOpen(false)}
      />
    </>
  );
}
