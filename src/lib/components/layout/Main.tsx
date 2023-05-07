import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: IProps) {
  return (
    <main
      className={cn(
        'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14',
        className,
      )}
    >
      {children}
    </main>
  );
}
