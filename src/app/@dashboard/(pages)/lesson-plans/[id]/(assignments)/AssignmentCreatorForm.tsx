'use client';

import Form from '@/lib/components/form/Form';
import { Dispatch, SetStateAction, useState } from 'react';
import Input from '@/lib/components/form/Input';
import TextArea from '@/lib/components/form/TextArea';
import {
  BookmarkSquareIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import DatePicker from '@/lib/components/form/DatePicker';
import Button from '@/lib/components/ui/Button';
import Select from '@/lib/components/form/Select';
import { toast } from 'sonner';
import { streamReader } from '@/lib/ai/stream';
import { saveAssignment } from './_actions';

interface IProps {
  isModal: boolean;
  userLessonPlans?: any[];
  lessonPlan?: any;
  assignmentContent?: string;
  setAssignmentContent?: (value: SetStateAction<string>) => void;
}

export default function AssignmentCreatorForm({
  isModal,
  userLessonPlans,
  lessonPlan,
  assignmentContent,
  setAssignmentContent,
}: IProps) {
  // Helper Function
  const getLessonWithId = (id: string) => {
    return userLessonPlans?.filter((lessonPlan) => lessonPlan.id === id)[0];
  };

  // Data Options
  const [userLessonOption, setUserLessonOption] = useState('');

  // Modal Hooks
  const [additionalCommentsModal, setAdditionalCommentsModal] = useState(false);

  // Assignment Hooks
  const [assignmentTitle, setAssignmentTitle] = useState(
    `${lessonPlan ? lessonPlan.title + ' Assignment' : ''}`
  );
  const [numberOfQuestions, setNumberofQuestions] = useState(3);
  const [assignmentDueDate, setAssignmentDueDate] = useState<Date | null>(null);
  const [additionalComments, setAdditionalComments] = useState('');

  const handleAssignmentFormSubmit = async () => {
    const lessonPlanGrade = lessonPlan
      ? lessonPlan.level.name
      : getLessonWithId(userLessonOption).lesson_plan.level.name;
    const lessonPlanContent = lessonPlan
      ? lessonPlan.content
      : getLessonWithId(userLessonOption).lesson_plan.content;
    const _assignmentTitle =
      assignmentTitle !== ''
        ? assignmentTitle
        : getLessonWithId(userLessonOption).lesson_plan.title + ' Assignment';
    const lessonPlanId = lessonPlan
      ? lessonPlan.id
      : getLessonWithId(userLessonOption).lesson_plan_id;

    //  TSK We need to pull the user lesson plan id when we are on the lesson page this only works currently for the dashboard modal
    const userLessonPlanId = getLessonWithId(userLessonOption).id;

    const requestBody = {
      questions: numberOfQuestions,
      lessonPlanContent,
      lessonPlanGrade,
      additionalComments,
    };

    const res = await fetch('/api/ai/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) return toast.error('Error Generating Assignment');

    streamReader(res.body!, setAssignmentContent!, async (content) => {
      // Save to Supabase
      const { ok } = await saveAssignment({
        title: _assignmentTitle,
        due_date: assignmentDueDate!,
        content: content,
        lesson_plan_id: lessonPlanId,
        user_lesson_plan_id: userLessonPlanId,
      });

      if (ok) {
        // Display success toast
        toast.success('Assignment Generated!');
      } else {
        toast.error('Failed to Generate Assignment');
      }
    });
  };

  return (
    <>
      <Form className="w-full" onSubmit={handleAssignmentFormSubmit}>
        {isModal ? (
          // Check if we are rendering in the dashboard or on a lesson
          <Select
            label="Lesson Selection"
            options={(userLessonPlans ? userLessonPlans : [])!.map(
              (lesson: { lesson_plan: { title: any }; id: any }) => ({
                label: lesson.lesson_plan.title,
                value: lesson.id,
              })
            )}
            value={userLessonOption}
            setValue={setUserLessonOption as Dispatch<SetStateAction<string>>}
            cols={4}
            icon={BookmarkSquareIcon}
          />
        ) : (
          <Input
            label="Title"
            type="text"
            value={assignmentTitle}
            setValue={setAssignmentTitle as Dispatch<SetStateAction<string>>}
            cols={4}
            icon={BookmarkSquareIcon}
          />
        )}

        {/* Number Of Questions */}
        <Input
          label="Number Of Questions"
          type="number"
          className="w-full"
          value={numberOfQuestions}
          setValue={setNumberofQuestions as Dispatch<SetStateAction<number>>}
          cols={2}
          icon={QuestionMarkCircleIcon}
        />

        {/* Assignment Due Date */}
        <DatePicker
          value={assignmentDueDate!}
          className="w-full"
          setValue={setAssignmentDueDate}
          label={'Select a Due Date'}
          required={true}
          cols={2}
          options={{
            minDate: 'today',
            defaultHour: new Date().getHours(),
            defaultMinute: 0,
            position: `${isModal ? 'above center' : 'below center'}`,
          }}
        />

        {/* Additional Comments */}
        <TextArea
          value={additionalComments}
          setValue={setAdditionalComments as Dispatch<SetStateAction<string>>}
          label={'Additional Comments'}
          cols={4}
        />
        <div className="col-span-4">
          {/* Submit */}
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
