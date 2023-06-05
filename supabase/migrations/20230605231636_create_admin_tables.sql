-- * Views
--- Current Users
CREATE VIEW admin_current_users_view AS
SELECT
  u.email,
  tp.id,
  tp.first_name,
  tp.last_name,
  tp.role,
  tp.last_activity,
  s.status AS subscription_status,
  s.current_period_end AS expiration_date
FROM
  teacher_profiles tp
JOIN auth.users u ON tp.id = u.id
LEFT JOIN
  subscriptions s
ON
  tp.id = s.user_id
WHERE
  s.status = 'active';

--- Trial Users
CREATE VIEW admin_trial_users_view AS
SELECT
  u.email,
  tp.id,
  tp.first_name,
  tp.last_name,
  tp.role,
  tp.last_activity,
  s.status AS subscription_status,
  s.trial_end AS expiration_date
FROM
  teacher_profiles tp
JOIN auth.users u ON tp.id = u.id
LEFT JOIN
  subscriptions s
ON
  tp.id = s.user_id
WHERE
  s.status = 'trialing';

--- Past Users
CREATE VIEW admin_past_users_view AS
SELECT
  u.email,
  tp.id,
  tp.first_name,
  tp.last_name,
  tp.role,
  tp.last_activity,
  s.status AS subscription_status,
  GREATEST(s.trial_end, s.current_period_end) AS expiration_date
FROM
  teacher_profiles tp
JOIN auth.users u ON tp.id = u.id
LEFT JOIN
  subscriptions s
ON
  tp.id = s.user_id
WHERE
  s.status IN ('canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid');
