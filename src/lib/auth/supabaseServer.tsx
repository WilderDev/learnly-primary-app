import { headers, cookies } from 'next/headers';

import { Database } from '@/assets/typescript/db';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const supabaseServer = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
