// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import CurriculumRoadmapSection from '../../../../../(layout)/CurriculumRoadmapSection';
import CurriculumRoadmapList from '../../../../../(layout)/CurriculumRoadmapList';

// * Params
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
    topicId: string;
  };
}

// * Page
export default async function CurriculumRoadmapTopics({
  params: { curriculumId, subjectId, levelId, topicId },
}: IParams) {
  // * Data
  const { lessons } = await getLessons(
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
async function getLessons(
  curriculumId: string,
  subjectId: string,
  levelId: string,
  topicId: string,
) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('curriculum_lessons_with_progress_view')
    .select('*')
    .eq('user_curriculum_id', curriculumId)
    .eq('curriculum_subject_id', subjectId)
    .eq('curriculum_level_id', levelId)
    .eq('curriculum_topic_id', topicId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(
      `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}`,
    );

  // 3. Transform Data
  const transformedData: ICurriculumListItem[] = data.map((lesson) => ({
    id: lesson.curriculum_lesson_id!,
    name: lesson.lesson_name!,
    description: lesson.lesson_description!,
    image: lesson.lesson_image_path!,
    type: lesson.lesson_type!,
    progress: lesson.progress_percentage!,
    url: `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}/${topicId}/${lesson.curriculum_lesson_id}`!,
  }));
  const transformedMetadata = {
    name: `${data[0].curriculum_name} | ${data[0].subject_name} | ${data[0].level_name} | ${data[0].topic_name} | Lessons`,
    description: data[0].topic_description!,
    imagePath: data[0].topic_image_path!,
  };

  // 4. Return Transformed Data and Metadata
  return {
    lessons: transformedData,
    metadata: transformedMetadata,
  };
}

// * Metadata
export async function generateMetadata({
  params: { curriculumId, subjectId, levelId, topicId },
}: IParams) {
  const { metadata } = await getLessons(
    curriculumId,
    subjectId,
    levelId,
    topicId,
  );

  return {
    slug: `/curriculum-roadmaps/user/${curriculumId}/${subjectId}/${levelId}/${topicId}`,
    title: `${metadata.name} | Curriculum Roadmap | Lessons`,
    description: `${metadata.description} - view all lessons`,
    keywords: [
      `${metadata.name} curriculum`,
      `${metadata.name} curriculum roadmap`,
      'homeschool curriculum',
    ],
    openGraph: {
      title: `${metadata.name} | Curriculum Roadmap | Lessons`,
      description: `${metadata.description} - view all lessons`,
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
export async function generateStaticParams() {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data } = await supabase
    .from('curriculum_lessons_with_progress_view')
    .select(
      'user_curriculum_id, curriculum_subject_id, curriculum_level_id, curriculum_topic_id',
    );

  const paths =
    data?.map((c) => ({
      curriculumId: c.user_curriculum_id,
      subjectId: c.curriculum_subject_id,
      levelId: c.curriculum_level_id,
      topicId: c.curriculum_topic_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
