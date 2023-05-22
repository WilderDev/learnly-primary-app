-- * ENUMS
-- Profile Statuses
CREATE TYPE profile_status AS ENUM ('ONLINE', 'OFFLINE', 'BUSY', 'AWAY', 'INVISIBLE');
-- Profile Types (front-end facing)
CREATE TYPE profile_type AS ENUM ('PARENT', 'COOP', 'TUTOR', 'SCHOOL', 'STUDENT');
-- Enum for trial status
CREATE TYPE trial_status AS ENUM ('ACTIVE', 'CONVERTED', 'EXPIRED');
-- Role Types (for authorization)
CREATE TYPE user_role AS ENUM ('ADMIN', 'TEACHER', 'GROUP_MANAGER', 'STUDENT', 'BANNISHED');
-- Learning Styles
CREATE TYPE learning_style AS enum
('Visual', 'Auditory', 'Kinesthetic', 'Verbal', 'Logical', 'Social');
-- Student Goals
CREATE TYPE student_goals AS ENUM (
  'Improve_grades',
  'Increase_focus_and_concentration',
  'Enhance_time_management_skills',
  'Develop_strong_study_habits',
  'Boost_problem_solving_skills',
  'Strengthen_critical_thinking_skills',
  'Improve_memory_and_recall',
  'Enhance_writing_skills',
  'Build_reading_comprehension',
  'Improve_test-taking_strategies',
  'Expand_vocabulary',
  'Develop_public_speaking_skills',
  'Increase_confidence_in_learning'
);
-- Learning Environment Preferences
CREATE TYPE environment_preferences AS ENUM (
  'Quiet_and_individual',
  'Group_and_collaborative',
  'Structured_and_guided',
  'Flexible_and_self_directed',
  'Indoor',
  'Outdoor',
  'Digital',
  'Physical'
);
-- Learning Resource Preferences
CREATE TYPE resource_preferences AS ENUM (
  'Textbooks',
  'Workbooks',
  'Online_courses',
  'Educational_videos',
  'Interactive_games',
  'Podcasts',
  'Hands_on_activities',
  'Tutoring_sessions',
  'Group_discussions',
  'Flashcards',
  'Study_guides',
  'Project_based_learning'
);
-- Learning Disabilities
CREATE TYPE learning_disabilities AS ENUM
('Dyslexia', 'Dyscalculia', 'Dysgraphia', 'Attention_Deficit_Hyperactivity_Disorder', 'Auditory_Processing_Disorder', 'Nonverbal_Learning_Disability', 'Autism');


