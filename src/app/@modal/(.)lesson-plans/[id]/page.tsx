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
        isOpen && complete
          ? close()
          : toast.error('Please complete the lesson plan before closing.')
      }
      portalName="interception-portal"
      closeBtn={false}
    >
      {/* Header */}
      {complete && (
        <Button
          className="!p-3 absolute top-3 right-3"
          rounded="full"
          onClick={() => {
            reset(true);
            refresh();
          }}
        >
          <ArrowsPointingOutIcon className="w-5 h-5" />
        </Button>
      )}

      <div className="my-4">
        <LessonPlanMarkdown content={lessonContent} />
      </div>
    </Modal>
  );
}
