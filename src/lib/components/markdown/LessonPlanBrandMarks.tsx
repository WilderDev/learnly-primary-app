import Logo from '../brand/Logo';

export default function LessonPlanBrandMarks() {
  // * Render
  return (
    <div className="mt-8 items-center hidden print:flex w-full space-x-2">
      {/* Logo */}
      <Logo className="ml-auto" size="sm" />

      {/* Generated Text */}
      <div className="text-xs text-slate-400 dark:text-navy-300 print:text-slate-400">
        Created with{' '}
        <span className="text-slate-600 dark:text-navy-200 print:text-slate-600">
          Learnly
        </span>
      </div>
    </div>
  );
}
