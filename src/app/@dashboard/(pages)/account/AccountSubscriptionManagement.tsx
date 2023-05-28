'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

const includedFeatures = [
  'Instant lesson creation and management',
  'Science-Backed Curriculums with over 5,000 lessons',
  'Private forum access and support',
  'Member resources and thriving community',
];
import { DashPanelHeader } from '../../(layout)/DashPanel';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';

export default function AccountSubscriptionManagement() {
  // * Hooks / Context
  const { subscription } = useUser();

  // * Render
  return (
    <>
      <DashPanelHeader title="Subscription Management" />

      {/* Header */}
      <div className="py-4 px-6 sm:px-8 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Learnly Premius Plus{' '}
          <span className="italic text-green-700">(Exlcusive Access)</span>
        </h3>

        <p className="mt-6 text-base leading-7 text-slate-600">
          Empower your child to learn and grow with homeschool crafted just for
          them, and gain confidence in your teaching ability with the #1
          personalized lesson and curriculum creator.
        </p>

        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">
            You&apos;re plan includes:
          </h4>
          <div className="h-px flex-auto bg-slate-100" />
        </div>

        {/* Features */}
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2 sm:gap-6"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-green-600"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="border-t border-slate-200 mt-4 py-6 px-6 sm:px-8">
        <div className="flex justify-between items-center space-x-6">
          <p className="text-base leading-6 text-slate-600">
            Your subscription will automatically renew on{' '}
            <time dateTime={subscription?.renewalDate!}>
              {getDatestringFromTimestamp(
                subscription?.renewalDate!,
                true,
                true,
                true,
              )}
            </time>
            .{' '}
            <span className="text-slate-500 dark:text-navy-200/90">
              You can cancel anytime.
            </span>
          </p>

          <div className="flex-flex-col space-y-4">
            <Button
              size="sm"
              variant="light"
              fill="outline"
              shadow="sm"
              url={subscription?.billingPortalSessionUrl!}
            >
              Update Payment Method
            </Button>
            <Button
              size="sm"
              variant="light"
              fill="outline"
              shadow="sm"
              url={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL}
            >
              Manage Subscription
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
