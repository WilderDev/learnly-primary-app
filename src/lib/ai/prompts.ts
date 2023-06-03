import { IAIAssignmentPostReq } from '@/app/api/ai/assignments/route';
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

  const { name, role, teaching_preferences } = teacher; // teaching_preferences: { teachingStrategies, lessonDetailLevel, teachingTools, lessonStructure }
  const relationship = role === 'PARENT' ? 'parent' : 'teacher';

  // Teaching Strategies
  const teachingStrategies = teaching_preferences?.teachingStrategies?.length
    ? `Favorite Teaching Strategies: ${teaching_preferences?.teachingStrategies?.join(
        ', '
      )}.`
    : '';

  // Lesson Detail Level
  const lessonDetailLevel = teaching_preferences?.lessonDetailLevel
    ? `Ideal lesson plan detail level: ${teaching_preferences?.lessonDetailLevel} (BASIC, INTERMEDIATE, DETAILED).`
    : '';

  // Teaching Tools
  const teachingTools = teaching_preferences?.teachingTools?.length
    ? `Favorite teaching tools: ${teaching_preferences?.teachingTools?.join(
        ', '
      )}.`
    : '';

  // Lesson Structure
  const lessonStructure = teaching_preferences?.lessonStructure
    ? `Ideal lesson plan structure: ${teaching_preferences?.lessonStructure}.`
    : '';

  // Generate the teacher section
  const teachingPreferencesSection = teaching_preferences
    ? `The teacher's teaching preferences are: ${teachingStrategies}, ${lessonDetailLevel}, ${teachingTools}, ${lessonStructure}.`
    : '';

  // Generate the students section
  const studentsSection =
    students
      ?.map(
        (student, index) =>
          `- Student ${index + 1}: ${student.name}, Age: ${
            student.age
          }, Goals: ${student.goals.join(
            ','
          )}, Special Needs: ${student.specialNeeds.join(',')}.`
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
      ? students?.flatMap((student) => student.learningStyles)
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

  Create a detailed and well-structured lesson plan that includes time allocation for each activity. This is the CONTEXT for the lesson plan (it doesn't need to be included in the output).
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
    ', '
  )}.

  The only students (children) are:
  ${studentsSection}

  The teacher is ${name} and their role is ${role}. Write the lesson plan as if you are the ${relationship} of the students.
  ${teachingPreferencesSection}


  ${specialConsiderationsSection}

  ---

  Give quality examples of how you would teach this lesson to the students with the provided information. Create engaging activities and ideas for the lesson. Let them know what materials they will need to complete the lesson. Focus on the instructions and activities and use the context to make the lesson plan.

  Provide them step by step instructions with time allocations for each activity and everything they need to know and have to teach the lesson. Use bullet points as much as possible.

  Do NOT include an H1 (#) tag, start with an H2 (##) for each section. <li> elements should NOT have a paragraph inside them. All Headings should have their own line. Do NOT use code or <pre> blocks. Make the output semantically proper. Important!

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

  const { name, role, teaching_preferences } = teacherBody; // teaching_preferences: { teachingStrategies, lessonDetailLevel, teachingTools, lessonStructure }
  const relationship = role === 'PARENT' ? 'parent' : 'teacher';

  // Teaching Strategies
  const teachingStrategies = teaching_preferences?.teachingStrategies?.length
    ? `Favorite Teaching Strategies: ${teaching_preferences?.teachingStrategies?.join(
        ', '
      )}.`
    : '';

  // Lesson Detail Level
  const lessonDetailLevel = teaching_preferences?.lessonDetailLevel
    ? `Ideal lesson plan detail level: ${teaching_preferences?.lessonDetailLevel} (BASIC, INTERMEDIATE, DETAILED).`
    : '';

  // Teaching Tools
  const teachingTools = teaching_preferences?.teachingTools?.length
    ? `Favorite teaching tools: ${teaching_preferences?.teachingTools?.join(
        ', '
      )}.`
    : '';

  // Lesson Structure
  const lessonStructure = teaching_preferences?.lessonStructure
    ? `Ideal lesson plan structure: ${teaching_preferences?.lessonStructure}.`
    : '';

  // Generate the teacher section
  const teachingPreferencesSection = teaching_preferences
    ? `The teacher's teaching preferences are: ${teachingStrategies}, ${lessonDetailLevel}, ${teachingTools}, ${lessonStructure}.`
    : '';

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
          }, Goals: ${student.goals.join(
            ','
          )}, Special Needs: ${student.specialNeeds.join(',')}.`
      )
      ?.join('\n') || '';

  // Add the special considerations section if it exists
  const additionalRequestsSection = additional_requests
    ? `Please follow these additional requests: ${additional_requests}.`
    : '';

  const prompt = `
