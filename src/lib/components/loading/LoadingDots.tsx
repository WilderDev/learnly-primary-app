import { TSize } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';

interface IProps {
  size?: TSize;
}

export default function LoadingDots({ size = 'md' }: IProps) {
  const sizes: { [key in TSize]: string } = {
    xs: 'px-1.5 md:px-2 py-1 text-xs md:text-sm',
    sm: 'px-2 md:px-3 py-2 text-xs md:text-sm',
    md: 'px-3 md:px-4 py-2 text-sm md:text-base',
    lg: 'px-4 md:px-6 py-3 text-base md:text-lg',
    xl: 'px-8 md:px-14 py-3.5 text-lg md:text-xl',
  };

  return (
    <span className={cn('inline-flex items-center', sizes[size])}>
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </span>
  );
}
