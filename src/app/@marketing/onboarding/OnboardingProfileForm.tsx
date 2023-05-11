'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '@/lib/components/ui/Button';
import { useOnboarding } from './OnboardingCtx';
import CelebrationConfetti from '@/lib/components/ux/CelebrationConfetti';
import { toast } from 'sonner';

// * Component
export default function OnboardingProfileForm() {
  // * Contexts
  const { name, setName, email, setEmail, next, loading } = useOnboarding();

  // * Render
  return (
    <>
      {/* Header */}
      <div className="flex flex-col text-center items-center justify-center space-y-3 mt-2 mb-8 max-w-md mx-auto">
        {/* Title */}
        <h2 className="text-xl font-semibold text-green-800 dark:text-green-600 md:text-2xl xl:text-3xl">
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
      <Form className="lg:grid-cols-2">
        {/* Name */}
        <Input
          label="Name"
          value={name}
          setValue={setName}
          placeholder="Suzy Smartz"
          icon={UserIcon}
          autoFocus={true}
          required={true}
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="homeschool.suzy@gmail.com"
          icon={EnvelopeIcon}
          required={true}
        />

        {/* Submit */}
        <Button
          className="col-span-2"
          type="button"
          disabled={!name || !email}
          onClick={() => {
            if (!name || !email)
              return toast.error('Please fill out all fields');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email))
              return toast.error('Please enter a valid email address');
            next();
          }}
          loading={loading}
        >
          Next Step <span className="ml-2">⭐️</span>
        </Button>
      </Form>

      {/* Confetti */}
      {!email && <CelebrationConfetti />}
    </>
  );
}
