import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { lessonPlanComponents } from './LessonPlanComponents';
import LessonPlanBrandMarks from './LessonPlanBrandMarks';
import React from 'react';

// * Props
interface IProps {
  content: string;
}

// * Component
const LessonPlanMarkdown = React.forwardRef<HTMLDivElement, IProps>(
  ({ content }, ref) => {
    return (
      <div
        ref={ref}
        className="printable !z-[1000] print:!overflow-visible print:mt-6 print:mx-4"
      >
        <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
          {content}
        </ReactMarkdown>

        {/* Trademarks */}
        <LessonPlanBrandMarks />
      </div>
    );
  }
);

LessonPlanMarkdown.displayName = 'LessonPlanMarkdown';

export default LessonPlanMarkdown;
