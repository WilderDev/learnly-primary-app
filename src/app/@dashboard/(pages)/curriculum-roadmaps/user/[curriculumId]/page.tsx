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
  };
}

// * Page
export default async function CurriculumRoadmapSubjects({
  params: { curriculumId },
}: IParams) {
  // * Data
  const { subjects } = await getSubjects(curriculumId);

  // * Render
  return (
    <CurriculumRoadmapSection>
      <CurriculumRoadmapList data={subjects} />
    </CurriculumRoadmapSection>
  );
}

// * Fetcher
async function getSubjects(curriculumId: string) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('curriculum_subjects_with_progress_view')
    .select('*')
    .eq('user_curriculum_id', curriculumId);

  // 2. Handle Errors
  if (error || data.length === 0) return redirect(`/curriculum-roadmaps/user`);

  // 3. Transform Data
  const transformedData: ICurriculumListItem[] = data!.map((subject) => ({
    id: subject.curriculum_subject_id!,
    name: subject.subject_name!,
    description: subject.subject_description!,
    image: subject.subject_image_path!,
    type: subject.subject_type!,
    progress: subject.progress_percentage!,
    url: `/curriculum-roadmaps/user/${curriculumId}/${subject.curriculum_subject_id}`!,
  }));
  const transformedMetadata = {
    name: data![0].curriculum_name!,
    description: data![0].curriculum_description!,
    imagePath: data![0].curriculum_image_path!,
  };

  // 4. Return Transformed Data and Metadata
  return {
    subjects: transformedData,
    metadata: transformedMetadata,
  };
}

// * Metadata
export async function generateMetadata({ params: { curriculumId } }: IParams) {
  const { metadata } = await getSubjects(curriculumId);

  return {
    slug: `/curriculum-roadmaps/user/${curriculumId}`,
    title: `${metadata.name} | Curriculum Roadmap | Subjects`,
    description: `${metadata.description} - view all subjects`,
    keywords: [
      `${metadata.name} curriculum`,
      `${metadata.name} curriculum roadmap`,
      'homeschool curriculum',
    ],
    openGraph: {
      title: `${metadata.name} | Curriculum Roadmap | Subjects`,
      description: `${metadata.description} - view all subjects`,
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
    .from('curriculum_subjects_with_progress_view')
    .select('user_curriculum_id');

  const paths =
    data?.map((c) => ({
      curriculumId: c.user_curriculum_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
