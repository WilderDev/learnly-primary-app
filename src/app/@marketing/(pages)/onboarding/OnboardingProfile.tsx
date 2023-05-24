'use client';

import Form from '@/lib/components/form/Form';
import Input from '@/lib/components/form/Input';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '@/lib/components/ui/Button';
import { useOnboarding } from './OnboardingCtx';
import CelebrationConfetti from '@/lib/components/ux/CelebrationConfetti';
import { toast } from 'sonner';
import OnboardingStepHeader from './OnboardingStepHeader';

// * Component
export default function OnboardingProfile() {
  // * Contexts
  const { name, setName, email, setEmail, next, loading } = useOnboarding();

  // * Handlers
  const onNextStep = () => {
    if (!name || !email) return toast.error('Please fill out all fields'); // Ensure all fields are filled out

    // Ensure email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error('Please enter a valid email address');

    next(); // Go to next step
  };

  // * Render
  return (
    <>
      {/* Header */}
      <OnboardingStepHeader
        title="🎉 Welcome to Learnly 🎉"
        subTitle="We are so excited to have you here!"
        p1="There are only a few things to set up so you can have the easiest
          homeschool experience possible!"
        p2="We'll walk you through the process step by step. (This
          shouldn't take longer than 3 minutes) 👇"
      />

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
          onClick={onNextStep}
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
