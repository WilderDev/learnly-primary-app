import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  colors?: string;
  className?: string;
}

export default function Tag({ children, colors, className }: IProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:bg-navy-100 dark:text-navy-800',
        className,
        colors
      )}
    >
      {children}
    </span>
  );
}
