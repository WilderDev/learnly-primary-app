import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  marginY?: boolean;
  className?: string;
}

export default function Main({ children, marginY = true, className }: IProps) {
  return (
    <main
      className={cn(
        marginY && 'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14',
        className,
      )}
    >
      {children}
    </main>
  );
}
