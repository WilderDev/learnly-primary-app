import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// * Component
export default function OverlappingImages({ children, className }: IProps) {
  return <div className={cn('flex -space-x-2', className)}>{children}</div>;
}
