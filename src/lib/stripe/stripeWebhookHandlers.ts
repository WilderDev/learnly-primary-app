// * Handle Create Customer ✅

import Stripe from 'stripe';
import { supabaseAdmin } from '../auth/supabaseAdmin';
import { stripe } from './stripe';

// Interface
interface ICreateCustomer {
  supabaseId: string;
  email: string;
}

// Handler
export async function handleCreateOrRetrieveCustomer({
  supabaseId,
  email,
}: ICreateCustomer) {
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
  console.log('typeof price.product:', typeof price.product);

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
  console.log('typeof price.product:', typeof price.product);

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
