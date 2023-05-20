-- Auth User 1
INSERT INTO auth.users
(instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'authenticated', 'authenticated', 'learnlyai@gmail.com', 'password', '2023-04-22 13:10:31.463703+00', NULL, '', NULL, '', '2023-04-22 13:10:03.275387+00', '', '', NULL, '2023-04-22 13:10:31.458239+00', '{"provider": "email", "providers": ["email"], "role": "ADMIN"}', '{"first_name": "Will", "last_name": "Wilder", "avatar_url": ""}', NULL, '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

INSERT INTO auth.identities
(id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e2', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2'::uuid, '{"sub": "185f2f83-d63a-4c9b-b4a0-7e4a885799e2", "email": "learnlyai@gmail.com"}', 'email', '2023-04-22 13:10:31.458239+00', '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00');

-- Auth User 2
INSERT INTO auth.users
(instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
('00000000-0000-0000-0000-000000000000', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'authenticated', 'authenticated', 'parent@gmail.com', 'password', '2023-04-22 13:10:31.463703+00', NULL, '', NULL, '', '2023-04-22 13:10:03.275387+00', '', '', NULL, '2023-04-22 13:10:31.458239+00', '{"provider": "email", "providers": ["email"], "role": "TEACHER"}', '{"first_name": "Parent", "last_name": "Wilder", "avatar_url": "/static/icons/avatars/wolf.png"}', NULL, '2022-10-04 03:41:27.391146+00', '2023-04-22 13:10:31.463703+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

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
('185f2f83-d63a-4c9b-b4a0-7e4a885799e8', 'Little', 'Timmy', '/static/icons/avatars/lion.png', '2020-01-01', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3');

-- Student Preferences 1
UPDATE student_preferences
SET
  learning_styles = '{"Auditory", "Logical"}',
  subject_preferences = '{"Math", "Science"}',
  interests = '{"Sports", "Music"}',
  special_needs = '{"Attention_Deficit_Hyperactivity_Disorder"}'
WHERE
  id = '185f2f83-d63a-4c9b-b4a0-7e4a885799e8';


-- Trial 1
INSERT INTO trials
(teacher_id, start_date, end_date)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', CURRENT_DATE, CURRENT_DATE + INTERVAL '14 days');

-- Customers (1)
INSERT INTO customers
(id, stripe_customer_id, subscriptions)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'cus_NfjzKF2WtQEoNX', '{}');

-- Payment & Billing Details (1)
INSERT INTO payment_and_billing_details
(id, stripe_payment_method_id, stripe_customer_id, card_brand, last4, exp_month, exp_year, billing_address_line1, billing_address_line2, billing_city, billing_state, billing_postal_code, billing_country, billing_name, billing_email, billing_phone, default_method, payment_details, metadata)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'pm_1MqxwvImwAD1T4RH2Z2Z2Z2Z', 'cus_NfjzKF2WtQEoNX', 'Visa', '4242', '12', '2022', '123 Main St', '', 'San Francisco', 'CA', '94111', 'US', 'Will Wilder', 'learnly@gmail.com', '415-555-5555', TRUE, '{}', '{}');

-- Subscriptions (1)
INSERT INTO subscriptions
(id, user_id, stripe_customer_id, stripe_product_id, status, items, cancel_at_period_end, current_period_start, current_period_end, days_until_due, metadata)
VALUES
('sub_1MuOxKImwAD1T4RHYqF1pQVK', '185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'cus_NfjzKF2WtQEoNX', 'prod_NbzlM7B5YH5saJ', 'active', '{}', FALSE, timezone('utc'::text, now()), timezone('utc'::text, now()) + interval '1 month', 30, '{}');

-- Products (1)
INSERT INTO products
(id, active, name, description, image, metadata)
VALUES
('prod_NbzlM7B5YH5saJ', TRUE, 'Learnly Premium Plus', 'Learnly for parents and one child with advanced features and support', '/favicon/logo-res.png', '{}');

-- Prices (2)
INSERT INTO prices
(id, stripe_product_id, active, description, nickname, recurring_interval, recurring_interval_count, metadata)
VALUES
('price_1MqxwwImwAD1T4RHVeBgE47e', 'prod_NbzlM7B5YH5saJ', TRUE, 'Learnly for parents and one child with advanced features and support', 'Monthly', 'month', 1, '{"features": "Everything Included in Solo, Interactive Learning Materials, Advanced Performance Reports & Analytics, Parental Controls, Real-time Feedback, 2 Child Accounts Included, 24/7 Dedicated Support", "level": "plus"}'),
('price_1MqlmHImwAD1T4RH15cLpyuT', 'prod_NbzlM7B5YH5saJ', TRUE, 'Learnly for parents and one child with advanced features and support', 'Yearly', 'year', 1, '{"features": "20% Off, Everything Included in Solo, Interactive Learning Materials, Advanced Performance Reports & Analytics, Parental Controls, Real-time Feedback, 2 Child Accounts Included, 24/7 Dedicated Support", "level": "plus"}');

-- Notificaitons (4)
INSERT INTO notifications
(recipient_id, type, status, title, body)
VALUES
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'INFO', 'PENDING', 'Welcome to Learnly INFO!', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'WARNING', 'PENDING', 'Welcome to Learnly Warning!', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'ERROR', 'PENDING', 'Welcome to Learnly Error!', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'SUCCESS', 'PENDING', 'Welcome to Learnly! Success', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'BILLING', 'PENDING', 'Welcome to Learnly! Billing', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'COMMUNITY', 'PENDING', 'Welcome to Learnly! Community', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'CHAT', 'PENDING', 'Welcome to Learnly! Chat', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'LESSON', 'PENDING', 'Welcome to Learnly! Lesson', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'EVENT', 'PENDING', 'Welcome to Learnly! Event', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'OTHER', 'PENDING', 'Welcome to Learnly! Other', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.');

-- Reactions (3)
INSERT INTO
reactions
(type, label, url)
VALUES
('like', 'Like', 'https://emojis.slackmojis.com/emojis/images/1588108689/8789/fb-like.png?1588108689'),
('heart', 'Heart', 'https://emojis.slackmojis.com/emojis/images/1596061862/9845/meow_heart.png?1596061862'),
('party-blob', 'Party Blob', 'https://emojis.slackmojis.com/emojis/images/1547582922/5197/party_blob.gif?1547582922');

-- Subjects (8)
INSERT INTO subjects
(id, code, name, description, image_path)
VALUES
('b408d3b0-ca53-4385-9c38-388508f6f777', 'MATH', 'Mathematics', 'The universal language that deciphers the complex riddles of the cosmos, providing the foundation for logic and reason in a world of chaos.', '/static/images/subjects/math.jpg'),
('2c0970f3-18fe-491f-879e-82e43d50bb57', 'SCI', 'Science', 'A ceaseless journey of discovery, asking questions of the universe and uncovering its intricate, beautiful truths one experiment at a time.', '/static/images/subjects/science.jpg'),
('ed78d635-3be9-41b0-a97e-7dc65e25240f', 'ENG', 'English', 'The soulful dance of words that paints vivid pictures, tells profound stories, and bridges the gap between human hearts and minds.', '/static/images/subjects/english.jpg'),
('cdc09ea6-6e30-4550-9d1d-4b7a30d376d5', 'SS', 'Social Studies', 'A living tapestry of human experience, weaving together history, geography, culture, and society to understand our collective past and shape a better future.', '/static/images/subjects/social-studies.jpg'),
('8ed47cca-73f2-43db-9cba-a8427227780c', 'ART', 'Art', 'The unspoken language of human emotion, a canvas for individual expression, and a mirror reflecting society’s soul.', '/static/images/subjects/art.jpg'),
('548efc15-dd84-4828-ab04-941773151a70', 'MUS', 'Music', 'An ethereal symphony of emotions that transcends boundaries, unites hearts, and resonates with the deepest chords of our shared humanity.', '/static/images/subjects/music.jpg'),
('8b63d28d-1669-4002-90ce-95560d165a2e', 'PE', 'Physical Education', 'The celebration of human potential, teaching us the harmony of mind and body, and the joy of movement and resilience.', '/static/images/subjects/physical-education.jpg'),
('47b81525-f6d4-45b7-acb8-16f4591afc91', 'HTH', 'Health', 'The precious cornerstone of life, emphasizing the interconnectedness of physical, mental, and social well-being for a fulfilled existence.', '/static/images/subjects/health.jpg'),
('194fa526-b272-40b7-a301-74d2eb689ce5', 'COMPSCI', 'Computer Science', 'The pulsating heart of modern innovation, scripting the future in lines of code and unlocking boundless possibilities in a digital world.', '/static/images/subjects/computer-science.jpg'),
('38525bb6-a2fb-4e0a-b0af-47af9efedce2', 'SEL', 'Social Emotional Learning', 'The compass guiding us through the landscape of human emotions, fostering empathy, resilience, and personal growth, one interaction at a time.', '/static/images/subjects/social-emotional-learning.jpg'),
('49ef0ad8-762c-43d6-b65e-1636a0a657de', 'MND', 'Mindfulness', 'The practice of inner harmony, promoting self-awareness, emotional regulation, and physical well-being.', '/static/images/subjects/mindfulness.jpg'),
('df4bf7df-7431-48bf-9d4e-a9ab3a943531', 'ENTP', 'Entrepreneurship', 'The daring symphony of innovation, where courage meets creativity to turn dreams into reality, shaping the world one venture at a time.', '/static/images/subjects/entrepreneurship.jpg');

-- Levels (10)
INSERT INTO levels
(id, name, animal, image_path)
VALUES
('ffba7897-2e54-45c7-bfdc-73953451a867', 'Buds', 'Caterpillars', '/static/images/animals/buds.jpg'),
('eb6f4266-542d-4978-aa87-cd2444cedd46', 'Sprouts', 'Dogs', '/static/images/animals/saplings.jpg'),
('ee90a562-4b34-4590-9757-cfcb866876d7', 'Oaks', 'Bees', '/static/images/animals/oaks.jpg'),
('7567fec9-1a5a-47ac-a2d4-df72df106a53', 'Pre-K', 'Bears', '/static/images/animals/bears.jpg'),
('8787a66e-9e03-42c7-8870-ada6df021491', 'K', 'Monkies', '/static/images/animals/monkey.jpg'),
('ca0b37a7-47c4-4abb-81a3-64e84f803abd', '1', 'Turtles', '/static/images/animals/turtle.jpg'),
('485fe542-3c7c-453b-9e18-7baf3c773004', '2', 'Rabbits', '/static/images/animals/rabbit.jpg'),
('0679cb12-dd80-4fea-9d01-64c141cba349', '3', 'Foxes', '/static/images/animals/fox.jpg'),
('4af5ff40-a612-4114-b4fc-01ad0cd8fbf4', '4', 'Deer', '/static/images/animals/deer.jpg'),
('0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa', '5', 'Elephants', '/static/images/animals/elephant.jpg');


-- Lesson Creator Dropdown Topics (656)
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
SELECT create_topic(
  'Counting and Cardinality',
  'Understanding numbers, counting order, and number names.',
  'https://source.unsplash.com/random/?math,counting',
  'K',
  'MATH'
);
SELECT create_topic(
  'Comparing Numbers',
  'Identifying whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group.',
  'https://source.unsplash.com/random/?math,comparingnumbers',
  'K',
  'MATH'
);
SELECT create_topic(
  'Basic Addition and Subtraction',
  'Understanding addition as putting together and subtraction as taking apart.',
  'https://source.unsplash.com/random/?math,addition,subtraction',
  'K',
  'MATH'
);
SELECT create_topic(
  'Shapes and Space',
  'Identifying and describing shapes (squares, circles, triangles, rectangles, hexagons, cubes, cones, cylinders, and spheres).',
  'https://source.unsplash.com/random/?math,shapes,space',
  'K',
  'MATH'
);
SELECT create_topic(
  'Measurement',
  'Comparing objects by length and weight.',
  'https://source.unsplash.com/random/?math,measurement',
  'K',
  'MATH'
);
SELECT create_topic(
  'Sorting and Classifying',
  'Sorting objects into categories and understanding those categories.',
  'https://source.unsplash.com/random/?math,sorting,classifying',
  'K',
  'MATH'
);
SELECT create_topic(
  'Patterns',
  'Recognizing and creating simple patterns.',
  'https://source.unsplash.com/random/?math,patterns',
  'K',
  'MATH'
);
SELECT create_topic(
  'Time',
  'Understanding the concept of time and sequences of events.',
  'https://source.unsplash.com/random/?math,time',
  'K',
  'MATH'
);
SELECT create_topic(
  'Data',
  'Understanding simple graphs and data representation.',
  'https://source.unsplash.com/random/?math,data',
  'K',
  'MATH'
);
SELECT create_topic(
  'Position and Direction',
  'Understanding the concepts of position and direction.',
  'https://source.unsplash.com/random/?math,position,direction',
  'K',
  'MATH'
);
SELECT create_topic(
  'Size and Quantity',
  'Comparing and identifying sizes and quantities.',
  'https://source.unsplash.com/random/?math,size,quantity',
  'K',
  'MATH'
);
SELECT create_topic(
  'Problem Solving',
  'Applying math skills to solve simple problems.',
  'https://source.unsplash.com/random/?math,problemsolving',
  'K',
  'MATH'
);
---- Level 1 Mathematics (12)
SELECT create_topic(
  'Place Value',
  'Understanding the value of digits in a number.',
  'https://source.unsplash.com/random/?math,placevalue',
  '1',
  'MATH'
);
SELECT create_topic(
  'Addition and Subtraction',
  'Mastering basic addition and subtraction.',
  'https://source.unsplash.com/random/?math,addition,subtraction',
  '1',
  'MATH'
);
SELECT create_topic(
  'Shapes and Solids',
  'Identifying shapes and solid figures.',
  'https://source.unsplash.com/random/?math,shapes,solids',
  '1',
  'MATH'
);
SELECT create_topic(
  'Measurement and Data',
  'Understanding length measurement and data organization.',
  'https://source.unsplash.com/random/?math,measurement,data',
  '1',
  'MATH'
);
SELECT create_topic(
  'Time and Money',
  'Telling time and counting money.',
  'https://source.unsplash.com/random/?math,time,money',
  '1',
  'MATH'
);
SELECT create_topic(
  'Equal Parts and Wholes',
  'Understanding fractions as equal parts of a whole.',
  'https://source.unsplash.com/random/?math,fractions,whole',
  '1',
  'MATH'
);
SELECT create_topic(
  'Word Problems',
  'Solving word problems involving addition and subtraction.',
  'https://source.unsplash.com/random/?math,wordproblems',
  '1',
  'MATH'
);
SELECT create_topic(
  'Comparing Numbers',
  'Comparing two-digit numbers.',
  'https://source.unsplash.com/random/?math,comparingnumbers',
  '1',
  'MATH'
);
SELECT create_topic(
  'Skip Counting',
  'Skip counting by 2s, 5s, and 10s.',
  'https://source.unsplash.com/random/?math,skipcounting',
  '1',
  'MATH'
);
SELECT create_topic(
  'Understanding Graphs',
  'Reading and creating simple graphs.',
  'https://source.unsplash.com/random/?math,graphs',
  '1',
  'MATH'
);
SELECT create_topic(
  'Geometry',
  'Recognizing and drawing shapes with certain attributes.',
  'https://source.unsplash.com/random/?math,geometry',
  '1',
  'MATH'
);
SELECT create_topic(
  'Algebraic Thinking',
  'Understanding basic concepts of equal sign, and determining if equations involving addition and subtraction are true or false.',
  'https://source.unsplash.com/random/?math,algebra',
  '1',
  'MATH'
);
---- Level 2 Mathematics (12)
SELECT create_topic(
  'Place Value',
  'Understanding the value of each digit in a number.',
  'https://source.unsplash.com/random/?math,placevalue',
  '2',
  'MATH'
);
SELECT create_topic(
  'Addition and Subtraction',
  'Mastering addition and subtraction within 1000.',
  'https://source.unsplash.com/random/?math,addition,subtraction',
  '2',
  'MATH'
);
SELECT create_topic(
  'Time',
  'Telling and writing time to the nearest five minutes.',
  'https://source.unsplash.com/random/?math,time',
  '2',
  'MATH'
);
SELECT create_topic(
  'Money',
  'Counting and calculating with coins and bills.',
  'https://source.unsplash.com/random/?math,money',
  '2',
  'MATH'
);
SELECT create_topic(
  'Measurement',
  'Measuring and estimating lengths in standard units.',
  'https://source.unsplash.com/random/?math,measurement',
  '2',
  'MATH'
);
SELECT create_topic(
  'Data',
  'Generating and interpreting data in various types of graphs.',
  'https://source.unsplash.com/random/?math,data',
  '2',
  'MATH'
);
SELECT create_topic(
  'Geometry',
  'Recognizing and drawing shapes with specific attributes.',
  'https://source.unsplash.com/random/?math,geometry',
  '2',
  'MATH'
);
SELECT create_topic(
  'Mental Math',
  'Using mental strategies to add and subtract within 20.',
  'https://source.unsplash.com/random/?math,mentalmath',
  '2',
  'MATH'
);
SELECT create_topic(
  'Fractions',
  'Understanding fractions as parts of a whole.',
  'https://source.unsplash.com/random/?math,fractions',
  '2',
  'MATH'
);
SELECT create_topic(
  'Multiplication and Division',
  'Introduction to basic multiplication and division concepts.',
  'https://source.unsplash.com/random/?math,multiplication,division',
  '2',
  'MATH'
);
SELECT create_topic(
  'Problem Solving',
  'Using mathematical concepts to solve word problems.',
  'https://source.unsplash.com/random/?math,problemsolving',
  '2',
  'MATH'
);
SELECT create_topic(
  'Logic and Reasoning',
  'Applying reasoning skills to solve mathematical problems.',
  'https://source.unsplash.com/random/?math,logic,reasoning',
  '2',
  'MATH'
);
---- Level 3 Mathematics (12)
SELECT create_topic(
  'Multiplication and Division',
  'Multiplying and dividing within 100.',
  'https://source.unsplash.com/random/?math,multiplication,division',
  '3',
  'MATH'
);
SELECT create_topic(
  'Fractions',
  'Understanding fractions as numbers on the number line.',
  'https://source.unsplash.com/random/?math,fractions',
  '3',
  'MATH'
);
SELECT create_topic(
  'Area',
  'Relating area to the operations of multiplication and addition.',
  'https://source.unsplash.com/random/?math,area',
  '3',
  'MATH'
);
SELECT create_topic(
  'Place Value',
  'Using place value understanding and properties of operations to perform multi-digit arithmetic.',
  'https://source.unsplash.com/random/?math,placevalue',
  '3',
  'MATH'
);
SELECT create_topic(
  'Measurement and Data',
  'Solving problems involving measurement and estimation of intervals of time, liquid volumes, and masses of objects.',
  'https://source.unsplash.com/random/?math,measurement,data',
  '3',
  'MATH'
);
SELECT create_topic(
  'Geometry',
  'Understanding that shapes in different categories may share attributes.',
  'https://source.unsplash.com/random/?math,geometry',
  '3',
  'MATH'
);
SELECT create_topic(
  'Time',
  'Telling and writing time to the nearest minute.',
  'https://source.unsplash.com/random/?math,time',
  '3',
  'MATH'
);
SELECT create_topic(
  'Money',
  'Solving problems involving money.',
  'https://source.unsplash.com/random/?math,money',
  '3',
  'MATH'
);
SELECT create_topic(
  'Problem Solving',
  'Using mathematical concepts to solve word problems.',
  'https://source.unsplash.com/random/?math,problemsolving',
  '3',
  'MATH'
);
SELECT create_topic(
  'Logic and Reasoning',
  'Applying reasoning skills to solve mathematical problems.',
  'https://source.unsplash.com/random/?math,logic,reasoning',
  '3',
  'MATH'
);
SELECT create_topic(
  'Patterns',
  'Understanding number patterns.',
  'https://source.unsplash.com/random/?math,patterns',
  '3',
  'MATH'
);
SELECT create_topic(
  'Data Representation',
  'Representing and interpreting data.',
  'https://source.unsplash.com/random/?math,data',
  '3',
  'MATH'
);
---- Level 4 Mathematics (12)
SELECT create_topic(
  'Multi-Digit Multiplication',
  'Understanding and applying multi-digit multiplication.',
  'https://source.unsplash.com/random/?math,multiplication',
  '4',
  'MATH'
);
SELECT create_topic(
  'Long Division',
  'Understanding and applying long division.',
  'https://source.unsplash.com/random/?math,division',
  '4',
  'MATH'
);
SELECT create_topic(
  'Fractions and Decimals',
  'Understanding and applying concepts of fractions and decimals.',
  'https://source.unsplash.com/random/?math,fractions,decimals',
  '4',
  'MATH'
);
SELECT create_topic(
  'Geometry',
  'Drawing and identifying lines and angles, and classifying shapes by properties of their lines and angles.',
  'https://source.unsplash.com/random/?math,geometry',
  '4',
  'MATH'
);
SELECT create_topic(
  'Measurement',
  'Solving problems involving measurement and conversion of measurements.',
  'https://source.unsplash.com/random/?math,measurement',
  '4',
  'MATH'
);
SELECT create_topic(
  'Place Value',
  'Understanding place value system.',
  'https://source.unsplash.com/random/?math,placevalue',
  '4',
  'MATH'
);
SELECT create_topic(
  'Problem Solving',
  'Using mathematical concepts to solve word problems.',
  'https://source.unsplash.com/random/?math,problemsolving',
  '4',
  'MATH'
);
SELECT create_topic(
  'Patterns',
  'Understanding number patterns.',
  'https://source.unsplash.com/random/?math,patterns',
  '4',
  'MATH'
);
SELECT create_topic(
  'Data Representation',
  'Representing and interpreting data.',
  'https://source.unsplash.com/random/?math,data',
  '4',
  'MATH'
);
SELECT create_topic(
  'Algebraic Thinking',
  'Generating and analyzing patterns.',
  'https://source.unsplash.com/random/?math,algebra',
  '4',
  'MATH'
);
SELECT create_topic(
  'Area and Perimeter',
  'Understanding concepts of area and relate area to multiplication and addition.',
  'https://source.unsplash.com/random/?math,area,perimeter',
  '4',
  'MATH'
);
SELECT create_topic(
  'Logic and Reasoning',
  'Applying reasoning skills to solve mathematical problems.',
  'https://source.unsplash.com/random/?math,logic,reasoning',
  '4',
  'MATH'
);
---- Level 5 Mathematics (12)
SELECT create_topic(
  'Addition and Subtraction of Fractions',
  'Adding and subtracting fractions with unlike denominators (including mixed numbers).',
  'https://source.unsplash.com/random/?math,fractions',
  '5',
  'MATH'
);
SELECT create_topic(
  'Multiplication and Division of Fractions',
  'Multiplying and dividing fractions and mixed numbers.',
  'https://source.unsplash.com/random/?math,fractions,multiplication,division',
  '5',
  'MATH'
);
SELECT create_topic(
  'Place Value and Decimal Fractions',
  'Understanding the place value system, perform operations with multi-digit whole numbers and with decimals to hundredths.',
  'https://source.unsplash.com/random/?math,placevalue,decimals',
  '5',
  'MATH'
);
SELECT create_topic(
  'Volume',
  'Measuring volumes by counting unit cubes, using cubic cm, cubic in, cubic ft, and improvised units.',
  'https://source.unsplash.com/random/?math,volume',
  '5',
  'MATH'
);
SELECT create_topic(
  'Two-Dimensional Figures',
  'Graphing points on the coordinate plane to solve real-world and mathematical problems.',
  'https://source.unsplash.com/random/?math,graph,figures',
  '5',
  'MATH'
);
SELECT create_topic(
  'Whole Number and Decimal Operations',
  'Fluently multiply multi-digit whole numbers using the standard algorithm.',
  'https://source.unsplash.com/random/?math,operations',
  '5',
  'MATH'
);
SELECT create_topic(
  'Patterns and Graphing',
  'Analyzing patterns and relationships.',
  'https://source.unsplash.com/random/?math,patterns,graphing',
  '5',
  'MATH'
);
SELECT create_topic(
  'Measurement',
  'Converting like measurement units within a given measurement system.',
  'https://source.unsplash.com/random/?math,measurement',
  '5',
  'MATH'
);
SELECT create_topic(
  'Algebraic Expressions',
  'Writing and interpreting numerical expressions.',
  'https://source.unsplash.com/random/?math,algebra',
  '5',
  'MATH'
);
SELECT create_topic(
  'Problem Solving',
  'Solving real world problems involving multiplication of fractions and mixed numbers.',
  'https://source.unsplash.com/random/?math,problemsolving',
  '5',
  'MATH'
);
SELECT create_topic(
  'Geometry',
  'Classifying two-dimensional figures into categories based on their properties.',
  'https://source.unsplash.com/random/?math,geometry',
  '5',
  'MATH'
);
SELECT create_topic(
  'Data Analysis',
  'Making a line plot to display a data set of measurements in fractions of a unit.',
  'https://source.unsplash.com/random/?math,data,analysis',
  '5',
  'MATH'
);
--- SCI (84) - "science"
---- Pre-K Science (12)
SELECT create_topic(
  'Living vs Nonliving',
  'Understanding the difference between living and nonliving things.',
  'https://source.unsplash.com/random/?science,living,nonliving',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Animals',
  'Identifying different types of animals and their characteristics.',
  'https://source.unsplash.com/random/?science,animals',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Plants',
  'Identifying different types of plants and their parts.',
  'https://source.unsplash.com/random/?science,plants',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Weather and Seasons',
  'Understanding the different types of weather and seasons.',
  'https://source.unsplash.com/random/?science,weather,seasons',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Earth and Sky',
  'Exploring the concepts of day and night, sun, moon, and stars.',
  'https://source.unsplash.com/random/?science,earth,sky',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Water',
  'Understanding the properties of water and its uses.',
  'https://source.unsplash.com/random/?science,water',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Materials and Their Properties',
  'Identifying different materials and their properties like hard, soft, heavy, light, etc.',
  'https://source.unsplash.com/random/?science,materials',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Five Senses',
  'Understanding our five senses and their functions.',
  'https://source.unsplash.com/random/?science,senses',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Magnets',
  'Exploring the properties of magnets and magnetic materials.',
  'https://source.unsplash.com/random/?science,magnets',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Shadows',
  'Understanding what shadows are and how they are formed.',
  'https://source.unsplash.com/random/?science,shadows',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Heat, Light and Sound',
  'Exploring the sources and properties of heat, light and sound.',
  'https://source.unsplash.com/random/?science,heat,light,sound',
  'Pre-K',
  'SCI'
);
SELECT create_topic(
  'Health and Safety',
  'Learning about personal hygiene, healthy habits, and safety rules.',
  'https://source.unsplash.com/random/?science,health,safety',
  'Pre-K',
  'SCI'
);
---- Kindergarten Science (12)
SELECT create_topic(
  'Human Body Parts',
  'Identifying and understanding the function of basic human body parts.',
  'https://source.unsplash.com/random/?science,human,body',
  'K',
  'SCI'
);
SELECT create_topic(
  'Animal Habitats',
  'Learning about different types of animal habitats like forests, oceans, deserts, etc.',
  'https://source.unsplash.com/random/?science,animal,habitats',
  'K',
  'SCI'
);
SELECT create_topic(
  'Plant Life Cycle',
  'Understanding the life cycle of a plant from seed to adult plant.',
  'https://source.unsplash.com/random/?science,plant,lifecycle',
  'K',
  'SCI'
);
SELECT create_topic(
  'Weather Patterns',
  'Observing and describing weather patterns across different seasons.',
  'https://source.unsplash.com/random/?science,weather,patterns',
  'K',
  'SCI'
);
SELECT create_topic(
  'Earth’s Resources',
  'Exploring Earth’s natural resources like water, air, rocks, soil, etc.',
  'https://source.unsplash.com/random/?science,earth,resources',
  'K',
  'SCI'
);
SELECT create_topic(
  'States of Matter',
  'Understanding the basic states of matter: solid, liquid and gas.',
  'https://source.unsplash.com/random/?science,states,of,matter',
  'K',
  'SCI'
);
SELECT create_topic(
  'Force and Motion',
  'Exploring the concepts of push, pull, motion, and gravity.',
  'https://source.unsplash.com/random/?science,force,motion',
  'K',
  'SCI'
);
SELECT create_topic(
  'Sound and Light',
  'Understanding how sound is produced and how light is necessary to see things.',
  'https://source.unsplash.com/random/?science,sound,light',
  'K',
  'SCI'
);
SELECT create_topic(
  'Nutrition and Healthy Habits',
  'Learning about healthy eating habits and the importance of physical activity.',
  'https://source.unsplash.com/random/?science,nutrition',
  'K',
  'SCI'
);
SELECT create_topic(
  'Recycling and Conservation',
  'Introduction to the concepts of recycling and conservation of resources.',
  'https://source.unsplash.com/random/?science,recycling,conservation',
  'K',
  'SCI'
);
SELECT create_topic(
  'Simple Machines',
  'Introduction to simple machines like lever, pulley, wheel and axle, etc.',
  'https://source.unsplash.com/random/?science,simple,machines',
  'K',
  'SCI'
);
SELECT create_topic(
  'Astronomy',
  'Introduction to basic astronomy: stars, planets, moon phases.',
  'https://source.unsplash.com/random/?science,astronomy',
  'K',
  'SCI'
);
---- Level 1 Science (12)
SELECT create_topic(
  'Animal Classification',
  'Understanding the basic classification of animals: mammals, birds, fish, reptiles, and amphibians.',
  'https://source.unsplash.com/random/?science,animal,classification',
  '1',
  'SCI'
);
SELECT create_topic(
  'Plant Parts and Functions',
  'Identifying parts of a plant and understanding their functions.',
  'https://source.unsplash.com/random/?science,plant,parts',
  '1',
  'SCI'
);
SELECT create_topic(
  'Seasonal Changes',
  'Observing and describing changes in weather and daylight across seasons.',
  'https://source.unsplash.com/random/?science,seasons',
  '1',
  'SCI'
);
SELECT create_topic(
  'Properties of Matter',
  'Understanding properties of matter: color, shape, texture, size, weight, etc.',
  'https://source.unsplash.com/random/?science,properties,of,matter',
  '1',
  'SCI'
);
SELECT create_topic(
  'Earth’s Land and Water',
  'Exploring different types of landforms and bodies of water on Earth.',
  'https://source.unsplash.com/random/?science,earth,landforms',
  '1',
  'SCI'
);
SELECT create_topic(
  'Living and Nonliving Things',
  'Distinguishing between living and nonliving things.',
  'https://source.unsplash.com/random/?science,living,nonliving',
  '1',
  'SCI'
);
SELECT create_topic(
  'Heat Energy',
  'Understanding the concept of heat energy and its sources.',
  'https://source.unsplash.com/random/?science,heat,energy',
  '1',
  'SCI'
);
SELECT create_topic(
  'Light and Shadows',
  'Exploring how light travels and how shadows are formed.',
  'https://source.unsplash.com/random/?science,light,shadows',
  '1',
  'SCI'
);
SELECT create_topic(
  'Food and Nutrition',
  'Understanding the importance of a balanced diet and identifying different food groups.',
  'https://source.unsplash.com/random/?science,food,nutrition',
  '1',
  'SCI'
);
SELECT create_topic(
  'Environmental Awareness',
  'Understanding the importance of protecting the environment and ways to do so.',
  'https://source.unsplash.com/random/?science,environment,awareness',
  '1',
  'SCI'
);
SELECT create_topic(
  'The Solar System',
  'Introduction to the solar system: sun, earth, moon, and stars.',
  'https://source.unsplash.com/random/?science,solar,system',
  '1',
  'SCI'
);
SELECT create_topic(
  'Simple Physical Experiments',
  'Performing simple physical science experiments.',
  'https://source.unsplash.com/random/?science,experiments',
  '1',
  'SCI'
);
---- Level 2 Science (12)
SELECT create_topic(
  'States of Matter',
  'Understanding the basic states of matter: solid, liquid, and gas.',
  'https://source.unsplash.com/random/?science,states,of,matter',
  '2',
  'SCI'
);
SELECT create_topic(
  'Life Cycle of Plants',
  'Exploring the life cycle of a plant from seed to mature plant.',
  'https://source.unsplash.com/random/?science,life,cycle,plants',
  '2',
  'SCI'
);
SELECT create_topic(
  'Weather Patterns',
  'Studying different types of weather and identifying patterns.',
  'https://source.unsplash.com/random/?science,weather,patterns',
  '2',
  'SCI'
);
SELECT create_topic(
  'Simple Machines',
  'Introduction to simple machines and their functions.',
  'https://source.unsplash.com/random/?science,simple,machines',
  '2',
  'SCI'
);
SELECT create_topic(
  'Habitats and Ecosystems',
  'Understanding different types of habitats and ecosystems and the organisms that live in them.',
  'https://source.unsplash.com/random/?science,habitats,ecosystems',
  '2',
  'SCI'
);
SELECT create_topic(
  'Life Cycle of Animals',
  'Exploring the life cycle of different types of animals.',
  'https://source.unsplash.com/random/?science,life,cycle,animals',
  '2',
  'SCI'
);
SELECT create_topic(
  'Forces and Motion',
  'Introduction to the concepts of force and motion.',
  'https://source.unsplash.com/random/?science,forces,motion',
  '2',
  'SCI'
);
SELECT create_topic(
  'Sound and Vibrations',
  'Exploring how sound is made and how it travels.',
  'https://source.unsplash.com/random/?science,sound,vibrations',
  '2',
  'SCI'
);
SELECT create_topic(
  'The Water Cycle',
  'Understanding the stages of the water cycle: evaporation, condensation, precipitation, and collection.',
  'https://source.unsplash.com/random/?science,water,cycle',
  '2',
  'SCI'
);
SELECT create_topic(
  'Rocks and Minerals',
  'Identifying different types of rocks and minerals and understanding their properties.',
  'https://source.unsplash.com/random/?science,rocks,minerals',
  '2',
  'SCI'
);
SELECT create_topic(
  'Fossils and Extinct Animals',
  'Learning about fossils and the concept of extinct animals.',
  'https://source.unsplash.com/random/?science,fossils,extinct,animals',
  '2',
  'SCI'
);
SELECT create_topic(
  'Conservation and Recycling',
  'Understanding the importance of conservation and recycling for the environment.',
  'https://source.unsplash.com/random/?science,conservation,recycling',
  '2',
  'SCI'
);
---- Level 3 Science (12)
SELECT create_topic(
  'Plant Anatomy and Physiology',
  'Understanding the structure and functions of different parts of a plant.',
  'https://source.unsplash.com/random/?science,plant,anatomy',
  '3',
  'SCI'
);
SELECT create_topic(
  'Animal Anatomy and Life Cycles',
  'Studying the anatomy of different types of animals and their life cycles.',
  'https://source.unsplash.com/random/?science,animal,anatomy',
  '3',
  'SCI'
);
SELECT create_topic(
  'Magnets and Magnetism',
  'Understanding the properties of magnets and the concept of magnetism.',
  'https://source.unsplash.com/random/?science,magnets',
  '3',
  'SCI'
);
SELECT create_topic(
  'Human Body Systems',
  'Introduction to human body systems such as the circulatory, respiratory, and digestive systems.',
  'https://source.unsplash.com/random/?science,human,body',
  '3',
  'SCI'
);
SELECT create_topic(
  'Solar System and Planets',
  'Exploring the solar system and understanding the characteristics of different planets.',
  'https://source.unsplash.com/random/?science,solar,system',
  '3',
  'SCI'
);
SELECT create_topic(
  'Heat and Temperature',
  'Understanding the concepts of heat and temperature and how they are related.',
  'https://source.unsplash.com/random/?science,heat,temperature',
  '3',
  'SCI'
);
SELECT create_topic(
  'Rocks, Soil, and Minerals',
  'Identifying different types of rocks, soil, and minerals and understanding their properties.',
  'https://source.unsplash.com/random/?science,rocks,soil',
  '3',
  'SCI'
);
SELECT create_topic(
  'Ecology and Environment',
  'Understanding the basics of ecology and the importance of a balanced environment.',
  'https://source.unsplash.com/random/?science,ecology',
  '3',
  'SCI'
);
SELECT create_topic(
  'Light and Shadows',
  'Understanding the properties of light and how shadows are formed.',
  'https://source.unsplash.com/random/?science,light,shadows',
  '3',
  'SCI'
);
SELECT create_topic(
  'Water and Water Cycle',
  'Understanding the properties of water and the stages of the water cycle.',
  'https://source.unsplash.com/random/?science,water,cycle',
  '3',
  'SCI'
);
SELECT create_topic(
  'Weather and Climate',
  'Understanding the difference between weather and climate and studying different types of weather patterns.',
  'https://source.unsplash.com/random/?science,weather,climate',
  '3',
  'SCI'
);
SELECT create_topic(
  'Energy: Forms and Changes',
  'Introduction to different forms of energy and how energy changes from one form to another.',
  'https://source.unsplash.com/random/?science,energy',
  '3',
  'SCI'
);
---- Level 4 Science (12)
SELECT create_topic(
  'The Periodic Table',
  'Introduction to the periodic table and understanding the basics of elements.',
  'https://source.unsplash.com/random/?science,periodic,table',
  '4',
  'SCI'
);
SELECT create_topic(
  'Ecosystems and Habitats',
  'Understanding the structure and function of different ecosystems and habitats.',
  'https://source.unsplash.com/random/?science,ecosystems',
  '4',
  'SCI'
);
SELECT create_topic(
  'Electricity and Circuits',
  'Understanding the basics of electricity and simple circuits.',
  'https://source.unsplash.com/random/?science,electricity',
  '4',
  'SCI'
);
SELECT create_topic(
  'States of Matter',
  'Exploring the different states of matter and their properties.',
  'https://source.unsplash.com/random/?science,states,of,matter',
  '4',
  'SCI'
);
SELECT create_topic(
  'Sound and Vibrations',
  'Understanding the properties of sound and how it is produced by vibrations.',
  'https://source.unsplash.com/random/?science,sound',
  '4',
  'SCI'
);
SELECT create_topic(
  'Force and Motion',
  'Understanding the relationship between force and motion, and the effects of friction and gravity.',
  'https://source.unsplash.com/random/?science,force',
  '4',
  'SCI'
);
SELECT create_topic(
  'Energy Sources and Transformation',
  'Learning about different sources of energy and how energy transforms from one form to another.',
  'https://source.unsplash.com/random/?science,energy',
  '4',
  'SCI'
);
SELECT create_topic(
  'Geology and Earth’s Structure',
  'Introduction to geology and understanding the structure of Earth.',
  'https://source.unsplash.com/random/?science,geology',
  '4',
  'SCI'
);
SELECT create_topic(
  'Weather, Climate, and Meteorology',
  'Understanding the factors that influence weather and climate, and introduction to meteorology.',
  'https://source.unsplash.com/random/?science,weather',
  '4',
  'SCI'
);
SELECT create_topic(
  'Light and Optics',
  'Exploring the properties of light and understanding the basics of optics.',
  'https://source.unsplash.com/random/?science,optics',
  '4',
  'SCI'
);
SELECT create_topic(
  'Human Anatomy: Muscular and Skeletal Systems',
  'Studying the human muscular and skeletal systems and their functions.',
  'https://source.unsplash.com/random/?science,human,body',
  '4',
  'SCI'
);
SELECT create_topic(
  'Plants and Photosynthesis',
  'Understanding the process of photosynthesis and the life cycle of plants.',
  'https://source.unsplash.com/random/?science,photosynthesis',
  '4',
  'SCI'
);
---- Level 5 Science (12)
SELECT create_topic(
  'Cells and Systems',
  'Understanding the structure and function of cells and human body systems.',
  'https://source.unsplash.com/random/?science,cells',
  '5',
  'SCI'
);
SELECT create_topic(
  'Chemical Reactions',
  'Introduction to chemical reactions and understanding the conservation of mass.',
  'https://source.unsplash.com/random/?science,chemical,reactions',
  '5',
  'SCI'
);
SELECT create_topic(
  'Water Cycle and Weather Systems',
  'Understanding the water cycle and how it influences weather systems.',
  'https://source.unsplash.com/random/?science,water,cycle',
  '5',
  'SCI'
);
SELECT create_topic(
  'Space and Solar System',
  'Exploring the solar system and understanding celestial movements.',
  'https://source.unsplash.com/random/?science,space',
  '5',
  'SCI'
);
SELECT create_topic(
  'Forces and Machines',
  'Understanding different types of forces and the function of simple machines.',
  'https://source.unsplash.com/random/?science,forces',
  '5',
  'SCI'
);
SELECT create_topic(
  'Ecosystems and Biodiversity',
  'Exploring different ecosystems and the importance of biodiversity.',
  'https://source.unsplash.com/random/?science,ecosystems',
  '5',
  'SCI'
);
SELECT create_topic(
  'Energy Forms and Changes',
  'Understanding different forms of energy and energy transformations.',
  'https://source.unsplash.com/random/?science,energy',
  '5',
  'SCI'
);
SELECT create_topic(
  'Rocks, Minerals and Soil',
  'Learning about different types of rocks, minerals and the formation of soil.',
  'https://source.unsplash.com/random/?science,rocks',
  '5',
  'SCI'
);
SELECT create_topic(
  'Human Anatomy: Digestive and Excretory Systems',
  'Understanding the digestive and excretory systems in the human body.',
  'https://source.unsplash.com/random/?science,human,body',
  '5',
  'SCI'
);
SELECT create_topic(
  'Light and Shadows',
  'Understanding the properties of light and the formation of shadows.',
  'https://source.unsplash.com/random/?science,light',
  '5',
  'SCI'
);
SELECT create_topic(
  'Heat and Temperature',
  'Understanding the concept of heat transfer and the measurement of temperature.',
  'https://source.unsplash.com/random/?science,heat',
  '5',
  'SCI'
);
SELECT create_topic(
  'Plant Reproduction and Growth',
  'Learning about the process of plant reproduction and growth.',
  'https://source.unsplash.com/random/?science,plants',
  '5',
  'SCI'
);
--- ENG (84) - "english"
---- Pre-K English (12)
SELECT create_topic(
  'Alphabet Recognition',
  'Introduction to the alphabet and recognizing all the letters.',
  'https://source.unsplash.com/random/?english,alphabet',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Phonemic Awareness',
  'Developing the ability to hear and identify individual sounds in spoken words.',
  'https://source.unsplash.com/random/?english,phonics',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Beginning Reading',
  'Starting to identify words and read simple sentences.',
  'https://source.unsplash.com/random/?english,reading',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Print Awareness',
  'Understanding the basics of words, sentences and how books work.',
  'https://source.unsplash.com/random/?english,print',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Listening and Understanding',
  'Enhancing listening skills and comprehension.',
  'https://source.unsplash.com/random/?english,listening',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Speaking and Expressing',
  'Learning to express thoughts, feelings, and ideas clearly.',
  'https://source.unsplash.com/random/?english,speaking',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Vocabulary',
  'Building a foundation of basic vocabulary.',
  'https://source.unsplash.com/random/?english,vocabulary',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Writing Skills',
  'Introduction to writing and creating simple sentences.',
  'https://source.unsplash.com/random/?english,writing',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Storytelling',
  'Learning to tell a story and understanding narrative structure.',
  'https://source.unsplash.com/random/?english,storytelling',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Rhyming Words',
  'Identifying rhyming words and understanding their usage in poetry and music.',
  'https://source.unsplash.com/random/?english,rhyming',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Punctuation',
  'Introduction to basic punctuation marks and their usage.',
  'https://source.unsplash.com/random/?english,punctuation',
  'Pre-K',
  'ENG'
);
SELECT create_topic(
  'Sight Words',
  'Introduction to common words that children are encouraged to recognize without sounding out the letters.',
  'https://source.unsplash.com/random/?english,sight,words',
  'Pre-K',
  'ENG'
);
---- Kindergarten English (12)
SELECT create_topic(
  'Alphabet Recognition',
  'Recognizing and identifying all the letters in the alphabet.',
  'https://source.unsplash.com/random/?english,alphabet',
  'K',
  'ENG'
);
SELECT create_topic(
  'Phonics Basics',
  'Understanding the sounds that letters and letter combinations make.',
  'https://source.unsplash.com/random/?english,phonics',
  'K',
  'ENG'
);
SELECT create_topic(
  'Beginning Reading',
  'Starting to read simple words and sentences.',
  'https://source.unsplash.com/random/?english,reading',
  'K',
  'ENG'
);
SELECT create_topic(
  'Writing Letters',
  'Learning to write each letter of the alphabet.',
  'https://source.unsplash.com/random/?english,writing,letters',
  'K',
  'ENG'
);
SELECT create_topic(
  'Listening Comprehension',
  'Developing the ability to understand spoken language and stories.',
  'https://source.unsplash.com/random/?english,listening,comprehension',
  'K',
  'ENG'
);
SELECT create_topic(
  'Introduction to Spelling',
  'Starting to learn how to spell simple words.',
  'https://source.unsplash.com/random/?english,spelling',
  'K',
  'ENG'
);
SELECT create_topic(
  'Basic Vocabulary',
  'Building a vocabulary of common words.',
  'https://source.unsplash.com/random/?english,vocabulary',
  'K',
  'ENG'
);
SELECT create_topic(
  'Sentence Structure',
  'Understanding how to form simple sentences.',
  'https://source.unsplash.com/random/?english,sentence,structure',
  'K',
  'ENG'
);
SELECT create_topic(
  'Sight Words Introduction',
  'Learning to recognize common words by sight.',
  'https://source.unsplash.com/random/?english,sight,words',
  'K',
  'ENG'
);
SELECT create_topic(
  'Story Elements',
  'Identifying basic elements of a story like characters and setting.',
  'https://source.unsplash.com/random/?english,story,elements',
  'K',
  'ENG'
);
SELECT create_topic(
  'Reading Aloud',
  'Developing the ability to read simple texts aloud with fluency.',
  'https://source.unsplash.com/random/?english,reading,aloud',
  'K',
  'ENG'
);
SELECT create_topic(
  'Print Concepts',
  'Understanding basic print concepts like reading from left to right.',
  'https://source.unsplash.com/random/?english,print,concepts',
  'K',
  'ENG'
);
---- Level 1 English (12)
SELECT create_topic(
  'Advanced Phonics',
  'Continuing to develop phonics skills for more complex words.',
  'https://source.unsplash.com/random/?english,phonics',
  '1',
  'ENG'
);
SELECT create_topic(
  'Reading Fluency',
  'Developing the ability to read with speed, accuracy, and proper expression.',
  'https://source.unsplash.com/random/?english,reading,fluency',
  '1',
  'ENG'
);
SELECT create_topic(
  'Spelling',
  'Learning basic spelling rules and patterns.',
  'https://source.unsplash.com/random/?english,spelling',
  '1',
  'ENG'
);
SELECT create_topic(
  'Grammar Basics',
  'Introduction to parts of speech and basic sentence structure.',
  'https://source.unsplash.com/random/?english,grammar',
  '1',
  'ENG'
);
SELECT create_topic(
  'Writing Sentences',
  'Learning to write coherent and grammatically correct sentences.',
  'https://source.unsplash.com/random/?english,writing,sentences',
  '1',
  'ENG'
);
SELECT create_topic(
  'Reading Comprehension',
  'Developing skills to understand and interpret what is being read.',
  'https://source.unsplash.com/random/?english,reading,comprehension',
  '1',
  'ENG'
);
SELECT create_topic(
  'Expanded Vocabulary',
  'Building a larger vocabulary with more complex words.',
  'https://source.unsplash.com/random/?english,vocabulary',
  '1',
  'ENG'
);
SELECT create_topic(
  'Public Speaking',
  'Starting to develop skills for speaking in front of others.',
  'https://source.unsplash.com/random/?english,public,speaking',
  '1',
  'ENG'
);
SELECT create_topic(
  'Story Writing',
  'Beginning to write simple stories with a clear beginning, middle, and end.',
  'https://source.unsplash.com/random/?english,story,writing',
  '1',
  'ENG'
);
SELECT create_topic(
  'Informational Texts',
  'Reading and understanding informational texts and articles.',
  'https://source.unsplash.com/random/?english,informational,texts',
  '1',
  'ENG'
);
SELECT create_topic(
  'Punctuation and Capitalization',
  'Understanding the rules of punctuation and capitalization in writing.',
  'https://source.unsplash.com/random/?english,punctuation,capitalization',
  '1',
  'ENG'
);
SELECT create_topic(
  'Sight Words Expansion',
  'Increasing the number of sight words recognized for quick reading.',
  'https://source.unsplash.com/random/?english,sight,words',
  '1',
  'ENG'
);
---- Grade 2 English (12)
SELECT create_topic(
  'Vocabulary Expansion',
  'Increasing vocabulary and understanding of word meanings.',
  'https://source.unsplash.com/random/?english,vocabulary',
  '2',
  'ENG'
);
SELECT create_topic(
  'Reading Comprehension',
  'Understanding and interpreting stories and texts.',
  'https://source.unsplash.com/random/?english,reading,comprehension',
  '2',
  'ENG'
);
SELECT create_topic(
  'Spelling and Punctuation',
  'Learning correct spelling of words and use of punctuation marks.',
  'https://source.unsplash.com/random/?english,spelling,punctuation',
  '2',
  'ENG'
);
SELECT create_topic(
  'Writing Sentences',
  'Forming complete sentences and writing them correctly.',
  'https://source.unsplash.com/random/?english,writing,sentences',
  '2',
  'ENG'
);
SELECT create_topic(
  'Grammar Basics',
  'Introduction to parts of speech and their usage in sentences.',
  'https://source.unsplash.com/random/?english,grammar',
  '2',
  'ENG'
);
SELECT create_topic(
  'Story Writing',
  'Creating and writing simple stories.',
  'https://source.unsplash.com/random/?english,story,writing',
  '2',
  'ENG'
);
SELECT create_topic(
  'Reading Fluency',
  'Developing reading fluency and expression.',
  'https://source.unsplash.com/random/?english,reading,fluency',
  '2',
  'ENG'
);
SELECT create_topic(
  'Listening and Speaking Skills',
  'Enhancing listening comprehension and oral expression.',
  'https://source.unsplash.com/random/?english,listening,speaking',
  '2',
  'ENG'
);
SELECT create_topic(
  'Informational Text',
  'Reading and understanding informational texts.',
  'https://source.unsplash.com/random/?english,informational,text',
  '2',
  'ENG'
);
SELECT create_topic(
  'Fiction and Nonfiction',
  'Understanding the difference between fiction and nonfiction texts.',
  'https://source.unsplash.com/random/?english,fiction,nonfiction',
  '2',
  'ENG'
);
SELECT create_topic(
  'Poetry Introduction',
  'Introduction to reading and understanding simple poems.',
  'https://source.unsplash.com/random/?english,poetry',
  '2',
  'ENG'
);
SELECT create_topic(
  'Cursive Writing',
  'Introduction to cursive writing.',
  'https://source.unsplash.com/random/?english,cursive,writing',
  '2',
  'ENG'
);
---- Grade 3 English (12)
SELECT create_topic(
  'Advanced Grammar',
  'Building on grammar basics to include more complex rules and concepts.',
  'https://source.unsplash.com/random/?english,grammar',
  '3',
  'ENG'
);
SELECT create_topic(
  'Paragraph Writing',
  'Learning to write coherent and well-structured paragraphs.',
  'https://source.unsplash.com/random/?english,paragraph,writing',
  '3',
  'ENG'
);
SELECT create_topic(
  'Reading Comprehension',
  'Increasing reading comprehension with more complex texts.',
  'https://source.unsplash.com/random/?english,reading,comprehension',
  '3',
  'ENG'
);
SELECT create_topic(
  'Spelling Patterns and Rules',
  'Learning common spelling patterns and rules.',
  'https://source.unsplash.com/random/?english,spelling',
  '3',
  'ENG'
);
SELECT create_topic(
  'Vocabulary Development',
  'Developing a larger vocabulary and understanding of word usage.',
  'https://source.unsplash.com/random/?english,vocabulary',
  '3',
  'ENG'
);
SELECT create_topic(
  'Cursive Writing',
  'Further practice in cursive writing.',
  'https://source.unsplash.com/random/?english,cursive,writing',
  '3',
  'ENG'
);
SELECT create_topic(
  'Story Elements',
  'Understanding story elements such as characters, setting, and plot.',
  'https://source.unsplash.com/random/?english,story,elements',
  '3',
  'ENG'
);
SELECT create_topic(
  'Poetry',
  'Reading and understanding a variety of poems, and beginning to write simple poems.',
  'https://source.unsplash.com/random/?english,poetry',
  '3',
  'ENG'
);
SELECT create_topic(
  'Informational Texts',
  'Reading and understanding more complex informational texts.',
  'https://source.unsplash.com/random/?english,informational,text',
  '3',
  'ENG'
);
SELECT create_topic(
  'Public Speaking',
  'Building confidence in public speaking and presentation.',
  'https://source.unsplash.com/random/?english,public,speaking',
  '3',
  'ENG'
);
SELECT create_topic(
  'Fiction vs Nonfiction',
  'Understanding the differences between fiction and nonfiction, and the different elements of each.',
  'https://source.unsplash.com/random/?english,fiction,nonfiction',
  '3',
  'ENG'
);
SELECT create_topic(
  'Research Skills',
  'Introduction to basic research skills using a variety of resources.',
  'https://source.unsplash.com/random/?english,research,skills',
  '3',
  'ENG'
);
---- Grade 4 English (12)
SELECT create_topic(
  'Compound Sentences',
  'Learning to write compound sentences using coordinating conjunctions.',
  'https://source.unsplash.com/random/?english,compound,sentences',
  '4',
  'ENG'
);
SELECT create_topic(
  'Reading Comprehension',
  'Improving reading comprehension with a focus on inference and prediction.',
  'https://source.unsplash.com/random/?english,reading,comprehension',
  '4',
  'ENG'
);
SELECT create_topic(
  'Creative Writing',
  'Exploring creative writing techniques and beginning to write short stories.',
  'https://source.unsplash.com/random/?english,creative,writing',
  '4',
  'ENG'
);
SELECT create_topic(
  'Spelling and Vocabulary',
  'Continuing to expand vocabulary and improve spelling.',
  'https://source.unsplash.com/random/?english,spelling,vocabulary',
  '4',
  'ENG'
);
SELECT create_topic(
  'Advanced Grammar',
  'Understanding more complex grammar concepts.',
  'https://source.unsplash.com/random/?english,grammar',
  '4',
  'ENG'
);
SELECT create_topic(
  'Report Writing',
  'Learning to write detailed and structured reports.',
  'https://source.unsplash.com/random/?english,report,writing',
  '4',
  'ENG'
);
SELECT create_topic(
  'Book Reports',
  'Writing book reports to demonstrate comprehension and critical thinking.',
  'https://source.unsplash.com/random/?english,book,reports',
  '4',
  'ENG'
);
SELECT create_topic(
  'Speech Writing and Delivery',
  'Developing skills for writing and delivering effective speeches.',
  'https://source.unsplash.com/random/?english,speech,writing',
  '4',
  'ENG'
);
SELECT create_topic(
  'Poetry and Figurative Language',
  'Understanding and using figurative language in poetry.',
  'https://source.unsplash.com/random/?english,poetry,figurative,language',
  '4',
  'ENG'
);
SELECT create_topic(
  'Debating Skills',
  'Introduction to basic debating skills.',
  'https://source.unsplash.com/random/?english,debating,skills',
  '4',
  'ENG'
);
SELECT create_topic(
  'Research Skills',
  'Improving research skills for project-based learning.',
  'https://source.unsplash.com/random/?english,research,skills',
  '4',
  'ENG'
);
SELECT create_topic(
  'Persuasive Writing',
  'Learning techniques for persuasive writing.',
  'https://source.unsplash.com/random/?english,persuasive,writing',
  '4',
  'ENG'
);
---- Grade 5 English (12)
SELECT create_topic(
  'Advanced Reading Comprehension',
  'Developing advanced reading comprehension skills, with a focus on critical analysis of texts.',
  'https://source.unsplash.com/random/?english,reading,comprehension',
  '5',
  'ENG'
);
SELECT create_topic(
  'Complex Sentences',
  'Understanding and creating complex sentences using subordinating conjunctions.',
  'https://source.unsplash.com/random/?english,complex,sentences',
  '5',
  'ENG'
);
SELECT create_topic(
  'Essay Writing',
  'Introduction to essay writing, focusing on structure and clarity.',
  'https://source.unsplash.com/random/?english,essay,writing',
  '5',
  'ENG'
);
SELECT create_topic(
  'Vocabulary Expansion',
  'Continuing to expand vocabulary and improve spelling.',
  'https://source.unsplash.com/random/?english,vocabulary,expansion',
  '5',
  'ENG'
);
SELECT create_topic(
  'Advanced Grammar and Punctuation',
  'Understanding and applying advanced grammar and punctuation rules.',
  'https://source.unsplash.com/random/?english,grammar,punctuation',
  '5',
  'ENG'
);
SELECT create_topic(
  'Public Speaking',
  'Developing public speaking skills and confidence.',
  'https://source.unsplash.com/random/?english,public,speaking',
  '5',
  'ENG'
);
SELECT create_topic(
  'Analyzing Literature',
  'Introduction to analyzing literature, focusing on theme, plot, and character development.',
  'https://source.unsplash.com/random/?english,analyzing,literature',
  '5',
  'ENG'
);
SELECT create_topic(
  'Poetry Analysis',
  'Understanding and analyzing various forms of poetry.',
  'https://source.unsplash.com/random/?english,poetry,analysis',
  '5',
  'ENG'
);
SELECT create_topic(
  'Research and Report Writing',
  'Developing research skills and learning to write detailed reports.',
  'https://source.unsplash.com/random/?english,research,report,writing',
  '5',
  'ENG'
);
SELECT create_topic(
  'Debate and Persuasion',
  'Enhancing debating skills and understanding the art of persuasion in writing and speaking.',
  'https://source.unsplash.com/random/?english,debate,persuasion',
  '5',
  'ENG'
);
SELECT create_topic(
  'Creative Writing - Storytelling',
  'Exploring advanced creative writing techniques, focusing on storytelling.',
  'https://source.unsplash.com/random/?english,creative,writing,storytelling',
  '5',
  'ENG'
);
SELECT create_topic(
  'Understanding Genres',
  'Introduction to various genres in literature.',
  'https://source.unsplash.com/random/?english,genres',
  '5',
  'ENG'
);
--- SS (84) - "social studies"
---- Pre-K Social Studies (12)
SELECT create_topic(
  'Self and Others',
  'Understanding the concept of self and others and recognizing differences and similarities.',
  'https://source.unsplash.com/random/?social,studies,self,others',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Family and Friends',
  'Understanding roles and relationships within the family and friends.',
  'https://source.unsplash.com/random/?social,studies,family,friends',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Community Helpers',
  'Recognizing community helpers and their roles.',
  'https://source.unsplash.com/random/?social,studies,community,helpers',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Symbols and Holidays',
  'Introduction to national symbols and holidays.',
  'https://source.unsplash.com/random/?social,studies,symbols,holidays',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Seasons and Weather',
  'Understanding the change of seasons and weather.',
  'https://source.unsplash.com/random/?social,studies,seasons,weather',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Basic Geography',
  'Introduction to basic geography concepts like land, water, and simple map skills.',
  'https://source.unsplash.com/random/?social,studies,geography',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Caring for the Environment',
  'Understanding the importance of caring for the environment.',
  'https://source.unsplash.com/random/?social,studies,environment',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Cultural Awareness',
  'Introduction to cultural awareness and diversity.',
  'https://source.unsplash.com/random/?social,studies,cultural,awareness',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Basic Economics',
  'Understanding the concept of needs and wants.',
  'https://source.unsplash.com/random/?social,studies,economics',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Time Concepts',
  'Understanding the basic concepts of time such as day and night, today, yesterday, and tomorrow.',
  'https://source.unsplash.com/random/?social,studies,time',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Respect and Responsibility',
  'Learning about respect for others and responsibility.',
  'https://source.unsplash.com/random/?social,studies,respect,responsibility',
  'Pre-K',
  'SS'
);
SELECT create_topic(
  'Storytelling and History',
  'Introduction to storytelling as a way to learn about history.',
  'https://source.unsplash.com/random/?social,studies,storytelling,history',
  'Pre-K',
  'SS'
);
---- Kindergarten Social Studies (12)
SELECT create_topic(
  'Individuals and Society',
  'Understanding the roles of individuals within society and how they contribute to communities.',
  'https://source.unsplash.com/random/?social,studies,individuals,society',
  'K',
  'SS'
);
SELECT create_topic(
  'Civics and Government',
  'Introduction to basic concepts of civics and government including rules and laws.',
  'https://source.unsplash.com/random/?social,studies,civics,government',
  'K',
  'SS'
);
SELECT create_topic(
  'Maps and Globes',
  'Understanding basic map and globe skills, including directions and symbols.',
  'https://source.unsplash.com/random/?social,studies,maps,globes',
  'K',
  'SS'
);
SELECT create_topic(
  'Cultural Diversity',
  'Exploring cultural diversity and understanding that different people may do things differently.',
  'https://source.unsplash.com/random/?social,studies,cultural,diversity',
  'K',
  'SS'
);
SELECT create_topic(
  'National Holidays and Symbols',
  'Learning about national holidays and symbols, and understanding their significance.',
  'https://source.unsplash.com/random/?social,studies,national,holidays,symbols',
  'K',
  'SS'
);
SELECT create_topic(
  'Local Community and Helpers',
  'Understanding the local community and recognizing the roles of various community helpers.',
  'https://source.unsplash.com/random/?social,studies,community,helpers',
  'K',
  'SS'
);
SELECT create_topic(
  'Understanding Time',
  'Learning about past, present, and future in the context of their lives.',
  'https://source.unsplash.com/random/?social,studies,time',
  'K',
  'SS'
);
SELECT create_topic(
  'Introduction to Economics',
  'Understanding the concept of goods, services, and making choices.',
  'https://source.unsplash.com/random/?social,studies,economics',
  'K',
  'SS'
);
SELECT create_topic(
  'Geographical Features',
  'Identifying basic geographical features like mountains, rivers, and oceans.',
  'https://source.unsplash.com/random/?social,studies,geography',
  'K',
  'SS'
);
SELECT create_topic(
  'Citizenship and Responsibility',
  'Learning about being a good citizen and taking responsibility.',
  'https://source.unsplash.com/random/?social,studies,citizenship',
  'K',
  'SS'
);
SELECT create_topic(
  'Family Traditions and History',
  'Understanding family traditions and history, and how they contribute to one’s identity.',
  'https://source.unsplash.com/random/?social,studies,family,traditions',
  'K',
  'SS'
);
SELECT create_topic(
  'Environmental Awareness',
  'Learning about the environment and the importance of taking care of it.',
  'https://source.unsplash.com/random/?social,studies,environment',
  'K',
  'SS'
);
---- Level 1 Social Studies (12)
SELECT create_topic(
  'Community Roles and Responsibilities',
  'Understanding the different roles and responsibilities within a community.',
  'https://source.unsplash.com/random/?social,studies,community,roles',
  '1',
  'SS'
);
SELECT create_topic(
  'Understanding Government',
  'Introduction to the role and structure of government, including leaders and public offices.',
  'https://source.unsplash.com/random/?social,studies,government',
  '1',
  'SS'
);
SELECT create_topic(
  'Basic Map Skills',
  'Development of basic map skills including reading a map and understanding symbols.',
  'https://source.unsplash.com/random/?social,studies,map,skills',
  '1',
  'SS'
);
SELECT create_topic(
  'Cultural Appreciation',
  'Further exploration of cultural diversity and the value of appreciating different cultures.',
  'https://source.unsplash.com/random/?social,studies,culture,appreciation',
  '1',
  'SS'
);
SELECT create_topic(
  'U.S. Symbols and Holidays',
  'Learning about U.S. symbols and holidays, and understanding their significance.',
  'https://source.unsplash.com/random/?social,studies,us,symbols,holidays',
  '1',
  'SS'
);
SELECT create_topic(
  'Local and National Community',
  'Comparison of local and national community and understanding the difference between the two.',
  'https://source.unsplash.com/random/?social,studies,local,national,community',
  '1',
  'SS'
);
SELECT create_topic(
  'Past, Present, and Future',
  'Understanding the concept of past, present, and future in the context of history and personal experiences.',
  'https://source.unsplash.com/random/?social,studies,time',
  '1',
  'SS'
);
SELECT create_topic(
  'Introduction to Trade',
  'Understanding the concept of trade, goods and services, needs and wants.',
  'https://source.unsplash.com/random/?social,studies,trade',
  '1',
  'SS'
);
SELECT create_topic(
  'Geographical Features and Regions',
  'Identifying geographical features and understanding the concept of regions.',
  'https://source.unsplash.com/random/?social,studies,geography,regions',
  '1',
  'SS'
);
SELECT create_topic(
  'Citizenship and Rights',
  'Learning about citizenship, rights, and the importance of making good choices.',
  'https://source.unsplash.com/random/?social,studies,citizenship,rights',
  '1',
  'SS'
);
SELECT create_topic(
  'Family and Cultural Traditions',
  'Understanding family and cultural traditions and how they shape communities and societies.',
  'https://source.unsplash.com/random/?social,studies,family,cultural,traditions',
  '1',
  'SS'
);
SELECT create_topic(
  'Environmental Stewardship',
  'Learning about environmental stewardship and the importance of taking care of the environment.',
  'https://source.unsplash.com/random/?social,studies,environment,stewardship',
  '1',
  'SS'
);
---- Level 2 Social Studies (12)
SELECT create_topic(
  'Exploring the Local Community',
  'Deep dive into understanding the structure and functioning of the local community.',
  'https://source.unsplash.com/random/?social,studies,community',
  '2',
  'SS'
);
SELECT create_topic(
  'US Constitution Basics',
  'Introduction to the United States Constitution and its importance.',
  'https://source.unsplash.com/random/?social,studies,constitution',
  '2',
  'SS'
);
SELECT create_topic(
  'Understanding Geography',
  'Further development of map skills and understanding geographical concepts.',
  'https://source.unsplash.com/random/?social,studies,geography',
  '2',
  'SS'
);
SELECT create_topic(
  'Respecting Diversity',
  'Learning to respect and appreciate diversity in cultures and communities.',
  'https://source.unsplash.com/random/?social,studies,diversity',
  '2',
  'SS'
);
SELECT create_topic(
  'US History and Heroes',
  'Introduction to US history, focusing on significant events and individuals.',
  'https://source.unsplash.com/random/?social,studies,us,history',
  '2',
  'SS'
);
SELECT create_topic(
  'Global Community',
  'Understanding the concept of global community and the importance of global citizenship.',
  'https://source.unsplash.com/random/?social,studies,global,community',
  '2',
  'SS'
);
SELECT create_topic(
  'Time and Chronology',
  'Understanding the concepts of time and chronology in historical contexts.',
  'https://source.unsplash.com/random/?social,studies,time,chronology',
  '2',
  'SS'
);
SELECT create_topic(
  'Economic Basics',
  'Learning basic economic concepts like supply, demand, and the importance of resources.',
  'https://source.unsplash.com/random/?social,studies,economics',
  '2',
  'SS'
);
SELECT create_topic(
  'State and National Identity',
  'Understanding state and national identity, symbols, and important landmarks.',
  'https://source.unsplash.com/random/?social,studies,state,national,identity',
  '2',
  'SS'
);
SELECT create_topic(
  'Rights and Responsibilities',
  'Further learning about citizenship, rights, responsibilities, and the democratic process.',
  'https://source.unsplash.com/random/?social,studies,citizenship',
  '2',
  'SS'
);
SELECT create_topic(
  'Cultural Heritage',
  'Exploring different cultural heritages and understanding their contributions to society.',
  'https://source.unsplash.com/random/?social,studies,culture,heritage',
  '2',
  'SS'
);
SELECT create_topic(
  'Environmental Conservation',
  'Learning about environmental conservation and the role of individuals and communities.',
  'https://source.unsplash.com/random/?social,studies,environment,conservation',
  '2',
  'SS'
);
---- Level 3 Social Studies (12)
SELECT create_topic(
  'Understanding Democracy',
  'Introduction to the concept of democracy, its principles and values.',
  'https://source.unsplash.com/random/?social,studies,democracy',
  '3',
  'SS'
);
SELECT create_topic(
  'Historical Events',
  'Study of significant events in history and their impact on present times.',
  'https://source.unsplash.com/random/?social,studies,historical',
  '3',
  'SS'
);
SELECT create_topic(
  'Global Cultures',
  'In-depth study of various global cultures, traditions, and practices.',
  'https://source.unsplash.com/random/?social,studies,global,cultures',
  '3',
  'SS'
);
SELECT create_topic(
  'Economic Systems',
  'Understanding different economic systems and their impact on society.',
  'https://source.unsplash.com/random/?social,studies,economics',
  '3',
  'SS'
);
SELECT create_topic(
  'Geographical Features and Climate',
  'Exploring the relationship between geographical features and climate conditions.',
  'https://source.unsplash.com/random/?social,studies,geography,climate',
  '3',
  'SS'
);
SELECT create_topic(
  'Importance of Laws',
  'Understanding the importance of laws, rights, and responsibilities.',
  'https://source.unsplash.com/random/?social,studies,laws',
  '3',
  'SS'
);
SELECT create_topic(
  'Local and National Landmarks',
  'In-depth study of significant local and national landmarks.',
  'https://source.unsplash.com/random/?social,studies,landmarks',
  '3',
  'SS'
);
SELECT create_topic(
  'Understanding Government',
  'Learning about the structure and functions of the government.',
  'https://source.unsplash.com/random/?social,studies,government',
  '3',
  'SS'
);
SELECT create_topic(
  'Cultural Contributions',
  'Understanding how different cultures contribute to society.',
  'https://source.unsplash.com/random/?social,studies,culture,contributions',
  '3',
  'SS'
);
SELECT create_topic(
  'Environmental Impact',
  'Exploring the impact of human activities on the environment.',
  'https://source.unsplash.com/random/?social,studies,environment',
  '3',
  'SS'
);
SELECT create_topic(
  'Understanding Communities',
  'Understanding the functioning of local, national, and global communities.',
  'https://source.unsplash.com/random/?social,studies,communities',
  '3',
  'SS'
);
SELECT create_topic(
  'Historical Figures',
  'Study of influential historical figures and their contributions.',
  'https://source.unsplash.com/random/?social,studies,historical,figures',
  '3',
  'SS'
);
---- Level 4 Social Studies (12)
SELECT create_topic(
  'State Government',
  'Study of the structure and function of state government.',
  'https://source.unsplash.com/random/?social,studies,state,government',
  '4',
  'SS'
);
SELECT create_topic(
  'Colonial History',
  'Exploration of the colonial history of the United States.',
  'https://source.unsplash.com/random/?social,studies,colonial,history',
  '4',
  'SS'
);
SELECT create_topic(
  'Cultural Diversity',
  'Understanding and appreciating cultural diversity in the nation and the world.',
  'https://source.unsplash.com/random/?social,studies,cultural,diversity',
  '4',
  'SS'
);
SELECT create_topic(
  'National Symbols',
  'Study of national symbols and their significance.',
  'https://source.unsplash.com/random/?social,studies,national,symbols',
  '4',
  'SS'
);
SELECT create_topic(
  'Geography and Map Skills',
  'Enhancing skills in geography and map interpretation.',
  'https://source.unsplash.com/random/?social,studies,geography,map,skills',
  '4',
  'SS'
);
SELECT create_topic(
  'Immigration and Migration',
  'Exploration of the history and impact of immigration and migration.',
  'https://source.unsplash.com/random/?social,studies,immigration,migration',
  '4',
  'SS'
);
SELECT create_topic(
  'Federal Government',
  'Understanding the structure and function of the federal government.',
  'https://source.unsplash.com/random/?social,studies,federal,government',
  '4',
  'SS'
);
SELECT create_topic(
  'Civil Rights',
  'Study of the civil rights movement and its implications.',
  'https://source.unsplash.com/random/?social,studies,civil,rights',
  '4',
  'SS'
);
SELECT create_topic(
  'Global Awareness',
  'Fostering global awareness and understanding global issues.',
  'https://source.unsplash.com/random/?social,studies,global,awareness',
  '4',
  'SS'
);
SELECT create_topic(
  'Economic Principles',
  'Introduction to basic economic principles and financial literacy.',
  'https://source.unsplash.com/random/?social,studies,economics',
  '4',
  'SS'
);
SELECT create_topic(
  'Indigenous Peoples of America',
  'Study of the history and culture of indigenous peoples of America.',
  'https://source.unsplash.com/random/?social,studies,indigenous,peoples',
  '4',
  'SS'
);
SELECT create_topic(
  'World History',
  'Overview of important events in world history.',
  'https://source.unsplash.com/random/?social,studies,world,history',
  '4',
  'SS'
);
---- Level 5 Social Studies (12)
SELECT create_topic(
  'U.S. Constitution and Bill of Rights',
  'Detailed study of the U.S. Constitution and Bill of Rights.',
  'https://source.unsplash.com/random/?social,studies,constitution',
  '5',
  'SS'
);
SELECT create_topic(
  'World Geography',
  'In-depth study of world geography and its impact on culture and history.',
  'https://source.unsplash.com/random/?social,studies,world,geography',
  '5',
  'SS'
);
SELECT create_topic(
  'Economic Systems',
  'Exploration of different economic systems in the world.',
  'https://source.unsplash.com/random/?social,studies,economic,systems',
  '5',
  'SS'
);
SELECT create_topic(
  'American Revolution',
  'Detailed study of the American Revolution and its impact.',
  'https://source.unsplash.com/random/?social,studies,american,revolution',
  '5',
  'SS'
);
SELECT create_topic(
  'Civil War and Reconstruction',
  'Understanding the Civil War and its aftermath, including Reconstruction.',
  'https://source.unsplash.com/random/?social,studies,civil,war',
  '5',
  'SS'
);
SELECT create_topic(
  'World Religions',
  'Study of major world religions and their impact on history and culture.',
  'https://source.unsplash.com/random/?social,studies,religions',
  '5',
  'SS'
);
SELECT create_topic(
  'Citizenship and Civic Duties',
  'Understanding the rights and responsibilities of citizenship.',
  'https://source.unsplash.com/random/?social,studies,citizenship',
  '5',
  'SS'
);
SELECT create_topic(
  'Immigration History and Policy',
  'Study of the history of immigration in the U.S. and its current policy.',
  'https://source.unsplash.com/random/?social,studies,immigration',
  '5',
  'SS'
);
SELECT create_topic(
  'Geopolitical Structures',
  'Understanding geopolitical structures and international relations.',
  'https://source.unsplash.com/random/?social,studies,geopolitics',
  '5',
  'SS'
);
SELECT create_topic(
  'Environmental Science and Policy',
  'Introduction to environmental science and related policy issues.',
  'https://source.unsplash.com/random/?social,studies,environmental',
  '5',
  'SS'
);
SELECT create_topic(
  'The Great Depression and New Deal',
  'Study of the Great Depression and the New Deal policies.',
  'https://source.unsplash.com/random/?social,studies,great,depression',
  '5',
  'SS'
);
SELECT create_topic(
  'Global Conflicts and Resolutions',
  'Exploration of major global conflicts and their resolutions.',
  'https://source.unsplash.com/random/?social,studies,global,conflicts',
  '5',
  'SS'
);
--- ART (40) - "art"
---- Pre-K Art (5)
SELECT create_topic(
  'Exploring Colors',
  'Introduction to basic colors and how they can be mixed to create new ones.',
  'https://source.unsplash.com/random/?art,colors',
  'Pre-K',
  'ART'
);
SELECT create_topic(
  'Shapes and Patterns',
  'Understanding different shapes and patterns, and how they can be used in art.',
  'https://source.unsplash.com/random/?art,shapes',
  'Pre-K',
  'ART'
);
SELECT create_topic(
  'Texture in Art',
  'Exploring different textures by using various materials.',
  'https://source.unsplash.com/random/?art,texture',
  'Pre-K',
  'ART'
);
SELECT create_topic(
  'Crafting with Paper',
  'Creating simple art projects using different types of paper.',
  'https://source.unsplash.com/random/?art,paper',
  'Pre-K',
  'ART'
);
SELECT create_topic(
  'Introduction to Clay',
  'Basic hands-on experience with clay, learning to mold and shape it.',
  'https://source.unsplash.com/random/?art,clay',
  'Pre-K',
  'ART'
);
---- Kindergarten Art (5)
SELECT create_topic(
  'Drawing Basic Shapes',
  'Learning to draw basic shapes and how they can be combined to make complex figures.',
  'https://source.unsplash.com/random/?art,shapes',
  'K',
  'ART'
);
SELECT create_topic(
  'Painting Techniques',
  'Introduction to basic painting techniques using watercolors.',
  'https://source.unsplash.com/random/?art,painting',
  'K',
  'ART'
);
SELECT create_topic(
  'Making Collages',
  'Creating collages using different materials to understand composition.',
  'https://source.unsplash.com/random/?art,collage',
  'K',
  'ART'
);
SELECT create_topic(
  'Introduction to Printmaking',
  'Exploring the process of printmaking using simple tools and methods.',
  'https://source.unsplash.com/random/?art,printmaking',
  'K',
  'ART'
);
SELECT create_topic(
  'Art from Around the World',
  'Exposure to art from different cultures around the world.',
  'https://source.unsplash.com/random/?art,world',
  'K',
  'ART'
);
---- Level 1 Art (5)
SELECT create_topic(
  'Drawing from Observation',
  'Learning to draw objects from observation to improve accuracy.',
  'https://source.unsplash.com/random/?art,observation',
  '1',
  'ART'
);
SELECT create_topic(
  'Introduction to Sculpture',
  'Understanding the basics of 3D design and creating simple sculptures.',
  'https://source.unsplash.com/random/?art,sculpture',
  '1',
  'ART'
);
SELECT create_topic(
  'Learning about Artists',
  'Exploring the works of famous artists and their styles.',
  'https://source.unsplash.com/random/?art,artists',
  '1',
  'ART'
);
SELECT create_topic(
  'Color Theory',
  'Introduction to the color wheel and basic color theory.',
  'https://source.unsplash.com/random/?art,color-theory',
  '1',
  'ART'
);
SELECT create_topic(
  'Art and Storytelling',
  'Using art to tell a story or express an idea.',
  'https://source.unsplash.com/random/?art,storytelling',
  '1',
  'ART'
);
---- Level 2 Art (5)
SELECT create_topic(
  'Advanced Drawing Techniques',
  'Exploring more advanced techniques to improve drawing skills.',
  'https://source.unsplash.com/random/?art,drawing',
  '2',
  'ART'
);
SELECT create_topic(
  'Exploring Mediums',
  'Experimenting with different artistic mediums such as pastels, charcoal, and acrylic paints.',
  'https://source.unsplash.com/random/?art,mediums',
  '2',
  'ART'
);
SELECT create_topic(
  'Art History',
  'Learning about different art movements and their impact on society.',
  'https://source.unsplash.com/random/?art,history',
  '2',
  'ART'
);
SELECT create_topic(
  'Creating a Portfolio',
  'Guidance on creating a portfolio of artworks and critiquing skills.',
  'https://source.unsplash.com/random/?art,portfolio',
  '2',
  'ART'
);
SELECT create_topic(
  'Public Art',
  'Understanding the role and significance of public art in communities.',
  'https://source.unsplash.com/random/?art,public-art',
  '2',
  'ART'
);
---- Level 3 Art (5)
SELECT create_topic(
  'Perspective Drawing',
  'Learning the principles of perspective to create depth in drawings.',
  'https://source.unsplash.com/random/?art,perspective',
  '3',
  'ART'
);
SELECT create_topic(
  'Exploring Styles and Genres',
  'Understanding different styles and genres of art.',
  'https://source.unsplash.com/random/?art,genres',
  '3',
  'ART'
);
SELECT create_topic(
  'Advanced Color Theory',
  'Expanding knowledge on color theory, including the use of complementary and analogous colors.',
  'https://source.unsplash.com/random/?art,color-theory',
  '3',
  'ART'
);
SELECT create_topic(
  'Digital Art Introduction',
  'Introduction to creating art with digital tools.',
  'https://source.unsplash.com/random/?art,digital',
  '3',
  'ART'
);
SELECT create_topic(
  'Art Critique',
  'Learning to critique art, including their own, in constructive ways.',
  'https://source.unsplash.com/random/?art,critique',
  '3',
  'ART'
);
---- Level 4 Art (5)
SELECT create_topic(
  'Advanced Digital Art',
  'Exploring more advanced techniques and tools in digital art creation.',
  'https://source.unsplash.com/random/?art,digital-art',
  '4',
  'ART'
);
SELECT create_topic(
  'Mixed Media Art',
  'Experimenting with combining different artistic mediums in one piece.',
  'https://source.unsplash.com/random/?art,mixed-media',
  '4',
  'ART'
);
SELECT create_topic(
  'Art and Society',
  'Understanding how art reflects and influences society and culture.',
  'https://source.unsplash.com/random/?art,society',
  '4',
  'ART'
);
SELECT create_topic(
  'Personal Style Development',
  'Guidance on developing a personal artistic style.',
  'https://source.unsplash.com/random/?art,style',
  '4',
  'ART'
);
SELECT create_topic(
  'Art Exhibition Preparation',
  'Learning how to prepare and present an art exhibition.',
  'https://source.unsplash.com/random/?art,exhibition',
  '4',
  'ART'
);
---- Level 5 Art (5)
SELECT create_topic(
  'Advanced Composition Techniques',
  'Mastering the use of compositional techniques in creating artworks.',
  'https://source.unsplash.com/random/?art,composition',
  '5',
  'ART'
);
SELECT create_topic(
  'Portfolio Creation',
  'Learning how to create a cohesive and impressive art portfolio.',
  'https://source.unsplash.com/random/?art,portfolio',
  '5',
  'ART'
);
SELECT create_topic(
  'Art Career Paths',
  'Exploring different career paths in the field of art.',
  'https://source.unsplash.com/random/?art,career',
  '5',
  'ART'
);
SELECT create_topic(
  'Independent Art Projects',
  'Developing skills to create independent art projects.',
  'https://source.unsplash.com/random/?art,projects',
  '5',
  'ART'
);
SELECT create_topic(
  'Art History',
  'Understanding key historical periods and movements in art.',
  'https://source.unsplash.com/random/?art,history',
  '5',
  'ART'
);
--- MUS (40) - "music"
---- Pre-K Music (5)
SELECT create_topic(
  'Introduction to Rhythm',
  'Introducing the concept of rhythm and beat in music.',
  'https://source.unsplash.com/random/?music,rhythm',
  'Pre-K',
  'MUS'
);
SELECT create_topic(
  'Exploring Sounds',
  'Exploring different sounds from various musical instruments.',
  'https://source.unsplash.com/random/?music,instruments',
  'Pre-K',
  'MUS'
);
SELECT create_topic(
  'Singing Simple Songs',
  'Learning and singing simple songs.',
  'https://source.unsplash.com/random/?music,singing',
  'Pre-K',
  'MUS'
);
SELECT create_topic(
  'Movement to Music',
  'Understanding how to move and dance to the beat of the music.',
  'https://source.unsplash.com/random/?music,dance',
  'Pre-K',
  'MUS'
);
SELECT create_topic(
  'Musical Storytelling',
  'Listening to and understanding stories told through music.',
  'https://source.unsplash.com/random/?music,storytelling',
  'Pre-K',
  'MUS'
);
---- Kindergarten Music (5)
SELECT create_topic(
  'Recognizing Musical Patterns',
  'Learning to recognize and repeat simple musical patterns.',
  'https://source.unsplash.com/random/?music,patterns',
  'K',
  'MUS'
);
SELECT create_topic(
  'Introduction to Musical Instruments',
  'Getting familiar with different types of musical instruments.',
  'https://source.unsplash.com/random/?music,instruments',
  'K',
  'MUS'
);
SELECT create_topic(
  'Singing in a Group',
  'Practicing singing songs together as a group.',
  'https://source.unsplash.com/random/?music,singing',
  'K',
  'MUS'
);
SELECT create_topic(
  'Moving to the Beat',
  'Enhancing ability to move and dance to the rhythm of the music.',
  'https://source.unsplash.com/random/?music,dance',
  'K',
  'MUS'
);
SELECT create_topic(
  'Making Music with Simple Instruments',
  'Creating music using simple instruments like drums, shakers, and xylophones.',
  'https://source.unsplash.com/random/?music,simple-instruments',
  'K',
  'MUS'
);
---- Level 1 Music (5)
SELECT create_topic(
  'Reading Basic Music Notation',
  'Introduction to reading and understanding basic music notation.',
  'https://source.unsplash.com/random/?music,notation',
  '1',
  'MUS'
);
SELECT create_topic(
  'Playing Simple Melodies',
  'Learning to play simple melodies on a musical instrument.',
  'https://source.unsplash.com/random/?music,melodies',
  '1',
  'MUS'
);
SELECT create_topic(
  'Exploring Different Musical Styles',
  'Introduction to different styles of music from around the world.',
  'https://source.unsplash.com/random/?music,styles',
  '1',
  'MUS'
);
SELECT create_topic(
  'Singing Solo',
  'Practicing singing solo and developing vocal skills.',
  'https://source.unsplash.com/random/?music,solo-singing',
  '1',
  'MUS'
);
SELECT create_topic(
  'Creating Simple Musical Compositions',
  'Introduction to creating simple musical compositions.',
  'https://source.unsplash.com/random/?music,compositions',
  '1',
  'MUS'
);
---- Level 2 Music (5)
SELECT create_topic(
  'Intermediate Music Notation',
  'Deepening understanding of music notation and learning more complex symbols.',
  'https://source.unsplash.com/random/?music,notation',
  '2',
  'MUS'
);
SELECT create_topic(
  'Playing Melodies with Chords',
  'Learning to play melodies accompanied by simple chords on a musical instrument.',
  'https://source.unsplash.com/random/?music,chords',
  '2',
  'MUS'
);
SELECT create_topic(
  'Introduction to Composing',
  'Starting to compose simple pieces of music.',
  'https://source.unsplash.com/random/?music,composing',
  '2',
  'MUS'
);
SELECT create_topic(
  'Singing in Harmony',
  'Learning to sing in harmony with others.',
  'https://source.unsplash.com/random/?music,harmony',
  '2',
  'MUS'
);
SELECT create_topic(
  'Exploring Music from Different Cultures',
  'Learning about the music of different cultures from around the world.',
  'https://source.unsplash.com/random/?music,culture',
  '2',
  'MUS'
);
---- Level 3 Music (5)
SELECT create_topic(
  'Advanced Music Notation',
  'Learning more advanced music notation and symbols.',
  'https://source.unsplash.com/random/?music,notation',
  '3',
  'MUS'
);
SELECT create_topic(
  'Playing Complex Melodies and Chords',
  'Progressing to play more complex melodies and chords on a musical instrument.',
  'https://source.unsplash.com/random/?music,melodies,chords',
  '3',
  'MUS'
);
SELECT create_topic(
  'Composing and Arranging Music',
  'Creating original compositions and learning to arrange music for different instruments.',
  'https://source.unsplash.com/random/?music,composing,arranging',
  '3',
  'MUS'
);
SELECT create_topic(
  'Performing Solo and in Ensemble',
  'Developing performance skills, both solo and as part of an ensemble.',
  'https://source.unsplash.com/random/?music,performance',
  '3',
  'MUS'
);
SELECT create_topic(
  'Analyzing Music',
  'Learning to listen to and analyze music of various styles and genres.',
  'https://source.unsplash.com/random/?music,analyzing',
  '3',
  'MUS'
);
---- Level 4 Music (5)
SELECT create_topic(
  'In-Depth Music Theory',
  'Deepening understanding of music theory and its application.',
  'https://source.unsplash.com/random/?music,theory',
  '4',
  'MUS'
);
SELECT create_topic(
  'Complex Compositions',
  'Learning to create and understand complex musical compositions.',
  'https://source.unsplash.com/random/?music,compositions',
  '4',
  'MUS'
);
SELECT create_topic(
  'Music Interpretation',
  'Understanding and applying techniques of music interpretation in performance.',
  'https://source.unsplash.com/random/?music,interpretation',
  '4',
  'MUS'
);
SELECT create_topic(
  'Improvisation Techniques',
  'Learning and practicing techniques for improvising in music.',
  'https://source.unsplash.com/random/?music,improvisation',
  '4',
  'MUS'
);
SELECT create_topic(
  'Music History and Styles',
  'Studying the history of music and the characteristics of different musical styles.',
  'https://source.unsplash.com/random/?music,history',
  '4',
  'MUS'
);
---- Level 5 Music (5)
SELECT create_topic(
  'Advanced Music Analysis',
  'Understanding and applying advanced techniques for analyzing music.',
  'https://source.unsplash.com/random/?music,analysis',
  '5',
  'MUS'
);
SELECT create_topic(
  'Performance Techniques',
  'Learning advanced performance techniques for solo and ensemble playing.',
  'https://source.unsplash.com/random/?music,performance',
  '5',
  'MUS'
);
SELECT create_topic(
  'Composition and Arrangement',
  'Creating complex compositions and learning to arrange for different ensembles.',
  'https://source.unsplash.com/random/?music,composition,arrangement',
  '5',
  'MUS'
);
SELECT create_topic(
  'Music Criticism',
  'Learning to critique and discuss music with understanding and insight.',
  'https://source.unsplash.com/random/?music,criticism',
  '5',
  'MUS'
);
SELECT create_topic(
  'Music and Culture',
  'Exploring the role of music in various cultures and historical periods.',
  'https://source.unsplash.com/random/?music,culture',
  '5',
  'MUS'
);
--- PE (40) - "physical education"
---- Pre-K Physical Education (5)
SELECT create_topic(
  'Gross Motor Skills',
  'Developing large muscle movements such as walking, running, and jumping.',
  'https://source.unsplash.com/random/?kids,running',
  'Pre-K',
  'PE'
);
SELECT create_topic(
  'Fundamental Movement Patterns',
  'Learning the basic movement patterns like walking, running, hopping, skipping, jumping, galloping, and sliding.',
  'https://source.unsplash.com/random/?kids,playing',
  'Pre-K',
  'PE'
);
SELECT create_topic(
  'Spatial Awareness',
  'Understanding personal space and how to move in relation to other people and objects.',
  'https://source.unsplash.com/random/?kids,spatial-awareness',
  'Pre-K',
  'PE'
);
SELECT create_topic(
  'Balance and Coordination',
  'Improving balance and coordination through games and activities.',
  'https://source.unsplash.com/random/?kids,balance',
  'Pre-K',
  'PE'
);
SELECT create_topic(
  'Healthy Habits',
  'Introduction to basic concepts of nutrition and the importance of physical activity.',
  'https://source.unsplash.com/random/?kids,healthy-habits',
  'Pre-K',
  'PE'
);
---- Kindergarten Physical Education (5)
SELECT create_topic(
  'Developing Motor Skills',
  'Further development of motor skills and learning to control movements more precisely.',
  'https://source.unsplash.com/random/?kids,motor-skills',
  'K',
  'PE'
);
SELECT create_topic(
  'Teamwork and Cooperation',
  'Learning to work together and cooperate with others in group activities and games.',
  'https://source.unsplash.com/random/?kids,teamwork',
  'K',
  'PE'
);
SELECT create_topic(
  'Introduction to Sports',
  'Introduction to simple sports and games, focusing on enjoyment and participation.',
  'https://source.unsplash.com/random/?kids,sports',
  'K',
  'PE'
);
SELECT create_topic(
  'Safety Rules',
  'Understanding basic safety rules for physical activities and games.',
  'https://source.unsplash.com/random/?kids,safety',
  'K',
  'PE'
);
SELECT create_topic(
  'Importance of Exercise',
  'Learning about the importance of regular physical exercise for health.',
  'https://source.unsplash.com/random/?kids,exercise',
  'K',
  'PE'
);
---- Level 1 Physical Education (5)
SELECT create_topic(
  'Basic Sport Skills',
  'Introduction to basic skills in a variety of sports such as throwing, catching, and kicking.',
  'https://source.unsplash.com/random/?kids,sport-skills',
  '1',
  'PE'
);
SELECT create_topic(
  'Game Rules and Strategy',
  'Learning basic rules and strategies of simple games.',
  'https://source.unsplash.com/random/?kids,game-rules',
  '1',
  'PE'
);
SELECT create_topic(
  'Fitness Testing',
  'Introduction to basic fitness testing to assess physical capabilities.',
  'https://source.unsplash.com/random/?kids,fitness-testing',
  '1',
  'PE'
);
SELECT create_topic(
  'Personal and Social Responsibility',
  'Learning about responsibility, respect, and sportsmanship in physical activities.',
  'https://source.unsplash.com/random/?kids,responsibility',
  '1',
  'PE'
);
SELECT create_topic(
  'Health-Related Fitness',
  'Understanding the components of health-related fitness such as cardiovascular endurance, muscular strength, and flexibility.',
  'https://source.unsplash.com/random/?kids,fitness',
  '1',
  'PE'
);
---- Level 2 Physical Education (5)
SELECT create_topic(
  'Advanced Motor Skills',
  'Development of more advanced motor skills and coordination.',
  'https://source.unsplash.com/random/?kids,advanced-motor-skills',
  '2',
  'PE'
);
SELECT create_topic(
  'Team Sports',
  'Introduction to team sports and the skills and strategies involved.',
  'https://source.unsplash.com/random/?kids,team-sports',
  '2',
  'PE'
);
SELECT create_topic(
  'Individual and Dual Sports',
  'Exploration of individual and dual sports such as tennis and gymnastics.',
  'https://source.unsplash.com/random/?kids,individual-sports',
  '2',
  'PE'
);
SELECT create_topic(
  'Physical Fitness Plan',
  'Introduction to creating a personal physical fitness plan.',
  'https://source.unsplash.com/random/?kids,fitness-plan',
  '2',
  'PE'
);
SELECT create_topic(
  'Lifelong Physical Activities',
  'Learning about physical activities that can be enjoyed throughout life, such as biking and swimming.',
  'https://source.unsplash.com/random/?kids,lifelong-activities',
  '2',
  'PE'
);
---- Level 3 Physical Education (5)
SELECT create_topic(
  'Movement Concepts',
  'Exploring concepts related to movement, such as space awareness, effort, and relationships.',
  'https://source.unsplash.com/random/?kids,movement-concepts',
  '3',
  'PE'
);
SELECT create_topic(
  'Health Maintenance',
  'Understanding how physical activity contributes to health maintenance and disease prevention.',
  'https://source.unsplash.com/random/?kids,health-maintenance',
  '3',
  'PE'
);
SELECT create_topic(
  'Personal Fitness Goals',
  'Setting and working towards personal fitness goals.',
  'https://source.unsplash.com/random/?kids,fitness-goals',
  '3',
  'PE'
);
SELECT create_topic(
  'Outdoor Activities',
  'Exploring a variety of outdoor activities and understanding their benefits.',
  'https://source.unsplash.com/random/?kids,outdoor-activities',
  '3',
  'PE'
);
SELECT create_topic(
  'Nutrition and Physical Activity',
  'Understanding the relationship between nutrition and physical activity.',
  'https://source.unsplash.com/random/?kids,nutrition',
  '3',
  'PE'
);
---- Level 4 Physical Education (5)
SELECT create_topic(
  'Skill-Related Fitness',
  'Understanding the components of skill-related fitness such as agility, balance, and coordination.',
  'https://source.unsplash.com/random/?kids,skill-related-fitness',
  '4',
  'PE'
);
SELECT create_topic(
  'Advanced Team Sports',
  'Deepening knowledge and skills related to team sports.',
  'https://source.unsplash.com/random/?kids,advanced-team-sports',
  '4',
  'PE'
);
SELECT create_topic(
  'Advanced Individual and Dual Sports',
  'Deepening skills and strategies related to individual and dual sports.',
  'https://source.unsplash.com/random/?kids,advanced-individual-sports',
  '4',
  'PE'
);
SELECT create_topic(
  'Safety and Injury Prevention',
  'Understanding safety principles and strategies to prevent injury during physical activity.',
  'https://source.unsplash.com/random/?kids,safety',
  '4',
  'PE'
);
SELECT create_topic(
  'Lifestyle and Career Opportunities',
  'Exploring how physical activity contributes to lifestyle and career opportunities.',
  'https://source.unsplash.com/random/?kids,physical-education-careers',
  '4',
  'PE'
);
---- Level 5 Physical Education (5)
SELECT create_topic(
  'Fitness Assessment and Goal Setting',
  'Understanding fitness assessments and setting personal fitness goals.',
  'https://source.unsplash.com/random/?kids,fitness-assessment',
  '5',
  'PE'
);
SELECT create_topic(
  'Advanced Sports Skills',
  'Mastering advanced sports skills and strategies.',
  'https://source.unsplash.com/random/?kids,advanced-sports-skills',
  '5',
  'PE'
);
SELECT create_topic(
  'Outdoor and Adventure Activities',
  'Exploring outdoor and adventure activities for physical fitness.',
  'https://source.unsplash.com/random/?kids,outdoor-adventure',
  '5',
  'PE'
);
SELECT create_topic(
  'Leadership and Teamwork',
  'Developing leadership skills and understanding the importance of teamwork in physical activities.',
  'https://source.unsplash.com/random/?kids,leadership',
  '5',
  'PE'
);
SELECT create_topic(
  'Health and Wellness',
  'Understanding the importance of physical activity for lifelong health and wellness.',
  'https://source.unsplash.com/random/?kids,health-wellness',
  '5',
  'PE'
);
--- HTH (40) - "health"
---- Pre-K Health (5)
SELECT create_topic(
  'Healthy Habits',
  'Learning about basic healthy habits, such as hand washing and covering mouth when coughing.',
  'https://source.unsplash.com/random/?kids,healthy-habits',
  'Pre-K',
  'HTH'
);
SELECT create_topic(
  'Food Groups',
  'Introduction to different food groups and the importance of a balanced diet.',
  'https://source.unsplash.com/random/?kids,food-groups',
  'Pre-K',
  'HTH'
);
SELECT create_topic(
  'Physical Activity',
  'Understanding the importance of physical activity and different ways to be active.',
  'https://source.unsplash.com/random/?kids,physical-activity',
  'Pre-K',
  'HTH'
);
SELECT create_topic(
  'Safety Rules',
  'Learning basic safety rules at home, school, and during activities.',
  'https://source.unsplash.com/random/?kids,safety-rules',
  'Pre-K',
  'HTH'
);
SELECT create_topic(
  'Feelings and Emotions',
  'Introduction to recognizing and expressing different feelings and emotions.',
  'https://source.unsplash.com/random/?kids,feelings',
  'Pre-K',
  'HTH'
);
---- Kindergarten Health (5)
SELECT create_topic(
  'Personal Hygiene',
  'Understanding the importance of personal hygiene and self-care habits.',
  'https://source.unsplash.com/random/?kids,personal-hygiene',
  'K',
  'HTH'
);
SELECT create_topic(
  'Healthy Eating',
  'Learning about healthy food choices and the benefits of eating well.',
  'https://source.unsplash.com/random/?kids,healthy-eating',
  'K',
  'HTH'
);
SELECT create_topic(
  'Safety at Home and School',
  'Understanding safety rules and practices at home and school.',
  'https://source.unsplash.com/random/?kids,safety-rules',
  'K',
  'HTH'
);
SELECT create_topic(
  'Understanding Emotions',
  'Learning to recognize, understand, and express a range of emotions.',
  'https://source.unsplash.com/random/?kids,emotions',
  'K',
  'HTH'
);
SELECT create_topic(
  'Physical Activity and Rest',
  'Understanding the importance of balance between physical activity and rest.',
  'https://source.unsplash.com/random/?kids,physical-activity',
  'K',
  'HTH'
);
---- Level 1 Health (5)
SELECT create_topic(
  'Nutrition and Food Choices',
  'Exploring nutrition, food choices, and the food pyramid.',
  'https://source.unsplash.com/random/?kids,nutrition',
  '1',
  'HTH'
);
SELECT create_topic(
  'Safety and First Aid',
  'Learning about basic safety rules and introduction to first aid.',
  'https://source.unsplash.com/random/?kids,first-aid',
  '1',
  'HTH'
);
SELECT create_topic(
  'Physical Health and Fitness',
  'Understanding physical health, fitness, and the benefits of regular exercise.',
  'https://source.unsplash.com/random/?kids,physical-fitness',
  '1',
  'HTH'
);
SELECT create_topic(
  'Mental and Emotional Health',
  'Exploring mental and emotional health, stress management, and coping strategies.',
  'https://source.unsplash.com/random/?kids,mental-health',
  '1',
  'HTH'
);
SELECT create_topic(
  'Personal Hygiene and Puberty',
  'Understanding personal hygiene, and introduction to changes in puberty.',
  'https://source.unsplash.com/random/?kids,puberty',
  '1',
  'HTH'
);
---- Level 2 Health (5)
SELECT create_topic(
  'Healthy Lifestyles',
  'Exploring the components of a healthy lifestyle, including balanced diet, regular exercise, and sufficient sleep.',
  'https://source.unsplash.com/random/?kids,healthy-lifestyle',
  '2',
  'HTH'
);
SELECT create_topic(
  'Disease Prevention',
  'Understanding common illnesses, their causes and prevention.',
  'https://source.unsplash.com/random/?kids,disease-prevention',
  '2',
  'HTH'
);
SELECT create_topic(
  'Safety Rules and Emergencies',
  'Learning about safety rules in different settings and how to respond to emergencies.',
  'https://source.unsplash.com/random/?kids,safety-rules',
  '2',
  'HTH'
);
SELECT create_topic(
  'Emotional Well-being',
  'Learning about emotions, stress management, and developing resilience.',
  'https://source.unsplash.com/random/?kids,emotional-wellbeing',
  '2',
  'HTH'
);
SELECT create_topic(
  'Puberty and Personal Hygiene',
  'Understanding the changes during puberty and the importance of personal hygiene.',
  'https://source.unsplash.com/random/?kids,puberty',
  '2',
  'HTH'
);
---- Level 3 Health (5)
SELECT create_topic(
  'Nutrition and Exercise',
  'Deepening understanding of nutrition, balanced diet, and the role of exercise in maintaining health.',
  'https://source.unsplash.com/random/?kids,nutrition-exercise',
  '3',
  'HTH'
);
SELECT create_topic(
  'Disease Prevention and Health Promotion',
  'Learning about diseases, their prevention, and how to promote health at the individual and community level.',
  'https://source.unsplash.com/random/?kids,disease-prevention',
  '3',
  'HTH'
);
SELECT create_topic(
  'Mental and Emotional Health',
  'Exploring deeper into mental and emotional health, understanding mental health issues and how to seek help.',
  'https://source.unsplash.com/random/?kids,mental-health',
  '3',
  'HTH'
);
SELECT create_topic(
  'Safety and First Aid',
  'Learning about safety measures and basic first aid skills.',
  'https://source.unsplash.com/random/?kids,safety-first-aid',
  '3',
  'HTH'
);
SELECT create_topic(
  'Puberty and Adolescent Health',
  'Exploring the changes during puberty and the importance of health care during adolescence.',
  'https://source.unsplash.com/random/?kids,adolescent-health',
  '3',
  'HTH'
);
---- Level 4 Health (5)
SELECT create_topic(
  'Advanced Nutrition and Exercise',
  'Understanding the vital role of nutrition and physical activity in maintaining good health.',
  'https://source.unsplash.com/random/?kids,advanced-nutrition-exercise',
  '4',
  'HTH'
);
SELECT create_topic(
  'Preventive Healthcare',
  'Learning about the importance of preventive healthcare including vaccinations, regular check-ups, and screenings.',
  'https://source.unsplash.com/random/?kids,preventive-healthcare',
  '4',
  'HTH'
);
SELECT create_topic(
  'Mental Health and Stress Management',
  'Deepening understanding of mental health, stress management techniques, and the importance of seeking help when needed.',
  'https://source.unsplash.com/random/?kids,mental-health-stress',
  '4',
  'HTH'
);
SELECT create_topic(
  'First Aid and Emergency Responses',
  'Understanding how to respond to emergencies and provide basic first aid.',
  'https://source.unsplash.com/random/?kids,first-aid',
  '4',
  'HTH'
);
SELECT create_topic(
  'Adolescent Health and Sex Education',
  'Learning about the changes during adolescence, personal hygiene, and basics of sex education.',
  'https://source.unsplash.com/random/?kids,adolescent-health',
  '4',
  'HTH'
);
---- Level 5 Health (5)
SELECT create_topic(
  'Healthy Lifestyle Choices',
  'Understanding the long-term impact of lifestyle choices on health, and learning to make informed decisions.',
  'https://source.unsplash.com/random/?kids,healthy-lifestyle',
  '5',
  'HTH'
);
SELECT create_topic(
  'Healthcare Systems and Services',
  'Learning about healthcare systems, medical professions, and services available for maintaining health.',
  'https://source.unsplash.com/random/?kids,healthcare-systems',
  '5',
  'HTH'
);
SELECT create_topic(
  'Advanced Mental Health',
  'Exploring mental health issues at a deeper level, understanding symptoms, and knowing how and when to seek help.',
  'https://source.unsplash.com/random/?kids,advanced-mental-health',
  '5',
  'HTH'
);
SELECT create_topic(
  'Emergency Preparedness',
  'Understanding the importance of being prepared for emergencies, learning about emergency response plans and procedures.',
  'https://source.unsplash.com/random/?kids,emergency-preparedness',
  '5',
  'HTH'
);
SELECT create_topic(
  'Comprehensive Sex Education',
  'Learning about sexual and reproductive health, understanding consent, and making informed decisions.',
  'https://source.unsplash.com/random/?kids,sex-education',
  '5',
  'HTH'
);
--- COMPSCI (40) - "computer science"
---- Pre-K Computer Science (5)
SELECT create_topic(
  'Exploring Devices',
  'Understanding what a computer is and exploring different types of technological devices.',
  'https://source.unsplash.com/random/?kids,devices',
  'Pre-K',
  'COMPSCI'
);
SELECT create_topic(
  'Introduction to Mouse and Keyboard',
  'Learning how to use a mouse and keyboard.',
  'https://source.unsplash.com/random/?kids,mouse-keyboard',
  'Pre-K',
  'COMPSCI'
);
SELECT create_topic(
  'Basics of Using a Computer',
  'Understanding how to turn on a computer and open applications.',
  'https://source.unsplash.com/random/?kids,computer-basics',
  'Pre-K',
  'COMPSCI'
);
SELECT create_topic(
  'Introduction to Internet Safety',
  'Learning about basic rules of internet safety.',
  'https://source.unsplash.com/random/?kids,internet-safety',
  'Pre-K',
  'COMPSCI'
);
SELECT create_topic(
  'Using Learning Games',
  'Exploring age-appropriate educational games on a computer.',
  'https://source.unsplash.com/random/?kids,learning-games',
  'Pre-K',
  'COMPSCI'
);
---- Kindergarten Computer Science (5)
SELECT create_topic(
  'Computers and Communication',
  'Understanding how computers help us communicate and learning to use simple communication tools.',
  'https://source.unsplash.com/random/?kids,computer-communication',
  'K',
  'COMPSCI'
);
SELECT create_topic(
  'Using a Word Processor',
  'Learning to type and create simple documents using a word processor.',
  'https://source.unsplash.com/random/?kids,word-processor',
  'K',
  'COMPSCI'
);
SELECT create_topic(
  'Internet Safety and Digital Citizenship',
  'Deepening understanding of internet safety and learning about being a good digital citizen.',
  'https://source.unsplash.com/random/?kids,digital-citizenship',
  'K',
  'COMPSCI'
);
SELECT create_topic(
  'Introduction to Coding',
  'Exploring the basics of coding through age-appropriate activities and games.',
  'https://source.unsplash.com/random/?kids,coding',
  'K',
  'COMPSCI'
);
SELECT create_topic(
  'Understanding Algorithms',
  'Learning about algorithms and how they are used in technology.',
  'https://source.unsplash.com/random/?kids,algorithms',
  'K',
  'COMPSCI'
);
---- Level 1 Computer Science (5)
SELECT create_topic(
  'Introduction to Programming',
  'Introduction to basic programming concepts using kid-friendly coding tools.',
  'https://source.unsplash.com/random/?kids,programming',
  '1',
  'COMPSCI'
);
SELECT create_topic(
  'Using the Internet for Learning',
  'Understanding how to use the internet as a resource for learning, including using educational websites and apps.',
  'https://source.unsplash.com/random/?kids,internet-learning',
  '1',
  'COMPSCI'
);
SELECT create_topic(
  'Improving Typing Skills',
  'Practicing and improving typing skills through games and exercises.',
  'https://source.unsplash.com/random/?kids,typing',
  '1',
  'COMPSCI'
);
SELECT create_topic(
  'Digital Art Creation',
  'Learning to use digital tools to create art, including using drawing and painting apps.',
  'https://source.unsplash.com/random/?kids,digital-art',
  '1',
  'COMPSCI'
);
SELECT create_topic(
  'Continuing Internet Safety and Digital Citizenship',
  'Deepening understanding of internet safety and digital citizenship, including understanding cyberbullying.',
  'https://source.unsplash.com/random/?kids,internet-safety',
  '1',
  'COMPSCI'
);
---- Level 2 Computer Science (5)
SELECT create_topic(
  'Advanced Programming Concepts',
  'Exploring more advanced programming concepts using age-appropriate coding tools.',
  'https://source.unsplash.com/random/?kids,advanced-programming',
  '2',
  'COMPSCI'
);
SELECT create_topic(
  'Using Spreadsheets',
  'Introduction to using spreadsheets for simple tasks, like tracking personal expenses or grades.',
  'https://source.unsplash.com/random/?kids,spreadsheets',
  '2',
  'COMPSCI'
);
SELECT create_topic(
  'Creating Presentations',
  'Learning to use digital tools to create presentations, including using templates and adding images and text.',
  'https://source.unsplash.com/random/?kids,presentations',
  '2',
  'COMPSCI'
);
SELECT create_topic(
  'Internet Research Skills',
  'Learning how to use the internet for research, including how to evaluate the credibility of sources.',
  'https://source.unsplash.com/random/?kids,internet-research',
  '2',
  'COMPSCI'
);
SELECT create_topic(
  'Coding with Scratch',
  'Learning to code with Scratch, an introductory programming language.',
  'https://source.unsplash.com/random/?kids,scratch-coding',
  '2',
  'COMPSCI'
);
---- Level 3 Computer Science (5)
SELECT create_topic(
  'Intermediate Programming Concepts',
  'Continuing to explore more advanced programming concepts with an emphasis on problem-solving.',
  'https://source.unsplash.com/random/?kids,programming',
  '3',
  'COMPSCI'
);
SELECT create_topic(
  'Building Simple Websites',
  'Introduction to building simple websites using HTML and CSS.',
  'https://source.unsplash.com/random/?kids,web-development',
  '3',
  'COMPSCI'
);
SELECT create_topic(
  'Digital Media Creation',
  'Learning how to create digital media, including audio and video projects.',
  'https://source.unsplash.com/random/?kids,digital-media',
  '3',
  'COMPSCI'
);
SELECT create_topic(
  'Advanced Internet Research Skills',
  'Deepening internet research skills, including understanding more about digital literacy and credibility of sources.',
  'https://source.unsplash.com/random/?kids,internet-research',
  '3',
  'COMPSCI'
);
SELECT create_topic(
  'Introduction to Python',
  'Introduction to Python, a versatile and widely-used programming language.',
  'https://source.unsplash.com/random/?kids,python',
  '3',
  'COMPSCI'
);
---- Level 4 Computer Science (5)
SELECT create_topic(
  'Complex Programming Concepts',
  'Learning more complex programming concepts with an emphasis on logical thinking and problem-solving.',
  'https://source.unsplash.com/random/?kids,programming',
  '4',
  'COMPSCI'
);
SELECT create_topic(
  'Building Interactive Websites',
  'Learning to build interactive websites using HTML, CSS, and introductory JavaScript.',
  'https://source.unsplash.com/random/?kids,web-development',
  '4',
  'COMPSCI'
);
SELECT create_topic(
  '3D Modeling and Printing',
  'Introduction to creating 3D models and understanding the basics of 3D printing.',
  'https://source.unsplash.com/random/?kids,3d-printing',
  '4',
  'COMPSCI'
);
SELECT create_topic(
  'Cybersecurity Basics',
  'Understanding the basics of cybersecurity, including protecting personal information online.',
  'https://source.unsplash.com/random/?kids,cybersecurity',
  '4',
  'COMPSCI'
);
SELECT create_topic(
  'Intermediate Python',
  'Deepening knowledge of Python programming with a focus on building simple projects.',
  'https://source.unsplash.com/random/?kids,python',
  '4',
  'COMPSCI'
);
---- Level 5 Computer Science (5)
SELECT create_topic(
  'Advanced Programming Concepts',
  'Exploring advanced programming concepts with a focus on problem-solving and critical thinking.',
  'https://source.unsplash.com/random/?kids,programming',
  '5',
  'COMPSCI'
);
SELECT create_topic(
  'Web Development with JavaScript',
  'Learning to build dynamic websites using JavaScript in conjunction with HTML and CSS.',
  'https://source.unsplash.com/random/?kids,web-development',
  '5',
  'COMPSCI'
);
SELECT create_topic(
  'Robotics and Automation',
  'Introduction to the basics of robotics and automation, including programming simple robots.',
  'https://source.unsplash.com/random/?kids,robotics',
  '5',
  'COMPSCI'
);
SELECT create_topic(
  'Cybersecurity and Digital Citizenship',
  'Deepening understanding of cybersecurity and the importance of good digital citizenship.',
  'https://source.unsplash.com/random/?kids,cybersecurity',
  '5',
  'COMPSCI'
);
SELECT create_topic(
  'Advanced Python',
  'Furthering knowledge of Python programming with a focus on creating more complex projects.',
  'https://source.unsplash.com/random/?kids,python',
  '5',
  'COMPSCI'
);
--- SEL (40) - "social emotional learning"
---- Pre-K Social Emotional Learning (5)
SELECT create_topic(
  'Recognizing Emotions',
  'Learning to recognize and name different emotions.',
  'https://source.unsplash.com/random/?kids,emotions',
  'Pre-K',
  'SEL'
);
SELECT create_topic(
  'Making Friends',
  'Understanding the basics of making and being a good friend.',
  'https://source.unsplash.com/random/?kids,friends',
  'Pre-K',
  'SEL'
);
SELECT create_topic(
  'Sharing and Taking Turns',
  'Learning the importance of sharing and taking turns with others.',
  'https://source.unsplash.com/random/?kids,sharing',
  'Pre-K',
  'SEL'
);
SELECT create_topic(
  'Respecting Differences',
  'Introduction to the concept of diversity and the importance of respecting differences.',
  'https://source.unsplash.com/random/?kids,respecting-differences',
  'Pre-K',
  'SEL'
);
SELECT create_topic(
  'Self-Control and Patience',
  'Learning about self-control and the importance of patience.',
  'https://source.unsplash.com/random/?kids,self-control',
  'Pre-K',
  'SEL'
);
---- Kindergarten Social Emotional Learning (5)
SELECT create_topic(
  'Understanding Feelings',
  'Learning more about feelings and how to manage them.',
  'https://source.unsplash.com/random/?kids,feelings',
  'K',
  'SEL'
);
SELECT create_topic(
  'Conflict Resolution',
  'Introduction to basic conflict resolution strategies and problem-solving.',
  'https://source.unsplash.com/random/?kids,conflict-resolution',
  'K',
  'SEL'
);
SELECT create_topic(
  'Empathy and Kindness',
  'Understanding the importance of empathy and kindness towards others.',
  'https://source.unsplash.com/random/?kids,empathy',
  'K',
  'SEL'
);
SELECT create_topic(
  'Respecting Others',
  'Learning about the importance of respect and good manners.',
  'https://source.unsplash.com/random/?kids,respect',
  'K',
  'SEL'
);
SELECT create_topic(
  'Building Confidence',
  'Activities and lessons designed to build self-esteem and confidence.',
  'https://source.unsplash.com/random/?kids,confidence',
  'K',
  'SEL'
);
---- Level 1 Social Emotional Learning (5)
SELECT create_topic(
  'Identifying Strengths and Weaknesses',
  'Learning to identify personal strengths and areas for improvement.',
  'https://source.unsplash.com/random/?kids,self-awareness',
  '1',
  'SEL'
);
SELECT create_topic(
  'Working in a Team',
  'Understanding the value of teamwork and cooperation.',
  'https://source.unsplash.com/random/?kids,teamwork',
  '1',
  'SEL'
);
SELECT create_topic(
  'Understanding Bullying',
  'Introduction to the concept of bullying and strategies to deal with it.',
  'https://source.unsplash.com/random/?kids,bullying',
  '1',
  'SEL'
);
SELECT create_topic(
  'Respecting Authority',
  'Learning about the importance of respecting authority and following rules.',
  'https://source.unsplash.com/random/?kids,respecting-authority',
  '1',
  'SEL'
);
SELECT create_topic(
  'Setting Goals',
  'Introduction to setting personal goals and working towards them.',
  'https://source.unsplash.com/random/?kids,goal-setting',
  '1',
  'SEL'
);
---- Level 2 Social Emotional Learning (5)
SELECT create_topic(
  'Growth Mindset',
  'Introduction to the concept of growth mindset and its importance.',
  'https://source.unsplash.com/random/?kids,growth-mindset',
  '2',
  'SEL'
);
SELECT create_topic(
  'Peer Pressure',
  'Understanding peer pressure and learning strategies to handle it.',
  'https://source.unsplash.com/random/?kids,peer-pressure',
  '2',
  'SEL'
);
SELECT create_topic(
  'Conflict Resolution Advanced',
  'Further development of conflict resolution strategies and problem-solving.',
  'https://source.unsplash.com/random/?kids,conflict-resolution',
  '2',
  'SEL'
);
SELECT create_topic(
  'Understanding Diversity',
  'Learning about diversity and the importance of inclusivity.',
  'https://source.unsplash.com/random/?kids,diversity',
  '2',
  'SEL'
);
SELECT create_topic(
  'Managing Stress',
  'Introduction to stress management techniques suitable for children.',
  'https://source.unsplash.com/random/?kids,stress-management',
  '2',
  'SEL'
);
---- Level 3 Social Emotional Learning (5)
SELECT create_topic(
  'Digital Citizenship',
  'Understanding the responsibilities and rules of online interactions.',
  'https://source.unsplash.com/random/?kids,digital-citizenship',
  '3',
  'SEL'
);
SELECT create_topic(
  'Resilience',
  'Developing resilience and understanding the ability to recover from setbacks.',
  'https://source.unsplash.com/random/?kids,resilience',
  '3',
  'SEL'
);
SELECT create_topic(
  'Emotional Intelligence',
  'Introduction to emotional intelligence and its importance in daily life.',
  'https://source.unsplash.com/random/?kids,emotional-intelligence',
  '3',
  'SEL'
);
SELECT create_topic(
  'Healthy Relationships',
  'Understanding the characteristics of healthy relationships and friendships.',
  'https://source.unsplash.com/random/?kids,healthy-relationships',
  '3',
  'SEL'
);
SELECT create_topic(
  'Personal Responsibility',
  'Learning about personal responsibility and accountability.',
  'https://source.unsplash.com/random/?kids,personal-responsibility',
  '3',
  'SEL'
);
---- Level 4 Social Emotional Learning (5)
SELECT create_topic(
  'Advanced Emotional Intelligence',
  'Further development of emotional intelligence skills.',
  'https://source.unsplash.com/random/?kids,emotional-intelligence',
  '4',
  'SEL'
);
SELECT create_topic(
  'Goal Setting',
  'Learning about setting and working towards personal goals.',
  'https://source.unsplash.com/random/?kids,goal-setting',
  '4',
  'SEL'
);
SELECT create_topic(
  'Advanced Healthy Relationships',
  'Further understanding of healthy relationships, including communication and boundaries.',
  'https://source.unsplash.com/random/?kids,healthy-relationships',
  '4',
  'SEL'
);
SELECT create_topic(
  'Self Advocacy',
  'Introduction to self advocacy and standing up for oneself.',
  'https://source.unsplash.com/random/?kids,self-advocacy',
  '4',
  'SEL'
);
SELECT create_topic(
  'Advanced Personal Responsibility',
  'Further understanding of personal responsibility and accountability.',
  'https://source.unsplash.com/random/?kids,personal-responsibility',
  '4',
  'SEL'
);
---- Level 5 Social Emotional Learning (5)
SELECT create_topic(
  'Critical Thinking',
  'Introduction to critical thinking and decision making skills.',
  'https://source.unsplash.com/random/?kids,critical-thinking',
  '5',
  'SEL'
);
SELECT create_topic(
  'Advanced Goal Setting',
  'Further understanding of goal setting, including long-term goals and action plans.',
  'https://source.unsplash.com/random/?kids,goal-setting',
  '5',
  'SEL'
);
SELECT create_topic(
  'Leadership Skills',
  'Introduction to leadership skills and qualities.',
  'https://source.unsplash.com/random/?kids,leadership',
  '5',
  'SEL'
);
SELECT create_topic(
  'Advanced Self Advocacy',
  'Further development of self advocacy skills.',
  'https://source.unsplash.com/random/?kids,self-advocacy',
  '5',
  'SEL'
);
SELECT create_topic(
  'Managing Change',
  'Learning about handling and adapting to changes.',
  'https://source.unsplash.com/random/?kids,managing-change',
  '5',
  'SEL'
);
--- MND (40) - "mindfulness"
---- Pre-K Mindfulness (5)
SELECT create_topic(
  'Introduction to Mindfulness',
  'An introduction to the concept of mindfulness and being present.',
  'https://source.unsplash.com/random/?kids,mindfulness',
  'Pre-K',
  'MND'
);
SELECT create_topic(
  'Sensory Awareness',
  'Exploring awareness of the five senses as a part of mindfulness.',
  'https://source.unsplash.com/random/?kids,senses',
  'Pre-K',
  'MND'
);
SELECT create_topic(
  'Mindful Breathing',
  'Introduction to the practice of mindful breathing to calm and focus the mind.',
  'https://source.unsplash.com/random/?kids,breathing',
  'Pre-K',
  'MND'
);
SELECT create_topic(
  'Mindful Movement',
  'Introduction to mindful movement as a way to understand our bodies.',
  'https://source.unsplash.com/random/?kids,movement',
  'Pre-K',
  'MND'
);
SELECT create_topic(
  'Gratitude Practice',
  'Introduction to the practice of gratitude as a part of mindfulness.',
  'https://source.unsplash.com/random/?kids,gratitude',
  'Pre-K',
  'MND'
);
---- Kindergarten Mindfulness (5)
SELECT create_topic(
  'Continued Mindfulness Practice',
  'Continuing the practice of mindfulness and being present.',
  'https://source.unsplash.com/random/?kids,mindfulness',
  'K',
  'MND'
);
SELECT create_topic(
  'Mindful Listening',
  'Developing the skill of mindful listening.',
  'https://source.unsplash.com/random/?kids,listening',
  'K',
  'MND'
);
SELECT create_topic(
  'Mindful Eating',
  'Introduction to the practice of mindful eating.',
  'https://source.unsplash.com/random/?kids,eating',
  'K',
  'MND'
);
SELECT create_topic(
  'Body Scan Meditation',
  'Introduction to the body scan meditation as a mindfulness practice.',
  'https://source.unsplash.com/random/?kids,meditation',
  'K',
  'MND'
);
SELECT create_topic(
  'Kindness Practice',
  'Cultivating kindness towards oneself and others as a part of mindfulness.',
  'https://source.unsplash.com/random/?kids,kindness',
  'K',
  'MND'
);
---- Level 1 Mindfulness (5)
SELECT create_topic(
  'Deepening Mindfulness Practice',
  'Further exploration and practice of mindfulness techniques.',
  'https://source.unsplash.com/random/?kids,mindfulness',
  '1',
  'MND'
);
SELECT create_topic(
  'Mindful Communication',
  'Introduction to mindful communication and listening.',
  'https://source.unsplash.com/random/?kids,communication',
  '1',
  'MND'
);
SELECT create_topic(
  'Understanding Emotions',
  'A journey into understanding and managing emotions through mindfulness.',
  'https://source.unsplash.com/random/?kids,emotions',
  '1',
  'MND'
);
SELECT create_topic(
  'Mindfulness in Nature',
  'Exploring mindfulness through observation and appreciation of nature.',
  'https://source.unsplash.com/random/?kids,nature',
  '1',
  'MND'
);
SELECT create_topic(
  'Mindful Art',
  'Using art as a tool for practicing mindfulness.',
  'https://source.unsplash.com/random/?kids,art',
  '1',
  'MND'
);
---- Level 2 Mindfulness (5)
SELECT create_topic(
  'Advancing Mindfulness Practice',
  'Continuing to deepen mindfulness practice and techniques.',
  'https://source.unsplash.com/random/?kids,mindfulness',
  '2',
  'MND'
);
SELECT create_topic(
  'Mindful Problem-Solving',
  'Introduction to applying mindfulness in problem-solving.',
  'https://source.unsplash.com/random/?kids,problem-solving',
  '2',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Empathy',
  'Understanding empathy and how mindfulness can help to foster it.',
  'https://source.unsplash.com/random/?kids,empathy',
  '2',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Conflict Resolution',
  'Applying mindfulness in situations of conflict and dispute.',
  'https://source.unsplash.com/random/?kids,conflict-resolution',
  '2',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Sleep',
  'How mindfulness can improve sleep and relaxation.',
  'https://source.unsplash.com/random/?kids,sleep',
  '2',
  'MND'
);
---- Level 3 Mindfulness (5)
SELECT create_topic(
  'Mindful Leadership',
  'Exploring how mindfulness can contribute to effective leadership.',
  'https://source.unsplash.com/random/?kids,leadership',
  '3',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Gratitude',
  'Introduction to gratitude practice in mindfulness.',
  'https://source.unsplash.com/random/?kids,gratitude',
  '3',
  'MND'
);
SELECT create_topic(
  'Mindful Eating',
  'Learning to appreciate food and eat mindfully.',
  'https://source.unsplash.com/random/?kids,eating',
  '3',
  'MND'
);
SELECT create_topic(
  'Mindfulness in Action',
  'Applying mindfulness in everyday activities.',
  'https://source.unsplash.com/random/?kids,activities',
  '3',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Music',
  'Exploring how music can be a tool for mindfulness.',
  'https://source.unsplash.com/random/?kids,music',
  '3',
  'MND'
);
---- Level 4 Mindfulness (5)
SELECT create_topic(
  'Mindfulness and Resilience',
  'Understanding resilience and how mindfulness can help to build it.',
  'https://source.unsplash.com/random/?kids,resilience',
  '4',
  'MND'
);
SELECT create_topic(
  'Mindful Writing',
  'Exploring writing as a tool for mindfulness.',
  'https://source.unsplash.com/random/?kids,writing',
  '4',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Stress Management',
  'Learning how mindfulness can help manage stress.',
  'https://source.unsplash.com/random/?kids,stress-management',
  '4',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Nature Conservation',
  'Understanding the role of mindfulness in appreciating and conserving nature.',
  'https://source.unsplash.com/random/?kids,nature-conservation',
  '4',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Social Responsibility',
  'Exploring how mindfulness can contribute to social responsibility.',
  'https://source.unsplash.com/random/?kids,social-responsibility',
  '4',
  'MND'
);
---- Level 5 Mindfulness (5)
SELECT create_topic(
  'Mindfulness and Emotional Intelligence',
  'Understanding Emotional Intelligence and how mindfulness can enhance it.',
  'https://source.unsplash.com/random/?kids,emotional-intelligence',
  '5',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Conflict Resolution',
  'Exploring how mindfulness can contribute to conflict resolution.',
  'https://source.unsplash.com/random/?kids,conflict-resolution',
  '5',
  'MND'
);
SELECT create_topic(
  'Mindful Communication',
  'Understanding the role of mindfulness in effective communication.',
  'https://source.unsplash.com/random/?kids,communication',
  '5',
  'MND'
);
SELECT create_topic(
  'Mindfulness and Environmental Awareness',
  'Learning about environmental awareness through the lens of mindfulness.',
  'https://source.unsplash.com/random/?kids,environmental-awareness',
  '5',
  'MND'
);
SELECT create_topic(
  'Mindful Future',
  'Discussion on the importance of mindfulness in shaping the future.',
  'https://source.unsplash.com/random/?kids,future',
  '5',
  'MND'
);
--- ENTP (40) - "entrepreneurship"
---- Pre-K Entrepreneurship (5)
SELECT create_topic(
  'Introduction to Entrepreneurship',
  'Basic introduction to the concept of entrepreneurship.',
  'https://source.unsplash.com/random/?kids,entrepreneurship',
  'Pre-K',
  'ENTP'
);
SELECT create_topic(
  'Being a Leader',
  'Understanding the qualities of a good leader.',
  'https://source.unsplash.com/random/?kids,leader',
  'Pre-K',
  'ENTP'
);
SELECT create_topic(
  'Creativity and Ideas',
  'Learning about the importance of creativity and ideas in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,creativity',
  'Pre-K',
  'ENTP'
);
SELECT create_topic(
  'Problem Solving',
  'Introduction to problem solving - an important skill for entrepreneurs.',
  'https://source.unsplash.com/random/?kids,problem-solving',
  'Pre-K',
  'ENTP'
);
SELECT create_topic(
  'Working as a Team',
  'Understanding the importance of teamwork in achieving goals.',
  'https://source.unsplash.com/random/?kids,teamwork',
  'Pre-K',
  'ENTP'
);
----- Kindergarten Entrepreneurship (5)
SELECT create_topic(
  'Understanding Business',
  'An introductory lesson on what businesses are and how they function.',
  'https://source.unsplash.com/random/?kids,business',
  'K',
  'ENTP'
);
SELECT create_topic(
  'Making a Plan',
  'Learning about the importance of planning in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,planning',
  'K',
  'ENTP'
);
SELECT create_topic(
  'Basics of Money',
  'Introduction to the concept of money and its role in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,money',
  'K',
  'ENTP'
);
SELECT create_topic(
  'Innovation and Ideas',
  'Exploring how new ideas can lead to new products or services.',
  'https://source.unsplash.com/random/?kids,innovation',
  'K',
  'ENTP'
);
SELECT create_topic(
  'Responsibility and Hard Work',
  'Understanding the importance of responsibility and hard work in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,hardwork',
  'K',
  'ENTP'
);
---- Level 1 Entrepreneurship (5)
SELECT create_topic(
  'What is an Entrepreneur?',
  'Deepening understanding of who an entrepreneur is and what they do.',
  'https://source.unsplash.com/random/?kids,entrepreneur',
  '1',
  'ENTP'
);
SELECT create_topic(
  'Business and Community',
  'Exploring how businesses interact with and impact their communities.',
  'https://source.unsplash.com/random/?kids,community',
  '1',
  'ENTP'
);
SELECT create_topic(
  'Creating a Simple Business Plan',
  'Learning the basics of creating a business plan.',
  'https://source.unsplash.com/random/?kids,business-plan',
  '1',
  'ENTP'
);
SELECT create_topic(
  'Introduction to Marketing',
  'Introduction to the concept of marketing and why it’s important for businesses.',
  'https://source.unsplash.com/random/?kids,marketing',
  '1',
  'ENTP'
);
SELECT create_topic(
  'Entrepreneurship and Ethics',
  'Understanding the role of ethics in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,ethics',
  '1',
  'ENTP'
);
---- Level 2 Entrepreneurship (5)
SELECT create_topic(
  'Understanding Profit and Loss',
  'Deeper understanding of profit, loss, and the financial aspects of a business.',
  'https://source.unsplash.com/random/?kids,profit',
  '2',
  'ENTP'
);
SELECT create_topic(
  'Supply and Demand',
  'Exploring the concept of supply and demand, and how it impacts a business.',
  'https://source.unsplash.com/random/?kids,supply-demand',
  '2',
  'ENTP'
);
SELECT create_topic(
  'Customer Service Basics',
  'Learning about the importance of customer service in a business.',
  'https://source.unsplash.com/random/?kids,customer-service',
  '2',
  'ENTP'
);
SELECT create_topic(
  'Exploring Different Businesses',
  'Learning about various types of businesses and how they function.',
  'https://source.unsplash.com/random/?kids,business-types',
  '2',
  'ENTP'
);
SELECT create_topic(
  'Leadership in Business',
  'Understanding the role and importance of leadership in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,leadership',
  '2',
  'ENTP'
);
---- Level 3 Entrepreneurship (5)
SELECT create_topic(
  'Importance of Networking',
  'Learning about networking and its importance in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,networking',
  '3',
  'ENTP'
);
SELECT create_topic(
  'Market Research Basics',
  'Introduction to market research and how it helps in a business.',
  'https://source.unsplash.com/random/?kids,market-research',
  '3',
  'ENTP'
);
SELECT create_topic(
  'Starting a Small Business',
  'Exploring the steps and considerations in starting a small business.',
  'https://source.unsplash.com/random/?kids,small-business',
  '3',
  'ENTP'
);
SELECT create_topic(
  'Branding and Promotion',
  'Learning about branding and promotion strategies in business.',
  'https://source.unsplash.com/random/?kids,branding',
  '3',
  'ENTP'
);
SELECT create_topic(
  'Business Ethics and Social Responsibility',
  'Deeper understanding of business ethics and the concept of social responsibility in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,ethics',
  '3',
  'ENTP'
);
---- Level 4 Entrepreneurship (5)
SELECT create_topic(
  'Entrepreneurial Finance',
  'A deeper dive into managing finances, raising capital, and funding for businesses.',
  'https://source.unsplash.com/random/?kids,finance',
  '4',
  'ENTP'
);
SELECT create_topic(
  'Business Growth and Strategy',
  'Exploring strategies for growth and expansion in a business.',
  'https://source.unsplash.com/random/?kids,business-growth',
  '4',
  'ENTP'
);
SELECT create_topic(
  'Innovation and Creativity in Business',
  'Understanding the role of innovation and creativity in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,innovation',
  '4',
  'ENTP'
);
SELECT create_topic(
  'Digital Marketing Basics',
  'Introduction to digital marketing and its relevance in modern businesses.',
  'https://source.unsplash.com/random/?kids,digital-marketing',
  '4',
  'ENTP'
);
SELECT create_topic(
  'Understanding Business Laws',
  'An overview of important laws that affect businesses.',
  'https://source.unsplash.com/random/?kids,business-law',
  '4',
  'ENTP'
);
---- Level 5 Entrepreneurship (5)
SELECT create_topic(
  'Advanced Business Planning',
  'Crafting detailed business plans, including financial projections and market analysis.',
  'https://source.unsplash.com/random/?kids,business-plan',
  '5',
  'ENTP'
);
SELECT create_topic(
  'Risk Management in Business',
  'Understanding risks in entrepreneurship and strategies for managing them.',
  'https://source.unsplash.com/random/?kids,risk-management',
  '5',
  'ENTP'
);
SELECT create_topic(
  'Global Entrepreneurship',
  'Exploring the global landscape of entrepreneurship and international business opportunities.',
  'https://source.unsplash.com/random/?kids,global-business',
  '5',
  'ENTP'
);
SELECT create_topic(
  'Entrepreneurship and Sustainability',
  'Learning about sustainable practices in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,sustainability',
  '5',
  'ENTP'
);
SELECT create_topic(
  'Entrepreneurial Leadership',
  'Advanced concepts in leadership and team building in entrepreneurship.',
  'https://source.unsplash.com/random/?kids,leadership',
  '5',
  'ENTP'
);

REFRESH MATERIALIZED VIEW subjects_levels_topics;

-- Pre-K / STEM Subjects for Curriculum
INSERT INTO subjects
(id, code, name, description, image_path)
VALUES
('4eeb92e8-a55b-4398-a7e9-ed616fc4760e', 'L&L', 'Language & Literacy', 'The enchanting journey into the world of letters and words, where imagination takes flight, thoughts gain wings, and communication becomes the bridge between minds.', '/static/images/subjects/language-and-literacy.jpg'),
('21b7556c-4d89-4ae7-b367-f0d3e47a04b3', 'CA', 'Creative Arts', 'An open canvas for the soul‘s expression, transforming thoughts, feelings, and dreams into tangible creations, and making the invisible visible through color, shape, movement, and sound.', '/static/images/subjects/creative-arts.jpg'),
('ed34e97c-5758-4414-933b-f61370a4e7af', 'PD', 'Physical Development', 'The celebration of human movement and agility, cultivating the joy of an active lifestyle while fostering resilience, coordination, and an understanding of the extraordinary capabilities of our bodies.', '/static/images/subjects/physical-development.jpg'),
('01e3f2db-955f-4e21-bd89-dbc37f3f9db0', 'ENGN', 'Engineering', 'The fascinating adventure of designing solutions, turning ideas into reality, and learning through trial and error how to build a better world one creation at a time.', '/static/images/subjects/engineering.jpg'),
('8f223951-90c3-4ff9-9507-bc9faa2495a7', 'CT', 'Critical Thinking & Problem Solving', 'The thrilling quest of untangling complex puzzles, honing the mind to question, analyze, and reason, empowering students to navigate life‘s challenges with confidence and ingenuity.', '/static/images/subjects/critical-thinking.jpg'),
('4db2bb34-1ddb-4416-9186-b72cc58e1e23', 'ES', 'Environmental Studies', 'The captivating exploration of our blue planet, nurturing a deep appreciation for nature‘s delicate balance, and instilling a sense of responsibility to protect and sustain our shared home.', '/static/images/subjects/environmental-studies.jpg'),
('cddb4d31-301a-4f85-adaf-ea9ee6213db3', 'PRG', 'Programming & Robotics', 'The exciting realm where technology and creativity intersect, giving life to ideas through code, and inspiring the inventors, explorers, and innovators of the future.', '/static/images/subjects/robotics.jpg'),
('6bf8cf5f-8c76-4ca8-9e5f-2852fac878d9', 'AST', 'Astronomy', 'The awe-inspiring journey to the stars and beyond, opening young minds to the mysteries of the universe and sparking a sense of wonder that transcends the confines of our earthly existence.', '/static/images/subjects/astronomy.jpg');

-- Curriculums
INSERT INTO curriculums
(id, creator_id, name, description, image_path, status, type, tags, is_public)
VALUES
('90da6f62-ad2f-4402-a965-23b033058ead', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'Little Learners', 'A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration.', '/static/images/subjects/little-learners.jpg', 'PUBLISHED', 'RECOMMENDED', '{"Early Childhood Learning", "Pre-K"}', true),
('379e0f67-65ec-4274-9043-31d7618a69fe', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'Comprehensive K-5', 'An all-encompassing voyage of discovery, fostering academic skills, critical thinking, creativity, and social-emotional learning in a dynamic, student-centered environment.', '/static/images/subjects/k-5.jpg', 'PUBLISHED', 'RECOMMENDED', '{"K-5", "Common Core"}', true),
('c5004381-fe4d-452e-8925-2697159a0e7c', '185f2f83-d63a-4c9b-b4a0-7e4a885799e2', 'STEM K-5', 'A dynamic playground of ideas, immersing students in the realms of science, technology, engineering, and math, encouraging innovative thinking and equipping future world-changers.', '/static/images/subjects/k-5-stem.jpg', 'PUBLISHED', 'POPULAR', '{"STEM", "K-5"}', true);

-- Curriculum Subjects, Levels, Topics, Lessons
--- Little Learners
---- Mathematics
SELECT create_complete_curriculum(
  'Little Learners',
  'b408d3b0-ca53-4385-9c38-388508f6f777'::uuid,
  'CORE'::module_type,
    '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data": [
        {
          "name": "Tiny Tot Numeracy",
          "description": "An enchanting journey into the realm of numbers, fostering the essential counting skills and numeric understanding for our budding geniuses.",
          "image_path": "https://source.unsplash.com/500x500/?math,numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Counting Companions",
              "description": "An engaging lesson on early counting, embedding numbers in daily experiences to make learning natural and fun.",
              "image_path": "https://source.unsplash.com/500x500/?counting",
              "type": "CORE"
            },
            {
              "name": "Shapes Around Us",
              "description": "A playful exploration of basic shapes and their presence in the world around us, nurturing spatial reasoning and perception.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Pattern Parade",
              "description": "A colourful introduction to patterns, fostering cognitive growth and early algebraic thinking.",
              "image_path": "https://source.unsplash.com/500x500/?patterns",
              "type": "CORE"
            },
            {
              "name": "Mini Mathematicians",
              "description": "A fun elective that builds on basic numeracy skills to create a strong foundation for future mathematical concepts.",
              "image_path": "https://source.unsplash.com/500x500/?math",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Sprouting Sums",
          "description": "A delightful adventure into the world of addition and subtraction, building solid arithmetic skills for our sprouting learners.",
          "image_path": "https://source.unsplash.com/500x500/?addition,subtraction",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Addition Adventures",
              "description": "An exciting exploration of addition, turning math into an adventure that inspires curiosity and understanding.",
              "image_path": "https://source.unsplash.com/500x500/?addition",
              "type": "CORE"
            },
            {
              "name": "Subtraction Safari",
              "description": "A fun-filled journey into subtraction, making learning math a thrilling and meaningful experience.",
              "image_path": "https://source.unsplash.com/500x500/?subtraction",
              "type": "CORE"
            },
            {
              "name": "Numbers in Nature",
              "description": "A fascinating study of how numbers appear in our natural environment, nurturing a deeper understanding and appreciation for math.",
              "image_path": "https://source.unsplash.com/500x500/?nature,numbers",
              "type": "CORE"
            },
            {
              "name": "Sums and Stories",
              "description": "An elective that combines math and storytelling, cultivating a love for numbers through immersive and interactive tales.",
              "image_path": "https://source.unsplash.com/500x500/?math,storytelling",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Magical Measurements",
          "description": "A captivating expedition into measurement, enhancing practical understanding and everyday mathematical application for our little learners.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Time Travelers",
              "description": "An interactive introduction to telling time, transforming young learners into confident timekeepers.",
              "image_path": "https://source.unsplash.com/500x500/?clock,time",
              "type": "CORE"
            },
            {
              "name": "Little Length Explorers",
              "description": "A practical exploration of length, height and distance, providing hands-on experience with real world objects.",
              "image_path": "https://source.unsplash.com/500x500/?length",
              "type": "CORE"
            },
            {
              "name": "Wonderful Weights",
              "description": "An engaging introduction to weight and balance, creating a sense of wonder and understanding about everyday objects.",
              "image_path": "https://source.unsplash.com/500x500/?weight",
              "type": "CORE"
            },
            {
              "name": "Measurement Masterminds",
              "description": "An elective that dives deeper into measurement, enabling our little learners to relate mathematical concepts to their world.",
              "image_path": "https://source.unsplash.com/500x500/?measurement",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Fantastic Fractions",
          "description": "A fun-filled exploration of fractions, demystifying them and making them relatable for our near-kindergarten Oaks.",
          "image_path": "https://source.unsplash.com/500x500/?fractions",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Friendly Fractions",
              "description": "An introduction to fractions using familiar, everyday experiences to instill comfort and comprehension.",
              "image_path": "https://source.unsplash.com/500x500/?fraction",
              "type": "CORE"
            },
            {
              "name": "Pizza Portions",
              "description": "An engaging lesson using the context of a pizza to illustrate the concept of fractions in a tangible and appetizing way.",
              "image_path": "https://source.unsplash.com/500x500/?pizza,fractions",
              "type": "CORE"
            },
            {
              "name": "Fraction Fun with Art",
              "description": "An innovative lesson that uses art to demonstrate fractions, making learning visually appealing and fun.",
              "image_path": "https://source.unsplash.com/500x500/?art,fractions",
              "type": "CORE"
            },
            {
              "name": "Fraction Fiesta",
              "description": "An elective where fractions come alive through music and dance, enhancing understanding and enjoyment of fractions.",
              "image_path": "https://source.unsplash.com/500x500/?music,dance,fractions",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Marvelous Money",
          "description": "A practical immersion into the world of money, enabling a fundamental understanding of currency, value, and early financial literacy.",
          "image_path": "https://source.unsplash.com/500x500/?money,currency",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Counting Coins",
              "description": "A fun introduction to coins and their value, promoting counting skills in a real-world context.",
              "image_path": "https://source.unsplash.com/500x500/?coins",
              "type": "CORE"
            },
            {
              "name": "My Little Shop",
              "description": "An interactive lesson where students run their own shop, teaching them about money in an engaging and practical way.",
              "image_path": "https://source.unsplash.com/500x500/?shop",
              "type": "CORE"
            },
            {
              "name": "Saving and Spending",
              "description": "A valuable lesson in saving and spending money wisely, laying the groundwork for lifelong financial literacy.",
              "image_path": "https://source.unsplash.com/500x500/?saving",
              "type": "CORE"
            },
            {
              "name": "Money Magic",
              "description": "An elective that uncovers the magical world of money, stimulating curiosity and comprehension through interactive activities.",
              "image_path": "https://source.unsplash.com/500x500/?money",
              "type": "ELECTIVE"
            }
          ]
        }
      ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data": [
        {
          "name": "Number Novelties",
          "description": "A fascinating exploration of numbers and operations, inspiring confidence and joy in mathematical thinking.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Dynamic Digits",
              "description": "A vibrant dive into the world of numbers, sparking curiosity and numerical proficiency.",
              "image_path": "https://source.unsplash.com/500x500/?digits",
              "type": "CORE"
            },
            {
              "name": "Operation Excitement",
              "description": "A hands-on exploration of basic operations, reinforcing mathematical concepts through fun activities.",
              "image_path": "https://source.unsplash.com/500x500/?operations",
              "type": "CORE"
            },
            {
              "name": "Fantastic Fractions",
              "description": "An intriguing introduction to fractions, making them approachable and exciting.",
              "image_path": "https://source.unsplash.com/500x500/?fractions",
              "type": "CORE"
            },
            {
              "name": "Mathematical Masterpieces",
              "description": "An elective that combines art and numbers, enhancing mathematical understanding through creativity.",
              "image_path": "https://source.unsplash.com/500x500/?math,art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry Gems",
          "description": "A delightful journey into shapes and patterns, developing spatial reasoning and appreciation for geometric beauty.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Shape Searchers",
              "description": "A fun-filled lesson on identifying and creating shapes, promoting observation skills and creativity.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Pattern Puzzles",
              "description": "An engaging exploration of patterns in nature and art, fostering analytical thinking and pattern recognition.",
              "image_path": "https://source.unsplash.com/500x500/?patterns",
              "type": "CORE"
            },
            {
              "name": "Sensational Symmetry",
              "description": "An exciting discovery of symmetry in everyday life, nurturing appreciation for balance and design.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Geometry Artistry",
              "description": "An elective that integrates geometry with art, inspiring creativity and a deeper understanding of shapes and patterns.",
              "image_path": "https://source.unsplash.com/500x500/?geometry,art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurement Marvels",
          "description": "An interactive exploration of length, weight, and time, making abstract concepts tangible and applicable.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Length Legends",
              "description": "A practical dive into the world of length, equipping saplings with essential measuring skills.",
              "image_path": "https://source.unsplash.com/500x500/?length",
              "type": "CORE"
            },
            {
              "name": "Weight Wonders",
              "description": "A captivating investigation of weight, encouraging critical thinking through hands-on experiments.",
              "image_path": "https://source.unsplash.com/500x500/?weight",
              "type": "CORE"
            },
            {
              "name": "Time Trekkers",
              "description": "An engaging lesson on time and its measurement, making sense of the days, hours, and minutes that structure our lives.",
              "image_path": "https://source.unsplash.com/500x500/?time",
              "type": "CORE"
            },
            {
              "name": "Measurement Magic",
              "description": "An elective that makes measurement fun and practical, building foundational skills for everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?measurement",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data Detectives",
          "description": "An enlightening introduction to data and graphs, fostering a sense of curiosity and equipping saplings with tools for informed decision-making.",
          "image_path": "https://source.unsplash.com/500x500/?data",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Graph Gurus",
              "description": "A stimulating exploration of graphs, making data visually exciting and accessible.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Chance Champions",
              "description": "An entertaining look at probability and chance, developing mathematical intuition and an understanding of likelihood.",
              "image_path": "https://source.unsplash.com/500x500/?probability",
              "type": "CORE"
            },
            {
              "name": "Survey Scholars",
              "description": "A practical lesson on conducting surveys and interpreting results, boosting confidence and critical thinking skills.",
              "image_path": "https://source.unsplash.com/500x500/?survey",
              "type": "CORE"
            },
            {
              "name": "Data Wizards",
              "description": "An elective that delves deeper into the world of data, encouraging logical thinking and the ability to draw meaningful conclusions.",
              "image_path": "https://source.unsplash.com/500x500/?data",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Money Matters",
          "description": "An exciting dive into the concept of money, building financial literacy through playful, practical experiences.",
          "image_path": "https://source.unsplash.com/500x500/?money",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Coin Collectors",
              "description": "An interactive introduction to the value and use of coins, fostering understanding and responsible money habits.",
              "image_path": "https://source.unsplash.com/500x500/?coins",
              "type": "CORE"
            },
            {
              "name": "Bill Busters",
              "description": "A dynamic lesson on bills and their value, demystifying paper money and its role in transactions.",
              "image_path": "https://source.unsplash.com/500x500/?bills",
              "type": "CORE"
            },
            {
              "name": "Savvy Savers",
              "description": "A motivating exploration of saving and spending money wisely, laying the groundwork for lifelong financial literacy.",
              "image_path": "https://source.unsplash.com/500x500/?saving",
              "type": "CORE"
            },
            {
              "name": "Little Entrepreneurs",
              "description": "An elective that inspires entrepreneurship, combining creative thinking with basic economic principles for a fun, real-world experience.",
              "image_path": "https://source.unsplash.com/500x500/?entrepreneur",
              "type": "ELECTIVE"
            }
          ]
        }
      ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data": [
        {
          "name": "Number Ninjas",
          "description": "A captivating exploration of numbers and operations, instilling a deep understanding of mathematics and its applications.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Number Whizzes",
              "description": "A dynamic lesson that deepens number sense, sparking curiosity and analytical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?numbers",
              "type": "CORE"
            },
            {
              "name": "Operational Masters",
              "description": "An interactive deep dive into operations, reinforcing mathematical fluency through hands-on activities.",
              "image_path": "https://source.unsplash.com/500x500/?operations",
              "type": "CORE"
            },
            {
              "name": "Fraction Fanatics",
              "description": "An engrossing introduction to fractions and decimals, making them approachable and relatable.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,decimals",
              "type": "CORE"
            },
            {
              "name": "Mathematical Puzzlers",
              "description": "An elective that challenges mathematical reasoning through fun puzzles, promoting critical thinking and problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?math,puzzles",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry Geniuses",
          "description": "An exciting adventure into shapes, patterns and spatial reasoning, building a strong geometric foundation.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Shape Shifters",
              "description": "A stimulating lesson on identifying and creating complex shapes, cultivating observation skills and creative thinking.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Pattern Pros",
              "description": "A fascinating exploration of complex patterns in nature and art, fostering analytical thinking and pattern recognition.",
              "image_path": "https://source.unsplash.com/500x500/?patterns",
              "type": "CORE"
            },
            {
              "name": "Symmetry Savants",
              "description": "A deep dive into symmetry in design and nature, nurturing appreciation for balance and aesthetics.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Geometric Architects",
              "description": "An elective that incorporates architecture and design, inspiring creativity and a comprehensive understanding of geometry.",
              "image_path": "https://source.unsplash.com/500x500/?geometry,architecture",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurement Maestros",
          "description": "A practical exploration of measurement in everyday life, fostering real-world skills and comprehension.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Length Luminaries",
              "description": "A deeper look into the concept of length, empowering Oaks with essential measuring skills.",
              "image_path": "https://source.unsplash.com/500x500/?length",
              "type": "CORE"
            },
            {
              "name": "Weight Wizards",
              "description": "A thorough investigation of weight and its practical applications, encouraging critical thinking through hands-on experiments.",
              "image_path": "https://source.unsplash.com/500x500/?weight",
              "type": "CORE"
            },
            {
              "name": "Time Titans",
              "description": "An advanced lesson on time and its measurement, facilitating a clear understanding of calendars, clocks, and the passage of time.",
              "image_path": "https://source.unsplash.com/500x500/?time",
              "type": "CORE"
            },
            {
              "name": "Measurement Magicians",
              "description": "An elective that makes measurement engaging and practical, building essential skills for everyday life and future learning.",
              "image_path": "https://source.unsplash.com/500x500/?measurement",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data Gurus",
          "description": "A comprehensive introduction to data, graphs, and statistics, instilling a sense of curiosity and the tools for informed decision-making.",
          "image_path": "https://source.unsplash.com/500x500/?data",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Graph Geeks",
              "description": "An advanced exploration of graphs, bringing data to life in visually exciting and accessible ways.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Probability Professors",
              "description": "A comprehensive look at probability and chance, developing a keen understanding of likelihood and mathematical prediction.",
              "image_path": "https://source.unsplash.com/500x500/?probability",
              "type": "CORE"
            },
            {
              "name": "Survey Savants",
              "description": "A practical lesson on creating, conducting, and interpreting complex surveys, boosting confidence and critical thinking skills.",
              "image_path": "https://source.unsplash.com/500x500/?survey",
              "type": "CORE"
            },
            {
              "name": "Data Scientists",
              "description": "An elective that delves into data analytics, fostering logical thinking and the ability to draw insightful conclusions.",
              "image_path": "https://source.unsplash.com/500x500/?data,analytics",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Financial Whizzes",
          "description": "An enlightening exploration of money and economics, instilling financial literacy through engaging, real-world scenarios.",
          "image_path": "https://source.unsplash.com/500x500/?money",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Coin Connoisseurs",
              "description": "A practical lesson on the value and use of different coins and currencies, fostering responsible money habits.",
              "image_path": "https://source.unsplash.com/500x500/?coins",
              "type": "CORE"
            },
            {
              "name": "Bill Buffs",
              "description": "A detailed lesson on bills and their role in financial transactions, demystifying paper money and its value.",
              "image_path": "https://source.unsplash.com/500x500/?bills",
              "type": "CORE"
            },
            {
              "name": "Savings Superstars",
              "description": "An engaging exploration of saving, spending, and investing money wisely, laying the groundwork for lifelong financial literacy.",
              "image_path": "https://source.unsplash.com/500x500/?saving",
              "type": "CORE"
            },
            {
              "name": "Young Economists",
              "description": "An elective that introduces the basic principles of economics, combining critical thinking with fun, real-world activities.",
              "image_path": "https://source.unsplash.com/500x500/?economics",
              "type": "ELECTIVE"
            }
          ]
        }
      ]
    }
  ]'::json
);
---- Science
SELECT create_complete_curriculum(
  'Little Learners',
  '2c0970f3-18fe-491f-879e-82e43d50bb57'::uuid,
  'CORE'::module_type,

  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Budding Biologists",
                "description": "An awe-inspiring journey into the world of living things, instilling a fascination and respect for nature in our youngest scientists.",
                "image_path": "https://source.unsplash.com/500x500/?biology",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Plants and Their Parts",
                        "description": "An introduction to plants and their parts, fostering an early love and appreciation for nature.",
                        "image_path": "https://source.unsplash.com/500x500/?plants",
                        "type": "CORE"
                    },
                    {
                        "name": "Furry Friends",
                        "description": "An exciting exploration of common animals, promoting empathy and understanding of our furry friends.",
                        "image_path": "https://source.unsplash.com/500x500/?animals",
                        "type": "CORE"
                    },
                    {
                        "name": "Incredible Insects",
                        "description": "A fun dive into the world of insects, developing a sense of wonder and curiosity about these tiny creatures.",
                        "image_path": "https://source.unsplash.com/500x500/?insects",
                        "type": "CORE"
                    },
                    {
                        "name": "Nature Detectives",
                        "description": "An elective that encourages outdoor exploration, igniting a lifelong passion for biology and the environment.",
                        "image_path": "https://source.unsplash.com/500x500/?nature",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "My World and Beyond",
                "description": "An enticing adventure into space and the Earth, sparking a sense of awe and wonder about the universe in our budding astronauts.",
                "image_path": "https://source.unsplash.com/500x500/?space,earth",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Little Astronauts",
                        "description": "An exciting introduction to space and the stars, fuelling dreams of interstellar exploration.",
                        "image_path": "https://source.unsplash.com/500x500/?astronaut",
                        "type": "CORE"
                    },
                    {
                        "name": "Marvelous Moon",
                        "description": "A fascinating exploration of the moon and its phases, grounding scientific concepts in everyday experiences.",
                        "image_path": "https://source.unsplash.com/500x500/?moon",
                        "type": "CORE"
                    },
                    {
                        "name": "Our Blue Planet",
                        "description": "A captivating study of Earth and its features, nurturing a love for our planet and its care.",
                        "image_path": "https://source.unsplash.com/500x500/?earth",
                        "type": "CORE"
                    },
                    {
                        "name": "Explorers of the Universe",
                        "description": "An elective that fosters a deeper understanding of space and Earth, inspiring a sense of wonder and discovery.",
                        "image_path": "https://source.unsplash.com/500x500/?space,earth",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Wonderful Weather",
                "description": "An enchanting voyage into the world of weather, enabling an understanding of meteorological phenomena and their daily impact.",
                "image_path": "https://source.unsplash.com/500x500/?weather",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Sunny Days and Cloudy Skies",
                        "description": "An engaging exploration of the sun and clouds, revealing the science behind common weather patterns.",
                        "image_path": "https://source.unsplash.com/500x500/?sun,cloud",
                        "type": "CORE"
                    },
                    {
                        "name": "Rain and Rainbows",
                        "description": "A delightful lesson on rain and rainbows, intertwining science and wonder in everyday phenomena.",
                        "image_path": "https://source.unsplash.com/500x500/?rain,rainbow",
                        "type": "CORE"
                    },
                    {
                        "name": "Wind and Seasons",
                        "description": "A fun investigation into wind and the changing seasons, cultivating an appreciation for the cycle of the year.",
                        "image_path": "https://source.unsplash.com/500x500/?wind,seasons",
                        "type": "CORE"
                    },
                    {
                        "name": "Junior Meteorologists",
                        "description": "An elective that nurtures a deeper understanding of weather, fostering an appreciation for the beauty and power of nature.",
                        "image_path": "https://source.unsplash.com/500x500/?meteorology",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Sensational Scientists",
                "description": "A lively exploration of the five senses, promoting self-awareness and a fundamental understanding of human biology.",
                "image_path": "https://source.unsplash.com/500x500/?senses",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Seeing and Hearing",
                        "description": "An interactive lesson on sight and hearing, unveiling the magic of our sensory experiences.",
                        "image_path": "https://source.unsplash.com/500x500/?eye,ear",
                        "type": "CORE"
                    },
                    {
                        "name": "Touch and Smell",
                        "description": "A tactile journey into touch and smell, connecting children to their environment in a meaningful way.",
                        "image_path": "https://source.unsplash.com/500x500/?touch,smell",
                        "type": "CORE"
                    },
                    {
                        "name": "Tasting Life",
                        "description": "A yummy exploration of taste, enhancing understanding and enjoyment of a variety of flavors.",
                        "image_path": "https://source.unsplash.com/500x500/?taste",
                        "type": "CORE"
                    },
                    {
                        "name": "Sensory Detectives",
                        "description": "An elective that deepens the exploration of senses, encouraging observation, experimentation, and curiosity.",
                        "image_path": "https://source.unsplash.com/500x500/?senses",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Little Physicists",
                "description": "A thrilling dive into the laws of physics, bringing abstract concepts to life through engaging, age-appropriate experiments.",
                "image_path": "https://source.unsplash.com/500x500/?physics",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Fantastic Forces",
                        "description": "An intriguing exploration of force and motion, making everyday interactions exciting and educational.",
                        "image_path": "https://source.unsplash.com/500x500/?force,motion",
                        "type": "CORE"
                    },
                    {
                        "name": "Magnetic Magic",
                        "description": "A fun-filled lesson on magnetism, turning everyday materials into sources of amazement and learning.",
                        "image_path": "https://source.unsplash.com/500x500/?magnet",
                        "type": "CORE"
                    },
                    {
                        "name": "Light and Shadows",
                        "description": "An illuminating study of light and shadows, enhancing perception and understanding of the world.",
                        "image_path": "https://source.unsplash.com/500x500/?light,shadows",
                        "type": "CORE"
                    },
                    {
                        "name": "Physics Fun",
                        "description": "An elective that extends the physics adventure, fostering a love for science through hands-on experiences.",
                        "image_path": "https://source.unsplash.com/500x500/?physics",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Nature Navigators",
                "description": "An enthralling journey into the wonders of the natural world, inspiring curiosity and nurturing a deep appreciation for the environment.",
                "image_path": "https://source.unsplash.com/500x500/?nature",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Plant Pioneers",
                        "description": "A captivating lesson exploring the fascinating world of plants, promoting observation and hands-on interaction with nature.",
                        "image_path": "https://source.unsplash.com/500x500/?plants",
                        "type": "CORE"
                    },
                    {
                        "name": "Animal Adventurers",
                        "description": "An intriguing dive into the diversity of the animal kingdom, stimulating inquiry and respect for all creatures.",
                        "image_path": "https://source.unsplash.com/500x500/?animals",
                        "type": "CORE"
                    },
                    {
                        "name": "Weather Watchers",
                        "description": "An exciting exploration of weather patterns and phenomena, fostering understanding of daily and seasonal changes.",
                        "image_path": "https://source.unsplash.com/500x500/?weather",
                        "type": "CORE"
                    },
                    {
                        "name": "Outdoor Explorers",
                        "description": "An elective that brings learning outdoors, creating a unique platform for experiential, inquiry-based learning.",
                        "image_path": "https://source.unsplash.com/500x500/?outdoors",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Physical Phenomena",
                "description": "A fascinating look at physical processes, instilling a love for scientific investigation and practical understanding.",
                "image_path": "https://source.unsplash.com/500x500/?physics",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Sound Scientists",
                        "description": "An engrossing lesson on the science of sound, encouraging experimentation with waves and vibrations.",
                        "image_path": "https://source.unsplash.com/500x500/?sound",
                        "type": "CORE"
                    },
                    {
                        "name": "Light Leaders",
                        "description": "A captivating exploration of light and color, inspiring creativity and appreciation for visual phenomena.",
                        "image_path": "https://source.unsplash.com/500x500/?light",
                        "type": "CORE"
                    },
                    {
                        "name": "Motion Masters",
                        "description": "A dynamic lesson on the principles of motion and force, making physics tangible and fun.",
                        "image_path": "https://source.unsplash.com/500x500/?motion",
                        "type": "CORE"
                    },
                    {
                        "name": "Invention Inventors",
                        "description": "An elective that fuels innovation, inviting saplings to create their own contraptions while learning about engineering principles.",
                        "image_path": "https://source.unsplash.com/500x500/?invention",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Space Cadets",
                "description": "An inspiring expedition into space, nurturing a sense of wonder and interest in the cosmos.",
                "image_path": "https://source.unsplash.com/500x500/?space",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Solar System Scholars",
                        "description": "An awe-inspiring journey through the solar system, broadening understanding of our celestial neighborhood.",
                        "image_path": "https://source.unsplash.com/500x500/?solar,system",
                        "type": "CORE"
                    },
                    {
                        "name": "Astronomy Enthusiasts",
                        "description": "A deeper dive into the stars and galaxies beyond our solar system, sparking intrigue and a love for astronomy.",
                        "image_path": "https://source.unsplash.com/500x500/?astronomy",
                        "type": "CORE"
                    },
                    {
                        "name": "Rocket Racers",
                        "description": "An exhilarating lesson on rockets and space travel, fostering dreams of exploration and discovery.",
                        "image_path": "https://source.unsplash.com/500x500/?rockets",
                        "type": "CORE"
                    },
                    {
                        "name": "Alien Anthropologists",
                        "description": "An elective that imagines life beyond Earth, stimulating creativity and scientific reasoning through fun, fictional scenarios.",
                        "image_path": "https://source.unsplash.com/500x500/?aliens",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Body Buffs",
                "description": "A comprehensive exploration of the human body and health, fostering self-care and awareness.",
                "image_path": "https://source.unsplash.com/500x500/?body",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Sensory Superstars",
                        "description": "A fun investigation of the five senses, encouraging self-exploration and an understanding of human perception.",
                        "image_path": "https://source.unsplash.com/500x500/?senses",
                        "type": "CORE"
                    },
                    {
                        "name": "Health Heroes",
                        "description": "A vital lesson on health and hygiene, promoting positive habits and personal responsibility.",
                        "image_path": "https://source.unsplash.com/500x500/?health",
                        "type": "CORE"
                    },
                    {
                        "name": "Nutrition Navigators",
                        "description": "An appetizing look at food and nutrition, inspiring healthy choices and a love for cooking.",
                        "image_path": "https://source.unsplash.com/500x500/?nutrition",
                        "type": "CORE"
                    },
                    {
                        "name": "Fitness Fanatics",
                        "description": "An elective that gets saplings moving, teaching the importance of physical fitness through fun exercises and games.",
                        "image_path": "https://source.unsplash.com/500x500/?fitness",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Chemistry Champions",
                "description": "An interactive introduction to chemistry, making scientific concepts exciting and relatable.",
                "image_path": "https://source.unsplash.com/500x500/?chemistry",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Matter Maestros",
                        "description": "A detailed lesson on the states of matter, offering hands-on experiments to solidify understanding.",
                        "image_path": "https://source.unsplash.com/500x500/?matter",
                        "type": "CORE"
                    },
                    {
                        "name": "Reaction Rangers",
                        "description": "An exhilarating exploration of chemical reactions, sparking curiosity through fun, safe experiments.",
                        "image_path": "https://source.unsplash.com/500x500/?reaction",
                        "type": "CORE"
                    },
                    {
                        "name": "Solution Sleuths",
                        "description": "A practical lesson on solutions, mixtures, and separations, promoting investigation and analytical thinking.",
                        "image_path": "https://source.unsplash.com/500x500/?solution",
                        "type": "CORE"
                    },
                    {
                        "name": "Kitchen Chemists",
                        "description": "An elective that brings chemistry to the kitchen, demonstrating scientific principles through edible experiments.",
                        "image_path": "https://source.unsplash.com/500x500/?kitchen",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Ecosystem Experts",
                "description": "A deep dive into the wonders of various ecosystems, fostering respect for biodiversity and environmental conservation.",
                "image_path": "https://source.unsplash.com/500x500/?ecosystem",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Forest Fact-finders",
                        "description": "An immersive journey into the forests of the world, inspiring a deeper understanding of these crucial ecosystems.",
                        "image_path": "https://source.unsplash.com/500x500/?forest",
                        "type": "CORE"
                    },
                    {
                        "name": "Ocean Observers",
                        "description": "A captivating exploration of the ocean‘s depths, stirring curiosity and respect for marine life.",
                        "image_path": "https://source.unsplash.com/500x500/?ocean",
                        "type": "CORE"
                    },
                    {
                        "name": "Desert Detectives",
                        "description": "A fascinating investigation of desert environments, highlighting the adaptability and resilience of life.",
                        "image_path": "https://source.unsplash.com/500x500/?desert",
                        "type": "CORE"
                    },
                    {
                        "name": "Rainforest Researchers",
                        "description": "An elective that ventures into the lush rainforests, fostering a keen interest in biodiversity and conservation.",
                        "image_path": "https://source.unsplash.com/500x500/?rainforest",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Elementary Engineers",
                "description": "A comprehensive exploration of engineering principles, sparking creativity and problem-solving through exciting design challenges.",
                "image_path": "https://source.unsplash.com/500x500/?engineering",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Structure Strategists",
                        "description": "A hands-on lesson on the science behind structures, encouraging imaginative design and practical understanding.",
                        "image_path": "https://source.unsplash.com/500x500/?structure",
                        "type": "CORE"
                    },
                    {
                        "name": "Mechanical Maestros",
                        "description": "A dynamic exploration of mechanical systems and simple machines, making physics practical and engaging.",
                        "image_path": "https://source.unsplash.com/500x500/?mechanics",
                        "type": "CORE"
                    },
                    {
                        "name": "Electrical Enthusiasts",
                        "description": "An electrifying lesson on circuits and electricity, promoting safe experimentation and technological literacy.",
                        "image_path": "https://source.unsplash.com/500x500/?electricity",
                        "type": "CORE"
                    },
                    {
                        "name": "Robotics Rangers",
                        "description": "An elective that dives into the world of robotics, stimulating critical thinking and creativity with engaging coding challenges.",
                        "image_path": "https://source.unsplash.com/500x500/?robotics",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Quantum Questers",
                "description": "An exciting introduction to the quantum world, fostering curiosity and a thirst for discovery in advanced science.",
                "image_path": "https://source.unsplash.com/500x500/?quantum",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Atom Investigators",
                        "description": "An in-depth look at atoms and particles, sparking a sense of wonder at the building blocks of the universe.",
                        "image_path": "https://source.unsplash.com/500x500/?atom",
                        "type": "CORE"
                    },
                    {
                        "name": "Photon Fanatics",
                        "description": "A bright exploration of light and photonics, offering insight into the crucial role of light in modern technology.",
                        "image_path": "https://source.unsplash.com/500x500/?photon",
                        "type": "CORE"
                    },
                    {
                        "name": "Energy Explorers",
                        "description": "A comprehensive lesson on energy and its transformations, equipping students with an essential understanding of scientific principles.",
                        "image_path": "https://source.unsplash.com/500x500/?energy",
                        "type": "CORE"
                    },
                    {
                        "name": "Future Physicists",
                        "description": "An elective that peeks into the future of physics, inspiring awe and ambition with cutting-edge science topics.",
                        "image_path": "https://source.unsplash.com/500x500/?future,physics",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Bio Buddies",
                "description": "An engaging journey through the life sciences, cultivating a love for biology and the complexity of life.",
                "image_path": "https://source.unsplash.com/500x500/?biology",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Cell Specialists",
                        "description": "A microscopic adventure into the world of cells, illuminating the inner workings of life on a minute scale.",
                        "image_path": "https://source.unsplash.com/500x500/?cells",
                        "type": "CORE"
                    },
                    {
                        "name": "DNA Detectives",
                        "description": "A fascinating investigation into DNA and genetics, fostering appreciation for diversity and the wonder of inheritance.",
                        "image_path": "https://source.unsplash.com/500x500/?DNA",
                        "type": "CORE"
                    },
                    {
                        "name": "Ecology Enthusiasts",
                        "description": "An enlightening lesson on ecology and the interconnectedness of life, promoting environmental stewardship and global awareness.",
                        "image_path": "https://source.unsplash.com/500x500/?ecology",
                        "type": "CORE"
                    },
                    {
                        "name": "Evolution Experts",
                        "description": "An elective that explores the theory of evolution, inspiring a sense of awe at the vast scale of biological history.",
                        "image_path": "https://source.unsplash.com/500x500/?evolution",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Geo Geniuses",
                "description": "A stimulating journey through the earth sciences, cultivating respect for the planet and its dynamic nature.",
                "image_path": "https://source.unsplash.com/500x500/?geology",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Rock Researchers",
                        "description": "A hands-on exploration of rocks and minerals, fostering appreciation for the solid foundations of our planet.",
                        "image_path": "https://source.unsplash.com/500x500/?rocks",
                        "type": "CORE"
                    },
                    {
                        "name": "Volcano Voyagers",
                        "description": "A thrilling investigation of volcanoes and tectonic activity, bringing earth science to life with explosive fun.",
                        "image_path": "https://source.unsplash.com/500x500/?volcano",
                        "type": "CORE"
                    },
                    {
                        "name": "Climate Champions",
                        "description": "An essential lesson on climate and weather, promoting environmental literacy and stewardship.",
                        "image_path": "https://source.unsplash.com/500x500/?climate",
                        "type": "CORE"
                    },
                    {
                        "name": "Paleontology Pioneers",
                        "description": "An elective that delves into the world of fossils and prehistoric life, sparking a fascination for earth‘s ancient past.",
                        "image_path": "https://source.unsplash.com/500x500/?fossils",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);
