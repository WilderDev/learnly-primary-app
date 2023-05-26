'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useAccount } from './AccountCtx';
import Image from 'next/image';
import { formatExactDateString } from '@/lib/common/date.helpers';
import Form from '@/lib/components/form/Form';
import DatePicker from '@/lib/components/form/DatePicker';
import RadioImages from '@/lib/components/form/RadioImages';
import { avatarImages } from '@/app/@marketing/(pages)/onboarding/avatarImages';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Input from '@/lib/components/form/Input';
import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/solid';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { createSelectOptions } from '@/lib/common/form.helpers';
import {
  TGoal,
  TLearningEnvironment,
  TLearningResource,
  TLearningStyle,
  TSpecialNeed,
} from '@/assets/typescript/user';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { editStudent } from './_actions';
import { revalidatePath } from 'next/cache';
import { toast } from 'sonner';

// * Data
// Learning Style Options
const learningStyleOptions: TLearningStyle[] = [
  'Visual',
  'Auditory',
  'Kinesthetic',
  'Verbal',
  'Logical',
  'Social',
];

// Goal Options
const goalOptions: TGoal[] = [
  'Improve_grades',
  'Increase_focus_and_concentration',
  'Enhance_time_management_skills',
  'Develop_strong_study_habits',
  'Boost_problem_solving_skills',
  'Strengthen_critical_thinking_skills',
  'Improve_memory_and_recall',
  'Enhance_writing_skills',
  'Build_reading_comprehension',
  'Improve_test-taking_strategies',
  'Expand_vocabulary',
  'Develop_public_speaking_skills',
  'Increase_confidence_in_learning',
];

// Learning Environment Options
const learningEnvironmentOptions: TLearningEnvironment[] = [
  'Quiet_and_individual',
  'Group_and_collaborative',
  'Structured_and_guided',
  'Flexible_and_self_directed',
  'Indoor',
  'Outdoor',
  'Digital',
  'Physical',
];

// Learning Resource Options
const learningResourceOptions: TLearningResource[] = [
  'Textbooks',
  'Workbooks',
  'Online_courses',
  'Educational_videos',
  'Interactive_games',
  'Podcasts',
  'Hands_on_activities',
  'Tutoring_sessions',
  'Group_discussions',
  'Flashcards',
  'Study_guides',
  'Project_based_learning',
];

// Special Needs Options
const specialNeedsOptions: TSpecialNeed[] = [
  'Dyslexia',
  'Dyscalculia',
  'Dysgraphia',
  'Attention_Deficit_Hyperactivity_Disorder',
  'Auditory_Processing_Disorder',
  'Nonverbal_Learning_Disability',
  'Autism',
];

