'use client';

import {
  BookmarkSquareIcon,
  PrinterIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import { handleShare } from './helpers';
import { usePathname } from 'next/navigation';
import { useLessonCreator } from './LessonCreatorCtx';
import { useState } from 'react';
import LessonPlanSaveDetailsModalForm from '../lesson-plans/[id]/LessonPlanSaveDetailsModal';

interface IProps {
  handlePrint: () => void;
}

// * Data
const dockItems: {
  id: string;
  label: 'Save' | 'Print' | 'Share';
  icon: () => React.ReactNode;
}[] = [
  {
    id: 'save',
    label: 'Save',
    icon: () => (
      <BookmarkSquareIcon className="rounded-full bg-gradient-to-br from-blue-700 to-sky-500 p-2 text-slate-50" />
    ),
  },
  {
    id: 'print',
    label: 'Print',
    icon: () => (
      <PrinterIcon className="rounded-full bg-gradient-to-br from-red-700 to-rose-500 p-2 text-slate-50" />
    ),
  },
  {
    id: 'share',
    label: 'Share',
    icon: () => (
      <ShareIcon className="rounded-full bg-gradient-to-br from-green-700 to-emerald-500 p-2 text-slate-50" />
    ),
  },
];

export default function LessonCreatorDock({ handlePrint }: IProps) {
  // * Hooks / Context
  const { id, students } = useLessonCreator();
  const pathname = usePathname();

  // * State
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);

  // * Hanlders
  const handleDockItemClick = (label: 'Save' | 'Print' | 'Share') => {
    switch (label) {
      case 'Save':
        setSaveModalOpen(true);
        break;
      case 'Print':
        handlePrint();
        break;
      case 'Share':
        handleShare(`${pathname}/${id}`);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {/* Dock Menu */}
      <div className="fixed z-[1000] right-0 top-1/2 -translate-y-1/2 transform print:hidden">
        {/* Container */}
        <div className="flex flex-col items-center rounded-md p-4">
          {/* Background */}
          <div className="absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-r from-white to-transparent opacity-10" />

          {/* Items */}
          <ul className="z-50 flex flex-col space-y-5">
            {dockItems.map((item) => (
              <li key={item.id} className="group flex flex-col items-center">
                <button
                  className="z-[100] flex h-14 w-14 cursor-pointer flex-col items-center justify-center rounded-full bg-white opacity-80 shadow-md transition-all duration-500 hover:bg-gray-100 hocus:-translate-x-4 hocus:scale-125 hocus:opacity-100 hocus:shadow-xl dark:bg-navy-600 dark:hover:bg-navy-500"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation(); // Stop Propagation
                    e.preventDefault(); // Prevent Default (Blur)
                    handleDockItemClick(item.label); // Handle Click
                    e.currentTarget.blur(); // Blur
                  }}
                >
                  {item.icon()}
                </button>

                <span className="text-slate-300 font-semibold mt-2 dark:text-navy-200 text-sm group-hover:text-slate-100 dark:group-hover:text-navy-100">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Save Modal */}
      <LessonPlanSaveDetailsModalForm
        lessonPlanId={id!}
        defaultStudentIds={students.map((s) => s.id)}
        isVisible={isSaveModalOpen}
        close={() => setSaveModalOpen(false)}
      />
    </>
  );
}
