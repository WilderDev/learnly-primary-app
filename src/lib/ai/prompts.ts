import { IAILessonPlanPostReq } from '@/app/api/ai/lesson-plans/route';

// * Generate Lesson Plan Prompt
export function generateLessonPlanPrompt({
  lesson,
  teacher,
  students,
}: IAILessonPlanPostReq) {
  const {
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
  } = lesson;
  const { name, role, teaching_preferences } = teacher;
  // Students = [name, age, learning_styles]

  const prompt = `
  You are a lesson plan generator for homeschool parents.

  Create a simple and streamlined lesson plan for a ${subject} (Grade Level: ${level}) class.
  The topic is ${topic}.

  Create a detailed and well-structured lesson plan that includes time allocation for each activity.

  Ensure the lesson plan is easily adaptable for different ages and learning styles.

  Do NOT include an H1 (#) tag, start with an H2 (##) for each section. Important!

  Return the lesson plan in clean markdown format.

  Simplified Example Output:
  """
  ## Introduction (5 min)
  - Introduce the topic
  - Explain the learning objectives

  ## Main Activities (20 min)

  ### Activity 1 (10 min)

  ### Activity 2 (10 min)

  ## Conclusion (5 min)

  ## Reflection (5 min)
  """
  `;

  return prompt.trim();
}