---- Language & Literacy
SELECT create_complete_curriculum(
  'Little Learners',
  '4eeb92e8-a55b-4398-a7e9-ed616fc4760e'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Alphabet Adventure",
                "description": "Embark on a magical journey through the alphabet, fostering the first steps of literacy in an imaginative and engaging way.",
                "image_path": "https://source.unsplash.com/500x500/?alphabet",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "A to Z Fun",
                        "description": "Introducing all 26 letters, their sounds and shapes, with interactive games and songs.",
                        "image_path": "https://source.unsplash.com/500x500/?alphabet",
                        "type": "CORE"
                    },
                    {
                        "name": "Letter Recognition",
                        "description": "Spotting letters in a variety of contexts to solidify their recognition and enhance visual memory.",
                        "image_path": "https://source.unsplash.com/500x500/?letters",
                        "type": "CORE"
                    },
                    {
                        "name": "Alphabet Crafts",
                        "description": "Creating hands-on crafts themed around letters, fostering fine motor skills and letter familiarity.",
                        "image_path": "https://source.unsplash.com/500x500/?crafts",
                        "type": "CORE"
                    },
                    {
                        "name": "Alphabet Storytime",
                        "description": "Engaging tales that highlight different letters, encouraging a love for stories and language.",
                        "image_path": "https://source.unsplash.com/500x500/?storytime",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Word Wonderland",
                "description": "Enter the fascinating world of words, building essential vocabulary and nurturing language comprehension.",
                "image_path": "https://source.unsplash.com/500x500/?vocabulary",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Picture Dictionary",
                        "description": "Explore words through colorful pictures, promoting visual learning and word association.",
                        "image_path": "https://source.unsplash.com/500x500/?dictionary",
                        "type": "CORE"
                    },
                    {
                        "name": "Word Family Fun",
                        "description": "Discover word families through rhymes and stories, laying a foundation for phonics and reading.",
                        "image_path": "https://source.unsplash.com/500x500/?word-families",
                        "type": "CORE"
                    },
                    {
                        "name": "Everyday Vocabulary",
                        "description": "Learn common words in different contexts, enhancing communication skills and comprehension.",
                        "image_path": "https://source.unsplash.com/500x500/?vocabulary",
                        "type": "CORE"
                    },
                    {
                        "name": "Storytelling Time",
                        "description": "Listen to captivating stories that introduce new words, fostering a love of literature and imagination.",
                        "image_path": "https://source.unsplash.com/500x500/?storytelling",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
              "name": "Sounds and Phonics Play",
              "description": "Experience the melody of language, diving into sounds and phonics that strengthen the building blocks of literacy.",
              "image_path": "https://source.unsplash.com/500x500/?phonics",
              "type": "CORE",
              "lessons_data": [
                  {
                      "name": "Phonic Fun",
                      "description": "Learning the sounds of letters and blending them together to create words.",
                      "image_path": "https://source.unsplash.com/500x500/?phonics",
                      "type": "CORE"
                  },
                  {
                      "name": "Sound Matching",
                      "description": "Matching words that start with the same sound to develop phonemic awareness.",
                      "image_path": "https://source.unsplash.com/500x500/?sound-matching",
                      "type": "CORE"
                  },
                  {
                      "name": "Rhyme Time",
                      "description": "Engaging in rhymes to recognize phonetic patterns and promote auditory skills.",
                      "image_path": "https://source.unsplash.com/500x500/?rhymes",
                      "type": "CORE"
                  },
                  {
                      "name": "Silly Phonics Games",
                      "description": "Playing interactive games that encourage learning phonics in a fun, playful way.",
                      "image_path": "https://source.unsplash.com/500x500/?phonics-games",
                      "type": "ELECTIVE"
                  }
              ]
          },
          {
              "name": "Speak and Listen",
              "description": "Fostering effective communication by focusing on essential speaking and listening skills in a nurturing, interactive environment.",
              "image_path": "https://source.unsplash.com/500x500/?communication",
              "type": "CORE",
              "lessons_data": [
                  {
                      "name": "Show and Tell",
                      "description": "Promoting self-expression and confidence by sharing thoughts and ideas with peers.",
                      "image_path": "https://source.unsplash.com/500x500/?show-and-tell",
                      "type": "CORE"
                  },
                  {
                      "name": "Story Listening",
                      "description": "Enhancing comprehension and attention by listening to and discussing stories.",
                      "image_path": "https://source.unsplash.com/500x500/?listening",
                      "type": "CORE"
                  },
                  {
                      "name": "Puppet Conversation",
                      "description": "Using puppets to simulate conversations and encourage verbal interaction.",
                      "image_path": "https://source.unsplash.com/500x500/?puppets",
                      "type": "CORE"
                  },
                  {
                      "name": "Musical Communication",
                      "description": "Exploring sounds, rhythms, and patterns in music to enhance listening skills and language development.",
                      "image_path": "https://source.unsplash.com/500x500/?music",
                      "type": "ELECTIVE"
                  }
              ]
          },
          {
              "name": "Creative Storytelling",
              "description": "Unleashing the power of imagination through storytelling, encouraging creative thinking and enhancing language development.",
              "image_path": "https://source.unsplash.com/500x500/?storytelling",
              "type": "ELECTIVE",
              "lessons_data": [
                  {
                      "name": "Story Creation",
                      "description": "Creating unique stories using prompts and imagination, stimulating creative thinking and narrative skills.",
                      "image_path": "https://source.unsplash.com/500x500/?story-creation",
                      "type": "CORE"
                  },
                  {
                      "name": "Interactive Storytelling",
                      "description": "Participating in interactive stories that involve role-play, enhancing comprehension and social skills.",
                      "image_path": "https://source.unsplash.com/500x500/?interactive-story",
                      "type": "CORE"
                  },
                  {
                      "name": "Draw and Tell",
                      "description": "Drawing scenes from a story to visualize narratives and enhance comprehension.",
                      "image_path": "https://source.unsplash.com/500x500/?draw-and-tell",
                      "type": "CORE"
                  },
                  {
                      "name": "Storytelling with Puppets",
                      "description": "Using puppets to tell stories, encouraging creative expression and imagination.",
                      "image_path": "https://source.unsplash.com/500x500/?puppet-story",
                      "type": "ELECTIVE"
                  }
              ]
          }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Word Wizards",
                "description": "Mastering the magic of words, promoting reading readiness and comprehension through fun, interactive activities.",
                "image_path": "https://source.unsplash.com/500x500/?words",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Sight Word Safari",
                        "description": "Navigating the world of sight words to promote reading fluency and comprehension.",
                        "image_path": "https://source.unsplash.com/500x500/?sight-words",
                        "type": "CORE"
                    },
                    {
                        "name": "Vocabulary Voyage",
                        "description": "Embarking on an exciting journey through vocabulary, enhancing language skills and understanding.",
                        "image_path": "https://source.unsplash.com/500x500/?vocabulary",
                        "type": "CORE"
                    },
                    {
                        "name": "Word Detectives",
                        "description": "Solving word mysteries through context clues, promoting critical thinking and comprehension.",
                        "image_path": "https://source.unsplash.com/500x500/?detective",
                        "type": "CORE"
                    },
                    {
                        "name": "Creative Word Play",
                        "description": "Playing games that encourage creativity and word exploration, fostering a love for language.",
                        "image_path": "https://source.unsplash.com/500x500/?word-play",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Phonic Phantoms",
                "description": "Embarking on a phonics quest, strengthening the link between sounds and letter symbols to lay a strong foundation for reading.",
                "image_path": "https://source.unsplash.com/500x500/?phonics",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Sound Scavenger Hunt",
                        "description": "Hunting for sounds in the environment, enhancing phonemic awareness and observation skills.",
                        "image_path": "https://source.unsplash.com/500x500/?sound-hunt",
                        "type": "CORE"
                    },
                    {
                        "name": "Phonics Puzzle",
                        "description": "Solving phonics puzzles to recognize patterns in words, promoting reading readiness.",
                        "image_path": "https://source.unsplash.com/500x500/?puzzle",
                        "type": "CORE"
                    },
                    {
                        "name": "Blending and Segmenting",
                        "description": "Learning to blend sounds to form words and segment words into sounds, critical skills for reading and spelling.",
                        "image_path": "https://source.unsplash.com/500x500/?phonics",
                        "type": "CORE"
                    },
                    {
                        "name": "Rhyme Rhythm",
                        "description": "Exploring the rhythm of language through rhymes, fostering phonemic awareness and musicality.",
                        "image_path": "https://source.unsplash.com/500x500/?rhymes",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Reading Rangers",
                "description": "Setting forth on a reading adventure, fostering a love for books and enhancing decoding skills.",
                "image_path": "https://source.unsplash.com/500x500/?reading",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Story Explorers",
                        "description": "Exploring stories, developing comprehension, prediction skills and a love for literature.",
                        "image_path": "https://source.unsplash.com/500x500/?story-explorers",
                        "type": "CORE"
                    },
                    {
                        "name": "Picture Clue",
                        "description": "Using picture clues to predict and understand text, fostering comprehension and visual literacy.",
                        "image_path": "https://source.unsplash.com/500x500/?picture-clue",
                        "type": "CORE"
                    },
                    {
                        "name": "Emergent Reader",
                        "description": "Navigating simple, beginner books, building confidence and fostering a love for independent reading.",
                        "image_path": "https://source.unsplash.com/500x500/?books",
                        "type": "CORE"
                    },
                    {
                        "name": "Reading Theater",
                        "description": "Performing stories to develop reading fluency, comprehension and confidence.",
                        "image_path": "https://source.unsplash.com/500x500/?theater",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Write and Wonder",
                "description": "Exploring the art of writing, promoting creativity, fine motor skills, and self-expression.",
                "image_path": "https://source.unsplash.com/500x500/?writing",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Letter Formation Fun",
                        "description": "Practicing letter formations through fun and interactive activities, enhancing handwriting skills.",
                        "image_path": "https://source.unsplash.com/500x500/?letter-formation",
                        "type": "CORE"
                    },
                    {
                        "name": "My First Sentences",
                        "description": "Writing simple sentences, fostering an understanding of sentence structure and promoting self-expression.",
                        "image_path": "https://source.unsplash.com/500x500/?sentences",
                        "type": "CORE"
                    },
                    {
                        "name": "Creative Writing Prompts",
                        "description": "Expressing thoughts and ideas through guided writing prompts, nurturing creativity and written expression.",
                        "image_path": "https://source.unsplash.com/500x500/?creative-writing",
                        "type": "CORE"
                    },
                    {
                        "name": "Story Scribe",
                        "description": "Crafting unique stories to nurture creativity, writing skills, and a love for storytelling.",
                        "image_path": "https://source.unsplash.com/500x500/?story-writing",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Listen and Learn",
                "description": "Sharpening listening skills, fostering effective communication, comprehension, and social interaction.",
                "image_path": "https://source.unsplash.com/500x500/?listening",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Listening Games",
                        "description": "Playing games that focus on listening skills, fostering concentration and auditory processing.",
                        "image_path": "https://source.unsplash.com/500x500/?listening-games",
                        "type": "CORE"
                    },
                    {
                        "name": "Follow Instructions",
                        "description": "Practicing following instructions to develop comprehension, attention, and social skills.",
                        "image_path": "https://source.unsplash.com/500x500/?instructions",
                        "type": "CORE"
                    },
                    {
                        "name": "Story Listening",
                        "description": "Listening to stories and discussing them to enhance comprehension, vocabulary, and critical thinking.",
                        "image_path": "https://source.unsplash.com/500x500/?story-listening",
                        "type": "CORE"
                    },
                    {
                        "name": "Sound Exploration",
                        "description": "Exploring the world of sounds to foster phonemic awareness and appreciation for music and nature.",
                        "image_path": "https://source.unsplash.com/500x500/?sound-exploration",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Reading Resilience",
                "description": "Venturing into the world of complex texts, fostering advanced reading comprehension, fluency, and resilience.",
                "image_path": "https://source.unsplash.com/500x500/?reading",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Book Buddies",
                        "description": "Exploring a variety of texts and discussing themes, plot, and characters with peers.",
                        "image_path": "https://source.unsplash.com/500x500/?book-buddies",
                        "type": "CORE"
                    },
                    {
                        "name": "Read and Reflect",
                        "description": "Reading stories and reflecting on their meanings, developing critical thinking and comprehension skills.",
                        "image_path": "https://source.unsplash.com/500x500/?read-and-reflect",
                        "type": "CORE"
                    },
                    {
                        "name": "Fluent Reader",
                        "description": "Practicing reading fluency through repeated reading and feedback.",
                        "image_path": "https://source.unsplash.com/500x500/?fluent-reader",
                        "type": "CORE"
                    },
                    {
                        "name": "Dramatic Reading",
                        "description": "Expressing emotions and interpreting character‘s actions through dramatic readings, fostering comprehension and expressiveness.",
                        "image_path": "https://source.unsplash.com/500x500/?dramatic-reading",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Writing Wonders",
                "description": "Exploring diverse writing forms and techniques to express thoughts and ideas creatively and effectively.",
                "image_path": "https://source.unsplash.com/500x500/?writing",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Writing Workshop",
                        "description": "Engaging in a variety of writing tasks to learn different genres and writing techniques.",
                        "image_path": "https://source.unsplash.com/500x500/?writing-workshop",
                        "type": "CORE"
                    },
                    {
                        "name": "Peer Editing",
                        "description": "Sharing and reviewing each other‘s work to improve writing and learn constructive feedback.",
                        "image_path": "https://source.unsplash.com/500x500/?peer-editing",
                        "type": "CORE"
                    },
                    {
                        "name": "Writing Prompts",
                        "description": "Responding to writing prompts to stimulate creativity and develop written expression.",
                        "image_path": "https://source.unsplash.com/500x500/?writing-prompts",
                        "type": "CORE"
                    },
                    {
                        "name": "Journal Journey",
                        "description": "Maintaining a daily journal to develop writing fluency and self-expression.",
                        "image_path": "https://source.unsplash.com/500x500/?journal",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Vocabulary Voyage",
                "description": "Embarking on a voyage into the world of words, enhancing vocabulary and language understanding.",
                "image_path": "https://source.unsplash.com/500x500/?vocabulary",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Word Wonder",
                        "description": "Learning new words and their meanings through engaging activities and discussions.",
                        "image_path": "https://source.unsplash.com/500x500/?word-wonder",
                        "type": "CORE"
                    },
                    {
                        "name": "Context Clues",
                        "description": "Using context clues to infer the meaning of unfamiliar words, promoting critical thinking and reading comprehension.",
                        "image_path": "https://source.unsplash.com/500x500/?context-clues",
                        "type": "CORE"
                    },
                    {
                        "name": "Word of the Day",
                        "description": "Introducing a new word each day to expand vocabulary and enhance language understanding.",
                        "image_path": "https://source.unsplash.com/500x500/?word-of-the-day",
                        "type": "CORE"
                    },
                    {
                        "name": "Language Ladders",
                        "description": "Creating word ladders to learn synonyms and antonyms, expanding vocabulary and understanding of language nuances.",
                        "image_path": "https://source.unsplash.com/500x500/?language-ladders",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Speak with Confidence",
                "description": "Developing effective speaking skills, fostering self-confidence and effective communication.",
                "image_path": "https://source.unsplash.com/500x500/?speaking",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Show and Tell",
                        "description": "Sharing personal items or stories, promoting public speaking skills and social interaction.",
                        "image_path": "https://source.unsplash.com/500x500/?show-and-tell",
                        "type": "CORE"
                    },
                    {
                        "name": "Discussion Circles",
                        "description": "Participating in group discussions on various topics to enhance speaking skills and critical thinking.",
                        "image_path": "https://source.unsplash.com/500x500/?discussion-circles",
                        "type": "CORE"
                    },
                    {
                        "name": "Role Play",
                        "description": "Engaging in role-play to enhance speaking skills, creativity, and empathy.",
                        "image_path": "https://source.unsplash.com/500x500/?role-play",
                        "type": "CORE"
                    },
                    {
                        "name": "Speech Craft",
                        "description": "Creating and delivering short speeches to build confidence and effective communication skills.",
                        "image_path": "https://source.unsplash.com/500x500/?speech",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Listen and Understand",
                "description": "Honing listening skills for advanced comprehension and effective communication.",
                "image_path": "https://source.unsplash.com/500x500/?listening",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Listen and Draw",
                        "description": "Listening to descriptions and drawing them to enhance comprehension and visualization skills.",
                        "image_path": "https://source.unsplash.com/500x500/?listen-and-draw",
                        "type": "CORE"
                    },
                    {
                        "name": "Sound Stories",
                        "description": "Creating and interpreting stories based on sound cues to promote auditory processing and creativity.",
                        "image_path": "https://source.unsplash.com/500x500/?sound-stories",
                        "type": "CORE"
                    },
                    {
                        "name": "Audiobook Adventure",
                        "description": "Listening to audiobooks to enhance comprehension, listening skills, and appreciation for literature.",
                        "image_path": "https://source.unsplash.com/500x500/?audiobook",
                        "type": "CORE"
                    },
                    {
                        "name": "Musical Exploration",
                        "description": "Exploring music to understand rhythm, melody, and expressiveness in language.",
                        "image_path": "https://source.unsplash.com/500x500/?music",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);
