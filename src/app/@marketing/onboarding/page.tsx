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

// TSK: Have not just the form but some text as well
// TSK: Have testimonials on the side
// TSK: Confetti on initial load
// TSK: Add a skip button
// TSK: Animations between steps
// TSK: Testimonials should be scrolling automatically and loop back around
// TSK: Testimonails Mobile
