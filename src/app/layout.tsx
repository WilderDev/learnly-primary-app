import useUser from '@/lib/user/useUser';
import { PropsWithChildren } from 'react';

export default async function RootLayout({ children }: PropsWithChildren) {
  const { isLoggedIn } = await useUser();

  return isLoggedIn ? <ParentDashboardPage /> : <MarketingLandingPage />;
}
