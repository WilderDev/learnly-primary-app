import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import LessonCreatorCommunityLessons from './LessonCreatorCommunityLessons';
import LessonCreatorForm from './LessonCreatorForm';
import LessonCreatorTemplates from './LessonCreatorTemplates';

export default function LessonCreatorPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Lesson Creator Form */}
        <DashPanel>
          <DashPanelHeader title="Create Your Personalized Lesson Plan" />

          {/* Form */}
          <LessonCreatorForm />
        </DashPanel>

        {/* Lesson Creator Templates */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="Lesson Plan Templates" />

          {/* Templates */}
          {/* @ts-ignore */}
          <LessonCreatorTemplates />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Community Lessons */}
        <DashPanel>
          <DashPanelHeader title="Community Lessons" />

          {/* List */}
          {/* @ts-ignore */}
          <LessonCreatorCommunityLessons />
        </DashPanel>
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Lesson Creator',
  description: 'Create a lesson plan for your child.',
};

export const dynamic = 'force-dynamic';
