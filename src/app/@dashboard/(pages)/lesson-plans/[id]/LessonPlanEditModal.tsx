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
import { supabaseClient } from '@/lib/auth/supabaseClient';

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
  const [imagePath, setImagePath] = useState(lessonPlan.image_path); // Image Path

  const [file, setFile] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    // If a file was selected, create a URL for it
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async () => {
    const supabase = supabaseClient();
    let newImagePath = imagePath;
    if (file) {
      const filePath = `lessons/${lessonPlan.id}/${file.name}`;

      const { data: fileList, error: listError } = await supabase.storage
        .from('avatars')
        .list(`lessons/${lessonPlan.id}`);

      if (listError) {
        console.error('Error listing files:', listError);
        return;
      }

      for (const file of fileList) {
        const fullFilePath = `lessons/${lessonPlan.id}/${file.name}`;
        console.log(fullFilePath);
        const { error: deleteError } = await supabase.storage
          .from('avatars')
          .remove([fullFilePath]);

        if (deleteError) {
          console.error(`Error deleting file ${fullFilePath}:`, deleteError);
          return;
        }
      }

      const { error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (error) {
        console.error('Error uploading image:', error);
        return;
      }

      const { data } = await supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      if (!data?.publicUrl) {
        console.error('Error getting image URL:');
        return;
      }

      newImagePath = data.publicUrl;
    }

    // Update lesson plan in the database (including title and possibly image path)
    const { error: updateError } = await supabase
      .from('lesson_plans')
      .update({ image_path: newImagePath, title: title }) // use newImagePath instead of imagePath
      .eq('id', lessonPlan.id);

    if (updateError) {
      console.error('Error updating lesson plan:', updateError);
      return;
    }

    setImagePath(newImagePath); // Update imagePath state only after the update to the database is successful

    setFile(null);
    setPreviewUrl('');
    close(); // Close the modal after saving changes
  };

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
                src={previewUrl || imagePath}
                alt={lessonPlan.subject_name}
                className="rounded-full h-full w-full object-cover border border-green-800 shadow-lg dark:border-navy-300/50"
                height={200}
                width={200}
              />
            </div>

            <label htmlFor="imageInput">
              <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white rounded-full cursor-pointer transition-opacity duration-200 ease-in-out">
                Edit
              </div>
            </label>

            <div className="absolute right-4 bottom-4 rounded-full bg-green-600 dark:bg-slate-500 p-2 border border-white dark:border-navy-700">
              <PhotoIcon className="h-6 w-6 text-white" />
            </div>

            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
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
