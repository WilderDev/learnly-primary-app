'use client';

import Link from 'next/link';
import { Popover } from '@headlessui/react';

interface IProps {
  children: React.ReactNode;
  href: string;
  [key: string]: any;
}

export default function MarketingNavLinkMobile({
  children,
  href,
  ...props
}: IProps) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700 dark:text-navy-200"
      href={href}
      {...props}
    >
      {children}
    </Popover.Button>
  );
}
