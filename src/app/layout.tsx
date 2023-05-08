// * Imports
import '@/assets/styles/globals.css';
import cn from '@/lib/common/cn';
import defaultMetadata from '@/lib/meta/defaultMetadata';
import { baskervville, inter } from '@/lib/typography/fonts';

import useUser from '@/lib/user/useUser';
import DashboardLayout from './@dashboard/DashboardLayout';
import { Toaster } from 'sonner';

// * Props
interface IProps {
  dashboard: React.ReactNode;
  marketing: React.ReactNode;
  onboarding: React.ReactNode;
}

// * Component
export default function RootLayout({ dashboard, marketing }: IProps) {
  // * Hooks
  const { isLoggedIn } = useUser();

  // * Render
  return (
    <html lang="en" className={cn(inter.variable, baskervville.variable)}>
      <body>
        {/* Main Content Wrapper */}
        {isLoggedIn ? (
          <DashboardLayout>{dashboard}</DashboardLayout>
        ) : (
          marketing
        )}

        {/* Custom Portal */}
        <div id="portal" />

        {/* Chat Portal */}
        <div id="chat-portal" />

        {/* Toast Container */}
        <Toaster />
      </body>
    </html>
  );
}

export const metadata = defaultMetadata;
