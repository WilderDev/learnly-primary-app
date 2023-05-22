import { supabaseServer } from '@/lib/auth/supabaseServer';
import CurriculumRoadmapSection from '../../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../../(layout)/CurriculumRoadmapList';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { redirect } from 'next/navigation';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
  };
}

// * Page
export default async function CurriculumRoadmapTopicsPage({
  params: { curriculumId, subjectId, levelId },
}: IParams) {
  // * Data
  const topics = await getCurriculumRoadmapTopics(
    curriculumId,
    subjectId,
    levelId,
  );

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={topics} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getCurriculumRoadmapTopics(
  curriculumId: string,
  subjectId: string,
  levelId: string,
) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_topics_with_progress_view')
    .select(`*`)
    .eq('curriculum_id', curriculumId)
    .eq('subject_id', subjectId)
    .eq('level_id', levelId);

  // Handle errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/${curriculumId}/${subjectId}`);

  // Transform data
  const transformedData: ICurriculumListItem[] = data.map((item) => ({
    id: item.topic_id!,
    name: item.topic_name!,
    image: item.topic_image_path!,
    description: item.topic_description!,
    type: item.topic_type!,
    completion_percentage: item.completion_percentage!,
    url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${item.topic_id}`,
  }));

  // Return transformed data
  return transformedData;
}

// * Metadata
export async function generateMetadata({ params: { curriculumId } }: IParams) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  const { data } = await supabase
    .from('curriculums')
    .select('id, name, image_path, description')
    .eq('id', curriculumId)
    .single();

  const { id, name, image_path, description } = data!;

  return {
    slug: `/curriculum-roadmaps/${id}`,
    title: `Levels | ${name}`,
    image: image_path,
    keywords: ['Homeschool Curriculum Roadmap', name],
    description: description,
    openGraph: {
      title: `Levels | ${name}`,
      description: description,
      images: [
        {
          url: image_path,
          width: 800,
          height: 600,
          alt: name,
        },
      ],
    },
  };
}

// * Static Params
export async function generateStaticParams() {
  const supabase = supabaseServer();

  const { data: levels } = await supabase
    .from('curriculum_levels_with_progress_view')
    .select('id, subject_id, curriculum_id');

  const dynamicRoutes = levels?.map((l) => ({
    curriculumId: l.curriculum_id,
    subjectId: l.subject_id,
    levelId: l.id,
  }));

  return dynamicRoutes || [];
}
