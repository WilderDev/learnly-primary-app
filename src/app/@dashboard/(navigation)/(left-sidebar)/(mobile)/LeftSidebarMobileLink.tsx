'use client';

import { ILink } from '@/assets/typescript/ui';
import { motion } from 'framer-motion';
import IconLink from '../../IconLink';

interface IProps {
  link: ILink;
  idx: number;
  close: () => void;
}

export default function LeftSidebarMobileLink({ link, idx, close }: IProps) {
  return (
    <motion.li
      key={link.slug}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
    >
      <IconLink
        className="w-full justify-start px-2"
        slug={link.slug}
        external={link.external}
        closeSidebar={close}
      >
        {/* Icon */}
        <link.icon className="h-7 w-7 mr-3" />

        {/* Name */}
        <span className="text-sm font-medium text-slate-800 dark:text-navy-100">
          {link.name}
        </span>
      </IconLink>
    </motion.li>
  );
}
