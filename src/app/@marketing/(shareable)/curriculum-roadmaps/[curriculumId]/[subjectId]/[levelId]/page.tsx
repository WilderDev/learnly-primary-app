// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import { redirect } from 'next/navigation';
import CurriculumRoadmapPageHeader from '../../../(layout)/CurriculumRoadmapPageHeader';
import CurriculumRoadmapPageCards from '../../../(layout)/CurriculumRoadmapPageCards';
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmap';

// * Params
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
  };
}

// * Page
export default async function ShareableCurriculumRoadmapLevels({
  params: { curriculumId, subjectId, levelId },
}: IParams) {
  // * Data
  const { topics, metadata } = await getTopics(
    curriculumId,
    subjectId,
    levelId,
  );

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
        <CurriculumRoadmapPageCards items={topics} />
      </Container>
    </Main>
  );
}

// * Fetcher
async function getTopics(
  curriculumId: string,
  subjectId: string,
  levelId: string,
) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('shareable_curriculum_topics_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('subject_id', subjectId)
    .eq('level_id', levelId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/${curriculumId}/${subjectId}`);

  // 3. Transform Data
  const transformedData: IShareableCurriculumListItem[] = data.map((topic) => ({
    id: topic.id!,
    name: topic.topic_name!,
    description: topic.topic_description!,
    imagePath: topic.topic_image_path!,
    type: topic.topic_type!,
    url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topic.id}`!,
  }));
  const transformedMetadata = {
    name: `${data[0].level_name} - ${data[0].subject_name} (${data[0].curriculum_name})`,
    description: `${data[0].level_description!}`,
    imagePath: data[0].level_image_path!,
    displayTitle: `Topics for ${data[0].level_name!}`,
    displaySubtitle: `${data[0].curriculum_name} ${data[0].subject_name}`,
  };

  // 4. Return Transformed Data and Metadata
  return {
    topics: transformedData,
    metadata: transformedMetadata,
  };
}

// * Metadata
export async function generateMetadata({
  params: { curriculumId, subjectId, levelId },
}: IParams) {
  const { metadata } = await getTopics(curriculumId, subjectId, levelId);

  return {
    title: `${metadata.name} | Curriculum Roadmap | Topics`,
    description: `${metadata.description} - view all topics`,
    keywords: [
      `${metadata.name} curriculum`,
      `${metadata.name} curriculum roadmap`,
      'homeschool curriculum',
    ],
    openGraph: {
      title: `${metadata.name} | Curriculum Roadmap | Topics`,
      description: `${metadata.description} - view all topics`,
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
    .from('shareable_curriculum_levels_view')
    .select('id, subject_id, curriculum_id');

  const paths =
    data?.map((c) => ({
      curriculumId: c.curriculum_id,
      subjectId: c.subject_id,
      levelId: c.id,
    })) || [];

  // 2. Return Paths
  return paths;
}
