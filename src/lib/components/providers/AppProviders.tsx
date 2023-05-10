import { supabaseServer } from '@/lib/auth/supabaseServer';
import { PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return <UserProvider>{children}</UserProvider>;
}
