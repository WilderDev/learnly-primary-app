import { TIcon } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  className?: string;
}

export default function FormItem({
  children,
  label,
  labelHidden,
  cols,
  icon: Icon,
  className,
}: IProps) {
  return (
    <label
      htmlFor={label}
      className={cn(
        'block relative',
        'flex flex-col',
        cols === 1 && 'md:col-span-1',
        cols === 2 && 'md:col-span-2',
        cols === 3 && 'md:col-span-3',
        cols === 4 && 'md:col-span-4',
        className,
      )}
    >
      <span
        className={cn(
          labelHidden ? 'sr-only' : 'pl-1 text-slate-600 dark:text-navy-200',
        )}
      >
        {label}
      </span>

      <div className="relative mt-1 flex items-center">
        {children}

        {Icon && (
          <span className="pointer-events-none -mt-0.5 z-10 absolute mx-1 flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-green-500 dark:text-navy-300 dark:peer-focus:text-green-600">
            <Icon className="mt-0.5 w-5 h-5" />
          </span>
        )}
      </div>
    </label>
  );
}
