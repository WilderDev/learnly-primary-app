'use server';

import {
  TDifficulty,
  TFormat,
  TMaterial,
  TObjective,
  TPace,
  TPhilosophy,
  TStandard,
} from '@/assets/typescript/lesson-plan';
import { TLearningStyle, TTeachingStrategy } from '@/assets/typescript/user';
import { createRequest } from '@/lib/api/createRequest';
import responseContract from '@/lib/api/responseContract';
import { supabaseServer } from '@/lib/auth/supabaseServer';
import capitalize from '@/lib/common/capitalize';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const idAndNameSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

const saveLessonPlanTemplateSchema = z.object({
  title: z.string().nonempty('Title is required'),
  information: z.object({
    subject: idAndNameSchema.nullable(),
    level: idAndNameSchema.nullable(),
    topic: idAndNameSchema.nullable(),
    difficulty: z.enum(['EASY', 'MODERATE', 'CHALLENGING']).nullable(),
    lengthInMin: z.number().int().positive(),
    pace: z.enum(['SLOW', 'MEDIUM', 'FAST']).nullable(),
    philosophy: z.any(),
    format: z.any(),
    learningStyles: z.any(),
    teachingStrategy: z.any(),
    materials: z.any(),
    standards: z.any(),
    objectives: z.any(),
    specialConsiderations: z.string().optional(),
  }),
  students: z.any(), // array of uuids
});

async function saveLessonPlanTemplateAction(
  input: z.infer<typeof saveLessonPlanTemplateSchema>,
) {
  const {
    title,
    information: {
      subject,
      level,
      topic,
      difficulty,
      lengthInMin,
      pace,
      philosophy,
      format,
      learningStyles,
      teachingStrategy,
      materials,
      standards,
      objectives,
      specialConsiderations,
    },
    students,
  } = input;

  try {
    const supabase = supabaseServer();
    const {
      data: { session },
    } = await supabase.auth.getSession();

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
      image_path: `https://source.unsplash.com/1600x900/?${subject?.name},${level?.name},${topic?.name}`,
      length_in_min: lengthInMin,
      difficulty: (difficulty as TDifficulty) || null,
      pace: (pace as TPace) || null,
      philosophy: (philosophy as TPhilosophy) || null,
      format: (format as TFormat) || null,
      learning_styles: (learningStyles as TLearningStyle[]) || [],
      teaching_strategy: (teachingStrategy as TTeachingStrategy) || null,
      materials: (materials as TMaterial[]) || [],
      standards: (standards as TStandard[]) || [],
      objectives: (objectives as TObjective[]) || [],
      // is_public: true,
      special_considerations: specialConsiderations || '',
    };

    // 2. Save to Supabase (Public)
    const { data: template, error: templateError } = await supabase
      .from('lesson_plan_templates')
      .insert(templateDetails)
      .select('id')
      .single();

    if (templateError) return responseContract('Something went wrong', false);

    // 3. Save to Supabase (Private)
    const { error: userTemplateError } = await supabase
      .from('user_lesson_plan_templates')
      .insert({
        teacher_id: session?.user.id!,
        lesson_plan_template_id: template?.id!,
        students,
      });

    if (userTemplateError)
      return responseContract('Something went wrong', false);

    revalidatePath('/lesson-creator'); // ✅

    return responseContract('Success!', true);
  } catch (error) {
    return responseContract((error as Error).message, false);
  }
}

export const saveLessonPlanTemplate = createRequest(
  saveLessonPlanTemplateAction,
  saveLessonPlanTemplateSchema,
);
