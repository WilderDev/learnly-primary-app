import React from 'react';
import AssignmentCard from './AssignmentCard';

interface IProps {
  assignments: any;
}

export default function Assignments({ assignments }: IProps) {
  return (
    <>
      {assignments.length > 0 &&
        assignments.map((assignment: any, i: React.Key | null | undefined) => (
          <AssignmentCard assignment={assignment} key={i} />
        ))}
    </>
  );
}