-- * TABLES
-- Teacher Profiles
CREATE TABLE teacher_profiles (
  -- The teacher's unique identifier.
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- The teacher's status
  status profile_status NOT NULL DEFAULT 'OFFLINE',

  -- The teacher's type
  type profile_type NOT NULL DEFAULT 'PARENT',

  -- the teacher's role
  role user_role NOT NULL DEFAULT 'TEACHER',

  -- The teacher's first name
  first_name text NOT NULL DEFAULT '',

  -- The teacher's last name
  last_name text NOT NULL DEFAULT '',

  -- The teacher's avatar URL
  avatar_url text NOT NULL DEFAULT '/static/icons/avatars/default.png',

  -- Last Activity
  last_activity timestamp WITH TIME ZONE NOT NULL DEFAULT now(),

  -- Consecutive Activity Days
  consecutive_activity_days integer NOT NULL DEFAULT 0,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Teaching Preferences
CREATE TABLE teaching_preferences (
  -- The teaching preferences unique identifier. (DEFERRABLE)
  id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User Trials
CREATE TABLE trials (
  -- The trial's unique identifier.
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- The teacher's unique identifier.
  teacher_id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL,

  -- The trial's status.
  status trial_status NOT NULL DEFAULT 'ACTIVE',

  -- The start date of the trial.
  start_date date NOT NULL DEFAULT CURRENT_DATE,

  -- The end date of the trial.
  end_date date NOT NULL DEFAULT (CURRENT_DATE + INTERVAL '14 days'),

  -- Timestamps.
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Student Profiles
CREATE TABLE student_profiles (
  -- The student's unique identifier.
  id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- The student's first name
  first_name text NOT NULL DEFAULT '',

  -- The student's last name
  last_name text NOT NULL DEFAULT '',

  -- The student's avatar URL
  avatar_url text NOT NULL DEFAULT '/static/icons/avatars/default.png',

  -- The student's birthday
  birthday date NOT NULL DEFAULT '2020-01-01',

  -- The student's teacher (parent/caretaker/coop manager) unique identifier.
  teacher_id uuid REFERENCES teacher_profiles(id) ON DELETE CASCADE NOT NULL,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Student Preferences
CREATE TABLE student_preferences (
  -- The student's unique identifier.
  id uuid REFERENCES student_profiles(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,

  -- Learning styles (array of text)
  learning_styles learning_style[] NOT NULL DEFAULT '{}'::learning_style[],

  -- Subject preferences (array of text)
  subject_preferences text[] NOT NULL DEFAULT '{}'::text[],

  -- Interests (array of text)
  interests text[] NOT NULL DEFAULT '{}'::text[],

  -- Knowledge (JSONB, stores knowledge level for various topics)
  knowledge jsonb NOT NULL DEFAULT '{}',

  -- Strengths (array of text)
  strengths text[] NOT NULL DEFAULT '{}'::text[],

  -- Weaknesses (array of text)
  weaknesses text[] NOT NULL DEFAULT '{}'::text[],

  -- Goals (array of goals)
  goals student_goals[] NOT NULL DEFAULT '{}'::student_goals[],

  -- Learning environment preferences (array of environment_preferences)
  learning_environment_preferences environment_preferences[] NOT NULL DEFAULT '{}'::environment_preferences[],

  -- Learning resources preferences (array of resource_preferences)
  learning_resources_preferences resource_preferences[] NOT NULL DEFAULT '{}'::resource_preferences[],

  -- Special Needs (array of learning_disabilities)
  special_needs learning_disabilities[] NOT NULL DEFAULT '{}'::learning_disabilities[],

  -- Assessment results (JSONB, stores assessment results)
  assessment_results jsonb NOT NULL DEFAULT '{}'::jsonb,

  -- Accomplishments (JSONB, stores accomplishments)
  accomplishments jsonb NOT NULL DEFAULT '{}'::jsonb,

  -- Timestamps
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Avatar Storage Bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);


-- * VIEWS
-- Admin View all Teachers/Users
CREATE VIEW public.users AS
SELECT
auth.users.id,
auth.users.email
FROM auth.users;
REVOKE all ON public.users FROM anon, authenticated;

-- Teacher's Me View (for a given teacher)
CREATE VIEW teacher_me_view AS
SELECT
  teacher_profiles.id AS id,
  teacher_profiles.first_name AS first_name,
  teacher_profiles.last_name AS last_name,
  teacher_profiles.avatar_url AS avatar_url,
  teacher_profiles.status AS status,
  teacher_profiles.type AS type,
  teacher_profiles.role AS role
FROM teacher_profiles
WHERE teacher_profiles.id = auth.uid();


-- Teacher's Students View (for a given teacher)
CREATE VIEW teacher_students_profiles_view AS
SELECT
  student_profiles.id,
  student_profiles.first_name,
  student_profiles.last_name,
  student_profiles.avatar_url,
  student_profiles.birthday,
  student_preferences.learning_styles,
  student_preferences.subject_preferences,
  student_preferences.interests,
  student_preferences.knowledge,
  student_preferences.strengths,
  student_preferences.weaknesses,
  student_preferences.goals,
  student_preferences.learning_environment_preferences,
  student_preferences.learning_resources_preferences,
  student_preferences.special_needs,
  student_preferences.assessment_results,
  student_preferences.accomplishments
FROM student_profiles
JOIN student_preferences ON student_profiles.id = student_preferences.id
WHERE student_profiles.teacher_id = auth.uid();


-- * FUNCTIONS
-- Function to check user's role
CREATE FUNCTION is_role(role user_role) RETURNS "bool"
  LANGUAGE "plpgsql"
  AS $$
  BEGIN
    IF session_user = 'authenticator' THEN
      IF extract(epoch from now()) > coalesce((current_setting('request.jwt.claims', true)::jsonb)->>'exp', '0')::numeric THEN
        return false; -- jwt expired
      END IF;
      IF coalesce((current_setting('request.jwt.claims', true)::jsonb)->'app_metadata'->>'role', 'TEACHER')::user_role = role THEN
        return true; -- user has the specified role
      ELSE
        return false; -- user does NOT have the specified role
      END IF;
    ELSE -- not a user session, probably being called from a trigger or something
      return false;
    END IF;
  END;
$$;


-- Create a new teacher profile when a new user is created (sign up)
CREATE FUNCTION public.handle_new_user()
RETURNS trigger as $$
BEGIN
  -- First Operation (Insert into Profiles)
  INSERT into public.teacher_profiles (id, first_name, last_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name', new.raw_user_meta_data->>'avatar_url');

  -- Second Operation (Insert into Trials)
  INSERT into public.trials (teacher_id, start_date, end_date)
  VALUES (new.id, CURRENT_DATE, CURRENT_DATE + INTERVAL '14 days');

  -- Third Operation (Insert Welcome Notification) TSK

  -- Return the new user
  return new;
END;
$$ language plpgsql security definer;

-- Create a new student preferences when a new student profile is created
CREATE FUNCTION public.handle_new_student_profile()
RETURNS trigger as $$
BEGIN
  -- First Operation (Insert into Student Preferences)
  INSERT into public.student_preferences (id)
  VALUES (new.id);

  -- Return the new student profile
  return new;
END;
$$ language plpgsql security definer;

-- Update the last_activity and consecutive_activity_days fields when a user logs in
CREATE FUNCTION update_last_activity_and_streak() RETURNS TRIGGER AS $$
BEGIN
  -- Calculate the number of days between the last activity and now
  IF (OLD.last_activity IS NOT NULL) THEN
    IF (NEW.last_activity::date - OLD.last_activity::date = 1) THEN
      -- If the user was active yesterday, increment the streak
      NEW.consecutive_activity_days := OLD.consecutive_activity_days + 1;
    ELSIF (NEW.last_activity::date - OLD.last_activity::date > 1) THEN
      -- If the user was not active yesterday, reset the streak
      NEW.consecutive_activity_days := 1;
    END IF;
  ELSE
    -- If the user was never active before, set the streak to 1
    NEW.consecutive_activity_days := 1;
  END IF;

  -- Update the last activity timestamp
  NEW.last_activity := NOW();

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to add an item to an array
CREATE OR REPLACE FUNCTION add_item_to_array(p_table_name TEXT, p_column_name TEXT, p_id_column TEXT, p_id_value UUID, p_item_value UUID)
RETURNS VOID AS $$
BEGIN
  EXECUTE format('UPDATE %I SET %I = array_append(%I, %L) WHERE %I = %L', p_table_name, p_column_name, p_column_name, p_item_value, p_id_column, p_id_value);
END;
$$ LANGUAGE plpgsql;


-- * TRIGGERS
-- Call the handle_new_teacher function when a new user is created (sign up)
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Call the handle_new_student_profile function when a new student profile is created
create trigger on_student_profile_created
  after insert on student_profiles
  for each row execute procedure public.handle_new_student_profile();

-- Update the last_login and consecutive_login_days fields when a user logs in
CREATE TRIGGER update_user_activity_and_streak
BEFORE UPDATE ON teacher_profiles
FOR EACH ROW
EXECUTE FUNCTION update_last_activity_and_streak();


-- * INDEXES
-- N/A


-- * POLICIES (ROW LEVEL SECURITY)
-- RLS
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_preferences ENABLE ROW LEVEL SECURITY;

-- Polcicies
CREATE POLICY "Avatar storage bucket is viewable by everyone" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Avatar is uploadable by anyone" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars');
CREATE POLICY "Teacher profiles are created by anyone" ON teacher_profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Teacher profiles are viewable by everyone" ON teacher_profiles FOR SELECT USING (true);
CREATE POLICY "Teacher profiles are editable by the owner or admin" ON teacher_profiles FOR UPDATE USING (auth.uid() = id OR is_role('ADMIN'));
CREATE POLICY "Student profiles are created by the teacher or admin" ON student_profiles FOR INSERT WITH CHECK (teacher_id = auth.uid() OR is_role('ADMIN'));
CREATE POLICY "Student profiles are viewable by everyone" ON student_profiles FOR SELECT USING (true);
CREATE POLICY "Student profiles are editable by the teacher or admin" ON student_profiles FOR UPDATE USING (teacher_id = auth.uid() OR is_role('ADMIN'));
CREATE POLICY "Teaching preferences are viewable by everyone" ON teaching_preferences FOR SELECT USING (true);
CREATE POLICY "Teaching preferences are editable by the owner or admin" ON teaching_preferences FOR UPDATE USING (auth.uid() = id OR is_role('ADMIN'));
CREATE POLICY "Student preferences are viewable by the teacher" ON student_preferences
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM teacher_profiles, student_profiles
      WHERE teacher_profiles.id = student_profiles.teacher_id
      AND student_profiles.id = student_preferences.id
      AND teacher_profiles.id = auth.uid()
    )
  );
CREATE POLICY "Student preferences are editable by the teacher or admin" ON student_preferences
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM teacher_profiles, student_profiles
      WHERE teacher_profiles.id = student_profiles.teacher_id
      AND student_profiles.id = student_preferences.id
      AND (teacher_profiles.id = auth.uid() OR is_role('ADMIN'))
    )
  );
