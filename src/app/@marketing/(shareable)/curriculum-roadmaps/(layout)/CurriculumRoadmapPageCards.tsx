// * Imports
import { IShareableCurriculumListItem } from '@/assets/typescript/curriculum-roadmap';
import Button from '@/lib/components/ui/Button';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// * Props
interface IProps {
  items: IShareableCurriculumListItem[];
}

// * Component
export default function CurriculumRoadmapPageCards({ items }: IProps) {
  // * Render
  return (
    <CardContainer>
      {/* Curriculum Roadmaps */}
      {items?.map((item) => (
        <Card
          className="relative group h-32 md:h-40 lg:h-64 text-white dark:text-navy-50 bg-navy-900 hocus:bg-slate-900 hocus:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform-gpu"
          url={item.url}
          key={item.id}
        >
          {/* Image */}
          <Image
            className="absolute inset-0 w-full transition-opacity duration-300 ease-in-out -z-10 h-full object-cover object-center opacity-40 rounded-md group-hover:opacity-10 group-focus:opacity-10"
            src={item.imagePath}
            alt={item.name}
            width={6000}
            height={4000}
            priority={true}
          />

          {/* Name */}
          <Card.Title className="text-white border-b border-b-slate-300 pb-2 dark:text-navy-50 text-lg md:text-xl font-bold lg:text-3xl">
            {item.name}
          </Card.Title>

          {/* Description */}
          <Card.Subtitle className="text-slate-100 hidden group-hover:block group-focus:block mt-2 font-medium lg:text-lg dark:text-navy-100 pr-6 md:pr-12 lg:pr-16 group-hover:text-slate-50 group-focus:text-slate-50 dark:group-hover:text-navy-50 dark:group-focus:text-navy-50">
            {item.description}
          </Card.Subtitle>

          {/* Button */}
          <Button
            className="absolute pointer-events-none bottom-0 right-0 mb-4 mr-4 px-1.5 py-1.5 md:px-1.5 group-hover:from-green-500 group-hover:to-emerald-600 transition-colors duration-300 group-focus:from-green-500 group-focus:to-emerald-600"
            fill="gradient"
            variant="dark"
            size="xs"
            rounded="full"
            type="button"
          >
            <ArrowSmallUpIcon
              className="h-5 w-5 rotate-45 font-bold"
              aria-hidden="true"
            />
          </Button>
        </Card>
      ))}
    </CardContainer>
  );
}
