// * Imports
import '@/assets/styles/globals.css';
import cn from '@/lib/common/cn';
import defaultMetadata from '@/lib/meta/defaultMetadata';
import { baskervville, inter } from '@/lib/typography/fonts';

import useUser from '@/lib/user/useUser';
import DashboardLayout from './@dashboard/DashboardLayout';

// * Props
interface IProps {
  dashboard: React.ReactNode;
  marketing: React.ReactNode;
  onboarding: React.ReactNode;
}

// * Component
export default async function RootLayout({ dashboard, marketing }: IProps) {
  // * Hooks
  const { isLoggedIn } = await useUser();

  // * Render
  return (
    <html lang="en" className={cn(inter.variable, baskervville.variable)}>
      <body>
        {isLoggedIn ? (
          <DashboardLayout>{dashboard}</DashboardLayout>
        ) : (
          marketing
        )}
      </body>
    </html>
  );
}

export const metadata = defaultMetadata;
