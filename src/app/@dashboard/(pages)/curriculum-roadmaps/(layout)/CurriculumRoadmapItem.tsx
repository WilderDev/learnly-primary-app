'use client';

import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import cn from '@/lib/common/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// * Props
interface IProps {
  item: ICurriculumListItem;
  idx: number;
}

// * Component
export default function CurriculumRoadmapItem({ item, idx }: IProps) {
  // * Data
  const { name, type, image, description, progress, url } = item;

  // * Render
  return (
    <motion.li
      className="list-none"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.1 }}
    >
      <Link
        className={cn(
          'group relative h-24 md:h-48 xl:h-64 flex items-center justify-center rounded-lg bg-navy-900 hocus:bg-slate-900 shadow-lg hocus:shadow-xl hocus:scale-105 active:scale-95 transition-all transform-gpu duration-300 ease-in-out', // Base
          type === 'CORE' && 'ring-2 ring-offset-2 ring-blue-500', // Core
        )}
        href={url || '/curriculum-roadmaps'}
      >
        {/* Content */}
        <div className="flex flex-col items-center text-center p-4 space-y-2 z-20">
          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-100 dark:text-navy-100 group-hover:text-white group-focus:text-white dark:group-hover:text-navy-50 dark:group-focus:text-navy-50 transition-colors duration-300">
            {name}
          </h2>

          {/* Description */}
          <p className="hidden lg:line-clamp-3 lg:overflow-ellipsis px-8 lg:block text-sm font-medium text-slate-300 dark:text-navy-200 group-hover:text-slate-100 group-focus:text-slate-100 dark:group-hover:text-navy-100 dark:group-focus:text-navy-100 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Background Image */}
        <Image
          className="absolute inset-0 w-full transition-opacity duration-300 ease-in-out -z-10 h-full object-cover object-center opacity-30 rounded-md group-hover:opacity-10 group-focus:opacity-10"
          src={image}
          alt={name || 'Curriculum Roadmap Image'}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={image}
          priority={true}
        />

        {/* Progress Bubble */}
        <div
          className={cn(
            'absolute right-0 top-0 sm:flex sm:m-3 items-center justify-center hidden sm:p-3 rounded-full font-semibold text-xs bg-navy-800',
            progress === 100 && 'text-green-50',
            progress < 100 && progress >= 50 && 'text-blue-50',
            progress < 50 && progress >= 25 && 'text-yellow-50',
            progress < 25 && 'text-red-50',
          )}
        >
          {progress}%
        </div>
      </Link>
    </motion.li>
  );
}
