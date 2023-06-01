'use client';

import { IAssignment } from '@/assets/typescript/assignment';
import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useRef, useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import { useReactToPrint } from 'react-to-print';
import cn from '@/lib/common/cn';

interface IProps {
  assignment: IAssignment;
  lessonPlan?: any;
}
export default function Assignment({ assignment, lessonPlan }: IProps) {
  const [_assignment, setAssignment] = useState(assignment);
  const [assignmentContent, setAssignmentContent] = useState('');

  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

  return (
    <>
      {_assignment ? (
        <>
          <div ref={componentRef} className="print:p-6">
            <LessonPlanMarkdown
              content={_assignment.content}
              className={cn('!z-[0]')}
            />
          </div>
          <Button onClick={handlePrint} className="print:hidden">
            Print
          </Button>
        </>
      ) : (
        <AssignmentCreatorForm
          isModal={false}
          lessonPlan={lessonPlan}
          assignmentContent={assignmentContent}
          setAssignmentContent={setAssignmentContent}
        />
      )}
    </>
  );
}
