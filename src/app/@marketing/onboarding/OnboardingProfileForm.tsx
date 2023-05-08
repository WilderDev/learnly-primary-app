import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '@/lib/components/ui/Button';
import useUser from '@/lib/user/useUser';
import CelebrationConfetti from '@/lib/components/ux/CelebrationConfetti';

// * Props
interface IProps {
  next: () => void;
}

// * Component
export default function OnboardingProfileForm({ next }: IProps) {
  // * Hooks
  const { profile } = useUser();

  // * State
  const [name, setName] = useState(profile?.name ?? '');
  const [email, setEmail] = useState(profile?.email ?? '');
  const [loading, setLoading] = useState(false);

  // * Handlers
  const handleSaveProfile = () => {
    setLoading(true); // Set loading state

    console.log('works:');

    setLoading(false); // Reset loading state
    next(); // Go to next step
  };

  // * Render
  return (
    <>
      {/* Header */}
      <div className="flex flex-col text-center items-center justify-center space-y-3 mt-2 mb-8 max-w-md mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-green-800 dark:text-green-700 md:text-2xl xl:text-3xl">
          🎉 Welcome to Learnly 🎉
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-800 dark:text-navy-50 md:text-xl xl:text-2xl">
          We are so excited to have you here!
        </p>
        <p className="text-sm text-slate-700 dark:text-navy-100 md:text-base">
          <span className="block">
            There are only a few things to set up so you can have the easiest
            homeschool experience possible!
          </span>
          <span className="mt-2 block">
            We&apos;ll walk you through the process step by step. (This
            shouldn&apos;t take longer than 3 minutes) 👇
          </span>
        </p>
      </div>

      {/* Form */}
      <Form className="lg:grid-cols-2" onSubmit={handleSaveProfile}>
        {/* Name */}
        <Input
          label="Name"
          value={name}
          setValue={setName}
          placeholder="Suzy Smartz"
          Icon={UserIcon}
          autoFocus
          required
        />

        {/* Email */}
        <Input
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="homeschool.suzy@gmail.com"
          Icon={EnvelopeIcon}
          required
        />

        {/* Submit */}
        <Button
          className="col-span-2"
          type="submit"
          disabled={!name || !email}
          loading={loading}
        >
          Next Step <span className="ml-2">⭐️</span>
        </Button>
      </Form>

      {/* Confetti */}
      {!profile && <CelebrationConfetti />}
    </>
  );
}
