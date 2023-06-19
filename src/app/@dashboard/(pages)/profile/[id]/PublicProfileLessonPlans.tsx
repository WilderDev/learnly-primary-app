import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getIndexColors } from '@/lib/theme/enumColors';
import Image from 'next/image';

// * Props
interface IProps {
  lessons: {
    id: string;
    title: string;
    imageUrl: string;
    tags: string[];
    lengthInMin: number;
    subject: {
      id: string;
      name: string;
    };
    level: {
      id: string;
      name: string;
    };
    topic: {
      id: string;
      name: string;
    };
    createdAt: string;
  }[];
}

// * Component
export default function PublicProfileLessonPlans({ lessons }: IProps) {
  // * Render
  return (
    <CardContainer>
      {/* Lesson Plans */}
      {lessons?.map((l) => (
        <Card url={`/lesson-plans/${l.id}`} key={l.id}>
          <div className="flex items-center space-x-4 w-10/12">
            {/* Image */}
            <Image
              className="rounded-full w-10 h-10"
              src={l.imageUrl}
              alt={l.title}
              width={1600}
              height={900}
            />

            {/* Title */}
            <Card.Title className="font-semibold line-clamp-2">
              {l.title}
            </Card.Title>
          </div>

          <div className="flex items-center justify-between w-full mt-4">
            {/* Created at */}
            <p className="text-xs text-slate-600 dark:text-navy-200 self-end flex-shrink-0">
              {getDatestringFromTimestamp(l.createdAt)}
            </p>

            {/* Tags */}
            <Card.Tags className="mt-0 flex-nowrap gap-y-0">
              {l.tags?.slice(0, 2).map((tag, idx) => (
                <Card.Tag
                  content={tag}
                  colors={getIndexColors(idx).BLEND.SUBDUED}
                  key={tag}
                />
              ))}
            </Card.Tags>
          </div>

          {/* Length in Min */}
          <Card.Bubble
            content={l.lengthInMin.toString() + ' min'}
            colors={getIndexColors(0).TEXT.DARK}
          />
        </Card>
      ))}
    </CardContainer>
  );
}
