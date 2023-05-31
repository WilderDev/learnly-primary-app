'use server';

import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// * Add Event
const addEventSchema = z.object({
  type: z.enum(['LESSON', 'ASSIGNMENT', 'COMMUNITY', 'OTHER']).optional(),
  name: z.string(),
  description: z.string().optional(),
  datetime: z.string(),
  length_in_min: z.number().optional(),
  image_path: z.string().optional(),
  location: z.string().optional(),
  url: z.string().optional(),
  attendees: z.array(z.string().uuid()).optional(),
});

const addEventAction = async (input: z.infer<typeof addEventSchema>) => {
  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('events').insert({
      ...input,
      host_id: session?.user.id!,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath('/schedule-builder'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const addEvent = createRequest(addEventAction, addEventSchema);

// * Edit Event
const editEventSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(['LESSON', 'ASSIGNMENT', 'COMMUNITY', 'OTHER']).optional(),
  name: z.string(),
  description: z.string().optional(),
  datetime: z.string(),
  length_in_min: z.number().optional(),
  image_path: z.string().optional(),
  location: z.string().optional(),
  url: z.string().optional(),
  attendees: z.array(z.string().uuid()).optional(),
});

const editEventAction = async (input: z.infer<typeof editEventSchema>) => {
  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('events')
      .update({
        ...input,
      })
      .eq('id', input.id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/schedule-builder'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const editEvent = createRequest(editEventAction, editEventSchema);

// * Delete Event
const deleteEventSchema = z.object({
  id: z.string().uuid(),
});

const deleteEventAction = async (input: z.infer<typeof deleteEventSchema>) => {
  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('events')
      .delete()
      .match({ id: input.id });

    if (error) return responseContract(error.message, false);

    revalidatePath('schedule-builder');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const deleteEvent = createRequest(deleteEventAction, deleteEventSchema);
