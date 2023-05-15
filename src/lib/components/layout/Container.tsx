import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IProps) {
  return (
    <div
      className={cn(
        'relative mx-auto container px-4 sm:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
