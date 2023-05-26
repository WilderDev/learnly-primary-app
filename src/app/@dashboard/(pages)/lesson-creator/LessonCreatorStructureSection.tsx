'use client';

import Select from '@/lib/components/form/Select';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import { Database } from '@/assets/typescript/db';
import { createSelectOptions } from '@/lib/common/form.helpers';
import { Dispatch, SetStateAction } from 'react';
import Input from '@/lib/components/form/Input';
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  ClockIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import { TFormat, TPace, TPhilosophy } from '@/assets/typescript/lesson-plan';
import { TTeachingStrategy } from '@/assets/typescript/user';

// * Data
// Philosophy
export const philosophyOptions: TPhilosophy[] = [
  'Eclectic/Relaxed',
  'Traditional',
  'Montessori',
  'Unschooling',
  'Unit Studies',
  'Project-Based',
  'Waldorf',
  'Reggio Emilia',
  'Classical',
  'Charlotte Mason',
  'Other',
];
// Teaching Strategy
const teachingStrategyOptions: TTeachingStrategy[] = [
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
// Pace
export const paceOptions: TPace[] = ['SLOW', 'MEDIUM', 'FAST'];
// Format
const formatOptions: TFormat[] = ['Whole Group', 'Small Group', 'Individual'];

// * Component
export default function LessonCreatorStructureSection() {
  // * Hooks / Context
  const {
    showAdvancedStructure,
    toggleAdvancedStructure,
    philosophy,
    setPhilosophy,
    teachingStrategy,
    setTeachingStrategy,
    lengthInMin,
    setLengthInMin,
    pace,
    setPace,
    format,
    setFormat,
  } = useLessonCreator();

  // * Render
  return (
    <LessonCreatorFormSection
      title="Lesson Structure"
      description="How will you achieve your desired outcome?"
      colNum={2}
      isShowingAdvancedOptions={showAdvancedStructure}
      toggleAdvancedOptions={toggleAdvancedStructure}
    >
      {/* Philosophy (Select) */}
      <Select
        label="Philosophy"
        options={createSelectOptions(philosophyOptions)}
        value={philosophy}
        setValue={setPhilosophy as Dispatch<SetStateAction<string>>}
        cols={2}
        icon={BookOpenIcon}
      />

      {/* Teaching Strategy (Select) */}
      <Select
        label="Teaching Strategy"
        options={createSelectOptions(teachingStrategyOptions)}
        value={teachingStrategy}
        setValue={setTeachingStrategy as Dispatch<SetStateAction<string>>}
        cols={2}
        icon={BuildingLibraryIcon}
      />

      {/* Advanced Options */}
      {showAdvancedStructure && (
        <>
          {/* Length in Minutes (Input[number]) */}
          <Input
            label="Length in Minutes"
            type="number"
            value={lengthInMin}
            setValue={setLengthInMin as Dispatch<SetStateAction<number>>}
            cols={1}
            icon={ClockIcon}
          />

          {/* Pace (Select) */}
          <Select
            label="Pace"
            options={createSelectOptions(paceOptions)}
            value={pace}
            setValue={setPace as Dispatch<SetStateAction<string>>}
            cols={1}
            icon={BoltIcon}
          />

          {/* Format (Select) */}
          {/* <Select
            label="Format"
            options={createSelectOptions(formatOptions)}
            value={format as string}
            setValue={setFormat as Dispatch<SetStateAction<string>>}
            cols={1}
          /> */}
        </>
      )}
    </LessonCreatorFormSection>
  );
}
