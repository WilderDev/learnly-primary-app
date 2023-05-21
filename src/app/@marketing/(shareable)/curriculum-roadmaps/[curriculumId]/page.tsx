// * Imports
import { supabaseServer } from '@/lib/auth/supabaseServer';
import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import { redirect } from 'next/navigation';
import CurriculumRoadmapPageHeader from '../(layout)/CurriculumRoadmapPageHeader';
import CurriculumRoadmapPageCards from '../(layout)/CurriculumRoadmapPageCards';
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmap';

// * Params
interface IParams {
  params: {
    curriculumId: string;
  };
}

// * Page
export default async function ShareableCurriculumRoadmapSubjects({
  params: { curriculumId },
}: IParams) {
  // * Data
  const { subjects, metadata } = await getSubjects(curriculumId);

  // * Render
  return (
    <Main className="xl:my-10 2xl:my-10">
      <Container className="shadow rounded-lg p-4 sm:-5">
        {/* Header */}
        <CurriculumRoadmapPageHeader
          title="Curriculum Subjects"
          description={metadata.description}
          subtitle={metadata.name}
        />

        {/* Body */}
        <CurriculumRoadmapPageCards items={subjects} />
      </Container>
    </Main>
  );
}

// * Fetcher
async function getSubjects(curriculumId: string) {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from('shareable_curriculum_subjects_view')
    .select('*')
    .eq('curriculum_id', curriculumId);

  // 2. Handle Errors
  if (error || data.length === 0) return redirect(`/curriculum-roadmaps`);

  // 3. Transform Data
  const transformedData: IShareableCurriculumListItem[] = data.map(
    (subject) => ({
      id: subject.id!,
      name: subject.subject_name!,
      description: subject.subject_description!,
      imagePath: subject.subject_image_path!,
      type: subject.type!,
      url: `/curriculum-roadmaps/${curriculumId}/${subject.id}`!,
    }),
  );
  const transformedMetadata = {
    id: data[0].curriculum_id!,
    name: data[0].curriculum_name!,
    description: data[0].curriculum_description!,
    imagePath: data[0].curriculum_image_path!,
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
export async function getStaticPaths() {
  // 1. Get Data
  const supabase = supabaseServer();
  const { data } = await supabase
    .from('shareable_curriculum_subjects_view')
    .select('curriculum_id');

  const paths =
    data?.map((c) => ({
      curriculum_id: c.curriculum_id,
    })) || [];

  // 2. Return Paths
  return paths;
}
