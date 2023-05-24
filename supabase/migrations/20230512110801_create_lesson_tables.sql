-- * ENUMS
-- Animals
CREATE TYPE animal AS ENUM ('Bears', 'Bees', 'Birds', 'Butterflies', 'Cats', 'Caterpillars', 'Deer', 'Dogs', 'Dolphins', 'Elephants', 'Foxes', 'Frogs', 'Giraffes', 'Horses', 'Lions', 'Monkies', 'Pandas', 'Rabbits', 'Tigers', 'Turtles', 'Wolves');
-- Levels
CREATE TYPE level AS ENUM ('Buds', 'Sprouts', 'Oaks', 'Pre-K', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
-- Statuses
CREATE TYPE status AS ENUM ('created', 'scheduled', 'completed', 'archived');
-- Difficulties
CREATE TYPE difficulty AS ENUM ('EASY', 'MODERATE', 'CHALLENGING');
-- Paces
CREATE TYPE pace AS ENUM ('SLOW', 'MEDIUM', 'FAST');
-- Philosophies
CREATE TYPE philosophy AS ENUM ('Eclectic/Relaxed', 'Traditional', 'Montessori', 'Unschooling', 'Unit Studies', 'Project-Based', 'Waldorf', 'Reggio Emilia', 'Classical', 'Charlotte Mason', 'Other');
-- Formats
CREATE TYPE format AS ENUM ('Whole Group', 'Small Group', 'Individual');
-- Teaching Strategies
CREATE TYPE teaching_strategy AS ENUM ('Direct Instruction', 'Cooperative Learning', 'Inquiry-Based Learning', 'Differentiated Instruction', 'Expeditionary Learning', 'Personalized Learning', 'Blended Learning', 'Project-Based Learning', 'Problem-Based Learning', 'Socratic Learning', 'Other');
-- Materials
CREATE TYPE material AS ENUM ('Textbook', 'Workbook', 'Worksheet', 'Manipulatives', 'Technology', 'Other');
-- Standards
CREATE TYPE standard AS ENUM ('Common Core', 'Next Generation Science Standards', 'Other');
-- Objectives
CREATE TYPE objective AS ENUM ('Knowledge', 'Comprehension', 'Application', 'Analysis', 'Synthesis', 'Evaluation');
-- Assessment Types
CREATE TYPE assessment_type AS ENUM ('Formative', 'Summative', 'Other');
-- Assessment Methods
CREATE TYPE assessment_method AS ENUM ('Observation', 'Performance', 'Product', 'Other');
-- Assessment Tools
CREATE TYPE assessment_tool AS ENUM ('Quiz', 'Test', 'Exam', 'Rubric', 'Other');
-- Reflection Types
CREATE TYPE reflection_type AS ENUM ('Self', 'Peer', 'Teacher', 'Other');
-- Reflection Methods
CREATE TYPE reflection_method AS ENUM ('Written', 'Verbal', 'Other');

-- * TABLES
-- Subjects
CREATE TABLE subjects (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Name
  name text NOT NULL UNIQUE CHECK (char_length(name) > 0),

  -- Description
  description text NOT NULL,

  -- Image Path
  image_path text NOT NULL,

  -- Short code
  code text NOT NULL UNIQUE CHECK (char_length(code) > 0),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Levels
CREATE TABLE levels (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Name
  name level NOT NULL,

  -- Description
  description text NOT NULL,

  -- Animal
  animal animal NOT NULL,

  -- Image Path
  image_path text NOT NULL,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Topics
CREATE TABLE topics (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Name
  name text NOT NULL CHECK (char_length(name) > 0),

  -- Description
  description text NOT NULL,

  -- Image Path
  image_path text NOT NULL,

  -- Topic Number (1, 2, 3, etc.)
  topic_number SERIAL NOT NULL,

  -- Level ID
  level_id uuid REFERENCES levels(id) ON DELETE CASCADE,

  -- Subject ID
  subject_id uuid REFERENCES subjects(id) ON DELETE CASCADE,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Contraints
  UNIQUE (level_id, subject_id, topic_number)
);

-- Lessons Plans
CREATE TABLE lesson_plans (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Creator ID
  creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Title
  title text NOT NULL CHECK (char_length(title) > 0),

  -- Subject
  subject uuid NOT NULL REFERENCES subjects(id),

  -- Level
  level uuid NOT NULL REFERENCES levels(id),

  -- Topic
  topic uuid NOT NULL REFERENCES topics(id),

  -- Content
  content text NOT NULL,

  -- Tags
  tags text[] NOT NULL DEFAULT '{}',

  -- Image
  image_path text NOT NULL DEFAULT 'https://source.unsplash.com/800x800/?nature,water',

  -- Length
  length_in_min int NOT NULL DEFAULT 60 CHECK (length_in_min > 0),

  -- Is Public
  is_public boolean NOT NULL DEFAULT true,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- User Lesson Plans
CREATE TABLE user_lesson_plans (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Teacher ID
  teacher_id uuid NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,

  -- Lesson Plan ID
  lesson_plan_id uuid NOT NULL REFERENCES lesson_plans(id) ON DELETE CASCADE,

  -- Status
  status status NOT NULL DEFAULT 'created' CHECK (status IN ('created', 'scheduled', 'completed', 'archived')),

  -- Scheduled Date
  scheduled_date timestamptz,

  -- Completion Date
  completion_date timestamptz,

  -- Students (Many to Many)
  students uuid[] NOT NULL DEFAULT '{}'::uuid[] CHECK (array_length(students, 1) > 0),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  UNIQUE (teacher_id, lesson_plan_id)
);

-- Lesson Plan Templates
CREATE TABLE lesson_plan_templates (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Creator ID
  creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Title
  title text NOT NULL UNIQUE CHECK (char_length(title) > 0),

  -- Subject
  subject uuid REFERENCES subjects(id),

  -- Level
  level uuid REFERENCES levels(id),

  -- Topic
  topic uuid REFERENCES topics(id),

  -- Tags
  tags text[] DEFAULT '{}',

  -- Image
  image_path text DEFAULT 'https://source.unsplash.com/800x800/?nature,water',

  -- Length
  length_in_min int DEFAULT 60 CHECK (length_in_min > 0),

  -- Difficulty
  difficulty difficulty,

  -- Pace
  pace pace,

  -- Philosophy
  philosophy philosophy,

  -- Format
  format format,

  -- Learning Styles
  learning_styles learning_style[] DEFAULT '{}'::learning_style[],

  -- Teaching Strategy
  teaching_strategy teaching_strategy,

  -- Materials
  materials material[] DEFAULT '{}'::material[],

  -- Standards
  standards standard[] DEFAULT '{}'::standard[],

  -- Objectives
  objectives objective[] DEFAULT '{}'::objective[],

  -- Assessments
  assessments jsonb[] DEFAULT '{}'::jsonb[],

  -- Special Considerations
  special_considerations text,

  -- Is Public
  is_public boolean NOT NULL DEFAULT true,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  UNIQUE (creator_id, title)
);

-- User Lesson Plan Templates
CREATE TABLE user_lesson_plan_templates (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Teacher ID
  teacher_id uuid NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,

  -- Lesson Plan Template ID
  lesson_plan_template_id uuid NOT NULL REFERENCES lesson_plan_templates(id) ON DELETE CASCADE,

  -- Students (Many to Many)
  students uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  UNIQUE (teacher_id, lesson_plan_template_id)
);


-- * VIEWS
-- Get all subjects, levels, and topics for lesson creator dropdown (If we say that users can add their own... we need to refresh thsi: REFRESH MATERIALIZED VIEW subjects_levels_topics;)
CREATE MATERIALIZED VIEW subjects_levels_topics AS
SELECT
  subjects.id AS subject_id,
  subjects.name AS subject_name,
  levels.id AS level_id,
  levels.name AS level_name,
  topics.id AS topic_id,
  topics.name AS topic_name
FROM
  topics
INNER JOIN
  levels ON topics.level_id = levels.id
INNER JOIN
  subjects ON topics.subject_id = subjects.id;

-- Get all lesson plan templates with students
CREATE VIEW lesson_plan_with_students_view AS
SELECT
  lpt.title,
  json_build_object('id', lpt.subject, 'name', s.name) AS subject,
  json_build_object('id', lpt.level, 'name', lv.name) AS level,
  json_build_object('id', lpt.topic, 'name', t.name) AS topic,
  lpt.length_in_min,
  lpt.difficulty,
  lpt.pace,
  lpt.philosophy,
  lpt.format,
  lpt.learning_styles,
  lpt.teaching_strategy,
  lpt.materials,
  lpt.standards,
  lpt.objectives,
  lpt.special_considerations,
  json_agg(json_build_object(
    'id', sp.id,
    'name', sp.first_name || ' ' || sp.last_name,
    'age', EXTRACT(YEAR FROM AGE(sp.birthday)),
    'learning_styles', spp.learning_styles
  )) AS students
FROM
  lesson_plan_templates lpt
JOIN
  user_lesson_plan_templates ulpt ON lpt.id = ulpt.lesson_plan_template_id
LEFT JOIN
  student_profiles sp ON sp.id = ANY(ulpt.students)
LEFT JOIN
  student_preferences spp ON spp.id = sp.id
LEFT JOIN
  subjects s ON lpt.subject = s.id
LEFT JOIN
  levels lv ON lpt.level = lv.id
LEFT JOIN
  topics t ON lpt.topic = t.id
WHERE
  ulpt.teacher_id = auth.uid()
GROUP BY
  lpt.id, s.name, lv.name, t.name;

-- Get the lesson plans with the creator and students
CREATE VIEW lesson_plans_with_creator_and_students_view AS
SELECT
  lp.id,
  lp.title,
  lp.image_path,
  lp.subject,
  lp.level,
  lp.topic,
  lp.tags,
  lp.content,
  lp.length_in_min,
  lp.is_public,
  tp.first_name AS creator_first_name,
  tp.last_name AS creator_last_name,
  tp.avatar_url AS creator_avatar_url,
  tp.type AS creator_type,
  ulp.students,
  ulp.scheduled_date,
  ulp.completion_date
FROM
  lesson_plans lp
JOIN
  teacher_profiles tp ON lp.creator_id = tp.id
LEFT JOIN
  subjects s ON lp.subject = s.id
LEFT JOIN
  levels lv ON lp.level = lv.id
LEFT JOIN
  topics t ON lp.topic = t.id
LEFT JOIN
  user_lesson_plans ulp ON lp.id = ulp.lesson_plan_id;


-- User's Upcoming Lesson Plans View
CREATE VIEW upcoming_lesson_plans_view AS
SELECT
  lp.id,
  lp.title,
  s.name AS subject,
  lv.name AS level,
  t.name AS topic,
  lp.image_path,
  lp.tags,
  lp.length_in_min,
  ulp.scheduled_date,
  json_agg(json_build_object('id', sp.id, 'first_name', sp.first_name, 'last_name', sp.last_name, 'avatar_url', sp.avatar_url)) AS students
FROM
  lesson_plans lp
JOIN
  teacher_profiles tp ON lp.creator_id = tp.id
LEFT JOIN
  subjects s ON lp.subject = s.id
LEFT JOIN
  levels lv ON lp.level = lv.id
LEFT JOIN
  topics t ON lp.topic = t.id
LEFT JOIN
  user_lesson_plans ulp ON lp.id = ulp.lesson_plan_id
LEFT JOIN
  student_profiles sp ON sp.id = ANY(ulp.students)
WHERE
  ulp.teacher_id = auth.uid() AND
  ulp.scheduled_date BETWEEN date_trunc('day', now()) AND date_trunc('day', now()) + interval '30 days' AND
  ulp.status = 'scheduled'
GROUP BY
  lp.id, lp.title, s.name, lv.name, t.name, lp.image_path, lp.tags, lp.length_in_min, ulp.scheduled_date
ORDER BY
  ulp.scheduled_date ASC;


-- Recently Completed Lesson Plans View
CREATE VIEW recently_completed_lesson_plans_view AS
SELECT
  lp.id,
  lp.title,
  lp.image_path,
  s.name AS subject,
  lv.name AS level,
  t.name AS topic,
  ulp.completion_date,
  json_agg(json_build_object('id', sp.id, 'first_name', sp.first_name, 'last_name', sp.last_name, 'avatar_url', sp.avatar_url)) FILTER (WHERE sp.id IS NOT NULL) AS students
FROM
  lesson_plans lp
JOIN
  teacher_profiles tp ON lp.creator_id = tp.id
LEFT JOIN
  subjects s ON lp.subject = s.id
LEFT JOIN
  levels lv ON lp.level = lv.id
LEFT JOIN
  topics t ON lp.topic = t.id
LEFT JOIN
  user_lesson_plans ulp ON lp.id = ulp.lesson_plan_id
LEFT JOIN
  student_profiles sp ON sp.id = ANY(ulp.students)
WHERE
  ulp.teacher_id = auth.uid() AND
  ulp.status = 'completed'
GROUP BY
  lp.id, lp.title, s.name, lv.name, t.name, ulp.completion_date
ORDER BY
  ulp.completion_date DESC;



-- * FUNCTIONS
-- Create topic from name, description, image_path, level_name, subject_code
CREATE FUNCTION create_topic(
  topic_name text,
  topic_description text,
  topic_image_path text,
  level_name level,
  subject_code text
) RETURNS void AS $$
DECLARE
  level_id uuid;
  subject_id uuid;
BEGIN
  SELECT id INTO level_id FROM levels WHERE name = level_name;
  SELECT id INTO subject_id FROM subjects WHERE code = subject_code;

  IF level_id IS NULL THEN
    RAISE 'Level not found: %s', level_name;
  END IF;

  IF subject_id IS NULL THEN
    RAISE 'Subject not found: %s', subject_code;
  END IF;

  INSERT INTO topics (
    name,
    description,
    image_path,
    level_id,
    subject_id
  ) VALUES (
    topic_name,
    topic_description,
    topic_image_path,
    level_id,
    subject_id
  );
END;
$$ LANGUAGE plpgsql;


-- Creates new event when a new user lesson plan is created
CREATE FUNCTION create_event_on_new_user_lesson_plan()
RETURNS TRIGGER as $$
DECLARE
  lesson lesson_plans%ROWTYPE;
BEGIN
  -- Fetch the lesson_plan
  SELECT * into lesson FROM lesson_plans WHERE id = NEW.lesson_plan_id;

  -- Now insert into events table
  INSERT into events (
    type,
    name,
    description,
    datetime,
    length_in_min,
    image_path,
    location,
    url,
    host_id,
    attendees,
    metadata
  ) VALUES (
    'LESSON',
    lesson.title,
    'Learnly Lesson ❤️',
    new.scheduled_date,
    lesson.length_in_min,
    lesson.image_path,
    'Learnly',
    CONCAT('/lesson-plans/', new.lesson_plan_id),
    new.teacher_id,
    new.students,
    jsonb_build_object('lesson_plan_id', NEW.lesson_plan_id)
  );

  return new;
END;
$$ language plpgsql security definer;


-- * TRIGGERS
--- Create Event on New User Lesson Plan Trigger
create trigger create_event_on_new_user_lesson_plan_trigger
  after insert on user_lesson_plans
  for each row execute procedure create_event_on_new_user_lesson_plan();


-- * INDEXES
--- Lesson Plans
CREATE INDEX idx_lesson_plans_creator_id ON lesson_plans(creator_id);
CREATE INDEX idx_lesson_plans_title ON lesson_plans(title);
CREATE INDEX idx_lesson_plans_level_subject ON lesson_plans(level, subject);
CREATE INDEX idx_lesson_plans_topic ON lesson_plans(topic);

--- User Lesson Plans
CREATE INDEX idx_user_lesson_plans_teacher_id ON user_lesson_plans(teacher_id);
CREATE INDEX idx_user_lesson_plans_lesson_plan_id ON user_lesson_plans(lesson_plan_id);
CREATE INDEX idx_user_lesson_plans_status ON user_lesson_plans(status);

--- Lesson Plan Templates
CREATE INDEX idx_lesson_plan_templates_creator_id ON lesson_plan_templates(creator_id);
CREATE INDEX idx_lesson_plan_templates_title ON lesson_plan_templates(title);
CREATE INDEX idx_lesson_plan_templates_level_subject ON lesson_plan_templates(level, subject);

--- User Lesson Plan Templates
CREATE INDEX idx_user_lesson_plan_templates_teacher_id ON user_lesson_plan_templates(teacher_id);
CREATE INDEX idx_user_lesson_plan_templates_lesson_plan_template_id ON user_lesson_plan_templates(lesson_plan_template_id);

--- Views
CREATE INDEX idx_subjects_levels_topics ON subjects_levels_topics (subject_id, level_id);



-- * POLICIES (ROW LEVEL SECURITY)
--- RLS
ALTER TABLE lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_plan_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_lesson_plan_templates ENABLE ROW LEVEL SECURITY;

--- Policies
---- Lesson Plans
CREATE POLICY "Lesson Plans are viewable by everyone if public" ON lesson_plans FOR SELECT USING (is_public);
CREATE POLICY "Lesson Plans are creatable by anyone" ON lesson_plans FOR INSERT WITH CHECK (true);
CREATE POLICY "Lesson Plans are editable by the creator or admin" ON lesson_plans FOR UPDATE USING (auth.uid() = creator_id OR is_role('ADMIN')) WITH CHECK (auth.uid() = creator_id OR is_role('ADMIN'));
CREATE POLICY "Lesson Plans are deletable by the creator or admin" ON lesson_plans FOR DELETE USING (auth.uid() = creator_id OR is_role('ADMIN'));
---- User Lesson Plans
CREATE POLICY "User Lesson Plans are viewable by the teacher or admin" ON user_lesson_plans FOR SELECT USING (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plans are creatable by the teacher or admin" ON user_lesson_plans FOR INSERT WITH CHECK (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plans are editable by the teacher or admin" ON user_lesson_plans FOR UPDATE USING (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plans are deletable by the teacher or admin" ON user_lesson_plans FOR DELETE USING (auth.uid() = teacher_id OR is_role('ADMIN'));
---- Lesson Plan Templates
CREATE POLICY "Lesson Plan Templates are viewable by everyone" ON lesson_plan_templates FOR SELECT USING (true);
CREATE POLICY "Lesson Plan Templates are creatable by the creator or admin" ON lesson_plan_templates FOR INSERT WITH CHECK (true);
CREATE POLICY "Lesson Plan Templates are editable by the creator or admin" ON lesson_plan_templates FOR UPDATE USING (auth.uid() = creator_id OR is_role('ADMIN'));
CREATE POLICY "Lesson Plan Templates are deletable by the creator or admin" ON lesson_plan_templates FOR DELETE USING (auth.uid() = creator_id OR is_role('ADMIN'));
---- User Lesson Plan Templates
CREATE POLICY "User Lesson Plan Templates are viewable by the teacher or admin" ON user_lesson_plan_templates FOR SELECT USING (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plan Templates are creatable by the teacher or admin" ON user_lesson_plan_templates FOR INSERT WITH CHECK (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plan Templates are editable by the teacher or admin" ON user_lesson_plan_templates FOR UPDATE USING (auth.uid() = teacher_id OR is_role('ADMIN'));
CREATE POLICY "User Lesson Plan Templates are deletable by the teacher or admin" ON user_lesson_plan_templates FOR DELETE USING (auth.uid() = teacher_id OR is_role('ADMIN'));
