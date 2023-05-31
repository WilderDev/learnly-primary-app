import { Database } from '@/assets/typescript/db';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors } from '@/lib/theme/enumColors';

// * Props
interface IProps {
  templates: Database['public']['Views']['lesson_plan_templates_with_students_view']['Row'][];
}

// * Component
export default function UsersLessonPlanTemplatesPanel({ templates }: IProps) {
  // * Render
  return (
    <CardContainer className="md:grid-cols-1 xl:grid-cols-1">
      {templates.slice(0, 10).map((template, idx) => (
        <Card
          className=""
          decoration={getIndexColors(idx).BG.GRADIENT}
          key={template.title}
        >
          <Card.Title className="text-lg font-semibold text-slate-800 dark:text-navy-50">
            {template.title}
          </Card.Title>
        </Card>
      ))}
    </CardContainer>
  );
}
