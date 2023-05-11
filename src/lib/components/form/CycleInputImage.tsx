'use client';

// * Imports
import { TFill, TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import FormItem from './FormItem';
import {
  defaultStyles,
  fills,
  roundeds,
  shadows,
  areas,
  variants,
} from './formItemPropStyles';
import Image from 'next/image';
import capitalize from '@/lib/common/capitalize';

// * Props
interface IOption {
  value: string | number;
  image: string;
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  setValue: (value: any) => void;
  options: IOption[];
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  area?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  className?: string;
}

// * Component
export default function CycleInput({
  value,
  setValue,
  options,
  label,
  labelHidden = false,
  cols = 1,
  icon,
  area = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'md',
  className,
  ...props
}: IProps) {
  // * Handlers
  // Mouse Click
  const handleClick = () => {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = (currentIndex + 1) % options.length;
    setValue(options[nextIndex].value);
  };

  // Keyboard Enter or Space
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  // * Render
  return (
    <FormItem
      label={label}
      cols={cols}
      icon={icon}
      labelHidden={labelHidden}
      className={className}
    >
      <div
        className={cn(
          defaultStyles,
          areas[area],
          variants[variant],
          fills[fill],
          shadows[shadow],
          roundeds[rounded],
          icon ? 'pl-10' : 'pl-3',
          'cursor-pointer relative overflow-hidden',
        )}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-label={`Cycle through ${label} options`}
        aria-describedby={label}
        {...props}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={cn(
              'absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-in-out',
              option.value === value ? 'translate-x-8' : `translate-x-full`,
            )}
          >
            <Image
              src={option.image}
              alt={option.value.toString()}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ))}
        <span className="text-lg font-medium text-slate-800 dark:text-slate-200 ml-4 z-10">
          {typeof value === 'string' ? capitalize(value) : value}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 dark:via-white to-transparent animate-shimmerSlow opacity-20" />
      </div>
    </FormItem>
  );
}
