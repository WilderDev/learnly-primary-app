'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { lessonPlanComponents } from './LessonPlanComponents';
import LessonPlanBrandMarks from './LessonPlanBrandMarks';
import cn from '@/lib/common/cn';
import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// * Props
interface IProps {
  content: string;
  className?: string;
  print?: boolean;
}

// * Component
export default function LessonPlanMarkdown({
  content,
  className,
  print = false,
}: IProps) {
  // * Refs
  const componentRef = useRef<HTMLDivElement>(null);

  // * Hooks
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    // https://github.com/gregnb/react-to-print
  });

  useEffect(() => {
    if (print) {
      handlePrint();
    }
  }, [print, handlePrint]);

  return (
    <div className={cn(className, 'print:p-2')} ref={componentRef}>
      <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
        {content}
      </ReactMarkdown>

      {/* Trademarks */}
      <LessonPlanBrandMarks />
    </div>
  );
}
