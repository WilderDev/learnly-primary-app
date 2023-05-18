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
  type event_type NOT NULL DEFAULT 'LESSON',

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
  host_id uuid NOT NULL REFERENCES profiles(id),

  -- Attendies (User IDs)
  attendies uuid[] NOT NULL DEFAULT '{}'::uuid[],

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
  attendies,
  metadata,
FROM events
WHERE host_id = auth.uid() OR attendies @> ARRAY[auth.uid()];

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
  attendies,
  metadata,
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
  attendies,
  metadata,
FROM events
WHERE attendies @> ARRAY[auth.uid()];


-- * FUNCTIONS


-- * TRIGGERS


-- * INDEXES


-- * POLICIES (ROW LEVEL SECURITY)
--- RLS

--- Policies
