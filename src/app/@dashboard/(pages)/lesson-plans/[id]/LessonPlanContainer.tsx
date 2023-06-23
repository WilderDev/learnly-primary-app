'use client';

import {
  ILessonPlanWithCreator,
  IUserLessonPlanBasic,
} from '@/assets/typescript/lesson-plan';
import PrintableMarkdownContainer from '@/lib/components/markdown/PrintableMarkdownContainer';
import LessonPlanCreatorInfo from './LessonPlanCreatorInfo';
import LessonPlanTags from './LessonPlanTags';
import LessonPlanActionIcons from './LessonPlanActionIcons';
import LessonPlanMarkComplete from './LessonPlanMarkComplete';
import { usePrint } from '@/lib/hooks/usePrint';

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
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Creator */}

            {/* Title */}
            <h1 className="mb-6 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white md:text-center">
              {lessonPlan.title}
            </h1>

            {/* Actions */}
            <div className="mt-4 sm:mt-0">
              <LessonPlanActionIcons
                lessonPlan={lessonPlan}
                id={lessonPlan.id}
                hasScheduledDate={!!userLessonPlan?.scheduledDate}
                handlePrint={handlePrint}
              />
            </div>
          </div>

          {/* Creator Info */}
          <div className="flex justify-center md:justify-start">
            <LessonPlanCreatorInfo
              id={lessonPlan.creator.id}
              name={`${lessonPlan.creator.firstName} ${lessonPlan.creator.lastName}`}
              avatar_url={lessonPlan.creator.avatarUrl}
              // role={lessonPlan.creator.}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan.tags || []} />
        </div>

        {/* Content */}
        <div ref={componentRef}>
          <PrintableMarkdownContainer content={lessonPlan.content} />
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
