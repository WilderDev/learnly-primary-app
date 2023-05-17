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
  teachingStrategy: Database['public']['Enums']['teaching_strategy'];
  lengthInMin: number;
  /// Structure - Extra
  pace: Database['public']['Enums']['pace'];
  format: Database['public']['Enums']['format'] | null;
  /// Context -Core
  students: IStudentPromptReq['children'];
  materials: Database['public']['Enums']['material'][];
  specialConsiderations: string;
  /// Context - Extra
  reflections: {}; // TSK
  learningStyles: Database['public']['Enums']['learning_style'][];
  // Output
  lessonContent: string;
  // UI
  complete: boolean;
  isLoading: boolean;
  // Actions
  handleSubmit: () => void;
  reset: (isHardReset?: boolean) => void;
  saveAsTemplate: (title: string) => void;
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
  setObjectives: Dispatch<
    SetStateAction<Database['public']['Enums']['objective'][]>
  >;
  setDifficulty: Dispatch<
    SetStateAction<Database['public']['Enums']['difficulty']>
  >;
  setStandards: Dispatch<
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
  reflections: {}, // TSK
  learningStyles: [],
  // Output
  lessonContent: '',
  complete: false,
  // UI
  isLoading: false,
  // Actions
  handleSubmit: () => {},
  reset: () => {},
  saveAsTemplate: () => {},
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
  const [objectives, setObjectives] = useState<
    Database['public']['Enums']['objective'][]
  >([]);
  /// Goals - Extra
  const [difficulty, setDifficulty] =
    useState<Database['public']['Enums']['difficulty']>('MODERATE');
  const [standards, setStandards] = useState<
    Database['public']['Enums']['standard'][]
  >([]);
  /// Structure - Core
  const [philosophy, setPhilosophy] =
    useState<Database['public']['Enums']['philosophy']>('Eclectic/Relaxed');
  const [teachingStrategy, setTeachingStrategy] =
    useState<Database['public']['Enums']['teaching_strategy']>(
      'Direct Instruction',
    );
  const [lengthInMin, setLengthInMin] = useState<number>(60);
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
  const [specialConsiderations, setSpecialConsiderations] =
    useState<string>('');
  /// Context - Extra
  const [reflections, setReflections] = useState<{}>({}); // TSK
  const [learningStyles, setLearningStyles] = useState<
    Database['public']['Enums']['learning_style'][]
  >([]);
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
      reflections,
      learning_styles: learningStyles,
    };
    const teacher: ITeacherPromptReq = {
      name: user?.firstName + ' ' + user?.lastName,
      role: user?.type!,
      teaching_preferences: {}, // TSK
    };

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
          ...objectives,
          capitalize(difficulty),
          ...standards,
          teachingStrategy,
          philosophy,
          capitalize(pace),
          ...materials,
          ...learningStyles,
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
    reflections,
    learningStyles,
    students,
    user?.type,
    user?.firstName,
    user?.lastName,
    router,
  ]);

  // Reset Lesson Creator
  const reset = useCallback(
    (isHardReset = true) => {
      if (isHardReset) {
        setSubject(null);
        setLevel(null);
        setTopic(null);
        setObjectives([]);
        setDifficulty('MODERATE');
        setStandards([]);
        setTeachingStrategy('Direct Instruction');
        setPhilosophy('Eclectic/Relaxed');
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
      router.refresh();
    },
    [router],
  );

  // Save as Template
  const saveAsTemplate = useCallback(
    async (title: string) => {
      // 1. Validate Inputs
      if (!title) return toast.error('Please enter a title');

      const tags = [
        ...standards,
        ...materials,
        ...learningStyles,
        ...objectives,
      ] as string[];
      topic && tags.unshift(topic.name);
      level && tags.unshift(level.name);
      subject && tags.unshift(subject.name);
      difficulty && tags.push(capitalize(difficulty));
      teachingStrategy && tags.push(teachingStrategy);
      philosophy && tags.push(philosophy);
      pace && tags.push(capitalize(pace));

      const templateDetails = {
        creator_id: session?.user.id!,
        title,
        subject: subject?.id,
        level: level?.id,
        topic: topic?.id,
        tags,
        image_path: 'https://source.unsplash.com/random/800x600',
        length_in_min: lengthInMin,
        difficulty: difficulty,
        pace: pace,
        philosophy: philosophy,
        format: format,
        learning_styles: learningStyles,
        teaching_strategy: teachingStrategy,
        materials: materials,
        standards: standards,
        objectives: objectives,
        // assessments: {},
        // reflections: {},
        // is_public: true,
        special_considerations: specialConsiderations || '',
      };

      // 2. Save to Supabase (Public)
      const { data: template, error: templateError } = await supabase
        .from('lesson_plan_templates')
        .insert(templateDetails)
        .select('id')
        .single();

      if (templateError) return toast.error('Error saving template');

      // 3. Save to Supabase (Private)
      const { error: userTemplateError } = await supabase
        .from('user_lesson_plan_templates')
        .insert({
          teacher_id: session?.user.id!,
          lesson_plan_template_id: template?.id!,
          students: students?.map((s) => s.id) || [],
        });

      if (userTemplateError) return toast.error('Error saving template');
    },
    [
      difficulty,
      format,
      learningStyles,
      lengthInMin,
      level,
      materials,
      objectives,
      pace,
      philosophy,
      session?.user.id,
      specialConsiderations,
      standards,
      students,
      subject,
      supabase,
      teachingStrategy,
      topic,
    ],
  );

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
      reflections,
      learningStyles,
      // Output
      lessonContent,
      // UI
      complete,
      isLoading,
      // Actions
      handleSubmit,
      reset,
      saveAsTemplate,
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
      teachingStrategy,
      lengthInMin,
      pace,
      format,
      students,
      materials,
      specialConsiderations,
      reflections,
      learningStyles,
      isLoading,
      lessonContent,
      complete,
      handleSubmit,
      reset,
      saveAsTemplate,
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
