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
import { useCallback } from 'react';
import { TSelection } from '@/assets/typescript/form';
import {
  ILessonPlanPromptReq,
  IStudentPromptReq,
  ITeacherPromptReq,
} from '@/assets/typescript/lesson-plan';
import { useUser } from '@/lib/components/providers/UserProvider';
import { streamReader } from '@/lib/ai/stream';
import { v4 } from 'uuid';

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
  // Extra
  id?: string;
  setId?: Dispatch<SetStateAction<string>>;
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
  // Extra
  id: '',
  setId: () => {},
};

// Context
const LessonCreatorCtx = createContext<ILessonCreatorCtx>(initialCtxValue);

// * Provider
export function LessonCreatorProvider({ children }: PropsWithChildren) {
  // * Hooks
  const { supabase, session } = useAuth();
  const { user } = useUser();

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
  // Extra
  const [id, setId] = useState('');

  // * Handlers
  // Handle Submit Lesson Plan
  const handleSubmit = useCallback(async () => {
    // Check if all fields are filled
    if (!topic?.id || !level?.id || !subject?.id) return;

    setIsLoading(true); // Set Loading
    const id = v4(); // Generate ID
    setId(id); // Set ID (for redirect)

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
      const { error } = await supabase.from('lesson_plans').insert({
        id,
        subject: subject.id,
        level: level.id,
        topic: topic.id,
        content,
        creator_id: session?.user.id!,
        title: `${topic.name} for ${level.name} (${subject.name})`,
        image_path: 'https://source.unsplash.com/random/800x600',
        // length_in_min
        // is_public
        // tags
      });

      console.log('error:', error);

      setComplete(true);
      setIsLoading(false);
    });
  }, [
    supabase,
    session,
    subject,
    level,
    topic,
    setComplete,
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
      // Extra
      id,
      setId,
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
      id,
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
