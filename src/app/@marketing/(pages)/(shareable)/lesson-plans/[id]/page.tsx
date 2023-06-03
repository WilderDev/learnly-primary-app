import LessonPlanCreatorInfo from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanCreatorInfo';
import LessonPlanTags from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanTags';
import { ILessonPlanWithCreator } from '@/assets/typescript/lesson-plan';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Logo from '@/lib/components/brand/Logo';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import { redirect } from 'next/navigation';
import ShareButton from './ShareButton';
import TryLearnlyCTA from '@/lib/components/brand/TryLearnlyCTA';

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
        <section className="relative mx-auto bg-white dark:bg-navy-800 p-6 print:my-0 max-w-3xl rounded-lg shadow-lg">
          {/* Info */}
          <div className="mb-6 flex flex-col print:hidden">
            {/* Top */}
            <div className="flex items-center justify-between">
              {/* Creator */}
              <LessonPlanCreatorInfo
                name={`${lessonPlan.creator.firstName} ${lessonPlan.creator.lastName}`}
                avatar_url={lessonPlan.creator.avatarUrl}
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
        </section>

        <TryLearnlyCTA />
      </Container>
    </Main>
  );
}

// * Fetcher
async function getLessonPlan(id: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('lesson_plan_with_creator_view')
    .select('*')
    .eq('id', id)
    .single();

  if (error) redirect('/');

  const transformedData: ILessonPlanWithCreator = {
    id: data.id!,
    title: data.title!,
    image_path: data.image_path!,
    content: data.content!,
    tags: data.tags!,
    subject_name: data.subject_name!,
    level_name: data.level_name!,
    topic_name: data.topic_name!,
    creator: {
      id: data.creator_id!,
      firstName: data.creator_first_name!,
      lastName: data.creator_last_name!,
      avatarUrl: data.creator_avatar_url!,
    },
  };

  return transformedData;
}

// * Metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const { title, image_path, subject_name, level_name, topic_name, tags } =
    await getLessonPlan(id);

  return {
    slug: `/lesson-plans/${id}`,
    title,
    image: image_path,
    keywords: ['Homeschool Lesson Plan', title, tags],
    description: `Homeschool lesson plan for ${topic_name} in ${subject_name} for ${level_name} grade`,
    openGraph: {
      title: title,
      description: `Homeschool lesson plan for ${topic_name} in ${subject_name} for ${level_name} grade`,
      images: [
        {
          url: image_path,
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
  };
}

export const revalidate = 0;
export const dynamicParams = true;
