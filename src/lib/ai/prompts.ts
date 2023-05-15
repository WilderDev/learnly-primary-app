import { IAILessonPlanPostReq } from '@/app/api/ai/lesson-plans/route';

// * Generate Lesson Plan Prompt
export function generateLessonPlanPrompt({
  lesson,
  teacher,
  students,
}: IAILessonPlanPostReq) {
  const { subject, level, topic, objectives, difficulty, standards } = lesson;
  const { name, role, years_experience, teaching_preferences } = teacher;

  const prompt = `
You are a lesson plan generator for homeschool parents.

Create a simple and streamlined lesson plan for a ${subject} (Grade Level: ${level}) class.
The topic is ${topic}.

Create a detailed and well-structured lesson plan that includes time allocation for each activity.
Ensure the lesson plan is easily adaptable for different ages and learning styles.
Do NOT include an H1 tag, start with an H2 for each section.
Return the lesson plan in clean markdown format.
`;

  return prompt.trim();
}

// export const runtime = 'edge'
/// ! ==========GOALS========== ! \\\
// subject: string
// level: string
// topic: string | null
// objectives: Database["public"]["Enums"]["objective"][]
/// * =========extra=========== * \\\
// difficulty: number
// standards: Database["public"]["Enums"]["standard"][]
/// ======================================= \\\

/// ! ==========STRATEGY========== ! \\\
// format: Database["public"]["Enums"]["format"]
// teaching_strategy: Database["public"]["Enums"]["teaching_strategy"]
// philosophy: Database["public"]["Enums"]["philosophy"]
/// * =========extra=========== * \\\
// length_in_min: number
// pace: Database["public"]["Enums"]["pace"]
/// ======================================= \\\

/// ! ==========TOOLS========== ! \\\
// materials: Database["public"]["Enums"]["material"][]
// special_considerations: string | null
/// * =========extra=========== * \\\
// reflections: Json[]
// learning_styles: Database["public"]["Enums"]["learning_style"][]
