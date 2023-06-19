'use client';

import DatePicker from '@/lib/components/form/DatePicker';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import RadioImages from '@/lib/components/form/RadioImages';
import Button from '@/lib/components/ui/Button';
import { UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { avatarImages } from './avatarImages';
import { IOnboardingChild } from '@/assets/typescript/onboarding';

// * Props
interface IProps {
  addChild: (child: IOnboardingChild) => void;
  editChild: IOnboardingChild | null;
  updateChild: (child: IOnboardingChild) => void;
  close: () => void;
}

// * Component
export default function AddOrEditChildForm({
  addChild,
  editChild,
  updateChild,
  close,
}: IProps) {
  // * State
  const [name, setName] = useState(editChild?.name || '');
  const [birthday, setBirthday] = useState<Date | null>(
    editChild?.birthday || null,
  );
  const [avatarUrl, setAvatarUrl] = useState(
    editChild?.avatarUrl ||
      avatarImages[(Math.random() * avatarImages.length) | 0],
  );

  // * Render
  return (
    <Form>
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
          maxDate: new Date(),
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
            close();
          }}
        >
          Cancel
        </Button>

        {/* Submit */}
        <Button
          className="w-64"
          type="button"
          disabled={!name || !birthday}
          onClick={() => {
            editChild?.id
              ? updateChild({
                  id: editChild.id,
                  name,
                  birthday,
                  avatarUrl,
                } as IOnboardingChild)
              : addChild({ name, birthday, avatarUrl } as IOnboardingChild);
          }}
        >
          {editChild ? 'Update' : 'Add'} {name || 'Child'}
        </Button>
      </div>
    </Form>
  );
}