---- Social Studies
SELECT create_complete_curriculum(
  'Little Learners',
  'cdc09ea6-6e30-4550-9d1d-4b7a30d376d5'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Our Community",
                "description": "Introducing the diverse roles and relationships within our community, sparking curiosity and respect.",
                "image_path": "https://source.unsplash.com/500x500/?community",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Community Helpers",
                        "description": "Exploring the roles of various community helpers and how they contribute to our daily lives.",
                        "image_path": "https://source.unsplash.com/500x500/?community-helpers",
                        "type": "CORE"
                    },
                    {
                        "name": "Family Ties",
                        "description": "Recognizing and appreciating the different members of the family and the roles they play.",
                        "image_path": "https://source.unsplash.com/500x500/?family",
                        "type": "CORE"
                    },
                    {
                        "name": "Neighborhood Exploration",
                        "description": "Learning about the different places and spaces in our neighborhood and their purposes.",
                        "image_path": "https://source.unsplash.com/500x500/?neighborhood",
                        "type": "CORE"
                    },
                    {
                        "name": "Play Pretend",
                        "description": "Role-playing as different community helpers to understand their importance and responsibilities.",
                        "image_path": "https://source.unsplash.com/500x500/?role-play",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Wondrous World",
                "description": "Fostering an appreciation for the diverse world around us, from nature to different cultures.",
                "image_path": "https://source.unsplash.com/500x500/?world",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Nature Walk",
                        "description": "Discovering the wonders of nature around us, from plants to animals to the weather.",
                        "image_path": "https://source.unsplash.com/500x500/?nature-walk",
                        "type": "CORE"
                    },
                    {
                        "name": "Festivals Around the World",
                        "description": "Learning about different festivals celebrated around the world, fostering cultural understanding.",
                        "image_path": "https://source.unsplash.com/500x500/?festivals",
                        "type": "CORE"
                    },
                    {
                        "name": "Land and Water",
                        "description": "Introducing the basic concepts of land and water, their importance, and conservation.",
                        "image_path": "https://source.unsplash.com/500x500/?land-water",
                        "type": "CORE"
                    },
                    {
                        "name": "Globe Trotters",
                        "description": "Exploring different countries and their unique aspects through virtual trips.",
                        "image_path": "https://source.unsplash.com/500x500/?globe-trotters",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Time Travellers",
                "description": "Understanding the concept of time and exploring significant events and personal histories.",
                "image_path": "https://source.unsplash.com/500x500/?time",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Daily Routines",
                        "description": "Recognizing the sequence of daily activities and the concept of time.",
                        "image_path": "https://source.unsplash.com/500x500/?daily-routines",
                        "type": "CORE"
                    },
                    {
                        "name": "Seasons and Festivals",
                        "description": "Learning about the cycle of seasons and the different festivals associated with each.",
                        "image_path": "https://source.unsplash.com/500x500/?seasons-festivals",
                        "type": "CORE"
                    },
                    {
                        "name": "My Life Story",
                        "description": "Creating a personal timeline to understand the concept of past, present, and future.",
                        "image_path": "https://source.unsplash.com/500x500/?life-story",
                        "type": "CORE"
                    },
                    {
                        "name": "Famous Figures",
                        "description": "Learning about historical figures through stories and role-play.",
                        "image_path": "https://source.unsplash.com/500x500/?famous-figures",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Money Matters",
                "description": "Introducing the basic concept of money, its use, and the value of different coins and notes.",
                "image_path": "https://source.unsplash.com/500x500/?money",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Coin Recognition",
                        "description": "Recognizing different coins and understanding their values.",
                        "image_path": "https://source.unsplash.com/500x500/?coins",
                        "type": "CORE"
                    },
                    {
                        "name": "Money Exchange",
                        "description": "Understanding the concept of buying and selling through play-based activities.",
                        "image_path": "https://source.unsplash.com/500x500/?money-exchange",
                        "type": "CORE"
                    },
                    {
                        "name": "Needs and Wants",
                        "description": "Differentiating between needs and wants to promote responsible spending habits.",
                        "image_path": "https://source.unsplash.com/500x500/?needs-wants",
                        "type": "CORE"
                    },
                    {
                        "name": "Let‘s Go Shopping",
                        "description": "Engaging in pretend play to reinforce concepts of money and buying.",
                        "image_path": "https://source.unsplash.com/500x500/?shopping",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Maps and Directions",
                "description": "Understanding basic spatial concepts, directions, and introductory map skills.",
                "image_path": "https://source.unsplash.com/500x500/?maps",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Shapes in Our World",
                        "description": "Identifying and relating shapes to objects in our environment.",
                        "image_path": "https://source.unsplash.com/500x500/?shapes",
                        "type": "CORE"
                    },
                    {
                        "name": "Left and Right",
                        "description": "Mastering the concepts of left and right through fun activities and songs.",
                        "image_path": "https://source.unsplash.com/500x500/?left-right",
                        "type": "CORE"
                    },
                    {
                        "name": "My First Map",
                        "description": "Creating a simple map of a familiar place like home or classroom.",
                        "image_path": "https://source.unsplash.com/500x500/?map",
                        "type": "CORE"
                    },
                    {
                        "name": "Treasure Hunt",
                        "description": "Using directions and simple maps to find hidden treasures in a fun and engaging activity.",
                        "image_path": "https://source.unsplash.com/500x500/?treasure-hunt",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Building Communities",
                "description": "Cultivating an understanding of the diversity and interdependence within our local and global communities.",
                "image_path": "https://source.unsplash.com/500x500/?communities",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Community Leaders",
                        "description": "Exploring the roles of community leaders and their impact on our neighborhoods.",
                        "image_path": "https://source.unsplash.com/500x500/?community-leaders",
                        "type": "CORE"
                    },
                    {
                        "name": "Civic Responsibilities",
                        "description": "Understanding basic civic responsibilities and how we contribute to our community.",
                        "image_path": "https://source.unsplash.com/500x500/?civic-responsibilities",
                        "type": "CORE"
                    },
                    {
                        "name": "Global Citizens",
                        "description": "Discussing what it means to be a global citizen and how we can respect diverse cultures.",
                        "image_path": "https://source.unsplash.com/500x500/?global-citizens",
                        "type": "CORE"
                    },
                    {
                        "name": "Caring for Our Community",
                        "description": "Engaging in projects that care for our community and environment.",
                        "image_path": "https://source.unsplash.com/500x500/?community-care",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Exploring Our World",
                "description": "Cultivating a sense of wonder and respect for the diverse world around us, from environments to cultures.",
                "image_path": "https://source.unsplash.com/500x500/?exploring-world",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Geography Gems",
                        "description": "Discovering key geographical features of the world and their significance.",
                        "image_path": "https://source.unsplash.com/500x500/?geography-gems",
                        "type": "CORE"
                    },
                    {
                        "name": "Cultural Celebrations",
                        "description": "Understanding different cultural celebrations around the world, promoting inclusivity and respect.",
                        "image_path": "https://source.unsplash.com/500x500/?cultural-celebrations",
                        "type": "CORE"
                    },
                    {
                        "name": "Environmental Awareness",
                        "description": "Learning about different environments and the importance of conservation.",
                        "image_path": "https://source.unsplash.com/500x500/?environmental-awareness",
                        "type": "CORE"
                    },
                    {
                        "name": "World Art",
                        "description": "Exploring art from different cultures, fostering cultural appreciation and creative expression.",
                        "image_path": "https://source.unsplash.com/500x500/?world-art",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Journey Through Time",
                "description": "Developing a sense of time, from understanding historical events to envisioning the future.",
                "image_path": "https://source.unsplash.com/500x500/?journey-time",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Historical Events",
                        "description": "Understanding significant historical events and their impact through engaging stories.",
                        "image_path": "https://source.unsplash.com/500x500/?historical-events",
                        "type": "CORE"
                    },
                    {
                        "name": "Inventions and Innovations",
                        "description": "Learning about key inventions and innovations that have shaped our world.",
                        "image_path": "https://source.unsplash.com/500x500/?inventions",
                        "type": "CORE"
                    },
                    {
                        "name": "Predicting the Future",
                        "description": "Envisioning the future based on trends and developments in science and technology.",
                        "image_path": "https://source.unsplash.com/500x500/?predicting-future",
                        "type": "CORE"
                    },
                    {
                        "name": "Time Capsule",
                        "description": "Creating a time capsule to understand the concept of preserving history for future generations.",
                        "image_path": "https://source.unsplash.com/500x500/?time-capsule",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Financial Foundations",
                "description": "Introducing fundamental concepts of economics, money management, and responsible consumption.",
                "image_path": "https://source.unsplash.com/500x500/?financial-foundations",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Earning and Spending",
                        "description": "Understanding the concept of earning money and responsible spending.",
                        "image_path": "https://source.unsplash.com/500x500/?earning-spending",
                        "type": "CORE"
                    },
                    {
                        "name": "Saving and Sharing",
                        "description": "Learning about the importance of saving money and sharing with those in need.",
                        "image_path": "https://source.unsplash.com/500x500/?saving-sharing",
                        "type": "CORE"
                    },
                    {
                        "name": "Jobs and Professions",
                        "description": "Exploring different professions and how they contribute to the economy.",
                        "image_path": "https://source.unsplash.com/500x500/?jobs-professions",
                        "type": "CORE"
                    },
                    {
                        "name": "Market Day",
                        "description": "Setting up a mini-market to apply learned economic concepts in a fun, engaging way.",
                        "image_path": "https://source.unsplash.com/500x500/?market-day",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Navigating Spaces",
                "description": "Enhancing spatial awareness, understanding of maps, and appreciation for different landscapes.",
                "image_path": "https://source.unsplash.com/500x500/?navigating-spaces",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Map Making",
                        "description": "Creating detailed maps of familiar spaces to enhance spatial awareness and mapping skills.",
                        "image_path": "https://source.unsplash.com/500x500/?map-making",
                        "type": "CORE"
                    },
                    {
                        "name": "Landforms and Landscapes",
                        "description": "Exploring different landforms and landscapes around the world.",
                        "image_path": "https://source.unsplash.com/500x500/?landforms",
                        "type": "CORE"
                    },
                    {
                        "name": "Exploring Directions",
                        "description": "Understanding cardinal directions and their application in navigation.",
                        "image_path": "https://source.unsplash.com/500x500/?exploring-directions",
                        "type": "CORE"
                    },
                    {
                        "name": "GeoQuest",
                        "description": "Participating in a geography-themed treasure hunt to apply learned skills in a fun context.",
                        "image_path": "https://source.unsplash.com/500x500/?geoquest",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Civic Sense",
                "description": "Developing an understanding of civic duties, rights, and responsibilities, fostering responsible future citizens.",
                "image_path": "https://source.unsplash.com/500x500/?civic",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Rights and Responsibilities",
                        "description": "Understanding the basic rights and responsibilities we hold as citizens.",
                        "image_path": "https://source.unsplash.com/500x500/?rights-responsibilities",
                        "type": "CORE"
                    },
                    {
                        "name": "Community Services",
                        "description": "Exploring various community services and their importance in our daily lives.",
                        "image_path": "https://source.unsplash.com/500x500/?community-services",
                        "type": "CORE"
                    },
                    {
                        "name": "Voting and Democracy",
                        "description": "Learning the concept of voting and its significance in a democratic society.",
                        "image_path": "https://source.unsplash.com/500x500/?voting-democracy",
                        "type": "CORE"
                    },
                    {
                        "name": "My Ideal Community",
                        "description": "Envisioning and designing an ideal community that fosters inclusivity, sustainability, and harmony.",
                        "image_path": "https://source.unsplash.com/500x500/?ideal-community",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Global Perspectives",
                "description": "Broadening horizons by appreciating the diversity of cultures, environments, and global issues.",
                "image_path": "https://source.unsplash.com/500x500/?global-perspectives",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "World Cultures",
                        "description": "Exploring various world cultures, traditions, languages, and customs.",
                        "image_path": "https://source.unsplash.com/500x500/?world-cultures",
                        "type": "CORE"
                    },
                    {
                        "name": "Sustainable Living",
                        "description": "Understanding sustainability and how we can contribute to a greener planet.",
                        "image_path": "https://source.unsplash.com/500x500/?sustainable-living",
                        "type": "CORE"
                    },
                    {
                        "name": "Global Issues",
                        "description": "Discussing age-appropriate global issues and how they impact our world.",
                        "image_path": "https://source.unsplash.com/500x500/?global-issues",
                        "type": "CORE"
                    },
                    {
                        "name": "Cultural Exchange",
                        "description": "Experiencing a cultural exchange through a fun and engaging virtual meet with peers from a different country.",
                        "image_path": "https://source.unsplash.com/500x500/?cultural-exchange",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Economic Insights",
                "description": "Delving deeper into economic concepts, money management, and the roles different professions play in our economy.",
                "image_path": "https://source.unsplash.com/500x500/?economic-insights",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Understanding Taxes",
                        "description": "Introducing the basic concept of taxes and why they are essential for community development.",
                        "image_path": "https://source.unsplash.com/500x500/?taxes",
                        "type": "CORE"
                    },
                    {
                        "name": "Professions and Their Roles",
                        "description": "Exploring a wider range of professions and their roles in the community and economy.",
                        "image_path": "https://source.unsplash.com/500x500/?professions",
                        "type": "CORE"
                    },
                    {
                        "name": "Budgeting and Planning",
                        "description": "Understanding the concept of budgeting and financial planning through fun activities.",
                        "image_path": "https://source.unsplash.com/500x500/?budgeting",
                        "type": "CORE"
                    },
                    {
                        "name": "Mini Economy",
                        "description": "Setting up a mini economy system in the classroom to apply learned economic concepts.",
                        "image_path": "https://source.unsplash.com/500x500/?mini-economy",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Historical Adventures",
                "description": "Unraveling the fabric of time to understand significant historical events, inventions, and milestones.",
                "image_path": "https://source.unsplash.com/500x500/?historical-adventures",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Timeline Travel",
                        "description": "Understanding the concept of timelines and their significance in documenting historical events.",
                        "image_path": "https://source.unsplash.com/500x500/?timeline",
                        "type": "CORE"
                    },
                    {
                        "name": "Innovations That Shaped the World",
                        "description": "Exploring significant innovations and their impact on how we live today.",
                        "image_path": "https://source.unsplash.com/500x500/?innovations",
                        "type": "CORE"
                    },
                    {
                        "name": "Heroes and Heroines",
                        "description": "Learning about historical figures who have made a difference in the world.",
                        "image_path": "https://source.unsplash.com/500x500/?heroes",
                        "type": "CORE"
                    },
                    {
                        "name": "History Alive",
                        "description": "Participating in a living history fair, where students represent different historical figures or events.",
                        "image_path": "https://source.unsplash.com/500x500/?history-fair",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);
