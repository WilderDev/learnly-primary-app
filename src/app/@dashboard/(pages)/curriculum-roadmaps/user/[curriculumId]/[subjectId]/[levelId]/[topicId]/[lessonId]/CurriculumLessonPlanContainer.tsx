'use client';

import LessonPlanCreatorInfo from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanCreatorInfo';
import LessonPlanTags from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanTags';
import { ICurriculumLessonPlan } from '@/assets/typescript/curriculum-roadmaps';
import PrintableMarkdownContainer from '@/lib/components/markdown/PrintableMarkdownContainer';
import CurriculumLessonActionItems from './CurriculumLessonActionItems';
import LessonPlanMarkComplete from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanMarkComplete';
import { usePrint } from '@/lib/hooks/usePrint';

// * Props
interface IProps {
  lessonPlan: ICurriculumLessonPlan['lesson_plan'];
  studentIds: string[];
}

// * Container
export default function CurriculumLessonPlanContainer({
  lessonPlan,
  studentIds,
}: IProps) {
  // * Hooks
  const { componentRef, handlePrint } = usePrint();

  return (
    <>
      <main className="my-3 print:my-0">
        {/* Info */}
        <div className="mb-6 flex flex-col print:hidden print:mb-0">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Creator */}
            <LessonPlanCreatorInfo
              id={lessonPlan?.creator_id!}
              name={lessonPlan?.creator_name!}
              avatar_url={lessonPlan?.creator_avatar_url!}
              // role={lessonPlan.creator.}
            />

            {/* Actions */}
            <CurriculumLessonActionItems
              id={lessonPlan?.id!}
              studentIds={studentIds}
              isScheduled={!!lessonPlan?.scheduled_date}
              handlePrint={handlePrint}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan?.tags || []} />
        </div>

        {/* Content */}
        <div ref={componentRef}>
          <PrintableMarkdownContainer content={lessonPlan?.content!} />
        </div>

        {/* Mark Complete */}
        <LessonPlanMarkComplete
          isComplete={!!lessonPlan?.completion_date}
          lessonPlanIdProp={lessonPlan?.id}
        />
      </main>
    </>
  );
}
