import cn from '@/lib/common/cn';
import Modal from '@/lib/components/popouts/Modal';
import { CheckIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface IProps {
  isVisible: boolean;
  close: () => void;
  filterOptions: string[];
  selectedFilters: Record<string, boolean>;
  handleFilterChange: (option: string) => void;
}

export default function FilterModal({
  isVisible,
  close,
  filterOptions,
  selectedFilters,
  handleFilterChange,
}: IProps) {
  return (
    <Modal isVisible={isVisible} close={close} closeBtn={true} size="sm">
      <section className="relative">
        {/* Header */}
        <div className="px-4 py-5 sm:px-6">
          {/* Title */}
          <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-xl text-center">
            Filter Settings
          </h3>

          {/* Description */}
          <p className="mt-1 max-w-2xl text-sm text-slate-500 text-center">
            Apply filters to search for avaliabe lessons in levels
          </p>
        </div>

        {/* Body */}
        <div className="border-t border-slate-200 px-4 py-5 sm:px-6 flex flex-wrap justify-around">
          {/* Content */}
          <dt className="text-base font-medium text-slate-500 mb-4 w-full text-center">
            Levels
          </dt>
          {filterOptions.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 cursor-pointer mt-1"
            >
              <div
                className={cn(
                  'relative rounded-md border-2 w-6 h-6 transition-colors ease-in-out duration-200',
                  selectedFilters[option]
                    ? 'bg-green-600 border-green-600'
                    : 'bg-white border-gray-300',
                )}
              >
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

                <input
                  type="checkbox"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                  checked={selectedFilters[option]}
                  onChange={() => handleFilterChange(option)}
                />
              </div>
              <span className="text-gray-700 font-semibold leading-5">
                {option}
              </span>
            </label>
          ))}
        </div>
      </section>
    </Modal>
  );
}
