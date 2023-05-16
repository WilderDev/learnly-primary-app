'use client';

import Button from '@/lib/components/ui/Button';
import { useLessonCreator } from './LessonCreatorCtx';

// * Component
export default function LessonCreatorFormActions() {
  // * Hooks / Context
  const { isLoading, topic, reset } = useLessonCreator();

  // * Render
  return (
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
  );
}
