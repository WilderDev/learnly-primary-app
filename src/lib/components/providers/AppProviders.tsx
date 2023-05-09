import { supabaseServer } from '@/lib/auth/supabaseServer';
import { PropsWithChildren } from 'react';

export default function AppProviders({ children }: PropsWithChildren) {
  // * Render
  return <>{children}</>;
}
