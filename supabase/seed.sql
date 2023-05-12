-- Auth User 1
INSERT INTO auth.users
(instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'authenticated', 'authenticated', 'learnlyai@gmail.com', 'password', '2023-04-22 13:10:31.463703+00', NULL, '', NULL, '', '2023-04-22 13:10:03.275387+00', '', '', NULL, '2023-04-22 13:10:31.458239+00', '{"provider": "email", "providers": ["email"]}', '{"first_name": "Will", "last_name": "Wilder", "avatar_url": ""}', NULL, '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities
(id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'::uuid, '{"sub": "185f2f83-d63a-4c9b-b4a0-7e4a885799e2", "email": "learnlyai@gmail.com"}', 'email', '2023-04-22 13:10:31.458239+00', '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00');

-- Auth User 2
INSERT INTO auth.users
(instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'authenticated', 'authenticated', 'parent@gmail.com', 'password', '2023-04-22 13:10:31.463703+00', NULL, '', NULL, '', '2023-04-22 13:10:03.275387+00', '', '', NULL, '2023-04-22 13:10:31.458239+00', '{"provider": "email", "providers": ["email"]}', '{"first_name": "Parent", "last_name": "Wilder", "avatar_url": "/static/icons/avatars/wolf.png"}', NULL, '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities
(id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3'::uuid, '{"sub": "185f2f83-d63a-4c9b-b4a0-7e4a885799e3", "email": "parent@gmail.com"}', 'email', '2023-04-22 13:10:31.458239+00', '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00');


-- Admin Profile 1
UPDATE teacher_profiles
SET
  first_name = 'Learnly',
  last_name = 'Team',
  role = 'ADMIN'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2';

-- Admin Preferences 1
UPDATE teaching_preferences
SET
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e2';

-- Teacher Profile 1
UPDATE teacher_profiles
SET
  first_name = 'Parent',
  last_name = 'Wilder',
  role = 'TEACHER'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e3';

-- Student Profile 1
INSERT INTO student_profiles
(id, first_name, last_name, avatar_url, birthday, teacher_id)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e4', 'Little', 'Timmy', '', '2020-01-01', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3');

-- Student Preferences 1
UPDATE student_preferences
SET
  learning_styles = '{"Auditory", "Logical"}',
  subject_preferences = '{"Math", "Science"}',
  interests = '{"Sports", "Music"}',
  special_needs = '{"Attention_Deficit_Hyperactivity_Disorder"}'
  --- TSK: Add more
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e4';

-- Trial 1
INSERT INTO trials
(teacher_id, start_date, end_date)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', CURRENT_DATE, CURRENT_DATE + INTERVAL '14 days');

-- Customers (1)

-- Payment & Billing Details (1)

-- Subscriptions (1)
-- TSK

-- Products (1)
-- TSK

-- Prices (2)
-- TSK

-- Little Learners | Comprehensive K-5 | Little Experimentors | STEM K-5 | etc...
-- Learning Paths (4)
-- INSERT INTO learning_paths
-- ()
-- VALUES
-- ()
-- ()
-- ()
-- ()

-- Subjects (8)
INSERT INTO subjects
(code, name, description, image_url)
VALUES
('MATH', 'Mathmatics', 'The universal language that deciphers the complex riddles of the cosmos, providing the foundation for logic and reason in a world of chaos.', '/images/subjects/math.jpg'),
('SCI', 'Science', 'A ceaseless journey of discovery, asking questions of the universe and uncovering its intricate, beautiful truths one experiment at a time.', '/images/subjects/science.jpg'),
('ENG', 'English', 'The soulful dance of words that paints vivid pictures, tells profound stories, and bridges the gap between human hearts and minds.', '/images/subjects/english.jpg'),
('SS', 'Social Studies', 'A living tapestry of human experience, weaving together history, geography, culture, and society to understand our collective past and shape a better future.', '/images/subjects/social-studies.jpg'),
('ART', 'Art', 'The unspoken language of human emotion, a canvas for individual expression, and a mirror reflecting society’s soul.', '/images/subjects/art.jpg'),
('MSC', 'Music', 'An ethereal symphony of emotions that transcends boundaries, unites hearts, and resonates with the deepest chords of our shared humanity.', '/images/subjects/music.jpg'),
('PE', 'Physical Education', 'The celebration of human potential, teaching us the harmony of mind and body, and the joy of movement and resilience.', '/images/subjects/physical-education.jpg'),
('HTH', 'Health', 'The precious cornerstone of life, emphasizing the interconnectedness of physical, mental, and social well-being for a fulfilled existence.', '/images/subjects/health.jpg'),
('COMPSCI', 'Computer Science', 'The pulsating heart of modern innovation, scripting the future in lines of code and unlocking boundless possibilities in a digital world.', '/images/subjects/computer-science.jpg'),
('SEL', 'Social Emotional Learning', 'The compass guiding us through the landscape of human emotions, fostering empathy, resilience, and personal growth, one interaction at a time.', '/images/subjects/social-emotional-learning.jpg'),
-- ('ENV', 'Environmental Studies', 'The exploration of our natural world, fostering a sense of curiosity, respect, and stewardship for the Earth.', '/images/subjects/environmental-studies.jpg'),
-- ('CA', 'Creative Arts', 'The playground of imagination, using different mediums to express ideas, evoke emotions, and see the world in new ways.', '/images/subjects/creative-arts.jpg'),
-- ('STEM', 'STEM', 'The launchpad for innovation, nurturing problem-solving, critical thinking, and the joy of discovery.', '/images/subjects/stem.jpg'),
('MND', 'Mindfulness', 'The practice of inner harmony, promoting self-awareness, emotional regulation, and physical well-being.', '/images/subjects/mindfulness.jpg'),
('ENTP', 'Entrepreneurship', 'The daring symphony of innovation, where courage meets creativity to turn dreams into reality, shaping the world one venture at a time.', '/images/subjects/entrepreneurship.jpg');

-- Levels (10)
INSERT INTO levels
(name, animal, image_url)
VALUES
('Buds', 'Caterpillars', '/images/animals/buds.jpg'),
('Sprouts', 'Dogs', '/images/animals/saplings.jpg'),
('Oaks', 'Bees', '/images/animals/oaks.jpg'),
('Pre-K', 'Bears', '/images/animals/bears.jpg'),
('K', 'Monkies', '/images/animals/monkey.jpg'),
('1', 'Turtles', '/images/animals/turtle.jpg'),
('2', 'Rabbits', '/images/animals/rabbit.jpg'),
('3', 'Foxes', '/images/animals/fox.jpg'),
('4', 'Deer', '/images/animals/deer.jpg'),
('5', 'Elephants', '/images/animals/elephant.jpg');


-- Topics (TSK)
--- MATH (84)
---- Pre-K Mathematics (12)
SELECT create_topic(
  'Numbers',
  'Counting, comparing, and ordering numbers.',
  'https://source.unsplash.com/random/?math,numbers',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Shapes',
  'Identifying and understanding basic shapes.',
  'https://source.unsplash.com/random/?math,shapes',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Patterns',
  'Recognizing and creating simple patterns.',
  'https://source.unsplash.com/random/?math,patterns',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Measurement',
  'Understanding basic concepts of measurement.',
  'https://source.unsplash.com/random/?math,measurement',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Sorting',
  'Sorting objects based on attributes.',
  'https://source.unsplash.com/random/?math,sorting',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Position and Direction',
  'Understanding concepts of position and direction.',
  'https://source.unsplash.com/random/?math,position,direction',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Time',
  'Basic understanding of time and sequence of events.',
  'https://source.unsplash.com/random/?math,time',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Addition',
  'Introduction to basic addition concepts.',
  'https://source.unsplash.com/random/?math,addition',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Subtraction',
  'Introduction to basic subtraction concepts.',
  'https://source.unsplash.com/random/?math,subtraction',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Data and Graphing',
  'Basic understanding of data collection and graphing.',
  'https://source.unsplash.com/random/?math,data,graphing',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Money',
  'Introduction to basic money concepts.',
  'https://source.unsplash.com/random/?math,money',
  'Pre-K',
  'MATH'
);
SELECT create_topic(
  'Fractions',
  'Understanding basic concepts of fractions.',
  'https://source.unsplash.com/random/?math,fractions',
  'Pre-K',
  'MATH'
);
---- Kindergarten Mathematics (12)
---- Level 1 Mathematics (12)
---- Level 2 Mathematics (12)
---- Level 3 Mathematics (12)
---- Level 4 Mathematics (12)
---- Level 5 Mathematics (12)
--- SCI (84) - "science"
---- Pre-K Science (5)
---- Kindergarten Science (12)
---- Level 1 Science (12)
---- Level 2 Science (12)
---- Level 3 Science (12)
---- Level 4 Science (12)
---- Level 5 Science (12)
--- ENG (84) - "english"
---- Pre-K English (5)
---- Kindergarten English (12)
---- Level 1 English (12)
---- Level 2 English (12)
---- Level 3 English (12)
---- Level 4 English (12)
---- Level 5 English (12)
--- SS (84) - "social studies"
---- Pre-K Social Studies (5)
---- Kindergarten Social Studies (12)
---- Level 1 Social Studies (12)
---- Level 2 Social Studies (12)
---- Level 3 Social Studies (12)
---- Level 4 Social Studies (12)
---- Level 5 Social Studies (12)
--- ART (40) - "art"
---- Pre-K Art (5)
---- Kindergarten Art (5)
---- Level 1 Art (5)
---- Level 2 Art (5)
---- Level 3 Art (5)
---- Level 4 Art (5)
---- Level 5 Art (5)
--- MSC (40) - "music"
---- Pre-K Music (5)
---- Kindergarten Music (5)
---- Level 1 Music (5)
---- Level 2 Music (5)
---- Level 3 Music (5)
---- Level 4 Music (5)
---- Level 5 Music (5)
--- PE (40) - "physical education"
---- Pre-K Physical Education (5)
---- Kindergarten Physical Education (5)
---- Level 1 Physical Education (5)
---- Level 2 Physical Education (5)
---- Level 3 Physical Education (5)
---- Level 4 Physical Education (5)
---- Level 5 Physical Education (5)
--- HTH (40) - "health"
---- Pre-K Health (5)
---- Kindergarten Health (5)
---- Level 1 Health (5)
---- Level 2 Health (5)
---- Level 3 Health (5)
---- Level 4 Health (5)
---- Level 5 Health (5)
--- COMPSCI (40) - "computer science"
---- Pre-K Computer Science (5)
---- Kindergarten Computer Science (5)
---- Level 1 Computer Science (5)
---- Level 2 Computer Science (5)
---- Level 3 Computer Science (5)
---- Level 4 Computer Science (5)
---- Level 5 Computer Science (5)
--- SEL (40) - "social emotional learning"
---- Pre-K Social Emotional Learning (5)
---- Kindergarten Social Emotional Learning (5)
---- Level 1 Social Emotional Learning (5)
---- Level 2 Social Emotional Learning (5)
---- Level 3 Social Emotional Learning (5)
---- Level 4 Social Emotional Learning (5)
---- Level 5 Social Emotional Learning (5)
--- MND (40) - "mindfulness"
---- Pre-K Mindfulness (5)
---- Kindergarten Mindfulness (5)
---- Level 1 Mindfulness (5)
---- Level 2 Mindfulness (5)
---- Level 3 Mindfulness (5)
---- Level 4 Mindfulness (5)
---- Level 5 Mindfulness (5)
--- ENTP (40) - "entrepreneurship"
---- Pre-K Entrepreneurship (5)
---- Kindergarten Entrepreneurship (5)
---- Level 1 Entrepreneurship (5)
---- Level 2 Entrepreneurship (5)
---- Level 3 Entrepreneurship (5)
---- Level 4 Entrepreneurship (5)
---- Level 5 Entrepreneurship (5)

-- Lesson Plans (2)

-- User Lesson Plans (1)
-- TSK

-- Lesson Plan Templates (2)
-- TSK

-- User Lesson Plan Templates (1)
-- TSK

-- Notificaitons (4)
-- TSK

-- Comments (2)
-- TSK

-- Reactions (3)
INSERT INTO
reactions
(type, label, url)
VALUES
('like', 'Like', 'https://emojis.slackmojis.com/emojis/images/1588108689/8789/fb-like.png?1588108689'),
('heart', 'Heart', 'https://emojis.slackmojis.com/emojis/images/1596061862/9845/meow_heart.png?1596061862'),
('party-blob', 'Party Blob', 'https://emojis.slackmojis.com/emojis/images/1547582922/5197/party_blob.gif?1547582922');

-- Comment Reactions (3)
-- TSK
