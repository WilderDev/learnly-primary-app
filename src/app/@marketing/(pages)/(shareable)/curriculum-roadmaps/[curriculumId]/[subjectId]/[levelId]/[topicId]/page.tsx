// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import { redirect } from 'next/navigation';
import CurriculumRoadmapPageHeader from '../../../../(layout)/CurriculumRoadmapPageHeader';
import CurriculumRoadmapPageCards from '../../../../(layout)/CurriculumRoadmapPageCards';
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';

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
export default async function ShareableCurriculumRoadmapTopics({
  params: { curriculumId, subjectId, levelId, topicId },
}: IParams) {
  // * Data
  const { lessons, metadata } = await getLessons(
    curriculumId,
    subjectId,
    levelId,
    topicId,
  );

  // * Render
  return (
    <>
      <Main className="xl:my-10 2xl:my-10">
        <Container className="shadow rounded-lg p-4 sm:-5">
          {/* Header */}
          <CurriculumRoadmapPageHeader
            title={metadata.displayTitle}
            description={metadata.description}
            subtitle={metadata.displaySubtitle}
          />

          {/* Body */}
          <CurriculumRoadmapPageCards items={lessons} isPublicEnd={true} />
        </Container>
      </Main>
    </>
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
    .from('shareable_curriculum_lessons_view')
    .select('*')
    .eq('curriculum_id', curriculumId)
    .eq('subject_id', subjectId)
    .eq('level_id', levelId)
    .eq('topic_id', topicId);

  // 2. Handle Errors
  if (error || data.length === 0)
    return redirect(
      `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}`,
    );

  // 3. Transform Data
  const transformedData: IShareableCurriculumListItem[] = data.map(
    (lesson) => ({
      id: lesson.id!,
      name: lesson.lesson_name!,
      description: lesson.lesson_description!,
      imagePath: lesson.lesson_image_path!,
      type: lesson.lesson_type!,
      url: `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}/${lesson.id}`!,
    }),
  );
  const transformedMetadata = {
    name: `${data[0].topic_name} (${data[0].curriculum_name} ${data[0].level_name} ${data[0].subject_name})`,
    description: `${data[0].topic_description!}`,
    imagePath: data[0].topic_image_path!,
    displayTitle: `Lessons for ${data[0].topic_name}`,
    displaySubtitle: `${data[0].curriculum_name} ${data[0].level_name} ${data[0].subject_name}`,
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
          width: 1600,
          height: 900,
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
    .from('shareable_curriculum_topics_view')
    .select('id, subject_id, curriculum_id, level_id');

  const paths =
    data?.map((c) => ({
      curriculumId: c.curriculum_id,
      subjectId: c.subject_id,
      levelId: c.level_id,
      topicId: c.id,
    })) || [];

  // 2. Return Paths
  return paths;
}
