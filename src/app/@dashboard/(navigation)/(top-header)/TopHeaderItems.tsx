import MonochromeTogglerBtn from '@/lib/theme/MonochromeTogglerBtn';
import dynamic from 'next/dynamic';
import TopHeaderNotifications from './TopHeaderNotifications';
import RightSidebarToggler from '../(right-sidebar)/RightSidebarToggler';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { INotification } from '@/assets/typescript/notification';

const ThemeTogglerButton = dynamic(() => import('@/lib/theme/ThemeTogglerBtn'));

export default async function TopHeaderItems() {
  // * Data
  const notifications = await getNotifications();

  // * Render
  return (
    <ul className="flex items-center space-x-4">
      {/* Theme Toggler */}
      <li>
        <ThemeTogglerButton />
      </li>

      {/* Monochrome toggler */}
      <li>
        <MonochromeTogglerBtn />
      </li>

      {/* Notificiations */}
      <li className="relative">
        <TopHeaderNotifications notifications={notifications} />
      </li>

      {/* Quick Report Menu Toggler */}
      <li>
        <RightSidebarToggler />
      </li>
    </ul>
  );
}

// * Fetcher
async function getNotifications() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('user_notifications_view')
    .select('*')
    .order('status', { ascending: true })
    .limit(7);

  if (error) return [];

  const transformedNotifications = data.map((n) => ({
    id: n.id!,
    title: n.title!,
    body: n.body!,
    status: n.status!,
    type: n.type!,
    sent_at: n.sent_at!,
    read_at: n.read_at,
    from: {
      id: n.sender_id!,
      name: `${n.sender_first_name} ${n.sender_last_name}`,
      avatar: n.sender_avatar_url!,
    },
  })) as INotification[];

  return transformedNotifications;
}
