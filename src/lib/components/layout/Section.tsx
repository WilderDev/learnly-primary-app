import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: IProps) {
  return (
    <section id={id} className={cn('', className)}>
      {children}
    </section>
  );
}
