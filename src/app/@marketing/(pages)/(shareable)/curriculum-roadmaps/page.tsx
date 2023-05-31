import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import { redirect } from 'next/navigation';
import CurriculumRoadmapPageCards from './(layout)/CurriculumRoadmapPageCards';
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import CurriculumRoadmapPageHeader from './(layout)/CurriculumRoadmapPageHeader';
import LandingCTAImages from '@/app/@marketing/(landing)/LandingCTAImages';

export default async function ShareableCurriculumRoadmapsPage() {
  // * Data
  const roadmaps = await getCurriculumRoadmaps();

  // * Render
  return (
    <Main>
      <Container className="shadow rounded-lg p-4 sm:-5">
        {/* Header */}
        <CurriculumRoadmapPageHeader
          title="Learnly Personalized Curriculums"
          description="Browse through our collection of curriculum roadmaps to find the
              perfect curriculum for you and your children"
          subtitle="Educate Your Way w/"
        />

        {/* Body */}
        <CurriculumRoadmapPageCards items={roadmaps} />

        {/* When you sign up for
              a free account, you can save your favorite curriculums and lessons
              to your account and have each lesson plan automatically generated
              for you based on your child&apos;s age and learning style, your
              teaching style, and more. */}
        <div className="my-12 md:mt-16">
          <LandingCTAImages />
        </div>
      </Container>
    </Main>
  );
}

// * Fetcher
async function getCurriculumRoadmaps() {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculums')
    .select('*')
    .eq('is_public', true);

  // Handle errors
  if (error || data.length === 0) return redirect(`/`);

  // Transform data
  const transformedData: IShareableCurriculumListItem[] = data.map(
    (roadmap) => ({
      id: roadmap.id,
      name: roadmap.name,
      description: roadmap.description,
      imagePath: roadmap.image_path,
      type: roadmap.type,
      url: `/curriculum-roadmaps/${roadmap.id}`,
    }),
  );

  return transformedData;
}

// * Metadata
export const metadata = {
  title: 'Curriculum Roadmaps',
  description:
    'Browse through our collection of curriculum roadmaps to find the perfect curriculum for you and your children.',
};
