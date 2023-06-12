-- * FUNCTIONS
-- Search for Resources
-- Search Resources
CREATE FUNCTION search_resources(query text, user_id uuid)
RETURNS TABLE(
    id uuid,
    name text,
    category text,
    url text,
    record jsonb
)
LANGUAGE plpgsql
AS $$
BEGIN
RETURN QUERY
    SELECT
        a.id as id,
        a.title AS name,
        'assignments' AS category,
        CONCAT('/lesson-plans/', ulp.lesson_plan_id) AS url,
        to_jsonb(a.*) AS record
    FROM
        assignments a
    INNER JOIN
        user_lesson_plans ulp ON a.user_lesson_plan_id = ulp.id
    WHERE
        a.title ILIKE '%' || query || '%' AND ulp.teacher_id = search_resources.user_id

UNION ALL

    SELECT
        l.id as id,
        l.title as name,
        'lesson_plans' as category,
        CONCAT('/lesson-plans/', l.id) as url,
        jsonb_build_object(
            'students',
            (SELECT json_agg(row_to_json(s)) FROM (
                SELECT
                    sp.id,
                    sp.first_name,
                    sp.avatar_url
                FROM
                    UNNEST(ulp.students) AS student_id
                INNER JOIN
                    student_profiles sp ON sp.id = student_id
            ) s)
        ) as record
    FROM
        lesson_plans l
    INNER JOIN
        user_lesson_plans ulp ON ulp.lesson_plan_id = l.id
    WHERE
        l.title ILIKE '%' || query || '%' AND ulp.teacher_id = search_resources.user_id

UNION ALL

    SELECT
        u.user_curriculum_id as id,
        c.name as name,
        'curriculum' as category,
        CONCAT('/curriculum-roadmaps/user/', u.user_curriculum_id) as url,
        jsonb_build_object(
            'image_url', c.image_path
        ) as record
    FROM
        user_curriculum_details_view u
    INNER JOIN
        curriculums c ON u.curriculum_id = c.id
    WHERE
        c.name ILIKE '%' || query || '%' AND u.user_id = search_resources.user_id;
END; $$;
