import { Database } from '@/assets/typescript/db';
import { createClient } from '@supabase/supabase-js';

// * Create a Supabase client with the service role key
export const supabaseAdmin = () =>
  createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
