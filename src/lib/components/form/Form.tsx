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
        'flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6',
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
