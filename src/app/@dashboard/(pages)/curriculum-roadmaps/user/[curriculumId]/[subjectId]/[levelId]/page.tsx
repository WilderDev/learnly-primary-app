// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import CurriculumRoadmapSection from '../../../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../../../(layout)/CurriculumRoadmapList';

// * Params
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
  };
}

// * Page
export default async function CurriculumRoadmapTopics({
  params: { curriculumId, subjectId, levelId },
}: IParams) {
  // * Data
  const { topics } = await getTopics(curriculumId, subjectId, levelId);

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={topics} />
    </CurriculumRoadmapSection>
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
    .from('curriculum_topics_with_progress_view')
    .select('*')
    .eq('user_curriculum_id', curriculumId)
    .eq('curriculum_subject_id', subjectId)
    .eq('curriculum_level_id', levelId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/user/${curriculumId}/${subjectId}`);

  // 3. Transform Data
  const transformedData: ICurriculumListItem[] = data.map((topic) => ({
    id: topic.curriculum_topic_id!,
    name: topic.topic_name!,
    description: topic.topic_description!,
    image: topic.topic_image_path!,
    type: topic.topic_type!,
    progress: topic.progress_percentage!,
    url: `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}/${topic.curriculum_topic_id}`!,
  }));
  const transformedMetadata = {
    name: `${data[0].curriculum_name} | ${data[0].subject_name} | ${data[0].level_name} | Topics`,
    description: data[0].level_description!,
    imagePath: data[0].level_image_path!,
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
    slug: `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}`,
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
    .from('curriculum_topics_with_progress_view')
    .select('user_curriculum_id, curriculum_subject_id, curriculum_level_id');

  const paths =
    data?.map((c) => ({
      curriculumId: c.user_curriculum_id,
      subjectId: c.curriculum_subject_id,
      levelId: c.curriculum_level_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
