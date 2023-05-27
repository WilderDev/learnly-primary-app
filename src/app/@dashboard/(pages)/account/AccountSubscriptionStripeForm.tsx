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
            Get 3 Months Free!
          </Button>
        </Form>
      )}
    </>
  );
}

// TSK: if they have 3 days left in trial tell them they will receive discount if they pay now
// TSK: Show them the price???
// TSK: Show them the plan they are signing up for and if they want to change it they can click the button
// TSK: Show them a message about how much they will save if they pay now!
