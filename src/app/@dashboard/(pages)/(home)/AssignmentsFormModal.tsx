'use client';
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
import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export default function AssignmentsFormModal() {
  const [lessons, setLessons] = useState([] as any);
  const [numberOfQuestions, setNumberofQuestions] = useState(3);
  const [additionalContent, setAdditionalContent] = useState('');
  const isLoading = useAssignmentFormStore((state) => state.isLoading);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [options, setOptions] = useState('');
  const assignmentContent = useAssignmentFormStore(
    (state) => state.assignmentContent
  );
  const createAssignment = useAssignmentFormStore(
    (state) => state.createAssignment
  );

  const modalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLessonPlan = lessons.filter(
      (lesson: { id: string }) => lesson.id === options
    )[0];
    console.log(userLessonPlan);

    console.log(options, numberOfQuestions, additionalContent);

    // createAssignment(
    //   userLessonPlan.id,
    //   userLessonPlan.lesson_plan.title,
    //   numberOfQuestions,
    //   userLessonPlan.lesson_plan.content,
    //   userLessonPlan.lesson_plan.level.name,

    //   additionalContent
    // );
    createAssignment(
      userLessonPlan.id,
      userLessonPlan.lesson_plan_id,
      userLessonPlan.lesson_plan.title,
      numberOfQuestions,
      userLessonPlan.lesson_plan.content,
      userLessonPlan.lesson_plan.level.name,
      dueDate!
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserLessonPlans();
      setLessons(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {assignmentContent && <LessonPlanMarkdown content={assignmentContent} />}
      <h2 className="text-sm font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base xl:text-lg pb-5">
        Create An Assignment
      </h2>
      <form onSubmit={(e) => modalSubmit(e)} className="flex flex-col gap-6">
        <Select
          label="Lesson Selection"
          options={lessons.map(
            (lesson: { lesson_plan: { title: any }; id: any }) => ({
              label: lesson.lesson_plan.title,
              value: lesson.id,
            })
          )}
          value={options}
          setValue={setOptions as Dispatch<SetStateAction<string>>}
          cols={1}
          icon={BookmarkSquareIcon}
        />
        <div className="flex gap-3 justify-between 2xl:flex-row flex-col">
          <Input
            label="Number Of Questions"
            type="number"
            className="w-full"
            value={numberOfQuestions}
            setValue={setNumberofQuestions as Dispatch<SetStateAction<number>>}
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
          value={additionalContent}
          setValue={setAdditionalContent as Dispatch<SetStateAction<string>>}
          label={'Additional Comments'}
        />
        <Button
          type="submit"
          loading={isLoading}
          // disabled={isLoading || !topic || students.length === 0}
        >
          Generate
        </Button>
      </form>
    </div>
  );
}

export async function fetchUserLessonPlans(): Promise<any[]> {
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
      .eq('teacher_id', user?.id);

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);

    return data as any[];
  } else return [];
}
