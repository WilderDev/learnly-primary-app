import { IAdminUser } from '@/assets/typescript/admin';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import cn from '@/lib/common/cn';
import { getDatestringFromTimestamp } from '@/lib/common/date.helpers';
import { Card, CardContainer } from '@/lib/components/ui/Card';
import { getSubscriptionStatusColors } from '@/lib/theme/enumColors';

export default async function AdminDashTrialUsers() {
  // * Data
  const trialUsers = await getTrialUsers();

  // * Render
  return (
    <CardContainer>
      {trialUsers?.map((u) => (
        <Card key={u.id}>
          <Card.Title>{u.name}</Card.Title>

          <p className="text-sm text-slate-700 dark:text-navy-100 italic">
            {u.email}
          </p>

          <Card.Bubble
            colors={
              getSubscriptionStatusColors(u.subscriptionStatus).BLEND.SUBDUED
            }
            content={u.subscriptionStatus}
          />

          <Card.Footer className="mt-4">
            {/* Last Activity */}
            <p className="text-slate-600 text-xs dark:text-navy-200">
              Last Activity:{' '}
              <span className="text-slate-700 text-sm dark:text-navy-100">
                {getDatestringFromTimestamp(u.lastActivity)}
              </span>
            </p>

            {/* Expires */}
            <p className="text-slate-600 text-xs dark:text-navy-200">
              Expires:{' '}
              <span
                className={cn(
                  'text-slate-700 text-sm dark:text-navy-100',
                  u.expirationDate < new Date().toISOString() && 'text-red-500',
                )}
              >
                {getDatestringFromTimestamp(u.expirationDate, true, true, true)}
              </span>
            </p>
          </Card.Footer>
        </Card>
      ))}
    </CardContainer>
  );
}

// * Fetcher
// Gets the trial users from the database
async function getTrialUsers() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('admin_trial_users_view')
    .select('*')
    .order('expiration_date', { ascending: true })
    .order('last_activity', { ascending: false });

  if (error) return [];

  const transformedData: IAdminUser[] = data.map((u) => ({
    id: u.id!,
    name: u.first_name + ' ' + u.last_name,
    email: u.email!,
    role: u.role!,
    lastActivity: u.last_activity!,
    subscriptionStatus: u.subscription_status!,
    expirationDate: u.expiration_date!,
  }));

  return transformedData;
}
