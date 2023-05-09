-- * ENUMS
-- Profile Statuses
CREATE TYPE profile_status AS ENUM ('ONLINE', 'OFFLINE', 'BUSY', 'AWAY', 'INVISIBLE');
-- Profile Types
CREATE TYPE profile_type AS ENUM ('PARENT', 'GROUP', 'TUTOR');
-- Grade Levels
-- CREATE TYPE grade_level AS ENUM ('KINDERGARTEN', 'FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH');


-- * TABLES
-- Teacher Profiles
CREATE TABLE teacher_profiles (
  -- The teacher's unique identifier.
 id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

 -- The teacher's status
 status profile_status NOT NULL DEFAULT 'OFFLINE',

 -- The teacher's type
 type profile_type NOT NULL DEFAULT 'PARENT',

  -- The teacher's first name
  first_name text NOT NULL DEFAULT '',

  -- The teacher's last name
  last_name text NOT NULL DEFAULT '',

  -- The teacher's avatar URL
  avatar_url text NOT NULL DEFAULT '',

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
)

-- Student Profiles
CREATE TABLE student_profiles (
  -- The student's unique identifier.
  id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- The student's first name
  first_name text NOT NULL DEFAULT '',

  -- The student's last name
  last_name text NOT NULL DEFAULT '',

  -- The student's avatar URL
  avatar_url text NOT NULL DEFAULT '',

  -- The student's birthday
  birthday date NOT NULL DEFAULT '2020-01-01',

  -- The student's adult (parent/caretaker/coop manager) unique identifier.
  adult_id uuid REFERENCES adult_profiles(id) ON DELETE CASCADE NOT NULL,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
)

-- Teaching Preferences
CREATE TABLE teaching_preferences (
  -- The teacher's unique identifier.
  id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
)

-- Student Preferences
CREATE TABLE student_preferences (
  -- The student's unique identifier.
  id uuid REFERENCES student_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
)


-- * INDEXES
-- N/A


-- * POLICIES (ROW LEVEL SECURITY)
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teacher profiles are viewable by everyone" ON teacher_profiles FOR SELECT USING (true);
CREATE POLICY "Teacher profiles are editable by the owner" ON teacher_profiles FOR UPDATE TO auth.users WITH CHECK (auth.uid() = id);
CREATE POLICY "Student profiles are viewable by everyone" ON student_profiles FOR SELECT USING (true);
CREATE POLICY "Student profiles are editable by the teacher" ON student_profiles FOR UPDATE TO teacher_profiles WITH CHECK (teacher_profiles.id = auth.uid());
CREATE POLICY "Teaching preferences are viewable by everyone" ON teaching_preferences FOR SELECT USING (true);
CREATE POLICY "Teaching preferences are editable by the owner" ON teaching_preferences FOR UPDATE TO teacher_profiles WITH CHECK (teacher_profiles.id = auth.uid());
CREATE POLICY "Student preferences are viewable by the teacher" ON student_preferences FOR SELECT USING (teacher_profiles.id = auth.uid());
CREATE POLICY "Student preferences are editable by the teacher" ON student_preferences FOR UPDATE TO teacher_profiles WITH CHECK (teacher_profiles.id = auth.uid());




-- * VIEWS


-- * FUNCTIONS
-- Create a new teacher profile when a new user is created (sign up)
CREATE FUNCTION create_teacher_profile() RETURNS trigger AS $$
BEGIN
  INSERT INTO teacher_profiles (id, first_name, last_name) VALUES (NEW.id);
  RETURN NEW;
END;
