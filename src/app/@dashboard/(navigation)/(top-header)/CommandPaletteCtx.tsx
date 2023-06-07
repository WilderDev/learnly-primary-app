'use client';

import { supabaseClient } from '@/lib/auth/supabaseClient';
import { useUser } from '@/lib/components/providers/UserProvider';
import CommandPalette, { IItem } from '@/lib/components/ui/CommandPalette';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'sonner';

// * Initialization
// Props
interface ICommandPaletteCtxProps {
  items: IItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  isLoading: boolean;
} // Create an interface for the context props

// Initial State
const initialState: ICommandPaletteCtxProps = {
  items: [],
  open: false,
  setOpen: () => {},
  query: '',
  setQuery: () => {},
  isLoading: false,
}; // Create a context object with default value

// Context
const CommandPaletteCtx = createContext(initialState); // Create Context Object

// * Provider
export function CommandPaletteProvider({ children }: PropsWithChildren) {
  // * State
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<IItem[]>([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Supabase Client
  const supabase = supabaseClient();

  // Current User
  const { user } = useUser();

  // * Effects
  useEffect(() => {
    // Fetch Data
    const fetchItems = async () => {
      // Set Loading State to true
      setIsLoading(true);

      // TSK Currently only fetching if the query is one letter will change to more complex optimization
      if (query != '' && query.length < 2) {
        // Get any title of an assignment "like" the current query
        const { data: assignments, error: assignmentsError } = await supabase
          .from('assignments')
          .select('id, title, user_lesson_plans(lesson_plan_id)')
          .ilike('title', `%${query}%`)
          .eq('creator_id', user?.id);

        //  Display Error Message
        if (assignmentsError) toast.error('There was an error searching');

        // Map the assignments data to the desired Item structure
        const mappedAssignments =
          assignments?.map((assignment) => {
            let lesson_plan_id;
            if (Array.isArray(assignment.user_lesson_plans)) {
              lesson_plan_id = assignment.user_lesson_plans[0]?.lesson_plan_id;
            } else if (assignment.user_lesson_plans) {
              lesson_plan_id = assignment.user_lesson_plans.lesson_plan_id;
            }
            return {
              id: assignment.id,
              name: assignment.title,
              category: 'assignments',
              url: `/lesson-plans/${lesson_plan_id}`,
            };
          }) || [];

        // Get any title of a Lesson Plan "like" the current query
        const { data: lessonPlans, error: lessonPlansError } = await supabase
          .from('lesson_plans')
          .select('id, title')
          .ilike('title', `%${query}%`)
          .eq('creator_id', user?.id);

        //  Display Error Message
        if (lessonPlansError) toast.error('There was an error searching');

        // Map the lesson plan data to the desired Item structure
        const mappedLessonPlans =
          lessonPlans?.map((lessonPlan) => ({
            id: lessonPlan.id,
            name: lessonPlan.title,
            category: 'lesson_plans',
            url: `/lesson-plans/${lessonPlan.id}`,
          })) || [];

        // Get any name of a curriculum "like" the current query
        const { data: curriculumRoadmapsData, error: curriculumRoadmapsError } =
          await supabase
            .from('user_curriculum_details_view')
            .select('user_curriculum_id, curriculum_name')
            .eq('user_id', user?.id)
            .ilike('curriculum_name', `%${query}%`);

        // Display Error Message
        if (curriculumRoadmapsError)
          toast.error('There was an error searching');

        // Map the curriculum data to the desired Item structure
        const mappedCurriculumRoadmaps =
          curriculumRoadmapsData?.map((roadmap) => ({
            id: roadmap.user_curriculum_id as string,
            name: roadmap.curriculum_name as string,
            category: 'curriculum',
            url: `/curriculum-roadmaps/user/${roadmap.user_curriculum_id}`,
          })) || [];

        // Combine data
        const combinedData: IItem[] = [
          ...mappedAssignments,
          ...mappedLessonPlans,
          ...mappedCurriculumRoadmaps,
        ];

        // Set loading state to false
        setIsLoading(false);

        // Set the current items list to the result of the combined queries
        setItems(combinedData);
      }

      // Set loading state to false
      setIsLoading(false);
    };

    // Execute fetching function
    fetchItems();
  }, [query]);

  const value: ICommandPaletteCtxProps = useMemo(
    () => ({
      items,
      open,
      setOpen,
      query,
      setQuery,
      isLoading,
    }),
    [items, open, setOpen, query, setQuery, isLoading],
  );

  return (
    <CommandPaletteCtx.Provider value={value}>
      {open && <CommandPalette items={items} />}
      {children}
    </CommandPaletteCtx.Provider>
  );
}

// * Hook
export function useCommandPalette() {
  const ctx = useContext(CommandPaletteCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error(
      'useCommandPalette must be used within a CommandPaletteProvider',
    );
  }

  return ctx; // Return the context object to be used in the component
}
