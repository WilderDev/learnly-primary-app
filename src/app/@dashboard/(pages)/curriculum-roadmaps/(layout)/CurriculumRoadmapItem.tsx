'use client';

import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmap';
import { motion } from 'framer-motion';
import Link from 'next/link';

// * Props
interface IProps {
  item: ICurriculumListItem;
  idx: number;
}

// * Component
export default function CurriculumRoadmapItem({ item, idx }: IProps) {
  // * Render
  return (
    <motion.li
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
    >
      <Link href="tsk">TSK</Link>
    </motion.li>
  );
}
