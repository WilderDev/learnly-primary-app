import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import { redirect } from 'next/navigation';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import CurriculumRoadmapCards, {
  NoCurriculumRoadmapCard,
} from './(layout)/CurriculumRoadmapCards';
import SaveCurriculumRoadmapModalContent from './(layout)/SaveCurriculumRoadmapModalContent';

// * Page
export default async function CurriculumRoadmapsPage() {
  // * Data
  const { user_roadmaps, roadmaps, metadata } = await getCurriculumRoadmaps();

  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Curriculum Roadmaps */}
        <DashPanel colNum={1}>
          <DashPanelHeader
            title="Your Curriculum Roadmaps"
            modalSize="xl"
            hasModal={true}
            modalContent={
              <SaveCurriculumRoadmapModalContent roadmaps={roadmaps} />
            }
          />
          {user_roadmaps.length > 0 ? (
            <CurriculumRoadmapCards roadmaps={user_roadmaps} />
          ) : (
            <NoCurriculumRoadmapCard roadmaps={roadmaps} />
          )}
        </DashPanel>

        {/* Curriculum Roadmap Next Lessons */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Next Lessons" />
          {/* TSK */}
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Popular Curriculum Roadmaps */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Popular Roadmaps" />
          {/* TSK */}
        </DashPanel>

        {/* Curriculum Roadmap Timeline */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Timeline" />
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}

// * Fetcher(s)
async function getCurriculumRoadmaps() {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculum_with_progress_view')
    .select('*');

  // Handle errors
  if (error || data.length === 0) return redirect(`/`);

  // Transform data
  const userRoadmaps = data
    .filter((r) => !!r.user_curriculum_id)
    .map((roadmap) => ({
      id: roadmap.curriculum_id!,
      name: roadmap.curriculum_name!,
      description: roadmap.curriculum_description!,
      image: roadmap.curriculum_image_path!,
      progress: roadmap.progress_percentage!,
      tags: roadmap.curriculum_tags || [],
      url: `/curriculum-roadmaps/user/${roadmap.user_curriculum_id}`,
      students: roadmap.students as { name: string; avatar_url: string }[],
    }));
  const allRoadmaps: ICurriculumListItem[] = data.map((roadmap) => ({
    id: roadmap.curriculum_id!,
    name: roadmap.curriculum_name!,
    description: roadmap.curriculum_description!,
    image: roadmap.curriculum_image_path!,
    progress: roadmap.progress_percentage!,
    tags: roadmap.curriculum_tags || [],
    // url: `/curriculum-roadmaps/${roadmap.curriculum_id}`,
    // students: roadmap.students as { name: string; avatar_url: string }[],
  }));

  return {
    user_roadmaps: userRoadmaps,
    roadmaps: allRoadmaps,
    metadata: {
      title: 'Curriculum Roadmaps',
      description: 'Find the perfect curriculum for your family.',
      subtitle: 'Learnly Favorites',
      creator: {
        name: `${data[0].creator_first_name} ${data[0].creator_last_name}`,
        url: `/profiles/${data[0].creator_id}`,
        avatarUrl: data[0].creator_avatar_url,
      },
    },
  };
}

// * Metadata
export const metadata = {
  title: 'Curriculum Roadmaps',
  description:
    'Homeschool parents Learnly dashboard curriculum roadmaps page. Curriculum roadmaps for homeschool parents.',
};
