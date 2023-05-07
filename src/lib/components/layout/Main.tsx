import cn from '@/lib/common/cn';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: IProps) {
  return <main className={cn('', className)}>{children}</main>;
}
