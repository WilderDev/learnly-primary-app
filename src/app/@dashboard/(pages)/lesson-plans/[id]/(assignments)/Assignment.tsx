'use client';

import { IAssignment } from '@/assets/typescript/assignment';
import AssignmentCreatorForm from './AssignmentCreatorForm';
import { useState } from 'react';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';

interface IProps {
  assignment: IAssignment;
  lessonPlan?: any;
}
export default function Assignment({ assignment, lessonPlan }: IProps) {
  const [_assignment, setAssignment] = useState(assignment);
  const [assignmentContent, setAssignmentContent] = useState('');
  return (
    <>
      {_assignment ? (
        <LessonPlanMarkdown content={_assignment.content} />
      ) : assignmentContent ? (
        <LessonPlanMarkdown content={assignmentContent} />
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
