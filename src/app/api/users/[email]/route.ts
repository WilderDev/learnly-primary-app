import { supabaseAdmin } from '@/lib/auth/supabaseAdmin';

export interface IUserGetByEmailReq {
  params: {
    email: string;
  };
}

export async function GET(request: Request, { params }: IUserGetByEmailReq) {
  try {
    const supabase = supabaseAdmin();

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', params.email)
      .single();

    if (error) return new Response(error.message, { status: 500 });

    if (!data) return new Response('Not found', { status: 404 });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
    });
  }
}
