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
  status curriculum_status NOT NULL DEFAULT 'PUBLISHED',

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
  curriculum_id uuid NOT NULL REFERENCES curriculums(id) ON DELETE CASCADE,

  -- Subject ID
  subject_id uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,

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
  curriculum_subject_id uuid NOT NULL REFERENCES curriculum_subjects(id) ON DELETE CASCADE,

  -- Level ID
  level_id uuid NOT NULL REFERENCES levels(id) ON DELETE CASCADE,

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
  curriculum_level_id uuid NOT NULL REFERENCES curriculum_levels(id) ON DELETE CASCADE,

  -- Topic ID
  topic_id uuid NOT NULL REFERENCES topics(id) ON DELETE CASCADE,

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
  curriculum_topic_id uuid NOT NULL REFERENCES curriculum_topics(id) ON DELETE CASCADE,

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
  lesson_id uuid NOT NULL REFERENCES curriculum_lessons(id) ON DELETE CASCADE,

  -- Curriculum Lesson Prerequisite ID
  lesson_prerequisite_id uuid NOT NULL REFERENCES curriculum_lessons(id) ON DELETE CASCADE,

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
  user_id uuid NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,

  -- Curriculum ID
  curriculum_id uuid NOT NULL REFERENCES curriculums(id) ON DELETE CASCADE,

  -- Students
  student_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

