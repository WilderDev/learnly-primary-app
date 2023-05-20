import { supabaseServer } from '@/lib/auth/supabaseServer';
import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import Link from 'next/link';

// * Page
export default async function CurriculumRoadmapsPage() {
  // * Data
  const recommendedRoadmaps = await getCurriculumRoadmaps();

  // * Render
  return (
    <>
      <DashMainCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="Recommended Curriculum Roadmaps" />
          {/* TSK */}
          {recommendedRoadmaps?.map((rm) => (
            <Link href={`/curriculum-roadmaps/${rm.id}`} key={rm.id}>
              {rm.name}
            </Link>
          ))}
        </DashPanel>

        <DashPanel colNum={2}>
          <DashPanelHeader title="Community Created Roadmaps" />
          {/* TSK */}
        </DashPanel>
      </DashMainCol>

      <DashSideCol>
        <DashPanel colNum={1}>
          <DashPanelHeader title="TSK" />
          {/* TSK */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}

// * Fetcher
async function getCurriculumRoadmaps() {
  const supabase = supabaseServer(); // Create supabase instance for server-side

  // Get all curriculum roadmaps
  const { data, error } = await supabase
    .from('curriculums')
    .select(`*`)
    .eq('status', 'PUBLISHED');

  // Handle errors
  if (error) return [];

  // Filter data
  const recommenedRoadmaps = data.filter((rm) => rm.type === 'RECOMMENDED');

  // Return transformed data
  return recommenedRoadmaps;
}

// * Metadata
export const metadata = {
  title: 'Curriculum Roadmaps',
  description:
    'Homeschool parents Learnly dashboard curriculum roadmaps page. Curriculum roadmaps for homeschool parents.',
};
