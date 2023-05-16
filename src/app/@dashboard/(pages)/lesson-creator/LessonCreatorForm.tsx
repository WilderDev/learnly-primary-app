'use client';

import Form from '@/lib/components/form/Form';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorModal from './LessonCreatorModal';
import LessonCreatorGoalsSection from './LessonCreatorGoals';
import LessonCreatorStructureSection from './LessonCreatorStructureSection';
import LessonCreatorContextSection from './LessonCreatorContextSection';
import LessonCreatorFormActions from './LessonCreatorFormActions';

export default function LessonCreatorForm() {
  // * Hooks / Context
  const { handleSubmit } = useLessonCreator();

  // * Render
  return (
    <>
      {/* Form */}
      <Form className="w-full" onSubmit={handleSubmit}>
        {/* Section 1 - Lesson Goals */}
        <LessonCreatorGoalsSection />

        {/* Section 2 - Lesson Structure */}
        <LessonCreatorStructureSection />

        {/* Section 3 */}
        <LessonCreatorContextSection />

        {/* Action Buttons */}
        <LessonCreatorFormActions />
      </Form>

      {/* Modal */}
      <LessonCreatorModal />
    </>
  );
}
