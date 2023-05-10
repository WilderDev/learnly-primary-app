'use client';

import { Database } from '@/assets/typescript/db';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import { Session, SupabaseClient } from '@supabase/supabase-js';
import { useContext, useState } from 'react';
import { createContext } from 'react';

// * Context
// Interface
interface IAuthCtx {
  supabase: SupabaseClient<Database>;
  session: Session | null;
}

// Initial Value
const AuthCtx = createContext<IAuthCtx>({
  supabase: {} as SupabaseClient<Database>,
  session: null,
});

// * Props
interface IProps {
  children: React.ReactNode;
  session: Session | null;
}

export function AuthProvider({ children, session }: IProps) {
  // * State
  const [supabase] = useState(() => supabaseClient());

  // * Value
  const value = {
    supabase,
    session,
  };

  // * Render
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

// * Hooks
export function useAuth() {
  const ctx = useContext(AuthCtx);

  if (!ctx) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return ctx;
}
