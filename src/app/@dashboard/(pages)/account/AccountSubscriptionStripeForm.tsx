'use client';

import Form from '@/lib/components/form/Form';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { toast } from 'sonner';
import { useUser } from '@/lib/components/providers/UserProvider';
import Button from '@/lib/components/ui/Button';
import { useRequest } from '@/lib/hooks/useRequest';
import { savePaymentDetails } from './_actions';
import { revalidatePath } from 'next/cache';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';

export default function AccountSubscriptionStripeForm() {
  // * Hooks / Context
  const { subscription } = useUser();
  const stripeClient = useStripe();
  const elements = useElements();

  // * Requests / Mutations
  const { mutate: savePaymentDetailsMutation, isLoading } = useRequest(
    savePaymentDetails,
    {
      onSuccess: (data) => {
        if (data.ok) {
          toast.success('Your payment was successful!');
          revalidatePath('/account'); // ✅
        } else {
          toast.error(
            'Something went wrong! Please contact support if this continues.',
          );
        }
      },
    },
  );

  // * Render
  return (
    <>
      {subscription?.status === 'active' ? (
        <>
          <h1>You are already subscribed!</h1>
          {/* TSK */}
          {/* Next Billing Cycle */}
          {/* Current Plan */}
          {/* Update Subscription Button */}
          {/* Update Payment Method */}
        </>
      ) : (
        <>
          {/* Header */}
          <header className="mb-6 border-b pb-4 border-slate-300 dark:border-navy-500">
            <h2 className="font-bold text-center text-2xl md:text-3xl text-slate-900 dark:text-navy-50">
              Get 3 Months Free{' '}
              <span className="text-green-600 leading-9 dark:text-green-500 italics">
                (And Save Over $100+)
              </span>{' '}
              When You Pay Before{' '}
              {getDatestringFromTimestamp(subscription?.trialEnd!)}!
            </h2>

            <p className="mt-3 text-base text-slate-700 dark:text-navy-100">
              You will be charged{' '}
              <span className="font-medium text-slate-600 dark:text-navy-200">
                $297 USD
              </span>
              , for a whole year of Learnly (ALL ACCESS), and your subscription
              will begin immediately.
            </p>
          </header>

          {/* Form */}
          <Form
            id="payment-form"
            action={async () => {
              elements!.submit();

              const { paymentMethod, error } =
                await stripeClient!.createPaymentMethod({
                  elements: elements!,
                });

              savePaymentDetailsMutation({
                paymentMethodId: paymentMethod?.id!,
                customerId: subscription?.stripeCustomerId!,
                subscriptionId: subscription?.stripeSubscriptionId!,
              });
            }}
          >
            {/* Card Details */}
            <PaymentElement
              className="col-span-4"
              id="payment-element"
              options={{
                layout: 'tabs',
              }}
            />

            {/* Submit */}
            <Button
              className="col-span-4"
              id="submit"
              type="submit"
              disabled={isLoading}
              loading={isLoading}
            >
              Claim my 3 Free Months!
            </Button>

            <span className="block text-center col-span-4 text-xs text-slate-600 -mt-3">
              *
              <span className="font-medium text-slate-700">
                Limited Time Offer
              </span>
              : We can&apos;t promise this deal will be around forever.
            </span>
          </Form>
        </>
      )}
    </>
  );
}

// TSK: if they have 3 days left in trial tell them they will receive discount if they pay now
// TSK: Show them the price???
// TSK: Show them the plan they are signing up for and if they want to change it they can click the button
// TSK: Show them a message about how much they will save if they pay now!
