'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const markAsReadSchema = z.object({
  notification_id: z.string().uuid(),
});

const markAsReadAction = async (input: z.infer<typeof markAsReadSchema>) => {
  const { notification_id } = input;

  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('notifications')
      .update({ read_at: new Date().toISOString() })
      .eq('id', notification_id);

    if (error) return responseContract(error.message, false);

    // revalidatePath(`/`);

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const markAsRead = createRequest(markAsReadAction, markAsReadSchema);
