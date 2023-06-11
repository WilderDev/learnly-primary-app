import MarketingScripts from '@/lib/scripts/MarketingScripts';
import { PropsWithChildren } from 'react';
import MarketingNavigation from '../(navigation)/MarketingNavigation';
import MarketingFooter from '../(navigation)/MarketingFooter';
import MarketingThemeToggler from '../(navigation)/MarketingThemeToggler';
import MarketingSocialProof from './MarketingSocialProof';

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Marketing Navigation */}
      <MarketingNavigation />

      {/* Children */}
      {children}

      {/* Marketing Footer */}
      <MarketingFooter />

      {/* Marketing Theme Toggler */}
      <MarketingThemeToggler />

      {/* Social Proof Subscription */}
      <MarketingSocialProof />

      {/* Marketing Scripts */}
      <MarketingScripts />
    </>
  );
}
