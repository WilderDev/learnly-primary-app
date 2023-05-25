'use client';

// * Imports
import cn from '@/lib/common/cn';
import FormItem from './FormItem';
import Image from 'next/image';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  options: string[];
  label: string;
  labelHidden?: boolean;
  cols?: number;
  className?: string;
}

export default function RadioImages({
  value,
  setValue,
  options,
  label,
  labelHidden = false,
  cols = 1,
  className,
  ...props
}: IProps) {
  // * Render
  return (
    <FormItem
      label={label}
      cols={cols}
      labelHidden={labelHidden}
      className={className}
    >
      <div className="flex items-center gap-4 flex-wrap" {...props}>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => setValue(option)}
            className={cn(
              'relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 p-1.5 rounded-lg border-2 border-transparent focus:outline-none ring-2 ring-transparent focus:ring-offset-2 focus:ring-green-500',
              value === option &&
                'border-green-500 bg-green-50 dark:bg-green-900',
            )}
            aria-label={`Select ${option}`}
          >
            <Image
              src={option}
              alt={option}
              className={cn(
                'w-full h-full object-cover rounded-lg',
                value !== option && 'opacity-75',
              )}
              width={64}
              height={64}
            />
          </button>
        ))}
      </div>
    </FormItem>
  );
}
