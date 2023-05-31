import { supabaseServer } from '@/lib/auth/supabaseServer';
import LessonCreatorTemplate from './LessonCreatorTemplate';

// * Component
export default async function LessonCreatorTemplates() {
  // * Data
  const templates = await getTemplates();

  // * Render
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Templates */}
      {templates?.map((template) => (
        <LessonCreatorTemplate template={template} key={template.title} />
      ))}
    </div>
  );
}

// * Data
async function getTemplates() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plan_templates_with_students_view')
    .select('*');

  if (error) return [];

  return data;
}
