'use client';

import { TFill, TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number;
  setValue: (value: any) => void;
  cols?: number;
  size?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  className?: string;
  Icon?: TIcon;
  labelHidden?: boolean;
  initialFocus?: boolean;
  required?: boolean;
}

export default function Input({
  label,
  value,
  setValue,
  cols = 1,
  size = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'sm',
  className,
  Icon,
  labelHidden = false,
  initialFocus = false,
  ...props
}: IProps) {
  // Input Default Styles
  const defaultStyles =
    'block w-full rounded-lg transition-shadow duration-200 ring-1 ring-black ring-opacity-5 focus:outline-none focus:ring-2 focus:ring-offset-2 placeholder-slate-400 dark:placeholder-navy-300 placeholder-opacity-80 placeholder:text-sm';

  // Input Size Styles
  const sizes: { [key in TSize]: string } = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-2 text-lg',
    xl: 'px-4 py-2 text-xl',
  };

  // Input Variant Styles
  const variants: { [key in TVariant]: string } = {
    primary:
      'text-slate-900 dark:text-navy-50 ring-green-500 focus:ring-offset-green-500',
    secondary:
      'text-green-700 dark:text-green-400 ring-blue-500 focus:ring-offset-blue-500',
  };

  // Input Fill Styles
  const fills: { [key in TFill]: string } = {
    solid: 'bg-white border border-slate-100',
    outline: 'border border-slate-100',
    gradient: 'bg-gradient-to-r from-green-400 to-emerald-500',
  };

  // Input Shadow Styles
  const shadows: { [key in TSize]: string } = {
    xs: 'shadow-xs hover:shadow-sm',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
  };

  // Input Rounded Styles
  const roundeds: { [key in TSize | 'full']: string } = {
    xs: 'rounded-[1]',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        'flex flex-col',
        cols === 1 && 'md:col-span-1',
        cols === 2 && 'md:col-span-2',
        cols === 3 && 'md:col-span-3',
      )}
    >
      {/* Label */}
      <label
        htmlFor={label}
        className={cn(
          labelHidden
            ? 'sr-only'
            : 'block text-sm font-medium tracking-wide text-slate-700 dark:text-navy-100 mb-2',
        )}
      >
        {label}
      </label>

      {/* Input Container */}
      <div className="relative group">
        {/* Icon */}
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="mt-0.5 w-5 h-5 text-slate-400 dark:text-navy-300 group-hover:text-green-500 dark:group-hover:text-green-700" />
          </div>
        )}

        {/* Input */}
        <input
          className={cn(
            sizes[size],
            variants[variant],
            fills[fill],
            shadows[shadow],
            roundeds[rounded],
            Icon ? 'pl-10' : 'pl-3',
            defaultStyles,
          )}
          id={label}
          name={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus={initialFocus}
          {...props}
        />
      </div>
    </div>
  );
}

{
  /*

      <div className="relative rounded-md shadow-sm">


        <input


          {...props}
        />
      </div>
    </div> */
}
