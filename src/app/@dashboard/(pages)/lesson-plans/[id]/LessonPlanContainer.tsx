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
import { usePrint } from '@/lib/common/usePrint';

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
  // * Hooks
  const { componentRef, handlePrint } = usePrint(lessonPlan.title);

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
              handlePrint={handlePrint}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan.tags || []} />
        </div>

        {/* Content */}
        <div ref={componentRef}>
          <LessonPlanMarkdown content={lessonPlan.content} />
        </div>

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
