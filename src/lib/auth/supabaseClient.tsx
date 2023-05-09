import { Database } from '@/assets/typescript/db';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const supabaseClient = () => createBrowserSupabaseClient<Database>();
