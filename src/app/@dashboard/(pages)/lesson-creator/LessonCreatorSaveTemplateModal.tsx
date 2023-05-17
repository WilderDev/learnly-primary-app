'use client';

import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { MapIcon } from '@heroicons/react/24/solid';
import { useRequest } from '@/lib/hooks/useRequest';
import { saveLessonPlanTemplate } from './_actions';
import { toast } from 'sonner';
import { useLessonCreator } from './LessonCreatorCtx';
import { useState, useTransition } from 'react';
import Button from '@/lib/components/ui/Button';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function LessonCreatorSaveTemplateModal({
  isOpen,
  close,
}: IProps) {
  // * Hooks / Context
  const {
    topic,
    students,
    subject,
    difficulty,
    lengthInMin,
    pace,
    philosophy,
    format,
    learningStyles,
    teachingStrategy,
    materials,
    standards,
    objectives,
    specialConsiderations,
    level,
  } = useLessonCreator();

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(saveLessonPlanTemplate, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Lesson Plan Template Saved!');
        setTemplateTitle('');
      } else {
        toast.error(
          "Something went wrong... You might've already saved this lesson plan temaplate.",
        );
      }

      close();
    },
    onError: (error) => toast.error(error),
  });

  // * State
  const [templateTitle, setTemplateTitle] = useState('');
  let [isPending, startTransition] = useTransition();

  // * Render
  return (
    <Modal size="xs" portalName="alt-portal" isVisible={isOpen} close={close}>
      <Modal.Header title="Save as Template" />

      <Modal.Body>
        <Form>
          {/* Title Input */}
          <Input
            label="Template Title"
            value={templateTitle}
            setValue={setTemplateTitle}
            required={true}
            icon={MapIcon}
            cols={4}
            tabIndex={0}
            autoFocus={true}
          />

          {/* Submit */}
          <Button
            className="col-span-4"
            type="button"
            onClick={() =>
              startTransition(() =>
                mutate({
                  title: templateTitle,
                  information: {
                    subject: subject as { id: string; name: string } | null,
                    level: level as { id: string; name: string } | null,
                    topic: topic as { id: string; name: string } | null,
                    difficulty,
                    lengthInMin,
                    pace,
                    philosophy,
                    format,
                    learningStyles,
                    teachingStrategy,
                    materials,
                    standards,
                    objectives,
                    specialConsiderations: specialConsiderations || '',
                  },
                  students: students.map((s) => s.id) || [],
                }),
              )
            }
            loading={isLoading || isPending}
            disabled={isLoading || !templateTitle || isPending}
          >
            Save as Template
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
