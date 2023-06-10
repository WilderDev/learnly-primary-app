'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { useState, useTransition } from 'react';
import { createReferralCode } from './_actions';
import baseUrl from '@/lib/common/baseUrl';
import useClipboard from '@/lib/hooks/useClipboard';

// * Component
export default function ReferAFriend() {
  // * Hooks / Context
  const { user } = useUser();
  const { ref: copyRef, onCopy, copied } = useClipboard();

  // * State
  const [referralCode, setReferralCode] = useState('');
  let [isPending, startTransition] = useTransition();

  // * Mutations / Queries
  const { mutate: createReferralCodeMutation, isLoading } = useRequest(
    createReferralCode,
    {
      onSuccess: (data) => {
        if (data.ok) {
          const { referralCode } = data.payload as {
            referralCode: string;
          };

          setReferralCode(referralCode);
        }
      },
    },
  );

  // * Render
  return (
    <>
      <p className="text-slate-700 dark:text-navy-100 mb-4">
        Get{' '}
        <b className="text-slate-900 font-medium dark:text-navy-50">$50 CASH</b>{' '}
        for every referral that signs up for the annual plan! 💵
      </p>

      {/* Generate Referral Link / Copy Referral Link */}
      {user?.referralCode || referralCode ? (
        <div className="space-y-2 border-t pt-4 border-slate-200 dark:border-navy-500">
          {/* Text */}
          <p className="text-slate-700 dark:text-navy-100">
            Your referral link is:{' '}
          </p>

          {/* Copyable Link */}
          <div
            className="text-green-700 block font-medium dark:text-green-100"
            ref={copyRef}
          >
            {baseUrl + '?ref=' + user?.referralCode ?? referralCode}
          </div>

          {/* Copy Button */}
          <Button
            className="border border-green-500"
            type="button"
            size="xs"
            fill={copied ? 'solid' : 'outline'}
            shadow="sm"
            onClick={onCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>

          {/* Share Button */}
          {/* TSK */}

          {/* Message about connecting a bank account */}
          <p className="text-slate-700 dark:text-navy-100">
            You will receive $50 cash for every referral that signs up for the
            annual plan. Please connect your bank account to Stripe to receive
            the cash.
          </p>
        </div>
      ) : (
        <Button
          type="button"
          size="sm"
          variant="secondary"
          onClick={() => startTransition(() => createReferralCodeMutation({}))}
          loading={isPending || isLoading}
          disabled={isPending || isLoading || !!referralCode}
        >
          Generate Referral Link
        </Button>
      )}
    </>
  );
}

// TSK: Referrals Dashboard
// You will receive the cash after the 30 day refund period has passed.