You are a lesson plan generator for homeschool parents.

Create a detailed and well-structured lesson plan that includes time allocation for each activity. This is the CONTEXT for the lesson plan (it doesn't need to be included in the output).

The class is for curriculum: ${curriculum}, subject: ${subject}, topic: ${topic}, (Grade Level: ${gradeLevel}).

The Lesson is called: ${lessonName}, and the description is: ${lessonDescription}.

The philosophy is ${philosophy}.

The difficulty level is ${difficulty}.

The lesson's length is ${length_in_min} minutes.

The only students (children) are:
${studentsSection}

The teacher is ${name} and their role is ${role}. Write the lesson plan as if you are the ${relationship} of the students.
${teachingPreferencesSection}

${additionalRequestsSection}

---

Give quality examples of how you would teach this lesson to the students with the provided information. Create engaging activities and ideas for the lesson. Let them know what materials they will need to complete the lesson. Focus on the instructions and activities and use the context to make the lesson plan.

Provide them step by step instructions with time allocations for each activity and everything they need to know and have to teach the lesson. Use bullet points as much as possible.

Do NOT include an H1 (#) tag, start with an H2 (##) for each section. <li> elements should NOT have a paragraph inside them. All Headings should have their own line. Do NOT use code or <pre> blocks. Make the output semantically proper. Important!

Return the lesson plan in clean markdown format.
    `.trim();

  return prompt;
}

export function generateAssignmentPrompt({
  questions,
  lessonPlanContent,
  lessonPlanGrade,
  additionalComments,
}: IAIAssignmentPostReq) {
  function splitQuestions(totalQuestions: number) {
    const multipleChoiceQuestions = Math.floor(Math.random() * totalQuestions);
    const fillInTheBlankQuestions = totalQuestions - multipleChoiceQuestions;

    return {
      multipleChoiceQuestions,
      fillInTheBlankQuestions,
    };
  }

  const { multipleChoiceQuestions, fillInTheBlankQuestions } =
    splitQuestions(questions);

  const prompt = `
Create an assignment worksheet that a homeschool parent can use to give to their child (Grade: ${lessonPlanGrade}). The worksheet should be based on the lesson content provided below.

***LESSON CONTENT***
${lessonPlanContent}
***

Follow the guidelines below when creating the worksheet:
1. The worksheet should contain ${questions} questions - ${fillInTheBlankQuestions} fill-in-the-blank and ${multipleChoiceQuestions} multiple choice questions.
2. Multiple choice questions should have four options - one correct and three incorrect.
3. Focus on testing understanding of the key concepts in the lesson content. Avoid questions focused on the structure or materials used in the lesson.
4. Return in clean markdown format with a space for name and date at the top. Put all questions first then answers at the end. <li> elements should NOT have a paragraph inside them.
5. Additional guidelines: ${additionalComments ?? 'N/A'}.

Follow the example below when creating the worksheet:

***SAMPLE WORKSHEET***

Name: ___________   Date: ___________

## Questions

1. Which of the following is the capital of England?
- (a) Paris
- (b) Madrid
- (c) London
- (d) Berlin

2. What ...

## Answers

1. London (c)
2. ...

***
`.trim();

  return prompt;
}
