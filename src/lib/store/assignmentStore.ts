// import { streamReader } from '@/lib/ai/stream';

import { IAssignment } from '@/assets/typescript/assignment';
import { toast } from 'sonner';
import { create } from 'zustand';
import { supabaseServer } from '../auth/supabaseServer';
import { supabaseClient } from '../auth/supabaseClient';

interface AssignmentsState {
  assignments: IAssignment[];
  isLoading: boolean;
  error: string | null;
  fetchAssignments: () => Promise<void>;
  deleteAssignment: (id: string) => Promise<void>;
}

export const useAssignmentsStore = create<AssignmentsState>((set) => ({
  assignments: [],
  isLoading: false,
  error: null,
  fetchAssignments: async () => {
    try {
      set({ isLoading: true, error: null });
      const assignments = await externalFetchAssignments();
      set({ isLoading: false, error: null, assignments: assignments });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
      toast.error(err.message);
    }
  },
  deleteAssignment: async (id: string) => {
    try {
      set({ isLoading: true });
      await deleteAssignment(id);
      set((state) => ({
        isLoading: false,
        assignments: state.assignments.filter(
          (assignment) => assignment.id !== id
        ),
      }));
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
      toast.error(err.message);
    }
  },
}));

interface AssignmentFormState {
  assignment: IAssignment | null;
  assignmentContent: string | null;
  isLoading: boolean;
  error: string | null;
  createAssignment: (
    user_lesson_plan_id: string,
    lesson_plan_id: string,
    title: string,
    questions: number,
    lessonPlanContent: string,
    lessonPLanGrade: string,
    due_date: Date,
    additionalComments?: string
  ) => Promise<void>;
  setAssignment: (value: string) => void;
}

export const useAssignmentFormStore = create<AssignmentFormState>((set) => ({
  assignment: null,
  assignmentContent: null,
  isLoading: false,
  error: null,
  createAssignment: async (
    user_lesson_plan_id,
    lesson_plan_id,
    title,
    questions,
    lessonPlanContent,
    lessonPlanGrade,
    due_date,
    additionalComments
  ) => {
    console.log(
      'ulp',
      user_lesson_plan_id,
      'lpi',
      lesson_plan_id,
      'title',
      title,
      'questions',
      questions,
      'grade',
      lessonPlanGrade,
      'due',
      due_date,
      'addC',
      additionalComments
    );
    set({ isLoading: true, error: null });
    try {
      const res = await fetch('/api/ai/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questions,
          lessonPlanContent,
          lessonPlanGrade,
          additionalComments,
        }),
      });
      if (!res.ok) return set({ isLoading: false });
      streamReaderEdit(
        res.body!,
        (chunkValue: string) => {
          const prevAssignment =
            useAssignmentFormStore.getState().assignmentContent;
          useAssignmentFormStore
            .getState()
            .setAssignment(prevAssignment + chunkValue);
        },
        async (content) => {
          saveAssignment(
            lesson_plan_id,
            user_lesson_plan_id,
            due_date,
            content,
            title
          );
        }
      );
      useAssignmentsStore.getState().fetchAssignments();
      set({ isLoading: false });
    } catch (error: any) {
      set({ isLoading: false });
      toast.error('Failed to Create Assignment');
    }
  },
  setAssignment: (value) => set({ assignmentContent: value }),
}));

export async function externalFetchAssignments(): Promise<IAssignment[]> {
  const supabase = supabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data, error } = await supabase
      .from('assignments')
      .select(
        `*, lesson_plan:lesson_plans(*), user_lesson_plan:user_lesson_plans(*)`
      )
      .eq('creator_id', user?.id);

    console.log(data);
    if (error) {
      throw new Error(error.message);
    }

    return data as IAssignment[];
  } else return [];
}

export async function deleteAssignment(id: string) {
  const supabase = supabaseClient();

  const { error } = await supabase.from('assignments').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function saveAssignment(
  lesson_plan_id: string,
  user_lesson_plan_id: string,
  due_date: Date,
  content: string,
  title: string
) {
  const supabase = supabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let assignmentTitle = `${title} Assignment`;

  const { error } = await supabase.from('assignments').insert({
    content,
    title: assignmentTitle,
    creator_id: user?.id,
    lesson_plan_id,
    user_lesson_plan_id,
    due_date,
    assigned_on: new Date().toISOString(),
  });

  if (!error) {
    toast.success('Assignment Created!');
  }
}

export async function streamReaderEdit(
  data: ReadableStream<Uint8Array>,
  setValue: (value: string) => void,
  doneAction: (output: string) => void
) {
  const reader = data.getReader();
  const decoder = new TextDecoder();
  let done = false;
  let output = '';
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);
    setValue(chunkValue);
    output += chunkValue;
  }
  done && doneAction(output);
  return output;
}
