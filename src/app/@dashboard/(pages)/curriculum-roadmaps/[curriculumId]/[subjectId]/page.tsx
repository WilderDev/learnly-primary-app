import { supabaseServer } from '@/lib/auth/supabaseServer';
import CurriculumRoadmapSection from '../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../(layout)/CurriculumRoadmapList';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmap';
import { redirect } from 'next/navigation';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
  };
}

// * Page
export default async function CurriculumRoadmapLevelsPage({
  params: { curriculumId, subjectId },
}: IParams) {
  // * Data
  const levels = await getCurriculumRoadmapLevels(curriculumId, subjectId);

  console.log('levels:', levels);

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={levels} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getCurriculumRoadmapLevels(
  curriculumId: string,
  subjectId: string,
) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_subject_levels_with_progress_view')
    .select(`*`)
    .eq('subject_id', subjectId);

  console.log('data:', data);
  console.log('error:', error);

  // Handle errors
  if (error || data.length === 0)
    return redirect(`/curriculum-roadmaps/${curriculumId}`);

  // Transform data
  const transformedData: ICurriculumListItem[] = data.map((item) => ({
    id: item.level_id!,
    name: item.level_name!,
    type: item.level_type!,
    image: item.level_image_path!,
    description: item.level_description!,
    completion_percentage: item.completion_percentage!,
    url: `/curriculum-roadmpas/${curriculumId}/${subjectId}/${item.level_id}`,
  }));

  // Return transformed data
  return transformedData;
}
