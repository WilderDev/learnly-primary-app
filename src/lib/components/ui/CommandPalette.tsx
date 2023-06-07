'use client';

import { Fragment, useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import cn from '@/lib/common/cn';
import capitalize from '@/lib/common/capitalize';
import { useCommandPalette } from '@/app/@dashboard/(navigation)/(top-header)/CommandPaletteCtx';
import LoadingShapes from '../loading/LoadingShapes';

export interface IItem {
  id: string;
  name: string;
  category: string;
  url: string;
}

// * Props
interface IProps {
  items: IItem[];
}

// * Component
export default function CommandPalette({ items }: IProps) {
  // * Hooks
  const router = useRouter();
  const searchParams = useSearchParams()!;

  // * State
  // const [query, setQuery] = useState('');
  // const [open, setOpen] = useState(true);
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
        [key: string]: IItem[];
      },
      item: IItem,
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
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false);
          console.log(open); // add this line
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

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white dark:bg-slate-700 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox
                onChange={(item: IItem) => {
                  router.push(item.url);
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
                                  {item.name}
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
                            We couldn’t find anything with that term. Please try
                            again.
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

// TSK: Dark Mode
// TSK: Open and Close
// TSK: Open when they click in the search bar
// TSK: Create query to get all the search items
