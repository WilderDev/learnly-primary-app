'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { createContext } from 'react';
import OnboardingProfileForm from './OnboardingProfileForm';
import OnboardingPreferencesForm from './OnboardingPreferencesForm';
import OnboardingChildrenForm from './OnboardingChildrenForm';
import baseUrl from '@/lib/common/baseUrl';
import { toast } from 'sonner';

// * Context
// Interface
interface IOnboardingCtx {
  steps: { step: number; name: string; component: JSX.Element }[];
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  next: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

// Initial Value
const OnboardingCtx = createContext<IOnboardingCtx>({
  steps: [],
  step: 1,
  setStep: () => {},
  next: () => {},
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  loading: false,
});

// * Data
const steps = [
  {
    step: 1,
    name: 'Profile',
    component: <OnboardingProfileForm />,
  },
  {
    step: 2,
    name: 'Preferences',
    component: <OnboardingPreferencesForm />,
  },
  {
    step: 3,
    name: 'Children',
    component: <OnboardingChildrenForm />,
  },
];

export function OnboardingProvider({ children }: PropsWithChildren) {
  // * Hooks

  // * State
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // * Functions
  const handleNextStep = async () => {
    setLoading(true);

    if (step === 1) {
      // Confirm Email isn't already in use
      const res = await fetch(baseUrl + `/api/users/${email}`);

      // If Email is in use, show error and return
      if (res.status === 200) {
        setLoading(false);
        return toast.error('Email already in use');
      }
    } else if (step === steps.length) {
      // Save User to Database
      // Save User to Stripe (We can add this as a function on handle_new_user)
      // Send Welcome Email
      // Redirect to Dashboard (Automatic)
    }

    setLoading(false);
    setStep((prev) => prev + 1);
  };

  // * Effects

  // * Value
  const value = {
    steps,
    step,
    setStep,
    next: handleNextStep,
    name,
    setName,
    email,
    setEmail,
    loading,
  };

  // * Render
  return (
    <OnboardingCtx.Provider value={value}>{children}</OnboardingCtx.Provider>
  );
}

// * Hooks
export function useOnboarding() {
  const ctx = useContext(OnboardingCtx);

  if (!ctx) {
    throw new Error('useOnboarding must be used within a OnboardingProvider');
  }

  return ctx;
}
