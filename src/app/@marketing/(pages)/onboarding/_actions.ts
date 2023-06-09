'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseAdmin } from '@/lib/auth/supabaseAdmin';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import baseUrl from '@/lib/common/baseUrl';
import { handleCreateOrRetrieveCustomer } from '@/lib/stripe/stripeWebhookHandlers';
import { cookies } from 'next/headers';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  avatarUrl: z.string(),
  children: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      avatarUrl: z.string(),
      birthday: z.date(),
    }),
  ),
});

const createUserAction = async (input: z.infer<typeof createUserSchema>) => {
  // 0. Desctructure input
  const { name, email, avatarUrl, children } = input;
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ') || '';

  try {
    // 1. Create Supabase Instances
    const sb = supabaseServer();
    const sbAdmin = supabaseAdmin();

    // 2a. Save User to Database
    const { data, error } = await sbAdmin.auth.signUp({
      email,
      password: 'password',
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          avatar_url: avatarUrl,
        },
        emailRedirectTo: '/',
      },
    });

    // 2b. Check if there was an error creating the user
    if (error) return responseContract(error.message, false);

    // 3a. Create Children Profiles Data
    const childrenProfiles = children.map((child) => ({
      first_name: child.name.split(' ')[0],
      last_name: child.name.split(' ').slice(1).join(' ') || '',
      avatar_url: child.avatarUrl,
      birthday: child.birthday.toISOString(),
      teacher_id: data?.user?.id!,
    }));

    // 3b. Add Children to DB
    const { error: childrenError } = await sbAdmin
      .from('student_profiles')
      .insert(childrenProfiles);

    // 3c. Check if there was an error creating the children
    if (childrenError) return responseContract(childrenError.message, false);

    // 4a. Create Customer to Stripe & Supabase
    const newCustomer = await handleCreateOrRetrieveCustomer({
      name: `${firstName} ${lastName}`,
      email,
      supabaseId: data?.user?.id!,
    });

    // 4b. Check if there was an error creating the customer
    if (!newCustomer) return responseContract('Error creating customer', false);

    // 5. Add Contact to SendGrid (Production Only)
    if (process.env.NODE_ENV === 'production') {
      await fetch(baseUrl + '/api/email/trial-welcome-list', {
        method: 'POST',
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
        }),
      });
    }

    console.log('newCustomer:', newCustomer);

    // 6. Save Referral Code to DB if exists
    const cookiesList = cookies();
    const hasCookie = cookiesList.has('referralCode');

    if (hasCookie) {
      const referralCode = cookiesList.get('referralCode') as unknown as string;
      console.log('typeof referralCode:', typeof referralCode);
      console.log('referralCode:', referralCode);

      const { data: referralTable, error: referralTableError } = await sbAdmin
        .from('referrals')
        .select('id')
        .eq('referral_code', referralCode)
        .single();

      console.log('referralTable:', referralTable);

      if (!referralTableError && referralTable.id) {
        const { error: referralError } = await sbAdmin.rpc(
          'add_item_to_array',
          {
            p_table_name: 'referrals',
            p_column_name: 'referred_ids',
            p_id_column: 'id',
            p_id_value: referralTable.id,
            p_item_value: referralCode,
          },
        );

        console.log('referralError:', referralError);
      }
    }

    // 7. Send Sign In Email
    await sb.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      },
    });

    return responseContract('Account creation successful!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const createUser = createRequest(createUserAction, createUserSchema);
