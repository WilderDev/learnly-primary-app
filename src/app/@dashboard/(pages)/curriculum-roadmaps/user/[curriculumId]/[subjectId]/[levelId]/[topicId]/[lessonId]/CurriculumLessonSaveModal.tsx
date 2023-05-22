import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import { useRequest } from '@/lib/hooks/useRequest';
import { toast } from 'sonner';
import DatePicker from '@/lib/components/form/DatePicker';
import Button from '@/lib/components/ui/Button';
import { BookmarkSquareIcon } from '@heroicons/react/24/solid';
import { saveLessonPlan } from '@/app/@dashboard/(pages)/lesson-plans/[id]/_actions';

interface IProps {
  lessonPlanId: string;
  studentIds: string[];
  isVisible: boolean;
  close: () => void;
}

export default function CurriculumLessonSaveModal({
  lessonPlanId,
  studentIds,
  isVisible,
  close,
}: IProps) {
  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(saveLessonPlan, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Lesson Plan Saved!');
        close();
      } else {
        toast.error(
          "Something went wrong... You might've already saved this lesson plan.",
        );
      }
    },
    onError: (error) => toast.error(error),
  });

  // * State
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);

  // * Render
  return (
    <Modal
      closeBtn={true}
      noCloseOnOutsideClick={true}
      size="xs"
      isVisible={isVisible}
      close={close}
      portalName="alt-portal"
      className="overflow-y-visible"
    >
      <Modal.Header title="Save Lesson Plan" />

      <Modal.Body className="">
        <Form
          className="relative"
          action={() =>
            mutate({
              lesson_plan_id: lessonPlanId,
              scheduled_date: scheduledDate!,
              students: studentIds,
            })
          }
        >
          {/* Scheduled Date */}
          <DatePicker
            cols={4}
            label="Scheduled Date"
            value={scheduledDate!}
            setValue={setScheduledDate}
            required={true}
            options={{
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
              minDate: 'today',
              defaultHour: new Date().getHours() + 1,
              defaultMinute: 0,
              position: 'above right',
            }}
          />

          {/* Submit */}
          <Button
            className="col-span-4"
            type="submit"
            loading={isLoading}
            disabled={isLoading || !scheduledDate || studentIds.length === 0}
          >
            Save! <BookmarkSquareIcon className="w-5 h-5 ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
