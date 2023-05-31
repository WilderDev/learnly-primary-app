'use client';

import { useUser } from '@/lib/components/providers/UserProvider';
import { useTheme } from '@/lib/theme/ThemeCtx';
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
  const { subscription } = useUser();
  const { theme } = useTheme();

  // * Render
  return (
    <Elements
      stripe={stripePromise}
      options={{
        customerOptions: {
          customer: subscription?.stripeCustomerId!,
          ephemeralKey: 'ephkey_1234',
        },
        paymentMethodTypes: ['card'],
        appearance: {
          theme: theme === 'dark' ? 'night' : 'stripe',
        },
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
