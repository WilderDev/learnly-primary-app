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
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Modal from '@/lib/components/popouts/Modal';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import { createSelectOptions } from '@/lib/common/form.helpers';
import LessonPlanSaveDetailsModalForm from '../LessonPlanSaveDetailsModal';

// * Props
interface IProps {
  isModal?: boolean;
  lessonPlan?: ILessonPlan;
  userLessonPlanId?: string;
  lessonPlans?: {
    user_lesson_plan_id: string;
    lesson_plan_name: string;
    lesson_plan_content: string;
    lesson_plan_level_name: string;
  }[];
}

// * Component
export default function AssignmentCreatorForm({
  isModal = true,
  lessonPlan,
  userLessonPlanId,
  lessonPlans,
}: IProps) {
  // * State
  const [userLessonOption, setUserLessonOption] = useState('');
  const [additionalCommentsModal, setAdditionalCommentsModal] = useState(false); // TSK
  const [saveDetailsModalOpen, setSaveModalOpen] = useState(false);
  const [assignmentContent, setAssignmentContent] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState(
    `${lessonPlan ? lessonPlan.title + ' Assignment' : ''}`,
  );
  const [numberOfQuestions, setNumberofQuestions] = useState(3);
  const [assignmentDueDate, setAssignmentDueDate] = useState<Date | null>(null);
  const [additionalComments, setAdditionalComments] = useState('');
  const [isLoadingAssignment, setIsLoadingAssignment] = useState(false);
  const [assignmentActions, setAssignmentActions] = useState(false);
  const [printOptions, setPrintOptions] = useState(false);
  const [print, setPrint] = useState(false);

  // * Handlers / Helpers
  // Get Lesson Plan
  const getLP = lessonPlans?.find(
    (lp) => lp.user_lesson_plan_id === userLessonOption,
  );

  // Form Submit
  const handleAssignmentFormSubmit = async () => {
    // Set Initial States
    setPrintOptions(false);
    setIsLoadingAssignment(true);
    setAdditionalCommentsModal(false);
    setAssignmentActions(false);
    setPrint(false);

    // Validate Form
    const errors = [];

    if (!lessonPlan && !isModal) errors.push('Lesson Plan Required');
    if (!userLessonOption && isModal) errors.push('Must Select A Lesson');
    if (!assignmentTitle && !isModal) errors.push('Assignment Title Required');
    if (!assignmentDueDate) errors.push('Assignment Due Date Required');
    if (!numberOfQuestions) errors.push('Amount Of Questions Required');
    if (numberOfQuestions <= 0 || numberOfQuestions > 7)
      errors.push('Only 1-7 Questions Allowed');

    // Check for errors
    if (errors.length > 0) {
      errors.forEach((msg) => {
        toast.error(msg);
      });

      setIsLoadingAssignment(false);
      return;
    }

    // If the lesson plan isn't saved, save it
    if (!userLessonPlanId && !isModal) {
      setIsLoadingAssignment(false);
      toast.error(
        'You must save the lesson plan before you can create an assignment.',
        {
          style: {
            background: '#0284c7',
            border: '1px solid #a5f3fc',
            color: '#fff',
          },
        },
      );
      return setSaveModalOpen(true);
    }

    // Create Request Body
    const requestBody = {
      questions: numberOfQuestions,
      lessonPlanContent: isModal
        ? getLP?.lesson_plan_content
        : lessonPlan!.content,
      lessonPlanGrade: isModal
        ? getLP?.lesson_plan_level_name
        : lessonPlan!.level_name,
      additionalComments,
    };

    // Make Request
    const res = await fetch('/api/ai/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) return toast.error('Error Generating Assignment'); // Handle Error

    setAssignmentContent(''); // Reset Assignment Content

    // Set Assignment Content and Actions
    streamReader(res.body!, setAssignmentContent, async () => {});

    setAssignmentActions(true);
    setIsLoadingAssignment(false);
  };

  const handleSaveAssignment = async () => {
    // Save to Supabase
    const { ok } = await saveAssignment({
      title: isModal
        ? getLP?.lesson_plan_name! + ' Assignment'
        : assignmentTitle,
      content: assignmentContent,
      due_date: assignmentDueDate!,
      user_lesson_plan_id: userLessonPlanId || userLessonOption,
    });

    if (ok) {
      // Display success toast
      if (isModal) {
        setAssignmentContent('');
        setUserLessonOption('');

        setAssignmentActions(false);
      }
      setPrintOptions(true);
      setAssignmentActions(false);

      toast.success('Assignment Saved!');
    } else {
      // Display error toast
      toast.error('Failed to Save Assignment');
    }
  };

  // * Render
  return (
    <>
      {assignmentContent ? (
        <div className="flex flex-col gap-6">
          <LessonPlanMarkdown content={assignmentContent} print={print} />

          {assignmentActions && (
            <div className="flex items-center gap-x-6">
              <Button
                className="w-1/3"
                shadow="sm"
                variant="light"
                fill="outline"
                onClick={() => {
                  setAdditionalCommentsModal(true);
                }}
              >
                <span>Regenerate</span>
              </Button>

              <Button
                shadow="lg"
                className="w-full flex-grow"
                onClick={handleSaveAssignment}
              >
                Save
              </Button>
            </div>
          )}

          {/* Print Button */}
          {printOptions && (
            <Button className="mt-6" onClick={() => setPrint(true)}>
              Print
            </Button>
          )}
        </div>
      ) : (
        <Form className="w-full" onSubmit={handleAssignmentFormSubmit}>
          {isModal && lessonPlans ? (
            <Select
              label="Lesson Selection"
              options={createSelectOptions(
                lessonPlans.map((lp) => ({
                  label: lp.lesson_plan_name,
                  value: lp.user_lesson_plan_id,
                })),
              )}
              value={userLessonOption}
              setValue={setUserLessonOption as Dispatch<SetStateAction<string>>}
              cols={4}
              icon={BookmarkSquareIcon}
              displayLabel={true}
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
            min={1}
            max={7}
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
            <Button
              className="w-full"
              disabled={isLoadingAssignment}
              loading={isLoadingAssignment}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}

      {/* Additional Comments Modal */}
      <Modal
        isVisible={additionalCommentsModal}
        close={() => {
          setAdditionalComments('');
          setAdditionalCommentsModal(false);
        }}
      >
        <Form>
          <TextArea
            value={additionalComments}
            setValue={setAdditionalComments as Dispatch<SetStateAction<string>>}
            label={'What would you like to change?'}
            cols={4}
          />
          <div className="col-span-4">
            {/* Submit */}
            <Button
              className="w-full"
              type="button"
              disabled={isLoadingAssignment}
              loading={isLoadingAssignment}
              onClick={() => {
                handleAssignmentFormSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Save Modal */}
      {lessonPlan && (
        <LessonPlanSaveDetailsModalForm
          lessonPlanId={lessonPlan.id}
          defaultStudentIds={lessonPlan.students || []}
          isVisible={saveDetailsModalOpen}
          close={() => setSaveModalOpen(false)}
        />
      )}
    </>
  );
}
