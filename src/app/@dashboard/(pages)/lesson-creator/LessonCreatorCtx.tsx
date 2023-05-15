'use client';

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
import { useAuth } from '@/lib/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useInterceptionModal } from '@/app/@modal/InterceptionModalCtx';
import { v4 } from 'uuid';
import { TSelection } from '@/assets/typescript/form';
import {
  ILessonPlanPromptReq,
  IStudentPromptReq,
  ITeacherPromptReq,
} from '@/assets/typescript/ai';
import { useUser } from '@/lib/components/providers/UserProvider';
import { streamReader } from '@/lib/ai/stream';

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
  reset: (isHardReset?: boolean) => void;
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
  reset: () => {},
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
  const { user } = useUser();
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
    // Check if all fields are filled
    if (!topic?.id || !level?.id || !subject?.id) return;

    setIsLoading(true); // Set Loading

    // Generate Lesson Plan Id and Title (for modal to know what route to push to)
    const lessonId = v4();
    const title = `${topic.name} for ${level.name} (${subject.name})`;

    // Open Modal and Push to Lesson Plan Page
    open();
    router.push(`/lesson-plans/${lessonId}`);

    // Create Lesson Plan Request Body Objects (lesson, teacher, students)
    const lesson: ILessonPlanPromptReq = {
      subject: subject.name,
      level: level.name,
      topic: topic.name,
      objectives: [], // TSK
      difficulty: 'MODERATE', // TSK
      standards: [], // TSK
      format: '', // TSK
      teaching_strategy: '', // TSK
      philosophy: '', // TSK
      length_in_min: 60, // TSK
      pace: '', // TSK
      materials: [], // TSK
      special_considerations: '', // TSK
      reflections: {}, // TSK
      learning_styles: [], // TSK
    };
    const teacher: ITeacherPromptReq = {
      name: user?.firstName + ' ' + user?.lastName,
      role: 'PARENT', // TSK
      years_experience: 0, // TSK
      teaching_preferences: {}, // TSK
    };
    const students: IStudentPromptReq['children'] = [
      {
        name: 'Little Johnny', // TSK
        age: 5, // TSK
        learning_styles: [], // TSK
      },
    ];

    // Generate Lesson Plan Request
    const res = await fetch('/api/ai/lesson-plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lesson,
        teacher,
        students,
      }),
    });

    if (!res.ok) return setIsLoading(false); // If not ok, return

    // Stream Response Body && Insert into Supabase
    streamReader(res.body!, setLessonContent, async (content) => {
      // Save to Supabase
      await supabase.from('lesson_plans').insert({
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

      setComplete(true);
      setIsLoading(false);
    });
  }, [
    router,
    supabase,
    session,
    subject,
    level,
    topic,
    setComplete,
    open,
    user?.firstName,
    user?.lastName,
  ]);

  // Reset Lesson Creator
  const reset = useCallback((isHardReset = true) => {
    if (isHardReset) {
      setSubject(null);
      setLevel(null);
      setTopic(null);
    }

    console.log('isHardReset:', isHardReset);

    setLessonContent('');
    setComplete(false);
    setIsLoading(false);
  }, []);

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
      reset,
      // Setters
      setSubject,
      setLevel,
      setTopic,
      setComplete,
      setIsLoading,
    }),
    [
      subject,
      level,
      topic,
      isLoading,
      lessonContent,
      complete,
      handleSubmit,
      reset,
    ],
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
