'use client';

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
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Input from '@/lib/components/form/Input';
import { philosophyOptions } from '@/app/@dashboard/(pages)/lesson-creator/LessonCreatorStructureSection';
import TextArea from '@/lib/components/form/TextArea';
import {
  ICurriculumFormData,
  ICurriculumLessonPromptReq,
} from '@/assets/typescript/curriculum-roadmaps';
import {
  IStudentPromptReq,
  ITeacherPromptReq,
  TDifficulty,
  TPhilosophy,
} from '@/assets/typescript/lesson-plan';
import { useUser } from '@/lib/components/providers/UserProvider';
import { streamReader } from '@/lib/ai/stream';
import Modal from '@/lib/components/popouts/Modal';
import PrintableMarkdownContainer from '@/lib/components/markdown/PrintableMarkdownContainer';
import { useAuth } from '@/lib/components/providers/AuthProvider';
import CurriculumLessonDock from './CurriculumLessonDock';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import cn from '@/lib/common/cn';
import { getAgeFromBirthday } from '@/lib/common/date.helpers';
import { usePrint } from '@/lib/hooks/usePrint';

// * Props
interface IProps {
  lesson: ICurriculumFormData;
  studentIds: string[];
}

// * Data

const philosophyInfoBubbleText: string = `A "Philosophy" refers to the overarching approach or methodology a parent/educator utilizes to guide their instruction. This can dictate the style of lessons, types of activities, and overall educational goals. It's like a lens through which the homeschooling journey is viewed, often aligning with a family's values or a child's learning style.`;

// * Component
export default function CurriculumLessonForm({ lesson, studentIds }: IProps) {
  // * Hooks / Context
  const { user, students: userStudents } = useUser();
  const { supabase } = useAuth();
  const router = useRouter();
  const { componentRef, handlePrint } = usePrint();

  // * State
  const [lessonOutput, setLessonOutput] = useState('');
  const [philosophy, setPhilosophy] = useState<TPhilosophy>('Eclectic/Relaxed');
  const [lengthInMin, setLengthInMin] = useState(60);
  const [difficulty, setDifficulty] = useState<TDifficulty>('MODERATE');
  const [additionalRequests, setAdditionalRequests] = useState('');
  const [loading, setLoading] = useState(false);
  const [lessonId, setLessonId] = useState('');
  // const [print, setPrint] = useState(false);

  // * Handlers
  // Create Lesson Plan (Modal)
  const handleCreateLessonPlan = async () => {
    // 1. Set Initial States
    setLoading(true); // Set loading state
    setLessonId(''); // Set complete state

    // 2. Create Lesson Plan Request Body Objects
    const lessonBody: ICurriculumLessonPromptReq = {
      curriculum: lesson.curriculum.name,
      subject: lesson.subject.name,
      level: lesson.level.name,
      topic: lesson.topic.name,
      lessonName: lesson.lesson.name,
      lessonDescription: lesson.lesson.description,
      philosophy,
      length_in_min: lengthInMin,
      difficulty,
      additional_requests: additionalRequests,
    };
    const teacherBody: ITeacherPromptReq = {
      name: user?.firstName!,
      role: user?.type!,
      teaching_preferences: user?.teachingPreferences,
    };
    const studentsBody: IStudentPromptReq['students'] = studentIds.map(
      (studentId) => {
        const student = userStudents.find((s) => s.id === studentId)!;

        return {
          id: studentId,
          name: student.firstName + ' ' + student.lastName,
          age: getAgeFromBirthday(student.birthday),
          learningStyles: student.learningStyles,
          favoriteSubjects: student.favoriteSubjects,
          interests: student.interests,
          goals: student.goals,
          learningEnvironments: student.learningEnvironments,
          learningResources: student.learningResources,
          specialNeeds: student.specialNeeds,
        };
      },
    );

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
          studentsBody,
        }),
      });

      if (!res.ok) return setLoading(false); // If not ok, return

      // Stream Response Body && Insert into Supabase
      streamReader(res.body!, setLessonOutput, async (content) => {
        // 1. Save to Supabase
        const { data, error } = await supabase
          .from('lesson_plans')
          .insert({
            subject: lesson.subject.subjectId,
            level: lesson.level.levelId,
            topic: lesson.topic.topicId,
            content,
            creator_id: user?.id!,
            title: lesson.lesson.name,
            image_path: lesson.lesson.image_path,
            length_in_min: lengthInMin,
            tags: [lesson.subject.name, lesson.level.name, lesson.topic.name],
          })
          .select('id')
          .single();

        if (error) {
          toast.error('Error saving lesson plan');
        } else {
          toast.success('Lesson Plan Generated!', {
            action: {
              label: 'View Lesson Plan',
              onClick: () => router.push(`/lesson-plans/${data.id}`),
            },
            duration: 10000,
          });

          // 2. Set States
          setLessonId(data.id); // Set lesson id

          // 3. Save Lesson Plan Ids to Lesson
          const { error: lesson_plan_ids_error } = await supabase.rpc(
            'add_item_to_array',
            {
              p_table_name: 'curriculum_lessons',
              p_column_name: 'lesson_plan_ids',
              p_id_column: 'id',
              p_id_value: lesson.lesson.id,
              p_item_value: data.id,
            },
          );
        }
      });
    } catch (e) {
      toast.error('Error generating lesson plan');
    } finally {
      // Reset States
      setLoading(false); // Set loading state
    }
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
            infoBubbleUrl={
              'https://www.learnly.ai/articles/homeschool/homeschool-philosophies-unlock-the-truth'
            }
            infoBubbleText={philosophyInfoBubbleText}
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
          disabled={loading || studentIds.length === 0}
        >
          Create Lesson Plan
        </Button>
      </Form>

      {/* Lesson Plan Modal */}
      <Modal
        isVisible={lessonOutput !== ''}
        close={() => window.location.reload()}
        noCloseOnOutsideClick={true}
        size="lg"
      >
        <div ref={componentRef}>
          <PrintableMarkdownContainer content={lessonOutput} />
        </div>
      </Modal>

      {lessonId && (
        <CurriculumLessonDock
          lessonId={lessonId}
          studentIds={studentIds}
          shareUrl={`/lesson-plans/${lessonId}`}
          handlePrint={handlePrint}
        />
      )}

      {/* Close Button */}
      {lessonId && (
        <button
          className={cn(
            'fixed print:hidden top-4 left-4 p-1 z-[1001] rounded-full group hocus:bg-slate-700 dark:hocus:bg-navy-800 transition-colors',
          )}
          onClick={() => window.location.reload()}
        >
          <XMarkIcon className="w-6 h-6 text-slate-300 group:text-slate-100 dark:text-navy-200 dark:focus:text-navy-100" />
        </button>
      )}
    </>
  );
}
