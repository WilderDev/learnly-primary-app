// import { streamReader } from '@/lib/ai/stream';
'use client';

import { toast } from 'sonner';
import { create } from 'zustand';

type AssignmentState = {
  assignment: string | null;
  setAssignment: (value: string) => void;
};

export const useAssignmentStore = create<AssignmentState>((set) => ({
  assignment: '',
  setAssignment: (value) => set({ assignment: value }),
}));

type AssignmentFormState = {
  lessonPlanId: string;
  title: string;
  questions: number;
  lessonPlanContent: string;
  lessonPlanGrade: string;
  isLoading: boolean;
  error: string | null;
  setTitle: (value: string) => void;
  setQuestions: (value: number) => void;
  submit: (
    id: string,
    title: string,
    questions: number,
    lessonPlanContent: string,
    lessonPLanGrade: string,
    supabase: any
  ) => Promise<void>;
};

export const useAssignmentCreatorStore = create<AssignmentFormState>((set) => ({
  lessonPlanId: '',
  title: '',
  questions: 3,
  lessonPlanContent: '',
  lessonPlanGrade: '',
  isLoading: false,
  error: null,
  setTitle: (value) => set({ title: value }),
  setQuestions: (value) => set({ questions: value }),
  submit: async (
    id,
    title,
    questions,
    lessonPlanContent,
    lessonPlanGrade,
    supabase
  ) => {
    set({ isLoading: true, error: null });
    const errors = [];
    if (!id) return;
    if (!title) errors.push('A title is required.');
    if (questions < 1 || questions > 7)
      errors.push('Please select between 1 and 7 questions.');
    if (errors.length > 0) {
      toast.error(errors.join(' '));
      set({ isLoading: false });
      return;
    }

    try {
      const res = await fetch('/api/ai/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          title,
          questions,
          lessonPlanContent,
          lessonPlanGrade,
        }),
      });
      if (!res.ok) return set({ isLoading: false });
      streamReaderEdit(
        res.body!,
        (chunkValue: string) => {
          const prevAssignment = useAssignmentStore.getState().assignment;
          useAssignmentStore
            .getState()
            .setAssignment(prevAssignment + chunkValue);
        },
        async (content) => {
          const { error } = await supabase.from('assignments').insert({
            content,
            title,
            lesson_plan_id: id,
          });
          console.log(error);
          if (!error) {
            toast.success('Assignment Created!');
          }
        }
      );
      set({ isLoading: false });
    } catch (error: any) {
      set({ isLoading: false });
      toast.error('Failed to Create Assignment');
    }
  },
}));

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
