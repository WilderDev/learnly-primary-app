'use client';

import { useLessonCreator } from '../../lesson-creator/LessonCreatorCtx';

// * Props
interface IProps {
  lessonPlan: any; // TSK
}

// * Component
export default function LessonPlanContainer({ lessonPlan }: IProps) {
  // * Hooks
  const { lessonContent } = useLessonCreator();

  console.log('lessonContent:', lessonContent);

  return (
    <>
      <p>{lessonPlan.content || lessonContent}</p>
    </>
  );
}
