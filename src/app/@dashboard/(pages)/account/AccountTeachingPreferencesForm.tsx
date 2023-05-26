'use client';

import { avatarImages } from '@/app/@marketing/(pages)/onboarding/avatarImages';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useAuth } from '@/lib/components/providers/AuthProvider';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { updateTeachingPreferences } from './_actions';
import { toast } from 'sonner';
import { revalidatePath } from 'next/cache';
import {
  TLessonDetailLevel,
  TLessonStructure,
  TTeachingStrategy,
  TTeachingTool,
} from '@/assets/typescript/user';
import MultiSelect from '@/lib/components/form/MultiSelect';
import {
  AcademicCapIcon,
  Square2StackIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';
import { createSelectOptions } from '@/lib/common/form.helpers';
import Select from '@/lib/components/form/Select';

// * Data
// Teaching Strategies
export const teachingStrategyOptions: TTeachingStrategy[] = [
  'Direct Instruction',
  'Cooperative Learning',
  'Inquiry-Based Learning',
  'Differentiated Instruction',
  'Expeditionary Learning',
  'Personalized Learning',
  'Blended Learning',
  'Project-Based Learning',
  'Problem-Based Learning',
  'Socratic Learning',
  'Other',
];

// Teaching Tools
export const teachingToolOptions: TTeachingTool[] = [
  'Whiteboard',
  'Slide_Presentation',
  'Video_Aids',
  'Physical_Manipulatives',
  'Interactive_Software',
  'Document_Camera',
  'Audio_Resources',
  'Art_Supplies',
  'Reading_Materials',
  'Science_Lab_Equipment',
  'Math_Tools',
  'Other',
];

// Lesson Detail Level
export const lessonDetailLevelOptions: TLessonDetailLevel[] = [
  'Basic',
  'Intermediate',
  'Detailed',
];

// Lesson Structure
export const lessonStructureOptions: TLessonStructure[] = [
  'Objective_Introduction',
  'Prior_Knowledge_Review',
  'New_Material_Presentation',
  'Guided_Practice',
  'Independent_Practice',
  'Discussion_or_Debate',
  'Student_Presentations',
  'Assessment',
  'Summary_and_Review',
  'Homework_Assignment',
  'Other',
];

// * Component
export default function AccountTeachingPreferencesForm() {
  // * Hooks / Context
  const { user } = useUser();
  const { session } = useAuth();

  // * Requests / Mutations
  const { mutate: updateTeachingPreferencesMutation, isLoading } = useRequest(
    updateTeachingPreferences,
    {
      onSuccess: (data) => {
        if (data.ok) {
          toast.success('Teaching Preferences Updated Successfully');
          revalidatePath('/account'); // ✅
          revalidatePath('/lesson-creator'); // ✅
        } else {
          toast.error('Something went wrong');
        }
      },
    },
  );

  // * State
  const [teachingStrategies, setTeachingStrategies] = useState<
    TTeachingStrategy[]
  >([]);
  const [teachingTools, setTeachingTools] = useState<TTeachingTool[]>([]);
  const [lessonDetailLevel, setLessonDetailLevel] =
    useState<TLessonDetailLevel>('Intermediate');
  const [lessonStructure, setLessonStructure] =
    useState<TLessonStructure | null>(null);

  // * Effects
  // Set Initial State from Context
  useEffect(() => {
    if (user && session) {
      setTeachingStrategies(user.teachingPreferences.teachingStrategies);
      setTeachingTools(user.teachingPreferences.teachingTools);
      setLessonDetailLevel(user.teachingPreferences.lessonDetailLevel);
      setLessonStructure(user.teachingPreferences.lessonStructure || null);
    }
  }, [user, session]);

  // * Render
  return (
    <Form
      action={() =>
        updateTeachingPreferencesMutation({
          teachingStrategies,
          lessonDetailLevel,
          teachingTools,
          lessonStructure,
        })
      }
    >
      {/* Teaching Strategies (multi select) */}
      <MultiSelect
        label="Favorite Teaching Strategies"
        options={createSelectOptions(teachingStrategyOptions)}
        values={teachingStrategies}
        setValues={setTeachingStrategies as Dispatch<SetStateAction<string[]>>}
        cols={4}
        icon={AcademicCapIcon}
      />

      {/* Teaching Tools (multi-select) */}
      <MultiSelect
        label="Favorite Teaching Tools"
        options={createSelectOptions(teachingToolOptions)}
        values={teachingTools}
        setValues={setTeachingTools as Dispatch<SetStateAction<string[]>>}
        cols={4}
        icon={WrenchScrewdriverIcon}
      />

      {/* Lesson Detail Level (Select) */}
      <Select
        label="Ideal Lesson Detail Level"
        options={createSelectOptions(lessonDetailLevelOptions)}
        value={lessonDetailLevel}
        setValue={setLessonDetailLevel as Dispatch<SetStateAction<string>>}
        cols={4}
        icon={Square2StackIcon}
      />

      {/* Lesson Structure (Select) */}
      <Select
        label="Ideal Lesson Structure"
        options={createSelectOptions(lessonStructureOptions)}
        value={lessonStructure}
        setValue={setLessonStructure as Dispatch<SetStateAction<string>>}
        cols={4}
        icon={Square3Stack3DIcon}
      />

      {/* Submit */}
      <Button
        className="col-span-4 mt-2.5"
        type="submit"
        loading={isLoading}
        disabled={isLoading || !lessonDetailLevel}
      >
        Save Teaching Preferences
      </Button>
    </Form>
  );
}
