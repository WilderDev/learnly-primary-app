'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { DashPanel } from '../../(layout)/DashPanel';
import AccountSubscriptionStripeForm from './AccountSubscriptionStripeForm';
import { StripeElementsProvider } from './StripeElementsCtx';
import AccountSubscriptionManagement from './AccountSubscriptionManagement';

// * Component
export default function AccountSubscriptionTab() {
  // * Hooks / Context
  const { subscription } = useUser();

  // * Render
  return (
    <DashPanel className="w-full 2xl:w-9/12" colNum={1}>
      {/* Active Subscription Management */}
      {subscription?.status === 'active' && <AccountSubscriptionManagement />}

      {/* Trial Subscription Form */}
      {subscription?.status === 'trialing' && (
        <StripeElementsProvider>
          <AccountSubscriptionStripeForm />
        </StripeElementsProvider>
      )}
    </DashPanel>
  );
}
