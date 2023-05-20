import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { redirect } from 'next/navigation';
import CurriculumLessonForm from './CurriculumLessonForm';

// * IParams
interface IParams {
  params: {
    curriculumId: string;
    subjectId: string;
    levelId: string;
    topicId: string;
    lessonId: string;
  };
}

// * Page
export default async function CurriculumRoadmapLessonPage({
  params: { curriculumId, subjectId, levelId, topicId, lessonId },
}: IParams) {
  // * Data
  const lesson = await getCurriculumRoadmapLesson(
    curriculumId,
    subjectId,
    levelId,
    topicId,
    lessonId,
  );

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Form */}
        <DashPanel colNum={1}>
          <DashPanelHeader title={`Create "${lesson.name}" Lesson`} />
          <CurriculumLessonForm lesson={lesson} />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Community Lessons */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Community Creations" />
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}

// * Fetcher
async function getCurriculumRoadmapLesson(
  curriculumId: string,
  subjectId: string,
  levelId: string,
  topicId: string,
  lessonId: string,
) {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_lessons')
    .select('*')
    .eq('id', lessonId)
    .single();

  // Handle errors
  if (error || !data)
    return redirect(
      `/curriculum-roadmaps/${curriculumId}/${subjectId}/${levelId}/${topicId}`,
    );

  // Transform data

  // Return transformed data
  return data;
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
    title: `Lessons | ${name}`,
    image: image_path,
    keywords: ['Homeschool Curriculum Roadmap', name],
    description: description,
    openGraph: {
      title: `Lessons | ${name}`,
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
    .from('curriculum_lessons_with_progress_view')
    .select('lesson_id, topic_id, level_id, subject_id, curriculum_id');

  const dynamicRoutes = levels?.map((l) => ({
    curriculumId: l.curriculum_id,
    subjectId: l.subject_id,
    levelId: l.level_id,
    topicId: l.topic_id,
    lessonId: l.lesson_id,
  }));

  return dynamicRoutes || [];
}
