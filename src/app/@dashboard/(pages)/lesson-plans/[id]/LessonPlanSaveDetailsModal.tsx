import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import { useRequest } from '@/lib/hooks/useRequest';
import { saveLessonPlan } from './_actions';
import { toast } from 'sonner';
import { useUser } from '@/lib/components/providers/UserProvider';
import DatePicker from '@/lib/components/form/DatePicker';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { createSelectOptions } from '@/lib/common/form.helpers';
import Button from '@/lib/components/ui/Button';

interface IProps {
  lessonPlanId: string;
  defaultStudentIds: string[];
  isVisible: boolean;
  close: () => void;
}

export default function LessonPlanSaveDetailsModalForm({
  lessonPlanId,
  defaultStudentIds,
  isVisible,
  close,
}: IProps) {
  // * Contexts
  const { students } = useUser();

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
  const [scheduledDate, setScheduledDate] = useState<Date | null>(new Date());
  const [savedStudents, setSavedStudents] =
    useState<string[]>(defaultStudentIds);

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
              students: savedStudents,
            })
          }
        >
          {/* Scheduled Date */}
          <DatePicker
            cols={2}
            label="Scheduled Date"
            value={scheduledDate!}
            setValue={setScheduledDate}
            required={true}
            options={{
              enableTime: true,
              dateFormat: 'Y-m-d H:i',
              minDate: 'today',
              defaultHour: new Date().getHours() + 1,
              position: 'above right',
            }}
          />

          {/* Students */}
          <MultiSelect
            label="Students"
            options={createSelectOptions(
              students.map((s) => ({
                value: s.id,
                label: `${s.firstName} ${s.lastName}`,
                image: s.avatarUrl,
              })),
            )}
            values={savedStudents}
            setValues={setSavedStudents}
            cols={2}
          />

          {/* Submit */}
          <Button
            className="col-span-4"
            type="submit"
            loading={isLoading}
            disabled={isLoading || !scheduledDate || !savedStudents.length}
          >
            Save!
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
