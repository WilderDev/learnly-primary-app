'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import Select from '@/lib/components/form/Select';
import { createSelectOptions } from '@/lib/common/form.helpers';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { Dispatch, SetStateAction } from 'react';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';
import { getAgeFromBirthday } from '@/lib/common/user.helpers';

// * Data

export default function LessonCreatorContextSection() {
  // * Hooks / Context
  const {
    showAdvancedContext,
    toggleAdvancedContext,
    students,
    setStudents,
    materials,
    setMaterials,
    specialConsiderations,
    setSpecialConsiderations,
    reflections,
    setReflections,
    learningStyles,
    setLearningStyles,
  } = useLessonCreator();
  const { students: usersStudents } = useUser();

  // * Render
  return (
    <LessonCreatorFormSection
      title="Lesson Context"
      description="Who is this lesson for and what tools will you need?"
      colNum={3}
      isShowingAdvancedOptions={showAdvancedContext}
      toggleAdvancedOptions={toggleAdvancedContext}
    >
      {/* Students (Select) */}
      <MultiSelect
        label="Students"
        options={createSelectOptions(
          usersStudents.map((s) => ({
            value: s.id,
            label: `${s.firstName} ${s.lastName}`,
            image: s.avatarUrl,
          })),
        )}
        values={students.map((s) => s.id)}
        setValues={(ids) => {
          const lessonStudents: IStudentPromptReq['children'] = usersStudents
            .filter((s) => ids.includes(s.id))
            .map((s) => ({
              id: s.id,
              name: `${s.firstName} ${s.lastName}`,
              age: getAgeFromBirthday(s.birthday),
              avatarUrl: s.avatarUrl,
              learning_styles: s.learningStyles,
              // . . .
            }));

          setStudents(lessonStudents);
        }}
        cols={1}
      />

      {/* Materials (Multi-Select) */}
      {/* TSK */}

      {/* Special Considerations (Textarea) */}
      {/* TSK */}

      {/* Advanced Options */}
      {showAdvancedContext && (
        <>
          {/* Reflections (TSK) */}
          {/* TSK */}

          {/* Learning Styles (Multi-Select) */}
          {/* TSK */}
        </>
      )}
    </LessonCreatorFormSection>
  );
}