---- Creative Arts
SELECT create_complete_curriculum(
  'Little Learners',
  '21b7556c-4d89-4ae7-b367-f0d3e47a04b3'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Sensory Art",
                "description": "Exploring textures, colors, and shapes to stimulate sensory development and creativity.",
                "image_path": "https://source.unsplash.com/500x500/?sensory-art",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Textured Creations",
                        "description": "Exploring different textures through art and craft activities.",
                        "image_path": "https://source.unsplash.com/500x500/?textured-creations",
                        "type": "CORE"
                    },
                    {
                        "name": "Colorful World",
                        "description": "Experimenting with colors and their combinations.",
                        "image_path": "https://source.unsplash.com/500x500/?colorful-world",
                        "type": "CORE"
                    },
                    {
                        "name": "Shapes Around Us",
                        "description": "Recognizing and creating art with different shapes.",
                        "image_path": "https://source.unsplash.com/500x500/?shapes",
                        "type": "CORE"
                    },
                    {
                        "name": "Sensory Collage",
                        "description": "Creating a collage using a variety of materials to stimulate the senses.",
                        "image_path": "https://source.unsplash.com/500x500/?sensory-collage",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Rhythm and Movement",
                "description": "Discovering the joy of movement and rhythm through dance and creative play.",
                "image_path": "https://source.unsplash.com/500x500/?rhythm-movement",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Introduction to Rhythm",
                        "description": "Understanding the concept of rhythm through simple percussive instruments and clapping games.",
                        "image_path": "https://source.unsplash.com/500x500/?rhythm",
                        "type": "CORE"
                    },
                    {
                        "name": "Dance and Movement",
                        "description": "Expressing oneself through simple dance movements and steps.",
                        "image_path": "https://source.unsplash.com/500x500/?dance-movement",
                        "type": "CORE"
                    },
                    {
                        "name": "Musical Exploration",
                        "description": "Experiencing the joy of creating music using everyday objects.",
                        "image_path": "https://source.unsplash.com/500x500/?musical-exploration",
                        "type": "CORE"
                    },
                    {
                        "name": "Storytelling Through Dance",
                        "description": "Using movement and dance to tell a story.",
                        "image_path": "https://source.unsplash.com/500x500/?storytelling-dance",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Creative Drama",
                "description": "Sparking imagination and self-expression through role-play and simple dramatic activities.",
                "image_path": "https://source.unsplash.com/500x500/?creative-drama",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Introduction to Role Play",
                        "description": "Exploring different characters and scenarios through role-play.",
                        "image_path": "https://source.unsplash.com/500x500/?role-play",
                        "type": "CORE"
                    },
                    {
                        "name": "Mime Time",
                        "description": "Learning to express emotions and actions without words through the art of mime.",
                        "image_path": "https://source.unsplash.com/500x500/?mime",
                        "type": "CORE"
                    },
                    {
                        "name": "Puppet Show",
                        "description": "Creating simple puppets and using them to tell a story.",
                        "image_path": "https://source.unsplash.com/500x500/?puppet-show",
                        "type": "CORE"
                    },
                    {
                        "name": "Create Your Play",
                        "description": "Creating a short play with friends, using props and costumes.",
                        "image_path": "https://source.unsplash.com/500x500/?create-play",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Visual Arts",
                "description": "Cultivating creativity through painting, drawing, and sculpting using various mediums.",
                "image_path": "https://source.unsplash.com/500x500/?visual-arts",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Painting with a Twist",
                        "description": "Experimenting with various painting techniques and tools beyond the paintbrush.",
                        "image_path": "https://source.unsplash.com/500x500/?painting",
                        "type": "CORE"
                    },
                    {
                        "name": "Doodling and Sketching",
                        "description": "Exploring self-expression through freehand doodling and sketching activities.",
                        "image_path": "https://source.unsplash.com/500x500/?doodling",
                        "type": "CORE"
                    },
                    {
                        "name": "Play-Doh Creations",
                        "description": "Building three-dimensional objects using Play-Doh to understand form and structure.",
                        "image_path": "https://source.unsplash.com/500x500/?play-doh",
                        "type": "CORE"
                    },
                    {
                        "name": "Art from Waste",
                        "description": "Creating art from waste materials, promoting creativity and environmental awareness.",
                        "image_path": "https://source.unsplash.com/500x500/?recycled-art",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Music and Rhythm",
                "description": "Enhancing musical appreciation and rhythmic coordination through song, dance, and basic instruments.",
                "image_path": "https://source.unsplash.com/500x500/?music-rhythm",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Musical Patterns",
                        "description": "Understanding patterns through rhythm and beat using simple percussion instruments.",
                        "image_path": "https://source.unsplash.com/500x500/?musical-patterns",
                        "type": "CORE"
                    },
                    {
                        "name": "Move to the Beat",
                        "description": "Learning to express oneself through dance movements that match the rhythm of the music.",
                        "image_path": "https://source.unsplash.com/500x500/?dance",
                        "type": "CORE"
                    },
                    {
                        "name": "Sing-Along Time",
                        "description": "Encouraging participation and confidence through group singing activities.",
                        "image_path": "https://source.unsplash.com/500x500/?sing-along",
                        "type": "CORE"
                    },
                    {
                        "name": "Sound Exploration",
                        "description": "Exploring how different sounds can be produced using everyday objects.",
                        "image_path": "https://source.unsplash.com/500x500/?sound-exploration",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Drama and Storytelling",
                "description": "Fostering imagination and narrative skills through character play and dramatic scenarios.",
                "image_path": "https://source.unsplash.com/500x500/?drama-storytelling",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Character Creation",
                        "description": "Creating and embodying original characters through improvisational games and activities.",
                        "image_path": "https://source.unsplash.com/500x500/?character-creation",
                        "type": "CORE"
                    },
                    {
                        "name": "Storytelling Circle",
                        "description": "Developing narrative skills by creating and sharing stories within a group.",
                        "image_path": "https://source.unsplash.com/500x500/?storytelling",
                        "type": "CORE"
                    },
                    {
                        "name": "Dramatic Play",
                        "description": "Engaging in dramatic play scenarios to understand narrative structure and character development.",
                        "image_path": "https://source.unsplash.com/500x500/?dramatic-play",
                        "type": "CORE"
                    },
                    {
                        "name": "Puppet Theater",
                        "description": "Designing and performing a puppet show to enhance creativity and storytelling skills.",
                        "image_path": "https://source.unsplash.com/500x500/?puppet-theater",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Crafts and Design",
                "description": "Developing fine motor skills and spatial understanding through crafts and design projects.",
                "image_path": "https://source.unsplash.com/500x500/?crafts-design",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Paper Mache Magic",
                        "description": "Creating three-dimensional objects using paper mache techniques.",
                        "image_path": "https://source.unsplash.com/500x500/?paper-mache",
                        "type": "CORE"
                    },
                    {
                        "name": "Origami Fun",
                        "description": "Understanding geometric shapes and spatial relationships through the art of origami.",
                        "image_path": "https://source.unsplash.com/500x500/?origami",
                        "type": "CORE"
                    },
                    {
                        "name": "Cardboard Creations",
                        "description": "Using cardboard to create simple structures and objects.",
                        "image_path": "https://source.unsplash.com/500x500/?cardboard-creations",
                        "type": "CORE"
                    },
                    {
                        "name": "Design Your Room",
                        "description": "Planning and designing a dream room using cutouts and drawings.",
                        "image_path": "https://source.unsplash.com/500x500/?room-design",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Exploring Mediums",
                "description": "Discovering the wonders of various art mediums to foster creativity and imagination.",
                "image_path": "https://source.unsplash.com/500x500/?art-mediums",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Collage Craft",
                        "description": "Creating unique artworks through the versatile technique of collage.",
                        "image_path": "https://source.unsplash.com/500x500/?collage",
                        "type": "CORE"
                    },
                    {
                        "name": "Pastel Playground",
                        "description": "Experimenting with soft and oil pastels to create vibrant artworks.",
                        "image_path": "https://source.unsplash.com/500x500/?pastel",
                        "type": "CORE"
                    },
                    {
                        "name": "Charcoal Sketch",
                        "description": "Exploring light and shadow using charcoal as an expressive medium.",
                        "image_path": "https://source.unsplash.com/500x500/?charcoal",
                        "type": "CORE"
                    },
                    {
                        "name": "Printmaking Magic",
                        "description": "Creating unique print artworks using everyday objects.",
                        "image_path": "https://source.unsplash.com/500x500/?printmaking",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Dance and Choreography",
                "description": "Exploring self-expression and body coordination through the creative world of dance and choreography.",
                "image_path": "https://source.unsplash.com/500x500/?dance-choreography",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Rhythm and Movement",
                        "description": "Understanding the concept of rhythm in music and expressing it through dance.",
                        "image_path": "https://source.unsplash.com/500x500/?rhythm-movement",
                        "type": "CORE"
                    },
                    {
                        "name": "Creative Choreography",
                        "description": "Creating unique dance sequences to express feelings and stories.",
                        "image_path": "https://source.unsplash.com/500x500/?choreography",
                        "type": "CORE"
                    },
                    {
                        "name": "Dance Styles",
                        "description": "Exploring different dance styles and their cultural significance.",
                        "image_path": "https://source.unsplash.com/500x500/?dance-styles",
                        "type": "CORE"
                    },
                    {
                        "name": "Shadow Dance",
                        "description": "Creating a shadow dance performance to understand the interplay of light and movement.",
                        "image_path": "https://source.unsplash.com/500x500/?shadow-dance",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Drama and Role Play",
                "description": "Encouraging creative expression and empathy through dramatic storytelling and role-playing.",
                "image_path": "https://source.unsplash.com/500x500/?drama-role-play",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Theatrical Expressions",
                        "description": "Learning to express a range of emotions and scenarios through theatrical exercises.",
                        "image_path": "https://source.unsplash.com/500x500/?theatrical-expressions",
                        "type": "CORE"
                    },
                    {
                        "name": "Story Drama",
                        "description": "Creating and performing a short play based on a story.",
                        "image_path": "https://source.unsplash.com/500x500/?story-drama",
                        "type": "CORE"
                    },
                    {
                        "name": "Improvisation",
                        "description": "Enhancing quick thinking and creativity through improvisation games and exercises.",
                        "image_path": "https://source.unsplash.com/500x500/?improvisation",
                        "type": "CORE"
                    },
                    {
                        "name": "Mask Making and Performance",
                        "description": "Creating expressive masks and using them in a performance to enhance emotional expression.",
                        "image_path": "https://source.unsplash.com/500x500/?mask-making",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Music and Composition",
                "description": "Building an understanding and appreciation for music through exploration and composition.",
                "image_path": "https://source.unsplash.com/500x500/?music-composition",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Soundscapes",
                        "description": "Creating soundscapes using voices, bodies, and objects to represent different scenarios.",
                        "image_path": "https://source.unsplash.com/500x500/?soundscapes",
                        "type": "CORE"
                    },
                    {
                        "name": "Song Writing",
                        "description": "Learning the basics of songwriting to express thoughts and feelings through music.",
                        "image_path": "https://source.unsplash.com/500x500/?songwriting",
                        "type": "CORE"
                    },
                    {
                        "name": "Percussion Exploration",
                        "description": "Exploring different types of percussion instruments and their unique sounds.",
                        "image_path": "https://source.unsplash.com/500x500/?percussion",
                        "type": "CORE"
                    },
                    {
                        "name": "Homemade Instruments",
                        "description": "Creating homemade musical instruments using everyday household items.",
                        "image_path": "https://source.unsplash.com/500x500/?homemade-instruments",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);
