import LessonPlanCreatorInfo from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanCreatorInfo';
import LessonPlanTags from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanTags';
import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Logo from '@/lib/components/brand/Logo';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import { redirect } from 'next/navigation';
import ShareButton from './ShareButton';

// * Params
interface IParams {
  params: {
    id: string;
  };
}

// * Page
export default async function PublicLessonPlanPage({
  params: { id },
}: IParams) {
  // * Data
  const lessonPlan = await getLessonPlan(id);

  // * Render
  return (
    <Main>
      <Container>
        {/* Body */}
        <main className="relative mx-auto bg-white dark:bg-navy-800 p-6 print:my-0 max-w-3xl rounded-lg shadow-lg">
          {/* Info */}
          <div className="mb-6 flex flex-col print:hidden">
            {/* Top */}
            <div className="flex items-center justify-between">
              {/* Creator */}
              <LessonPlanCreatorInfo
                name={`${lessonPlan.creator_first_name} ${lessonPlan.creator_last_name}`}
                avatar_url={lessonPlan.creator_avatar_url}
                // role={lessonPlan.creator.}
              />
            </div>

            {/* Tags */}
            <LessonPlanTags tags={lessonPlan.tags || []} />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-6 print:mb-2 text-green-900 dark:text-green-600 border-b border-green-700 pb-2">
            {lessonPlan.title}
          </h1>

          {/* Content */}
          <LessonPlanMarkdown content={lessonPlan.content} />

          {/* Branding */}
          <Logo className="absolute top-0 right-0 m-4" />

          {/* Big Share Button */}
          <ShareButton id={lessonPlan.id} />
        </main>

        {/* <TryLearningCTA /> TSK */}
      </Container>
    </Main>
  );
}

// * Fetcher
async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plans_with_creator_and_students_view')
    .select('*')
    .eq('id', id)
    .single();

  if (error) redirect('/');

  return data as ILessonPlan;
}

// * Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const { title, image_path, subject, level, topic, tags } =
    await getLessonPlan(id);

  return {
    slug: `/lesson-plans/${id}`,
    title,
    image: image_path,
    keywords: ['Homeschool Lesson Plan', title, tags],
    description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
    openGraph: {
      title: title,
      description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
      images: [
        {
          url: image_path,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

// * Static Params
export async function generateStaticParams() {
  const supabase = supabaseServer();

  const { data: lessonPlans } = await supabase
    .from('lesson_plans')
    .select('id');

  const dynamicRoutes = lessonPlans?.map((lp) => ({ id: lp.id }));

  return dynamicRoutes;
}
