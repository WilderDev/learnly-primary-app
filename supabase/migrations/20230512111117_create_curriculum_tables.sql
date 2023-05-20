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

  -- Subject ID
  curriculum_subject_id uuid NOT NULL REFERENCES curriculum_subjects(id),

  -- Level ID
  level_id uuid NOT NULL REFERENCES levels(id),

  -- Level Number
  level_number SERIAL NOT NULL,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- Curriculum Topics
CREATE TABLE curriculum_topics (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

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
--- Get all Subjects with Progress for a Curriculum
CREATE VIEW curriculum_subjects_with_progress_view AS
SELECT
    cs.id,
    cs.curriculum_id,
    cs.subject_id,
    s.name AS subject_name,
    s.description AS subject_description,
    s.image_path AS subject_image_path,
    cs.type AS subject_type,
    CASE
        WHEN COALESCE(total_lessons, 0) = 0 THEN 0
        ELSE (COALESCE(completed_lessons, 0)::decimal / COALESCE(total_lessons, 0)::decimal) * 100
    END AS completion_percentage
FROM
    curriculum_subjects cs
JOIN
    subjects s ON cs.subject_id = s.id
LEFT JOIN (
    SELECT
        curriculum_subject_id,
        COUNT(*) AS total_lessons
    FROM
        curriculum_levels cl
    JOIN curriculum_topics ct ON cl.id = ct.curriculum_level_id
    JOIN curriculum_lessons clsn ON ct.id = clsn.curriculum_topic_id
    GROUP BY
        curriculum_subject_id
) t1 ON cs.id = t1.curriculum_subject_id
LEFT JOIN (
    SELECT
        uc.curriculum_id,
        COUNT(*) AS completed_lessons
    FROM
        user_curriculum_progress ucp
    JOIN
        user_curriculums uc ON ucp.user_curriculum_id = uc.id
    WHERE
        ucp.status = 'COMPLETED'
    GROUP BY
        uc.curriculum_id
) t2 ON cs.curriculum_id = t2.curriculum_id
ORDER BY
    cs.type ASC, completion_percentage ASC;

--- Get all Subject Levels with Progress for a Curriculum
CREATE VIEW curriculum_levels_with_progress_view AS
SELECT
    cl.id,
    cs.curriculum_id,
    cs.subject_id,
    cl.level_id,
    cl.level_number,
    lv.description AS level_description,
    lv.image_path AS level_image_path,
    lv.name AS level_name,
    CASE
        WHEN COALESCE(total_lessons, 0) = 0 THEN 0
        ELSE (COALESCE(completed_lessons, 0)::decimal / COALESCE(total_lessons, 0)::decimal) * 100
    END AS completion_percentage
FROM
    curriculum_levels cl
JOIN
    levels lv ON cl.level_id = lv.id
JOIN
    curriculum_subjects cs ON cl.curriculum_subject_id = cs.id
LEFT JOIN (
    SELECT
        curriculum_level_id,
        COUNT(*) AS total_lessons
    FROM
        curriculum_topics ct
    JOIN curriculum_lessons clsn ON ct.id = clsn.curriculum_topic_id
    GROUP BY
        curriculum_level_id
) t1 ON cl.id = t1.curriculum_level_id
LEFT JOIN (
    SELECT
        uc.curriculum_id,
        COUNT(*) AS completed_lessons
    FROM
        user_curriculum_progress ucp
    JOIN
        user_curriculums uc ON ucp.user_curriculum_id = uc.id
    WHERE
        ucp.status = 'COMPLETED'
    GROUP BY
        uc.curriculum_id
) t2 ON cs.curriculum_id = t2.curriculum_id
ORDER BY
    cl.level_number ASC;


--- Get all Subject Level Topics with Progress for a Curriculum
CREATE VIEW curriculum_topics_with_progress_view AS
SELECT
    ct.id,
    cs.curriculum_id,
    cs.subject_id,
    cl.level_id,
    lv.name AS level_name,
    lv.animal AS level_description,
    tp.name AS topic_name,
    tp.description AS topic_description,
    tp.image_path AS topic_image_path,
    ct.id AS topic_id,
    ct.type AS topic_type,
    ct.topic_number,
    CASE
        WHEN COALESCE(total_lessons, 0) = 0 THEN 0
        ELSE (COALESCE(completed_lessons, 0)::decimal / COALESCE(total_lessons, 0)::decimal) * 100
    END AS completion_percentage
FROM
    curriculum_topics ct
JOIN
    topics tp ON ct.topic_id = tp.id
JOIN
    curriculum_levels cl ON ct.curriculum_level_id = cl.id
JOIN
    levels lv ON cl.level_id = lv.id
JOIN
    curriculum_subjects cs ON cl.curriculum_subject_id = cs.id
LEFT JOIN (
    SELECT
        curriculum_topic_id,
        COUNT(*) AS total_lessons
    FROM
        curriculum_lessons clsn
    GROUP BY
        curriculum_topic_id
) t1 ON ct.id = t1.curriculum_topic_id
LEFT JOIN (
    SELECT
        uc.curriculum_id,
        COUNT(*) AS completed_lessons
    FROM
        user_curriculum_progress ucp
    JOIN
        user_curriculums uc ON ucp.user_curriculum_id = uc.id
    WHERE
        ucp.status = 'COMPLETED'
    GROUP BY
        uc.curriculum_id
) t2 ON cs.curriculum_id = t2.curriculum_id
ORDER BY
    cl.level_number ASC,
    ct.topic_number ASC;


--- Get all Subject Level Topic Lessons with Progress for a Curriculum
CREATE VIEW curriculum_lessons_with_progress_view AS
SELECT
    cls.id as lesson_id,
    cs.curriculum_id as curriculum_id,
    cs.subject_id as subject_id,
    cl.level_id as level_id,
    ct.topic_number as topic_number,
    ct.id as topic_id,
    cls.name AS lesson_name,
    cls.description AS lesson_description,
    cls.image_path AS lesson_image_path,
    cls.type AS lesson_type,
    cls.lesson_number,
    CASE
        WHEN ucp.status = 'COMPLETED' THEN 100
        ELSE 0
    END AS completion_percentage
FROM
    curriculum_lessons cls
JOIN
    curriculum_topics ct ON cls.curriculum_topic_id = ct.id
JOIN
    topics tp ON ct.topic_id = tp.id
JOIN
    curriculum_levels cl ON ct.curriculum_level_id = cl.id
JOIN
    levels lv ON cl.level_id = lv.id
JOIN
    curriculum_subjects cs ON cl.curriculum_subject_id = cs.id
LEFT JOIN
    user_curriculum_progress ucp ON ucp.lesson_id = cls.id AND ucp.user_curriculum_id = cs.curriculum_id
ORDER BY
    cl.level_number ASC,
    ct.topic_number ASC,
    cls.lesson_number ASC;

--- Shareable Curriculum View

--- Shareable Curriculum Subjects View
CREATE VIEW shareable_curriculum_subjects_view AS
SELECT
  cs.id,
  cs.type,
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  c.description AS curriculum_description,
  c.image_path AS curriculum_image_path,
  s.name AS subject_name,
  s.description AS subject_description,
  s.image_path AS subject_image_path
FROM curriculum_subjects cs
JOIN curriculums c ON cs.curriculum_id = c.id
JOIN subjects s ON cs.subject_id = s.id
WHERE c.status = 'PUBLISHED' AND c.is_public = TRUE
ORDER BY cs.type ASC;

--- Shareable Curriculum Levels View
CREATE VIEW shareable_curriculum_levels_view AS
SELECT
  clv.id,
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  cs.id AS subject_id,
  s.name AS subject_name,
  s.description AS subject_description,
  s.image_path AS subject_image_path,
  lv.name AS level_name,
  lv.description AS level_description,
  lv.image_path AS level_image_path
FROM curriculum_levels clv
JOIN levels lv ON clv.level_id = lv.id
JOIN curriculum_subjects cs ON clv.curriculum_subject_id = cs.id
JOIN subjects s ON cs.subject_id = s.id
JOIN curriculums c ON cs.curriculum_id = c.id
WHERE c.status = 'PUBLISHED' AND c.is_public = TRUE
ORDER BY cs.type ASC;


-- * FUNCTIONS
-- Create curriculum_subject from curriculum_name, subject_id, and type
CREATE FUNCTION create_curriculum_subject(
  curriculum_name text,
  subject_id uuid,
  type module_type
) RETURNS uuid AS $$
DECLARE
  curriculum_id uuid;
  new_subject_id uuid;
BEGIN
  SELECT id INTO curriculum_id FROM curriculums WHERE name = curriculum_name;

  IF curriculum_id IS NULL THEN
    RAISE 'Curriculum not found: %s', curriculum_name;
  END IF;

  IF subject_id IS NULL THEN
    RAISE 'Subject not found: %', subject_id;
  END IF;

  INSERT INTO curriculum_subjects (
    curriculum_id,
    subject_id,
    type
  ) VALUES (
    curriculum_id,
    subject_id,
    type
  )
  RETURNING id INTO new_subject_id;

  RETURN new_subject_id;
END;
$$ LANGUAGE plpgsql;

-- Create curriculum_level from curriculum_uuid, and level_id
CREATE FUNCTION create_curriculum_level(
  curriculum_subject_id uuid,
  level_id uuid
) RETURNS TABLE (
  new_curriculum_level_id uuid,
  ret_level_id uuid,
  ret_subject_id uuid
) AS $$
BEGIN
  IF curriculum_subject_id IS NULL THEN
    RAISE 'Curriculum subject not found: %', curriculum_subject_id;
  END IF;

  IF level_id IS NULL THEN
    RAISE 'Level not found: %', level_id;
  END IF;

  INSERT INTO curriculum_levels (
    curriculum_subject_id,
    level_id
  ) VALUES (
    curriculum_subject_id,
    level_id
  )
  RETURNING id INTO new_curriculum_level_id;

  SELECT subject_id INTO ret_subject_id FROM curriculum_subjects WHERE id = curriculum_subject_id;
  ret_level_id := level_id;

  RETURN NEXT;
END;
$$ LANGUAGE plpgsql;


-- Create curriculum_topic by creating a new topic given curriculum_level_id, level_id, subject_id, name, description, image_path, and type
CREATE FUNCTION create_curriculum_topic(
  curriculum_level_id uuid,
  level_id uuid,
  subject_id uuid,
  name text,
  description text,
  image_path text,
  type module_type
) RETURNS uuid AS $$
DECLARE
  new_topic_id uuid;
  new_curriculum_topic_id uuid;
BEGIN
  -- Create new topic
  INSERT INTO topics (
    level_id,
    subject_id,
    name,
    description,
    image_path
  ) VALUES (
    level_id,
    subject_id,
    name,
    description,
    image_path
  )
  RETURNING id INTO new_topic_id;

  -- Create new curriculum topic
  INSERT INTO curriculum_topics (
    curriculum_level_id,
    topic_id,
    type
  ) VALUES (
    curriculum_level_id,
    new_topic_id,
    type
  )
  RETURNING id INTO new_curriculum_topic_id;

  RETURN new_curriculum_topic_id;
END;
$$ LANGUAGE plpgsql;


-- Create curriculum_lesson by creating a new lesson given curriculum_topic_id, name, description, image_path, and type
CREATE FUNCTION create_curriculum_lesson(
  curriculum_topic_id uuid,
  name text,
  description text,
  image_path text,
  type module_type
) RETURNS uuid AS $$
DECLARE
  new_lesson_id uuid;
BEGIN
  INSERT INTO curriculum_lessons (
    curriculum_topic_id,
    name,
    description,
    image_path,
    type
  ) VALUES (
    curriculum_topic_id,
    name,
    description,
    image_path,
    type
  )
  RETURNING id INTO new_lesson_id;

  RETURN new_lesson_id;
END;
$$ LANGUAGE plpgsql;


-- Create complete curriculum given curriculum_name, subject_id, subject_type, and levels_topics_lessons_data
CREATE OR REPLACE FUNCTION create_complete_curriculum(
  curriculum_name text,
  subject_id uuid,
  subject_type module_type,
  levels_topics_lessons_data json
) RETURNS void AS $$
DECLARE
  csid uuid;
  clevel RECORD;
  ctopic uuid;
  level_topic_lesson json;
  topics_data json;
  topic_data json;
  lessons_data json;
  lesson_data json;
BEGIN
  -- Create curriculum subject
  csid := create_curriculum_subject(curriculum_name, subject_id, subject_type);

  FOR i IN 0..json_array_length(levels_topics_lessons_data) - 1
  LOOP
    -- Get level_topic_lesson data for this iteration
    level_topic_lesson := levels_topics_lessons_data->i;

    -- Create curriculum level
    clevel := create_curriculum_level(csid, (level_topic_lesson->>'level_id')::uuid);

    -- Get topics data for this level
    topics_data := level_topic_lesson->'topics_data';

    -- Loop through each topic data for this level
    FOR j IN 0..json_array_length(topics_data) - 1
    LOOP
      -- Get topic data for this iteration
      topic_data := topics_data->j;

      -- Create curriculum topic
      ctopic := create_curriculum_topic(
        clevel.new_curriculum_level_id,
        clevel.ret_level_id,
        clevel.ret_subject_id,
        (topic_data->>'name')::text,
        (topic_data->>'description')::text,
        (topic_data->>'image_path')::text,
        (topic_data->>'type')::module_type
      );

      -- Get lessons data for this topic
      lessons_data := topic_data->'lessons_data';

      -- Loop through each lesson data for this topic
      FOR k IN 0..json_array_length(lessons_data) - 1
      LOOP
        -- Get lesson data for this iteration
        lesson_data := lessons_data->k;

        -- Create curriculum lesson
        PERFORM create_curriculum_lesson(
          ctopic,
          (lesson_data->>'name')::text,
          (lesson_data->>'description')::text,
          (lesson_data->>'image_path')::text,
          (lesson_data->>'type')::module_type
        );
      END LOOP;
    END LOOP;
  END LOOP;
END;
$$ LANGUAGE plpgsql;




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
CREATE INDEX idx_curriculum_levels_curriculum_subject_id ON curriculum_levels(curriculum_subject_id);
CREATE INDEX idx_curriculum_levels_level_id ON curriculum_levels(level_id);
--- Curriculum Topics
CREATE INDEX idx_curriculum_topics_curriculum_level_id ON curriculum_topics(curriculum_level_id);
CREATE INDEX idx_curriculum_topics_topic_id ON curriculum_topics(topic_id);
--- Curriculum Lessons
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

