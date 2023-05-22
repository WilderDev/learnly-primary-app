// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import CurriculumRoadmapSection from '../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../(layout)/CurriculumRoadmapList';

// * Params
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
  };
}

// * Page
export default async function CurriculumRoadmapLevels({
  params: { curriculumId, subjectId },
}: IParams) {
  // * Data
  const { levels } = await getLevels(curriculumId, subjectId);

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={levels} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getLevels(curriculumId: string, subjectId: string) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('curriculum_levels_with_progress_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('curriculum_subject_id', subjectId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/${curriculumId}`);

  // 3. Transform Data
  const transformedData: ICurriculumListItem[] = data.map((level) => ({
    id: level.curriculum_level_id!,
    name: level.level_name!,
    description: level.level_description!,
    image: level.level_image_path!,
    progress: level.progress_percentage!,
    url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${level.curriculum_level_id}`!,
  }));
  const transformedMetadata = {
    name: `${data[0].curriculum_name} | ${data[0].subject_name} | Levels`,
    description: data[0].subject_description!,
    imagePath: data[0].subject_image_path!,
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
    slug: `/curriculum-roadmaps/${curriculumId}/${subjectId}`,
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
          width: 4800, // TSK
          height: 3200, // TSK
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
    .from('curriculum_levels_with_progress_view')
    .select('curriculum_id, curriculum_subject_id');

  const paths =
    data?.map((c) => ({
      curriculumId: c.curriculum_id,
      subjectId: c.curriculum_subject_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
