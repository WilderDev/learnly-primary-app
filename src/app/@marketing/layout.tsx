import MarketingScripts from '@/lib/scripts/MarketingScripts';
import { PropsWithChildren } from 'react';
import MarketingNavigation from './(navigation)/MarketingNavigation';
import MarketingFooter from './(navigation)/MarketingFooter';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Marketing Navigation */}
      <MarketingNavigation />

      {/* Children */}
      {children}

      {/* Marketing Footer */}
      <MarketingFooter />

      {/* Marketing Scripts */}
      <MarketingScripts />
    </>
  );
}
