'use client';

import { Database } from '@/assets/typescript/db';
import Form from '@/lib/components/form/Form';
import Button from '@/lib/components/ui/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import LessonCreatorFormSection from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorFormSection';
import Select from '@/lib/components/form/Select';
import { createSelectOptions } from '@/lib/common/form.helpers';
import { difficultyOptions } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorGoals';
import {
  BookOpenIcon,
  ClockIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import Input from '@/lib/components/form/Input';
import { philosophyOptions } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorStructureSection';
import TextArea from '@/lib/components/form/TextArea';
import { ICurriculumLessonPromptReq } from '@/assets/typescript/curriculum-roadmaps';
import {
  IStudentPromptReq,
  ITeacherPromptReq,
} from '@/assets/typescript/lesson-plan';
import { useUser } from '@/lib/components/providers/UserProvider';
import { streamReader } from '@/lib/ai/stream';
import Modal from '@/lib/components/popouts/Modal';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';

// * Props
interface IProps {
  lesson: {
    curriculum_name: string;
    subject_name: string;
    level_name: string;
    topic_name: string;
    lesson_name: string;
    lesson_description: string;
    students: IStudentPromptReq['students'];
  };
}

// * Data

// * Component
export default function CurriculumLessonForm({ lesson }: IProps) {
  // * Hooks / Context
  const { user } = useUser();

  // * State
  const [lessonOutput, setLessonOutput] = useState('');
  const [philosophy, setPhilosophy] =
    useState<Database['public']['Enums']['philosophy']>('Eclectic/Relaxed');
  const [lengthInMin, setLengthInMin] = useState(60);
  const [difficulty, setDifficulty] =
    useState<Database['public']['Enums']['difficulty']>('MODERATE');
  const [additionalRequests, setAdditionalRequests] = useState('');
  const [loading, setLoading] = useState(false);

  // * Handlers
  const handleCreateLessonPlan = async () => {
    // 1. Set Initial States
    setLoading(true); // Set loading state

    // 2. Create Lesson Plan Request Body Objects
    const lessonBody: ICurriculumLessonPromptReq = {
      curriculum: lesson.curriculum_name,
      subject: lesson.subject_name,
      level: lesson.level_name,
      topic: lesson.topic_name,
      lessonName: lesson.lesson_name,
      lessonDescription: lesson.lesson_description,
      philosophy,
      length_in_min: lengthInMin,
      difficulty,
      additional_requests: additionalRequests,
    };
    const teacherBody: ITeacherPromptReq = {
      name: user?.firstName!,
      role: user?.type!,
      teaching_preferences: {},
    };

    // 3. Send Request to API
    try {
      // Generate Lesson Plan Request
      const res = await fetch('/api/ai/lesson-plans/curriculum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lessonBody,
          teacherBody,
          studentsBody: lesson.students,
        }),
      });

      if (!res.ok) return setLoading(false); // If not ok, return

      // Stream Response Body && Insert into Supabase
      streamReader(res.body!, setLessonOutput, async () => {
        console.log('CALLBACK');
      });
    } catch (e) {
      console.log(e);
    } finally {
      // Reset States
      setLoading(false); // Set loading state
    }

    console.log('Submitted');
  };

  // * Render
  return (
    <>
      {/* Lesson Plan Form */}
      <Form className="lg:grid-cols-3" onSubmit={handleCreateLessonPlan}>
        {/* Section 1 - Lesson Style */}
        <LessonCreatorFormSection
          small={true}
          title="Lesson Style"
          description="What type of lesson is this?"
          colNum={1}
          showAdvancedOptions={false}
        >
          {/* Philosophy (Select) */}
          <Select
            label="Philosophy"
            options={createSelectOptions(philosophyOptions)}
            value={philosophy}
            setValue={setPhilosophy as Dispatch<SetStateAction<string>>}
            cols={1}
            icon={BookOpenIcon}
          />

          {/* Difficulty */}
          <Select
            label="Difficulty"
            options={createSelectOptions(difficultyOptions)}
            value={difficulty}
            setValue={setDifficulty as Dispatch<SetStateAction<string>>}
            cols={1}
            icon={RocketLaunchIcon}
          />

          {/* Length in Minutes (Input[number]) */}
          <Input
            label="Length (min)"
            type="number"
            value={lengthInMin}
            setValue={setLengthInMin as Dispatch<SetStateAction<number>>}
            cols={1}
            icon={ClockIcon}
          />
        </LessonCreatorFormSection>

        {/* Section 2 - Lesson Requests */}
        <LessonCreatorFormSection
          small={true}
          title="Lesson Requests"
          description="What else do you want to include in this lesson?"
          colNum={2}
          showAdvancedOptions={false}
        >
          {/* Additional Requests */}
          <TextArea
            label="Additional Requests"
            value={additionalRequests}
            setValue={setAdditionalRequests}
            cols={3}
            rows={2}
          />
        </LessonCreatorFormSection>

        {/* Submit Button */}
        <Button
          className="md:col-start-2 lg:col-start-3"
          type="submit"
          loading={loading}
          disabled={loading || lesson.students.length === 0}
        >
          Create Lesson Plan
        </Button>
      </Form>

      {/* Lesson Plan Modal */}
      <Modal
        isVisible={lessonOutput !== ''}
        close={() => {}}
        noCloseOnOutsideClick={true}
      >
        <LessonPlanMarkdown content={lessonOutput} />
      </Modal>

      {/* No User Curriculum Modal */}
      <Modal
        isVisible={lesson.students.length === 0}
        close={() => {}}
        noCloseOnOutsideClick={true}
      >
        <h1>Hey!</h1>
        <h2>It looks like you haven&apos;t saved this curriculum...</h2>
        <p>To use the curriculum lesson generate, please save it first</p>
        <button>Save</button>
        {/* TSK TSK TSK */}
      </Modal>
    </>
  );
}
