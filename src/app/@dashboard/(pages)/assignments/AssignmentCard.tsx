import { Card } from '@/lib/components/ui/Card';
import React from 'react';

interface IProps {
  assignment: any;
}

export default function AssignmentCard({ assignment }: IProps) {
  return (
    <Card>
      <Card.Title>{assignment.id}</Card.Title>
    </Card>
  );
}
