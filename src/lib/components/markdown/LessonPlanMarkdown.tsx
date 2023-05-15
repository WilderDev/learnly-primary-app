import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { lessonPlanComponents } from './LessonPlanComponents';
import LessonPlanBrandMarks from './LessonPlanBrandMarks';

// * Props
interface IProps {
  content: string;
}

// * Component
export default function LessonPlanMarkdown({ content }: IProps) {
  return (
    <div className="printable">
      <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
        {content}
      </ReactMarkdown>

      {/* Trademarks */}
      <LessonPlanBrandMarks />
    </div>
  );
}
