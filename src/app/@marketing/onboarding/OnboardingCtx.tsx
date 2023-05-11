'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createContext } from 'react';
import baseUrl from '@/lib/common/baseUrl';
import { toast } from 'sonner';
import OnboardingProfile from './OnboardingProfile';
import OnboardingPreferences from './OnboardingPreferences';
import OnboardingChildren from './OnboardingChildren';
import { IOnboardingChild } from '@/assets/typescript/onboarding';
import { avatarImages } from './avatarImages';
import MarketingNavAuthSuccessModal from '../(navigation)/MarketingNavAuthSuccessModal';

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
  avatarUrl: string;
  setAvatarUrl: Dispatch<SetStateAction<string>>;
  children: IOnboardingChild[];
  setChildren: Dispatch<SetStateAction<IOnboardingChild[]>>;
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
  avatarUrl: '',
  setAvatarUrl: () => {},
  children: [],
  setChildren: () => {},
  loading: false,
});

// * Data
const steps = [
  {
    step: 1,
    name: 'Profile',
    component: <OnboardingProfile />,
  },
  {
    step: 2,
    name: 'Preferences',
    component: <OnboardingPreferences />,
  },
  {
    step: 3,
    name: 'Peeps',
    component: <OnboardingChildren />,
  },
];

export function OnboardingProvider({ children: c }: PropsWithChildren) {
  // * State
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(avatarImages[0]);
  const [children, setChildren] = useState<IOnboardingChild[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

  // * Functions
  const handleNextStep = useCallback(async () => {
    setLoading(true);

    if (step === 1) {
      // Confirm Email isn't already in use
      const res = await fetch(baseUrl + `/api/users/${email}`);

      // If Email is in use, show error and return
      if (res.status === 200) {
        setLoading(false); // Stop Loading
        return toast.error('Email already in use'); // Show Error
      }
    } else if (step === steps.length) {
      // Save User to Database
      const res = await fetch(baseUrl + '/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          avatarUrl,
          children,
        }),
      });

      // If Error, show error and return
      if (!res.ok) {
        setLoading(false); // Stop Loading
        return toast.error('Error creating user'); // Show Error
      }

      // Add Children to Database
      await fetch(baseUrl + '/api/children', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          children,
          email,
        }),
      });

      // Send Welcome Email
      // TSK
      await fetch(baseUrl + '/api/email/welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      // If Success, show success toast and open email confirmation modal
      toast.success('Welcome to Learnly! 🎉🎉🎉'); // Show Success Toast
      setLoading(false); // Stop Loading

      // Open Email Confirmation Modal
      setShowEmailConfirmation(true);
    }

    setLoading(false);
    setStep((prev) => prev + 1);
  }, [step, email, name, avatarUrl, children]);

  // * Effects

  // * Value
  const value = useMemo(
    () => ({
      steps,
      step,
      setStep,
      next: handleNextStep,
      name,
      setName,
      email,
      setEmail,
      avatarUrl,
      setAvatarUrl,
      children,
      setChildren,
      loading,
    }),
    [step, name, email, avatarUrl, children, loading, handleNextStep],
  );

  // * Render
  return (
    <OnboardingCtx.Provider value={value}>
      {/* Children */}
      {c}

      {/* Email Confirmation Modal */}
      <MarketingNavAuthSuccessModal
        isOpen={showEmailConfirmation}
        close={() => setShowEmailConfirmation(false)}
      />
    </OnboardingCtx.Provider>
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
