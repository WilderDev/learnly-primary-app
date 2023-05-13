import { supabaseServer } from '@/lib/auth/supabaseServer';
import { useLessonCreator } from '../../lesson-creator/LessonCreatorCtx';
import LessonPlanContainer from './LessonPlanContainer';

// * Props
interface IProps {
  params: {
    id: string;
  };
}

// * Component
export default async function LessonPlanPage({ params: { id } }: IProps) {
  // * Data
  const lessonPlan = await getLessonPlan(id);

  console.log('lessonPlan:', lessonPlan);

  // * Render
  return <LessonPlanContainer lessonPlan={lessonPlan} />;
}

async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans')
    .select()
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
}
