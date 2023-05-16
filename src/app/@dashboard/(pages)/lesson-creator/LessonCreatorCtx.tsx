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
import { Database } from '@/assets/typescript/db';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import capitalize from '@/lib/common/capitalize';

// * Context
// Interface
interface ILessonCreatorCtx {
  // Prompt Information
  /// Goals - Core
  subject: TSelection;
  level: TSelection;
  topic: TSelection;
  objectives: Database['public']['Enums']['objective'][];
  /// Goals - Extra
  difficulty: Database['public']['Enums']['difficulty'];
  standards: Database['public']['Enums']['standard'][];
  /// Structure - Core
  philosophy: Database['public']['Enums']['philosophy'];
  teaching_strategy: Database['public']['Enums']['teaching_strategy'];
  length_in_min: number;
  /// Structure - Extra
  pace: Database['public']['Enums']['pace'];
  format: Database['public']['Enums']['format'] | null;
  /// Context -Core
  students: IStudentPromptReq['children'];
  materials: Database['public']['Enums']['material'][];
  special_considerations: string;
  /// Context - Extra
  reflections: {}; // TSK
  learning_styles: Database['public']['Enums']['learning_style'][];
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
  setObjective: Dispatch<
    SetStateAction<Database['public']['Enums']['objective'][]>
  >;
  setDifficulty: Dispatch<
    SetStateAction<Database['public']['Enums']['difficulty']>
  >;
  setStandard: Dispatch<
    SetStateAction<Database['public']['Enums']['standard'][]>
  >;
  setTeachingStrategy: Dispatch<
    SetStateAction<Database['public']['Enums']['teaching_strategy']>
  >;
  setPhilosophy: Dispatch<
    SetStateAction<Database['public']['Enums']['philosophy']>
  >;
  setLengthInMin: Dispatch<SetStateAction<number>>;
  setPace: Dispatch<SetStateAction<Database['public']['Enums']['pace']>>;
  setFormat: Dispatch<
    SetStateAction<Database['public']['Enums']['format'] | null>
  >;
  setStudents: Dispatch<SetStateAction<IStudentPromptReq['children']>>;
  setMaterials: Dispatch<
    SetStateAction<Database['public']['Enums']['material'][]>
  >;
  setSpecialConsiderations: Dispatch<SetStateAction<string>>;
  setReflections: Dispatch<SetStateAction<{}>>; // TSK
  setLearningStyles: Dispatch<
    SetStateAction<Database['public']['Enums']['learning_style'][]>
  >;
  setComplete: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  // Extra
  id?: string;
  setId?: Dispatch<SetStateAction<string>>;
}

