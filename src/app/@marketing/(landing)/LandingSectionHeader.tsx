// * Props
interface IProps {
  title: string;
  subtitle: string;
  description: string;
}

// * Component
export default function LandingSectionHeader({
  title,
  subtitle,
  description,
}: IProps) {
  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        {/* Title & Subtitle */}
        <h2>
          <span className="text-base font-semibold leading-7 text-green-600 dark:text-green-500 block">
            {subtitle}
          </span>

          <span className="mt-2 block text-3xl font-bold tracking-tight text-slate-900 dark:text-navy-50 sm:text-4xl md:text-5xl">
            {title}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-navy-200">
          {description}
        </p>
      </div>
    </header>
  );
}
