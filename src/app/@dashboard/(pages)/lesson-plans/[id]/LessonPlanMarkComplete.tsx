'use client';

import Button from '@/lib/components/ui/Button';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import LessonPlanCompletionModal from './LessonPlanCompletionModal';

// * Props
interface IProps {
  isComplete: boolean;
}

export default function LessonPlanMarkComplete({ isComplete }: IProps) {
  // * State
  const [isCompletionModalOpen, setCompletionModalOpen] = useState(false);

  console.log('isComplete:', isComplete);

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
        isOpen={isCompletionModalOpen}
        close={() => setCompletionModalOpen(false)}
      />
    </>
  );
}
