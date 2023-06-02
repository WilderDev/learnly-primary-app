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
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

  useEffect(() => {
    if (print) handlePrint();
  }, [print, handlePrint]);

  return (
    <div className={cn(className, 'print:p-6 z-[1000]')} ref={componentRef}>
      <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
        {content}
      </ReactMarkdown>

      {/* Trademarks */}
      <LessonPlanBrandMarks />
    </div>
  );
}
