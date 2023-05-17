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
    learning_styles,
  } = lesson;

  const { name, role, teaching_preferences } = teacher; // TSK

  // Generate the students section
  const studentsSection =
    students
      ?.map(
        (student, index) =>
          `- Student ${index + 1}: ${student.name}, Age: ${student.age}`,
      )
      ?.join('\n') || '';

  console.log('studentsSection:', studentsSection);

  console.log('studentsSection:', studentsSection);

  // Add the special considerations section if it exists
  const specialConsiderationsSection = special_considerations
    ? `## Special Considerations\n${special_considerations}`
    : '';

  // Use the students' learning styles if no learning styles were provided
  const lessonLearningStyles =
    learning_styles?.length && learning_styles.length > 0
      ? learning_styles
      : students.length > 0
      ? students?.flatMap((student) => student.learning_styles)
      : ['Any'];

  console.log('lessonLearningStyles:', lessonLearningStyles);

  // Conditionally include standards, format, teaching strategy, and materials
  const standardsSection =
    standards?.length > 0
      ? `The standards to be met are ${standards?.join(', ')}.`
      : '';
  const formatSection = format ? `The format of the lesson is ${format}.` : '';
  const teachingStrategySection = teaching_strategy
    ? `The teaching strategy is ${teaching_strategy}.`
    : '';
  const materialsSection = materials?.length
    ? `The materials needed for this lesson are ${materials?.join(', ')}.`
    : '';

  const prompt = `
  You are a lesson plan generator for homeschool parents.

  Create a detailed and well-structured lesson plan that includes time allocation for each activity.
  The class is for subject: ${subject} (Grade Level: ${level}).
  The topic is ${topic}.
  The objectives are ${objectives}.
  The difficulty level is ${difficulty}.
  ${standardsSection}
  ${formatSection}
  ${teachingStrategySection}
  The philosophy is ${philosophy}.
  The lesson's length is ${length_in_min} minutes.
  The pace of the lesson is ${pace}.
  ${materialsSection}
  The preferred learning styles for this lesson are ${lessonLearningStyles?.join(
    ', ',
  )}.

  The students are:
  ${studentsSection}

  Give examples of how you would teach this lesson to the students with the provided information. Create engaging activities and ideas for the lesson.

  Do NOT include an H1 (#) tag, start with an H2 (##) for each section. Important!

  Return the lesson plan in clean markdown format.

  ${specialConsiderationsSection}

  Simplified Example Output:
  """
  ## Introduction (5 min)
  - Introduce the topic
  - Explain the learning objectives and why this is important

  ## Main Activities (40 min)

  ### Activity 1 (20 min)

  - Explain the activity with examples

  ### Activity 2 (20 min)

  - Explain the activity with examples

  ## Conclusion (5 min)

  - Summarize the lesson
  - Ask students if they have any questions
  """
  `;

  console.log('prompt:', prompt);

  return prompt.trim();
}
