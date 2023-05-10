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

export const dynamic = 'force-dynamic';

// TSK: Animations between steps
