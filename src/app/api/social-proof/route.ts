import { supabaseServer } from '@/lib/auth/supabaseServer';

export async function GET() {
  try {
    const supabase = supabaseServer();

    const { data, error } = await supabase
      .from('teacher_profiles')
      .select('first_name, last_name, avatar_url, created_at')
      .order('created_at', { ascending: false })
      .gte(
        'created_at',
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      ) // Created in the last 30 days
      .limit(25);

    if (error) return new Response(error.message, { status: 500 });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (e) {
    return new Response((e as Error).message, { status: 500 });
  }
}
