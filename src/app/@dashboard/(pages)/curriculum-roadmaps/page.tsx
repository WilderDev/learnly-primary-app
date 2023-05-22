import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import CurrentCurriculumRoadmaps from './CurrentCurriculumRoadmaps';

// * Page
export default async function CurriculumRoadmapsPage() {
  // * Render
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

// * Metadata
export const metadata = {
  title: 'Curriculum Roadmaps',
  description:
    'Homeschool parents Learnly dashboard curriculum roadmaps page. Curriculum roadmaps for homeschool parents.',
};