// Initial Value
const initialCtxValue: ILessonCreatorCtx = {
  // Prompt Information
  /// Goals - Core
  subject: {
    id: '',
    name: '',
  },
  level: {
    id: '',
    name: '',
  },
  topic: { id: '', name: '' },
  objectives: [],
  /// Goals - Extra
  difficulty: 'MODERATE',
  standards: [],
  /// Structure - Core
  philosophy: 'Traditional',
  teaching_strategy: 'Direct Instruction',
  length_in_min: 60,
  /// Structure - Extra
  pace: 'MEDIUM',
  format: null,
  /// Context - Core
  students: [],
  materials: [],
  special_considerations: '',
  /// Context - Extra
  reflections: {}, // TSK
  learning_styles: [],
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
  setObjective: () => {},
  setDifficulty: () => {},
  setStandard: () => {},
  setTeachingStrategy: () => {},
  setPhilosophy: () => {},
  setLengthInMin: () => {},
  setPace: () => {},
  setFormat: () => {},
  setStudents: () => {},
  setMaterials: () => {},
  setSpecialConsiderations: () => {},
  setReflections: () => {},
  setLearningStyles: () => {},
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
  const router = useRouter();

  // * State
  // Prompt Information
  /// Goals - Core
  const [subject, setSubject] = useState<TSelection>(null);
  const [level, setLevel] = useState<TSelection>(null);
  const [topic, setTopic] = useState<TSelection>(null);
  const [objectives, setObjective] = useState<
    Database['public']['Enums']['objective'][]
  >([]);
  /// Goals - Extra
  const [difficulty, setDifficulty] =
    useState<Database['public']['Enums']['difficulty']>('MODERATE');
  const [standards, setStandard] = useState<
    Database['public']['Enums']['standard'][]
  >([]);
  /// Structure - Core
  const [philosophy, setPhilosophy] =
    useState<Database['public']['Enums']['philosophy']>('Traditional');
  const [teaching_strategy, setTeachingStrategy] =
    useState<Database['public']['Enums']['teaching_strategy']>(
      'Direct Instruction',
    );
  const [length_in_min, setLengthInMin] = useState<number>(60);
  /// Structure - Extra
  const [pace, setPace] =
    useState<Database['public']['Enums']['pace']>('MEDIUM');
  const [format, setFormat] = useState<
    Database['public']['Enums']['format'] | null
  >(null);
  /// Context - Core
  const [students, setStudents] = useState<IStudentPromptReq['children']>([]);
  const [materials, setMaterials] = useState<
    Database['public']['Enums']['material'][]
  >([]);
  const [special_considerations, setSpecialConsiderations] =
    useState<string>('');
  /// Context - Extra
  const [reflections, setReflections] = useState<{}>({}); // TSK
  const [learning_styles, setLearningStyles] = useState<
    Database['public']['Enums']['learning_style'][]
  >([]);
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
      objectives,
      difficulty,
      standards,
      format,
      teaching_strategy,
      philosophy,
      length_in_min,
      pace,
      materials,
      special_considerations,
      reflections,
      learning_styles,
    };
    const teacher: ITeacherPromptReq = {
      name: user?.firstName + ' ' + user?.lastName,
      role: 'PARENT', // TSK
      teaching_preferences: {}, // TSK
    };
    const students: IStudentPromptReq['children'] = [
      {
        id: '1',
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
        length_in_min,
        is_public: true,
        tags: [
          subject.name,
          level.name,
          topic.name,
          ...objectives,
          capitalize(difficulty),
          ...standards,
          teaching_strategy,
          philosophy,
          capitalize(pace),
          ...materials,
          ...learning_styles,
        ],
      });

      console.log('error:', error);

      if (!error) {
        // Display success toast
        toast.success('Lesson Plan Generated!', {
          action: {
            label: 'View Lesson Plan',
            onClick: () => router.push(`/lesson-plans/${id}`),
          },
          duration: 10000,
        });
      }

      setComplete(true);
      setIsLoading(false);
    });
  }, [
    supabase,
    session,
    subject,
    level,
    topic,
    objectives,
    difficulty,
    standards,
    format,
    teaching_strategy,
    philosophy,
    length_in_min,
    pace,
    materials,
    special_considerations,
    reflections,
    learning_styles,
    user?.firstName,
    user?.lastName,
    router,
  ]);

  // Reset Lesson Creator
  const reset = useCallback((isHardReset = true) => {
    if (isHardReset) {
      setSubject(null);
      setLevel(null);
      setTopic(null);
      setObjective([]);
      setDifficulty('MODERATE');
      setStandard([]);
      setTeachingStrategy('Direct Instruction');
      setPhilosophy('Traditional');
      setLengthInMin(60);
      setPace('MEDIUM');
      setFormat(null);
      setStudents([]);
      setMaterials([]);
      setSpecialConsiderations('');
      setReflections({});
      setLearningStyles([]);
    }

    setLessonContent('');
    setComplete(false);
    setIsLoading(false);
  }, []);

  // Save as Template
  const saveAsTemplate = (
    title: string,
    students: IStudentPromptReq['children'],
  ) => {
    // TSK
  };

  // * Value
  const value: ILessonCreatorCtx = useMemo(
    () => ({
      // Prompt Information
      /// Goals - Core
      subject,
      level,
      topic,
      objectives,
      /// Goals - Extra
      difficulty,
      standards,
      /// Structure - Core
      philosophy,
      teaching_strategy,
      length_in_min,
      /// Structure - Extra
      pace,
      format,
      /// Context - Core
      students,
      materials,
      special_considerations,
      /// Context - Extra
      reflections,
      learning_styles,
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
      setObjective,
      setDifficulty,
      setStandard,
      setTeachingStrategy,
      setPhilosophy,
      setLengthInMin,
      setPace,
      setFormat,
      setStudents,
      setMaterials,
      setSpecialConsiderations,
      setReflections,
      setLearningStyles,
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
      objectives,
      difficulty,
      standards,
      philosophy,
      teaching_strategy,
      length_in_min,
      pace,
      format,
      students,
      materials,
      special_considerations,
      reflections,
      learning_styles,
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
