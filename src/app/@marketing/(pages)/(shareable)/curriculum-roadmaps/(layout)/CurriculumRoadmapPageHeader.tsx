// * Props
interface IProps {
  title: string;
  description: string;
  subtitle: string;
}

// * Component
export default function CurriculumRoadmapPageHeader({
  title,
  description,
  subtitle,
}: IProps) {
  // * Render
  return (
    <header className="px-6 lg:px-8 mb-12">
      <div className="mx-auto max-w-5xl text-center">
        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm md:text-base mb-2 font-semibold leading-7 text-green-600 dark:text-green-500">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight dark:text-navy-50 text-slate-900 sm:text-6xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg md:leading-8 text-slate-600 dark:text-navy-200 max-w-prose mx-auto">
          {description}
        </p>
      </div>
    </header>
  );
}
