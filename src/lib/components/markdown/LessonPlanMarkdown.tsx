// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import { lessonPlanComponents } from './LessonPlanComponents';
// import LessonPlanBrandMarks from './LessonPlanBrandMarks';
// import React from 'react';
// import cn from '@/lib/common/cn';

// // * Props
// interface IProps {
//   content: string;
//   className?: string;
// }

// // * Component
// const LessonPlanMarkdown = React.forwardRef<HTMLDivElement, IProps>(
//   ({ content, className }, ref) => {
//     return (
//       <div
//         className={cn(
//           // 'printable !z-[1000] print:!overflow-visible print:mt-6 print:mx-4',
//           '!z-[1000]',
//           className
//         )}
//         ref={ref}
//       >
//         <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
//           {content}
//         </ReactMarkdown>

//         {/* Trademarks */}
//         <LessonPlanBrandMarks />
//       </div>
//     );
//   }
// );

// LessonPlanMarkdown.displayName = 'LessonPlanMarkdown';

// export default LessonPlanMarkdown;

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
    <div className={cn(className, 'z-[1000]')}>
      <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
        {content}
      </ReactMarkdown>

      {/* Trademarks */}
      <LessonPlanBrandMarks />
    </div>
  );
}
