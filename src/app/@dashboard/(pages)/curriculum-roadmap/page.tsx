import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import CurrentCurriculumRoadmaps from './CurrentCurriculumRoadmaps';

// * Page
export default function CurriculumRoadmapPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Curriculum Roadmaps */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="Your Curriculum Roadmaps" />
          {/* @ts-expect-error Server Component */}
          <CurrentCurriculumRoadmaps />
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

export const metadata = {
  title: 'Curriculum Roadmap',
  description:
    'Homeschool parents Learnly dashboard curriculum roadmap page. Curriculum roadmap for homeschool parents.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
