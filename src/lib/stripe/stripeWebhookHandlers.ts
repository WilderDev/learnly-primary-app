// * Handle Create Customer ✅

import Stripe from 'stripe';
import { supabaseAdmin } from '../auth/supabaseAdmin';
import { stripe } from './stripe';

// * Handle Create or Retrieve Customer Event ✅
// Interface
// Interface
interface ICreateOrRetrieveCustomer {
  supabaseId: string;
  email: string;
}

// Handler
export async function handleCreateOrRetrieveCustomer({
  supabaseId,
  email,
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
  console.log('customer:', customer);
  console.log('STRIPE_DEFAULT_:', process.env.STRIPE_DEFAULT_PRICE_ID);
  // 1. Create a new Stripe Trial Subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,

    items: [{ price: process.env.STRIPE_DEFAULT_PRICE_ID as string }],
    trial_period_days: 14,
    payment_settings: {
      save_default_payment_method: 'on_subscription',
    },
    trial_settings: {
      end_behavior: {
        missing_payment_method: 'cancel',
      },
    },
  });

  console.log('subscription:', subscription);

  // 2. Insert the Subscription into the database
  const { error: subscriptionError } = await supabaseAdmin()
    .from('subscriptions')
    .insert({
      id: subscription.id,
      user_id: customer.metadata.supabaseId,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id,
      current_period_start: subscription.current_period_start.toString(),
      current_period_end: subscription.current_period_end.toString(),
      trial_start: subscription.trial_start
        ? subscription.trial_start.toString()
        : null,
      trial_end: subscription.trial_end
        ? subscription.trial_end.toString()
        : null,
      created: subscription.created.toString(),
      metadata: subscription.metadata,
      cancel_at_period_end: subscription.cancel_at_period_end,
      canceled_at: subscription.canceled_at
        ? subscription.canceled_at.toString()
        : null,
      stripe_price_id: subscription.items.data[0].price.id,
      stripe_customer_id: subscription.customer as string,
      cancel_at: subscription.cancel_at
        ? subscription.cancel_at.toString()
        : null,
      days_until_due: subscription.days_until_due ?? undefined,
    });

  console.log('subscriptionError:', subscriptionError);

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
