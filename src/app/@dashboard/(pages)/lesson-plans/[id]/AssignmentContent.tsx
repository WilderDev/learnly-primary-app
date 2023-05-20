import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import React from 'react';
import AssignmentActions from './AssignmentActions';
import Button from '@/lib/components/ui/Button';
import { PrinterIcon } from '@heroicons/react/24/outline';

interface IProps {
  assignmentContent: any;
}

export default function AssignmentContent({ assignmentContent }: IProps) {
  return (
    <div className="flex flex-col gap-4">
      <LessonPlanMarkdown content={assignmentContent} />
      <Button className="w-full">
        Print <PrinterIcon className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
