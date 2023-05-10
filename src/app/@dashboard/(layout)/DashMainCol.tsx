import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function DashMainCol({ children, className }: IProps) {
  // * Render
  return (
    <section
      className={cn(
        'col-span-12 space-y-12 sm:space-y-8 xl:col-span-8 xl:space-y-10 2xl:col-span-9',
        className,
      )}
    >
      {children}
    </section>
  );
}
