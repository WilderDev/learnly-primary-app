-- * ENUMS
--- Curriculum Status
CREATE TYPE curriculum_status AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

--- Curriculum Type
CREATE TYPE curriculum_type AS ENUM ('RECOMMENDED', 'POPULAR', 'SUPPLEMENTARY', 'COMMUNITY', 'CUSTOM');

--- Module Type
CREATE TYPE module_type AS ENUM ('CORE', 'ELECTIVE');

--- Progress Status
CREATE TYPE progress_status AS ENUM ('IN_PROGRESS', 'COMPLETED', 'SKIPPED', 'LOCKED');

-- * TABLES
--- Curriculums
CREATE TABLE curriculums (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Creator ID
  creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Name
  name text NOT NULL,

  -- Description
  description text NOT NULL,

  -- Image Path
  image_path text NOT NULL,

  -- Status
  status curriculum_status NOT NULL DEFAULT 'DRAFT',

  -- Type
  type curriculum_type NOT NULL DEFAULT 'RECOMMENDED',

  -- Tags
  tags text[] NOT NULL DEFAULT '{}',

  -- Is Public
  is_public boolean NOT NULL DEFAULT true,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- Curriculum Subjects
CREATE TABLE curriculum_subjects (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id),

  -- Subject ID
  subject_id uuid NOT NULL REFERENCES subjects(id),

  -- Core / Elective
  type module_type NOT NULL DEFAULT 'CORE',

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- Curriculum Levels
CREATE TABLE curriculum_levels (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id),

  -- Subject ID
  curriculum_subject_id uuid NOT NULL REFERENCES curriculum_subjects(id),

  -- Level ID
  level_id uuid NOT NULL REFERENCES levels(id),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- Curriculum Topics
CREATE TABLE curriculum_topics (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id),

  -- Level ID
  curriculum_level_id uuid NOT NULL REFERENCES curriculum_levels(id),

  -- Topic ID
  topic_id uuid NOT NULL REFERENCES topics(id),

  -- Topic Number
  topic_number SERIAL NOT NULL,

  -- Core / Elective
  type module_type NOT NULL DEFAULT 'CORE',

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- Curriculum Lessons
CREATE TABLE curriculum_lessons (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id),

  -- Topic ID
  curriculum_topic_id uuid NOT NULL REFERENCES curriculum_topics(id),

  -- Name
  name text NOT NULL,

  -- Description
  description text NOT NULL,

  -- Image Path
  image_path text NOT NULL,

  -- Lesson Number
  lesson_number SERIAL NOT NULL,

  -- Core / Elective
  type module_type NOT NULL DEFAULT 'CORE',

  -- Lesson Plans
  lesson_plan_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Curriculum Pre-requisites
CREATE TABLE curriculum_prerequisites (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Curriculum Lesson ID
  lesson_id uuid NOT NULL REFERENCES curriculum_lessons(id),

  -- Curriculum Lesson Prerequisite ID
  lesson_prerequisite_id uuid NOT NULL REFERENCES curriculum_lessons(id),

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  CONSTRAINT not_own_prerequisite CHECK (lesson_id != lesson_prerequisite_id),
  CONSTRAINT unique_prerequisite UNIQUE (lesson_id, lesson_prerequisite_id)
);

--- User Curriculums
CREATE TABLE user_curriculums (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID
  user_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id),

  -- Students
  student_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  CONSTRAINT unique_user_curriculum UNIQUE (user_id, curriculum_id)
);

--- User Curriculum Progress
CREATE TABLE user_curriculum_progress (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID
  user_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- User Curriculum ID
  user_curriculum_id uuid NOT NULL REFERENCES user_curriculums(id),

  -- Curriculum Lesson ID
  lesson_id uuid NOT NULL REFERENCES curriculum_lessons(id),

  -- Status
  status progress_status NOT NULL DEFAULT 'IN_PROGRESS',

  -- Completion Date
  completion_date timestamptz DEFAULT NULL,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  -- Constraints
  CONSTRAINT unique_user_curriculum_progress UNIQUE (user_id, user_curriculum_id, lesson_id)
);


-- * VIEWS


-- * FUNCTIONS


-- * TRIGGERS


