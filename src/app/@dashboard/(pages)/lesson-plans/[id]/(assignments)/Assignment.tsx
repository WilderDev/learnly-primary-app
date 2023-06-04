'use client';

import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import {
  ILessonPlanWithCreator,
  IUserLessonPlanBasic,
} from '@/assets/typescript/lesson-plan';
import { usePrint } from '@/lib/hooks/usePrint';

// * Props
interface IProps {
  lessonPlan: ILessonPlanWithCreator;
  userLessonPlan?: IUserLessonPlanBasic;
  assignmentContent?: string;
}

// * Component
export default function Assignment({
  lessonPlan,
  userLessonPlan,
  assignmentContent,
}: IProps) {
  // * Hooks
  const { componentRef, handlePrint } = usePrint();

  return assignmentContent ? (
    <>
      <div ref={componentRef}>
        <LessonPlanMarkdown content={assignmentContent} />
      </div>

      <Button onClick={handlePrint} className="print:hidden">
        Print
      </Button>
    </>
  ) : (
    <AssignmentCreatorForm
      isModal={false}
      lessonPlan={lessonPlan}
      userLessonPlan={userLessonPlan}
    />
  );
}
