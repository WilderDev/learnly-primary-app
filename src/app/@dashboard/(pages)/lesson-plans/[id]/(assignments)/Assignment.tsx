'use client';

import { IAssignment } from '@/assets/typescript/assignment';
import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import Button from '@/lib/components/ui/Button';
import { toast } from 'sonner';
import { downloadPdf } from '@/lib/common/downloadPdf';

interface IProps {
  assignment: IAssignment;
  lessonPlan?: any;
}
export default function Assignment({ assignment, lessonPlan }: IProps) {
  const [_assignment, setAssignment] = useState(assignment);
  const [assignmentContent, setAssignmentContent] = useState('');

  const handlePrint = async () => {
    const requestBody = {
      markdown: _assignment.content,
    };
    const res = await fetch('/api/print', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!res.ok) return toast.error('Error Printing Assignment');

    downloadPdf(
      res,
      `${_assignment.title.toLowerCase().split(' ').join('_')}_worksheet`
    );
  };

  return (
    <>
      {_assignment ? (
        <>
          <LessonPlanMarkdown content={_assignment.content} />
          <Button onClick={handlePrint}>Print</Button>
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
