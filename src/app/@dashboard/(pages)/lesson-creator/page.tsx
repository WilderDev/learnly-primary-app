import DashMainCol from '../../(layout)/DashMainCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import DashSideCol from '../../(layout)/DashSideCol';
import LessonCreatorForm from './LessonCreatorForm';

export default function LessonCreatorPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/* Lesson Creator Form */}
        <DashPanel>
          <DashPanelHeader title="Create Your Personalized Lesson Plan" />

          <LessonCreatorForm />
        </DashPanel>

        {/* Lesson Creator Templates */}
        <DashPanel>
          <DashPanelHeader title="Lesson Plan Templates" />
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/* Community Lessons */}
        <DashPanel>
          <DashPanelHeader title="Community Lessons" />
        </DashPanel>
      </DashSideCol>
    </>
  );
}

export const metadata = {
  title: 'Lesson Creator',
  description: 'Create a lesson plan for your child.',
};

export const dynamic = 'force-dynamic'; // TSK: Temp until they solve: https://github.com/vercel/next.js/issues/49355

/// ! ==========GOALS========== ! \\\
// subject: string
// level: string
// topic: string | null
// objectives: Database["public"]["Enums"]["objective"][]
/// * =========extra=========== * \\\
// difficulty: number
// standards: Database["public"]["Enums"]["standard"][]
/// ======================================= \\\

/// ! ==========STRATEGY========== ! \\\
// format: Database["public"]["Enums"]["format"]
// teaching_strategy: Database["public"]["Enums"]["teaching_strategy"]
// philosophy: Database["public"]["Enums"]["philosophy"]
/// * =========extra=========== * \\\
// length_in_min: number
// pace: Database["public"]["Enums"]["pace"]
/// ======================================= \\\

/// ! ==========TOOLS========== ! \\\
// materials: Database["public"]["Enums"]["material"][]
// special_considerations: string | null
/// * =========extra=========== * \\\
// reflections: Json[]
// learning_styles: Database["public"]["Enums"]["learning_style"][]
