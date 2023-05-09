-- * ENUMS
-- Profile Statuses
CREATE TYPE profile_status AS ENUM ('ONLINE', 'OFFLINE', 'BUSY', 'AWAY', 'INVISIBLE');
-- Profile Types
CREATE TYPE profile_type AS ENUM ('PARENT', 'GROUP', 'TUTOR');


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
);

-- Student Profiles
CREATE TABLE student_profiles (
  -- The student's unique identifier.
  id uuid NOT NULL PRIMARY KEY,

  -- The student's first name
  first_name text NOT NULL DEFAULT '',

  -- The student's last name
  last_name text NOT NULL DEFAULT '',

  -- The student's avatar URL
  avatar_url text NOT NULL DEFAULT '',

  -- The student's birthday
  birthday date NOT NULL DEFAULT '2020-01-01',

  -- The student's teacher (parent/caretaker/coop manager) unique identifier.
  teacher_id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Teaching Preferences
CREATE TABLE teaching_preferences (
  -- The teacher's unique identifier.
  id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Student Preferences
CREATE TABLE student_preferences (
  -- The student's unique identifier.
  id uuid REFERENCES student_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Avatar Storage Bucket
INSERT INTO storage.buckets (id, name)
VALUES ('avatars', 'avatars');


-- * INDEXES
-- N/A


-- * POLICIES (ROW LEVEL SECURITY)
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_preferences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Avatar storage bucket is viewable by everyone" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Avatar is uploadable by anyone" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars');
CREATE POLICY "Teacher profiles are viewable by everyone" ON teacher_profiles FOR SELECT USING (true);
CREATE POLICY "Teacher profiles are editable by the owner" ON teacher_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Student profiles are viewable by everyone" ON student_profiles FOR SELECT USING (true);
CREATE POLICY "Student profiles are editable by the teacher" ON student_profiles FOR UPDATE USING (teacher_id = auth.uid());
CREATE POLICY "Teaching preferences are viewable by everyone" ON teaching_preferences FOR SELECT USING (true);
CREATE POLICY "Teaching preferences are editable by the owner" ON teaching_preferences FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Student preferences are viewable by the teacher" ON student_preferences
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM teacher_profiles, student_profiles
      WHERE teacher_profiles.id = student_profiles.teacher_id
      AND student_profiles.id = student_preferences.id
      AND teacher_profiles.id = auth.uid()
    )
  );

CREATE POLICY "Student preferences are editable by the teacher" ON student_preferences
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM teacher_profiles, student_profiles
      WHERE teacher_profiles.id = student_profiles.teacher_id
      AND student_profiles.id = student_preferences.id
      AND teacher_profiles.id = auth.uid()
    )
  );


-- * VIEWS
-- Teacher's Me View (for a given teacher)
CREATE VIEW teacher_me_view AS
SELECT
  teacher_profiles.id,
  teacher_profiles.first_name,
  teacher_profiles.last_name,
  teacher_profiles.avatar_url,
  teacher_profiles.status,
  teacher_profiles.type
FROM teacher_profiles
WHERE teacher_profiles.id = auth.uid();


-- Teacher's Students View (for a given teacher)
CREATE VIEW teacher_students_profiles_view AS
SELECT
  student_profiles.id,
  student_profiles.first_name,
  student_profiles.last_name,
  student_profiles.avatar_url,
  student_profiles.birthday
FROM student_profiles
JOIN student_preferences ON student_profiles.id = student_preferences.id
JOIN teacher_profiles ON student_profiles.teacher_id = teacher_profiles.id
WHERE teacher_profiles.id = auth.uid();


-- * FUNCTIONS
-- Create a new teacher profile when a new user is created (sign up)
CREATE FUNCTION handle_new_teacher()
RETURNS trigger AS $$
BEGIN
  -- Insert the new teacher profile
  INSERT INTO teacher_profiles (id, first_name, last_name, avatar_url)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'first_name', NEW.raw_user_meta_data->>'last_name', NEW.raw_user_meta_data->>'avatar_url');

  -- Insert the new teaching preferences
  INSERT INTO teaching_preferences (id) VALUES (NEW.id);

  -- Insert Welcome Notification TSK

  -- Return the new teacher profile
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a new student preferences row when a teacher creates a new student
CREATE FUNCTION handle_new_student() RETURNS trigger AS $$
BEGIN
  -- Insert the new student preferences
  INSERT INTO student_preferences (id) VALUES (NEW.id);

  -- Return the new student profile
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- * TRIGGERS
-- Call the handle_new_teacher function when a new user is created (sign up)
CREATE TRIGGER on_new_teacher
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE handle_new_teacher();


-- Call the handle_new_student function when a new student is created
CREATE TRIGGER handle_new_student
AFTER INSERT ON student_profiles
FOR EACH ROW EXECUTE PROCEDURE handle_new_student();

