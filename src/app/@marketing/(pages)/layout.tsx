import { PropsWithChildren } from 'react';
import { OnboardingProvider } from './onboarding/OnboardingCtx';
import MarketingScripts from '@/lib/scripts/MarketingScripts';

export default function MarketingPagesLayout({ children }: PropsWithChildren) {
  // * Render
  return (
    <OnboardingProvider>
      {/* Children */}
      {children}

      {/* Marketing Scripts */}
      <MarketingScripts />
    </OnboardingProvider>
  );
}
