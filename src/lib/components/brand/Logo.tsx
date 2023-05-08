// * Imports
import { TSize } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import Image from 'next/image';
import Link from 'next/link';

// * Assets
import logo from '@/assets/images/brand/learnly-lg.png';

// * Props
interface IProps {
  size?: TSize;
  withText?: boolean;
  className?: string;
}

// * Component
export default function Logo({
  size = 'md',
  withText = false,
  className,
}: IProps) {
  // * Render
  return (
    <Link
      className={cn(
        'group flex items-center rounded-full outline-green-500',
        className,
      )}
      href="/"
    >
      {/* Logo Image */}
      <Image
        className={cn(
          'icon-spin',
          size === 'sm' && 'h-8 w-8',
          size === 'md' && 'h-10 w-10',
          size === 'lg' && 'h-14 w-14',
        )}
        src={logo}
        alt="logo"
        placeholder="blur"
        width={44}
        height={44}
        priority={true}
      />

      {/* Logo Text */}
      {withText && (
        <span className="pl-2 hidden sm:inline-flex font-bold text-slate-700 dark:text-navy-200">
          Learnly
        </span>
      )}
    </Link>
  );
}
