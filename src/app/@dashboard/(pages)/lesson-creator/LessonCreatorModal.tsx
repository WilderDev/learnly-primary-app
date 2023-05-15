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
  const { id, lessonContent, complete } = useLessonCreator();

  // * Return
  return (
    <>
      {/* Modal (Content) */}
      <Modal
        isVisible={true}
        close={() => {}}
        closeBtn={false}
        noCloseOnOutsideClick={true}
      >
        {/* Header */}
        {complete && (
          <Button
            className="!p-3 absolute top-3 right-3 print:hidden"
            rounded="full"
            url={`/lesson-plans/${id}`}
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </Button>
        )}

        <div className="my-4">
          <LessonPlanMarkdown content={lessonContent} />
        </div>
      </Modal>

      {/* Actions Dock */}
      <LessonCreatorDock />
    </>
  );
}
