'use client';

import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';

// * Props
interface IProps {
  lessonPlan: ILessonPlan;
}

// * Component
export default function LessonPlanContainer({ lessonPlan }: IProps) {
  return (
    <>
      <LessonPlanMarkdown content={lessonPlan.content} />
    </>
  );
}
