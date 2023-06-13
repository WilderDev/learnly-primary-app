'use client';

import { ILessonPlanWithCreator } from '@/assets/typescript/lesson-plan';
import cn from '@/lib/common/cn';
import Input from '@/lib/components/form/Input';
import Avatar from '@/lib/components/images/Avatar';
import Modal from '@/lib/components/popouts/Modal';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/lib/components/ui/Button';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface IProps {
  isVisible: boolean;
  lessonPlan: ILessonPlanWithCreator;
  close: () => void;
}

export default function LessonPlanEditModal({
  isVisible,
  lessonPlan,
  close,
}: IProps) {
  // * State
  const [title, setTitle] = useState(lessonPlan.title); // Lesson Title

  // Hanglers
  const handleSubmit = () => {};

  return (
    <Modal
      closeBtn={true}
      noCloseOnOutsideClick={true}
      size="xs"
      isVisible={isVisible}
      close={close}
      portalName="alt-portal"
      className="overflow-y-visible"
    >
      <Modal.Header title="Edit Lesson" />
      <section className="flex items-center gap-2 xl:flex-row flex-col">
        {/* Image */}
        {lessonPlan && (
          <div className="relative inline-block">
            <div className="relative h-44 w-44 p-1.5 border-2 border-transparent focus:outline-none ring-2 ring-transparent focus:ring-offset-2  ">
              <Image
                src={lessonPlan.image_path}
                alt={lessonPlan.subject_name}
                className="rounded-full h-full w-full object-cover border border-green-800 shadow-lg dark:border-navy-300/50"
                width={300}
                height={300}
              />
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center z-50 opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white rounded-full cursor-pointer transition-opacity duration-200 ease-in-out"
              onClick={() => {}}
            >
              Edit
            </div>

            <div className="absolute right-4 bottom-4 rounded-full bg-green-600 dark:bg-slate-500 p-2 border border-white dark:border-navy-700">
              <PhotoIcon className="h-6 w-6 text-white" />
            </div>

            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-base font-semibold leading-6 text-slate-900 sm:text-lg w-full px-4">
          <Input
            value={title}
            setValue={setTitle}
            label={'Title'}
            className="w-full"
          />
        </h3>
      </section>
      <Button onClick={handleSubmit} className="w-full mt-1">
        Save
      </Button>
    </Modal>
  );
}
