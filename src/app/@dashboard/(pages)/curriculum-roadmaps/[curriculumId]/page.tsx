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
  const subjects = await getCurriculumRoadmapSubjects(curriculumId);

  return {
    slug: `/curriculum-roadmaps/${curriculumId}`,
    title: `Curriculum Roadmap Subjects`,
    image: subjects[0].image,
    keywords: ['Homeschool Curriculum Roadmap', 'Subjects'],
    description: `Subjects for the ${subjects[0].name} curriculum roadmap`,
    openGraph: {
      title: `Curriculum Roadmap Subjects`,
      description: `Subjects for the ${subjects[0].name} curriculum roadmap`,
      images: [
        {
          url: subjects[0].image,
          width: 800,
          height: 600,
          alt: `Curriculum Roadmap Subjects`,
        },
        {
          url: subjects[1].image,
          width: 800,
          height: 600,
          alt: `Curriculum Roadmap Subjects`,
        },
        {
          url: subjects[2].image,
          width: 800,
          height: 600,
          alt: `Curriculum Roadmap Subjects`,
        },
        {
          url: subjects[3].image,
          width: 800,
          height: 600,
          alt: `Curriculum Roadmap Subjects`,
        },
      ],
    },
  };

  // return {
  //   slug: `/lesson-plans/${id}`,
  //   title,
  //   image: image_path,
  //   keywords: ['Homeschool Lesson Plan', title, tags],
  //   description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
  //   openGraph: {
  //     title: title,
  //     description: `Homeschool lesson plan for ${topic} in ${subject} for ${level} grade`,
  //     images: [
  //       {
  //         url: image_path,
  //         width: 800,
  //         height: 600,
  //         alt: title,
  //       },
  //     ],
  //   },
  // };
}

// * Static Params
export async function generateStaticParams() {
  const supabase = supabaseServer();

  const { data: lessonPlans } = await supabase
    .from('lesson_plans')
    .select('id');

  const dynamicRoutes = lessonPlans?.map((lp) => ({ id: lp.id }));

  return dynamicRoutes;
}
