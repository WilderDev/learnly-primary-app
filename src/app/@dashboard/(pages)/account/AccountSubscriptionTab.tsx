'use client';

import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import AccountSubscriptionStripeForm from './AccountSubscriptionStripeForm';
import { StripeElementsProvider } from './StripeElementsCtx';

// * Component
export default function AccountSubscriptionTab() {
  // * Render
  return (
    <section className="flex flex-col 2xl:flex-row 2xl:justify-between gap-y-12 2xl:gap-y-0 2xl:gap-x-12">
      {/* Subscription Details */}
      <DashPanel className="w-full 2xl:w-1/2" colNum={1}>
        {/* Header */}
        <DashPanelHeader title="Your Subscription" />

        {/* Subscription Features */}
      </DashPanel>

      {/* Teaching Preferences */}
      <DashPanel className="w-full 2xl:w-1/2" colNum={2}>
        {/* Header */}
        <DashPanelHeader title="Update Your Subscription" />

        {/* Subscription Actions */}
        <StripeElementsProvider>
          <AccountSubscriptionStripeForm />
        </StripeElementsProvider>
      </DashPanel>
    </section>
  );
}
