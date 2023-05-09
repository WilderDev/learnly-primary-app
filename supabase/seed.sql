-- Auth User 1
INSERT INTO auth.users
(instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'authenticated', 'authenticated', 'learnlyai@gmail.com', 'password', '2023-04-22 13:10:31.463703+00', NULL, '', NULL, '', '2023-04-22 13:10:03.275387+00', '', '', NULL, '2023-04-22 13:10:31.458239+00', '{"provider": "email", "providers": ["email"]}', '{"first_name": "Will", "last_name": "Wilder", "avatar_url": ""}', NULL, '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities
(id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'::uuid, '{"sub": "185f2f83-d63a-4c9b-b4a0-7e4a885799e2", "email": "learnlyai@gmail.com"}', 'email', '2023-04-22 13:10:31.458239+00', '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00');


-- Teacher Profile 1
UPDATE teacher_profiles
SET
  first_name = 'Learnly',
  last_name = 'Teacher'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2';

-- Teacher Preferences 1
UPDATE teaching_preferences
SET
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2';

-- Student Profile 1
INSERT INTO student_profiles
(id, first_name, last_name, avatar_url, birthday, teacher_id)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Little', 'Timmy', '', '2020-01-01', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2');

-- Student Preferences 1
UPDATE student_preferences
SET
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e3'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e3';



