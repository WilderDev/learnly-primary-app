// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import { redirect } from 'next/navigation';
import CurriculumRoadmapPageHeader from '../../(layout)/CurriculumRoadmapPageHeader';
import CurriculumRoadmapPageCards from '../../(layout)/CurriculumRoadmapPageCards';
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmap';

// * Params
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
  };
}

// * Page
export default async function ShareableCurriculumRoadmapSubjects({
  params: { curriculumId, subjectId },
}: IParams) {
  // * Data
  const { levels, metadata } = await getLevels(curriculumId, subjectId);

  // * Render
  return (
    <Main className="xl:my-10 2xl:my-10">
      <Container className="shadow rounded-lg p-4 sm:-5">
        {/* Header */}
        <CurriculumRoadmapPageHeader
          title={metadata.displayTitle}
          description={metadata.description}
          subtitle={metadata.displaySubtitle}
        />

        {/* Body */}
        <CurriculumRoadmapPageCards items={levels} />
      </Container>
    </Main>
  );
}

// * Fetcher
async function getLevels(curriculumId: string, subjectId: string) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('shareable_curriculum_levels_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('subject_id', subjectId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/${curriculumId}`);

  // 3. Transform Data
  const transformedData: IShareableCurriculumListItem[] = data.map((level) => ({
    id: level.id!,
    name: level.level_name!,
    description: level.level_description!,
    imagePath: level.level_image_path!,
    url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${level.id}`!,
  }));
  const transformedMetadata = {
    name: `${data[0].subject_name} (${data[0].curriculum_name})`,
    description: `${data[0].subject_description!}`,
    imagePath: data[0].subject_image_path!,
    displayTitle: `${data[0].subject_name!} Levels`,
    displaySubtitle: `${data[0].curriculum_name}`,
  };

  // 4. Return Transformed Data and Metadata
  return {
    levels: transformedData,
    metadata: transformedMetadata,
  };
}

// * Metadata
export async function generateMetadata({
  params: { curriculumId, subjectId },
}: IParams) {
  const { metadata } = await getLevels(curriculumId, subjectId);

  return {
    title: `${metadata.name} | Curriculum Roadmap | Levels`,
    description: `${metadata.description} - view all levels`,
    keywords: [
      `${metadata.name} curriculum`,
      `${metadata.name} curriculum roadmap`,
      'homeschool curriculum',
    ],
    openGraph: {
      title: `${metadata.name} | Curriculum Roadmap | Levels`,
      description: `${metadata.description} - view all levels`,
      images: [
        {
          url: metadata.imagePath,
          width: 4800,
          height: 3200,
          alt: metadata.name,
        },
      ],
    },
  };
}

// * Paths
export async function getStaticPaths() {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data } = await supabase
    .from('shareable_curriculum_subjects_view')
    .select('id, curriculum_id');

  const paths =
    data?.map((c) => ({
      subject_id: c.id,
      curriculum_id: c.curriculum_id,
    })) || [];

  return paths;
}

// /curriculum-roadmaps/[curriculumId]/[subjectId]
