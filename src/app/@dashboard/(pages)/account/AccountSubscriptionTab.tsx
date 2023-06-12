'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import AccountSubscriptionStripeForm from './AccountSubscriptionStripeForm';
import { StripeElementsProvider } from './StripeElementsCtx';
import AccountSubscriptionManagement from './AccountSubscriptionManagement';

// * Component
export default function AccountSubscriptionTab() {
  // * Hooks / Context
  const { subscription } = useUser();

  // * Render
  return subscription?.status === 'active' ? (
    <section className="flex flex-col 2xl:flex-row 2xl:justify-between gap-y-12 2xl:gap-y-0 2xl:gap-x-12">
      {/* Plan Details / Management */}
      <DashPanel className="w-full 2xl:w-7/12" colNum={1}>
        <AccountSubscriptionManagement />
      </DashPanel>
    </section>
  ) : (
    <DashPanel className="w-full 2xl:w-9/12" colNum={1}>
      <StripeElementsProvider>
        <AccountSubscriptionStripeForm />
      </StripeElementsProvider>
    </DashPanel>
  );
}
