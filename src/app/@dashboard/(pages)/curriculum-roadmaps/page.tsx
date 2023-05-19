import { supabaseServer } from '@/lib/auth/supabaseServer';
import CurriculumRoadmapSection from './(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from './(layout)/CurriculumRoadmapList';

// * Page
export default async function CurriculumRoadmaps() {
  // * Data
  const curriculums = await getCurriculumRoadmaps();

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={curriculums} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getCurriculumRoadmaps() {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase.from('curriculums_view').select(`*`);

  // Handle errors
  if (error) return [];

  // Transform data
  const transformedData = data.map((curriculum) => ({
    id: curriculum.id,
  }));

  // Return transformed data
  return transformedData;
}
