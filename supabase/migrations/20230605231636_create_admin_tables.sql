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

-- Statistics
CREATE VIEW admin_statistics_view AS
SELECT
    (SELECT COUNT(*) FROM subscriptions
        WHERE status = 'trialing' AND EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    ) AS monthly_trial_sign_ups,
    (SELECT COUNT(*) FROM subscriptions WHERE status = 'trialing') AS total_trial_sign_ups,
    (SELECT COUNT(*) FROM subscriptions
        WHERE status = 'active' AND EXTRACT(MONTH FROM updated_at) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(YEAR FROM updated_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    ) AS monthly_trial_conversions,
    (SELECT COUNT(*) FROM subscriptions WHERE status = 'active') AS total_trial_conversions,
    (SELECT COUNT(DISTINCT user_id) FROM subscriptions
        WHERE status = 'active' AND EXTRACT(MONTH FROM updated_at) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(YEAR FROM updated_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    ) AS monthly_active_users,
    (SELECT COUNT(DISTINCT user_id) FROM subscriptions
        WHERE status = 'active' AND EXTRACT(YEAR FROM updated_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    ) AS annual_active_users;
