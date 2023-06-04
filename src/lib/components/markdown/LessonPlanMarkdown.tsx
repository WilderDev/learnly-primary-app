'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { lessonPlanComponents } from './LessonPlanComponents';
import LessonPlanBrandMarks from './LessonPlanBrandMarks';
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  content: string;
  className?: string;
}

// * Component
export default function LessonPlanMarkdown({ content, className }: IProps) {
  return (
    <div className={cn(className, 'print:p-2')}>
      {/* Markdown */}
      <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
        {content}
      </ReactMarkdown>

      {/* Trademarks */}
      <LessonPlanBrandMarks />
    </div>
  );
}
