'use client';

import { ILink } from '@/assets/typescript/ui';

import { motion } from 'framer-motion';
import IconLink from '../IconLink';
import LeftSidebarTooltip from './LeftSidebarTooltip';

interface IProps {
  link: ILink;
  idx: number;
}

export default function LeftSidebarLink({ link, idx }: IProps) {
  return (
    <motion.li
      key={link.slug}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
    >
      <IconLink slug={link.slug} external={link.external}>
        {/* Icon */}
        <link.icon className="h-7 w-7" />

        {/* Tooltip */}
        <LeftSidebarTooltip text={link.name} />
      </IconLink>
    </motion.li>
  );
}
