import { TIcon } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Tooltip from '../ui/Tooltip';

// * Props
interface IProps {
  children: React.ReactNode;
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  className?: string;
  infoBubble?: boolean;
  infoBubbleUrl?: string;
  infoBubbleText?: string;
}

export default function FormItem({
  children,
  label,
  labelHidden,
  cols,
  icon: Icon,
  className,
  infoBubble,
  infoBubbleUrl,
  infoBubbleText,
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
          // 'group',
          labelHidden ? 'sr-only' : 'pl-1 text-slate-600 dark:text-navy-200',
          'flex items-center',
        )}
      >
        {label}
        {infoBubble && (
          <div className="group rounded-full w-fit justify-center ml-2 ">
            <Tooltip
              className={cn(
                infoBubbleText && 'md:w-96 w-56 whitespace-normal',
                ' z-[1000] bg-navy-50 text-sm font-medium text-navy-900 dark:bg-navy-400 dark:text-navy-100',
              )}
              tip={infoBubbleText || 'Learn More'}
              position="topCenter"
              tipUrl={infoBubbleUrl}
              tipUrlText="Learn More"
            >
              <InformationCircleIcon className="h-6 w-6 text-blue-500/80 dark:text-blue-300/90" />
            </Tooltip>
          </div>
        )}
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
