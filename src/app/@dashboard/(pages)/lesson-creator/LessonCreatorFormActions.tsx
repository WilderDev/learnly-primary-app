'use client';

import Button from '@/lib/components/ui/Button';
import { useLessonCreator } from './LessonCreatorCtx';
import { useState } from 'react';

import LessonCreatorSaveTemplateModal from './LessonCreatorSaveTemplateModal';

// * Component
export default function LessonCreatorFormActions() {
  // * Hooks / Context
  const { topic, reset, students, isLoading } = useLessonCreator();

  // * State
  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false);

  // * Render
  return (
    <>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between col-span-4">
        {/* Save as Template */}
        <Button
          fill="outline"
          type="button"
          onClick={() => setTemplateModalOpen(true)}
        >
          Save as Template
        </Button>

        {/* Form Buttons */}
        <div className="flex flex-col sm:flex-row space-x-4">
          {/* Reset */}
          <Button
            size="sm"
            fill="none"
            variant="dark"
            shadow="none"
            type="button"
            onClick={() => reset(true)}
          >
            Reset
          </Button>

          {/* Generate */}
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading || !topic || students.length === 0}
          >
            Generate
          </Button>
        </div>
      </div>

      {/* Template Modal */}
      <LessonCreatorSaveTemplateModal
        isOpen={isTemplateModalOpen}
        close={() => setTemplateModalOpen(false)}
      />
    </>
  );
}
