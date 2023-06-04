import { supabaseServer } from '@/lib/auth/supabaseServer';
import LessonCreatorTemplate from './LessonCreatorTemplate';
import { ILessonPlanTemplate } from '@/assets/typescript/lesson-plan';

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

  const formattedData = data?.map((template) => ({
    ...template,
    students: (template.students as any[])?.map((s) => ({
      id: s.id,
      name: s.name,
      age: s.age,
      learningStyles: s.learning_styles,
      favoriteSubjects: s.favorite_subjects,
      interests: s.interests,
      goals: s.goals,
      learningEnvironments: s.learning_environments,
      learningResources: s.learning_resources,
      specialNeeds: s.special_needs,
    })),
  }));

  return formattedData as ILessonPlanTemplate[];
}
