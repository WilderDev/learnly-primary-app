'use client';

import { ILessonPlanWithCreator } from '@/assets/typescript/lesson-plan';
import Input from '@/lib/components/form/Input';
import Modal from '@/lib/components/popouts/Modal';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/lib/components/ui/Button';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import { revalidatePath } from 'next/cache';
import { deleteOldImages, editLessonPlan } from './_actions';
import { toast } from 'sonner';

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
  // State
  const [title, setTitle] = useState(lessonPlan.title);
  const [imagePath, setImagePath] = useState(lessonPlan.image_path);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // File State
  const [file, setFile] = useState<File | null>(null);

  // Effects
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl('');
    }
  }, [file]);

  // File change handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  // Submit Handle
  const handleSubmit = async () => {
    if (!title) return toast.error('Title Is Required');

    // Set Loading State
    setIsLoading(true);

    // Set New Pulic URL
    let publicUrl = null;

    // Check for file change
    if (file) {
      // Supabase Client
      const supabase = supabaseClient();

      // Execute Delete Old Images Action
      const { ok } = await deleteOldImages({ lesson_plan_id: lessonPlan.id });

      if (!ok) {
        toast.error('Failed To Update Profile');
        setIsLoading(false);
        return;
      }

      // Create a new file path for the bucket
      const filePath = `lessons/${lessonPlan.id}/${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);
      if (uploadError) {
        toast.error('Failed To Update Profile');
        setIsLoading(false);
        return;
      }

      // Fetch the new public URL
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      if (!data) {
        toast.error('Failed To Update Profile');
        setIsLoading(false);
        return;
      }

      // Set new public URL
      publicUrl = data.publicUrl;
    }

    // If there was a new image
    if (publicUrl) {
      // Execute Edit Lesson Plan action
      const { ok: updateLessonPlanSuccess } = await editLessonPlan({
        image_url: publicUrl,
        lesson_plan_id: lessonPlan.id,
        title: title,
      });

      if (!updateLessonPlanSuccess) {
        toast.error('Failed To Update Profile');
        setIsLoading(false);
        return;
      }

      success(publicUrl);
    } else {
      const { ok: updateLessonPlanSuccess } = await editLessonPlan({
        lesson_plan_id: lessonPlan.id,
        title: title,
      });

      if (!updateLessonPlanSuccess) {
        toast.error('Failed To Update Profile');
        setIsLoading(false);
        return;
      }

      success();
    }
    // Set Loading State
    setIsLoading(false);

    // TSK This Throws an error
    try {
      revalidatePath(`/lesson-plans/${lessonPlan.id}`);
      revalidatePath('/');
    } catch {}
  };

  // Helper Functions
  const success = (publicUrl?: string) => {
    if (publicUrl) setImagePath(publicUrl);
    setFile(null);
    setPreviewUrl('');
    close();
    toast.success('Lesson Plan Updated!');
  };

  // Render
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
      <section className="flex items-center gap-2 flex-col">
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

            {/* Mask Input */}
            <label htmlFor="imageInput">
              <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white rounded-full cursor-pointer transition-opacity duration-200 ease-in-out">
                Edit
              </div>
            </label>

            <div className="absolute right-4 bottom-4 rounded-full bg-green-600 dark:bg-slate-500 p-2 border border-white dark:border-navy-700">
              <PhotoIcon className="h-6 w-6 text-white" />
            </div>

            {/* Hidden File Input */}
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
      <Button
        loading={isLoading}
        onClick={handleSubmit}
        className="w-full mt-1"
      >
        Save
      </Button>
    </Modal>
  );
}
