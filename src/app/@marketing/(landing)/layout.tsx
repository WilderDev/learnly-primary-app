import MarketingScripts from '@/lib/scripts/MarketingScripts';
import { PropsWithChildren } from 'react';
import MarketingNavigation from '../(navigation)/MarketingNavigation';
import MarketingFooter from '../(navigation)/MarketingFooter';
import MarketingThemeToggler from './MarketingThemeToggler';

export default function MarketingLayout({ children }: PropsWithChildren) {
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

      {/* Marketing Scripts */}
      <MarketingScripts />
    </>
  );
}
