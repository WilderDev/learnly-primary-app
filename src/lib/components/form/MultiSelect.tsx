'use client';

// * Imports
import { TFill, TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import FormItem from './FormItem';
import {
  defaultStyles,
  fills,
  roundeds,
  shadows,
  areas,
  variants,
} from './formItemPropStyles';
import { ISelectOption } from '@/assets/typescript/form';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import capitalize from '@/lib/common/capitalize';
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/solid';

// * Props
interface IProps {
  values: string[];
  setValues: (value: string[]) => void;
  options: ISelectOption[];
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  area?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  className?: string;
}

// * Component
export default function MultiSelect({
  values,
  setValues,
  options,
  label,
  labelHidden = false,
  cols = 1,
  icon,
  area = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'md',
  className,
}: IProps) {
  // * Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // * State
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // * Handlers
  // Handle click outside of the menu
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;

      if (
        containerRef.current &&
        !containerRef.current.contains(targetElement)
      ) {
        setMenuOpen(false);
      }
    },
    [containerRef, setMenuOpen],
  );

  // Handle Key Down
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowDown' && !isMenuOpen) {
        setMenuOpen(true);
      } else if (
        event.key === 'ArrowDown' &&
        highlightedIndex < options.length - 1
      ) {
        setHighlightedIndex((prevIndex) => prevIndex + 1);
        event.preventDefault();
      } else if (event.key === 'ArrowUp' && highlightedIndex > 0) {
        setHighlightedIndex((prevIndex) => prevIndex - 1);
        event.preventDefault();
      } else if (event.key === 'Enter' || event.key === ' ') {
        if (isMenuOpen && highlightedIndex !== -1) {
          const optionValue = options[highlightedIndex].value;
          if (values.includes(optionValue)) {
            setValues(values.filter((value) => value !== optionValue));
          } else {
            setValues([...values, optionValue]);
          }
          // setMenuOpen(false);
        } else if (!isMenuOpen) {
          setMenuOpen(true);
        }
        event.preventDefault();
      } else if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    },
    [highlightedIndex, isMenuOpen, options, values, setValues],
  );

  // * Effects
  // Close menu on click outside
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  // * Render
  return (
    <FormItem
      label={label}
      cols={cols}
      icon={icon}
      labelHidden={labelHidden}
      className={className}
    >
      <div
        className={cn(
          'flex w-full items-center justify-between group',
          defaultStyles,
          areas[area],
          variants[variant],
          fills[fill],
          shadows[shadow],
          roundeds[rounded],
          icon ? 'pl-10' : 'pl-3',
        )}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isMenuOpen}
        aria-labelledby="listbox-label"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
      >
        {/* Input Container */}
        <div className="block w-full cursor-pointer flex-nowrap overflow-hidden text-ellipsis whitespace-nowrap">
          <span
            className={cn(
              values?.length > 0
                ? 'text-slate-900 dark:text-navy-50'
                : 'text-slate-500/70 dark:text-navy-200/70 font-light',
            )}
          >
            {values?.length > 0
              ? values
                  .map((value) => {
                    const option = options.find(
                      (option) => option.value === value,
                    );
                    return option
                      ? capitalize(option.label.split('_').join(' '))
                      : '';
                  })
                  .join(', ')
              : 'Select options'}
          </span>
        </div>

        {/* Input Trigger */}
        <div className="flex items-center justify-end cursor-pointer h-full bg-transparent px-2 -mr-2">
          {isMenuOpen ? (
            <ChevronUpIcon className="h-5 w-5 mt-0.5 text-slate-400 group-hover:text-slate-300 group-focus:text-slate-300 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 mt-0.5 text-slate-400 group-hover:text-slate-300 group-focus:text-slate-300 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" />
          )}
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              'absolute right-0 top-10 z-50 mt-1 w-full',
              roundeds[rounded],
              shadows[shadow],
              variants[variant],
            )}
          >
            <ul
              className={cn(
                'max-h-80 overflow-auto text-base divide-y-2 border-2 border-slate-300/90 dark:border-navy-500/90 divide-slate-300 dark:divide-navy-500 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                roundeds[rounded],
              )}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
            >
              {options.map((option, index) => (
                <li
                  key={option.value}
                  className={cn(
                    'relative cursor-default select-none shadow-inner bg-white dark:bg-navy-700 hocus:bg-green-50 dark:hocus:bg-green-800',
                    values.includes(option.value) &&
                      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100',
                    highlightedIndex === index &&
                      'bg-slate-200 dark:bg-navy-600 ring-2 focus:ring-offset-2 ring-green-500 dark:ring-green-500 ring-opacity-50',
                  )}
                  aria-selected={values.includes(option.value)}
                  role="option"
                >
                  <button
                    className="flex w-full items-center space-x-3 py-2 pl-3 pr-9"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      // setMenuOpen(false);

                      if (values.includes(option.value)) {
                        setValues(
                          values.filter((value) => value !== option.value),
                        );
                      } else {
                        setValues([...values, option.value]);
                      }
                    }}
                  >
                    {option.image && (
                      <Image
                        src={option.image}
                        alt={option.label}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <span className="block truncate font-medium text-base">
                      {capitalize(option.label.split('_').join(' '))}
                    </span>

                    {values.includes(option.value) && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-600" />
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </FormItem>
  );
}
