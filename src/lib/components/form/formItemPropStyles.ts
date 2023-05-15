import { TFill, TSize, TVariant } from '@/assets/typescript/ui';

export const defaultStyles =
  'peer w-full transition-shadow ring-2 focus:ring-offset-2 ring-slate-300/90 bg-white dark:bg-navy-600 dark:ring-navy-700/90 border-none bg-transparent duration-200 focus:outline-none placeholder:font-light placeholder:text-slate-500/70 dark:placeholder:text-navy-200/70';

// Input Size Styles
export const areas: { [key in TSize]: string } = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-2 text-lg',
  xl: 'px-4 py-2 text-xl',
};

// Input Variant Styles
export const variants: { [key in TVariant]: string } = {
  primary:
    'text-slate-900 dark:text-navy-50 focus:ring-green-500 focus:ring-offset-green-500',
  secondary:
    'text-green-700 dark:text-green-400 focus:ring-blue-500 focus:ring-offset-blue-500',
  light:
    'text-slate-900 dark:text-navy-50 focus:ring-slate-500 focus:ring-offset-slate-500',
  dark: 'text-navy-50 dark:text-slate-900 focus:ring-navy-500 focus:ring-offset-navy-500',
};

// Input Fill Styles
export const fills: { [key in TFill]: string } = {
  solid: 'bg-white border border-slate-100',
  outline: 'border border-slate-100',
  gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
  none: 'bg-transparent border-none',
};

// Input Shadow Styles
export const shadows: { [key in TSize]: string } = {
  xs: 'shadow-xs hover:shadow-sm',
  sm: 'shadow-sm hover:shadow-md',
  md: 'shadow-md hover:shadow-lg',
  lg: 'shadow-lg hover:shadow-xl',
  xl: 'shadow-xl hover:shadow-2xl',
};

// Input Rounded Styles
export const roundeds: { [key in TSize | 'full']: string } = {
  xs: 'rounded-[1]',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};