--- User Curriculum Progress
CREATE TABLE user_curriculum_progress (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- User ID
  user_id uuid NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,

  -- User Curriculum ID
  user_curriculum_id uuid NOT NULL REFERENCES user_curriculums(id) ON DELETE CASCADE,

  -- Curriculum Lesson ID
  lesson_id uuid NOT NULL REFERENCES curriculum_lessons(id) ON DELETE CASCADE,

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
-- Public Profile View
CREATE VIEW public_teacher_profile_view AS (
  SELECT
    p.id,
    p.first_name,
    p.last_name,
    p.avatar_url,
    p.status,
    p.type,
    json_agg(DISTINCT jsonb_build_object(
      'id', l.id,
      'title', l.title,
      'image_path', l.image_path,
      'tags', l.tags,
      'length_in_min', l.length_in_min,
      'subject', jsonb_build_object(
        'id', s.id,
        'name', s.name
      ),
      'level', jsonb_build_object(
        'id', lv.id,
        'name', lv.name
      ),
      'topic', jsonb_build_object(
        'id', t.id,
        'name', t.name
      ),
      'created_at', l.created_at
    )) FILTER (WHERE l.is_public = TRUE) AS lessons,
    json_agg(DISTINCT jsonb_build_object(
      'id', c.id,
      'name', c.name,
      'description', c.description,
      'image_path', c.image_path,
      'status', c.status
    )) FILTER (WHERE uc.user_id = p.id AND c.is_public = TRUE AND c.status = 'PUBLISHED') AS curriculums
  FROM
    teacher_profiles p
    LEFT JOIN lesson_plans l ON p.id = l.creator_id
    LEFT JOIN subjects s ON l.subject = s.id
    LEFT JOIN levels lv ON l.level = lv.id
    LEFT JOIN topics t ON l.topic = t.id
    LEFT JOIN user_curriculums uc ON p.id = uc.user_id
    LEFT JOIN curriculums c ON uc.curriculum_id = c.id
  GROUP BY
    p.id
);

--- Get all Curriculums (with Progress for a User if they have it saved in their User Curriculums)
CREATE VIEW curriculum_with_progress_view AS
SELECT
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  c.description AS curriculum_description,
  c.image_path AS curriculum_image_path,
  c.tags AS curriculum_tags,
  tp.id AS creator_id,
  tp.first_name AS creator_first_name,
  tp.last_name AS creator_last_name,
  tp.avatar_url AS creator_avatar_url,
  COALESCE(lesson_stats.total_lessons, 0) AS total_lessons,
  COALESCE(lesson_stats.completed_lessons, 0) AS completed_lessons,
  CASE
    WHEN COALESCE(lesson_stats.total_lessons, 0) = 0 THEN 0
    ELSE (COALESCE(lesson_stats.completed_lessons, 0) / COALESCE(lesson_stats.total_lessons, 0)) * 100
  END AS progress_percentage,
  students.students,
  (
    SELECT uc.id
    FROM user_curriculums uc
    WHERE uc.curriculum_id = c.id AND uc.user_id = auth.uid()
    LIMIT 1
  ) AS user_curriculum_id
FROM
  curriculums c
  INNER JOIN teacher_profiles tp ON c.creator_id = tp.id
  LEFT JOIN (
    SELECT
      uc.curriculum_id AS curriculum_id,
      COUNT(*) AS total_lessons,
      COUNT(ucp.status = 'COMPLETED' OR NULL) AS completed_lessons
    FROM
      user_curriculum_progress ucp
      INNER JOIN user_curriculums uc ON ucp.user_curriculum_id = uc.id
    WHERE
      uc.user_id = auth.uid() AND
      ucp.status IS NOT NULL
    GROUP BY
      uc.curriculum_id
  ) AS lesson_stats
    ON lesson_stats.curriculum_id = c.id
  LEFT JOIN (
    SELECT
      uc.curriculum_id AS curriculum_id,
      json_agg(json_build_object('name', sp.first_name || ' ' || sp.last_name, 'avatar_url', sp.avatar_url)) AS students
    FROM
      user_curriculums uc,
      unnest(uc.student_ids) s(student_id)
      LEFT JOIN student_profiles sp ON s.student_id = sp.id
    WHERE
      uc.user_id = auth.uid()
    GROUP BY
      uc.curriculum_id
  ) AS students
    ON students.curriculum_id = c.id
WHERE
  c.is_public = TRUE AND
  c.status = 'PUBLISHED';




--- Get all Subjects (with Progress for a Curriculum if the User has it saved in their User Curriculums)
CREATE VIEW curriculum_subjects_with_progress_view AS
SELECT
  uc.id AS user_curriculum_id,   -- added this field
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  c.description AS curriculum_description,
  c.image_path AS curriculum_image_path,
  cs.id AS curriculum_subject_id,
  cs.type AS subject_type,
  s.name AS subject_name,
  s.description AS subject_description,
  s.image_path AS subject_image_path,
  COALESCE(lesson_stats.total_lessons, 0) AS total_lessons,
  COALESCE(lesson_stats.completed_lessons, 0) AS completed_lessons,
  CASE
    WHEN COALESCE(lesson_stats.total_lessons, 0) = 0 THEN 0
    ELSE (COALESCE(lesson_stats.completed_lessons, 0) / COALESCE(lesson_stats.total_lessons, 0)) * 100
  END AS progress_percentage
FROM
  user_curriculums uc
  INNER JOIN curriculums c ON uc.curriculum_id = c.id
  INNER JOIN curriculum_subjects cs ON c.id = cs.curriculum_id
  INNER JOIN subjects s ON cs.subject_id = s.id
  LEFT JOIN (
    SELECT
      ucp.user_curriculum_id,
      clv.curriculum_subject_id AS curriculum_subject_id,
      COUNT(*) AS total_lessons,
      COUNT(ucp.status = 'COMPLETED' OR NULL) AS completed_lessons
    FROM
      user_curriculum_progress ucp
      INNER JOIN curriculum_lessons cl ON ucp.lesson_id = cl.id
      INNER JOIN curriculum_topics ct ON cl.curriculum_topic_id = ct.id
      INNER JOIN curriculum_levels clv ON ct.curriculum_level_id = clv.id
    WHERE
      ucp.status IS NOT NULL
    GROUP BY
      ucp.user_curriculum_id,
      clv.curriculum_subject_id
  ) AS lesson_stats
    ON lesson_stats.user_curriculum_id = uc.id AND lesson_stats.curriculum_subject_id = cs.id
WHERE
  uc.user_id = auth.uid()
ORDER BY cs.type ASC, progress_percentage ASC;



--- Get all Levels (with Progress for a Curriculum if the User has it saved in their User Curriculums)
CREATE VIEW curriculum_levels_with_progress_view AS
SELECT
  uc.id AS user_curriculum_id,   -- added this field
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  cs.id AS curriculum_subject_id,
  s.name AS subject_name,
  s.description AS subject_description,
  s.image_path AS subject_image_path,
  clv.id AS curriculum_level_id,
  lv.name AS level_name,
  lv.description AS level_description,
  lv.image_path AS level_image_path,
  clv.level_number AS level_number,
  COALESCE(lesson_stats.total_lessons, 0) AS total_lessons,
  COALESCE(lesson_stats.completed_lessons, 0) AS completed_lessons,
  CASE
    WHEN COALESCE(lesson_stats.total_lessons, 0) = 0 THEN 0
    ELSE (COALESCE(lesson_stats.completed_lessons, 0) / COALESCE(lesson_stats.total_lessons, 0)) * 100
  END AS progress_percentage
FROM
  user_curriculums uc
  INNER JOIN curriculum_subjects cs ON uc.curriculum_id = cs.curriculum_id
  INNER JOIN curriculums c ON cs.curriculum_id = c.id
  INNER JOIN curriculum_levels clv ON cs.id = clv.curriculum_subject_id
  INNER JOIN levels lv ON clv.level_id = lv.id
  INNER JOIN subjects s ON cs.subject_id = s.id
  LEFT JOIN (
    SELECT
      ucp.user_curriculum_id,
      ct.curriculum_level_id AS curriculum_level_id,
      COUNT(*) AS total_lessons,
      COUNT(ucp.status = 'COMPLETED' OR NULL) AS completed_lessons
    FROM
      user_curriculum_progress ucp
      INNER JOIN curriculum_lessons cl ON ucp.lesson_id = cl.id
      INNER JOIN curriculum_topics ct ON cl.curriculum_topic_id = ct.id
    WHERE
      ucp.status IS NOT NULL
    GROUP BY
      ucp.user_curriculum_id,
      ct.curriculum_level_id
  ) AS lesson_stats
    ON lesson_stats.user_curriculum_id = uc.id AND lesson_stats.curriculum_level_id = clv.id
WHERE
  uc.user_id = auth.uid()
ORDER BY clv.level_number ASC, progress_percentage ASC;

--- Get all Topics (with Progress for a Curriculum if the User has it saved in their User Curriculums)
CREATE VIEW curriculum_topics_with_progress_view AS
SELECT
  uc.id AS user_curriculum_id,   -- added this field
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  s.name AS subject_name,
  cs.id AS curriculum_subject_id,
  clv.id AS curriculum_level_id,
  lv.name AS level_name,
  lv.description AS level_description,
  lv.image_path AS level_image_path,
  ct.id AS curriculum_topic_id,
  ct.type AS topic_type,
  t.name AS topic_name,
  t.description AS topic_description,
  t.image_path AS topic_image_path,
  COALESCE(lesson_stats.total_lessons, 0) AS total_lessons,
  COALESCE(lesson_stats.completed_lessons, 0) AS completed_lessons,
  CASE
    WHEN COALESCE(lesson_stats.total_lessons, 0) = 0 THEN 0
    ELSE (COALESCE(lesson_stats.completed_lessons, 0) / COALESCE(lesson_stats.total_lessons, 0)) * 100
  END AS progress_percentage
FROM
  user_curriculums uc
  INNER JOIN curriculum_subjects cs ON uc.curriculum_id = cs.curriculum_id
  INNER JOIN curriculums c ON cs.curriculum_id = c.id
  INNER JOIN curriculum_levels clv ON cs.id = clv.curriculum_subject_id
  INNER JOIN curriculum_topics ct ON clv.id = ct.curriculum_level_id
  INNER JOIN topics t ON ct.topic_id = t.id
  INNER JOIN levels lv ON clv.level_id = lv.id
  INNER JOIN subjects s ON cs.subject_id = s.id
  LEFT JOIN (
    SELECT
      ucp.user_curriculum_id,
      cl.curriculum_topic_id AS curriculum_topic_id,
      COUNT(*) AS total_lessons,
      COUNT(ucp.status = 'COMPLETED' OR NULL) AS completed_lessons
    FROM
      user_curriculum_progress ucp
      INNER JOIN curriculum_lessons cl ON ucp.lesson_id = cl.id
    WHERE
      ucp.status IS NOT NULL
    GROUP BY
      ucp.user_curriculum_id,
      cl.curriculum_topic_id
  ) AS lesson_stats
    ON lesson_stats.user_curriculum_id = uc.id AND lesson_stats.curriculum_topic_id = ct.id
WHERE
  uc.user_id = auth.uid()
ORDER BY ct.type ASC, progress_percentage ASC;

--- Get all Lessons (with Progress for a Curriculum if the User has it saved in their User Curriculums)
CREATE VIEW curriculum_lessons_with_progress_view AS
SELECT
  uc.id AS user_curriculum_id,  -- added this field
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  cs.id AS curriculum_subject_id,
  s.name AS subject_name,
  clv.id AS curriculum_level_id,
  lv.name AS level_name,
  ct.id AS curriculum_topic_id,
  t.name AS topic_name,
  t.description AS topic_description,
  t.image_path AS topic_image_path,
  cl.id AS curriculum_lesson_id,
  cl.type AS lesson_type,
  cl.name AS lesson_name,
  cl.description AS lesson_description,
  cl.image_path AS lesson_image_path,
  cl.lesson_number AS lesson_number,
  COALESCE(lesson_stats.total_lessons, 0) AS total_lessons,
  COALESCE(lesson_stats.completed_lessons, 0) AS completed_lessons,
  CASE
    WHEN COALESCE(lesson_stats.total_lessons, 0) = 0 THEN 0
    ELSE (COALESCE(lesson_stats.completed_lessons, 0) / COALESCE(lesson_stats.total_lessons, 0)) * 100
  END AS progress_percentage
FROM
  user_curriculums uc
  INNER JOIN curriculum_subjects cs ON uc.curriculum_id = cs.curriculum_id
  INNER JOIN curriculums c ON cs.curriculum_id = c.id
  INNER JOIN curriculum_levels clv ON cs.id = clv.curriculum_subject_id
  INNER JOIN curriculum_topics ct ON clv.id = ct.curriculum_level_id
  INNER JOIN curriculum_lessons cl ON ct.id = cl.curriculum_topic_id
  INNER JOIN topics t ON ct.topic_id = t.id
  INNER JOIN levels lv ON clv.level_id = lv.id
  INNER JOIN subjects s ON cs.subject_id = s.id
  LEFT JOIN (
    SELECT
      ucp.user_curriculum_id,
      ucp.lesson_id AS lesson_id,
      COUNT(*) AS total_lessons,
      COUNT(ucp.status = 'COMPLETED' OR NULL) AS completed_lessons
    FROM
      user_curriculum_progress ucp
    WHERE
      ucp.status IS NOT NULL
    GROUP BY
      ucp.user_curriculum_id,
      ucp.lesson_id
  ) AS lesson_stats
    ON lesson_stats.user_curriculum_id = uc.id AND lesson_stats.lesson_id = cl.id
WHERE
  uc.user_id = auth.uid()
ORDER BY cl.lesson_number ASC, progress_percentage ASC;

--- User Curriculum Lesson With User Lesson View
CREATE VIEW curriculum_lesson_with_user_lesson_view AS
SELECT
  uc.id AS user_curriculum_id,
  c.name AS curriculum_name,
  s.name AS subject_name,
  s.id AS subject_id,
  lv.id AS level_id,
  t.id AS topic_id,
  lv.name AS level_name,
  t.name AS topic_name,
  cl.id AS curriculum_lesson_id,
  cl.name AS lesson_name,
  cl.description AS lesson_description,
  cl.image_path AS lesson_image_path,
  ARRAY(
    SELECT
      json_build_object(
        'id', student_profiles.id
      )
    FROM
      student_profiles
      INNER JOIN student_preferences ON student_profiles.id = student_preferences.id
    WHERE
      student_profiles.id = ANY(uc.student_ids)
  ) AS student_ids,
  (SELECT
      json_build_object(
        'id', lesson_plans.id,
        'title', lesson_plans.title,
        'content', lesson_plans.content,
        'tags', lesson_plans.tags,
        'image_path', lesson_plans.image_path,
        'length_in_min', lesson_plans.length_in_min,
        'creator_id', teacher_profiles.id, -- included creator_id
        'creator_name', teacher_profiles.first_name || ' ' || teacher_profiles.last_name, -- included creator_name
        'creator_avatar_url', teacher_profiles.avatar_url, -- included creator_avatar_url
        'scheduled_date', ulp.scheduled_date, -- included scheduled_date
        'completion_date', ulp.completion_date -- included completion_date
      )
    FROM
      lesson_plans
      INNER JOIN teacher_profiles ON lesson_plans.creator_id = teacher_profiles.id -- added join to teacher_profiles
      INNER JOIN user_lesson_plans ulp ON lesson_plans.id = ulp.lesson_plan_id -- added join to user_lesson_plans
    WHERE
      lesson_plans.id = ANY(cl.lesson_plan_ids) AND lesson_plans.creator_id = auth.uid()
    LIMIT 1
  ) AS lesson_plan
FROM
  user_curriculums uc
  INNER JOIN curriculum_subjects cs ON uc.curriculum_id = cs.curriculum_id
  INNER JOIN curriculums c ON cs.curriculum_id = c.id
  INNER JOIN curriculum_levels clv ON cs.id = clv.curriculum_subject_id
  INNER JOIN curriculum_topics ct ON clv.id = ct.curriculum_level_id
  INNER JOIN curriculum_lessons cl ON ct.id = cl.curriculum_topic_id
  INNER JOIN topics t ON ct.topic_id = t.id
  INNER JOIN levels lv ON clv.level_id = lv.id
  INNER JOIN subjects s ON cs.subject_id = s.id
  LEFT JOIN user_curriculum_progress ucp ON ucp.user_curriculum_id = uc.id AND ucp.lesson_id = cl.id
WHERE
  uc.user_id = auth.uid();


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

--- Shareable Curriculum Topics View
CREATE VIEW shareable_curriculum_topics_view AS
SELECT
  ct.id,
  ct.type AS topic_type,
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  cs.id AS subject_id,
  s.name AS subject_name,
  clv.id AS level_id,
  lv.name AS level_name,
  lv.description AS level_description,
  lv.image_path AS level_image_path,
  t.name AS topic_name,
  t.description AS topic_description,
  t.image_path AS topic_image_path
FROM curriculum_topics ct
JOIN topics t ON ct.topic_id = t.id
JOIN curriculum_levels clv ON ct.curriculum_level_id = clv.id
JOIN levels lv ON clv.level_id = lv.id
JOIN curriculum_subjects cs ON clv.curriculum_subject_id = cs.id
JOIN subjects s ON cs.subject_id = s.id
JOIN curriculums c ON cs.curriculum_id = c.id
WHERE c.status = 'PUBLISHED' AND c.is_public = TRUE
ORDER BY ct.type ASC;

--- Shareable Curriculum Lessons View
CREATE VIEW shareable_curriculum_lessons_view AS
SELECT
  cls.id,
  cls.type AS lesson_type,
  cls.lesson_number AS lesson_number,
  cls.name AS lesson_name,
  cls.description AS lesson_description,
  cls.image_path AS lesson_image_path,
  cls.lesson_plan_ids AS lesson_plan_ids,
  c.id AS curriculum_id,
  c.name AS curriculum_name,
  cs.id AS subject_id,
  s.name AS subject_name,
  clv.id AS level_id,
  lv.name AS level_name,
  lv.description AS level_description,
  ct.id AS topic_id,
  t.name AS topic_name,
  t.description AS topic_description,
  t.image_path AS topic_image_path
FROM curriculum_lessons cls
JOIN curriculum_topics ct ON cls.curriculum_topic_id = ct.id
JOIN topics t ON ct.topic_id = t.id
JOIN curriculum_levels clv ON ct.curriculum_level_id = clv.id
JOIN levels lv ON clv.level_id = lv.id
JOIN curriculum_subjects cs ON clv.curriculum_subject_id = cs.id
JOIN subjects s ON cs.subject_id = s.id
JOIN curriculums c ON cs.curriculum_id = c.id
WHERE c.status = 'PUBLISHED' AND c.is_public = TRUE
ORDER BY cls.type ASC;


--- Next Lesson Per Subject Per Curriculum View
CREATE VIEW next_lesson_per_subject_per_curriculum_view AS
SELECT
  uc.user_id AS teacher_id,
  sub.user_curriculum_id,
  sub.curriculum_id,
  cs.subject_id AS curriculum_subject_id,
  clv.level_id AS curriculum_level_id,
  ct.topic_id AS curriculum_topic_id,
  sub.lesson_id AS curriculum_lesson_id,
  c.name AS curriculum_name,
  s.name AS subject_name,
  l.name AS level_name,
  t.name AS topic_name,
  cl.name AS lesson_name,
  cl.description AS lesson_description,
  cl.lesson_number,
  cl.image_path AS lesson_image_path,
  COALESCE(ucp.status, 'IN_PROGRESS') AS progress_status
FROM
  (
    SELECT
      uc.id AS user_curriculum_id,
      uc.curriculum_id,
      cs.id AS curriculum_subject_id,
      clv.id AS curriculum_level_id,
      ct.id AS curriculum_topic_id,
      cl.id AS lesson_id,
      ucp.status,
      ROW_NUMBER() OVER (
        PARTITION BY uc.id, cs.id
        ORDER BY cl.lesson_number ASC
      ) AS rn
    FROM
      user_curriculums uc
      INNER JOIN curriculums c ON uc.curriculum_id = c.id
      INNER JOIN curriculum_subjects cs ON c.id = cs.curriculum_id
      INNER JOIN curriculum_levels clv ON cs.id = clv.curriculum_subject_id
      INNER JOIN curriculum_topics ct ON clv.id = ct.curriculum_level_id
      INNER JOIN curriculum_lessons cl ON ct.id = cl.curriculum_topic_id
      LEFT JOIN user_curriculum_progress ucp ON uc.id = ucp.user_curriculum_id AND cl.id = ucp.lesson_id
    WHERE
      (ucp.status != 'COMPLETED' OR ucp.status IS NULL)
      AND cs.type = 'CORE'
      AND cl.type = 'CORE'
  ) sub
  INNER JOIN user_curriculums uc ON sub.user_curriculum_id = uc.id
  INNER JOIN curriculums c ON sub.curriculum_id = c.id
  INNER JOIN curriculum_subjects cs ON sub.curriculum_subject_id = cs.id
  INNER JOIN subjects s ON cs.subject_id = s.id
  INNER JOIN curriculum_levels clv ON sub.curriculum_level_id = clv.id
  INNER JOIN levels l ON clv.level_id = l.id
  INNER JOIN curriculum_topics ct ON sub.curriculum_topic_id = ct.id
  INNER JOIN topics t ON ct.topic_id = t.id
  INNER JOIN curriculum_lessons cl ON sub.lesson_id = cl.id
  LEFT JOIN user_curriculum_progress ucp ON sub.user_curriculum_id = ucp.user_curriculum_id AND sub.lesson_id = ucp.lesson_id
WHERE
  sub.rn = 1;


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

--- Update curriculum progress
CREATE OR REPLACE FUNCTION update_curriculum_progress()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'completed' THEN
    UPDATE user_curriculum_progress
    SET status = 'COMPLETED',
        completion_date = NEW.completion_date
    FROM curriculum_lessons
    WHERE user_curriculum_progress.lesson_id = curriculum_lessons.id AND
          NEW.lesson_plan_id = ANY (curriculum_lessons.lesson_plan_ids) AND
          user_curriculum_progress.user_id = NEW.teacher_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- * TRIGGERS
--- Update curriculum progress
CREATE TRIGGER update_curriculum_progress_trigger
AFTER UPDATE OF status ON user_lesson_plans
FOR EACH ROW
EXECUTE FUNCTION update_curriculum_progress();


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

