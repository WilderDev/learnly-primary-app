// * Handle Create Customer ✅

import Stripe from 'stripe';
import { supabaseAdmin } from '../auth/supabaseAdmin';
import { stripe } from './stripe';
import { secondsToIso } from '../common/date.helpers';
import baseUrl from '../common/baseUrl';
import { redirect } from 'next/navigation';

// * Handle Create or Retrieve Customer Event ✅
// Interface
// Interface
interface ICreateOrRetrieveCustomer {
  supabaseId: string;
  email: string;
  name: string;
}

// Handler
export async function handleCreateOrRetrieveCustomer({
  supabaseId,
  email,
  name,
}: ICreateOrRetrieveCustomer) {
  // 1. Check if the Customer already exists in the database
  const { data: customer } = await supabaseAdmin()
    .from('customers')
    .select('stripe_customer_id')
    .eq('id', supabaseId)
    .single();

  // 2. If the Customer exists, return the Stripe Customer Id
  if (customer?.stripe_customer_id)
    return {
      stripeCustomerId: customer.stripe_customer_id,
      isNewCustomer: false,
    };

  // 3. Otherwise Create the Customer in Stripe
  const stripeCustomer = await stripe.customers.create({
    email,
    name,
    // promotion_code
    metadata: {
      supabaseId,
    },
  });

  // 4. Insert the Customer into the database
  const { error: customerError } = await supabaseAdmin()
    .from('customers')
    .insert({
      id: supabaseId,
      stripe_customer_id: stripeCustomer.id,
    });

  // 5. Check if there was an error inserting the Customer
  if (customerError) throw new Error(customerError.message);

  // 6. Return the Stripe Customer Id
  return {
    stripeCustomerId: stripeCustomer.id,
    isNewCustomer: true,
  };
}

// * Handle Customer Created Event ✅
// Interface
interface ICreateCustomer {
  customer: Stripe.Customer;
}

// Handler
export async function handleCreateCustomer({ customer }: ICreateCustomer) {
  // 1. Create a new Stripe Trial Subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: process.env.STRIPE_DEFAULT_PRICE_ID as string }],
    trial_period_days: 14,
    // payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription',
    },
    trial_settings: {
      end_behavior: {
        missing_payment_method: 'create_invoice',
      },
    },
  });

  // 2. Insert the Subscription into the database
  const { error: subscriptionError } = await supabaseAdmin()
    .from('subscriptions')
    .insert({
      id: subscription.id,
      user_id: customer.metadata.supabaseId,
      items: subscription.items.data as any,
      status: subscription.status,
      description: subscription.description || '',
      stripe_product_id: subscription.items.data[0].price.product as string,
      current_period_start: secondsToIso(subscription.current_period_start),
      current_period_end: secondsToIso(subscription.current_period_end),
      trial_start: subscription.trial_start
        ? secondsToIso(subscription.trial_start)
        : null,
      trial_end: subscription.trial_end
        ? secondsToIso(subscription.trial_end)
        : null,
      metadata: subscription.metadata,
      cancel_at_period_end: subscription.cancel_at_period_end,
      canceled_at: subscription.canceled_at
        ? secondsToIso(subscription.canceled_at)
        : null,
      stripe_price_id: subscription.items.data[0].price.id,
      stripe_customer_id: subscription.customer as string,
      cancel_at: subscription.cancel_at
        ? secondsToIso(subscription.cancel_at)
        : null,
    });

  // 3. Check if there was an error inserting the Subscription
  if (subscriptionError) throw new Error(subscriptionError.message);
}

// * Handle Customer Deleted Event ✅
// Interface
interface IDeleteCustomer {
  customerId: string;
}

// Handler
export async function handleDeleteCustomer({ customerId }: IDeleteCustomer) {
  // 1. Delete the Customer from the database
  const { error: customerError } = await supabaseAdmin()
    .from('customers')
    .delete()
    .eq('id', customerId);

  // 2. Check if there was an error deleting the Customer
  if (customerError) throw new Error(customerError.message);
}

// * Handle Customer Subscription Trial Will End Event ✅
// Interface
interface ITrialWillEnd {
  subscription: Stripe.Subscription;
}

