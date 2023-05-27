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
  ITeacherPromptReq,
  TDifficulty,
  TFormat,
  TMaterial,
  TObjective,
  TPace,
  TPhilosophy,
  TStandard,
} from '@/assets/typescript/lesson-plan';
import { useUser } from '@/lib/components/providers/UserProvider';
import { streamReader } from '@/lib/ai/stream';
import { v4 } from 'uuid';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { TLearningStyle, TTeachingStrategy } from '@/assets/typescript/user';
import { IStudentPromptReq } from '../../../../assets/typescript/lesson-plan';

// * Context
// Interface
interface ILessonCreatorCtx {
  // Prompt Information
  /// Goals - Core
  subject: TSelection;
  level: TSelection;
  topic: TSelection;
  objectives: TObjective[];
  /// Goals - Extra
  difficulty: TDifficulty | null;
  standards: TStandard[];
  /// Structure - Core
  philosophy: TPhilosophy | null;
  teachingStrategy: TTeachingStrategy | null;
  lengthInMin: number;
  /// Structure - Extra
  pace: TPace | null;
  format: TFormat | null;
  /// Context -Core
  students: IStudentPromptReq['students'];
  materials: TMaterial[];
  specialConsiderations: string | null;
  /// Context - Extra
  learningStyles: TLearningStyle[];
  // Output
  lessonContent: string;
  // UI
  complete: boolean;
  isLoading: boolean;
  // Actions
  handleSubmit: () => void;
  reset: (isHardReset?: boolean) => void;
  showAdvancedGoals: boolean;
  toggleAdvancedGoals: () => void;
  showAdvancedStructure: boolean;
  toggleAdvancedStructure: () => void;
  showAdvancedContext: boolean;
  toggleAdvancedContext: () => void;
  // Setters
  setSubject: Dispatch<SetStateAction<TSelection>>;
  setLevel: Dispatch<SetStateAction<TSelection>>;
  setTopic: Dispatch<SetStateAction<TSelection>>;
  setObjectives: Dispatch<SetStateAction<TObjective[]>>;
  setDifficulty: Dispatch<SetStateAction<TDifficulty | null>>;
  setStandards: Dispatch<SetStateAction<TStandard[]>>;
  setTeachingStrategy: Dispatch<SetStateAction<TTeachingStrategy | null>>;
  setPhilosophy: Dispatch<SetStateAction<TPhilosophy | null>>;
  setLengthInMin: Dispatch<SetStateAction<number>>;
  setPace: Dispatch<SetStateAction<TPace | null>>;
  setFormat: Dispatch<SetStateAction<TFormat | null>>;
  setStudents: Dispatch<SetStateAction<IStudentPromptReq['students']>>;
  setMaterials: Dispatch<SetStateAction<TMaterial[]>>;
  setSpecialConsiderations: Dispatch<SetStateAction<string>>;
  setLearningStyles: Dispatch<SetStateAction<TLearningStyle[]>>;
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
  philosophy: 'Eclectic/Relaxed',
  teachingStrategy: 'Direct Instruction',
  lengthInMin: 60,
  /// Structure - Extra
  pace: 'MEDIUM',
  format: null,
  /// Context - Core
  students: [],
  materials: [],
  specialConsiderations: '',
  /// Context - Extra
  learningStyles: [],
  // Output
  lessonContent: '',
  complete: false,
  // UI
  isLoading: false,
  // Actions
  handleSubmit: () => {},
  reset: () => {},
  showAdvancedGoals: false,
  toggleAdvancedGoals: () => {},
  showAdvancedStructure: false,
  toggleAdvancedStructure: () => {},
  showAdvancedContext: false,
  toggleAdvancedContext: () => {},
  // Setters
  setSubject: () => {},
  setLevel: () => {},
  setTopic: () => {},
  setObjectives: () => {},
  setDifficulty: () => {},
  setStandards: () => {},
  setTeachingStrategy: () => {},
  setPhilosophy: () => {},
  setLengthInMin: () => {},
  setPace: () => {},
  setFormat: () => {},
  setStudents: () => {},
  setMaterials: () => {},
  setSpecialConsiderations: () => {},
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
  const [objectives, setObjectives] = useState<TObjective[]>([]);
  /// Goals - Extra
  const [difficulty, setDifficulty] = useState<TDifficulty | null>('MODERATE');
  const [standards, setStandards] = useState<TStandard[]>([]);
  /// Structure - Core
  const [philosophy, setPhilosophy] = useState<TPhilosophy | null>(
    'Eclectic/Relaxed',
  );
  const [teachingStrategy, setTeachingStrategy] =
    useState<TTeachingStrategy | null>(null);
  const [lengthInMin, setLengthInMin] = useState<number>(60);
  /// Structure - Extra
  const [pace, setPace] = useState<TPace | null>('MEDIUM');
  const [format, setFormat] = useState<TFormat | null>(null);
  /// Context - Core
  const [students, setStudents] = useState<IStudentPromptReq['students']>([]);
  const [materials, setMaterials] = useState<TMaterial[]>([]);
  const [specialConsiderations, setSpecialConsiderations] =
    useState<string>('');
  /// Context - Extra
  const [learningStyles, setLearningStyles] = useState<TLearningStyle[]>([]);
  // Output
  const [lessonContent, setLessonContent] = useState('');
  const [complete, setComplete] = useState(false);
  // Actions
  const [showAdvancedGoals, setShowAdvancedGoals] = useState(false);
  const [showAdvancedStructure, setShowAdvancedStructure] = useState(false);
  const [showAdvancedContext, setShowAdvancedContext] = useState(false);
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
      teaching_strategy: teachingStrategy,
      philosophy,
      length_in_min: lengthInMin,
      pace,
      materials,
      special_considerations: specialConsiderations,
      learning_styles: learningStyles,
    };
    const teacher: ITeacherPromptReq = {
      name: user?.firstName + ' ' + user?.lastName,
      role: user?.type!,
      teaching_preferences: user?.teachingPreferences,
    };

    console.log('students:', students);

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
        length_in_min: lengthInMin,
        is_public: true,
        tags: [
          subject.name,
          level.name,
          topic.name,
          // ...objectives,
          // capitalize(difficulty),
          // ...standards,
          // teachingStrategy,
          // philosophy,
          // capitalize(pace),
          // ...materials,
          // ...learningStyles,
        ],
      });

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
    teachingStrategy,
    philosophy,
    lengthInMin,
    pace,
    materials,
    specialConsiderations,
    learningStyles,
    students,
    user?.type,
    user?.firstName,
    user?.lastName,
    user?.teachingPreferences,
    router,
  ]);

  // Reset Lesson Creator
  const reset = useCallback((isHardReset = true) => {
    if (isHardReset) {
      setSubject(null);
      setLevel(null);
      setTopic(null);
      setObjectives([]);
      setDifficulty('MODERATE');
      setStandards([]);
      setTeachingStrategy(null);
      setPhilosophy('Eclectic/Relaxed');
      setLengthInMin(60);
      setPace('MEDIUM');
      setFormat(null);
      setStudents([]);
      setMaterials([]);
      setSpecialConsiderations('');
      setLearningStyles([]);
    }

    setLessonContent('');
    setComplete(false);
    setIsLoading(false);
  }, []);

  // Togglers
  const toggleAdvancedGoals = () => setShowAdvancedGoals((prev) => !prev);
  const toggleAdvancedStructure = () =>
    setShowAdvancedStructure((prev) => !prev);
  const toggleAdvancedContext = () => setShowAdvancedContext((prev) => !prev);

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
      teachingStrategy,
      lengthInMin,
      /// Structure - Extra
      pace,
      format,
      /// Context - Core
      students,
      materials,
      specialConsiderations,
      /// Context - Extra
      learningStyles,
      // Output
      lessonContent,
      // UI
      complete,
      isLoading,
      // Actions
      handleSubmit,
      reset,
      showAdvancedGoals,
      toggleAdvancedGoals,
      showAdvancedStructure,
      toggleAdvancedStructure,
      showAdvancedContext,
      toggleAdvancedContext,
      // Setters
      setSubject,
      setLevel,
      setTopic,
      setObjectives,
      setDifficulty,
      setStandards,
      setTeachingStrategy,
      setPhilosophy,
      setLengthInMin,
      setPace,
      setFormat,
      setStudents,
      setMaterials,
      setSpecialConsiderations,
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
      teachingStrategy,
      lengthInMin,
      pace,
      format,
      students,
      materials,
      specialConsiderations,
      learningStyles,
      isLoading,
      lessonContent,
      complete,
      handleSubmit,
      reset,
      showAdvancedGoals,
      showAdvancedStructure,
      showAdvancedContext,
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
