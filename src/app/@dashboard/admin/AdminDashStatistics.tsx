import { IAdminStatistics } from '@/assets/typescript/admin';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export default async function AdminDashStatistics() {
  // * Data
  const statistics = await getAdminStatistics();

  // * Render
  return <></>;
}

// * Fetcher
// Gets the past users from the database
async function getAdminStatistics() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('admin_statistics_view')
    .select('*');

  if (error) return [];

  const transformedData: IAdminStatistics = {
    totalUsers: 0,
    totalActiveUsers: 0,
    totalInactiveUsers: 0,
    totalMonthlySubscriptions: 0,
    totalYearlySubscriptions: 0,
    // TSK: Landing Page Visits, Trial Sign Ups, Trial Conversions, Monthly users, Annual Users, Total Revenue, etc.
  };

  return transformedData;
}