// Handler
export async function handleTrialWillEnd({ subscription }: ITrialWillEnd) {
  // 1. Get the customers paymentMethods
  const paymentMethods = await stripe.paymentMethods.list({
    customer: subscription.customer as string,
    type: 'card',
  });

  // TSK: Probably check if they already paid the trial????

  // 2. Get the customer supabaseId
  const { data: customer } = await supabaseAdmin()
    .from('customers')
    .select('id, stripe_customer_id')
    .eq('stripe_customer_id', subscription.customer as string)
    .single();

  // 3. Ensure there is a payment method -> Notify either way
  if (paymentMethods.data.length < 1) {
    // 3a1. Create a portal session to allow the user to add a payment method
    const url = await handleCreateBillingPortalSession({
      customerId: customer?.stripe_customer_id!,
    });

    // 3a2. Save Billing Url to Customer
    await supabaseAdmin()
      .from('customers')
      .update({ billing_portal_session_url: url })
      .eq('id', customer?.id);

    // 3a3. Send Notification to User
    await supabaseAdmin().from('notifications').insert({
      recipient_id: customer?.id!,
      title: 'Payment Method Required',
      body: `Please add a payment method to continue your subscription by following this link:`,
      action_text: 'Add Payment Method',
      action_url: url,
      type: 'BILLING',
      sent_at: new Date().toISOString(),
      status: 'SENT',
    });
  } else {
    // 3b. Send Notification to User
    await supabaseAdmin().from('notifications').insert({
      recipient_id: customer?.id!,
      title: 'You have an upcoming payment',
      body: 'Your subscription will renew soon.',
      type: 'BILLING',
      sent_at: new Date().toISOString(),
      status: 'SENT',
    });
  }
}

// * Create Billing Portal Session ✅
// Interface
interface ICreateBillingPortalSession {
  customerId: string;
}

// Handler
export async function handleCreateBillingPortalSession({
  customerId,
}: ICreateBillingPortalSession) {
  // 1. Create a portal session
  const { url } = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: baseUrl,
    flow_data: {
      type: 'payment_method_update',
      after_completion: {
        type: 'redirect',
        redirect: {
          return_url: `${baseUrl}/account`,
        },
      },
    },
  });

  // 2. Return the URL
  return url;
}

// * Handle Product Created Event ✅
// Interface
interface ICreateProduct {
  product: Stripe.Product;
}

// Handler
export async function handleCreateProduct({ product }: ICreateProduct) {
  // 1. Insert the product into the database
  const { error: productError } = await supabaseAdmin()
    .from('products')
    .insert({
      id: product.id,
      active: product.active,
      name: product.name,
      description: product.description || '',
      image: product.images[0],
      metadata: product.metadata,
    });

  // 2. Check if there was an error inserting the product
  if (productError) throw new Error(productError.message);
}

// * Handle Product Updated Event ✅
// Interface
interface IUpdateProduct {
  product: Stripe.Product;
}

// Handler
export async function handleUpdateProduct({ product }: IUpdateProduct) {
  // 1. Update the product in the database
  const { error: productError } = await supabaseAdmin()
    .from('products')
    .update({
      id: product.id,
      active: product.active,
      name: product.name,
      description: product.description || '',
      image: product.images[0],
      metadata: product.metadata,
    })
    .eq('id', product.id);

  // 2. Check if there was an error updating the product
  if (productError) throw new Error(productError.message);
}

// * Handle Product Deleted Event ✅
// Interface
interface IDeleteProduct {
  productId: string;
}

// Handler
export async function handleDeleteProduct({ productId }: IDeleteProduct) {
  // 1. Delete the product from the database
  const { error: productError } = await supabaseAdmin()
    .from('products')
    .delete()
    .eq('id', productId);

  // 2. Check if there was an error deleting the product
  if (productError) throw new Error(productError.message);
}

// * Handle Price Created Event ✅
// Interface
interface ICreatePrice {
  price: Stripe.Price;
}

// Handler
export async function handleCreatePrice({ price }: ICreatePrice) {
  // 1. Insert the price into the database
  const { error: priceError } = await supabaseAdmin()
    .from('prices')
    .insert({
      id: price.id,
      type: price.type,
      active: price.active,
      currency: price.currency,
      unit_amount: price.unit_amount,
      interval: price.recurring?.interval,
      interval_count: price.recurring?.interval_count,
      trial_period_days: price.recurring?.trial_period_days,
      metadata: price.metadata,
      product_id:
        typeof price.product === 'string' ? price.product : price.product.id,
    });

  // 2. Check if there was an error inserting the price
  if (priceError) throw new Error(priceError.message);
}

// * Handle Price Updated Event ✅
// Interface
interface IUpdatePrice {
  price: Stripe.Price;
}

