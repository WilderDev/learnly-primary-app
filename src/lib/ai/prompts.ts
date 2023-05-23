import { IAICurriculumLessonPlanPostReq } from '@/app/api/ai/lesson-plans/curriculum/route';
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

  // Add the special considerations section if it exists
  const specialConsiderationsSection = special_considerations
    ? `Please follow these special considerations: ${special_considerations}.`
    : '';

  // Use the students' learning styles if no learning styles were provided
  const lessonLearningStyles =
    learning_styles?.length && learning_styles.length > 0
      ? learning_styles
      : students.length > 0
      ? students?.flatMap((student) => student.learning_styles)
      : ['Any'];

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
  const objectivesSection = objectives?.length
    ? `The objectives for this lesson are ${objectives?.join(', ')}.`
    : '';
  const difficultySection = difficulty
    ? `The difficulty level is ${difficulty}.`
    : '';
  const philosophySection = philosophy
    ? `The philosophy is ${philosophy}.`
    : '';
  const paceSection = pace ? `The pace of the lesson is ${pace}.` : '';

  const prompt = `
  You are a lesson plan generator for homeschool parents.

  Create a detailed and well-structured lesson plan that includes time allocation for each activity.
  The class is for subject: ${subject} (Grade Level: ${level}).
  The topic is ${topic}.
  ${objectivesSection}
  ${difficultySection}
  ${standardsSection}
  ${formatSection}
  ${teachingStrategySection}
  ${philosophySection}
  The lesson's length is ${length_in_min} minutes.
  ${paceSection}
  ${materialsSection}
  The preferred learning styles for this lesson are ${lessonLearningStyles?.join(
    ', ',
  )}.

  The students (children) are:
  ${studentsSection}

  ${specialConsiderationsSection}

  Give quality examples of how you would teach this lesson to the students with the provided information. Create engaging activities and ideas for the lesson. Let them know what materials they will need to complete the lesson.

  Do NOT include an H1 (#) tag, start with an H2 (##) for each section. Important!

  Return the lesson plan in clean markdown format.
  `;

  return prompt.trim();
}

export function generateCurriculumLessonPlanPrompt({
  lessonBody,
  teacherBody,
  studentsBody,
}: IAICurriculumLessonPlanPostReq) {
  const {
    curriculum,
    subject,
    level,
    topic,
    lessonName,
    lessonDescription,
    philosophy,
    difficulty,
    length_in_min,
    additional_requests,
  } = lessonBody;

  const { name, role, teaching_preferences } = teacherBody; // TSK

  // If level is "Buds", "Sprouts", or "Oaks" change it to "Pre-K (Buds)", "K-2 (Sprouts)", or "3-5 (Oaks)
  const gradeLevel =
    level === 'Buds'
      ? 'Pre-K (Buds)'
      : level === 'Sprouts'
      ? 'Pre-K (Sprouts)'
      : level === 'Oaks'
      ? 'Pre-K (Oaks)'
      : level;

  // Generate the students section
  const studentsSection =
    studentsBody
      ?.map(
        (student, index) =>
          `- Student ${index + 1}: ${student.name}, Age: ${
            student.age
          }, Learning Styles: ${student?.learning_styles?.join(', ')}
            `,
      )
      ?.join('\n') || '';

  // Add the special considerations section if it exists
  const additionalRequestsSection = additional_requests
    ? `Please follow these additional requests: ${additional_requests}.`
    : '';

  const prompt = `
You are a lesson plan generator for homeschool parents.

Create a detailed and well-structured lesson plan that includes time allocation for each activity.

The class is for curriculum: ${curriculum}, subject: ${subject}, topic: ${topic}, (Grade Level: ${gradeLevel}).

The Lesson is called: ${lessonName}, and the description is: ${lessonDescription}.

The philosophy is ${philosophy}.

The difficulty level is ${difficulty}.

The lesson's length is ${length_in_min} minutes.

The students (children) are:
${studentsSection}

${additionalRequestsSection}

Give quality examples of how you would teach this lesson to the students with the provided information. Create engaging activities and ideas for the lesson. Let them know what materials they will need to complete the lesson.

Do NOT include an H1 (#) tag, start with an H2 (##) for each section. Important!

Return the lesson plan in clean markdown format.
    `.trim();

  return prompt;
}
