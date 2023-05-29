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
          revalidatePath('/account');
        }
      },
    },
  );

  // * Render
  return (
    <>
      {/* Header */}
      <header className="mb-6 border-b pb-4 border-slate-300 dark:border-navy-500">
        <h2 className="font-bold text-center text-2xl md:text-3xl text-slate-900 dark:text-navy-50">
          Get 3 Months Free{' '}
          <span className="text-green-600 leading-9 dark:text-green-500 italics">
            (And Save Over $300+)
          </span>{' '}
          When You Pay Before{' '}
          {getDatestringFromTimestamp(subscription?.trialEnd!)}!
        </h2>

        <p className="mt-3 text-base text-center text-slate-600 dark:text-navy-200">
          You will be charged{' '}
          <span className="text-slate-500 dark:text-navy-200/90">$297 USD</span>
          , for a whole year of Learnly (ALL ACCESS), and your subscription will
          begin immediately.{' '}
          <span className="text-slate-700 dark:text-navy-200/70">
            This is a one-time offer and will not be available after your trial
            ends.
          </span>
        </p>
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
            isEarlyPurchase: true,
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
          className="col-span-4 uppercase"
          id="submit"
          type="submit"
          shadow="lg"
          size="lg"
          disabled={isLoading}
          loading={isLoading}
        >
          Claim my 3 Free Months! 🎉
        </Button>

        <span className="block text-center col-span-4 text-xs text-slate-600 -mt-3">
          *
          <span className="font-medium text-slate-700">Limited Time Offer</span>
          : We can&apos;t promise this deal will be around forever.{' '}
          <a
            className="font-light hocus:text-slate-800 transition-colors duration-200"
            href={process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PLAN_URL}
            target="_blank"
          >
            See Monthly →
          </a>
        </span>
      </Form>
    </>
  );
}
