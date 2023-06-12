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
import { IUserSubscription, Me, UserStudent } from '@/assets/typescript/user';
import { useAuth } from './AuthProvider';
import AuthSubscribeModal from '@/lib/auth/AuthSubscribeModal';

// * Context
// Interface
interface IUserCtx {
  user: Me | null;
  subscription: IUserSubscription | null;
  students: UserStudent[];
  revalidateUser: () => void;
}

// Initial Value
const UserCtx = createContext<IUserCtx>({
  user: null,
  subscription: null,
  students: [],
  revalidateUser: () => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  // * Hooks
  const { supabase, session } = useAuth();

  // * State
  const [user, setUser] = useState<Me | null>(null);
  const [subscription, setSubscription] = useState<IUserSubscription | null>(
    null,
  );
  const [students, setStudents] = useState<UserStudent[]>([]);

  // * Functions
  // Fetch User
  const fetchUser = useCallback(async () => {
    if (!session) return null;

    const { data, error } = await supabase
      .from('teacher_me_view')
      .select('*')
      .single();

    if (error || !data) return null;

    const transformedUser: Me = {
      id: data.id!,
      firstName: data.first_name!,
      lastName: data.last_name!,
      avatarUrl: data.avatar_url!,
      status: data.status!,
      type: data.type!,
      role: data.role!,
      teachingPreferences: {
        teachingStrategies: data.teaching_strategies!,
        lessonDetailLevel: data.lesson_detail_level!,
        teachingTools: data.teaching_tools!,
        lessonStructure: data.lesson_structure!,
      },
    };

    const subStatus = data?.subscription_status!;
    const isAuthorized = subStatus === 'active' || subStatus === 'trialing';

    const trialEnd = data.subscription_trial_end!; // 2023-05-25 00:10:38.459876+00;
    const isEndingSoon =
      new Date(trialEnd).getTime() - Date.now() < 86400000 * 3; // 3 day

    const transformedSubscription: IUserSubscription = {
      isAuthorized,
      status: subStatus,
      isEndingSoon: subStatus === 'active' ? false : isEndingSoon,
      trialEnd: data.subscription_trial_end!,
      billingPortalSessionUrl: data.billing_portal_session_url!,
      stripeSubscriptionId: data.subscription_id!,
      stripeCustomerId: data.stripe_customer_id!,
      renewalDate: data.subscription_current_period_end!,
    };

    // If there was a user and they have not paid after subscription, redirect to billing portal
    if (data && !isAuthorized) {
      return window.location.replace(
        transformedSubscription.billingPortalSessionUrl?.trim() || '/',
      );
    }

    return {
      user: transformedUser,
      subscription: transformedSubscription,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      favoriteSubjects: student.subject_preferences!,
      interests: student.interests!,
      goals: student.goals!,
      learningEnvironments: student.learning_environment_preferences!,
      learningResources: student.learning_resources_preferences!,
      specialNeeds: student.special_needs!,
      // Strenths
      // Weaknesses
      // . . .
    }));

    return transformedStudents;
  }, [supabase, session]);

  // Revalidate User
  const revalidateUser = useCallback(async () => {
    // Get User
    const res = await fetchUser();

    // Set User
    setUser(res?.user || null);

    // Set Subscription
    setSubscription(res?.subscription || null);

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
      subscription,
      students,
      revalidateUser,
      revalidateStudents,
    }),
    [user, subscription, students, revalidateUser, revalidateStudents],
  );

  // * Render
  return (
    <UserCtx.Provider value={value}>
      {/* If Trial Ending Soon */}
      {subscription?.isAuthorized && subscription?.isEndingSoon && (
        <AuthSubscribeModal
          initialOpen={true}
          endDate={subscription?.trialEnd!}
          billingUrl={subscription?.billingPortalSessionUrl!}
        />
      )}

      {/* Children */}
      {children}
    </UserCtx.Provider>
  );
}

// * Hooks
export function useUser() {
  const ctx = useContext(UserCtx);

  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return ctx;
}
