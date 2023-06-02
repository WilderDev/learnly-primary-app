'use client';

import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import LessonPlanCreatorInfo from './LessonPlanCreatorInfo';
import LessonPlanTags from './LessonPlanTags';
import LessonPlanActionIcons from './LessonPlanActionIcons';
import LessonPlanMarkComplete from './LessonPlanMarkComplete';
import { useState } from 'react';

// * Props
interface IProps {
  lessonPlan: ILessonPlan;
}

// * Component
export default function LessonPlanContainer({ lessonPlan }: IProps) {
  // * State
  const [print, setPrint] = useState(false);

  console.log('lessonPlan:', lessonPlan);

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
              name={`${lessonPlan.creator_first_name} ${lessonPlan.creator_last_name}`}
              avatar_url={lessonPlan.creator_avatar_url}
              // role={lessonPlan.creator.}
            />

            {/* Actions */}
            <LessonPlanActionIcons
              id={lessonPlan.id}
              scheduled_date={lessonPlan.scheduled_date}
              handlePrint={() => setPrint(true)}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan.tags || []} />
        </div>

        {/* Content */}
        <LessonPlanMarkdown content={lessonPlan.content} print={print} />

        {/* Mark Complete */}
        {!!lessonPlan.user_lesson_plan_id && (
          <LessonPlanMarkComplete isComplete={!!lessonPlan.completion_date} />
        )}
      </main>
    </>
  );
}
