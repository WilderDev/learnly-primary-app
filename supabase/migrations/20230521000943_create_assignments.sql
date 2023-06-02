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
    user_lesson_plan_id uuid NOT NULL REFERENCES user_lesson_plans(id),

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
-- Assignment with User Lesson Plan, Lesson Plan, and Students View
CREATE VIEW assignments_with_details_view AS
SELECT
    a.id AS assignment_id,
    a.title AS assignment_title,
    a.content AS assignment_content,
    a.assigned_on,
    a.due_date,
    a.status AS assignment_status,
    json_agg(
        json_build_object(
            'id', s.id,
            'first_name', s.first_name,
            'last_name', s.last_name,
            'avatar_url', s.avatar_url
        )
    ) AS students,
    lp.id AS lesson_plan_id,
    lp.title AS lesson_plan_title,
    sb.name AS lesson_plan_subject_name,
    ulp.teacher_id AS teacher_id
FROM
    assignments a
JOIN
    user_lesson_plans ulp ON a.user_lesson_plan_id = ulp.id
JOIN
    student_profiles s ON s.id = ANY (ulp.students)
JOIN
    lesson_plans lp ON ulp.lesson_plan_id = lp.id
JOIN
    subjects sb ON lp.subject = sb.id
GROUP BY
    a.id, lp.title, lp.id, sb.name, ulp.teacher_id;

--- Lesson Plans without Assignments View
CREATE VIEW lesson_plans_without_assignments_view AS
SELECT
    ulp.id AS user_lesson_plan_id,
    lp.title AS lesson_plan_name,
    lp.content AS lesson_plan_content,
    lv.name AS lesson_plan_level_name
FROM
    user_lesson_plans ulp
JOIN
    lesson_plans lp ON ulp.lesson_plan_id = lp.id
LEFT JOIN
    levels lv ON lp.level = lv.id
WHERE
    NOT EXISTS (
        SELECT 1
        FROM assignments a
        WHERE a.user_lesson_plan_id = ulp.id
    )
    AND ulp.teacher_id = auth.uid();



-- * FUNCTIONS
-- Get Assignments by Lesson Plan and Teacher
CREATE FUNCTION get_assignments_by_lesson_plan_and_teacher(lesson_plan_uuid uuid, teacher_uuid uuid)
RETURNS TABLE(
    id uuid,
    title text,
    content text,
    assigned_on timestamp with time zone,
    due_date timestamp with time zone,
    status assignment_status
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.id,
        a.title,
        a.content,
        a.assigned_on,
        a.due_date,
        a.status
    FROM assignments a
    INNER JOIN user_lesson_plans ulp
        ON a.user_lesson_plan_id = ulp.id
        AND ulp.lesson_plan_id = lesson_plan_uuid
        AND ulp.teacher_id = teacher_uuid;
END; $$
LANGUAGE plpgsql;

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
