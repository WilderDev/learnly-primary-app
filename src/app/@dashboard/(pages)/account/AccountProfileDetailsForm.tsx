'use client';

import { avatarImages } from '@/app/@marketing/(pages)/onboarding/avatarImages';
import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import RadioImages from '@/lib/components/form/RadioImages';
import { useAuth } from '@/lib/components/providers/AuthProvider';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import {
  UserIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { updateProfile } from './_actions';
import { toast } from 'sonner';
import { revalidatePath } from 'next/cache';

// * Component
export default function AccountProfileDetailsForm() {
  // * Hooks / Context
  const { user } = useUser();
  const { session } = useAuth();

  // * Requests / Mutations
  const { mutate: updateProfileMutation, isLoading } = useRequest(
    updateProfile,
    {
      onSuccess: (data) => {
        if (data.ok) {
          toast.success('Profile Updated Successfully');
          revalidatePath('/account'); // ✅
        } else {
          toast.error('Something went wrong');
        }
      },
    },
  );

  // * State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  // * Effects
  // Set Initial State from Context
  useEffect(() => {
    if (user && session) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(session?.user.email ?? '');
      setPhone(session?.user.phone ?? '');
      setAvatar(user.avatarUrl);
    }
  }, [user, session]);

  // * Render
  return (
    <Form
      action={() =>
        updateProfileMutation({
          firstName,
          lastName,
          email,
          // phone,
          avatar,
        })
      }
    >
      {/* First Name */}
      <Input
        label="First Name"
        value={firstName}
        setValue={setFirstName}
        required={true}
        cols={2}
        icon={UserIcon}
      />

      {/* Last Name */}
      <Input
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        required={true}
        cols={2}
        icon={IdentificationIcon}
      />

      {/* Email */}
      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        required={true}
        cols={2}
        icon={EnvelopeIcon}
      />

      {/* Phone */}
      <Input
        label="Phone"
        value={phone}
        setValue={setPhone}
        type="tel"
        cols={2}
        icon={PhoneIcon}
      />

      {/* Avatar */}
      <RadioImages
        cols={4}
        label="Avatar"
        value={avatar}
        setValue={setAvatar}
        options={avatarImages}
      />

      {/* Submit */}
      <Button
        className="col-span-4"
        type="submit"
        loading={isLoading}
        disabled={!firstName || !lastName || !email || !avatar || isLoading}
      >
        Save Profile Details
      </Button>
    </Form>
  );
}
