'use client';

import { useAuth } from '@/lib/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';

// * Imports
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { useCallback } from 'react';
import { useInterceptionModal } from '@/app/@modal/InterceptionModalCtx';
import { v4 } from 'uuid';

type TSelection = {
  id: string;
  name: string;
} | null;

// * Context
// Interface
interface ILessonCreatorCtx {
  // Prompt Information
  subject: TSelection;
  level: TSelection;
  topic: TSelection;
  // Output
  lessonContent: string;
  // UI
  complete: boolean;
  isLoading: boolean;
  // Actions
  handleSubmit: () => void;
  // Setters
  setSubject: Dispatch<SetStateAction<TSelection>>;
  setLevel: Dispatch<SetStateAction<TSelection>>;
  setTopic: Dispatch<SetStateAction<TSelection>>;
  setComplete: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// Initial Value
const initialCtxValue: ILessonCreatorCtx = {
  // Prompt Information
  subject: {
    id: '',
    name: '',
  },
  level: {
    id: '',
    name: '',
  },
  topic: { id: '', name: '' },
  // Output
  lessonContent: '',
  complete: false,
  // UI
  isLoading: false,
  // Actions
  handleSubmit: () => {},
  // Setters
  setSubject: () => {},
  setLevel: () => {},
  setTopic: () => {},
  setComplete: () => {},
  setIsLoading: () => {},
};

// Context
const LessonCreatorCtx = createContext<ILessonCreatorCtx>(initialCtxValue);

// * Provider
export function LessonCreatorProvider({ children }: PropsWithChildren) {
  // * Hooks
  const router = useRouter();
  const { supabase, session } = useAuth();
  const { open } = useInterceptionModal();

  // * State
  // Prompt Information
  const [subject, setSubject] = useState<TSelection>(null);
  const [level, setLevel] = useState<TSelection>(null);
  const [topic, setTopic] = useState<TSelection>(null);
  // Output
  const [lessonContent, setLessonContent] = useState('');
  const [complete, setComplete] = useState(false);
  // UI
  const [isLoading, setIsLoading] = useState(false);

  // * Handlers
  // Handle Submit Lesson Plan
  const handleSubmit = useCallback(async () => {
    if (!topic || !level || !subject) return;

    setIsLoading(true);

    const lessonId = v4();
    const title = `${topic.name} for ${level.name} (${subject.name})`;

    open();
    router.push(`/lesson-plans/${lessonId}`);

    const res = await fetch('/api/ai/lesson-plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: lessonId,
        subject: 'Mathematics',
        level: 'Pre-K',
        topic: 'Addition',
      }),
    });

    if (!res.ok) return;

    const data = res.body!; // Get the response body

    const reader = data.getReader(); // Get the reader from the response body
    const decoder = new TextDecoder(); // Create a new text decoder

    let done = false; // Set done to false
    let content = '';

    // Stream the response until it's done
    while (!done) {
      const { value, done: doneReading } = await reader.read();

      done = doneReading;

      const chunkValue = decoder.decode(value);

      content += chunkValue;
      setLessonContent((prev) => prev + chunkValue);

      // If done
      if (done) {
        // Save to Supabase
        const { error: createError } = await supabase
          .from('lesson_plans')
          .insert({
            id: lessonId,
            subject: subject.id,
            level: level.id,
            topic: topic.id,
            content,
            creator_id: session?.user.id!,
            title,
            image_path: 'https://source.unsplash.com/random/800x600',
            // length_in_min
            // is_public
            // tags
          });

        console.log('createError:', createError);

        setComplete(true);
        setIsLoading(false);
      }
    }
  }, [router, supabase, session, subject, level, topic, setComplete, open]);

  // * Value
  const value: ILessonCreatorCtx = useMemo(
    () => ({
      // Prompt Information
      subject,
      level,
      topic,
      // Output
      lessonContent,
      // UI
      complete,
      isLoading,
      // Actions
      handleSubmit,
      // Setters
      setSubject,
      setLevel,
      setTopic,
      setComplete,
      setIsLoading,
    }),
    [subject, level, topic, isLoading, lessonContent, complete, handleSubmit],
  );

  // * Render
  return (
    <LessonCreatorCtx.Provider value={value}>
      {children}
    </LessonCreatorCtx.Provider>
  );
}

// * Hooks
export function useLessonCreator() {
  const ctx = useContext(LessonCreatorCtx); // Context

  // Throw Error if Context is not found
  if (!ctx) {
    throw new Error(
      'useLessonCreator must be used within a LessonCreatorProvider',
    );
  }

  return ctx; // Return Context
}
