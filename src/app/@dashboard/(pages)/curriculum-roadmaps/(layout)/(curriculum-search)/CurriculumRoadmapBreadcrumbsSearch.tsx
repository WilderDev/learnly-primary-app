'use client';

import cn from '@/lib/common/cn';
import { Combobox } from '@headlessui/react';
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SearchItemsContainer from './SearchItemsContainer';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import FilterModal from './FilterModal';
import { toast } from 'sonner';
import Button from '@/lib/components/ui/Button';

interface IProps {
  curriculumId: string;
}

export interface Item {
  id: string;
  name: string;
  curriculum_name: string;
  level_name: string;
  level_image_path: string;
  description: string;
  image_path: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export default function CurriculumRoadmapBreadcrumbsSearch({
  curriculumId,
}: IProps) {
  // Filters
  const filters: string[] = ['K', '1', '2', '3', '4', '5'];

  // State
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [pageLoading, setPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filtersModal, setFiltersModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, boolean>
  >({ K: true, '1': true, '2': true, '3': true, '4': true, '5': true });

  // Refs
  const comboboxRef = useRef<HTMLDivElement | null>(null);

  // Hooks
  const router = useRouter();

  // Effects
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        comboboxRef.current &&
        !comboboxRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [comboboxRef]);

  useEffect(() => {
    // If there are no filters send toast
    if (getSelectedFiltersAsArray().length < 1) {
      toast.error('No Filter Applied!');

      // Empty Items
      setItems([]);

      // Reset Page
      setPage(0);

      // Reset More Items
      setHasMoreItems(true);
      return;
    }
    const fetchAsyncItems = async () => {
      // Empty Items
      setItems([]);

      // Reset Page
      setPage(0);

      // Reset More Items
      setHasMoreItems(true);

      // Start loading
      setIsLoading(true);

      // Fetched Items
      const newItems = await fetchItems(
        query,
        getSelectedFiltersAsArray(),
        curriculumId,
        page,
      );

      // If there are more than 100 allow pagination
      if ((newItems as Item[])?.length < 100) {
        setHasMoreItems(false);
      }

      // Stop Loading
      setIsLoading(false);

      // Set new items
      setItems(newItems);
    };

    if (query.length > 0) fetchAsyncItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, selectedFilters]);

  useEffect(() => {
    const fetchAsyncItems = async () => {
      // Start Loading
      setPageLoading(true);

      // Fetched Items
      const newItems = await fetchItems(
        query,
        getSelectedFiltersAsArray(),
        curriculumId,
        page,
      );

      // If there are more than 100 allow pagination
      if ((newItems as Item[])?.length < 100) {
        setHasMoreItems(false);
      }

      // Stop Loading
      setPageLoading(false);

      // Push paginated items to existing array
      setItems((currentItems) => [...currentItems, ...newItems]);
    };

    // Check for query
    if (query.length > 0) fetchAsyncItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Helpers
  const handleFilterChange = (option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Sort selected filters
  function getSelectedFiltersAsArray() {
    const filtersOrder = ['K', '1', '2', '3', '4', '5'];
    return filtersOrder.filter((key) => selectedFilters[key]);
  }

  return (
    <>
      <div className="flex items-center flex-col md:flex-row gap-4 relative">
        <Combobox
          ref={comboboxRef}
          onChange={(item: any) => {
            // On click of an item route to the items url
            router.push(item.url);
          }}
        >
          <div className="relative">
            <div className="relative flex h-8">
              <label htmlFor="search" className="sr-only">
                Search
              </label>

              {/* Search */}
              <input
                className={cn(
                  'peer h-full w-60 rounded-full bg-slate-100 px-4 pl-9 text-sm text-slate-800 outline-none ring-navy-500/50 transition-all duration-100 ease-out placeholder:text-slate-400 hocus:bg-slate-200 dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-blue-500/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 ',
                  isFocused &&
                    'dark:bg-navy-900 xs:w-[20rem] md:w-[30rem] ring',
                )}
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                onClick={() => setIsFocused(true)}
              />

              {/* Magnifying Glass */}
              <div
                className={cn(
                  'pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 dark:text-navy-300',
                  isFocused && 'text-navy-700',
                )}
              >
                {pageLoading ? (
                  <ArrowPathIcon className="h-5 w-5 animate-spin text-black" />
                ) : (
                  <MagnifyingGlassIcon className="h-5 w-5" />
                )}
              </div>
            </div>

            {/* Item Container */}
            {isFocused && (
              <SearchItemsContainer
                items={items}
                isLoading={isLoading}
                query={query}
                pageLoading={pageLoading}
                hasMoreItems={hasMoreItems}
                setPage={setPage}
              />
            )}
          </div>
        </Combobox>

        {/* Filter Modal Toggler */}
        <div
          className="flex items-center cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out"
          onClick={() => setFiltersModal(true)}
        >
          <AdjustmentsHorizontalIcon className="mx-1 h-6 w-6 text-blue-400/80 dark:text-navy-300/90" />

          <button
            className="text-md text-blue-500/80 dark:text-blue-300/90"
            type="button"
          >
            Filters
          </button>
        </div>
      </div>

      {/* Filters Modal */}
      <FilterModal
        isVisible={filtersModal}
        close={() => setFiltersModal(false)}
        filterOptions={filters}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}

// Fetcher
async function fetchItems(
  query_param: string,
  grade_param: string[],
  user_curriculum_id: string,
  page: number,
) {
  // Client
  const supabase = supabaseClient();

  const { data: SearchItems, error } = await supabase.rpc(
    'search_curriculum_lessons',
    {
      query_param,
      grade_param,
      user_curriculum_id,
      offset_param: page * 100,
    },
  );

  if (error) return [];

  // Return data
  return SearchItems as Item[];
}
