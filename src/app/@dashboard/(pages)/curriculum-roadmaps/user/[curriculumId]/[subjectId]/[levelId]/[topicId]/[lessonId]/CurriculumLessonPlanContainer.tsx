import LessonPlanActionIcons from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanActionIcons';
import LessonPlanCreatorInfo from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanCreatorInfo';
import LessonPlanMarkComplete from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanMarkComplete';
import LessonPlanTags from '@/app/@dashboard/(pages)/lesson-plans/[id]/LessonPlanTags';
import { ICurriculumLessonPlan } from '@/assets/typescript/curriculum-roadmaps';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';

// * Props
interface IProps {
  lessonPlan: ICurriculumLessonPlan['lesson_plan'];
}

// * Container
export default function CurriculumLessonPlanContainer({ lessonPlan }: IProps) {
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
            {/* TSK */}
            <LessonPlanActionIcons
              id={lessonPlan?.id!}
              //   scheduled_date={lessonPlan.scheduled_date}
              scheduled_date={new Date()} // TSK
            />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan?.tags || []} />
        </div>

        {/* Content */}

        <LessonPlanMarkdown content={lessonPlan?.content!} />

        {/* Mark Complete */}
        <LessonPlanMarkComplete
          isComplete={false} // TSK
          //   isComplete={lessonPlan?.completion_date !== null}
        />
      </main>
    </>
  );
}

// Probably have a regenerate button
// TSK: Fix Print!!
