'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { setReferralCookie } from './_actions';

export default function LandingLocalStorageReferrals() {
  // * Hooks
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('ref');

  // * Effects
  useEffect(() => {
    if (referralCode) {
      setReferralCookie(referralCode);
    }
  }, [referralCode]);

  return null;
}
