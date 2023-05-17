'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import cn from '@/lib/common/cn';
import Avatar from '../images/Avatar';

// * Components
// Accordion Component Props
interface IAccordionProps {
  children: React.ReactNode;
  title: string;
  subInfo?: string;
  image?: string;
  url?: string;
  bubbleColor?: string;
  itemNum?: number;
  className?: string;
}

// Accordion Component
export default function Accordion({
  children,
  title,
  subInfo,
  image,
  url,
  bubbleColor,
  itemNum = 1,
  className,
}: IAccordionProps) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <motion.article
      className={cn(
        'overflow-hidden rounded-lg border border-slate-100 dark:border-navy-500',
        className,
      )}
      initial={{ opacity: 0, y: 20 * itemNum }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 * itemNum }}
    >
      {/* Main Header */}
      <section className="flex items-center justify-between bg-slate-100 p-3 dark:bg-navy-500">
        {/* Content */}
        <div className="flex items-center space-x-3.5 tracking-wide outline-none transition-all">
          {/* Avatar */}
          {image && (
            <Avatar
              src={image}
              alt={title}
              size="lg"
              bubbleColor={bubbleColor}
              url={url}
            />
          )}

          {/* Info */}
          <div>
            {/* Title */}
            <h3 className="line-clamp-1 text-slate-700 dark:text-navy-100">
              {title}
            </h3>

            {/* Extra Info */}
            {subInfo && (
              <p className="text-xs text-slate-500 dark:text-navy-300">
                {subInfo}
              </p>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <Accordion.Toggler
          isExpanded={isExpanded}
          toggle={() => setExpanded(!isExpanded)}
        />
      </section>

      {/* Body */}
      {isExpanded && <Accordion.Content>{children}</Accordion.Content>}
    </motion.article>
  );
}

// Accordion Toggler Component Props
interface IAccordionTogglerProps {
  isExpanded: boolean;
  toggle: () => void;
}

// Accordion Toggler Component
Accordion.Toggler = function AccordionToggler({
  isExpanded,
  toggle,
}: IAccordionTogglerProps) {
  return (
    <button
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 hocus:bg-slate-100 dark:bg-navy-600 dark:hocus:bg-navy-400"
      onClick={toggle}
    >
      <svg
        className="h-4 w-4 font-bold text-slate-700 dark:text-navy-200"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isExpanded ? (
          <path
            className="transition-all duration-300 ease-in-out"
            d="M5 15l7-7 7 7"
          />
        ) : (
          <path
            className="transition-all duration-300 ease-in-out"
            d="M6 9l6 6 6-6"
          />
        )}
      </svg>
    </button>
  );
};

// Accordion Content Component Props
interface IAccordionContentProps {
  children: React.ReactNode;
}

// Accordion Content Component
Accordion.Content = function AccordionContent({
  children,
}: IAccordionContentProps) {
  return (
    <motion.div
      className="h-auto overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="p-3 px-4">
        {/* Content */}
        {children}
      </div>
    </motion.div>
  );
};
