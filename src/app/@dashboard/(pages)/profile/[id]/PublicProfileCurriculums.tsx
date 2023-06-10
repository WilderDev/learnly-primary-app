import { Card, CardContainer } from '@/lib/components/ui/Card';
import Image from 'next/image';

// * Props
interface IProps {
  curriculums: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  }[];
}

// * Component
export default function PublicProfileCurriculums({ curriculums }: IProps) {
  // * Render
  return (
    <CardContainer>
      {/* Lesson Plans */}
      {curriculums?.map((c) => (
        <Card className="md:col-span-2 xl:col-span-3" key={c.id}>
          <div className="flex items-center space-x-4 border-b border-b-slate-300 dark:border-b-navy-500 pb-3">
            {/* Image */}
            <Image
              className="rounded-full w-10 h-10"
              src={c.imageUrl}
              alt={c.name}
              width={1600}
              height={900}
            />

            {/* Title */}
            <Card.Title className="xl:text-lg font-semibold line-clamp-2">
              {c.name}
            </Card.Title>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-navy-200 mt-3">
            {c.description}
          </p>
        </Card>
      ))}
    </CardContainer>
  );
}
