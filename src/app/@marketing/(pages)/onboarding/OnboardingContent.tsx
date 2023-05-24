'use client';

import Box from '@/lib/components/containers/Box';
import { useOnboarding } from './OnboardingCtx';

export default function OnboardingContent() {
  // * Context
  const { steps, step } = useOnboarding();

  // * Render
  return (
    <Box className="overflow-y-scroll" size="lg" shadow="xl" rounded="xl">
      {steps.find((s) => s.step === step)?.component ?? <h1>Uh Oh!</h1>}
    </Box>
  );
}
