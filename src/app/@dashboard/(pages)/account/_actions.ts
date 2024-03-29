'use server';

import {
  TGoal,
  TLearningEnvironment,
  TLearningResource,
  TLearningStyle,
  TLessonDetailLevel,
  TLessonStructure,
  TSpecialNeed,
  TTeachingStrategy,
  TTeachingTool,
} from '@/assets/typescript/user';
import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import baseUrl from '@/lib/common/baseUrl';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  avatar: z.string(),
});

async function updateProfileAction(input: z.infer<typeof updateProfileSchema>) {
  try {
    const supabase = supabaseServer();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase
      .from('teacher_profiles')
      .update({
        first_name: input.firstName,
        last_name: input.lastName,
        avatar_url: input.avatar,
      })
      .eq('id', session?.user?.id);

    const { error: error2 } = await supabase.auth.updateUser({
      email: input.email,
      phone: input.phone,
    });

    if (error || error2)
      return responseContract('Something went wrong!', false);

    await supabase.auth.refreshSession({
      refresh_token: session?.refresh_token!,
    });
    await supabase.auth.reauthenticate;
    revalidatePath('/account'); // ✅

    return responseContract(input.phone || '', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const updateProfile = createRequest(
  updateProfileAction,
  updateProfileSchema,
);

// * Teaching Preferences
const updateTeachingPreferencesSchema = z.object({
  teachingStrategies: z.array(z.string()),
  lessonDetailLevel: z.string(),
  teachingTools: z.array(z.string()),
  lessonStructure: z.string().nullable(),
});

async function updateTeachingPreferencesAction(
  input: z.infer<typeof updateTeachingPreferencesSchema>,
) {
  try {
    const supabase = supabaseServer();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase
      .from('teaching_preferences')
      .update({
        preferred_teaching_strategies:
          input.teachingStrategies as TTeachingStrategy[],
        preferred_lesson_detail_level:
          input.lessonDetailLevel as TLessonDetailLevel,
        preferred_teaching_tools: input.teachingTools as TTeachingTool[],
        preferred_lesson_structure:
          input.lessonStructure as TLessonStructure | null,
      })
      .eq('id', session?.user?.id);

    if (error) return responseContract(error.message, false);

    revalidatePath('/account'); // ✅
    revalidatePath('/lesson-creator'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const updateTeachingPreferences = createRequest(
  updateTeachingPreferencesAction,
  updateTeachingPreferencesSchema,
);

// * Add Student
const addStudentSchema = z.object({
  name: z.string(),
  birthday: z.string(),
  avatarUrl: z.string(),
});

async function addStudentAction(input: z.infer<typeof addStudentSchema>) {
  try {
    const supabase = supabaseServer();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const first_name = input.name.split(' ')[0] || '';
    const last_name = input.name.split(' ').slice(1).join(' ') || '';

    const { error } = await supabase.from('student_profiles').insert({
      first_name,
      last_name,
      birthday: input.birthday,
      avatar_url: input.avatarUrl,
      teacher_id: session?.user?.id!,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath('/account'); // ✅
    revalidatePath('/lesson-creator'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const addStudent = createRequest(addStudentAction, addStudentSchema);

// * Edit Student Preferences
const editStudentSchema = z.object({
  studentId: z.string().uuid(),
  name: z.string(),
  birthday: z.string(),
  avatarUrl: z.string(),
  learningStyles: z.array(z.string()),
  goals: z.array(z.string()),
  learningEnvironments: z.array(z.string()),
  learningResources: z.array(z.string()),
  specialNeeds: z.array(z.string()),
});

async function editStudentAction(input: z.infer<typeof editStudentSchema>) {
  try {
    const supabase = supabaseServer();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const first_name = input.name.split(' ')[0] || '';
    const last_name = input.name.split(' ').slice(1).join(' ') || '';

    const { error: studentProfileError } = await supabase
      .from('student_profiles')
      .update({
        first_name,
        last_name,
        birthday: input.birthday,
        avatar_url: input.avatarUrl,
      })
      .eq('id', input.studentId);

    const { error: studentPrefError } = await supabase
      .from('student_preferences')
      .update({
        learning_styles: input.learningStyles as TLearningStyle[],
        goals: input.goals as TGoal[],
        learning_environment_preferences:
          input.learningEnvironments as TLearningEnvironment[],
        learning_resources_preferences:
          input.learningResources as TLearningResource[],
        special_needs: input.specialNeeds as TSpecialNeed[],
      })
      .eq('id', input.studentId);

    if (studentProfileError || studentPrefError)
      return responseContract('Woops! Something went wrong!', false);

    revalidatePath('/account'); // ✅
    revalidatePath('/lesson-creator'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const editStudent = createRequest(editStudentAction, editStudentSchema);

// * Save Payment Details
const savePaymentDetailsSchema = z.object({
  paymentMethodId: z.string(),
  customerId: z.string(),
  subscriptionId: z.string(),
});

async function savePaymentDetailsAction(
  input: z.infer<typeof savePaymentDetailsSchema>,
) {
  const { paymentMethodId, customerId, subscriptionId } = input;

  try {
    const res = await fetch(baseUrl + '/api/stripe/save-payment-details', {
      method: 'POST',
      body: JSON.stringify({
        paymentMethodId,
        customerId,
        subscriptionId,
      }),
    });

    if (res.status !== 200)
      return responseContract('Woops! Something went wrong!', false);

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const savePaymentDetails = createRequest(
  savePaymentDetailsAction,
  savePaymentDetailsSchema,
);

// * Create Referral Code
async function createReferralCodeAction() {
  let referralCode = ''; // Store the generated referral Code

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters to use in the referral Code

  // Generate a random string of 10 characters
  for (let i = 0; i < 7; i++) {
    referralCode += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from('referrals').insert({
      code: referralCode,
      referrer_id: session?.user.id!,
    });

    if (error) return responseContract(error.message, false);

    revalidatePath('/account'); // ✅

    return responseContract({ referralCode }, true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const createReferralCode = createRequest(createReferralCodeAction);
