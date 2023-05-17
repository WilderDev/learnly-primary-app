'use client';

import Button from '@/lib/components/ui/Button';
import { useLessonCreator } from './LessonCreatorCtx';
import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { MapIcon } from '@heroicons/react/24/solid';

// * Component
export default function LessonCreatorFormActions() {
  // * Hooks / Context
  const { isLoading, topic, reset, saveAsTemplate, students } =
    useLessonCreator();

  // * State
  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false);
  const [templateTitle, setTemplateTitle] = useState('');

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
            disabled={isLoading || !topic || !students.length}
          >
            Generate
          </Button>
        </div>
      </div>

      {/* Template Modal */}
      <Modal
        size="xs"
        portalName="alt-portal"
        isVisible={isTemplateModalOpen}
        close={() => setTemplateModalOpen(false)}
      >
        <Modal.Header title="Save as Template" />

        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              saveAsTemplate(templateTitle);
              setTemplateModalOpen(false);
            }}
          >
            {/* Title Input */}
            <Input
              label="Template Title"
              value={templateTitle}
              setValue={setTemplateTitle}
              required={true}
              icon={MapIcon}
              cols={4}
            />

            {/* Submit */}
            <Button
              className="col-span-4"
              type="submit"
              loading={isLoading}
              disabled={isLoading || !templateTitle}
            >
              Save as Template
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
