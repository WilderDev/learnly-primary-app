import { supabaseServer } from '@/lib/auth/supabaseServer';
import { PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider';
import { ThemeProvider } from '@/lib/theme/ThemeCtx';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return (
    // <ThemeProvider>
    <UserProvider>{children}</UserProvider>
    // </ThemeProvider>
  );
}
