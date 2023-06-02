'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import {
  AcademicCapIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import { saveCurriculum } from '../_actions';
import { toast } from 'sonner';
import Modal from '@/lib/components/popouts/Modal';
import Form from '@/lib/components/form/Form';
import cn from '@/lib/common/cn';
import { ICurriculumListItem } from '@/assets/typescript/curriculum-roadmaps';
import { revalidatePath } from 'next/cache';

// * Props
interface IProps {
  roadmaps: ICurriculumListItem[];
  defaultSelected?: string;
  close?: () => void;
}

export default function SaveCurriculumRoadmapModalContent({
  roadmaps,
  defaultSelected = 'Comprehensive K-5',
  close = () => null,
}: IProps) {
  // * Hooks / Context
  const { students } = useUser();

  // * State
  const [curriculumStudents, setCurriculumStudents] = useState<string[]>([]);
  const [selectedCurriculum, setSelectedCurriculum] = useState(
    () =>
      roadmaps.find((r) => r.name === defaultSelected)?.id ||
      roadmaps[1]?.id ||
      '',
  );

  // * Requests / Mutations
  const { mutate, isLoading } = useRequest(saveCurriculum, {
    onSuccess: (data) => {
      if (data.ok) {
        revalidatePath(`/curriculum-roadmaps`); // ✅
        setSelectedCurriculum('');
        setCurriculumStudents([]);
        toast.success(
          'Curriculum Saved! You might need to refresh your page...',
        );
        close();
      } else {
        toast.error(
          "Something went wrong... You might've already saved this curriculum.",
        );
      }
    },
  });

  // * Render
  return (
    <>
      <Modal.Header title="Save Curriculum Roadmap" />

      <Form
        action={() =>
          mutate({
            curriculum_id: selectedCurriculum,
            student_ids: curriculumStudents,
          })
        }
      >
        {/* Learning Path Cards */}
        <div className="flex flex-col col-span-4">
          <label className="mb-1 block">
            <span className="pl-1 text-slate-600 dark:text-navy-200">
              Students
            </span>
          </label>

          {/* Choices */}
          <div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:flex-wrap">
            {roadmaps.map((path) => (
              <button
                className={cn(
                  'relative flex w-full flex-col lg:flex-grow rounded-md border border-transparent p-4 text-left transition-all duration-200 ease-out lg:w-[48%] xl:w-[32%]',
                  selectedCurriculum === path.id
                    ? 'border-green-500 bg-green-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-900'
                    : 'bg-white opacity-50 shadow-md hocus:bg-slate-50 dark:bg-navy-700 dark:hocus:bg-navy-800',
                )}
                type="button"
                onClick={() => {
                  if (selectedCurriculum === path.id) {
                    setSelectedCurriculum('');
                  } else {
                    setSelectedCurriculum(path.id);
                  }
                }}
                key={path.id}
              >
                <div className="h-2/3">
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-navy-50 md:text-lg xl:text-xl">
                    {path.name}
                  </h3>

                  {/* Tags */}
                  <div className="md:flex space-x-2 mt-2 hidden">
                    {path.tags?.map((tag) => (
                      <span
                        className="px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      'mt-3 text-sm md:text-base',
                      selectedCurriculum === path.id
                        ? 'text-slate-900 dark:text-navy-100'
                        : 'text-slate-600 dark:text-navy-200',
                    )}
                  >
                    {path.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative mt-6 w-full">
                  <Image
                    src={path.image}
                    alt={path.name}
                    width={500}
                    height={500}
                    className="h-32 w-full rounded-md object-cover object-center"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black to-transparent " />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Student Cards */}
        <div className="flex flex-col col-span-4">
          <label className="mb-1 block">
            <span className="pl-1 text-slate-600 dark:text-navy-200">
              Students
            </span>
          </label>

          {/* Students */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-x-6">
            {students?.map((student) => (
              <button
                className={cn(
                  'flex items-center justify-between space-x-4 lg:w-[47%] lg:flex-grow rounded-md px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
                  curriculumStudents.includes(student.id)
                    ? 'bg-green-100 ring-2 ring-green-700 dark:bg-navy-900'
                    : 'hover:bg-slate-50 dark:hover:bg-navy-600',
                )}
                type="button"
                onClick={(e) => {
                  if (curriculumStudents.includes(student.id)) {
                    setCurriculumStudents(
                      curriculumStudents.filter((id) => id !== student.id),
                    );
                  } else {
                    setCurriculumStudents([...curriculumStudents, student.id]);
                  }

                  e.currentTarget.blur();
                }}
                key={student.id}
              >
                {/* Image */}
                <Image
                  className="rounded-full"
                  src={student.avatarUrl}
                  alt={student.firstName}
                  width={40}
                  height={40}
                />

                {/* Content */}
                <h4 className="text-sm flex-1 font-medium md:text-base lg:text-lg text-slate-900 dark:text-navy-50">
                  {student.firstName} {student.lastName}
                </h4>

                {/* Check or X */}
                {curriculumStudents.includes(student.id) ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-slate-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="col-span-4"
          type="submit"
          loading={isLoading}
          disabled={!selectedCurriculum || curriculumStudents.length === 0}
        >
          Save Curriculum Roadmap{' '}
          <AcademicCapIcon className="ml-2 h-5 w-5 text-green-50" />
        </Button>
      </Form>
    </>
  );
}
