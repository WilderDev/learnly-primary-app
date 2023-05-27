'use server';

import { IAssignment } from '@/assets/typescript/assignment';
import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import { dateToTimestampz } from '@/lib/common/date.helpers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Action to save assignment

const saveAssignmentSchema = z.object({
  user_lesson_plan_id: z.string().uuid(),
  lesson_plan_id: z.string().uuid(),
  title: z.string(),
  due_date: z.date(),
  content: z.string(),
});

const saveAssignmentAction = async (
  input: z.infer<typeof saveAssignmentSchema>
) => {
  const { user_lesson_plan_id, lesson_plan_id, title, due_date, content } =
    input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('assignments').insert({
      creator_id: session?.user.id,
      user_lesson_plan_id,
      lesson_plan_id,
      title,
      assigned_on: dateToTimestampz(new Date()),
      due_date: dateToTimestampz(due_date),
      content,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath('/');
    revalidatePath('/lesson-plans/' + lesson_plan_id);

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const saveAssignment = createRequest(
  saveAssignmentAction,
  saveAssignmentSchema
);

// Action to change assignment status

const changeAssignmentStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED']),
});

const changeAssignmentStatusAction = async (
  input: z.infer<typeof changeAssignmentStatusSchema>
) => {
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
        status: newStatus,
      })
      .eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const changeAssignmentStatus = createRequest(
  changeAssignmentStatusAction,
  changeAssignmentStatusSchema
);

// Action to edit an assignment

const editAssignmentSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  dueDate: z.date(),
  assignedOn: z.date(),
});

const editAssignmentAction = async (
  input: z.infer<typeof editAssignmentSchema>
) => {
  const { id, title, dueDate, assignedOn } = input;

  try {
    const supabase = supabaseServer();

    const { error } = await supabase
      .from('assignments')
      .update({
        title,
        due_date: dueDate,
        assigned_on: assignedOn,
      })
      .eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/');

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const editAssignment = createRequest(
  editAssignmentAction,
  editAssignmentSchema
);

// Action to delte assignment

const deleteAssignmentSchema = z.object({
  id: z.string().uuid(),
  lesson_plan_id: z.string().uuid(),
});

const deleteAssignmentAction = async (
  input: z.infer<typeof deleteAssignmentSchema>
) => {
  const { id, lesson_plan_id } = input;

  try {
    const supabase = supabaseServer();

    const { error } = await supabase.from('assignments').delete().eq('id', id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/');
    revalidatePath('/lesson-plans/' + lesson_plan_id);

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
};

export const deleteAssignment = createRequest(
  deleteAssignmentAction,
  deleteAssignmentSchema
);

// Call to fetch a single assignment

const fetchAssignmentSchema = z.object({
  lesson_plan_id: z.string().uuid(),
});

export const fetchAssignmentCall = async (
  input: z.infer<typeof fetchAssignmentSchema>
) => {
  try {
    const { lesson_plan_id } = input;
    const supabase = supabaseServer();

    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .eq('lesson_plan_id', lesson_plan_id)
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    return data as IAssignment;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

// Call to fetch assignments

export async function fetchAssignments(): Promise<IAssignment[]> {
  try {
    const supabase = supabaseServer();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('assignments')
      .select(
        '*, user_lesson_plan:user_lesson_plans(students), lesson_plan:lesson_plans(subject:subjects(name))'
      )
      .eq('creator_id', user?.id)
      .limit(10);

    if (error) {
      throw new Error(error.message);
    }

    return data as IAssignment[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

// Call to fetch User Lesson Plans that don't already have an assignment

export async function fetchUserLessonPlans(): Promise<any[]> {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const { data: assignmentData, error: assignmentError } = await supabase
      .from('assignments')
      .select('user_lesson_plan_id');

    if (assignmentError) {
      throw new Error(assignmentError.message);
    }

    const assignedIds = assignmentData.map((a) => a.user_lesson_plan_id);
    const assignedIdsStr = `(${assignedIds.join(',')})`;

    const { data, error } = await supabase
      .from('user_lesson_plans')
      .select(
        `*, lesson_plan:lesson_plans(title, subject:subjects(name), content, level:levels(name))`
      )
      .not('id', 'in', assignedIdsStr)
      .eq('teacher_id', user?.id)
      .limit(10);

    if (error) {
      throw new Error(error.message);
    }

    return data as any[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
