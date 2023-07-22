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
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';
import { revalidatePath } from 'next/cache';
import { useState } from 'react';

export default function AccountSubscriptionStripeForm() {
  // * Hooks / Context
  const { subscription } = useUser();
  const stripeClient = useStripe();
  const elements = useElements();

  // * State
  const [success, setSuccess] = useState(false);

  // * Requests / Mutations
  const { mutate: savePaymentDetailsMutation, isLoading } = useRequest(
    savePaymentDetails,
    {
      onSuccess: (data) => {
        if (data.ok) {
          setSuccess(true);
          toast.success('Your payment was successful!');
          revalidatePath('/account');
          // router.reload();
        }
      },
    },
  );

  // * Render
  return success ? (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl md:text-3xl text-center text-slate-900 dark:text-navy-50">
        Thank you 🤗 We look forward to helping your family thrive :) You got
        this!!!
      </h2>
    </div>
  ) : (
    <>
      {/* Header */}
      <header className="mb-6 border-b pb-4 border-slate-300 dark:border-navy-500">
        <h2 className="font-bold text-center text-2xl md:text-3xl text-slate-900 dark:text-navy-50">
          $5/month Forever. No Contracts. Cancel Anytime.
        </h2>

        {/* <p className="mt-3 text-base text-center text-slate-600 dark:text-navy-200">
          A WHOLE YEAR of Learnly (*All Access*) will be only one payment of{' '}
          <span className="text-slate-500 dark:text-navy-200/90">$197 USD</span>
          , and your subscription will begin immediately.{' '}
          <span className="text-slate-700 dark:text-navy-200/70">
            This is a one-time offer and will not be available after your trial
            ends.
          </span>
        </p> */}
      </header>

      {/* Form */}
      <Form
        className="px-8 md:px-12 xl:px-14"
        id="payment-form"
        action={async () => {
          elements!.submit();

          const { paymentMethod, error } =
            await stripeClient!.createPaymentMethod({
              elements: elements!,
            });
          if (error) return toast.error(error.message);

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
          shadow="lg"
          size="lg"
          disabled={isLoading}
          loading={isLoading}
        >
          Claim my Special Offer!
        </Button>

        <span className="block text-center col-span-4 text-xs text-slate-600 -mt-3">
          *
          <span className="font-medium text-slate-700">Limited Time Offer</span>
          : We can&apos;t promise this deal will be around forever.
        </span>
      </Form>
    </>
  );
}
