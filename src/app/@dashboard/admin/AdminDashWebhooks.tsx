import { IAdminWebhooks } from '@/assets/typescript/admin';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function AdminDashWebhooks() {
  // * Data
  const webhooks = await getAdminWebhooks();

  // * Render
  return <></>;
}

// * Fetcher
// Gets the webhooks from the database / Stripe
async function getAdminWebhooks() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('admin_webhooks_view')
    .select('*');

  if (error) return [];

  const transformedData: IAdminWebhooks = {
    totalWebhooks: 0,
  };

  return transformedData;
}
