'use client';

import React, { useEffect } from 'react';
// import { useAssignmentStore } from './AssignmentStore';
// import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
// import { AssignmentCreator } from './AssignmentCreator';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import { IAssignment } from '@/assets/typescript/assignment';
import {
  externalFetchAssignments,
  useAssignmentsStore,
} from '@/lib/store/assignmentStore';
import { AssignmentCreator } from './AssignmentCreator';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import { useAssignmentStore } from './AssignmentStore';
import AssignmentContent from './AssignmentContent';
import AssignmentForm from '../../(home)/AssignmentForm';

interface IProps {
  lessonPlan: ILessonPlan;
  assignment: IAssignment;
}

export default function Assignment({ lessonPlan, assignment }: IProps) {
  console.log(assignment);
  // useAssignmentStore.setState({ assignment: assignment.content || null });
  // useAssignmentStore.setState({ assignment: null });
  const assignmentContent = useAssignmentStore((state) => state.assignment);

  // const assignments = useAssignmentStore((state) => state.assignments);
  // const fetchAssignments = useAssignmentStore(
  //   (state) => state.fetchAssignments
  // );

  // const assignments = await externalFetchAssignments();

  // useEffect(() => {
  //   fetchAssignments();
  // }, [fetchAssignments]);

  return (
    <>
      {assignment ? (
        // <LessonPlanMarkdown content={assignmentContent} />
        <AssignmentContent assignmentContent={assignment.content} />
      ) : (
        // <AssignmentCreator lessonPlan={lessonPlan} />
        <AssignmentForm userLessonPlan={lessonPlan} isModal={false} />
      )}
      {/* {assignments.map((assignment) => {
        return <div key={assignment.id}>{assignment.id}</div>;
      })} */}
    </>
  );
}
