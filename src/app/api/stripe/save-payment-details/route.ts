import { stripe } from '@/lib/stripe/stripe';

export async function POST(request: Request) {
  const {
    paymentMethodId,
    customerId,
    subscriptionId,
    isEarlyPurchase = false,
  } = (await request.json()) as {
    paymentMethodId: string;
    customerId: string;
    subscriptionId: string;
    isEarlyPurchase?: boolean;
  };

  const paymentMethod = await stripe.paymentMethods.attach(paymentMethodId, {
    customer: customerId,
  });

  if (!paymentMethod) {
    return new Response(JSON.stringify({ status: 'failure' }), {
      status: 500,
    });
  }

  const customerUpdate = await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethod.id,
    },
  });

  if (!customerUpdate) {
    return new Response(JSON.stringify({ status: 'failure' }), {
      status: 500,
    });
  }

  const subscriptionUpdate = await stripe.subscriptions.update(subscriptionId, {
    trial_end: 'now',
    coupon: isEarlyPurchase ? process.env.EARLY_PURCHASE_COUPON_ID! : undefined,
  });

  if (!subscriptionUpdate || subscriptionUpdate.status !== 'active') {
    return new Response(JSON.stringify({ status: 'failure' }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ status: 'success' }), {
    status: 200,
  });
}
