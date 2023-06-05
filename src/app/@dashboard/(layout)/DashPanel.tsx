'use client';

import { TSize } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import Modal from '@/lib/components/popouts/Modal';
import Button from '@/lib/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Suspense, useState } from 'react';

// * Dashboard Panel Component
// Props
interface IProps {
  children: React.ReactNode;
  className?: string;
  colNum?: number;
  suspenseFallback?: React.ReactNode;
}

// Component
export function DashPanel({
  children,
  className,
  colNum = 1,
  suspenseFallback,
}: IProps) {
  // * Render
  return (
    <motion.article
      className={cn(
        'relative flex flex-col p-4 sm:px-5 rounded-md bg-white shadow-md dark:shadow-navy-700 dark:bg-navy-800 print:shadow-none',
        className
      )}
      initial={{ opacity: 0, y: 20 * colNum }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 * colNum }}
    >
      {suspenseFallback ? (
        <Suspense fallback={suspenseFallback}>{children}</Suspense>
      ) : (
        children
      )}
    </motion.article>
  );
}

// * Dashboard Panel Header
// Props
interface IDashPanelProps {
  title: string;
  ctaText?: string;
  ctaLink?: string;
  hideCta?: boolean;
  hasModal?: boolean;
  modalSize?: TSize;
  modalContent?: React.ReactNode;
  noCloseOnOutsideClick?: boolean;
}

// Component
export function DashPanelHeader({
  title,
  ctaText,
  ctaLink,
  hideCta = true,
  hasModal,
  modalSize,
  modalContent,
  noCloseOnOutsideClick,
}: IDashPanelProps) {
  // * State
  const [isModalOpen, setModalOpen] = useState(false);

  // * Render
  return (
    <>
      <div className="mb-4 flex h-8 w-full items-center justify-between print:hidden">
        {/* Title */}
        <h2 className="text-sm font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base xl:text-lg">
          {title}
        </h2>

        {/* Actions */}
        <div className="flex items-center">
          {/* View All */}
          {ctaLink && (
            <Link
              className={cn(
                'border-b border-dotted border-current pb-0.5 text-sm font-medium text-navy-500 outline-none transition-colors duration-300 hocus:text-navy-500/70 dark:text-blue-500 dark:hocus:text-blue-500/70 xl:inline-block',
                hideCta && 'hidden'
              )}
              href={ctaLink}
            >
              {/* If hideCta is true, only render the ctaText.  */}
              {hideCta ? (
                <>{ctaText}</>
              ) : (
                <>
                  {/* Otherwise, render the ctaText on md screens then render 'View All' on smaller screens */}
                  <div className="hidden md:block">{ctaText}</div>
                  <div className="md:hidden block">View All</div>
                </>
              )}
            </Link>
          )}

          {/* Add */}
          {hasModal && (
            <Button
              className="px-1 py-1 md:py-1 md:px-1 ml-3"
              rounded="full"
              size="xs"
              onClick={() => setModalOpen(true)}
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Modal */}
      {hasModal && (
        <Modal
          isVisible={isModalOpen}
          close={() => setModalOpen(false)}
          size={modalSize || 'md'}
          noCloseOnOutsideClick={noCloseOnOutsideClick}
          closeBtn={true}
        >
          {modalContent}
        </Modal>
      )}
    </>
  );
}