---- Physical Development
SELECT create_complete_curriculum(
  'Little Learners',
  'ed34e97c-5758-4414-933b-f61370a4e7af'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Active Play",
                "description": "Fostering a love for physical activity and games that promote coordination and fitness.",
                "image_path": "https://source.unsplash.com/500x500/?active-play",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Catch and Throw",
                        "description": "Developing hand-eye coordination and motor skills with fun catching and throwing games.",
                        "image_path": "https://source.unsplash.com/500x500/?catch-throw",
                        "type": "CORE"
                    },
                    {
                        "name": "Hop, Skip, and Jump",
                        "description": "Engaging in activities that encourage jumping, hopping, and skipping to promote balance and strength.",
                        "image_path": "https://source.unsplash.com/500x500/?hop-skip-jump",
                        "type": "CORE"
                    },
                    {
                        "name": "Animal Movements",
                        "description": "Mimicking the movements of various animals to encourage imagination and physical development.",
                        "image_path": "https://source.unsplash.com/500x500/?animal-movements",
                        "type": "CORE"
                    },
                    {
                        "name": "Toddler Yoga",
                        "description": "Introducing basic yoga poses that promote flexibility, balance, and calmness.",
                        "image_path": "https://source.unsplash.com/500x500/?toddler-yoga",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Fine Motor Skills",
                "description": "Enhancing fine motor skills and dexterity with fun and interactive tasks.",
                "image_path": "https://source.unsplash.com/500x500/?fine-motor-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Clay Play",
                        "description": "Building strength and coordination in little hands through molding and shaping clay.",
                        "image_path": "https://source.unsplash.com/500x500/?clay-play",
                        "type": "CORE"
                    },
                    {
                        "name": "Bead Stringing",
                        "description": "Developing fine motor skills and concentration through the careful task of bead stringing.",
                        "image_path": "https://source.unsplash.com/500x500/?bead-stringing",
                        "type": "CORE"
                    },
                    {
                        "name": "Puzzling Fun",
                        "description": "Engaging in puzzle activities to enhance spatial awareness and problem-solving skills.",
                        "image_path": "https://source.unsplash.com/500x500/?puzzle",
                        "type": "CORE"
                    },
                    {
                        "name": "Finger Painting",
                        "description": "Exploring creativity and fine motor skills through the sensory experience of finger painting.",
                        "image_path": "https://source.unsplash.com/500x500/?finger-painting",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Gross Motor Skills",
                "description": "Developing large muscle groups through movement and playful activities.",
                "image_path": "https://source.unsplash.com/500x500/?gross-motor-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Tummy Time",
                        "description": "Strengthening neck, back, and arm muscles through supervised tummy time activities.",
                        "image_path": "https://source.unsplash.com/500x500/?tummy-time",
                        "type": "CORE"
                    },
                    {
                        "name": "Crawling Course",
                        "description": "Encouraging crawling through fun obstacle courses to strengthen muscles and improve coordination.",
                        "image_path": "https://source.unsplash.com/500x500/?crawling-course",
                        "type": "CORE"
                    },
                    {
                        "name": "Baby Bootcamp",
                        "description": "Engaging in exercises that promote strength, balance, and body awareness.",
                        "image_path": "https://source.unsplash.com/500x500/?baby-bootcamp",
                        "type": "CORE"
                    },
                    {
                        "name": "Water Play",
                        "description": "Exploring the physical properties of water, promoting sensory learning and motor skills.",
                        "image_path": "https://source.unsplash.com/500x500/?water-play",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Nutrition and Health",
                "description": "Introducing basic concepts of health and nutrition through fun and interactive activities.",
                "image_path": "https://source.unsplash.com/500x500/?nutrition-health",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Food Groups",
                        "description": "Learning about different food groups and their importance to our bodies.",
                        "image_path": "https://source.unsplash.com/500x500/?food-groups",
                        "type": "CORE"
                    },
                    {
                        "name": "Hygiene Habits",
                        "description": "Establishing good hygiene habits like hand washing, teeth brushing, and more.",
                        "image_path": "https://source.unsplash.com/500x500/?hygiene-habits",
                        "type": "CORE"
                    },
                    {
                        "name": "Healthy Habits",
                        "description": "Understanding the importance of sleep, physical activity, and healthy eating.",
                        "image_path": "https://source.unsplash.com/500x500/?healthy-habits",
                        "type": "CORE"
                    },
                    {
                        "name": "Snack Time",
                        "description": "Preparing simple, healthy snacks together to encourage an interest in nutrition.",
                        "image_path": "https://source.unsplash.com/500x500/?snack-time",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Active Games",
                "description": "Engaging in active games that promote agility, coordination, and fun.",
                "image_path": "https://source.unsplash.com/500x500/?active-games",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Tag and Chase",
                        "description": "Playing tag and chase games to develop speed, agility, and spatial awareness.",
                        "image_path": "https://source.unsplash.com/500x500/?tag-chase",
                        "type": "CORE"
                    },
                    {
                        "name": "Ball Games",
                        "description": "Introducing different ball games to enhance hand-eye coordination and team play.",
                        "image_path": "https://source.unsplash.com/500x500/?ball-games",
                        "type": "CORE"
                    },
                    {
                        "name": "Balance Beam",
                        "description": "Using a balance beam to develop balance, coordination, and focus.",
                        "image_path": "https://source.unsplash.com/500x500/?balance-beam",
                        "type": "CORE"
                    },
                    {
                        "name": "Dance Party",
                        "description": "Encouraging free expression and movement through dance to different types of music.",
                        "image_path": "https://source.unsplash.com/500x500/?dance-party",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Fine Motor Mastery",
                "description": "Further enhancing fine motor skills with creative and challenging tasks.",
                "image_path": "https://source.unsplash.com/500x500/?fine-motor-mastery",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Scissor Skills",
                        "description": "Developing dexterity and coordination through safe scissor activities.",
                        "image_path": "https://source.unsplash.com/500x500/?scissor-skills",
                        "type": "CORE"
                    },
                    {
                        "name": "Lacing and Tying",
                        "description": "Learning to lace and tie, enhancing hand-eye coordination and self-help skills.",
                        "image_path": "https://source.unsplash.com/500x500/?lacing-tying",
                        "type": "CORE"
                    },
                    {
                        "name": "Sorting and Stacking",
                        "description": "Sorting and stacking objects by size, color, or shape to enhance problem-solving skills.",
                        "image_path": "https://source.unsplash.com/500x500/?sorting-stacking",
                        "type": "CORE"
                    },
                    {
                        "name": "Creative Origami",
                        "description": "Folding origami paper to create various shapes, promoting concentration and fine motor skills.",
                        "image_path": "https://source.unsplash.com/500x500/?origami",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Gross Motor Development",
                "description": "Continuing to develop large muscle groups through movement and playful challenges.",
                "image_path": "https://source.unsplash.com/500x500/?gross-motor-development",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Obstacle Course",
                        "description": "Navigating a fun obstacle course to promote agility, coordination, and problem-solving.",
                        "image_path": "https://source.unsplash.com/500x500/?obstacle-course",
                        "type": "CORE"
                    },
                    {
                        "name": "Yoga for Kids",
                        "description": "Introducing basic yoga poses to enhance flexibility, balance, and mindfulness.",
                        "image_path": "https://source.unsplash.com/500x500/?yoga-kids",
                        "type": "CORE"
                    },
                    {
                        "name": "Bike Riding",
                        "description": "Learning to ride a tricycle or bike, enhancing balance, coordination, and confidence.",
                        "image_path": "https://source.unsplash.com/500x500/?bike-riding",
                        "type": "CORE"
                    },
                    {
                        "name": "Gardening Fun",
                        "description": "Participating in simple gardening tasks, fostering an appreciation for nature and enhancing motor skills.",
                        "image_path": "https://source.unsplash.com/500x500/?gardening",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Healthy Habits",
                "description": "Deepening understanding of health, nutrition, and self-care habits.",
                "image_path": "https://source.unsplash.com/500x500/?healthy-habits",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "My Plate",
                        "description": "Exploring the MyPlate guide to learn about balanced meals and healthy eating.",
                        "image_path": "https://source.unsplash.com/500x500/?my-plate",
                        "type": "CORE"
                    },
                    {
                        "name": "Personal Hygiene",
                        "description": "Understanding the importance of personal hygiene and developing daily self-care routines.",
                        "image_path": "https://source.unsplash.com/500x500/?personal-hygiene",
                        "type": "CORE"
                    },
                    {
                        "name": "Fit and Active",
                        "description": "Recognizing the importance of regular physical activity for maintaining health and well-being.",
                        "image_path": "https://source.unsplash.com/500x500/?fit-active",
                        "type": "CORE"
                    },
                    {
                        "name": "Cooking Together",
                        "description": "Preparing simple, nutritious meals together to promote cooking skills and healthy eating.",
                        "image_path": "https://source.unsplash.com/500x500/?cooking-together",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Team Sports",
                "description": "Fostering teamwork and coordination through simple team sports and games.",
                "image_path": "https://source.unsplash.com/500x500/?team-sports",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Introduction to Soccer",
                        "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
                        "image_path": "https://source.unsplash.com/500x500/?soccer",
                        "type": "CORE"
                    },
                    {
                        "name": "Basic Basketball",
                        "description": "Understanding the basics of basketball for coordination and team spirit.",
                        "image_path": "https://source.unsplash.com/500x500/?basketball",
                        "type": "CORE"
                    },
                    {
                        "name": "Fun with Frisbee",
                        "description": "Playing frisbee to enhance hand-eye coordination and enjoy the outdoors.",
                        "image_path": "https://source.unsplash.com/500x500/?frisbee",
                        "type": "CORE"
                    },
                    {
                        "name": "Family Olympics",
                        "description": "Organizing a fun ‘Olympic‘ event with various sports activities for the whole family.",
                        "image_path": "https://source.unsplash.com/500x500/?family-olympics",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Advanced Fine Motor Skills",
                "description": "Perfecting fine motor skills with more complex and creative tasks.",
                "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Advanced Origami",
                        "description": "Creating complex origami figures to promote dexterity and concentration.",
                        "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
                        "type": "CORE"
                    },
                    {
                        "name": "Model Building",
                        "description": "Building models to enhance precision, patience, and problem-solving skills.",
                        "image_path": "https://source.unsplash.com/500x500/?model-building",
                        "type": "CORE"
                    },
                    {
                        "name": "Crafting and Sewing",
                        "description": "Engaging in simple sewing or beading activities for fine motor practice and creativity.",
                        "image_path": "https://source.unsplash.com/500x500/?sewing-beading",
                        "type": "CORE"
                    },
                    {
                        "name": "Cooking Class",
                        "description": "Participating in a cooking class to learn about nutrition and enhance fine motor skills.",
                        "image_path": "https://source.unsplash.com/500x500/?cooking-class",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Challenging Gross Motor Skills",
                "description": "Pushing boundaries in gross motor skills with challenging and exciting activities.",
                "image_path": "https://source.unsplash.com/500x500/?challenging-gross-motor-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Climbing and Rope Courses",
                        "description": "Exploring climbing and rope courses to develop strength, agility, and confidence.",
                        "image_path": "https://source.unsplash.com/500x500/?climbing-rope-courses",
                        "type": "CORE"
                    },
                    {
                        "name": "Advanced Yoga",
                        "description": "Practicing more complex yoga poses to promote flexibility, balance, and calm.",
                        "image_path": "https://source.unsplash.com/500x500/?advanced-yoga",
                        "type": "CORE"
                    },
                    {
                        "name": "Biking Trails",
                        "description": "Riding bikes on different terrains to enhance balance, strength, and endurance.",
                        "image_path": "https://source.unsplash.com/500x500/?biking-trails",
                        "type": "CORE"
                    },
                    {
                        "name": "Nature Walks",
                        "description": "Taking nature walks to enjoy the outdoors, learn about the environment, and enhance physical fitness.",
                        "image_path": "https://source.unsplash.com/500x500/?nature-walks",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Healthy Lifestyle",
                "description": "Cementing understanding of healthy habits and self-care routines.",
                "image_path": "https://source.unsplash.com/500x500/?healthy-lifestyle",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Balanced Nutrition",
                        "description": "Delving deeper into nutrition and balanced meals for a healthy lifestyle.",
                        "image_path": "https://source.unsplash.com/500x500/?balanced-nutrition",
                        "type": "CORE"
                    },
                    {
                        "name": "Fitness Routine",
                        "description": "Understanding the importance of maintaining a regular fitness routine for lifelong health.",
                        "image_path": "https://source.unsplash.com/500x500/?fitness-routine",
                        "type": "CORE"
                    },
                    {
                        "name": "Self-Care and Mindfulness",
                        "description": "Learning about self-care and mindfulness techniques for mental well-being.",
                        "image_path": "https://source.unsplash.com/500x500/?self-care-mindfulness",
                        "type": "CORE"
                    },
                    {
                        "name": "Family Health Challenge",
                        "description": "Organizing a health challenge for the family to promote healthy habits together.",
                        "image_path": "https://source.unsplash.com/500x500/?family-health-challenge",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);
