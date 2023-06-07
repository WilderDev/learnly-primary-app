import { PropsWithChildren } from 'react';
import MarketingNavigation from '../../(navigation)/MarketingNavigation';
import MarketingFooter from '../../(navigation)/MarketingFooter';
import MarketingThemeToggler from '../../(navigation)/MarketingThemeToggler';

export default function SharableLayout({ children }: PropsWithChildren) {
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
    </>
  );
}
