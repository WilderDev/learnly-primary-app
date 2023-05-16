'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useLessonCreator } from './LessonCreatorCtx';
import Button from '@/lib/components/ui/Button';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import LessonCreatorDock from './LessonCreatorDock';

// * Component
export default function LessonCreatorModal() {
  // * Hooks / Context
  const { id, lessonContent, complete, reset } = useLessonCreator();

  // * Return
  return (
    <>
      {/* Modal (Content) */}
      <Modal
        closeBtnLeft={true}
        closeBtn={complete}
        isVisible={lessonContent !== ''}
        close={() => reset(false)}
        noCloseOnOutsideClick={true}
      >
        {/* Header */}
        {complete && (
          <Button
            className="!p-3 absolute top-2 right-2 print:hidden"
            rounded="full"
            url={`/lesson-plans/${id}`}
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </Button>
        )}

        <div className="mt-6 mb-4 pr-4">
          <LessonPlanMarkdown content={lessonContent} />
        </div>
      </Modal>

      {/* Actions Dock */}
      {complete && <LessonCreatorDock />}
    </>
  );
}
