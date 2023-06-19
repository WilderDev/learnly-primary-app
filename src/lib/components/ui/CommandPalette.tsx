'use client';

import { Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import cn from '@/lib/common/cn';
import capitalize from '@/lib/common/capitalize';
import { useCommandPalette } from '@/app/@dashboard/(navigation)/(top-header)/CommandPaletteCtx';
import LoadingShapes from '../loading/LoadingShapes';
import { getStatusColor } from '@/lib/theme/enumColors';
import Avatar from '../images/Avatar';
import OverlappingImages from '../images/OverlappingImages';
import {
  ISearchItem,
  TSearchAssignmentRecord,
  TSearchCurriculumRecord,
  TSearchLessonPlanRecord,
} from '@/assets/typescript/search';
import Image from 'next/image';

// * Props
interface IProps {
  items: ISearchItem[];
}

// * Component
export default function CommandPalette({ items }: IProps) {
  // * Hooks
  const router = useRouter();

  // * State
  const { open, setOpen, query, setQuery, isLoading } = useCommandPalette();

  // * Helpers
  // Filter items based on query
  const filteredItems =
    query === ''
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  // Group items by category
  const groups = filteredItems.reduce(
    (
      groups: {
        [key: string]: ISearchItem[];
      },
      item: ISearchItem,
    ) => {
      return {
        ...groups,
        [item.category]: [...(groups[item.category] || []), item],
      };
    },
    {},
  );

  // * Render
  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => {
        setQuery('');
        setOpen(false);
      }}
      appear
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500 bg-opacity-25 transition-opacity dark:bg-slate-700 dark:bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 flex items-center justify-center sm:p-6 md:p-20 md:flex-none md:items-start md:justify-start">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl w-full transform overflow-hidden rounded-xl bg-white dark:bg-slate-700 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all ">
              <Combobox
                onChange={(item: ISearchItem) => {
                  router.push(item.url);
                  setOpen(false);
                }}
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400 dark:text-white"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-slate-900 placeholder:text-slate-400 dark:text-white focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
                {isLoading ? (
                  <div className="py-20">
                    <LoadingShapes />
                  </div>
                ) : (
                  <>
                    {query === '' && (
                      <div className="border-t border-slate-100 px-6 py-14 text-center text-sm sm:px-14">
                        <GlobeAmericasIcon
                          className="mx-auto h-6 w-6 text-slate-400 dark:text-white"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-slate-900 dark:text-slate-200">
                          Search for anything
                        </p>
                        <p className="mt-2 text-slate-500 dark:text-slate-100">
                          Quickly access anything by running a global search.
                        </p>
                      </div>
                    )}

                    {filteredItems?.length > 0 && (
                      <Combobox.Options
                        static
                        className="max-h-80 scroll-pb-2 scroll-pt-11 space-y-2 overflow-y-auto pb-2"
                      >
                        {Object.entries(groups).map(([category, items]) => (
                          <li key={category}>
                            <h2 className="bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-white dark:bg-slate-800">
                              {capitalize(category.split('_').join(' '))}
                            </h2>
                            <ul className="mt-2 text-sm text-slate-800 dark:text-white">
                              {items?.map((item) => (
                                <Combobox.Option
                                  key={item.id}
                                  value={item}
                                  className={({ active }) =>
                                    cn(
                                      'cursor-pointer select-none px-4 py-2',
                                      active &&
                                        'bg-green-600 text-white dark:bg-slate-600',
                                    )
                                  }
                                >
                                  <div className="flex gap-4 items-center">
                                    {/* Assignments Status */}
                                    {category === 'assignments' && (
                                      <span
                                        className={cn(
                                          'h-4 w-4 rounded-full px-1 border border-gray-300',
                                          getStatusColor(
                                            (
                                              item.record as TSearchAssignmentRecord
                                            ).status,
                                          ).bg,
                                        )}
                                      />
                                    )}

                                    {/* Lesson Plan Avatars */}
                                    {category === 'lesson_plans' && (
                                      <OverlappingImages className="items-center justify-center">
                                        {(
                                          item.record as TSearchLessonPlanRecord
                                        ).students?.map((s: any, idx: any) => (
                                          <Avatar
                                            src={s.avatar_url}
                                            alt={s.first_name}
                                            url="/account?view=students"
                                            key={idx}
                                          />
                                        ))}
                                      </OverlappingImages>
                                    )}

                                    {/* Curriculum Image */}
                                    {category === 'curriculum' && (
                                      <Image
                                        src={
                                          (
                                            item.record as TSearchCurriculumRecord
                                          ).image_url
                                        }
                                        alt={item.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full w-8 h-8"
                                      />
                                    )}

                                    {item.name}
                                  </div>
                                </Combobox.Option>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </Combobox.Options>
                    )}

                    {query !== '' &&
                      filteredItems.length === 0 &&
                      !isLoading && (
                        <div className="border-t border-slate-100 px-6 py-14 text-center text-sm sm:px-14">
                          <FaceFrownIcon
                            className="mx-auto h-6 w-6 text-slate-400 dark:text-white"
                            aria-hidden="true"
                          />
                          <p className="mt-4 font-semibold text-slate-900 dark:text-slate-200">
                            No results found
                          </p>
                          <p className="mt-2 text-slate-500 dark:text-slate-100">
                            We couldn&apos;t find anything with that term.
                            Please try again.
                          </p>
                        </div>
                      )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
