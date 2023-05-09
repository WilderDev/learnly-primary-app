// * Imports
import '@/assets/styles/globals.css';
import cn from '@/lib/common/cn';
import defaultMetadata from '@/lib/meta/defaultMetadata';
import { baskervville, inter } from '@/lib/typography/fonts';

import useUser from '@/lib/user/useUser';
import DashboardLayout from './@dashboard/DashboardLayout';
import Toast from '@/lib/components/ux/Toast';
import AppProviders from '@/lib/components/providers/AppProviders';
import { AuthProvider } from '@/lib/components/providers/AuthProvider';
import AuthListener from '@/lib/auth/AuthListener';
import { supabaseServer } from '@/lib/auth/supabaseServer';

// * Props
interface IProps {
  dashboard: React.ReactNode;
  marketing: React.ReactNode;
  onboarding: React.ReactNode;
}

// * Component
export default async function RootLayout({ dashboard, marketing }: IProps) {
  // * Hooks
  const supabase = supabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('session:', session);

  // * Render
  return (
    <html lang="en" className={cn(inter.variable, baskervville.variable)}>
      <body>
        <AuthProvider session={session}>
          <AuthListener serverAccessToken={session?.access_token} />

          <AppProviders>
            {/* Main Content Wrapper */}
            {session?.user ? (
              <DashboardLayout>{dashboard}</DashboardLayout>
            ) : (
              marketing
            )}

            {/* Custom Portal */}
            <div id="portal" />

            {/* Chat Portal */}
            <div id="chat-portal" />

            {/* Toast Container */}
            <Toast />
          </AppProviders>
        </AuthProvider>
      </body>
    </html>
  );
}

export const metadata = defaultMetadata;
