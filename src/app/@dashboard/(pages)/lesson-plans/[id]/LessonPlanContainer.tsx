import { ILessonPlan } from '@/assets/typescript/lesson-plan';
import LessonPlanMarkdown from '@/lib/components/markdown/LessonPlanMarkdown';
import LessonPlanCreatorInfo from './LessonPlanCreatorInfo';
import LessonPlanTags from './LessonPlanTags';
import LessonPlanActionIcons from './LessonPlanActionIcons';

// * Props
interface IProps {
  lessonPlan: ILessonPlan;
}

// * Component
export default function LessonPlanContainer({ lessonPlan }: IProps) {
  return (
    <>
      <main className="mx-auto my-3 print:my-0 max-w-4xl">
        {/* Info */}
        <div className="mb-6 flex flex-col print:hidden">
          {/* Top */}
          <div className="flex items-center justify-between">
            {/* Creator */}
            <LessonPlanCreatorInfo
              name={`${lessonPlan.creator.first_name} ${lessonPlan.creator.last_name}`}
              avatar_url={lessonPlan.creator.avatar_url}
              // role={lessonPlan.creator.}
            />

            {/* Actions */}
            <LessonPlanActionIcons />
          </div>

          {/* Tags */}
          <LessonPlanTags tags={lessonPlan.tags || []} />
        </div>

        {/* Content */}
        <LessonPlanMarkdown content={lessonPlan.content} />

        {/* BrandMarks */}
        {/* <LessonPlanTrademarks /> */}
      </main>
    </>
  );
}