-- * INDEXES
--- Curriculums
CREATE INDEX idx_curriculums_creator_id ON curriculums(creator_id);
CREATE INDEX idx_curriculums_status ON curriculums(status);
CREATE INDEX idx_curriculums_type ON curriculums(type);
CREATE INDEX idx_curriculums_is_public ON curriculums(is_public);
--- Curriculum Subjects
CREATE INDEX idx_curriculum_subjects_curriculum_id ON curriculum_subjects(curriculum_id);
CREATE INDEX idx_curriculum_subjects_subject_id ON curriculum_subjects(subject_id);
--- Curriculum Levels
CREATE INDEX idx_curriculum_levels_curriculum_id ON curriculum_levels(curriculum_id);
CREATE INDEX idx_curriculum_levels_curriculum_subject_id ON curriculum_levels(curriculum_subject_id);
CREATE INDEX idx_curriculum_levels_level_id ON curriculum_levels(level_id);
--- Curriculum Topics
CREATE INDEX idx_curriculum_topics_curriculum_id ON curriculum_topics(curriculum_id);
CREATE INDEX idx_curriculum_topics_curriculum_level_id ON curriculum_topics(curriculum_level_id);
CREATE INDEX idx_curriculum_topics_topic_id ON curriculum_topics(topic_id);
--- Curriculum Lessons
CREATE INDEX idx_curriculum_lessons_curriculum_id ON curriculum_lessons(curriculum_id);
CREATE INDEX idx_curriculum_lessons_curriculum_topic_id ON curriculum_lessons(curriculum_topic_id);
--- Curriculum Prerequisites
CREATE INDEX idx_curriculum_prerequisites_lesson_id ON curriculum_prerequisites(lesson_id);
CREATE INDEX idx_curriculum_prerequisites_lesson_prerequisite_id ON curriculum_prerequisites(lesson_prerequisite_id);
--- User Curriculums
CREATE INDEX idx_user_curriculums_user_id ON user_curriculums(user_id);
CREATE INDEX idx_user_curriculums_curriculum_id ON user_curriculums(curriculum_id);
--- User Curriculum Progress
CREATE INDEX idx_user_curriculum_progress_user_id ON user_curriculum_progress(user_id);
CREATE INDEX idx_user_curriculum_progress_user_curriculum_id ON user_curriculum_progress(user_curriculum_id);
CREATE INDEX idx_user_curriculum_progress_lesson_id ON user_curriculum_progress(lesson_id);


-- * POLICIES (ROW LEVEL SECURITY)
--- RLS
ALTER TABLE curriculums ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE curriculum_prerequisites ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_curriculums ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_curriculum_progress ENABLE ROW LEVEL SECURITY;

--- Policies
---- Curriculums
CREATE POLICY "Curriculums are viewable by everyone if public or the creator" ON curriculums FOR SELECT USING (is_public = true OR auth.uid() = creator_id);
CREATE POLICY "Curriculums are creatable by anyone" ON curriculums FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculums are editable by the creator" ON curriculums FOR UPDATE USING (auth.uid() = creator_id) WITH CHECK (auth.uid() = creator_id);
CREATE POLICY "Curriculums are deletable by the creator" ON curriculums FOR DELETE USING (auth.uid() = creator_id);
---- Curriculum Subjects
CREATE POLICY "Curriculum subjects are viewable by everyone" ON curriculum_subjects FOR SELECT USING (true);
CREATE POLICY "Curriculum subjects are creatable by anyone" ON curriculum_subjects FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculum subjects are editable by the creator" ON curriculum_subjects FOR UPDATE USING (true);
CREATE POLICY "Curriculum subjects are deletable by the creator" ON curriculum_subjects FOR DELETE USING (true);
---- Curriculum Levels
CREATE POLICY "Curriculum levels are viewable by everyone" ON curriculum_levels FOR SELECT USING (true);
CREATE POLICY "Curriculum levels are creatable by anyone" ON curriculum_levels FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculum levels are editable by the creator" ON curriculum_levels FOR UPDATE USING (true);
CREATE POLICY "Curriculum levels are deletable by the creator" ON curriculum_levels FOR DELETE USING (true);
---- Curriculum Topics
CREATE POLICY "Curriculum topics are viewable by everyone" ON curriculum_topics FOR SELECT USING (true);
CREATE POLICY "Curriculum topics are creatable by anyone" ON curriculum_topics FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculum topics are editable by the creator" ON curriculum_topics FOR UPDATE USING (true);
CREATE POLICY "Curriculum topics are deletable by the creator" ON curriculum_topics FOR DELETE USING (true);
---- Curriculum Lessons
CREATE POLICY "Curriculum lessons are viewable by everyone" ON curriculum_lessons FOR SELECT USING (true);
CREATE POLICY "Curriculum lessons are creatable by anyone" ON curriculum_lessons FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculum lessons are editable by the creator" ON curriculum_lessons FOR UPDATE USING (true);
CREATE POLICY "Curriculum lessons are deletable by the creator" ON curriculum_lessons FOR DELETE USING (true);
---- Curriculum Prerequisites
CREATE POLICY "Curriculum prerequisites are viewable by everyone" ON curriculum_prerequisites FOR SELECT USING (true);
CREATE POLICY "Curriculum prerequisites are creatable by anyone" ON curriculum_prerequisites FOR INSERT WITH CHECK (true);
CREATE POLICY "Curriculum prerequisites are editable by the creator" ON curriculum_prerequisites FOR UPDATE USING (true);
CREATE POLICY "Curriculum prerequisites are deletable by the creator" ON curriculum_prerequisites FOR DELETE USING (true);
---- User Curriculums
CREATE POLICY "User curriculums are viewable by the creator" ON user_curriculums FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "User curriculums are creatable by anyone" ON user_curriculums FOR INSERT WITH CHECK (true);
CREATE POLICY "User curriculums are editable by the creator" ON user_curriculums FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "User curriculums are deletable by the creator" ON user_curriculums FOR DELETE USING (auth.uid() = user_id);
---- User Curriculum Progress
CREATE POLICY "User curriculum progress is viewable by the creator" ON user_curriculum_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "User curriculum progress is creatable by anyone" ON user_curriculum_progress FOR INSERT WITH CHECK (true);
CREATE POLICY "User curriculum progress is editable by the creator" ON user_curriculum_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "User curriculum progress is deletable by the creator" ON user_curriculum_progress FOR DELETE USING (auth.uid() = user_id);

