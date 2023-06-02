'use server';

import { TAssignmentStatus } from '@/assets/typescript/assignment';
import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { dateToTimestampz } from '@/lib/common/date.helpers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Action to save assignment
const saveAssignmentSchema = z.object({
  user_lesson_plan_id: z.string().uuid(),
  title: z.string(),
  due_date: z.date(),
  content: z.string(),
});

async function saveAssignmentAction(
  input: z.infer<typeof saveAssignmentSchema>,
) {
  const { user_lesson_plan_id, title, due_date, content } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('assignments').insert({
      creator_id: session?.user.id!,
      user_lesson_plan_id,
      title,
      assigned_on: dateToTimestampz(new Date()),
      due_date: dateToTimestampz(due_date),
      content,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath('/assignments');
    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const saveAssignment = createRequest(
  saveAssignmentAction,
  saveAssignmentSchema,
);

// Action to change assignment status

const changeAssignmentStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED']),
});

async function changeAssignmentStatusAction(
  input: z.infer<typeof changeAssignmentStatusSchema>,
) {
  const { id, status } = input;

  const statuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED'];
  const currentStatusIdx = statuses.indexOf(status);

  let newStatus = null;
  if (currentStatusIdx === -1 || currentStatusIdx === statuses.length - 1) {
    newStatus = statuses[0];
  } else {
    newStatus = statuses[currentStatusIdx + 1];
  }

  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('assignments')
      .update({
        status: newStatus as TAssignmentStatus,
      })
      .eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const changeAssignmentStatus = createRequest(
  changeAssignmentStatusAction,
  changeAssignmentStatusSchema,
);

// Action to edit an assignment

const editAssignmentSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  dueDate: z.date(),
  assignedOn: z.date(),
});

async function editAssignmentAction(
  input: z.infer<typeof editAssignmentSchema>,
) {
  const { id, title, dueDate, assignedOn } = input;

  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('assignments')
      .update({
        title,
        due_date: dueDate.toISOString(),
        assigned_on: assignedOn.toISOString(),
      })
      .eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const editAssignment = createRequest(
  editAssignmentAction,
  editAssignmentSchema,
);

// Action to delte assignment

const deleteAssignmentSchema = z.object({
  id: z.string().uuid(),
  lesson_plan_id: z.string().uuid(),
});

async function deleteAssignmentAction(
  input: z.infer<typeof deleteAssignmentSchema>,
) {
  const { id, lesson_plan_id } = input;

  try {
    const supabase = supabaseServer();

    const { error } = await supabase.from('assignments').delete().eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/lesson-plans/' + lesson_plan_id);
    revalidatePath('/assignments');
    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const deleteAssignment = createRequest(
  deleteAssignmentAction,
  deleteAssignmentSchema,
);
