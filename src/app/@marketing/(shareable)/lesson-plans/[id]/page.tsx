import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import { redirect } from 'next/navigation';

// * Props
interface IProps {
  params: {
    id: string;
  };
}

// * Page
export default async function PublicLessonPlanPage({ params: { id } }: IProps) {
  // * Data
  const lessonPlan = await getLessonPlan(id);

  // * Render
  return (
    <Main>
      <Container>
        {/* Body */}
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <LessonPlanMarkdown content={lessonPlan.content} />
        </div>

        {/* <TryLearningCTA /> TSK */}
      </Container>
    </Main>
  );
}

async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans')
    .select('*, creator:creator_id(first_name, last_name, avatar_url)')
    .eq('id', id)
    .single();

  if (error) redirect('/');

  return data as ILessonPlan;
}
