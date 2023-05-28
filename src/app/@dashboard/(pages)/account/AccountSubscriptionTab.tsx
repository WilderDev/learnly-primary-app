'use client';

import { DashPanel } from '../../(layout)/DashPanel';
import AccountSubscriptionStripeForm from './AccountSubscriptionStripeForm';
import { StripeElementsProvider } from './StripeElementsCtx';

// * Component
export default function AccountSubscriptionTab() {
  // * Render
  return (
    <DashPanel className="w-full 2xl:w-8/12" colNum={1}>
      {/* Subscription Actions */}
      <StripeElementsProvider>
        <AccountSubscriptionStripeForm />
      </StripeElementsProvider>
    </DashPanel>
  );
}
