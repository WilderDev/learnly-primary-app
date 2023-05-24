// * Props
interface IProps {
  title: string;
  subTitle?: string;
  p1?: string;
  p2?: string;
}

export default function OnboardingStepHeader({
  title,
  subTitle,
  p1,
  p2,
}: IProps) {
  // * Render
  return (
    <div className="flex flex-col text-center items-center justify-center space-y-3 mt-2 mb-8 max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-green-800 dark:text-green-600 md:text-2xl xl:text-3xl">
        {title}
      </h2>

      {/* Description */}
      <p className="sm:text-lg text-slate-800 dark:text-navy-50 md:text-xl xl:text-2xl">
        {subTitle}
      </p>
      <p className="text-xs sm:text-sm text-slate-700 dark:text-navy-100 md:text-base">
        <span className="block">{p1}</span>
        <span className="mt-2 block">{p2}</span>
      </p>
    </div>
  );
}