---- Social Emotional Learning
SELECT create_complete_curriculum(
  'Little Learners',
  '38525bb6-a2fb-4e0a-b0af-47af9efedce2'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "ffba7897-2e54-45c7-bfdc-73953451a867",
      "topics_data":
        [
            {
                "name": "Emotion Exploration",
                "description": "Creating a safe space for emotional literacy and expression.",
                "image_path": "https://source.unsplash.com/500x500/?emotion-exploration",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Face the Emotion",
                        "description": "Identifying and naming basic emotions through facial expressions and body language.",
                        "image_path": "https://source.unsplash.com/500x500/?emotions",
                        "type": "CORE"
                    },
                    {
                        "name": "Emotion in Art",
                        "description": "Expressing emotions creatively through simple art activities.",
                        "image_path": "https://source.unsplash.com/500x500/?art-emotions",
                        "type": "CORE"
                    },
                    {
                        "name": "Storytime Emotions",
                        "description": "Reading and discussing stories that illustrate different emotions.",
                        "image_path": "https://source.unsplash.com/500x500/?story-emotions",
                        "type": "CORE"
                    },
                    {
                        "name": "Feelings Through Music",
                        "description": "Exploring how music can express and influence our feelings.",
                        "image_path": "https://source.unsplash.com/500x500/?music-emotions",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Self and Society",
                "description": "Understanding oneself and one‘s place in the family and community.",
                "image_path": "https://source.unsplash.com/500x500/?self-society",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "All About Me",
                        "description": "Creating a personal book or poster that celebrates each child‘s uniqueness.",
                        "image_path": "https://source.unsplash.com/500x500/?all-about-me",
                        "type": "CORE"
                    },
                    {
                        "name": "My Family, My Community",
                        "description": "Discussing the roles and relationships within the family and local community.",
                        "image_path": "https://source.unsplash.com/500x500/?family-community",
                        "type": "CORE"
                    },
                    {
                        "name": "Helping Hands",
                        "description": "Recognizing how we can help others in our family and community.",
                        "image_path": "https://source.unsplash.com/500x500/?helping-hands",
                        "type": "CORE"
                    },
                    {
                        "name": "Culture and Traditions",
                        "description": "Exploring family traditions and cultural celebrations to foster a sense of identity.",
                        "image_path": "https://source.unsplash.com/500x500/?culture-traditions",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Positive Relationships",
                "description": "Fostering positive interactions and friendships.",
                "image_path": "https://source.unsplash.com/500x500/?positive-relationships",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Kind Words, Kind Actions",
                        "description": "Learning to use kind words and actions in our interactions with others.",
                        "image_path": "https://source.unsplash.com/500x500/?kindness",
                        "type": "CORE"
                    },
                    {
                        "name": "Sharing and Taking Turns",
                        "description": "Understanding the importance of sharing and taking turns during play.",
                        "image_path": "https://source.unsplash.com/500x500/?sharing",
                        "type": "CORE"
                    },
                    {
                        "name": "Resolving Conflicts",
                        "description": "Using simple strategies to resolve conflicts with peers.",
                        "image_path": "https://source.unsplash.com/500x500/?conflict-resolution",
                        "type": "CORE"
                    },
                    {
                        "name": "Celebrating Friendships",
                        "description": "Engaging in activities that celebrate friendships and unity.",
                        "image_path": "https://source.unsplash.com/500x500/?friendships",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Coping Skills",
                "description": "Equipping children with simple coping strategies for dealing with challenges.",
                "image_path": "https://source.unsplash.com/500x500/?coping-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Breathe and Relax",
                        "description": "Practicing simple breathing exercises and relaxation techniques for stress relief.",
                        "image_path": "https://source.unsplash.com/500x500/?relaxation",
                        "type": "CORE"
                    },
                    {
                        "name": "Managing Frustration",
                        "description": "Learning strategies to manage frustration and disappointment in a healthy way.",
                        "image_path": "https://source.unsplash.com/500x500/?frustration-management",
                        "type": "CORE"
                    },
                    {
                        "name": "Dealing with Change",
                        "description": "Discussing and dealing with changes and transitions in a positive way.",
                        "image_path": "https://source.unsplash.com/500x500/?change-management",
                        "type": "CORE"
                    },
                    {
                        "name": "Yoga for Kids",
                        "description": "Using yoga as a fun and effective way to promote emotional regulation.",
                        "image_path": "https://source.unsplash.com/500x500/?yoga-kids",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "eb6f4266-542d-4978-aa87-cd2444cedd46",
      "topics_data":
        [
            {
                "name": "Advanced Emotion Exploration",
                "description": "Diving deeper into emotional literacy and expression, with an emphasis on empathy and compassion.",
                "image_path": "https://source.unsplash.com/500x500/?emotion-exploration",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Understanding Empathy",
                        "description": "Learning to understand and share the feelings of others through activities and stories.",
                        "image_path": "https://source.unsplash.com/500x500/?empathy",
                        "type": "CORE"
                    },
                    {
                        "name": "Expressing Complex Emotions",
                        "description": "Recognizing and expressing more complex emotions, such as frustration or disappointment.",
                        "image_path": "https://source.unsplash.com/500x500/?complex-emotions",
                        "type": "CORE"
                    },
                    {
                        "name": "Problem-Solving Emotions",
                        "description": "Using problem-solving strategies to navigate emotional situations.",
                        "image_path": "https://source.unsplash.com/500x500/?problem-solving",
                        "type": "CORE"
                    },
                    {
                        "name": "Emotion in Drama",
                        "description": "Exploring emotions through dramatic play and role-playing scenarios.",
                        "image_path": "https://source.unsplash.com/500x500/?drama-emotions",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Advanced Self and Society",
                "description": "Deepening understanding of oneself, family roles, and community structures.",
                "image_path": "https://source.unsplash.com/500x500/?self-society",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Family Roles and Responsibilities",
                        "description": "Exploring the different roles and responsibilities within a family.",
                        "image_path": "https://source.unsplash.com/500x500/?family-roles",
                        "type": "CORE"
                    },
                    {
                        "name": "Community Helpers",
                        "description": "Learning about the roles of various community helpers and their importance.",
                        "image_path": "https://source.unsplash.com/500x500/?community-helpers",
                        "type": "CORE"
                    },
                    {
                        "name": "Cultural Appreciation",
                        "description": "Understanding and appreciating diverse cultures and traditions within the community.",
                        "image_path": "https://source.unsplash.com/500x500/?cultural-appreciation",
                        "type": "CORE"
                    },
                    {
                        "name": "My Community Project",
                        "description": "Creating a project or presentation about their community to share with the class.",
                        "image_path": "https://source.unsplash.com/500x500/?community-project",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Advanced Positive Relationships",
                "description": "Building on social skills to foster positive interactions and deeper friendships.",
                "image_path": "https://source.unsplash.com/500x500/?positive-relationships",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Effective Communication",
                        "description": "Practicing effective communication skills in various social scenarios.",
                        "image_path": "https://source.unsplash.com/500x500/?communication",
                        "type": "CORE"
                    },
                    {
                        "name": "Respectful Behavior",
                        "description": "Understanding the importance of respect in all interactions and relationships.",
                        "image_path": "https://source.unsplash.com/500x500/?respect",
                        "type": "CORE"
                    },
                    {
                        "name": "Problem-Solving in Friendships",
                        "description": "Learning to navigate and åresolve conflicts within friendships.",
                        "image_path": "https://source.unsplash.com/500x500/?friendship-problems",
                        "type": "CORE"
                    },
                    {
                        "name": "Friendship Circle",
                        "description": "Creating a class ‘friendship circle‘ where children can share about their friendships and learn from each other.",
                        "image_path": "https://source.unsplash.com/500x500/?friendship-circle",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Advanced Coping Skills",
                "description": "Continuing to build on coping strategies and introducing self-regulation techniques.",
                "image_path": "https://source.unsplash.com/500x500/?coping-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Self-Regulation Strategies",
                        "description": "Learning techniques for self-regulation and emotional control.",
                        "image_path": "https://source.unsplash.com/500x500/?self-regulation",
                        "type": "CORE"
                    },
                    {
                        "name": "Dealing with Stress",
                        "description": "Understanding what stress is and learning healthy ways to manage it.",
                        "image_path": "https://source.unsplash.com/500x500/?stress-management",
                        "type": "CORE"
                    },
                    {
                        "name": "Resilience Building",
                        "description": "Learning about resilience and how to bounce back from challenges.",
                        "image_path": "https://source.unsplash.com/500x500/?resilience",
                        "type": "CORE"
                    },
                    {
                        "name": "Mindfulness for Kids",
                        "description": "Using mindfulness practices as a way to promote emotional regulation and stress relief.",
                        "image_path": "https://source.unsplash.com/500x500/?mindfulness-kids",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    },
    {
      "level_id": "ee90a562-4b34-4590-9757-cfcb866876d7",
      "topics_data":
        [
            {
                "name": "Mastering Emotion Exploration",
                "description": "Mastering emotional literacy, focusing on emotional intelligence and sophisticated emotional expression.",
                "image_path": "https://source.unsplash.com/500x500/?emotion-exploration",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Understanding Emotional Intelligence",
                        "description": "Diving into emotional intelligence and its role in understanding and managing emotions.",
                        "image_path": "https://source.unsplash.com/500x500/?emotional-intelligence",
                        "type": "CORE"
                    },
                    {
                        "name": "Expressing and Controlling Emotions",
                        "description": "Learning to express and control emotions appropriately in different social situations.",
                        "image_path": "https://source.unsplash.com/500x500/?express-emotions",
                        "type": "CORE"
                    },
                    {
                        "name": "Emotions and Decision Making",
                        "description": "Understanding how emotions affect decision making and learning to make emotionally intelligent decisions.",
                        "image_path": "https://source.unsplash.com/500x500/?decision-making",
                        "type": "CORE"
                    },
                    {
                        "name": "Emotions in Art",
                        "description": "Expressing and exploring emotions through various forms of art.",
                        "image_path": "https://source.unsplash.com/500x500/?emotions-art",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Mastering Self and Society",
                "description": "Exploring personal identity, social roles, and societal structures at an advanced level.",
                "image_path": "https://source.unsplash.com/500x500/?self-society",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Personal Identity and Roles",
                        "description": "Exploring personal identity and understanding individual roles within different social structures.",
                        "image_path": "https://source.unsplash.com/500x500/?personal-identity",
                        "type": "CORE"
                    },
                    {
                        "name": "Understanding Social Structures",
                        "description": "Learning about societal structures, including communities, countries, and global connections.",
                        "image_path": "https://source.unsplash.com/500x500/?social-structures",
                        "type": "CORE"
                    },
                    {
                        "name": "Cultural Diversity and Respect",
                        "description": "Deepening understanding and respect for cultural diversity within the community and the world.",
                        "image_path": "https://source.unsplash.com/500x500/?cultural-diversity",
                        "type": "CORE"
                    },
                    {
                        "name": "My Society Project",
                        "description": "Creating a project about a specific societal structure to present to the class.",
                        "image_path": "https://source.unsplash.com/500x500/?society-project",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Mastering Positive Relationships",
                "description": "Enhancing interpersonal skills for maintaining positive, respectful, and supportive relationships.",
                "image_path": "https://source.unsplash.com/500x500/?positive-relationships",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Advanced Communication Skills",
                        "description": "Developing advanced communication skills to express needs, wants, and feelings clearly and respectfully.",
                        "image_path": "https://source.unsplash.com/500x500/?advanced-communication",
                        "type": "CORE"
                    },
                    {
                        "name": "Maintaining Positive Relationships",
                        "description": "Learning strategies to maintain and foster positive relationships with peers, family, and community members.",
                        "image_path": "https://source.unsplash.com/500x500/?positive-relationships",
                        "type": "CORE"
                    },
                    {
                        "name": "Conflict Resolution",
                        "description": "Mastering conflict resolution skills to handle disagreements in a positive and respectful manner.",
                        "image_path": "https://source.unsplash.com/500x500/?conflict-resolution",
                        "type": "CORE"
                    },
                    {
                        "name": "Building Community",
                        "description": "Engaging in a class project to build a sense of community and teamwork.",
                        "image_path": "https://source.unsplash.com/500x500/?building-community",
                        "type": "ELECTIVE"
                    }
                ]
            },
            {
                "name": "Mastering Coping Skills",
                "description": "Mastering coping and self-regulation strategies for managing emotions and stress in various situations.",
                "image_path": "https://source.unsplash.com/500x500/?coping-skills",
                "type": "CORE",
                "lessons_data": [
                    {
                        "name": "Mastering Self-Regulation",
                        "description": "Learning advanced self-regulation techniques for better control over emotions and behaviors.",
                        "image_path": "https://source.unsplash.com/500x500/?self-regulation",
                        "type": "CORE"
                    },
                    {
                        "name": "Stress Management Strategies",
                        "description": "Mastering strategies for managing stress and developing a personal stress management plan.",
                        "image_path": "https://source.unsplash.com/500x500/?stress-management",
                        "type": "CORE"
                    },
                    {
                        "name": "Developing Resilience",
                        "description": "Building resilience to handle challenges and bounce back from setbacks more effectively.",
                        "image_path": "https://source.unsplash.com/500x500/?resilience",
                        "type": "CORE"
                    },
                    {
                        "name": "Mindfulness and Meditation",
                        "description": "Using mindfulness and meditation practices for emotional regulation and stress relief.",
                        "image_path": "https://source.unsplash.com/500x500/?mindfulness-meditation",
                        "type": "ELECTIVE"
                    }
                ]
            }
        ]
    }
  ]'::json
);


