import LessonPlanCreatorInfo from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanCreatorInfo';
import LessonPlanTags from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanTags';
import { ICurriculumLessonPlan } from '@/assets/typescript/curriculum-roadmaps';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import CurriculumLessonActionItems from './CurriculumLessonActionItems';

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
  return (
    <>
      <main className="my-3 print:my-0">
        {/* Info */}
        <div className="mb-6 flex flex-col print:hidden print:mb-0">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Creator */}
            <LessonPlanCreatorInfo
              name={lessonPlan?.creator_name!}
              avatar_url={lessonPlan?.creator_avatar_url!}
              // role={lessonPlan.creator.}
            />

            {/* Actions */}
            <CurriculumLessonActionItems
              id={lessonPlan?.id!}
              studentIds={studentIds}
              isScheduled={!!lessonPlan?.scheduled_date}
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan?.tags || []} />
        </div>

        {/* Content */}
        <LessonPlanMarkdown content={lessonPlan?.content!} />
      </main>
    </>
  );
}
