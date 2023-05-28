'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];
import { DashPanelHeader } from '../../(layout)/DashPanel';
import { useUser } from '@/lib/components/providers/UserProvider';

export default function AccountSubscriptionManagement() {
  // * Hooks / Context
  const { subscription } = useUser();

  // * Render
  return (
    <>
      <DashPanelHeader title="Subscription Management" />

      <div className="p-6 sm:p-8 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Learnly Premius Plus{' '}
          <span className="italic text-green-700">(All Access)</span>
        </h3>
        <p className="mt-6 text-base leading-7 text-slate-600">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-green-600">
            What’s included
          </h4>
          <div className="h-px flex-auto bg-slate-100" />
        </div>
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
    </>
  );
}

// * Notes
// Update Payment Method
// Update Subscription Button
// Current Plan
// Next Billing Cycle
// Refund Policy
// Referral Program
