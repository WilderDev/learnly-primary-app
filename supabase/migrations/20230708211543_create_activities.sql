--- Activities
CREATE TABLE activities (
    -- Activities ID
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Activity Title
    title text NOT NULL DEFAULT '',

    -- Creator ID
    creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

    -- Activity Timestamp
    activity_timestamp timestamp WITH TIME ZONE NOT NULL,

    -- Level ID
    level_id uuid NOT NULL REFERENCES levels(id),

    -- Subject ID
    subject_id uuid NOT NULL REFERENCES subjects(id),

    -- Students (Many to Many)
    students uuid[] NOT NULL DEFAULT '{}'::uuid[] CHECK (array_length(students, 1) > 0),

    -- Timestamps
    created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);