import cn from '@/lib/common/cn';

// * Props
interface IProps {
  className?: string;
}

// * Component
export default function VerticleMarqueeOverlays({
  className = 'from-slate-50 dark:from-navy-800',
}: IProps) {
  // * Render
  return (
    <>
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b',
          className,
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t',
          className,
        )}
      />
    </>
  );
}
