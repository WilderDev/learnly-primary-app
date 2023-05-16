'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import { createSelectOptions } from '@/lib/common/form.helpers';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { Dispatch, SetStateAction } from 'react';
import { IStudentPromptReq } from '@/assets/typescript/lesson-plan';
import { getAgeFromBirthday } from '@/lib/common/user.helpers';
import { Database } from '@/assets/typescript/db';
import TextArea from '@/lib/components/form/TextArea';

// * Data
// Materials
const materialOptions: Database['public']['Enums']['material'][] = [
  'Textbook',
  'Workbook',
  'Worksheet',
  'Manipulatives',
  'Technology',
  'Other',
];
// Learning Styles
const learningStyleOptions: Database['public']['Enums']['learning_style'][] = [
  'Visual',
  'Auditory',
  'Kinesthetic',
  'Verbal',
  'Logical',
  'Social',
];

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
      <MultiSelect
        label="Materials"
        options={createSelectOptions(materialOptions)}
        values={materials}
        setValues={setMaterials as Dispatch<SetStateAction<string[]>>}
        cols={2}
      />

      {/* Special Considerations (Textarea) */}
      <TextArea
        label="Special Considerations"
        value={specialConsiderations}
        setValue={setSpecialConsiderations}
        cols={3}
      />

      {/* Advanced Options */}
      {showAdvancedContext && (
        <>
          {/* Reflections (TSK) */}
          {/* TSK */}

          {/* Learning Styles (Multi-Select) */}
          <MultiSelect
            label="Learning Styles"
            options={createSelectOptions(learningStyleOptions)}
            values={learningStyles}
            setValues={setLearningStyles as Dispatch<SetStateAction<string[]>>}
            cols={2}
          />
        </>
      )}
    </LessonCreatorFormSection>
  );
}
