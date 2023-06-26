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
END;
$$;

-- Search Curriculum Lessons
CREATE FUNCTION search_curriculum_lessons(
    query_param TEXT,
    grade_param TEXT[],
    user_curriculum_id UUID,
    offset_param INT DEFAULT 0
)
RETURNS TABLE(
    id uuid,
    name text,
    curriculum_name text,
    level_name text,
    level_image_path text,
    description text,
    image_path text,
    url text
)
LANGUAGE plpgsql
AS $$
BEGIN
RETURN QUERY
    WITH levels_with_priority AS (
        SELECT unnest(grade_param) AS level, generate_series(1,array_length(grade_param,1)) AS priority
    )
    SELECT
        cl.id AS id,
        cl.name AS name,
        cur.name AS curriculum_name,
        l.name::text AS level_name,
        l.image_path AS level_image_path,
        cl.description AS description,
        cl.image_path AS image_path,
        CONCAT('/curriculum-roadmaps/user/', uc.id,'/',cs.subject_id, '/', l.id, '/', ct.id, '/', cl.id) AS url
    FROM
        curriculum_lessons cl
    INNER JOIN
        curriculum_topics ct ON cl.curriculum_topic_id = ct.id
    INNER JOIN
        curriculum_levels clevel ON ct.curriculum_level_id = clevel.id
    INNER JOIN
        levels l ON l.id = clevel.level_id
    INNER JOIN
        curriculum_subjects cs ON clevel.curriculum_subject_id = cs.id
    INNER JOIN
        curriculums cur ON cs.curriculum_id = cur.id
    INNER JOIN
        user_curriculums uc ON uc.curriculum_id = cur.id
    INNER JOIN
        levels_with_priority lp ON lp.level = l.name::text
    WHERE
        cl.name ILIKE '%' || query_param || '%'
        AND (grade_param IS NULL OR l.name::text = ANY(grade_param))
    ORDER BY
        lp.priority ASC,
        cl.name ASC
    LIMIT 30 OFFSET offset_param;
END;
$$;
