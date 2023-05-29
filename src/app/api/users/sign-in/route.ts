import { supabaseServer } from '@/lib/auth/supabaseServer';
import baseUrl from '@/lib/common/baseUrl';

export async function POST(request: Request) {
  const { email, redirectUrl } = await request.json();

  const supabase = supabaseServer();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${baseUrl}/${redirectUrl ?? ''}`,
      shouldCreateUser: false,
    },
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ message: 'Success' }), {
    status: 200,
  });
}
