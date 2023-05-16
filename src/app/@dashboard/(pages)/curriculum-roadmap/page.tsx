import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';

export default function CurriculumRoadmapPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Curriculum Roadmap TSK */}
        {/* TSK */}

        {/* Curriculum Roadmap TSK */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* TSKK */}
        {/* TSK */}
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
