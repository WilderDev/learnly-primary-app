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
import { BoltIcon } from '@heroicons/react/24/outline';
import { createPdf } from '@/lib/common/createPdf';
import { downloadPdf } from '@/lib/common/downloadPdf';

interface IProps {
  isModal: boolean;
  userLessonPlans?: any[];
  setUserLessonPlans?: (value: SetStateAction<any[]>) => void;
  lessonPlan?: any;
  assignmentContent?: string;
  setAssignmentContent?: (value: SetStateAction<string>) => void;
}

export default function AssignmentCreatorForm({
  isModal,
  userLessonPlans,
  setUserLessonPlans,
  lessonPlan,
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
  const [assignmentContent, setAssignmentContent] = useState('');
  const [assignmentTitle, setAssignmentTitle] = useState(
    `${lessonPlan ? lessonPlan.title + ' Assignment' : ''}`
  );
  const [numberOfQuestions, setNumberofQuestions] = useState(3);
  const [assignmentDueDate, setAssignmentDueDate] = useState<Date | null>(null);
  const [additionalComments, setAdditionalComments] = useState('');
  const [isLoadingAssignment, setIsLoadingAssignment] = useState(false);
  const [assignmentActions, setAssignmentActions] = useState(false);
  const [printOptions, setPrintOptions] = useState(false);

  // Pending Save Assignment
  const [pendingSaveAssignment, setPendingSaveAssignment] = useState({
    title: '',
    due_date: new Date(),
    content: '',
    lesson_plan_id: '',
    user_lesson_plan_id: '',
    additionalComments: '',
  });

  const handleAssignmentFormSubmit = async () => {
    setPrintOptions(false);
    setIsLoadingAssignment(true);
    setAdditionalCommentsModal(false);
    setAssignmentActions(false);

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

    if (!isModal && !lessonPlan.user_lesson_plan) {
      toast.error('You must save the lesson to create an assignment!');
      setIsLoadingAssignment(false);
      return;
    }

    const userLessonPlanId = lessonPlan
      ? lessonPlan.user_lesson_plan.id
      : getLessonWithId(userLessonOption).id;

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

    setAssignmentContent(' ');
    streamReader(res.body!, setAssignmentContent!, async (content) => {
      // Set to pending save
      setPendingSaveAssignment({
        title: _assignmentTitle,
        due_date: assignmentDueDate!,
        content: content,
        lesson_plan_id: lessonPlanId,
        user_lesson_plan_id: userLessonPlanId,
        additionalComments: additionalComments,
      });
      setAssignmentActions(true);
    });
    setIsLoadingAssignment(false);
  };

  const handleSaveAssignment = async () => {
    // Save to Supabase

    const { ok } = await saveAssignment(pendingSaveAssignment);

    if (ok) {
      // Display success toast
      if (isModal) {
        setAssignmentContent('');
        setUserLessonOption('');
        const filteredLessonPlans = userLessonPlans?.filter(
          (lesson) => lesson.id !== userLessonOption
        );
        setUserLessonPlans!(filteredLessonPlans!);

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

  const handleReset = () => {
    setPrintOptions(false);
    setAssignmentContent('');
    setUserLessonOption('');
    setAdditionalComments('');
    setAssignmentDueDate(null);
    setNumberofQuestions(3);
  };

  const handlePrint = async () => {
    const requestBody = {
      markdown: assignmentContent,
    };
    const res = await fetch('/api/print', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) return toast.error('Error Printing Assignment');

    downloadPdf(
      res,
      `${assignmentTitle.toLowerCase().split(' ').join('_')}_worksheet`
    );
  };

  return (
    <>
      {assignmentContent ? (
        <div className="flex flex-col gap-6">
          <LessonPlanMarkdown content={assignmentContent} />
          {assignmentActions && (
            <div className="flex items-center gap-2">
              <div className="w-full flex gap-2">
                <Button
                  className="w-full hocus:text-white"
                  variant="dark"
                  fill="outline"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  className="w-full flex items-center"
                  onClick={() => {
                    setAdditionalCommentsModal(true);
                  }}
                >
                  <span>Regenerate</span>
                  {/* <BoltIcon className="h-4 w-4" /> */}
                </Button>
              </div>
              <div className="w-full">
                <Button className="w-full" onClick={handleSaveAssignment}>
                  Save
                </Button>
              </div>
            </div>
          )}
          {printOptions && <Button onClick={handlePrint}>Print</Button>}
        </div>
      ) : (
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
    </>
  );
}
