import Image from 'next/image';
import Link from 'next/link';

import { TEffect, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import Tooltip from '../ui/Tooltip';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  size?: TSize;
  variant?: TVariant;
  effect?: TEffect | 'none';
  shadow?: TSize | 'none';
  rounded?: TSize | 'full';
  url?: string;
  bubbleColor?: string;
  tooltip?: boolean;
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = 'md',
  variant = 'light',
  effect = 'none',
  shadow = 'md',
  rounded = 'full',
  url,
  bubbleColor,
  tooltip = true,
  className,
}: IProps) {
  // * Styles
  // Avatar Default Styles
  const defaultStyles =
    'inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out active:shadow-none';

  // Avatar Size Styles
  const sizes: { [key in TSize]: string } = {
    xs: 'h-3 w-3',
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-10 w-10',
    xl: 'h-14 w-14',
  };

  // Avatar Variant Styles
  const variants: { [key in TVariant]: string } = {
    primary: 'ring-green-700 dark:ring-green-500',
    secondary: 'ring-blue-700 dark:ring-blue-500',
    light: 'ring-white dark:ring-navy-700',
    dark: 'ring-slate-100 dark:ring-navy-100',
  };

  // Avatar Effect Styles
  const effects: { [key in TEffect | 'none']: string } = {
    none: '',
    scale: 'transform active:scale-95 hocus:scale-105',
  };

  // Avatar Shadow Styles
  const shadows: { [key in TSize | 'none']: string } = {
    none: '',
    xs: 'shadow-xs hocus:shadow-sm',
    sm: 'shadow-sm hocus:shadow-md',
    md: 'shadow-md hocus:shadow-lg',
    lg: 'shadow-lg hocus:shadow-xl',
    xl: 'shadow-xl hocus:shadow-2xl',
  };

  // Avatar Rounded Styles
  const roundeds: { [key in TSize | 'full']: string } = {
    xs: 'rounded-[1]',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const avatarImage = (
    <>
      <Image
        className={cn(defaultStyles, sizes[size], roundeds[rounded], className)}
        src={src}
        alt={alt}
        width={512}
        height={512}
      />

      {bubbleColor && (
        <span
          className={cn(
            'absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white dark:border-navy-700',
            bubbleColor,
          )}
        />
      )}
    </>
  );

  // * Render
  return url ? (
    <Link
      className={cn(
        'group relative inline-flex shrink-0 rounded-full opacity-75 transition-all hocus:z-10 hocus:scale-110 hocus:opacity-100',
        sizes[size],
        roundeds[rounded],
        variants[variant],
        shadows[shadow],
        effects[effect],
        className,
      )}
      href={url}
    >
      {tooltip ? <Tooltip tip={alt}>{avatarImage}</Tooltip> : avatarImage}
    </Link>
  ) : (
    <div
      className={cn(
        'group relative inline-flex shrink-0 rounded-full',
        sizes[size],
        roundeds[rounded],
        shadows[shadow],
        effects[effect],
        className,
      )}
    >
      {tooltip ? <Tooltip tip={alt}>{avatarImage}</Tooltip> : avatarImage}
    </div>
  );
}
