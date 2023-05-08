'use client';

// * Imports
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  onSubmit: () => void;
  className?: string;
}

// * Component
export default function Form({ children, onSubmit, className }: IProps) {
  return (
    <form
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className,
      )}
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit();
      }}
    >
      {children}
    </form>
  );
}
