import { IOnboardingChild } from '@/assets/typescript/onboarding';
import { supabaseAdmin } from '../../../lib/auth/supabaseAdmin';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import * as sgClient from '@sendgrid/client';
import { handleCreateOrRetrieveCustomer } from '@/lib/stripe/stripeWebhookHandlers';

sgClient.setApiKey(process.env.SENDGRID_CLIENT_API_KEY!);

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

  console.log('name:', name);
  console.log('email:', email);
  console.log('avatarUrl:', avatarUrl);
  console.log('children:', children);

  // 2. Check if the required fields are present.
  if (!name || !email || !avatarUrl || children.length === 0) {
    return new Response('Missing required fields', { status: 400 });
  }

  // 2a. Check if email is valid
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });

  // 2b. Destructure first and last name
  const first_name = name.split(' ')[0];
  const last_name = name.split(' ').slice(1).join(' ') || '';

  try {
    // 3. Create supabase instannces
    const sb = supabaseServer();
    const sbAdmin = supabaseAdmin();

    // 4. Create the user
    const { data, error } = await sbAdmin.auth.admin.createUser({
      email,
      user_metadata: {
        first_name,
        last_name,
        avatar_url: avatarUrl,
      },
      app_metadata: {
        role: 'TEACHER',
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

    // 7. Add to SendGrid Users List
    const sgRes = await sgClient.request({
      method: 'PUT',
      baseUrl: 'https://api.sendgrid.com',
      url: '/v3/marketing/contacts',
      body: {
        list_ids: [process.env.SENDGRID_APP_USERS_ID!],
        contacts: [
          {
            email,
            first_name,
            last_name,
            // custom_fields: { level: level },
          },
        ],
      },
    });

    // 7a. Check if email is already subscribed
    if (sgRes[0].statusCode !== 202) {
      return new Response(
        JSON.stringify({ error: 'Failed to add user to app users list' }),
        { status: 500 },
      );
    }

    // 8. Create Stripe Customer
    const customer = await handleCreateOrRetrieveCustomer({
      name: first_name + ' ' + last_name,
      email,
      supabaseId: data?.user?.id!,
    });

    // 8a. Check if there was an error creating the customer
    if (!customer)
      return new Response('Failed to create customer', { status: 500 });

    // 10. Return the user data
    return new Response(JSON.stringify({ user: data.user! }), {
      status: 200,
    });
  } catch (e) {
    return new Response((e as Error).message, { status: 500 });
  }
}
