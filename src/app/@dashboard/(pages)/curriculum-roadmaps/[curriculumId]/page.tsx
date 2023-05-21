import { supabaseServer } from '@/lib/auth/supabaseServer';
import CurriculumRoadmapSection from '../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../(layout)/CurriculumRoadmapList';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmap';
import { redirect } from 'next/navigation';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
  };
}

// * Page
export default async function CurriculumRoadmapSubjectsPage({
  params: { curriculumId },
}: IParams) {
  // * Data
  const subjects = await getCurriculumRoadmapSubjects(curriculumId);

  console.log('subjects:', subjects);

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={subjects} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getCurriculumRoadmapSubjects(curriculumId: string) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_subjects_with_progress_view')
    .select(`*`)
    .eq('curriculum_id', curriculumId);

  // Handle errors
  if (error || data.length === 0) return redirect(`/curriculum-roadmaps`);

  // Transform data
  const transformedData: ICurriculumListItem[] = data.map((item) => ({
    id: item.subject_id!,
    name: item.subject_name!,
    type: item.subject_type!,
    image: item.subject_image_path!,
    description: item.subject_description!,
    completion_percentage: item.completion_percentage!,
    url: `/curriculum-roadmaps/${curriculumId}/${item.subject_id}`,
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
    title: `Subjects | ${name}`,
    image: image_path,
    keywords: ['Homeschool Curriculum Roadmap', name],
    description: description,
    openGraph: {
      title: `Subjects | ${name}`,
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

  const { data: curriculums } = await supabase.from('curriculums').select('id');

  const dynamicRoutes = curriculums?.map((c) => ({ curriculumId: c.id }));

  return dynamicRoutes;
}
