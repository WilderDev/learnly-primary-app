import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const getActiveProducts = async () => {
  const { data: products } = await stripe.products.list({
    active: true,
  });

  return products;
};

export const getActivePrices = async () => {
  const { data: prices } = await stripe.prices.list({
    active: true,
  });

  return prices;
};