// * Component
export default function AccountStudentsEditModal() {
  // * Hooks / Context
  const {
    studentEditId,
    setStudentEditId,
    setStudentDetailsId,
    getStudentFromId,
  } = useAccount();

  // * Mutations
  const { mutate: editStudentMutation, isLoading } = useRequest(editStudent, {
    onSuccess: (data) => {
      if (data.ok) {
        // Reset the form
        setName('');
        setBirthday(null);
        setAvatarUrl('');
        setLearningStyles([]);
        // setSubjects([]);
        // setInterests([]);
        setGoals([]);
        setLearningEnvironments([]);
        setLearningResources([]);
        setSpecialNeeds([]);

        // Revalidate the paths
        revalidatePath('/account'); // ✅
        revalidatePath('/lesson-creator'); // ✅

        // Toast success
        toast.success('Student profile edited successfully!');

        // Close the modal
        setStudentEditId(null);
      }
    },
  });

  // * State
  const student = getStudentFromId(studentEditId!);

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [learningStyles, setLearningStyles] = useState<TLearningStyle[]>([]);
  // const [subjects, setSubjects] = useState<string[]>([]);
  // const [interests, setInterests] = useState<string[]>([]);
  const [goals, setGoals] = useState<TGoal[]>([]);
  const [learningEnvironments, setLearningEnvironments] = useState<
    TLearningEnvironment[]
  >([]);
  const [learningResources, setLearningResources] = useState<
    TLearningResource[]
  >([]);
  const [specialNeeds, setSpecialNeeds] = useState<TSpecialNeed[]>([]);

  // * Effects
  // Set Initial Values
  useEffect(() => {
    if (student) {
      setName(`${student.firstName} ${student.lastName}`);
      setBirthday(new Date(student.birthday));
      setAvatarUrl(student.avatarUrl);
      setLearningStyles(student.learningStyles);
      // setSubjects(student.subjects);
      // setInterests(student.interests);
      setGoals(student.goals);
      setLearningEnvironments(student.learningEnvironments);
      setLearningResources(student.learningResources);
      setSpecialNeeds(student.specialNeeds);
    }
  }, [student]);

  // * Render
  return (
    <Modal
      className="overflow-visible"
      isVisible={!!studentEditId}
      close={() => setStudentEditId(null)}
      noCloseOnOutsideClick={true}
      closeBtn={true}
      size="lg"
    >
      {/* Header - Name + Age + Avatar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            className="w-12 h-12 rounded-full cursor-pointer hocus:scale-105 transition-all transform-gpu duration-300 hocus:shadow-lg"
            src={student?.avatarUrl || ''}
            alt={student?.firstName || ''}
            width={48}
            height={48}
            onClick={() => setShowAvatarPicker(!showAvatarPicker)}
          />

          <div className="ml-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-navy-50">
              {student?.firstName} {student?.lastName}
            </h2>

            <p className="text-sm text-slate-600 dark:text-navy-300">
              {formatExactDateString(student?.birthday!, {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Details Button */}
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => {
            setStudentEditId(null);
            setStudentDetailsId(student?.id!);
          }}
        >
          Details
        </button>
      </div>

      {/* Form */}
      <Form
        action={() =>
          editStudentMutation({
            studentId: student?.id!,
            name,
            birthday: birthday!.toDateString(),
            avatarUrl,
            learningStyles,
            // subjects,
            // interests,
            goals,
            learningEnvironments,
            learningResources,
            specialNeeds,
          })
        }
      >
        {/* Name */}
        <Input
          cols={2}
          value={name}
          setValue={setName}
          label="Name"
          placeholder="Timmy Turner"
          icon={UserIcon}
          required={true}
          autoFocus={true}
          autoComplete="off"
        />

        {/* Birthday */}
        <DatePicker
          value={birthday!}
          setValue={setBirthday}
          label="Birthday"
          required={true}
          options={{
            dateFormat: 'M d, Y',
            position: 'above right',
          }}
          cols={2}
        />

        {/* Avatar */}
        {showAvatarPicker && (
          <RadioImages
            cols={4}
            label="Avatar"
            value={avatarUrl}
            setValue={setAvatarUrl}
            options={avatarImages}
          />
        )}

        {/* Learning Styles (Multi) */}
        <MultiSelect
          label="Learning Styles"
          options={createSelectOptions(learningStyleOptions)}
          values={learningStyles}
          setValues={setLearningStyles as Dispatch<SetStateAction<string[]>>}
          cols={4}
          icon={AcademicCapIcon} // TSK
        />

        {/* Subject Preferences (Input Chips) */}
        {/* TSK */}

        {/* Interests (Input Chips) */}
        {/* TSK */}

        {/* Goals (Multi) */}
        <MultiSelect
          label="Goals"
          options={createSelectOptions(goalOptions)}
          values={goals}
          setValues={setGoals as Dispatch<SetStateAction<string[]>>}
          cols={4}
          icon={AcademicCapIcon} // TSK
        />

        {/* Learning Environment Preferences (Multi) */}
        <MultiSelect
          label="Learning Environment Preferences"
          options={createSelectOptions(learningEnvironmentOptions)}
          values={learningEnvironments}
          setValues={
            setLearningEnvironments as Dispatch<SetStateAction<string[]>>
          }
          cols={4}
          icon={AcademicCapIcon} // TSK
        />

        {/* Learning Resources Preferences (Multi) */}
        <MultiSelect
          label="Learning Resources Preferences"
          options={createSelectOptions(learningResourceOptions)}
          values={learningResources}
          setValues={setLearningResources as Dispatch<SetStateAction<string[]>>}
          cols={4}
          icon={AcademicCapIcon} // TSK
        />

        {/* Special Needs (Multi) */}
        <MultiSelect
          label="Special Needs"
          options={createSelectOptions(specialNeedsOptions)}
          values={specialNeeds}
          setValues={setSpecialNeeds as Dispatch<SetStateAction<string[]>>}
          cols={4}
          icon={AcademicCapIcon} // TSK
        />

        {/* Submit */}
        <Button className="col-span-4 mt-4" type="submit">
          Save Changes
        </Button>
      </Form>
    </Modal>
  );
}
