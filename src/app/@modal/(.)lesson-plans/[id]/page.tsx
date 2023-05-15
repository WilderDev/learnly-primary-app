'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useInterceptionModal } from '../../InterceptionModalCtx';
import { useLessonCreator } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorCtx';
import Button from '@/lib/components/ui/Button';
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { toast } from 'sonner';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';

// * Props
interface IProps {
  params: {
    id: string;
  };
}

// * Component
export default function LessonPlanPageModal({ params: { id } }: IProps) {
  // * Hooks
  const { lessonContent, complete, reset } = useLessonCreator();

  // * Context
  const { isOpen, refresh, close } = useInterceptionModal();

  return (
    <Modal
      isVisible={isOpen && lessonContent !== ''}
      close={() =>
        isOpen &&
        !complete &&
        toast.error('Please wait for the lesson to finish generating :)')
      }
      portalName="interception-portal"
      closeBtn={false}
    >
      {/* Header */}
      {complete && (
        <div className="flex justify-between">
          {/* Close */}
          <Button
            fill="none"
            className="p-4"
            rounded="full"
            onClick={() => {
              reset(false);
              close();
            }}
          >
            <XMarkIcon className="w-6 h-6 text-slate-600 dark:text-navy-200" />
          </Button>

          {/* Expand */}
          <Button
            className="p-4"
            rounded="full"
            onClick={() => {
              reset(true);
              refresh();
            }}
          >
            <ArrowsPointingOutIcon className="w-6 h-6" />
          </Button>
        </div>
      )}

      <div className="my-4">
        <LessonPlanMarkdown content={lessonContent} />
      </div>
    </Modal>
  );
}
