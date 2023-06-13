'use client';

import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { TTeachingStrategy } from '@/assets/typescript/user';
import cn from '@/lib/common/cn';
import { createSelectOptions } from '@/lib/common/form.helpers';
import Form from '@/lib/components/form/Form';
import MultiSelect from '@/lib/components/form/MultiSelect';
import Select from '@/lib/components/form/Select';
import Modal from '@/lib/components/popouts/Modal';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import {
  BuildingLibraryIcon,
  CheckIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

export interface IBreadcrumb {
  label: string;
  url: string;
  isCurrent: boolean;
}

// * Component
export default function CurriculumRoadmapBreadcrumbs() {
  // * Router
  const params = useParams(); // Get params from router

  const [filtersModal, setFiltersModal] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<any>({});

  const filterOptions = ['K', '1', '2', '3', '4', '5', '6'];

  const subjectOptions = [
    'English',
    'Social Studies',
    'Mathematics',
    'Science',
    'Computer Science',
    'Physical Developement',
    'Creative Arts',
    'Social Emotional Learning',
  ];

  const handleFilterChange = (option: string) => {
    setSelectedFilters((prev: any) => ({ ...prev, [option]: !prev[option] }));
  };

  // * Helpers

  // Generate levels based on params
  const generateLevels = () => {
    const levels: IBreadcrumb[] = []; // Init levels

    // If there is a curriculumID, add subjects to the levels
    if (params.curriculumId) {
      levels.push({
        label: 'Subjects',
        url: `/curriculum-roadmaps/${params.curriculumId}`,
        isCurrent: !params.subjectId,
      });
    }

    // If there is a subjectId, add levels it to the levels
    if (params.subjectId) {
      levels.push({
        label: 'Levels',
        url: `/curriculum-roadmaps/${params.curriculumId}/${params.subjectId}`,
        isCurrent: !params.levelId,
      });
    }

    // If there is a levelId, add topics it to the levels
    if (params.levelId) {
      levels.push({
        label: 'Topics',
        url: `/curriculum-roadmaps/${params.curriculumId}/${params.subjectId}/${params.levelId}`,
        isCurrent: !params.topicId,
      });
    }

    // If there is a topicId, add lessons it to the levels
    if (params.topicId) {
      levels.push({
        label: 'Lessons',
        url: `/curriculum-roadmaps/${params.curriculumId}/${params.subjectId}/${params.levelId}/${params.topicId}`,
        isCurrent: !params.lessonId,
      });
    }

    return levels; // Return levels
  };
  // * Render
  return (
    <nav
      className="flex justify-between items-center flex-col sm:flex-row gap-4"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-white px-6 shadow dark:bg-navy-800"
      >
        {params.curriculumId && (
          <li className="flex">
            <div className="flex items-center">
              <Link
                href="/curriculum-roadmaps"
                className="text-slate-400 transition-all duration-200 hocus:scale-105 hocus:text-slate-500 dark:text-navy-200 dark:hocus:text-navy-100"
              >
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
        )}

        {/* Dynamic Breadcrumbs */}
        {generateLevels().map((level) => (
          <li className="flex" key={level.label}>
            <div className="flex items-center">
              {/* Arrow */}
              <svg
                className="h-full w-6 flex-shrink-0 text-slate-200 dark:text-navy-500"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>

              {/* Text */}
              <Link
                href={level.url}
                className={cn(
                  'ml-4 flex h-full w-full items-center justify-center text-sm font-medium  transition-all duration-200 md:text-base',
                  level.isCurrent
                    ? 'text-slate-700 dark:text-navy-200'
                    : 'text-slate-500 hocus:scale-105 hocus:text-slate-700 dark:text-navy-300 dark:hocus:text-navy-200',
                )}
                aria-current={level.isCurrent ? 'page' : undefined}
              >
                {level.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex items-center gap-4"
      >
        <div className="relative flex h-8">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer h-full w-60 rounded-full bg-slate-100 px-4 pl-9 text-sm text-slate-800 outline-none ring-navy-500/50 transition-all duration-100 ease-out placeholder:text-slate-400 focus:w-64 focus:ring hocus:bg-slate-200 dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-blue-500/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
            placeholder="Search"
          />

          {/* Magnifying Glass */}
          <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-navy-700 dark:text-navy-300 dark:peer-focus:text-blue-500">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </div>
        </div>

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
      </motion.div>

      <Modal
        isVisible={filtersModal}
        close={() => setFiltersModal(false)}
        closeBtn={true}
      >
        <section className="relative">
          {/* Header */}
          <div className="px-4 py-5 sm:px-6">
            {/* Title */}
            <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-xl">
              Filter Settings
            </h3>

            {/* Description */}
            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Apply filters to search for avaliabe lessons
            </p>
          </div>

          {/* Body */}
          <div className="border-t border-slate-200 px-4 py-5 sm:px-6 flex flex-wrap justify-around">
            {/* Content */}
            <dt className="text-base font-medium text-slate-500 mb-4 w-full">
              Subjects
            </dt>
            <div className="grid grid-cols-2 gap-4">
              {subjectOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer mt-1"
                >
                  <div
                    className={`relative rounded-md border-2 w-6 h-6 transition-colors ease-in-out duration-200 ${
                      selectedFilters[option]
                        ? 'bg-green-600 border-green-600'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {selectedFilters[option] && (
                        <motion.div
                          key="checked"
                          className="absolute"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <CheckIcon className="h-5 w-5 text-white m-auto" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <input
                      type="checkbox"
                      className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                      checked={selectedFilters[option]}
                      onChange={() => handleFilterChange(option)}
                    />
                  </div>
                  <span className={`text-gray-700`}>{option}</span>
                </label>
              ))}
            </div>

            <dt className="text-base font-medium text-slate-500 my-4 w-full">
              Levels
            </dt>
            {filterOptions.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 cursor-pointer mt-1"
              >
                <div
                  className={`relative rounded-md border-2 w-6 h-6 transition-colors ease-in-out duration-200 ${
                    selectedFilters[option]
                      ? 'bg-green-600 border-green-600'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {selectedFilters[option] && (
                      <motion.div
                        key="checked"
                        className="absolute"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <CheckIcon className="h-5 w-5 text-white m-auto" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <input
                    type="checkbox"
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    checked={selectedFilters[option]}
                    onChange={() => handleFilterChange(option)}
                  />
                </div>
                <span className={`text-gray-700`}>{option}</span>
              </label>
            ))}
          </div>
        </section>
      </Modal>
    </nav>
  );
}
