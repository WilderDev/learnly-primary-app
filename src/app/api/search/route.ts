import { Database } from '@/assets/typescript/db';
import { ICalendarEvent } from '@/assets/typescript/schedule';
import { supabaseServer } from '@/lib/auth/supabaseServer';

export async function GET(request: Request) {
  // 1. Get request body
  const { query } = (await request.json()) as any;

  console.log(query);

  try {
    const supabase = supabaseServer(); // Create Supabase Server Client
  } catch (e) {
    return new Response('Error', { status: 500 });
  }
}
