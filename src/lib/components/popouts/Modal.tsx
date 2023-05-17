'use client';

import { TSize } from '@/assets/typescript/ui';
import Portal from './Portal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import cn from '@/lib/common/cn';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// * Props
export interface IProps {
  children: React.ReactNode;
  isVisible: boolean;
  close: () => void;
  size?: TSize;
  rounded?: TSize;
  shadow?: TSize;
  portalName?: string;
  closeBtn?: boolean;
  noCloseOnOutsideClick?: boolean;
  closeBtnLeft?: boolean;
  className?: string;
}

// * Component
export default function Modal({
  children,
  isVisible,
  close,
  size = 'md',
  rounded = 'md',
  shadow = 'md',
  portalName = 'portal',
  closeBtn = false,
  closeBtnLeft = false,
  noCloseOnOutsideClick = false,
  className,
}: IProps) {
  // * Styles
  // Default Modal Styles
  const defaultStyles =
    'fixed inset-0 z-50 p-4 flex items-center justify-center w-full h-full bg-slate-900/70 backdrop-blur dark:backdrop-blur-md';

  // Animation Modal Styles
  const animationStyles = 'transition-all duration-300 ease-in-out';

  // Modal Size Styles
  const sizeStyles: { [key in TSize]: string } = {
    xs: 'max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-5',
    sm: 'max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6',
    md: 'max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-6 py-7',
    lg: 'max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-8 py-9',
    xl: 'max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-10 py-11',
  };

  // Modal Rounded Styles
  const roundedStyles: { [key in TSize]: string } = {
    xs: 'rounded-[1]',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  // Modal Shadow Styles
  const shadowStyles: { [key in TSize]: string } = {
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // * Refs
  const modalRef = useRef<HTMLDivElement>(null);

  // * Effects
  // Focus first element when modal is visible
  useEffect(() => {
    if (isVisible && modalRef.current) {
      const focusableModalElements = modalRef.current.querySelectorAll(
        'a[href], button, textarea, input, select',
      ) as NodeListOf<HTMLElement>;

      const firstElement = focusableModalElements[0];

      if (firstElement) {
        firstElement.focus();
      }
    }
  }, [isVisible]);

  // Close Modal on Click Outside
  useEffect(() => {
    // Close Modal on Click Outside
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !noCloseOnOutsideClick
      ) {
        close();
      }
    }

    // Add Event Listener
    document.addEventListener('mousedown', handleClickOutside);

    // Remove Event Listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close, noCloseOnOutsideClick]);

  // Close Modal on Escape Key and handle Tab key for focus
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      if (!modalRef.current || !isVisible) return;

      if (e.key === 'Escape') {
        close();
      }

      if (e.key === 'Tab') {
        // Get Focusable Elements
        const focusableModalElements = modalRef.current.querySelectorAll(
          'a[href], button, textarea, input, select',
        ) as NodeListOf<HTMLElement>;

        const firstElement = focusableModalElements[0];
        const lastElement =
          focusableModalElements[focusableModalElements.length - 1];

        if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        } else if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (
          !modalRef.current.contains(document.activeElement as Node) &&
          e.key === 'Tab'
        ) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    // Add Event Listener
    document.addEventListener('keydown', keyListener);

    // Remove Event Listener
    return () => document.removeEventListener('keydown', keyListener);
  }, [close, isVisible]);

  // * Render
  return (
    <Portal portalName={portalName}>
      <article
        className={cn(
          defaultStyles,
          isVisible
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none',
          portalName === 'alt-portal' && 'print:hidden z-[10000]',
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Content */}
        <div
          className={cn(
            'z-50 w-full mx-auto my-12 space-y-4 bg-white dark:bg-navy-700 max-h-[90vh] overflow-y-auto relative border border-slate-600/50 dark:border-navy-300/50',
            sizeStyles[size],
            roundedStyles[rounded],
            shadowStyles[shadow],
            animationStyles,
            isVisible ? 'scale-100' : 'scale-90',
            className,
            'print:shadow-none print:backdrop-none dark:print:backdrop-none print:border-none print:w-full print:h-full print:block print:max-w-4xl print:mx-auto print:my-0 print:rounded-none print:overflow-visible print:scale-100',
          )}
          ref={modalRef}
        >
          {/* Body */}
          {children}

          {/* Close */}
          {closeBtn && (
            <button
              className={cn(
                'absolute print:hidden -top-2 p-1 rounded-full group hocus:bg-slate-100 dark:hocus:bg-navy-800 transition-colors',
                !closeBtn && 'opacity-0 focus:opacity-100',
                closeBtnLeft ? 'left-2' : 'right-2',
              )}
              onClick={close}
            >
              <XMarkIcon className="w-6 h-6 text-slate-400 group-focus:text-slate-700 dark:text-navy-300 dark:group-focus:text-navy-100" />
            </button>
          )}
        </div>
      </article>
    </Portal>
  );
}

// TSK: Custom Scrollbar

// * Sub-Components
// Modal Header Props
interface IModalHeaderProps {
  title: string;
  image?: string;
  subTitle?: string;
  onClick?: () => void;
  url?: string;
  className?: string;
}

// Modal Header Component
Modal.Header = function ModalHeader({
  title,
  image,
  subTitle,
  onClick,
  url,
  className,
}: IModalHeaderProps) {
  // * Render
  return (
    <header
      className={cn(
        'flex items-center justify-between border-b pb-4 border-slate-200 dark:border-navy-500',
        className,
      )}
    >
      {/* Left - Info */}
      <div className="flex items-center space-x-4">
        {/* Image */}
        {image && (
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="rounded-full h-12 w-12"
          />
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold">{title}</h2>

        {/* Sub-Title */}
        {subTitle && (
          <p className="text-sm text-slate-600 dark:text-navy-300">
            {subTitle}
          </p>
        )}
      </div>

      {/* Right - Action */}
      {(onClick || url) && (
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
          CTA
        </button>
      )}
    </header>
  );
};

// Modal Body Props
interface IModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

// Modal Body Component
Modal.Body = function ModalBody({ children, className }: IModalBodyProps) {
  // * Render
  return <div className={cn('space-y-4', className)}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: IModalBodyProps) {
  // * Render
  return (
    <footer className="flex items-center justify-end space-x-4">
      {children}
    </footer>
  );
};

// Modal exit Animations
