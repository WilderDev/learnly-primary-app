'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useRequest } from '@/lib/hooks/useRequest';
import { useState } from 'react';
import { markAsComplete } from './_actions';
import { toast } from 'sonner';
import Button from '@/lib/components/ui/Button';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import Form from '@/lib/components/form/Form';
import { useParams } from 'next/navigation';
import DatePicker from '@/lib/components/form/DatePicker';
import { revalidatePath } from 'next/cache';

// * Props
interface IProps {
  isOpen: boolean;
  close: () => void;
}

// * Component
export default function LessonPlanCompletionModal({ isOpen, close }: IProps) {
  // * Hooks
  const params = useParams();
  const lessonPlanId = params.id;

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(markAsComplete, {
    onSuccess: (data) => {
      if (data.ok) {
        close();
        toast.success('Lesson Plan Completed!');
        revalidatePath(`/lesson-plans/${lessonPlanId}`); // ✅
        revalidatePath('/'); // ✅
      } else {
        toast.error(
          'Something went wrong... Try again or contact support if the problem persists.',
        );
      }
    },
  });

  // * State
  const [completionDate, setCompletionDate] = useState<Date | null>(null);

  // * Render
  return (
    <Modal
      className="print:hidden"
      isVisible={isOpen}
      close={close}
      closeBtn={true}
      size="sm"
      noCloseOnOutsideClick={true}
    >
      <Modal.Header title="Save Lesson Plan" />

      <Modal.Body className="relative">
        <Form
          className="relative"
          action={() =>
            mutate({
              lesson_plan_id: lessonPlanId,
              completion_date: completionDate!,
            })
          }
        >
          {/* Scheduled Date */}
          <DatePicker
            cols={4}
            label="Completion Date"
            value={completionDate!}
            setValue={setCompletionDate}
            required={true}
            options={{
              minDate: 'today',
              defaultHour: new Date().getHours(),
              defaultMinute: 0,
              position: 'auto',
            }}
          />

          {/* Submit */}
          <Button
            className="col-span-4"
            type="submit"
            loading={isLoading}
            disabled={isLoading || !completionDate}
          >
            Mark as Complete! <CheckBadgeIcon className="w-5 h-5 ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
