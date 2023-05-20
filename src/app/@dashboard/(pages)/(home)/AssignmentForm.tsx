'use client';

import { IAssignment } from '@/assets/typescript/assignment';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import DatePicker from '@/lib/components/form/DatePicker';
import Input from '@/lib/components/form/Input';
import Select from '@/lib/components/form/Select';
import TextArea from '@/lib/components/form/TextArea';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import { useAssignmentFormStore } from '@/lib/store/assignmentStore';
import {
  BookmarkSquareIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AssignmentActions from '../lesson-plans/[id]/AssignmentActions';
import {
  BoltIcon,
  HandThumbUpIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline';
import Modal from '@/lib/components/popouts/Modal';

interface IProps {
  isModal: boolean;
  userLessonPlan?: any;
}

export default function AssignmentForm({ isModal, userLessonPlan }: IProps) {
  const assignmentContent = useAssignmentFormStore(
    (state) => state.assignmentContent
  );

  const [lessons, setLessons] = useState([] as any);
  const [lessonOption, setLessonOption] = useState('');

  const [title, setTitle] = useState('');
  const [numberOfQuestions, setNumberofQuestions] = useState(3);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [additionalCommentsModal, setAdditionalCommentsModal] = useState(false);
  const [additionalComments, setAdditionalComments] = useState('');

  const isLoading = useAssignmentFormStore((state) => state.isLoading);
  const createAssignment = useAssignmentFormStore(
    (state) => state.createAssignment
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setAdditionalCommentsModal(false);
    e.preventDefault();
    if (isModal) {
      const selectedUserLessonPlan = lessons.filter(
        (lesson: { id: string }) => lesson.id === lessonOption
      )[0];

      createAssignment(
        selectedUserLessonPlan.id,
        selectedUserLessonPlan.lesson_plan_id,
        selectedUserLessonPlan.lesson_plan.title,
        numberOfQuestions,
        selectedUserLessonPlan.lesson_plan.content,
        selectedUserLessonPlan.lesson_plan.level.name,
        dueDate!
      );
    } else {
      const userLessonPlanData = await fetchUserLessonPlan(userLessonPlan.id);
      createAssignment(
        userLessonPlanData.id,
        userLessonPlanData.lesson_plan_id,
        title,
        numberOfQuestions,
        userLessonPlanData.lesson_plan.content,
        userLessonPlanData.lesson_plan.level.name,
        dueDate!
      );
    }
  };

  useEffect(() => {
    if (isModal) {
      const fetchData = async () => {
        const data = await fetchUserLessonPlans();
        setLessons(data);
      };
      fetchData();
    } else {
      setTitle(userLessonPlan.title + ' Assignment');
    }
  }, [isModal, userLessonPlan]);

  return (
    <>
      {assignmentContent ? (
        <div className="flex flex-col gap-4">
          <LessonPlanMarkdown content={assignmentContent} />
          <div className="flex justify-between gap-4">
            <Button
              className="w-full"
              onClick={() => setAdditionalCommentsModal(true)}
            >
              Regenerate <BoltIcon className="w-5 h-5 ml-2" />
            </Button>
            <Button className="w-full">
              Print <PrinterIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
          {isModal ? (
            <Select
              label="Lesson Selection"
              options={lessons.map(
                (lesson: { lesson_plan: { title: any }; id: any }) => ({
                  label: lesson.lesson_plan.title,
                  value: lesson.id,
                })
              )}
              value={lessonOption}
              setValue={setLessonOption as Dispatch<SetStateAction<string>>}
              cols={1}
              icon={BookmarkSquareIcon}
            />
          ) : (
            <Input
              label="Title"
              type="text"
              value={title}
              setValue={setTitle as Dispatch<SetStateAction<string>>}
              cols={1}
              icon={BookmarkSquareIcon}
            />
          )}

          <div className="flex gap-3 justify-between 2xl:flex-row flex-col">
            <Input
              label="Number Of Questions"
              type="number"
              className="w-full"
              value={numberOfQuestions}
              setValue={
                setNumberofQuestions as Dispatch<SetStateAction<number>>
              }
              cols={1}
              icon={QuestionMarkCircleIcon}
            />
            <DatePicker
              value={dueDate!}
              className="w-full"
              setValue={setDueDate}
              label={'Select a Due Date'}
              required={true}
              options={{
                minDate: 'today',
                defaultHour: new Date().getHours(),
                defaultMinute: 0,
                position: 'auto left',
              }}
            />
          </div>

          <TextArea
            value={additionalComments}
            setValue={setAdditionalComments as Dispatch<SetStateAction<string>>}
            label={'Additional Comments'}
          />
          <Button type="submit" loading={isLoading} disabled={isLoading}>
            Generate
          </Button>
        </form>
      )}
      <Modal
        close={() => setAdditionalCommentsModal(false)}
        isVisible={additionalCommentsModal}
      >
        {/* <Button onClick={handleDelete}>Delete</Button> */}
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
          <TextArea
            value={additionalComments}
            setValue={setAdditionalComments as Dispatch<SetStateAction<string>>}
            label={'Additional Comments'}
          />
          <Button className="w-full" type="submit">
            Submit <HandThumbUpIcon className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </Modal>
    </>
  );
}

export async function fetchUserLessonPlans(): Promise<any[]> {
  const supabase = supabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    // First, get all 'user_lesson_plan_id' from 'assignments'
    const { data: assignmentData, error: assignmentError } = await supabase
      .from('assignments')
      .select('user_lesson_plan_id');

    if (assignmentError) {
      throw new Error(assignmentError.message);
    }

    const assignedIds = assignmentData.map((a) => a.user_lesson_plan_id);
    const assignedIdsStr = `(${assignedIds.join(',')})`;

    const { data, error } = await supabase
      .from('user_lesson_plans')
      .select(
        `*, lesson_plan:lesson_plans(title, subject:subjects(name), content, level:levels(name))`
      )
      .not('id', 'in', assignedIdsStr)
      .eq('teacher_id', user?.id);

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);

    return data as any[];
  } else return [];
}

export async function fetchUserLessonPlan(id: string): Promise<any> {
  const supabase = supabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data, error } = await supabase
      .from('user_lesson_plans')
      .select(
        `*, lesson_plan:lesson_plans(title, subject:subjects(name), content, level:levels(name))`
      )
      .eq('lesson_plan_id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);

    return data as any;
  } else return;
}
