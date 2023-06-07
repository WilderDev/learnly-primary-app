import { stripe } from '@/lib/stripe/stripe';

export default async function AdminDashWebhooks() {
  // * Data
  const webhooks = await getAdminWebhooks();

  // * Render
  return (
    <ul className="flex flex-col gap-y-2">
      {webhooks?.map((wh) => (
        <li className="flex justify-between px-2 " key={wh.id}>
          <span>{wh.type}</span>
        </li>
      ))}
    </ul>
  );
}

// * Fetcher
// Gets the webhooks from the database / Stripe
async function getAdminWebhooks() {
  const res = await stripe.events.list({
    limit: 25,
    delivery_success: true,
  });

  const webhooks = res.data;

  if (!webhooks) return null;

  const transformedData = webhooks.map((wh) => ({
    id: wh.id,
    type: wh.type,
    created: wh.created,
    data: wh.data,
  }));

  return transformedData;
}
