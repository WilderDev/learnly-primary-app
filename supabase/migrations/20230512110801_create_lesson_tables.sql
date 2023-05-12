-- * ENUMS
-- Animals
CREATE TYPE animal AS ENUM ('Bears', 'Bees', 'Birds', 'Butterflies', 'Cats', 'Caterpillars', 'Deer', 'Dogs', 'Dolphins', 'Elephants', 'Foxes', 'Frogs', 'Giraffes', 'Horses', 'Lions', 'Monkies', 'Pandas', 'Rabbits', 'Tigers', 'Turtles', 'Wolves');
-- Levels
CREATE TYPE level AS ENUM ('Buds', 'Sprouts', 'Oaks', 'Pre-K', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
-- Statuses
CREATE TYPE status AS ENUM ('created', 'scheduled', 'completed', 'archived');
-- Paces
CREATE TYPE pace AS ENUM ('slow', 'medium', 'fast');
-- Philosophies
CREATE TYPE philosophy AS ENUM ('Eclectic/Relaxed', 'Traditional', 'Montessori', 'Unschooling', 'Unit Studies', 'Project-Based', 'Waldorf', 'Reggio Emilia', 'Classical', 'Charlotte Mason', 'Other');
-- Formats
CREATE TYPE format AS ENUM ('Whole Group', 'Small Group', 'Individual');
-- Learning Styles
CREATE TYPE learning_style AS ENUM ('Visual', 'Auditory', 'Kinesthetic', 'Verbal', 'Logical', 'Social');
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
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Name
  name text NOT NULL UNIQUE CHECK (char_length(name) > 0),

  -- Description
  description text NOT NULL,

  -- Image Url
  image_url text NOT NULL,

  -- Short code
  code text NOT NULL UNIQUE CHECK (char_length(code) > 0),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Levels
CREATE TABLE levels (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Name
  name level NOT NULL,

  -- Animal
  animal animal NOT NULL,

  -- Image Url
  image_url text NOT NULL,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Topics
CREATE TABLE topics (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Name
  name text NOT NULL UNIQUE CHECK (char_length(name) > 0),

  -- Description
  description text NOT NULL,

  -- Image Url
  image_url text NOT NULL,

  -- Topic Number (1, 2, 3, etc.)
  topic_number SERIAL NOT NULL,

  -- Level ID
  level_id uuid REFERENCES levels(id),

  -- Subject ID
  subject_id uuid REFERENCES subjects(id),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Contraints
  UNIQUE (level_id, subject_id, topic_number)
);

-- Lessons Plans
CREATE TABLE lesson_plans (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Creator ID
  creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Title
  title text NOT NULL UNIQUE CHECK (char_length(title) > 0),

  -- Level
  level uuid NOT NULL REFERENCES levels(id),

  -- Subject
  subject uuid NOT NULL REFERENCES subjects(id),

  -- Topic
  topic uuid NOT NULL REFERENCES topics(id),

  -- Content
  content text NOT NULL CHECK (char_length(content) > 0),

  -- Url
  url text,

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
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

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
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Creator ID
  creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Title
  title text NOT NULL UNIQUE CHECK (char_length(title) > 0),

  -- Level
  level uuid NOT NULL REFERENCES levels(id),

  -- Subject
  subject uuid NOT NULL REFERENCES subjects(id),

  -- Topic
  topic uuid REFERENCES topics(id),

  -- Tags
  tags text[] NOT NULL DEFAULT '{}',

  -- Image
  image_path text NOT NULL DEFAULT 'https://source.unsplash.com/800x800/?nature,water',

  -- Length
  length_in_min int NOT NULL DEFAULT 60 CHECK (length_in_min > 0),

  -- Difficulty
  difficulty int NOT NULL DEFAULT 50 CHECK (difficulty > 0 AND difficulty < 100),

  -- Pace
  pace pace NOT NULL DEFAULT 'medium' CHECK (pace IN ('slow', 'medium', 'fast')),

  -- Philosophy
  philosophy philosophy NOT NULL DEFAULT 'Traditional' CHECK (philosophy IN ('Eclectic/Relaxed', 'Traditional', 'Montessori', 'Unschooling', 'Unit Studies', 'Project-Based', 'Waldorf', 'Reggio Emilia', 'Classical', 'Charlotte Mason', 'Other')),

  -- Format
  format format NOT NULL DEFAULT 'Individual' CHECK (format IN ('Whole Group', 'Small Group', 'Individual')),

  -- Learning Styles
  learning_styles learning_style[] NOT NULL DEFAULT '{}'::learning_style[],

  -- Teaching Strategy
  teaching_strategy teaching_strategy NOT NULL DEFAULT 'Direct Instruction' CHECK (teaching_strategy IN ('Direct Instruction', 'Cooperative Learning', 'Inquiry-Based Learning', 'Differentiated Instruction', 'Expeditionary Learning', 'Personalized Learning', 'Blended Learning', 'Project-Based Learning', 'Problem-Based Learning', 'Socratic Learning', 'Other')),

  -- Materials
  materials material[] NOT NULL DEFAULT '{}'::material[],

  -- Standards
  standards standard[] NOT NULL DEFAULT '{}'::standard[],

  -- Objectives
  objectives objective[] NOT NULL DEFAULT '{}'::objective[],

  -- Assessments
  assessments jsonb[] NOT NULL DEFAULT '{}'::jsonb[],

  -- Reflections
  reflections jsonb[] NOT NULL DEFAULT '{}'::jsonb[],

  -- Special Considerations
  special_considerations text,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  UNIQUE (creator_id, title)
);

-- User Lesson Plan Templates
CREATE TABLE user_lesson_plan_templates (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

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


-- * FUNCTIONS
-- Create topic from name, description, image_url, level_name, subject_code
CREATE FUNCTION create_topic(
  topic_name text,
  topic_description text,
  topic_image_url text,
  level_name level,
  subject_code text
) RETURNS void AS $$
DECLARE
  level_id uuid;
  subject_id uuid;
BEGIN
  SELECT id INTO level_id FROM levels WHERE name = level_name;
  SELECT id INTO subject_id FROM subjects WHERE code = subject_code;

  -- IF level_id IS NULL THEN
  --   RAISE 'Level not found: %s', level_name;
  -- END IF;

  -- IF subject_id IS NULL THEN
  --   RAISE 'Subject not found: %s', subject_code;
  -- END IF;

  INSERT INTO topics (
    name,
    description,
    image_url,
    level_id,
    subject_id
  ) VALUES (
    topic_name,
    topic_description,
    topic_image_url,
    level_id,
    subject_id
  );
END;
$$ LANGUAGE plpgsql;


-- * TRIGGERS


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
