import { TPosition } from '@/assets/typescript/misc';
import cn from '@/lib/common/cn';

// * Props
interface IProps {
  children: React.ReactNode;
  tip: string;
  position?: TPosition;
  showOnHover?: boolean;
  className?: string;
  tipUrlText?: string;
  tipUrl?: string;
}

// * Component
export default function Tooltip({
  children,
  tip,
  position = 'topCenter',
  showOnHover = true,
  className,
  tipUrlText,
  tipUrl,
}: IProps) {
  // * Styles
  const defaultStyles =
    'absolute flex flex-col z-10 bg-white text-slate-900 dark:bg-navy-900 dark:bg-navy-50 text-xs rounded py-1 px-2 whitespace-nowrap shadow-md hocus:shadow-lg border-0.5 border-slate-100 dark:border-navy-700';
  const hoverStyles =
    showOnHover &&
    'group-hover:opacity-100 group-focus:opacity-100 hocus:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none';

  const positionStyles: {
    [key in TPosition]: string;
  } = {
    topCenter: `-top-0.5 left-1/2 transform -translate-x-1/2 -translate-y-full`,
    topLeft: `top-0 left-0 transform -translate-x-full -translate-y-full`,
    topRight: `top-0 right-0 transform translate-x-full -translate-y-full`,
    bottomCenter: `-bottom-0.5 left-1/2 transform -translate-x-1/2 translate-y-full`,
    bottomLeft: `bottom-0 left-0 transform -translate-x-full translate-y-full`,
    bottomRight: `bottom-0 right-0 transform translate-x-full translate-y-full`,
    center: `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`,
    centerLeft: `top-1/2 left-0 transform -translate-x-full -translate-y-1/2`,
    centerRight: `top-1/2 right-0 transform translate-x-full -translate-y-1/2`,
  };

  // * Render
  return (
    <div className="relative">
      {/* Children */}
      {children}

      {/* Tooltip */}
      <span
        className={cn(
          defaultStyles,
          hoverStyles,
          positionStyles[position],
          className,
        )}
      >
        {tip}
        {/* {tipUrl && (
          <a
            href={tipUrl}
            className="px-4 py-2 mx-auto rounded-xl shadow-md bg-slate-50"
          >
            {tipUrlText}
          </a>
        )} */}
      </span>
    </div>
  );
}
