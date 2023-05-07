'use client';

// * Imports
import cn from '@/lib/common/cn';
import Link from 'next/link';

// * Types
export type TSize = 'sm' | 'md' | 'lg' | 'xl';
export type TVariant = 'primary' | 'secondary';
export type TFill = 'solid' | 'outline' | 'gradient';
export type TEffect = 'none' | 'scale';

// * Interfaces
interface IProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  size?: TSize;
  variant?: TVariant;
  fill?: TFill;
  effect?: TEffect;
  shadow?: TSize;
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
  url,
  className,
  ...props
}: IProps) {
  // Button Default Styles
  const defaultStyles =
    'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out active:shadow-none';

  // Button Size Styles
  const sizes: { [key in TSize]: string } = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-14 py-3.5 text-xl',
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
        'bg-gradient-to-bl from-green-500 to-green-600 via-emerald-600 hover:from-green-500 hover:to-blue-600 focus:ring-offset-green-600',
      secondary:
        'bg-gradient-to-bl from-blue-500 to-blue-600 via-sky-600 hover:from-blue-500 hover:to-green-600 focus:ring-offset-blue-600',
    },
  };

  // Button Effect Styles
  const effects: { [key in TEffect]: string } = {
    none: '',
    scale: 'transform active:scale-95 hover:scale-105',
  };

  // Button Shadow Styles
  const shadows: { [key in TSize]: string } = {
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
  };

  // * Render
  return url ? (
    <Link
      className={cn(
        defaultStyles,
        sizes[size],
        variants[variant],
        fills[fill],
        effects[effect],
        shadows[shadow],
        className,
      )}
      href={url}
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
        fills[fill],
        effects['scale'],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
