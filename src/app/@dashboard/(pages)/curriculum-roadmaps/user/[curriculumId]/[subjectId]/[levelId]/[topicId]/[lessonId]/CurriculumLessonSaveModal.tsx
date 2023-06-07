import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import { useRequest } from '@/lib/hooks/useRequest';
import { toast } from 'sonner';
import DatePicker from '@/lib/components/form/DatePicker';
import Button from '@/lib/components/ui/Button';
import { BookmarkSquareIcon } from '@heroicons/react/24/solid';
import { saveCurriculumLessonPlan } from '@/app/@dashboard/(pages)/curriculum-roadmaps/_actions';
import { useParams } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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
  // * Hooks / Context
  const params = useParams();

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(saveCurriculumLessonPlan, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Lesson Plan Saved!');
        revalidatePath(`/lesson-plans/${params.lessonId}`); // ✅
        revalidatePath('/schedule-builder'); // ✅
        revalidatePath('/'); // ✅
        close();
      } else {
        toast.error(
          "Something went wrong... You might've already saved this lesson plan.",
        );
      }
    },
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
              curriculum_lesson_id: params.lessonId,
              user_curriculum_id: params.curriculumId,
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
              dateFormat: 'D, M d (h:i K)',
              minDate: 'today',
              defaultHour: new Date().getHours() + 1,
              defaultMinute: 0,
              position: 'below right',
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
