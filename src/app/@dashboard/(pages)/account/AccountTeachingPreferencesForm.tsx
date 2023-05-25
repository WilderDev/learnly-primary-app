'use client';

import { avatarImages } from '@/app/@marketing/(pages)/onboarding/avatarImages';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useAuth } from '@/lib/components/providers/AuthProvider';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { useEffect, useState } from 'react';
import { updateTeachingPreferences } from './_actions';
import { toast } from 'sonner';
import { revalidatePath } from 'next/cache';
import {
  ILessonDetailLevel,
  ILessonStructure,
  ITeachingStrategy,
  ITeachingTool,
} from '@/assets/typescript/user';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

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
    ITeachingStrategy[]
  >([]);
  const [teachingTools, setTeachingTools] = useState<ITeachingTool[]>([]);
  const [lessonDetailLevel, setLessonDetailLevel] =
    useState<ILessonDetailLevel>('Intermediate');
  const [lessonStructure, setLessonStructure] =
    useState<ILessonStructure | null>(null);

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
        label="Teaching Strategies"
        options={[]}
        value={teachingStrategies}
        setValues={setTeachingStrategies}
        icon={AcademicCapIcon}
      />

      {/* Teaching Tools (multi-select) */}

      {/* Lesson Detail Level (Select) */}

      {/* Lesson Structure (Select) */}

      {/* Submit */}
      <Button
        className="col-span-4"
        type="submit"
        loading={isLoading}
        disabled={isLoading || !lessonDetailLevel}
      >
        Save Teaching Preferences
      </Button>
    </Form>
  );
}
