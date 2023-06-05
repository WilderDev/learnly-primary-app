'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { createContext } from 'react';
import { toast } from 'sonner';
import OnboardingProfile from './OnboardingProfile';
import OnboardingPreferences from './OnboardingPreferences';
import OnboardingChildren from './OnboardingChildren';
import { IOnboardingChild } from '@/assets/typescript/onboarding';
import { avatarImages } from './avatarImages';
import MarketingNavAuthSuccessModal from '../../(navigation)/MarketingNavAuthSuccessModal';
import { useRequest } from '@/lib/hooks/useRequest';
import { createUser } from './_actions';

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

export function OnboardingProvider({ children: c }: PropsWithChildren) {
  // * Data
  const steps = useMemo(
    () => [
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
    ],
    [],
  );

  // * State
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(avatarImages[0]);
  const [children, setChildren] = useState<IOnboardingChild[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  let [isPending, startTransition] = useTransition();

  // * Handlers / Mutations
  const { mutate: createUserMutation, isLoading } = useRequest(createUser, {
    onSuccess: (data) => {
      if (data.ok) {
        setLoading(false); // Stop Loading
        toast.success('Welcome to Learnly! 🎉❤️🎓');
        setShowEmailConfirmation(true);
      } else {
        toast.error('Error creating user! Please try again.');
      }
    },
  });

  // * Functions
  const handleNextStep = useCallback(async () => {
    setLoading(true);

    if (step === 1) {
      // Confirm Email isn't already in use
      const res = await fetch(`/api/users/${email}`);

      // If Email is in use, show error and return
      if (res.status === 200) {
        setLoading(false); // Stop Loading
        return toast.error('Email already in use'); // Show Error
      }
    } else if (step === steps.length) {
      // Create User
      return startTransition(() =>
        createUserMutation({
          name,
          email,
          avatarUrl,
          children,
        }),
      );
    }

    setLoading(false);
    setStep((prev) => prev + 1);
  }, [step, steps, email, name, avatarUrl, children, createUserMutation]);

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
      loading: loading || isLoading || isPending,
    }),
    [
      step,
      steps,
      name,
      email,
      avatarUrl,
      children,
      loading,
      isLoading,
      isPending,
      handleNextStep,
    ],
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
