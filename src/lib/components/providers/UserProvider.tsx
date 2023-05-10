'use client';

import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createContext } from 'react';
import { Me } from '@/assets/typescript/user';
import { useAuth } from './AuthProvider';

// * Context
// Interface
interface IUserCtx {
  user: Me | null;
  revalidateUser: () => void;
}

// Initial Value
const UserCtx = createContext<IUserCtx>({
  user: null,
  revalidateUser: () => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  // * Hooks
  const { supabase, session } = useAuth();

  // * State
  const [user, setUser] = useState<Me | null>(null);

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
    };

    return transformedUser;
  }, [supabase, session]);

  // Revalidate User
  const revalidateUser = useCallback(async () => {
    // Get User
    const userData = await fetchUser();

    // Set User
    setUser(userData);

    // @ts-ignore
  }, [fetchUser]);

  // * Effects
  // Fetch User
  useEffect(() => {
    // Fetch User
    revalidateUser();
  }, [revalidateUser]);

  // * Value
  const value = {
    user,
    revalidateUser,
  };

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
