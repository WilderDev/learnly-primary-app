import { PropsWithChildren } from 'react';
import { OnboardingProvider } from './onboarding/OnboardingCtx';

export default function MarketingPagesLayout({ children }: PropsWithChildren) {
  // * Render
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
