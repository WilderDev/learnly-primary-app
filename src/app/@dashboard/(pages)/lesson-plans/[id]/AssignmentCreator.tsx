'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAssignmentCreatorStore } from './AssignmentStore';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import Form from '@/lib/components/form/Form';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/components/providers/AuthProvider';
import Button from '@/lib/components/ui/Button';
import Input from '@/lib/components/form/Input';
import { BoltIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import TextArea from '@/lib/components/form/TextArea';
import DatePicker from '@/lib/components/form/DatePicker';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';

interface IProps {
  lessonPlan: ILessonPlan;
}

export const AssignmentCreator = ({ lessonPlan }: IProps) => {
  const { supabase } = useAuth();
  const title = useAssignmentCreatorStore((state) => state.title);
  const questions = useAssignmentCreatorStore((state) => state.questions);
  const isLoading = useAssignmentCreatorStore((state) => state.isLoading);
  const error = useAssignmentCreatorStore((state) => state.error);
  const setTitle = useAssignmentCreatorStore((state) => state.setTitle);
  const setQuestions = useAssignmentCreatorStore((state) => state.setQuestions);
  const submit = useAssignmentCreatorStore((state) => state.submit);
  const [additionalComments, setAdditionalComments] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submit(
      lessonPlan.id,
      title,
      questions,
      lessonPlan.content,
      lessonPlan.level,
      supabase
    );
  };

  useEffect(() => {
    setTitle(`${lessonPlan.title} Assignment`);
  }, [lessonPlan, setTitle]);

  return (
    // <form className="w-full mt-5" onSubmit={handleSubmit}>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //   >
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="title"
    //       >
    //         Title
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="title"
    //         type="text"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         placeholder="Enter Title"
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="questions"
    //       >
    //         Questions
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="questions"
    //         type="number"
    //         value={questions}
    //         onChange={(e) => setQuestions(Number(e.target.value))}
    //         placeholder="Enter Number of Questions"
    //       />
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <Button type="submit" loading={isLoading} disabled={isLoading}>
    //         Generate
    //       </Button>
    //     </div>
    //     {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    //   </motion.div>
    // </form>
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Input
        label="Title"
        type="text"
        value={title}
        setValue={setTitle as Dispatch<SetStateAction<string>>}
        cols={1}
        icon={BookmarkSquareIcon}
      />
      <div className="flex gap-3 justify-between 2xl:flex-row flex-col">
        <Input
          label="Number Of Questions"
          type="number"
          className="w-full"
          value={questions}
          setValue={setQuestions as Dispatch<SetStateAction<number>>}
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
            position: 'below center',
          }}
        />
      </div>

      <TextArea
        value={additionalComments}
        setValue={setAdditionalComments as Dispatch<SetStateAction<string>>}
        label={'Additional Comments'}
      />

      <Button
        type="submit"
        loading={isLoading}
        disabled={isLoading}
        className="w-full"
      >
        Generate
      </Button>
    </form>
  );
};
