'use client';

import {
  ILessonPlanWithCreator,
  IUserLessonPlanBasic,
} from '@/assets/typescript/lesson-plan';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import LessonPlanCreatorInfo from './LessonPlanCreatorInfo';
import LessonPlanTags from './LessonPlanTags';
import LessonPlanActionIcons from './LessonPlanActionIcons';
import LessonPlanMarkComplete from './LessonPlanMarkComplete';
import { useState } from 'react';

// * Props
interface IProps {
  lessonPlan: ILessonPlanWithCreator;
  userLessonPlan: IUserLessonPlanBasic | null;
}

// * Component
export default function LessonPlanContainer({
  lessonPlan,
  userLessonPlan,
}: IProps) {
  // * State
  const [print, setPrint] = useState(false);

  // * Render
  return (
    <>
      <main className="mx-auto my-3 max-w-full print:my-0">
        {/* Info */}
        <div className="mb-6 flex flex-col print:hidden print:invisible print:mb-0">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Creator */}
            <LessonPlanCreatorInfo
              name={`${lessonPlan.creator.firstName} ${lessonPlan.creator.lastName}`}
              avatar_url={lessonPlan.creator.avatarUrl}
              // role={lessonPlan.creator.}
            />

            {/* Actions */}
            <LessonPlanActionIcons
              id={lessonPlan.id}
              hasScheduledDate={!!userLessonPlan?.scheduledDate}
              handlePrint={() => setPrint(true)}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan.tags || []} />
        </div>

        {/* Content */}
        <LessonPlanMarkdown content={lessonPlan.content} print={print} />

        {/* Mark Complete */}
        {!!userLessonPlan && (
          <LessonPlanMarkComplete
            isComplete={!!userLessonPlan.completionDate}
          />
        )}
      </main>
    </>
  );
}
