'use client';

import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useRef, useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import { useReactToPrint } from 'react-to-print';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';

// * Props
interface IProps {
  lessonPlan: ILessonPlan;
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
    <AssignmentCreatorForm isModal={false} lessonPlan={lessonPlan} />
  );
}
