import '@/assets/styles/globals.css';
import cn from '@/lib/common/cn';
import defaultMetadata from '@/lib/meta/defaultMetadata';
import { baskervville, inter } from '@/lib/typography/fonts';

import useUser from '@/lib/user/useUser';

interface IProps {
  dashboard: React.ReactNode;
  marketing: React.ReactNode;
}

export default async function RootLayout({ dashboard, marketing }: IProps) {
  const { isLoggedIn } = await useUser();

  return (
    <html lang="en" className={cn(inter.variable, baskervville.variable)}>
      <body>{isLoggedIn ? dashboard : marketing}</body>
    </html>
  );
}

export const metadata = defaultMetadata;
