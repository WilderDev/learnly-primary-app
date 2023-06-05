import { IAdminUser } from '@/assets/typescript/admin';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function AdminDashPastUsers() {
  // * Data
  const pastUsers = await getPastUsers();

  // * Render
  return <></>;
}

// * Fetcher
// Gets the past users from the database
async function getPastUsers() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('admin_past_users_view')
    .select('*');

  if (error) return [];

  const transformedData: IAdminUser[] = data.map((u) => ({
    id: u.id,
    name: u.first_name + ' ' + u.last_name,
    email: u.email,
    role: u.role,
    lastActivity: u.last_activity,
    subscriptionStatus: u.subscription,
    totalActivity: u.total_activity,
    expirationDate: u.expiration_date,
  }));

  return transformedData;
}
