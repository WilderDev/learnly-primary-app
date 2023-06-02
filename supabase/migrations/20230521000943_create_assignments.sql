-- * ENUMS
-- Assignment Statuses
CREATE TYPE assignment_status AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- * TABLES
--- Assignments
CREATE TABLE assignments (
    -- Assignment ID
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Assignment Creator ID
    creator_id uuid NOT NULL REFERENCES teacher_profiles(id),

    -- Assignment User Lesson Plan ID
    user_lesson_plan_id uuid REFERENCES user_lesson_plans(id),

    -- Assignment Content
    content text NOT NULL DEFAULT '',

    -- Assignment Title
    title text NOT NULL DEFAULT '',

    -- Assignment Assigned On
    assigned_on timestamp WITH TIME ZONE NOT NULL DEFAULT now(),

    -- Assignment Due Date
    due_date timestamp WITH TIME ZONE NOT NULL DEFAULT now(),

    -- Assignment Status
    status assignment_status NOT NULL DEFAULT 'PENDING',

    -- Timestamps
    created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- * VIEWS
-- N/A

-- * FUNCTIONS
-- N/A

-- * TRIGGERS
-- N/A

-- * INDEXES
-- Assignments
CREATE INDEX assignments_creator_id_idx ON assignments(creator_id);
CREATE INDEX assignments_user_lesson_plan_id_idx ON assignments(user_lesson_plan_id);
CREATE INDEX assignments_status_idx ON assignments(status);


-- * POLICIES (ROW LEVEL SECURITY)
-- RLS
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

-- Policies
--- Assignments
CREATE POLICY assignments_select ON assignments FOR SELECT USING (true);
CREATE POLICY assignments_insert ON assignments FOR INSERT WITH CHECK (true);
CREATE POLICY assignments_update ON assignments FOR UPDATE USING (auth.uid() = creator_id OR is_role('ADMIN')) WITH CHECK (auth.uid() = creator_id OR is_role('ADMIN'));
CREATE POLICY assignments_delete ON assignments FOR DELETE USING (auth.uid() = creator_id OR is_role('ADMIN'));
