-- * ENUMS
-- Event Types
CREATE TYPE event AS ENUM (
  'LESSON',
  'ASSIGNMENT',
  'COMMUNITY',
  'OTHER'
);


-- * TABLES
-- Events
CREATE TABLE events (
  -- Unique ID (Primary Key)
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Event Type
  type event NOT NULL DEFAULT 'LESSON',

  -- Name
  name text NOT NULL,

  -- Description
  description text,

  -- Datetime
  datetime timestamptz NOT NULL,

  -- Length (min)
  length_in_min int NOT NULL DEFAULT 60,

  -- Image Path
  image_path text,

  -- Location
  location text,

  -- Url
  url text,

  -- Host (User ID)
  host_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Attendees (User IDs)
  attendees uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Additional Metadata
  metadata jsonb,

  -- Timestamps
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- * VIEWS
-- All User's Events
CREATE VIEW all_events_view AS
SELECT
  id,
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
FROM
  events
WHERE
  host_id = auth.uid() OR attendees @> ARRAY[auth.uid()];

-- User's Hosted Events
CREATE VIEW hosted_events_view AS
SELECT
  id,
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
FROM events
WHERE host_id = auth.uid();


-- User's Attending Events
CREATE VIEW attending_events_view AS
SELECT
  id,
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
FROM events
WHERE attendees @> ARRAY[auth.uid()];


-- * FUNCTIONS
--- Get Upcoming Events for User (30)
CREATE FUNCTION get_upcoming_events(input_date date)
RETURNS TABLE(
  id uuid,
  name text,
  description text,
  image_path text,
  url text,
  type event,
  datetime timestamptz,
  location text,
  length_in_min int,
  attendees jsonb
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    e.id,
    e.name,
    e.description,
    e.image_path,
    e.url,
    e.type,
    e.datetime,
    e.location,
    e.length_in_min,
    json_agg(
      CASE WHEN p.id IS NOT NULL THEN
        json_build_object(
          'id', p.id,
          'firstName', p.first_name,
          'lastName', p.last_name,
          'avatarUrl', p.avatar_url
        )
      ELSE
        json_build_object(
          'id', s.id,
          'firstName', s.first_name,
          'lastName', s.last_name,
          'avatarUrl', s.avatar_url
        )
      END
    ) FILTER (WHERE p.id IS NOT NULL OR s.id IS NOT NULL)::jsonb AS attendees
  FROM
    events e
  LEFT JOIN
    teacher_profiles p ON p.id = ANY(e.attendees)
  LEFT JOIN
    student_profiles s ON s.id = ANY(e.attendees)
  WHERE
    e.datetime::date >= input_date
    AND (e.host_id = auth.uid() OR auth.uid() = ANY(e.attendees))
  GROUP BY
    e.id
  ORDER BY
    e.datetime ASC
  LIMIT 30;
END;
$$ LANGUAGE plpgsql;


-- * TRIGGERS


-- * INDEXES
--- Events
CREATE INDEX idx_events_host_id ON events(host_id);
CREATE INDEX idx_events_type ON events(type);
CREATE INDEX idx_events_datetime ON events(datetime);
CREATE INDEX idx_events_attendees ON events USING gin(attendees);

-- * POLICIES (ROW LEVEL SECURITY)
--- RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

--- Policies
CREATE POLICY "Events are viewable by the host or attendees" ON events FOR SELECT USING (auth.uid() = host_id OR auth.uid() = ANY(attendees));
CREATE POLICY "Events are creatable by anyone" ON events FOR INSERT WITH CHECK (true);
CREATE POLICY "Events are editable by the host" ON events FOR UPDATE USING (auth.uid() = host_id) WITH CHECK (auth.uid() = host_id);
CREATE POLICY "Events are deletable by the host" ON events FOR DELETE USING (auth.uid() = host_id);
