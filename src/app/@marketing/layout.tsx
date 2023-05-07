import MarketingScripts from '@/lib/scripts/MarketingScripts';
import { PropsWithChildren } from 'react';

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Children */}
      {children}

      {/* Marketing Scripts */}
      <MarketingScripts />
    </>
  );
}
