'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../components/providers/AuthProvider';
import { useEffect } from 'react';
import { supabaseClient } from './supabaseClient';

// * Props
interface IProps {
  serverAccessToken?: string;
}

// * Hook
export default function AuthListener({ serverAccessToken }: IProps) {
  // * Router
  const router = useRouter();

  // * Hooks
  const { supabase: sb } = useAuth();

  // * Effects
  useEffect(() => {
    // Listen for changes
    const supabase = supabaseClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      // Refresh if the access token is different from the server
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });

    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, sb]);

  return null; // No need to render anything
}
