import { IAdminStatistics } from '@/assets/typescript/admin';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function AdminDashStatistics() {
  // * Data
  const statistics = await getAdminStatistics();

  // * Render
  return (
    <ul className="flex flex-col gap-y-4 font-medium text-slate-800 dark:text-navy-100">
      <li>
        Total Trial Sign Ups:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.totalTrialSignUps}
        </span>
      </li>

      <li>
        Monthly Trial Sign Ups:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.monthlyTrialSignUps}
        </span>
      </li>

      <li>
        Total Trial Conversions:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.totalTrialConversions}
        </span>
      </li>

      <li>
        Monthly Trial Conversions:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.monthlyTrialConversions}
        </span>
      </li>

      <li>
        Active Monthly Users:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.activeMonthlyUsers}
        </span>
      </li>

      <li>
        Active Yearly Users:{' '}
        <span className="text-slate-600 dark:text-navy-200">
          {statistics?.activeYearlyUsers}
        </span>
      </li>
    </ul>
  );
}

// * Fetcher
// Gets the past users from the database
async function getAdminStatistics() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('admin_statistics_view')
    .select('*')
    .single();

  if (error || !data) return null;

  const transformedData: IAdminStatistics = {
    totalTrialSignUps: data.total_trial_sign_ups!,
    monthlyTrialSignUps: data.monthly_trial_sign_ups!,
    totalTrialConversions: data.total_trial_conversions!,
    monthlyTrialConversions: data.monthly_trial_conversions!,
    activeMonthlyUsers: data.monthly_active_users!,
    activeYearlyUsers: data.annual_active_users!,
  };

  return transformedData;
}

// Get Page Views from Vercel Analytics
// Get Total Revenue from Stripe
