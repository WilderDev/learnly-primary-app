import { PropsWithChildren } from 'react';

import Logo from '@/lib/components/brand/Logo';
import MarketingThemeToggler from '../../(navigation)/MarketingThemeToggler';

export default function OnboardingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Background Color */}
      <div className="fixed inset-0 bg-gradient-to-r dark:from-green-800 dark:to-emerald-900 from-green-500 to-emerald-600" />
      {/* Background SVG */}
      <Logo className="hidden sm:block m-4 fixed top-0 right-0 z-10" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Background Triangle */}
        <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r dark:from-green-700 dark:to-emerald-900 from-green-500 to-emerald-600 transform rotate-45 origin-top-left" />

        {/* Background Circle */}
        <div className="absolute top-0 left-0 w-96 rounded-full h-96 bg-gradient-to-r dark:from-green-700 dark:to-emerald-900 from-green-500 to-emerald-600" />
      </div>

      {/* Content */}
      {children}

      {/* Marketing Theme Toggler */}
      <MarketingThemeToggler />
    </>
  );
}
export const dynamic = 'force-dynamic';
