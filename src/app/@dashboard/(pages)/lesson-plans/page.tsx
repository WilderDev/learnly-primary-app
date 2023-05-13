import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';

export default function LessonCreatorPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Lesson Plans TSK */}
        {/* TSK */}

        {/* Lesson Plan Templates */}
        {/* TSK */}
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Community Lesson Plans */}
        {/* TSK */}
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Lesson Plans',
  description: 'View all of your lesson plans.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355
