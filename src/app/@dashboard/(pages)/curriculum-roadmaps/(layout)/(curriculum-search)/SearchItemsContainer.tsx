'use client';

import LoadingShapes from '@/lib/components/loading/LoadingShapes';
import { Item } from './CurriculumRoadmapBreadcrumbsSearch';
import { AcademicCapIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import { Combobox } from '@headlessui/react';
import { nanoid } from 'nanoid';
import { useRef, Dispatch, SetStateAction, useCallback } from 'react';
import Image from 'next/image';
import cn from '@/lib/common/cn';

// Props
interface IProps {
  items: Item[];
  isLoading: boolean;
  query: string;
  pageLoading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  hasMoreItems: boolean;
}

// Define an interface for GroupItem
interface GroupItem {
  level_name: string;
  level_image_path: string;
  items: Item[];
}

export default function SearchItemsContainer({
  items,
  isLoading,
  query,
  pageLoading,
  setPage,
  hasMoreItems,
}: IProps) {
  // Group the items by level_name
  const groupedItemsObject = items.reduce(
    (acc: Record<string, GroupItem>, item) => {
      const key = item.level_name;
      if (!acc[key]) {
        acc[key] = {
          level_name: item.level_name,
          level_image_path: item.level_image_path,
          items: [],
        };
      }
      acc[key].items.push(item);
      return acc;
    },
    {},
  );

  // Define the desired order
  const order = ['K', '1', '2', '3', '4', '5'];

  // Order the grouped items by level_name
  const orderedGroupedItems = order
    .map((level) => groupedItemsObject[level])
    .filter(Boolean);

  // Refs
  const observer = useRef<IntersectionObserver | null>(null);
  const bottomRef = useCallback(
    (node: any) => {
      if (pageLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreItems) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageLoading, hasMoreItems, items],
  );

  return (
    <div
      className={cn(
        'mt-2 max-h-80 custom-scrollbar h-max space-y-2 overflow-y-auto z-50 absolute bottom-0 top-full w-full rounded-md bg-white dark:bg-slate-700 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
        pageLoading && 'transition-all duration-75 ease-in-out bg-gray-200',
      )}
    >
      {isLoading ? (
        <div className="py-20">
          <LoadingShapes />
        </div>
      ) : (
        <>
          {query.length > 0 && orderedGroupedItems.length > 0 && (
            <>
              <Combobox.Options static>
                {orderedGroupedItems.map((group, i) => (
                  <li key={i}>
                    <h2 className="bg-slate-100 px-4 py-2.5 text-md font-semibold text-slate-900 dark:text-white dark:bg-slate-800 flex items-center gap-5">
                      {/* Grade Level Image */}
                      <Image
                        src={group.level_image_path}
                        alt={group.level_name}
                        width={50}
                        height={50}
                        className="rounded-full h-8 w-8 object-cover border border-green-800 shadow-lg dark:border-navy-300/50"
                      />
                      {/* Level Name */}
                      Level: {group.level_name}
                    </h2>
                    <ul className="mt-2 text-sm text-slate-800 dark:text-white">
                      {group.items.map((item) => (
                        <Combobox.Option
                          key={nanoid()}
                          value={item}
                          className="cursor-pointer select-none px-4 py-2 hover:bg-green-600 font-semibold leading-5 hover:text-white hover:dark:bg-slate-600 flex items-center gap-6"
                        >
                          {/* Lesson Name */}
                          {item.name}
                        </Combobox.Option>
                      ))}
                      <div ref={bottomRef} />
                    </ul>
                  </li>
                ))}
              </Combobox.Options>
            </>
          )}
          {/* Empty Query */}
          {query === '' && (
            <div className="border-t border-slate-100 px-6 py-14 text-center text-sm sm:px-14">
              <AcademicCapIcon
                className="mx-auto h-6 w-6 text-slate-400 dark:text-white"
                aria-hidden="true"
              />
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-200">
                Search for Curriculum Lessons
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-100">
                Curriculum Lessons Will Show Here.
              </p>
            </div>
          )}
          {/* No Results */}
          {query !== '' && items.length === 0 && !isLoading && (
            <div className="border-t border-slate-100 px-6 py-14 text-center text-sm sm:px-14">
              <FaceFrownIcon
                className="mx-auto h-6 w-6 text-slate-400 dark:text-white"
                aria-hidden="true"
              />
              <p className="mt-4 font-semibold text-slate-900 dark:text-slate-200">
                No results found
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-100">
                We couldn&apos;t find anything with that term. Please try again.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
