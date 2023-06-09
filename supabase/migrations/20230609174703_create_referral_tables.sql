-- * Tables
-- Referral Codes
CREATE TABLE referrals (
  -- Primary key
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),

  -- Referral code
  code text NOT NULL UNIQUE,

  -- Referrer ID
  referrer_id uuid NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,

  -- Referred ID
  referred_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

  -- Timestamps
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- TSK: Put in Prod DB
-- CREATE TABLE referrals (
--   -- Primary key
--   id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),

--   -- Referral code
--   code text NOT NULL UNIQUE,

--   -- Referrer ID
--   referrer_id uuid NOT NULL REFERENCES teacher_profiles(id),

--   -- Referred ID
--   referred_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

--   -- Timestamps
--   created_at timestamp with time zone NOT NULL DEFAULT now(),
--   updated_at timestamp with time zone NOT NULL DEFAULT now()
-- );

-- DROP VIEW teacher_me_view;
-- CREATE VIEW teacher_me_view AS
-- SELECT
--   teacher_profiles.id AS id,
--   teacher_profiles.first_name AS first_name,
--   teacher_profiles.last_name AS last_name,
--   teacher_profiles.avatar_url AS avatar_url,
--   teacher_profiles.status AS status,
--   teacher_profiles.type AS type,
--   teacher_profiles.role AS role,
--   referrals.code AS referral_code,
--   teaching_preferences.preferred_teaching_strategies AS teaching_strategies,
--   teaching_preferences.preferred_lesson_detail_level AS lesson_detail_level,
--   teaching_preferences.preferred_teaching_tools AS teaching_tools,
--   teaching_preferences.preferred_lesson_structure AS lesson_structure,
--   subscriptions.id AS subscription_id,
--   subscriptions.status AS subscription_status,
--   subscriptions.trial_end AS subscription_trial_end,
--   subscriptions.cancel_at_period_end AS subscription_cancel_at_period_end,
--   subscriptions.current_period_end AS subscription_current_period_end,
--   customers.stripe_customer_id AS stripe_customer_id,
--   customers.billing_portal_session_url AS billing_portal_session_url
-- FROM teacher_profiles
-- JOIN teaching_preferences ON teacher_profiles.id = teaching_preferences.id
-- JOIN subscriptions ON teacher_profiles.id = subscriptions.user_id
-- JOIN customers ON teacher_profiles.id = customers.id
-- LEFT JOIN referrals ON teacher_profiles.id = referrals.referrer_id
-- WHERE teacher_profiles.id = auth.uid();

-- TSK: I will need to comment these out before pushing to prod... because they already exist in prod in a different migration

-- * Views
-- Public Profile View
CREATE VIEW public_teacher_profile_view AS (
  SELECT
    p.id,
    p.first_name,
    p.last_name,
    p.avatar_url,
    p.status,
    p.type,
    json_agg(DISTINCT jsonb_build_object(
      'id', l.id,
      'title', l.title,
      'image_path', l.image_path,
      'tags', l.tags,
      'length_in_min', l.length_in_min,
      'subject', jsonb_build_object(
        'id', s.id,
        'name', s.name
      ),
      'level', jsonb_build_object(
        'id', lv.id,
        'name', lv.name
      ),
      'topic', jsonb_build_object(
        'id', t.id,
        'name', t.name
      ),
      'created_at', l.created_at
    )) FILTER (WHERE l.is_public = TRUE) AS lessons,
    json_agg(DISTINCT jsonb_build_object(
      'id', c.id,
      'name', c.name,
      'description', c.description,
      'image_path', c.image_path,
      'status', c.status
    )) FILTER (WHERE uc.user_id = p.id AND c.is_public = TRUE AND c.status = 'PUBLISHED') AS curriculums
  FROM
    teacher_profiles p
    LEFT JOIN lesson_plans l ON p.id = l.creator_id
    LEFT JOIN subjects s ON l.subject = s.id
    LEFT JOIN levels lv ON l.level = lv.id
    LEFT JOIN topics t ON l.topic = t.id
    LEFT JOIN user_curriculums uc ON p.id = uc.user_id
    LEFT JOIN curriculums c ON uc.curriculum_id = c.id
  GROUP BY
    p.id
);

-- Teacher's Me View (for a given teacher)
CREATE VIEW teacher_me_view AS
SELECT
  teacher_profiles.id AS id,
  teacher_profiles.first_name AS first_name,
  teacher_profiles.last_name AS last_name,
  teacher_profiles.avatar_url AS avatar_url,
  teacher_profiles.status AS status,
  teacher_profiles.type AS type,
  teacher_profiles.role AS role,
  referrals.code AS referral_code,
  teaching_preferences.preferred_teaching_strategies AS teaching_strategies,
  teaching_preferences.preferred_lesson_detail_level AS lesson_detail_level,
  teaching_preferences.preferred_teaching_tools AS teaching_tools,
  teaching_preferences.preferred_lesson_structure AS lesson_structure,
  subscriptions.id AS subscription_id,
  subscriptions.status AS subscription_status,
  subscriptions.trial_end AS subscription_trial_end,
  subscriptions.cancel_at_period_end AS subscription_cancel_at_period_end,
  subscriptions.current_period_end AS subscription_current_period_end,
  customers.stripe_customer_id AS stripe_customer_id,
  customers.billing_portal_session_url AS billing_portal_session_url
FROM teacher_profiles
JOIN teaching_preferences ON teacher_profiles.id = teaching_preferences.id
JOIN subscriptions ON teacher_profiles.id = subscriptions.user_id
JOIN customers ON teacher_profiles.id = customers.id
LEFT JOIN referrals ON teacher_profiles.id = referrals.referrer_id
WHERE teacher_profiles.id = auth.uid();
