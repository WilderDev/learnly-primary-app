'use client';

import Container from '@/lib/components/layout/Container';
import Main from '@/lib/components/layout/Main';
import OnboardingProgressBar from './OnboardingProgressBar';
import { useState } from 'react';
import OnboardingProfileForm from './OnboardingProfileForm';
import OnboardingPreferencesForm from './OnboardingPreferencesForm';
import OnboardingChildrenForm from './OnboardingChildrenForm';

export default function OnboardingPage() {
  // * State
  const [currStep, setCurrStep] = useState(1);

  // * Render
  return (
    <Main marginY={false}>
      <Container className="h-screen flex items-center flex-col justify-center max-w-5xl">
        {/* Progress */}
        <OnboardingProgressBar currStep={currStep} setStep={setCurrStep} />

        {/* Content */}
        <div className="bg-white w-full px-6 py-8 rounded-2xl shadow-xl">
          {/* Step 1 - Profile */}
          {currStep === 1 && (
            <OnboardingProfileForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}

          {/* Step 2 - Preferences */}
          {currStep === 2 && (
            <OnboardingPreferencesForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}

          {/* Step 3 - Children */}
          {currStep === 3 && (
            <OnboardingChildrenForm
              next={() => setCurrStep((prev) => prev + 1)}
            />
          )}
        </div>
      </Container>
    </Main>
  );
}

// TSK: Confetti on initial load
// TSK: Add a skip button
