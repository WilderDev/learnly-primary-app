'use client';

import MultiSelect from '@/lib/components/form/MultiSelect';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import LessonCreatorTopicSelect from './LessonCreatorTopicSelect';
import { Dispatch, SetStateAction } from 'react';
import { Database } from '@/assets/typescript/db';
import { createSelectOptions } from '@/lib/common/form.helpers';
import Select from '@/lib/components/form/Select';

// * Data
// Objectives
const objectiveOptions: Database['public']['Enums']['objective'][] = [
  'Analysis',
  'Application',
  'Comprehension',
  'Evaluation',
  'Knowledge',
  'Synthesis',
];
// Difficulties
const difficultyOptions: Database['public']['Enums']['difficulty'][] = [
  'EASY',
  'MODERATE',
  'CHALLENGING',
];
// Standards
const standardOptions: Database['public']['Enums']['standard'][] = [
  'Common Core',
  'Next Generation Science Standards',
  'Other',
];

// * Component
export default function LessonCreatorGoalsSection() {
  // * Hooks / Context
  const {
    showAdvancedGoals,
    toggleAdvancedGoals,
    objectives,
    setObjectives,
    difficulty,
    setDifficulty,
    standards,
    setStandards,
  } = useLessonCreator();

  // * Render
  return (
    <LessonCreatorFormSection
      title="Lesson Goals"
      description="What is your desired outcome?"
      colNum={1}
      isShowingAdvancedOptions={showAdvancedGoals}
      toggleAdvancedOptions={toggleAdvancedGoals}
    >
      {/* Subject / Level / Topic (Drilldown Select) */}
      <LessonCreatorTopicSelect />

      {/* Objectives (Multi-Select) */}
      <MultiSelect
        label="Objectives"
        options={createSelectOptions(objectiveOptions)}
        values={objectives}
        setValues={setObjectives as Dispatch<SetStateAction<string[]>>}
        cols={1}
      />

      {/* Advanced Options */}
      {showAdvancedGoals && (
        <>
          {/* Difficulty (Select) */}
          <Select
            label="Difficulty"
            options={createSelectOptions(difficultyOptions)}
            value={difficulty}
            setValue={setDifficulty as Dispatch<SetStateAction<string>>}
            cols={1}
          />

          {/* Standards (Multi-Select) */}
          <MultiSelect
            label="Standards"
            options={createSelectOptions(standardOptions)}
            values={standards}
            setValues={setStandards as Dispatch<SetStateAction<string[]>>}
            cols={1}
          />
        </>
      )}
    </LessonCreatorFormSection>
  );
}
