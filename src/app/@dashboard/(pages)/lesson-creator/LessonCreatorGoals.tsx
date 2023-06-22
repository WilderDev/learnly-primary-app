'use client';

import MultiSelect from '@/lib/components/form/MultiSelect';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import LessonCreatorTopicSelect from './LessonCreatorTopicSelect';
import { Dispatch, SetStateAction } from 'react';
import { Database } from '@/assets/typescript/db';
import { createSelectOptions } from '@/lib/common/form.helpers';
import Select from '@/lib/components/form/Select';
import {
  BriefcaseIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  IStudentPromptReq,
  TDifficulty,
  TObjective,
  TStandard,
} from '@/assets/typescript/lesson-plan';
import { getAgeFromBirthday } from '@/lib/common/date.helpers';
import { useUser } from '@/lib/components/providers/UserProvider';

// * Data
// Objectives
const objectiveOptions: TObjective[] = [
  'Analysis',
  'Application',
  'Comprehension',
  'Evaluation',
  'Knowledge',
  'Synthesis',
];

const objectiveInfoBubbleText: string = `Objectives in homeschooling refer to the specific learning goals and outcomes intended for each educational activity or lesson. These may include understanding and recalling information (knowledge), applying knowledge to new situations (application)...`;

// Difficulties
export const difficultyOptions: TDifficulty[] = [
  'EASY',
  'MODERATE',
  'CHALLENGING',
];
// Standards
const standardOptions: TStandard[] = [
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
    students,
    setStudents,
  } = useLessonCreator();
  const { students: usersStudents } = useUser();

  // * Render
  return (
    <LessonCreatorFormSection
      title="Lesson Goals"
      description="What is your desired outcome?"
      colNum={2}
      isShowingAdvancedOptions={showAdvancedGoals}
      toggleAdvancedOptions={toggleAdvancedGoals}
    >
      {/* Subject / Level / Topic (Drilldown Select) */}
      <LessonCreatorTopicSelect />

      {/* Students (Select) */}
      <MultiSelect
        label="*Students"
        options={createSelectOptions(
          usersStudents.map((s) => ({
            value: s.id,
            label: `${s.firstName} ${s.lastName}`,
            image: s.avatarUrl,
          })),
        )}
        values={students.map((s) => s.id)}
        setValues={(ids) => {
          const lessonStudents: IStudentPromptReq['students'] = usersStudents
            .filter((s) => ids.includes(s.id))
            .map((st) => ({
              name: `${st.firstName} ${st.lastName}`,
              age: getAgeFromBirthday(st.birthday),
              ...st,
            }));

          setStudents(lessonStudents);
        }}
        cols={2}
        icon={UserGroupIcon}
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
            icon={RocketLaunchIcon}
          />

          {/* Objectives (Multi-Select) */}
          <MultiSelect
            infoBubbleUrl={
              'https://www.learnly.ai/articles/homeschool/homeschooling-objectives-for-successful-lesson-plans'
            }
            infoBubbleText={objectiveInfoBubbleText}
            label="Objectives"
            options={createSelectOptions(objectiveOptions)}
            values={objectives}
            setValues={setObjectives as Dispatch<SetStateAction<string[]>>}
            cols={2}
            icon={BriefcaseIcon}
          />

          {/* Standards (Multi-Select) */}
          {/* <MultiSelect
            label="Standards"
            options={createSelectOptions(standardOptions)}
            values={standards}
            setValues={setStandards as Dispatch<SetStateAction<string[]>>}
            cols={2}
          /> */}
        </>
      )}
    </LessonCreatorFormSection>
  );
}
