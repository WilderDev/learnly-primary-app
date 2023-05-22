import { supabaseServer } from '@/lib/auth/supabaseServer';
import CurriculumRoadmapSection from '../../../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../../../(layout)/CurriculumRoadmapList';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { redirect } from 'next/navigation';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
    topicId: string;
  };
}

// * Page
export default async function CurriculumRoadmapLessonsPage({
  params: { curriculumId, subjectId, levelId, topicId },
}: IParams) {
  // * Data
  const lessons = await getCurriculumRoadmapLessons(
    curriculumId,
    subjectId,
    levelId,
    topicId,
  );

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={lessons} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getCurriculumRoadmapLessons(
  curriculumId: string,
  subjectId: string,
  levelId: string,
  topicId: string,
) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_lessons_with_progress_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('subject_id', subjectId)
    .eq('level_id', levelId)
    .eq('topic_id', topicId);

  // Handle errors
  if (error || data.length === 0)
    return redirect(
      `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}`,
    );

  // Transform data
  const transformedData: ICurriculumListItem[] = data.map((item) => ({
    id: item.lesson_id!,
    name: item.lesson_name!,
    image: item.lesson_image_path!,
    description: item.lesson_description!,
    type: item.lesson_type!,
    completion_percentage: item.completion_percentage!,
    url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}/${item.lesson_id}`,
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
    title: `Topics | ${name}`,
    image: image_path,
    keywords: ['Homeschool Curriculum Roadmap', name],
    description: description,
    openGraph: {
      title: `Topics | ${name}`,
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

  const { data: topics } = await supabase
    .from('curriculum_topics_with_progress_view')
    .select('id, level_id, subject_id, curriculum_id');

  const dynamicRoutes = topics?.map((l) => ({
    curriculumId: l.curriculum_id,
    subjectId: l.subject_id,
    levelId: l.level_id,
    topicId: l.id,
  }));

  return dynamicRoutes || [];
}
