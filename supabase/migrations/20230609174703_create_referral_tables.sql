-- * Tables
-- Referral Codes
CREATE TABLE referrals (
  -- Primary key
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),

  -- Referral code
  code text NOT NULL UNIQUE,

  -- Referrer ID
  referrer_id uuid NOT NULL REFERENCES teacher_profiles(id),

  -- Referred ID
  referred_id uuid REFERENCES teacher_profiles(id),

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
--   referred_id uuid REFERENCES teacher_profiles(id),

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
