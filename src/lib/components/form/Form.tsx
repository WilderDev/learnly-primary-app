'use client';

// * Imports
import cn from '@/lib/common/cn';

// * Props
interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function Form({ children, className, ...props }: IProps) {
  return (
    <form
      className={cn(
        'flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6',
        className,
      )}
      {...props}
      onSubmit={(e) => {
        if (props.onSubmit) {
          e.preventDefault();
          props.onSubmit(e);
        }
      }}
    >
      {children}
    </form>
  );
}