-- Our goal is to create 10 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 7 "CORE" lessons and 3 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 5 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 3 topics and all the lessons for those toipcs for Kindergarten Mathematics.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .

--- Comprehensive K-5
---- Mathematics
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  'b408d3b0-ca53-4385-9c38-388508f6f777'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);

-- Our goal is to create 10 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 7 "CORE" lessons and 3 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 5 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 3 topics and all the lessons for those toipcs for Kindergarten Science.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Science
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  '2c0970f3-18fe-491f-879e-82e43d50bb57'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);

-- Our goal is to create 10 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 7 "CORE" lessons and 3 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 5 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 3 topics and all the lessons for those toipcs for Kindergarten English.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- English
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  'ed78d635-3be9-41b0-a97e-7dc65e25240f'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);

-- Our goal is to create 10 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 7 "CORE" lessons and 3 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 5 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 3 topics and all the lessons for those toipcs for Kindergarten Social Studies.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Social Studies
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  'cdc09ea6-6e30-4550-9d1d-4b7a30d376d5'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);

-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and all the lessons for those toipcs for Kindergarten Physical Development.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Physical Development (Health/PE)
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  'ed34e97c-5758-4414-933b-f61370a4e7af'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);


-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and all the lessons for those toipcs for Kindergarten Creative Arts.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Creative Arts
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  '21b7556c-4d89-4ae7-b367-f0d3e47a04b3'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);