// Handler
export async function handleUpdatePrice({ price }: IUpdatePrice) {
  // 1. Update the price in the database
  const { error: priceError } = await supabaseAdmin()
    .from('prices')
    .update({
      id: price.id,
      type: price.type,
      active: price.active,
      currency: price.currency,
      unit_amount: price.unit_amount,
      interval: price.recurring?.interval,
      interval_count: price.recurring?.interval_count,
      trial_period_days: price.recurring?.trial_period_days,
      metadata: price.metadata,
      product_id:
        typeof price.product === 'string' ? price.product : price.product.id,
    });

  // 2. Check if there was an error updating the price
  if (priceError) throw new Error(priceError.message);
}

// * Handle Price Deleted Event ✅
// Interface
interface IDeletePrice {
  priceId: string;
}

// Handler
export async function handleDeletePrice({ priceId }: IDeletePrice) {
  // 1. Delete the price from the database
  const { error: priceError } = await supabaseAdmin()
    .from('prices')
    .delete()
    .eq('id', priceId);

  // 2. Check if there was an error deleting the price
  if (priceError) throw new Error(priceError.message);
}

// * Handle Subscription Updated Event ✅
// Interface
interface IUpdateSubscription {
  subscription: Stripe.Subscription;
}

// Handler
export async function handleUpdateSubscription({
  subscription,
}: IUpdateSubscription) {
  // 1. Get the subscription from Stripe
  const {
    id,
    metadata,
    status,
    items,
    cancel_at_period_end,
    cancel_at,
    canceled_at,
    current_period_start,
    current_period_end,
    ended_at,
    trial_start,
    trial_end,
  } = await stripe.subscriptions.retrieve(subscription.id);

  // 2. Update the subscription in the database
  const { error: subscriptionError } = await supabaseAdmin()
    .from('subscriptions')
    .update({
      id,
      user_id: metadata.supabaseId,
      items: items.data as any,
      status,
      cancel_at_period_end,
      cancel_at: cancel_at ? secondsToIso(cancel_at) : null,
      canceled_at: canceled_at ? secondsToIso(canceled_at) : null,
      current_period_start: secondsToIso(current_period_start),
      current_period_end: secondsToIso(current_period_end),
      ended_at: ended_at ? secondsToIso(ended_at) : null,
      trial_start: trial_start ? secondsToIso(trial_start) : null,
      trial_end: trial_end ? secondsToIso(trial_end) : null,
    })
    .eq('id', id);

  // 3. Check if there was an error updating the subscription
  if (subscriptionError) throw new Error(subscriptionError.message);

  // 4. Check if the subscription is canceled | past_due | unpaid | incomplete_expired
  if (
    status === 'canceled' ||
    status === 'unpaid' ||
    status === 'incomplete_expired'
  ) {
    // 4a. Update the user's role
    await supabaseAdmin()
      .from('teacher_profiles')
      .update({
        role: 'BANNISHED',
      })
      .eq('user_id', metadata.supabaseId);

    // 4b. Log the user out
    await supabaseAdmin().auth.signOut();

    // 4c. Delete the user's subscription
    await stripe.subscriptions.del(subscription.id);
  }

  // 5. Check if the subscription is incomplete
  if (status === 'incomplete' || status === 'paused' || status === 'past_due') {
    // 5a. Create billing portal session
    const url = await handleCreateBillingPortalSession({
      customerId: metadata.supabaseId,
    });

    // 5b. Send the user a notification
    await supabaseAdmin().from('notifications').insert({
      title: 'Subscription Incomplete',
      body: 'Your subscription is incomplete. Please try again.',
      type: 'BILLING',
      recipient_id: metadata.supabaseId,
      action_text: 'Manage Subscription',
      action_url: url,
    });

    redirect(url);
  }

  // 6. Check if the subscription is active
  if (status === 'active') {
    // 6a. TSK
    //
  }
}

// * Handle Subscription Deleted Event ✅
// Interface
interface IDeleteSubscription {
  subscriptionId: string;
}

// Handler
export async function handleDeleteSubscription({
  subscriptionId,
}: IDeleteSubscription) {
  // 1. Delete the subscription from the database
  // const { error: subscriptionError } = await supabaseAdmin()
  //   .from('subscriptions')
  //   .delete()
  //   .eq('id', subscriptionId);
  // 2. Check if there was an error deleting the subscription
  // if (subscriptionError) throw new Error(subscriptionError.message);
  // 1. Pause the subscription in SB
  const { error: subscriptionError } = await supabaseAdmin()
    .from('subscriptions')
    .update({
      status: 'incomplete',
    })
    .eq('id', subscriptionId);

  // 2. Check if there was an error updating the subscription
  if (subscriptionError) throw new Error(subscriptionError.message);
}
