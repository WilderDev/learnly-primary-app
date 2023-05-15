'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import Button from '@/lib/components/ui/Button';
import LessonCreatorFormSection from './LessonCreatorFormSection';
import { useLessonCreator } from './LessonCreatorCtx';
import LessonCreatorTopicSelect from './LessonCreatorTopicSelect';

export default function LessonCreatorForm() {
  // * Hooks / Context
  const { isLoading, handleSubmit, topic, reset } = useLessonCreator();

  // * Render
  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      {/* Lesson Goals Section */}
      <LessonCreatorFormSection
        title="Lesson Goals"
        description="What is your desired outcome?"
        colNum={1}
        isShowingAdvancedOptions={false}
        toggleAdvancedOptions={() => {}}
      >
        {/* Form Item 1 */}
        <LessonCreatorTopicSelect />
      </LessonCreatorFormSection>

      {/* Section 2 */}
      <LessonCreatorFormSection
        title="Lesson Strategy"
        description="How will you achieve your desired outcome?"
        colNum={2}
        isShowingAdvancedOptions={false}
        toggleAdvancedOptions={() => {}}
      >
        {/* Form Item 1 */}
        <Input label="Form Item 1" value="test" setValue={() => {}} />
      </LessonCreatorFormSection>

      {/* Section 3 */}
      <LessonCreatorFormSection
        title="Lesson Tactics"
        description="What will you do to achieve your desired outcome?"
        colNum={3}
        isShowingAdvancedOptions={false}
        toggleAdvancedOptions={() => {}}
      >
        {/* Form Item 1 */}
        <Input label="Form Item 1" value="test" setValue={() => {}} />
      </LessonCreatorFormSection>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between col-span-3">
        {/* Save as Template */}
        <Button fill="outline" type="button">
          Save as Template
        </Button>

        {/* Form Buttons */}
        <div className="flex flex-col sm:flex-row space-x-4">
          {/* Reset */}
          <Button
            size="sm"
            fill="none"
            variant="dark"
            shadow="none"
            type="button"
            onClick={() => reset(true)}
          >
            Reset
          </Button>

          {/* Generate */}
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading || !topic}
          >
            Generate
          </Button>
        </div>
      </div>
    </Form>
  );
}