-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and all the lessons for those toipcs for Kindergarten Social Emotional Learning.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Social Emotional Learning
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  '38525bb6-a2fb-4e0a-b0af-47af9efedce2'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);


-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and all the lessons for those toipcs for Kindergarten Computer Science.
-- the output will look like:
-- {
--        "name": "Team Sports",
--        "description": "Fostering teamwork and coordination through simple team sports and games.",
--        "image_path": "https://source.unsplash.com/500x500/?team-sports",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Introduction to Soccer",
--                "description": "Learning the basics of soccer to develop teamwork, coordination, and physical fitness.",
--                "image_path": "https://source.unsplash.com/500x500/?soccer",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--    {
--        "name": "Advanced Fine Motor Skills",
--        "description": "Perfecting fine motor skills with more complex and creative tasks.",
--        "image_path": "https://source.unsplash.com/500x500/?advanced-fine-motor-skills",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Advanced Origami",
--                "description": "Creating complex origami figures to promote dexterity and concentration.",
--                "image_path": "https://source.unsplash.com/500x500/?advanced-origami",
--                "type": "CORE"
--            },
--           // . . .
--        ]
--    },
--   . . .
---- Computer Science
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  '194fa526-b272-40b7-a301-74d2eb689ce5'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);



--- STEM K-5
---- Mathematics
SELECT create_complete_curriculum(
  'STEM K-5',
  'b408d3b0-ca53-4385-9c38-388508f6f777'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Science
SELECT create_complete_curriculum(
  'STEM K-5',
  '2c0970f3-18fe-491f-879e-82e43d50bb57'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Computer Science
SELECT create_complete_curriculum(
  'STEM K-5',
  '194fa526-b272-40b7-a301-74d2eb689ce5'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Engineering
SELECT create_complete_curriculum(
  'STEM K-5',
  '01e3f2db-955f-4e21-bd89-dbc37f3f9db0'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Critical Thinking & Problem Solving
SELECT create_complete_curriculum(
  'STEM K-5',
  '8f223951-90c3-4ff9-9507-bc9faa2495a7'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Environmental Studies
SELECT create_complete_curriculum(
  'STEM K-5',
  '4db2bb34-1ddb-4416-9186-b72cc58e1e23'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Programming & Robotics
SELECT create_complete_curriculum(
  'STEM K-5',
  'cddb4d31-301a-4f85-adaf-ea9ee6213db3'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
---- Astronomy
SELECT create_complete_curriculum(
  'STEM K-5',
  '6bf8cf5f-8c76-4ca8-9e5f-2852fac878d9'::uuid,
  'ELECTIVE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": []
    },
    {
      "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
      "topics_data": []
    },
    {
      "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
      "topics_data": []
    },
    {
      "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
      "topics_data": []
    },
    {
      "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
      "topics_data": []
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);

