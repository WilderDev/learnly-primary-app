'use client';

import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import { createSelectOptions } from '@/lib/common/form.helpers';
import MultiSelect from '@/lib/components/form/MultiSelect';
import { Dispatch, SetStateAction } from 'react';

import { Database } from '@/assets/typescript/db';
import TextArea from '@/lib/components/form/TextArea';
import { BeakerIcon, FlagIcon } from '@heroicons/react/24/outline';
import { TMaterial } from '@/assets/typescript/lesson-plan';
import { TLearningStyle } from '@/assets/typescript/user';

// * Data
// Materials
const materialOptions: TMaterial[] = [
  'Textbook',
  'Workbook',
  'Worksheet',
  'Manipulatives',
  'Technology',
  'Other',
];
// Learning Styles
const learningStyleOptions: TLearningStyle[] = [
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
    materials,
    setMaterials,
    specialConsiderations,
    setSpecialConsiderations,
    learningStyles,
    setLearningStyles,
  } = useLessonCreator();

  // * Render
  return (
    <LessonCreatorFormSection
      title="Lesson Context"
      description="Who is this lesson for and what tools will you need?"
      colNum={3}
      isShowingAdvancedOptions={showAdvancedContext}
      toggleAdvancedOptions={toggleAdvancedContext}
    >
      {/* Special Considerations (Textarea) */}
      <TextArea
        label="Special Considerations"
        value={specialConsiderations || ''}
        setValue={setSpecialConsiderations}
        cols={3}
        // icon={FlagIcon}
        rows={2}
      />

      {/* Advanced Options */}
      {showAdvancedContext && (
        <>
          {/* Learning Styles (Multi-Select) */}
          <MultiSelect
            label="Learning Styles"
            options={createSelectOptions(learningStyleOptions)}
            values={learningStyles}
            setValues={setLearningStyles as Dispatch<SetStateAction<string[]>>}
            cols={2}
            icon={BeakerIcon}
          />

          {/* Materials (Multi-Select) */}
          {/* <MultiSelect
        label="Materials"
        options={createSelectOptions(materialOptions)}
        values={materials}
        setValues={setMaterials as Dispatch<SetStateAction<string[]>>}
        cols={2}
      /> */}
        </>
      )}
    </LessonCreatorFormSection>
  );
}
