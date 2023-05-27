'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

// * Data
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!);

// * Initialization
// Props
interface IStripeElementsCtxProps {} // Create an interface for the context props

// Initial State
const initialState: IStripeElementsCtxProps = {}; // Create a context object with default value

// Context
const StripeElementsCtx = createContext(initialState); // Create Context Object

// * Provider
export function StripeElementsProvider({ children }: PropsWithChildren) {
  // * Hooks / Context
  const { subscription } = useUser(); // TSK: If they are subscribed, we need to show them their subscription details

  // * State
  const [selectedOption, setSelectedOption] = useState('annual');

  // * Handlers

  // * Effects

  // * Value

  // * Render
  return (
    <Elements
      stripe={stripePromise}
      options={{
        customerOptions: {
          customer: subscription?.stripeCustomerId!,
          ephemeralKey: 'ephkey_1234',
        },
        appearance: {
          theme: 'stripe',
          variables: {
            // TSK
          },
        },
        fonts: [], // TSK
        mode: 'subscription',
        currency: 'usd',
        amount: 999,
        paymentMethodCreation: 'manual',
      }}
    >
      {children}
    </Elements>
  );
}

// * Hooks
export function useStripeElements() {
  const ctx = useContext(StripeElementsCtx);

  if (!ctx) {
    throw new Error(
      'useStripeElements must be used within a StripeElementsProvider',
    );
  }

  return ctx;
}
