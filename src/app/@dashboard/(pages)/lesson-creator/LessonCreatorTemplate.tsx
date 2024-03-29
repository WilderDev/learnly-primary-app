'use client';

import { useLessonCreator } from './LessonCreatorCtx';
import { TSelection } from '@/assets/typescript/form';
import {
  ILessonPlanTemplate,
  IStudentPromptReq,
} from '@/assets/typescript/lesson-plan';

// * Props
interface IProps {
  template: ILessonPlanTemplate;
}

export default function LessonCreatorTemplate({ template }: IProps) {
  // * Hooks / Context
  // Lesson Plan Setters
  const {
    setSubject,
    setLevel,
    setTopic,
    setObjectives,
    setDifficulty,
    setStandards,
    setTeachingStrategy,
    setPhilosophy,
    setLengthInMin,
    setPace,
    setFormat,
    setStudents,
    setMaterials,
    setSpecialConsiderations,
    setLearningStyles,
    reset,
  } = useLessonCreator();

  // * Handlers
  // Use Template
  const handleUseTemplate = () => {
    reset(true);

    // Set Lesson Plan
    const subject = template.subject as TSelection;
    const level = template.level as TSelection;
    const topic = template.topic as TSelection;
    subject?.id && setSubject(subject);
    level?.id && setLevel(level);
    topic?.id && setTopic(topic);
    setObjectives(template.objectives || []);
    setDifficulty(template.difficulty);
    setStandards(template.standards || []);
    setTeachingStrategy(template.teaching_strategy);
    setPhilosophy(template.philosophy);
    setLengthInMin(template.length_in_min || 60);
    setPace(template.pace);
    setFormat(template.format);

    const templateStudents: IStudentPromptReq['students'] =
      template.students || [];
    if (templateStudents.length > 0 && templateStudents[0].id !== null) {
      setStudents(templateStudents);
    }

    setMaterials(template.materials || []);
    setSpecialConsiderations(template.special_considerations || '');
    setLearningStyles(template.learning_styles || []);
  };

  // * Render
  return (
    <div
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-navy-700 dark:bg-navy-800"
      key={template.title}
    >
      <div className="flex items-center justify-between">
        {/* Template Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-slate-900 dark:text-navy-100">
            {template.title}
          </h3>

          {/* <p className="mt-1 text-sm text-slate-500 dark:text-navy-300">
            {template.}
          </p> */}
        </div>

        {/* Use Template Button */}
        <button
          className="rounded-full p-1 text-slate-400 transition-colors duration-200 hocus:bg-slate-100 hocus:text-slate-500 dark:text-navy-300 dark:hocus:bg-navy-200 dark:hocus:text-navy-800"
          type="button"
          onClick={handleUseTemplate}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
