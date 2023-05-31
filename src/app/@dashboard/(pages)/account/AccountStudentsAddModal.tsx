'use client';

import Modal from '@/lib/components/popouts/Modal';
import { useAccount } from './AccountCtx';
import { useState } from 'react';
import { avatarImages } from '@/app/@marketing/(pages)/onboarding/avatarImages';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import DatePicker from '@/lib/components/form/DatePicker';
import RadioImages from '@/lib/components/form/RadioImages';
import { UserIcon } from '@heroicons/react/24/solid';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { revalidatePath } from 'next/cache';
import { addStudent } from './_actions';
import { toast } from 'sonner';

// * Component
export default function AccountStudentsAddModal() {
  // * Hooks / Context
  const { addStudentModalOpen, setAddStudentModalOpen } = useAccount();

  // * Mutations
  const { mutate: addStudentMutation, isLoading } = useRequest(addStudent, {
    onSuccess: (data) => {
      if (data.ok) {
        // Reset the form
        setName('');
        setBirthday(null);

        // Revalidate the paths
        revalidatePath('/account'); // ✅
        revalidatePath('/lesson-creator'); // ✅

        // Toast success
        toast.success('Student added successfully!');

        // Close the modal
        setAddStudentModalOpen(false);
      }
    },
  });

  // * State
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(
    avatarImages[Math.random() * avatarImages.length],
  );

  // * Render
  return (
    <Modal
      isVisible={addStudentModalOpen}
      close={() => setAddStudentModalOpen(false)}
      noCloseOnOutsideClick={true}
      closeBtn={true}
    >
      <Modal.Header title="Add Student" />

      {/* Form */}
      <Form
        action={() =>
          addStudentMutation({
            name,
            birthday: birthday!.toDateString(),
            avatarUrl,
          })
        }
      >
        {/* Name */}
        <Input
          cols={2}
          value={name}
          setValue={setName}
          label="Name"
          placeholder="Timmy Turner"
          icon={UserIcon}
          required={true}
          autoFocus={true}
          autoComplete="off"
        />

        {/* Birthday */}
        <DatePicker
          value={birthday!}
          setValue={setBirthday}
          label="Birthday"
          required={true}
          options={{
            dateFormat: 'M d, Y',
            position: 'above right',
          }}
          cols={2}
        />

        {/* Avatar */}
        <RadioImages
          cols={4}
          label="Avatar"
          value={avatarUrl}
          setValue={setAvatarUrl}
          options={avatarImages}
        />

        {/* Buttons */}
        <div className="col-span-4 mt-6 space-x-2 flex justify-between md:mt-0">
          {/* Cancel */}
          <Button
            size="sm"
            className="w-32 border border-slate-200 bg-transparent text-slate-600 hocus:border-white hocus:bg-transparent dark:border-navy-500 dark:text-navy-200 dark:hocus:border-navy-200"
            type="button"
            onClick={() => {
              setName('');
              setBirthday(new Date('2010-01-01 00:00'));
              setAddStudentModalOpen(false);
            }}
          >
            Cancel
          </Button>

          {/* Submit */}
          <Button
            className="w-64"
            type="submit"
            loading={isLoading}
            disabled={!name || !birthday}
          >
            Add {name || 'Student'}
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

// POST_MVP: give options to add more data on create if desired
