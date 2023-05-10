'use client';

import cn from '@/lib/common/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
  slug: string;
  external?: boolean;
  closeSidebar?: () => void;
  className?: string;
}

export default function IconLink({
  children,
  slug,
  external = false,
  closeSidebar,
  className,
}: IProps) {
  const pathname = usePathname();

  const isActive = pathname.split('/')[1] === slug.split('/')[1];

  return external ? (
    <a
      className={cn(
        'group flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50/10 text-navy-300/90 outline-none transition-colors duration-200 hocus:bg-navy-200/20 dark:bg-navy-800 dark:text-navy-100 dark:hocus:bg-navy-500',
        className,
      )}
      href={slug}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <Link
      className={cn(
        'group flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50/10 text-navy-300/90 outline-none transition-colors duration-200 hocus:bg-navy-200/20 dark:bg-navy-800 dark:text-navy-100 dark:hocus:bg-navy-500',
        isActive && 'bg-navy-200/20 dark:bg-navy-400/90',
        className,
      )}
      href={slug}
      onClick={(e) => {
        e.currentTarget.blur();

        if (closeSidebar) {
          closeSidebar();
        }
      }} // lose focus on click
    >
      {children}
    </Link>
  );
}
