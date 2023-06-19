'use server';

import { cookies } from 'next/headers';

export async function setReferralCookie(referralCode: string) {
  cookies().set('referralCode', referralCode, {
    name: 'referralCode',
    value: referralCode,
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
}
