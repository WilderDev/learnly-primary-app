'use client';

import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createContext } from 'react';
import { Me, UserStudent } from '@/assets/typescript/user';
import { useAuth } from './AuthProvider';

// * Context
// Interface
interface IUserCtx {
  user: Me | null;
  students: UserStudent[];
  revalidateUser: () => void;
}

// Initial Value
const UserCtx = createContext<IUserCtx>({
  user: null,
  students: [],
  revalidateUser: () => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  // * Hooks
  const { supabase, session } = useAuth();

  // * State
  const [user, setUser] = useState<Me | null>(null);
  const [students, setStudents] = useState<UserStudent[]>([]);

  // * Functions
  // Fetch User
  const fetchUser = useCallback(async () => {
    if (!session) return null;

    const { data: user, error } = await supabase
      .from('teacher_me_view')
      .select('*')
      .single();

    if (error || !user) return null;

    const transformedUser: Me = {
      id: user.id!,
      //   email: user.email!,
      firstName: user.first_name!,
      lastName: user.last_name!,
      avatarUrl: user.avatar_url!,
      status: user.status!,
      type: user.type!,
      role: user.role!,
    };

    return transformedUser;
  }, [supabase, session]);

  // Fetch Students
  const fetchStudents = useCallback(async () => {
    if (!session) return null;

    const { data: students, error } = await supabase
      .from('teacher_students_profiles_view')
      .select('*');

    if (error || !students) return null;

    const transformedStudents: UserStudent[] = students?.map((student) => ({
      id: student.id!,
      firstName: student.first_name!,
      lastName: student.last_name!,
      birthday: student.birthday!,
      avatarUrl: student.avatar_url!,
      learningStyles: student.learning_styles!,
      // . . .
    }));

    return transformedStudents;
  }, [supabase, session]);

  // Revalidate User
  const revalidateUser = useCallback(async () => {
    // Get User
    const userData = await fetchUser();

    // Set User
    setUser(userData);

    // @ts-ignore
  }, [fetchUser]);

  // Revalidate Students
  const revalidateStudents = useCallback(async () => {
    // Get Students
    const studentsData = await fetchStudents();

    // Set Students
    setStudents(studentsData || []);

    // @ts-ignore
  }, [fetchStudents]);

  // * Effects
  // Fetch User
  useEffect(() => {
    // Fetch User
    revalidateUser();
  }, [revalidateUser]);

  // Fetch Students
  useEffect(() => {
    // Fetch Students
    revalidateStudents();
  }, [revalidateStudents]);

  // * Value
  const value = useMemo(
    () => ({
      user,
      students,
      revalidateUser,
      revalidateStudents,
    }),
    [user, students, revalidateUser, revalidateStudents],
  );

  // * Render
  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
}

// * Hooks
export function useUser() {
  const ctx = useContext(UserCtx);

  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return ctx;
}
