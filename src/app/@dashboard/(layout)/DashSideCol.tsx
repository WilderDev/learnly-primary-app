import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function DashSideCol({ children, className }: IProps) {
  return (
    <aside
      className={cn(
        'col-span-12 space-y-12 sm:space-y-8 xl:col-span-4 xl:space-y-10 2xl:col-span-3',
        className,
      )}
    >
      {children}
    </aside>
  );
}
