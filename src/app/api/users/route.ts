import { IOnboardingChild } from '@/assets/typescript/onboarding';
import { supabaseAdmin } from '../../../lib/auth/supabaseAdmin';
import { supabaseServer } from '@/lib/auth/supabaseServer';

// * Props
interface ICreateAccountReq {
  name: string;
  email: string;
  avatarUrl: string;
  children: IOnboardingChild[];
}

export async function POST(request: Request) {
  // 1. Get the required fields from the request body.
  const { name, email, avatarUrl, children } =
    (await request.json()) as ICreateAccountReq;

  // 2. Check if the required fields are present.
  if (!name || !email || !avatarUrl || children.length === 0) {
    return new Response('Missing required fields', { status: 400 });
  }

  try {
    // 3. Create supabase instannces
    const sb = supabaseServer();
    const sbAdmin = supabaseAdmin();

    // 4. Create the user
    const { data, error } = await sbAdmin.auth.admin.createUser({
      email,
      user_metadata: {
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        avatar_url: avatarUrl,
      },
    });

    // 4a. Check if there was an error creating the user
    if (error) return new Response(error.message, { status: 500 });

    // 5. Create Children Profiles Data
    const childrenProfiles = children.map((child) => ({
      first_name: child.name.split(' ')[0],
      last_name: child.name.split(' ').slice(1).join(' ') || '',
      avatar_url: child.avatarUrl,
      birthday: child.birthday as unknown as string,
      teacher_id: data?.user?.id!,
    }));

    // 5a. Add Children to DB
    const { error: childrenError } = await sbAdmin
      .from('student_profiles')
      .insert(childrenProfiles);

    // 5b. Check if there was an error creating the children
    if (childrenError)
      return new Response(childrenError.message, { status: 500 });

    // 6. Sign In
    await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: '/' } });

    // 7. Return the user data
    return new Response(JSON.stringify({ user: data.user! }), {
      status: 200,
    });
  } catch (e) {
    return new Response((e as Error).message, { status: 500 });
  }
}