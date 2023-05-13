// * IMPORTS
import { stripe } from '@/lib/stripe/stripe';
import { headers } from 'next/headers';
import Stripe from 'stripe';

import {
  handleCreatePrice,
  handleCreateProduct,
  handleDeletePrice,
  handleDeleteProduct,
  handleUpdatePrice,
  handleUpdateProduct,
} from '@/lib/stripe/stripeWebhookHandlers';

// * CONSTANTS
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!; // Retrieve the endpoint secret from the environment variables

// * HELPERS
// Disable body parsing since we are retrieving the raw body
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export const runtime = 'edge'; // Set the runtime to Edge

// * EVENTS
// Webhook Events to listen for: https://stripe.com/docs/api/events/types
const relevantEvents: Stripe.Event['type'][] = [
  'product.created', // => Create Product Record ✅
  'product.updated', // => Update Product Record ✅
  'product.deleted', // => Delete Product Record ✅
  'price.created', // => Create Price Record ✅
  'price.updated', // => Update Price Record ✅
  'price.deleted', // => Delete Price Record ✅
  //   . . .
];

// * API ROUTE
// Stripe Webhook POST Route
export async function POST(request: Request) {
  const body = await request.text(); // Retrieve the request's body
  const sig = headers().get('stripe-signature')!; // Retrieve the signature from the request header

  let event: Stripe.Event; // Declare the event variable

  // Verify the request against the endpoint secret
  try {
    // Construct the event from the raw body and signature
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return new Response('Webhook Error: ' + err, { status: 400 }); // Return a response with error message
  }

  // * HANDLERS
  // Run proper handler for relevant events
  if (relevantEvents.includes(event.type)) {
    const evt = event.data.object;

    switch (event.type) {
      // *** Handle product.created event *** \\
      case 'product.created':
        await handleCreateProduct({ product: evt as Stripe.Product }); // Run the handler function

        break; // Exit switch statement
      // *** Handle product.updated event *** \\
      case 'product.updated':
        await handleUpdateProduct({ product: evt as Stripe.Product }); // Run the handler function

        break; // Exit switch statement
      // *** Handle product.deleted event *** \\
      case 'product.deleted':
        await handleDeleteProduct({ productId: (evt as Stripe.Product).id }); // Run the handler function

        break; // Exit switch statement
      // *** Handle price.created event *** \\
      case 'price.created':
        await handleCreatePrice({ price: evt as Stripe.Price }); // Run the handler function

        break; // Exit switch statement
      // *** Handle price.updated event *** \\
      case 'price.updated':
        await handleUpdatePrice({ price: evt as Stripe.Price }); // Run the handler function

        break; // Exit switch statement
      // *** Handle price.deleted event *** \\
      case 'price.deleted':
        await handleDeletePrice({ priceId: (evt as Stripe.Price).id }); // Run the handler function

        break; // Exit switch statement
      // *** Handle default case *** \\
      default:
        return new Response('Unhandled relevant event', { status: 400 }); // Return a response with error message
    }
  }

  return new Response('Webhook received', { status: 200 }); // Return a response with success message
}
