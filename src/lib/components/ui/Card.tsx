import { TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

// * Components
// Card Container Props
interface ICardContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Card Container Component
export function CardContainer({ children, className }: ICardContainerProps) {
  // * Render
  return (
    <section
      className={cn(
        'grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3',
        className,
      )}
    >
      {children}
    </section>
  );
}

// Card Component Props
interface ICardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: TSize;
  variant?: TVariant;
  shadow?: TSize | 'none';
  rounded?: TSize | 'full';
  url?: string;
  decoration?: string;
  className?: string;
}

// Card Component
export function Card({
  children,
  size = 'md',
  variant = 'light',
  shadow = 'md',
  rounded = 'md',
  url,
  decoration,
  className,
  ...props
}: ICardProps) {
  // * Styles
  // Card Default Styles
  const defaultStyles =
    'overflow-hidden break-words transition-all duration-300 ease-in-out flex flex-col relative group';
  const gridStyles = 'col-span-1';

  // Card Size Styles
  const sizes: { [key in TSize]: string } = {
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-5',
    xl: 'p-6',
  };

  // Card Variant Styles
  const variants: { [key in TVariant]: string } = {
    light: 'bg-white dark:bg-navy-700 hover:bg-slate-50 dark:hover:bg-navy-600',
    dark: 'bg-slate-900 dark:bg-navy-200 hover:bg-slate-800 dark:hover:bg-navy-100',
    primary: 'bg-green-500 hover:bg-green-600',
    secondary: 'bg-blue-500 hover:bg-blue-600',
    // add more variants as required
  };

  // Card Shadow Styles
  const shadows: { [key in TSize | 'none']: string } = {
    none: '',
    xs: 'shadow-xs hover:shadow-sm',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
  };

  // Card Rounded Styles
  const roundeds: { [key in TSize | 'full']: string } = {
    xs: 'rounded-xs',
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
        shadows[shadow],
        roundeds[rounded],
        gridStyles,
        className,
      )}
      href={url}
    >
      {decoration && (
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b',
            decoration,
          )}
        />
      )}
      {children}
    </Link>
  ) : (
    <article
      className={cn(
        defaultStyles,
        sizes[size],
        variants[variant],
        shadows[shadow],
        roundeds[rounded],
        gridStyles,
        className,
      )}
      {...props}
    >
      {decoration && (
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b',
            decoration,
          )}
        />
      )}
      {children}
    </article>
  );
}

// Card Title Props
interface ICardTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Card Title Component
Card.Title = function CardTitle({ children, className }: ICardTitleProps) {
  // * Render
  return (
    <h3
      className={cn(
        'line-clamp-1 font-semibold text-slate-700 dark:text-navy-100',
        className,
      )}
    >
      {children}
    </h3>
  );
};

// Card Subtitle Props
interface ICardSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

// Card Subtitle Component
Card.Subtitle = function CardSubtitle({
  children,
  className,
}: ICardSubtitleProps) {
  // * Render
  return (
    <h4
      className={cn(
        'flex items-center text-sm font-medium text-slate-600 dark:text-navy-200 line-clamp-1',
        className,
      )}
    >
      {children}
    </h4>
  );
};

// Card Tags Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// Card Tags Component
Card.Tags = function CardTags({ children, className }: IProps) {
  return (
    <ul className={cn('mt-2 flex flex-wrap gap-2', className)}>{children}</ul>
  );
};

// Card Tag Props
interface ICardTagProps {
  content: string;
  colors: string;
  url?: string;
}

// Card Tag Component
Card.Tag = function CardTag({ content, colors, url }: ICardTagProps) {
  return (
    <li>
      {url ? (
        <Link
          className={cn(
            'rounded-md px-1.5 py-1 text-xs font-medium transition-all',
            colors,
          )}
          href={url}
        >
          {content}
        </Link>
      ) : (
        <span
          className={cn(
            'rounded-md px-1.5 py-1 text-xs font-medium transition-all',
            colors,
          )}
        >
          {content}
        </span>
      )}
    </li>
  );
};

// Card Action Props
interface ICardActionProps {
  url: string;
  target?: HTMLAnchorElement['target'];
  className?: string;
}

// Card Action Component
Card.Action = function CardAction({
  url,
  target = '_self',
  className,
}: ICardActionProps) {
  return (
    <Link
      className={cn(
        'dark:shadow-navy-450/50 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200/80 p-0 font-medium text-slate-700 active:bg-slate-200/80 hocus:bg-slate-200 hocus:shadow hocus:shadow-navy-300/80 dark:bg-navy-500 dark:text-navy-200 dark:active:bg-navy-400/80 dark:hocus:bg-navy-400/90',
        className,
      )}
      href={url}
      target={target}
    >
      <ArrowSmallUpIcon className="h-5 w-5 rotate-45 font-bold" />
    </Link>
  );
};

// Card Bubble Props
interface ICardBubbleProps {
  content: string;
  colors: string;
}

// Card Bubble Component
Card.Bubble = function CardBubble({ content, colors }: ICardBubbleProps) {
  return (
    <div
      className={cn(
        'absolute right-0 top-0 m-2 flex items-center justify-center rounded-full px-2 py-1 text-xs font-medium',
        colors,
      )}
    >
      {content}
    </div>
  );
};

// Card Footer Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// Card Footer Component
Card.Footer = function CardFooter({ children, className }: IProps) {
  return (
    <footer className={cn('mt-10 flex justify-between', className)}>
      {children}
    </footer>
  );
};
