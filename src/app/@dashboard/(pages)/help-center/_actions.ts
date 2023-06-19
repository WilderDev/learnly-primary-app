'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import baseUrl from '@/lib/common/baseUrl';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createSupportTicketSchema = z.object({
  email: z.string().email(),
  browser: z.string(),
  problem: z.string(),
  emotionalState: z.string(),
});

async function createSupportTicketAction(
  input: z.infer<typeof createSupportTicketSchema>,
) {
  try {
    const res = await fetch(baseUrl + '/api/email/support-ticket', {
      method: 'POST',
      body: JSON.stringify({
        ...input,
      }),
    });

    if (!res.ok) return responseContract(res.statusText, false);

    revalidatePath(`/help-center`); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const createSupportTicket = createRequest(
  createSupportTicketAction,
  createSupportTicketSchema,
);
