'use client';

import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';

// * Props
interface IProps {
  lessonPlan: ILessonPlan & { user_lesson_plan_id?: string };
  assignmentContent?: string;
}

// * Component
export default function Assignment({ lessonPlan, assignmentContent }: IProps) {
  const [printAssignment, setPrintAssignment] = useState(false);

  return assignmentContent ? (
    <>
      <LessonPlanMarkdown content={assignmentContent} print={printAssignment} />

      <Button onClick={() => setPrintAssignment(true)} className="print:hidden">
        Print
      </Button>
    </>
  ) : (
    <AssignmentCreatorForm
      isModal={false}
      lessonPlan={lessonPlan}
      userLessonPlanId={lessonPlan.user_lesson_plan_id}
    />
  );
}
