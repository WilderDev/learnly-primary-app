import { useState } from 'react';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import { useRequest } from '@/lib/hooks/useRequest';
import { toast } from 'sonner';
import { useUser } from '@/lib/components/providers/UserProvider';
import DatePicker from '@/lib/components/form/DatePicker';
import Button from '@/lib/components/ui/Button';
import Image from 'next/image';
import cn from '@/lib/common/cn';
import { getAgeFromBirthday } from '@/lib/common/date.helpers';
import {
  BookmarkSquareIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { saveLessonPlan } from './_actions';
import { revalidatePath } from 'next/cache';

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
  // * Contexts / Hooks
  const { students } = useUser();

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(saveLessonPlan, {
    onSuccess: (data) => {
      if (data.ok) {
        toast.success('Lesson Plan Saved!');
        revalidatePath(`/lesson-plans`); // ✅
        revalidatePath('/schedule-builder'); // ✅
        revalidatePath('/'); // ✅
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
              position: 'above right',
            }}
          />

          {/* Students */}
          <div className="flex flex-col col-span-4">
            <label className="mb-1 block">
              <span className="pl-1 text-slate-600 dark:text-navy-200">
                Students
              </span>
            </label>

            {students?.map((student) => (
              <button
                className={cn(
                  'flex items-center justify-between space-x-4 rounded-md px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
                  savedStudents.includes(student.id)
                    ? 'bg-green-100 ring-2 ring-green-700 dark:bg-navy-900'
                    : 'hover:bg-slate-50 dark:hover:bg-navy-600',
                )}
                type="button"
                onClick={(e) => {
                  if (savedStudents.includes(student.id)) {
                    setSavedStudents(
                      savedStudents.filter((id) => id !== student.id),
                    );
                  } else {
                    setSavedStudents([...savedStudents, student.id]);
                  }

                  e.currentTarget.blur();
                }}
                key={student.id}
              >
                {/* Image */}
                <Image
                  className="rounded-full"
                  src={student.avatarUrl}
                  alt={student.firstName}
                  width={40}
                  height={40}
                />

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-navy-50">
                    {student.firstName} {student.lastName}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-navy-200">
                    Age: {getAgeFromBirthday(student.birthday)}
                  </p>
                </div>

                {/* Check or X */}
                {savedStudents.includes(student.id) ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-slate-400" />
                )}
              </button>
            ))}
          </div>

          {/* Submit */}
          <Button
            className="col-span-4"
            type="submit"
            loading={isLoading}
            disabled={isLoading || !scheduledDate || !savedStudents.length}
          >
            Save! <BookmarkSquareIcon className="w-5 h-5 ml-2" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
