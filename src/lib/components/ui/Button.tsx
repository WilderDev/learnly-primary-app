'use client';

import { TEffect, TFill, TSize, TVariant } from '@/assets/typescript/ui';
// * Imports
import cn from '@/lib/common/cn';
import Link from 'next/link';

// * Props
interface IProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  size?: TSize;
  variant?: TVariant;
  fill?: TFill;
  effect?: TEffect | 'none';
  shadow?: TSize;
  rounded?: TSize | 'full';
  url?: string;
  className?: string;
}

// * Component
export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  fill = 'solid',
  effect = 'none',
  shadow = 'md',
  rounded = 'md',
  url,
  className,
  ...props
}: IProps) {
  // Button Default Styles
  const defaultStyles =
    'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out active:shadow-none';

  // Button Size Styles
  const sizes: { [key in TSize]: string } = {
    xs: 'px-1.5 md:px-2 py-1 text-xs md:text-sm',
    sm: 'px-2 md:px-3 py-2 text-xs md:text-sm',
    md: 'px-3 md:px-4 py-2 text-sm md:text-base',
    lg: 'px-4 md:px-6 py-3 text-base md:text-lg',
    xl: 'px-8 md:px-14 py-3.5 text-lg md:text-xl',
  };

  // Button Variant Styles
  const variants: { [key in TVariant]: string } = {
    primary: 'text-white focus:ring-green-500',
    secondary: 'text-blue-700 focus:ring-blue-500',
  };

  // Button Fill Styles
  const fills: { [key in TFill]: { [key in TVariant]: string } } = {
    // Solid
    solid: {
      primary: 'bg-green-600 hover:bg-green-700 focus:ring-offset-green-600',
      secondary: 'bg-blue-600 hover:bg-blue-700 focus:ring-offset-blue-600',
    },
    // Outline
    outline: {
      primary:
        'border border-green-600 hover:bg-green-50 focus:ring-offset-green-600',
      secondary:
        'border border-blue-600 hover:bg-blue-50 focus:ring-offset-blue-600',
    },
    // Gradient
    gradient: {
      primary:
        'bg-gradient-to-bl from-green-500 to-green-600 via-emerald-600 focus:ring-offset-green-600 hover:brightness-110 active:brightness-90',
      secondary:
        'bg-gradient-to-bl from-blue-500 to-blue-600 via-sky-60 focus:ring-offset-blue-600 hover:brightness-110 active:brightness-90',
    },
  };

  // Button Effect Styles
  const effects: { [key in TEffect | 'none']: string } = {
    none: '',
    scale: 'transform active:scale-95 hover:scale-105',
  };

  // Button Shadow Styles
  const shadows: { [key in TSize]: string } = {
    xs: 'shadow-xs hover:shadow-sm',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
  };

  // Button Rounded Styles
  const roundeds: { [key in TSize | 'full']: string } = {
    xs: 'rounded-[1]',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // * Render
  return url ? (
    <Link
      className={cn(
        defaultStyles,
        sizes[size],
        variants[variant],
        fills[fill][variant],
        effects[effect],
        shadows[shadow],
        roundeds[rounded],
        className,
      )}
      href={url}
      prefetch={true}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={cn(
        defaultStyles,
        sizes[size],
        variants[variant],
        fills[fill][variant],
        effects[effect],
        shadows[shadow],
        roundeds[rounded],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
