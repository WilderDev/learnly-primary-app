import Main from '@/lib/components/layout/Main';

import OnboardingContainer from './OnboardingContainer';

// * Page
export default function OnboardingPage() {
  // * Render
  return (
    <Main
      className="backdrop-blur relative flex justify-center xl:justify-between h-screen items-center flex-col lg:flex-row max-h-screen overflow-hidden"
      marginY={false}
    >
      {/* Body */}
      <OnboardingContainer />
    </Main>
  );
}

// TSK: Animations between steps

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Welcome to Learnly | Onboarding',
  description: 'Enter your name and email to get started with Learnly.',
};
