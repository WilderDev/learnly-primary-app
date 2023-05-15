import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { lessonPlanComponents } from './LessonPlanComponents';

// * Props
interface IProps {
  content: string;
}

// * Component
export default function LessonPlanMarkdown({ content }: IProps) {
  return (
    <ReactMarkdown components={lessonPlanComponents} linkTarget="_blank">
      {content}
    </ReactMarkdown>
  );
}
