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
(id, name, animal, image_path, description)
VALUES
('ffba7897-2e54-45c7-bfdc-73953451a867', 'Buds', 'Caterpillars', '/static/images/animals/buds.jpg', 'Nurture the curiosity and potential of our youngest learners as they blossom into eager explorers of the world.'),
('eb6f4266-542d-4978-aa87-cd2444cedd46', 'Sprouts', 'Dogs', '/static/images/animals/saplings.jpg', 'Watch our little sprouts grow and thrive, as they develop a solid foundation of knowledge and skills in a nurturing environment.'),
('ee90a562-4b34-4590-9757-cfcb866876d7', 'Oaks', 'Bees', '/static/images/animals/oaks.jpg', 'Witness the strength and resilience of our mighty oaks, as they deepen their understanding and branch out into new realms of learning.'),
('7567fec9-1a5a-47ac-a2d4-df72df106a53', 'Pre-K', 'Bears', '/static/images/animals/bears.jpg', 'Prepare our young minds for a world of wonder, where imagination and creativity take root, laying the groundwork for future growth.'),
('8787a66e-9e03-42c7-8870-ada6df021491', 'K', 'Monkies', '/static/images/animals/monkey.jpg', 'Embrace the joy of discovery in our kindergarten program, where children‘s enthusiasm and love for learning take flight.'),
('ca0b37a7-47c4-4abb-81a3-64e84f803abd', '1', 'Turtles', '/static/images/animals/turtle.jpg', 'Set sail on a transformative journey through the seas of knowledge, building a strong educational anchor for future success.'),
('485fe542-3c7c-453b-9e18-7baf3c773004', '2', 'Rabbits', '/static/images/animals/rabbit.jpg', 'Cultivate a fertile ground for knowledge and growth, as our second graders develop deeper skills and broaden their horizons.'),
('0679cb12-dd80-4fea-9d01-64c141cba349', '3', 'Foxes', '/static/images/animals/fox.jpg', 'Inspire a thirst for knowledge in our curious learners, fostering a sense of independence and paving the way for further exploration.'),
('4af5ff40-a612-4114-b4fc-01ad0cd8fbf4', '4', 'Deer', '/static/images/animals/deer.jpg', 'Witness the blossoming of critical thinking and problem-solving skills, empowering our fourth graders to make meaningful contributions to the world.'),
('0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa', '5', 'Elephants', '/static/images/animals/elephant.jpg', 'Soar to new heights of academic achievement and personal growth, as our fifth graders prepare to spread their wings and take on the challenges of the future.');


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
--- Little Learners ✅
---- Mathematics ✅
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
---- Science ✅
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
---- Language & Literacy ✅
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
---- Social Studies ✅
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
---- Creative Arts ✅
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
---- Physical Development ✅
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
---- Social Emotional Learning ✅
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


--- Comprehensive K-5
---- Mathematics ✅
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  'b408d3b0-ca53-4385-9c38-388508f6f777'::uuid,
  'CORE'::module_type,
  '[
  {
    "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
    "topics_data": [
      {
        "name": "Foundations of Numbers",
        "description": "Instilling an early love for numbers by understanding their fundamental role in our everyday lives.",
        "image_path": "https://source.unsplash.com/500x500/?numbers,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Counting Fun",
            "description": "An adventurous exploration into the world of counting, reinforcing the concept of numbers through engaging activities.",
            "image_path": "https://source.unsplash.com/500x500/?counting,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Our World",
            "description": "Discovering the variety of shapes around us and recognizing their presence in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,kids",
            "type": "CORE"
          },
          {
            "name": "Colors and Numbers",
            "description": "Connecting numbers with colors to stimulate cognitive development and enhance memory.",
            "image_path": "https://source.unsplash.com/500x500/?colors,numbers,kids",
            "type": "CORE"
          },
          {
            "name": "Number Matching Game",
            "description": "Fostering critical thinking by matching numbered objects to their corresponding numbers.",
            "image_path": "https://source.unsplash.com/500x500/?number,game,kids",
            "type": "CORE"
          },
          {
            "name": "Sequencing Numbers",
            "description": "A fun-filled journey into arranging numbers in order, introducing the concept of sequences.",
            "image_path": "https://source.unsplash.com/500x500/?sequence,numbers,kids",
            "type": "CORE"
          },
          {
            "name": "Introduction to Addition",
            "description": "Making the first steps in learning addition by combining groups of objects.",
            "image_path": "https://source.unsplash.com/500x500/?addition,kids",
            "type": "CORE"
          },
          {
            "name": "Introduction to Subtraction",
            "description": "Embarking on a playful journey to learn subtraction using real-world examples.",
            "image_path": "https://source.unsplash.com/500x500/?subtraction,kids",
            "type": "CORE"
          },
          {
            "name": "Number Story Time",
            "description": "Integrating numbers into exciting storytime sessions to enhance understanding and retention.",
            "image_path": "https://source.unsplash.com/500x500/?storytime,numbers,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Counting Stars",
            "description": "Inspiring imagination by counting stars and understanding the infinity of numbers.",
            "image_path": "https://source.unsplash.com/500x500/?stars,counting,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Kitchen Math",
            "description": "Applying numbers in a practical context by exploring quantities and measurements in the kitchen.",
            "image_path": "https://source.unsplash.com/500x500/?kitchen,math,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Playful Patterns",
        "description": "Unlocking the magic of patterns through fun and immersive activities, fostering early logical and analytical thinking skills.",
        "image_path": "https://source.unsplash.com/500x500/?patterns,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Spotting Patterns",
            "description": "Encouraging the detective inside to identify patterns in our surrounding environment.",
            "image_path": "https://source.unsplash.com/500x500/?patterns,detective,kids",
            "type": "CORE"
          },
          {
            "name": "Creating Patterns",
            "description": "Harnessing creativity to create colorful and exciting patterns with various objects.",
            "image_path": "https://source.unsplash.com/500x500/?creativity,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Nature",
            "description": "Exploring the fascinating world of patterns present in nature and understanding their significance.",
            "image_path": "https://source.unsplash.com/500x500/?nature,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Music",
            "description": "Dancing to the rhythm of patterns in music, and recognizing how patterns form melodies.",
            "image_path": "https://source.unsplash.com/500x500/?music,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Story Patterns",
            "description": "Identifying patterns in our favorite stories and predicting what happens next.",
            "image_path": "https://source.unsplash.com/500x500/?story,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Math",
            "description": "Introducing the concept of sequences and understanding their patterned nature.",
            "image_path": "https://source.unsplash.com/500x500/?math,sequences,kids",
            "type": "CORE"
          },
          {
            "name": "Pattern Puzzles",
            "description": "Solving engaging puzzles to recognize and complete patterns, developing problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?puzzles,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Artistic Patterns",
            "description": "Exploring patterns in art, and creating own masterpieces inspired by these patterns.",
            "image_path": "https://source.unsplash.com/500x500/?art,patterns,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Patterns in Games",
            "description": "Playing games that rely on pattern recognition, enhancing cognitive development through play.",
            "image_path": "https://source.unsplash.com/500x500/?games,patterns,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Patterns in Daily Routine",
            "description": "Connecting the concept of patterns with daily routines, instilling an understanding of order and time management.",
            "image_path": "https://source.unsplash.com/500x500/?routine,patterns,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Exploring Shapes and Spaces",
        "description": "Embarking on an exciting journey through the world of shapes and spaces, strengthening spatial reasoning and geometry foundations.",
        "image_path": "https://source.unsplash.com/500x500/?shapes,spaces,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Shapes",
            "description": "Beginning a magical journey into the world of shapes, exploring everything from circles to squares.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,introduction,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Nature",
            "description": "Discovering how nature embraces shapes in its design, and identifying shapes in our natural surroundings.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,nature,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Art",
            "description": "Understanding the role of shapes in art and creating artistic masterpieces using different shapes.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,art,kids",
            "type": "CORE"
          },
          {
            "name": "Building with Shapes",
            "description": "Creating structures and designs using different shapes, enhancing spatial awareness and creativity.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,building,kids",
            "type": "CORE"
          },
          {
            "name": "Space and Position",
            "description": "Learning about space, position, and directions through playful and engaging activities.",
            "image_path": "https://source.unsplash.com/500x500/?space,position,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes Around Us",
            "description": "Identifying shapes in everyday objects, connecting mathematical concepts with real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,real-world,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes and Patterns",
            "description": "Creating and recognizing patterns with shapes, reinforcing understanding of both shapes and patterns.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Origami Shapes",
            "description": "Crafting beautiful origami creations while learning about the shapes that make them up.",
            "image_path": "https://source.unsplash.com/500x500/?origami,shapes,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Shape Detective",
            "description": "Developing observation skills by going on a shape hunt, identifying and recording the various shapes found.",
            "image_path": "https://source.unsplash.com/500x500/?detective,shapes,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Spaces in Architecture",
            "description": "Exploring how architects use shapes and spaces, and designing dream buildings with understanding of shapes.",
            "image_path": "https://source.unsplash.com/500x500/?architecture,shapes,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Adventure with Measurement",
        "description": "Venturing into the captivating world of measurement, providing a practical and useful way to understand the world around us.",
        "image_path": "https://source.unsplash.com/500x500/?measurement,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Big and Small",
            "description": "Identifying and comparing sizes, understanding the concepts of big and small.",
            "image_path": "https://source.unsplash.com/500x500/?big,small,kids",
            "type": "CORE"
          },
          {
            "name": "Light and Heavy",
            "description": "Experimenting with different objects to learn about weight and understand the concepts of light and heavy.",
            "image_path": "https://source.unsplash.com/500x500/?light,heavy,kids",
            "type": "CORE"
          },
          {
            "name": "Fast and Slow",
            "description": "Observing and understanding speed through various fun activities and games.",
            "image_path": "https://source.unsplash.com/500x500/?fast,slow,kids",
            "type": "CORE"
          },
          {
            "name": "Tall and Short",
            "description": "Exploring the concepts of height, learning about tall and short through comparison.",
            "image_path": "https://source.unsplash.com/500x500/?tall,short,kids",
            "type": "CORE"
          },
          {
            "name": "Long and Short",
            "description": "Playing with different objects to understand length and differentiate between long and short.",
            "image_path": "https://source.unsplash.com/500x500/?long,short,kids",
            "type": "CORE"
          },
          {
            "name": "Warm and Cold",
            "description": "Feeling and comparing temperatures to understand the concepts of warm and cold.",
            "image_path": "https://source.unsplash.com/500x500/?warm,cold,kids",
            "type": "CORE"
          },
          {
            "name": "Understanding Time",
            "description": "Introducing the concept of time, understanding the sequence of daily events, days of the week, and seasons.",
            "image_path": "https://source.unsplash.com/500x500/?time,kids",
            "type": "CORE"
          },
          {
            "name": "Kitchen Measurements",
            "description": "Exploring measurement in a practical context by using recipes and cooking in the kitchen.",
            "image_path": "https://source.unsplash.com/500x500/?kitchen,measurement,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement Scavenger Hunt",
            "description": "Running a scavenger hunt to find and measure items, understanding measurement in a fun and engaging way.",
            "image_path": "https://source.unsplash.com/500x500/?scavenger,hunt,measurement,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Comparing Animal Sizes",
            "description": "Investigating the sizes of different animals, understanding the real-world application of measurement.",
            "image_path": "https://source.unsplash.com/500x500/?animals,sizes,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Journey Into Addition and Subtraction",
        "description": "Introducing the magical concepts of addition and subtraction through engaging stories and hands-on activities.",
        "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "First Steps into Addition",
            "description": "Entering the world of addition through story-telling and hands-on counting activities.",
            "image_path": "https://source.unsplash.com/500x500/?addition,story,kids",
            "type": "CORE"
          },
          {
            "name": "First Steps into Subtraction",
            "description": "Discovering the fundamentals of subtraction using physical objects and story scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?subtraction,story,kids",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction with Pictures",
            "description": "Using illustrations and pictures to understand and practice addition and subtraction.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,pictures,kids",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction in Daily Life",
            "description": "Identifying situations in daily life where addition and subtraction are used, connecting math to real-world experiences.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,daily-life,kids",
            "type": "CORE"
          },
          {
            "name": "Playing with Addition and Subtraction",
            "description": "Enjoying games that incorporate addition and subtraction, making math fun and engaging.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,games,kids",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction Word Problems",
            "description": "Solving simple word problems that require addition and subtraction, enhancing problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,word-problems,kids",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction with Numbers up to 10",
            "description": "Practicing addition and subtraction using numbers up to 10, building confidence in handling numbers.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,numbers,kids",
            "type": "CORE"
          },
          {
            "name": "Crafting with Addition and Subtraction",
            "description": "Incorporating crafting activities to learn addition and subtraction, making learning tactile and visual.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,crafting,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Songs and Rhymes for Addition and Subtraction",
            "description": "Learning songs and rhymes that help remember and understand addition and subtraction.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,songs,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Addition and Subtraction Magic Tricks",
            "description": "Performing simple magic tricks that use addition and subtraction, inspiring curiosity and wonder.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction,magic,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Unfolding Patterns and Sequences",
        "description": "Venturing into the fascinating world of patterns and sequences, developing logical thinking and fostering creativity.",
        "image_path": "https://source.unsplash.com/500x500/?patterns,sequences,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Patterns",
            "description": "Discovering the magic of patterns and the joy of creating and continuing patterns.",
            "image_path": "https://source.unsplash.com/500x500/?patterns,introduction,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Nature",
            "description": "Observing and learning about the amazing patterns that can be found in the natural world.",
            "image_path": "https://source.unsplash.com/500x500/?patterns,nature,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes and Patterns",
            "description": "Using shapes to create and identify patterns, enhancing spatial and pattern recognition skills.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Music and Dance",
            "description": "Exploring patterns in rhythm and movement, linking mathematics with arts.",
            "image_path": "https://source.unsplash.com/500x500/?music,dance,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Number Patterns",
            "description": "Identifying and creating patterns with numbers, reinforcing the understanding of number sequences.",
            "image_path": "https://source.unsplash.com/500x500/?numbers,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Patterns in Everyday Life",
            "description": "Finding patterns in everyday scenarios, connecting mathematical concepts with the real world.",
            "image_path": "https://source.unsplash.com/500x500/?patterns,everyday-life,kids",
            "type": "CORE"
          },
          {
            "name": "Creating Patterns with Objects",
            "description": "Using a variety of objects to create patterns, making learning tangible and fun.",
            "image_path": "https://source.unsplash.com/500x500/?objects,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Crafting with Patterns",
            "description": "Crafting beautiful creations with patterns, applying mathematical concepts in a creative way.",
            "image_path": "https://source.unsplash.com/500x500/?crafting,patterns,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Patterns in Games",
            "description": "Discovering patterns in games, turning learning into a fun and interactive experience.",
            "image_path": "https://source.unsplash.com/500x500/?games,patterns,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Patterns and Coding",
            "description": "Introducing the concept of coding through patterns, inspiring the little programmers of tomorrow.",
            "image_path": "https://source.unsplash.com/500x500/?coding,patterns,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Exploring Geometry and Shapes",
        "description": "Embarking on a captivating journey to learn about shapes and their properties, fostering spatial awareness and creativity.",
        "image_path": "https://source.unsplash.com/500x500/?geometry,shapes,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Shapes",
            "description": "Entering the world of shapes, identifying different shapes in a fun and interactive way.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,introduction,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Our Environment",
            "description": "Observing and learning about the various shapes that can be found in our surroundings.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,environment,kids",
            "type": "CORE"
          },
          {
            "name": "Creating Shapes",
            "description": "Crafting and creating shapes, making learning tactile and visual.",
            "image_path": "https://source.unsplash.com/500x500/?creating,shapes,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes and Patterns",
            "description": "Creating and identifying patterns using shapes, reinforcing spatial and pattern recognition skills.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,patterns,kids",
            "type": "CORE"
          },
          {
            "name": "Geometry in Art",
            "description": "Exploring shapes and geometry through art, linking mathematical concepts with creativity.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,art,kids",
            "type": "CORE"
          },
          {
            "name": "Sorting and Classifying Shapes",
            "description": "Sorting and classifying shapes based on their properties, enhancing logical thinking and observation skills.",
            "image_path": "https://source.unsplash.com/500x500/?sorting,shapes,kids",
            "type": "CORE"
          },
          {
            "name": "3D Shapes",
            "description": "Introducing three-dimensional shapes and their properties, fostering spatial understanding.",
            "image_path": "https://source.unsplash.com/500x500/?3D,shapes,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Architecture",
            "description": "Exploring how shapes are used in architecture, seeing the practical applications of geometry in the real world.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,architecture,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Shapes and Games",
            "description": "Playing games that involve shape recognition, making learning shapes a fun experience.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,games,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Shapes and Puzzles",
            "description": "Solving puzzles that require shape knowledge, challenging thinking and problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,puzzles,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Magical World of Measurement",
        "description": "Stepping into the exciting realm of measurement, understanding size, length, weight, and capacity through practical activities.",
        "image_path": "https://source.unsplash.com/500x500/?measurement,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Measurement",
            "description": "Getting to know the concept of measurement and its importance in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,introduction,kids",
            "type": "CORE"
          },
          {
            "name": "Measuring Length",
            "description": "Discovering how to measure length with various objects and tools, reinforcing practical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,length,kids",
            "type": "CORE"
          },
          {
            "name": "Measuring Weight",
            "description": "Exploring the concept of weight and how to compare weights of different objects.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,weight,kids",
            "type": "CORE"
          },
          {
            "name": "Measuring Capacity",
            "description": "Understanding the concept of capacity, learning how to compare and measure the capacity of various containers.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,capacity,kids",
            "type": "CORE"
          },
          {
            "name": "Measurement in Cooking",
            "description": "Applying measurement concepts in cooking, seeing the practical use of measurement in everyday activities.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,cooking,kids",
            "type": "CORE"
          },
          {
            "name": "Measurement Games",
            "description": "Playing engaging games that incorporate measurement, turning learning into a fun experience.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,games,kids",
            "type": "CORE"
          },
          {
            "name": "Measurement Crafts",
            "description": "Crafting projects that involve measurement, making learning tactile and practical.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,crafts,kids",
            "type": "CORE"
          },
          {
            "name": "Measurement in Nature",
            "description": "Observing and measuring elements in nature, connecting mathematical concepts with the natural world.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,nature,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement in Music",
            "description": "Understanding the role of measurement in music, making links between mathematics and the arts.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,music,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement and Puzzles",
            "description": "Solving puzzles that require measurement knowledge, challenging thinking and problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,puzzles,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fun with Money",
        "description": "Delving into the world of money, introducing basic concepts of currency, saving, and spending through interactive activities.",
        "image_path": "https://source.unsplash.com/500x500/?money,kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Money",
            "description": "Understanding the concept of money, its use, and the different types of coins and notes.",
            "image_path": "https://source.unsplash.com/500x500/?money,introduction,kids",
            "type": "CORE"
          },
          {
            "name": "Identifying Coins and Notes",
            "description": "Learning to identify different coins and notes, familiarizing with their values.",
            "image_path": "https://source.unsplash.com/500x500/?coins,notes,kids",
            "type": "CORE"
          },
          {
            "name": "Counting Money",
            "description": "Developing the ability to count money, reinforcing basic addition skills.",
            "image_path": "https://source.unsplash.com/500x500/?counting,money,kids",
            "type": "CORE"
          },
          {
            "name": "Money and Shopping",
            "description": "Understanding the role of money in shopping, practicing spending and receiving change.",
            "image_path": "https://source.unsplash.com/500x500/?shopping,money,kids",
            "type": "CORE"
          },
          {
            "name": "Money and Saving",
            "description": "Introducing the concept of saving money, fostering the importance of financial responsibility.",
            "image_path": "https://source.unsplash.com/500x500/?saving,money,kids",
            "type": "CORE"
          },
          {
            "name": "Money Games",
            "description": "Engaging in games that involve the use of money, making learning about money a fun experience.",
            "image_path": "https://source.unsplash.com/500x500/?games,money,kids",
            "type": "CORE"
          },
          {
            "name": "Money and Crafts",
            "description": "Creating crafts related to money, providing a hands-on learning experience.",
            "image_path": "https://source.unsplash.com/500x500/?crafts,money,kids",
            "type": "CORE"
          },
          {
            "name": "Money and Charitable Giving",
            "description": "Understanding the concept of charitable giving, fostering empathy and social responsibility.",
            "image_path": "https://source.unsplash.com/500x500/?charity,money,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Money and Entrepreneurship",
            "description": "Introducing the concept of entrepreneurship, inspiring creativity and business understanding.",
            "image_path": "https://source.unsplash.com/500x500/?entrepreneurship,money,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Money and Global Currencies",
            "description": "Exploring global currencies, broadening understanding of the world and its diversity.",
            "image_path": "https://source.unsplash.com/500x500/?currencies,world,kids",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Journey into Space",
        "description": "Embarking on an exciting journey into space, using basic math concepts to understand the universe around us.",
        "image_path": "https://source.unsplash.com/500x500/?space,kids",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Space Exploration Introduction",
            "description": "Learning about the vast universe, planets, and stars, sparking curiosity and wonder about space.",
            "image_path": "https://source.unsplash.com/500x500/?space,exploration,kids",
            "type": "CORE"
          },
          {
            "name": "Planets and Numbers",
            "description": "Counting the planets in our solar system, integrating space knowledge with numeracy skills.",
            "image_path": "https://source.unsplash.com/500x500/?planets,numbers,kids",
            "type": "CORE"
          },
          {
            "name": "Shapes in Space",
            "description": "Identifying different shapes by looking at celestial bodies and space vehicles.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,space,kids",
            "type": "CORE"
          },
          {
            "name": "Measurement in Space",
            "description": "Understanding the size and distance of celestial bodies, making the concept of measurement fascinating and tangible.",
            "image_path": "https://source.unsplash.com/500x500/?measurement,space,kids",
            "type": "CORE"
          },
          {
            "name": "Time and Space",
            "description": "Learning about the concept of time in space, reinforcing understanding of time and its measurement.",
            "image_path": "https://source.unsplash.com/500x500/?time,space,kids",
            "type": "CORE"
          },
          {
            "name": "Astronomy Art",
            "description": "Creating space-themed art projects, combining creativity with learning about space.",
            "image_path": "https://source.unsplash.com/500x500/?art,space,kids",
            "type": "ELECTIVE"
          },
          {
            "name": "Space and Storytelling",
            "description": "Telling stories related to space and celestial bodies, making learning more imaginative and fun.",
            "image_path": "https://source.unsplash.com/500x500/?storytelling,space,kids",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
  {
    "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
    "topics_data": [
      {
        "name": "Magical Numbers",
        "description": "Unraveling the mystery of numbers and their patterns in a fun and engaging way.",
        "image_path": "https://source.unsplash.com/500x500/?numbers",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Numbers and You",
            "description": "A friendly introduction to the fascinating world of numbers and their importance in our daily life.",
            "image_path": "https://source.unsplash.com/500x500/?number",
            "type": "CORE"
          },
          {
            "name": "Counting Magic",
            "description": "Learn counting techniques and explore the magic behind numbers.",
            "image_path": "https://source.unsplash.com/500x500/?counting",
            "type": "CORE"
          },
          {
            "name": "Pattern Discovery",
            "description": "Identifying patterns in numbers and understanding their rhythm.",
            "image_path": "https://source.unsplash.com/500x500/?pattern",
            "type": "CORE"
          },
          {
            "name": "Number Puzzles",
            "description": "Using fun puzzles to strengthen number recognition and understanding.",
            "image_path": "https://source.unsplash.com/500x500/?puzzle",
            "type": "CORE"
          },
          {
            "name": "The World of Digits",
            "description": "Exploring the ten digits that make up every number we know.",
            "image_path": "https://source.unsplash.com/500x500/?digits",
            "type": "CORE"
          },
          {
            "name": "The Art of Comparing",
            "description": "Learning to compare numbers to understand greater and lesser values.",
            "image_path": "https://source.unsplash.com/500x500/?comparing",
            "type": "CORE"
          },
          {
            "name": "Step into Addition",
            "description": "An exciting first step into the world of addition.",
            "image_path": "https://source.unsplash.com/500x500/?addition",
            "type": "CORE"
          },
          {
            "name": "Exploring Even and Odd",
            "description": "A playful exploration into the world of even and odd numbers.",
            "image_path": "https://source.unsplash.com/500x500/?even-odd",
            "type": "ELECTIVE"
          },
          {
            "name": "Numbers in Nature",
            "description": "Discovering how numbers and patterns occur naturally in the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?nature",
            "type": "ELECTIVE"
          },
          {
            "name": "Our Friend Zero",
            "description": "Understanding the concept and significance of the number zero.",
            "image_path": "https://source.unsplash.com/500x500/?zero",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Shapes and Space",
        "description": "Venturing into the vibrant world of shapes and exploring the intriguing concept of space.",
        "image_path": "https://source.unsplash.com/500x500/?shapes",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Shapes Around Us",
            "description": "Identifying and learning about the various shapes that make up our world.",
            "image_path": "https://source.unsplash.com/500x500/?shapes-in-nature",
            "type": "CORE"
          },
          {
            "name": "Introduction to 2D Shapes",
            "description": "Discovering the beauty and simplicity of two-dimensional shapes.",
            "image_path": "https://source.unsplash.com/500x500/?2d-shapes",
            "type": "CORE"
          },
          {
            "name": "Introduction to 3D Shapes",
            "description": "Stepping into the exciting realm of three-dimensional shapes.",
            "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
            "type": "CORE"
          },
          {
            "name": "Drawing with Shapes",
            "description": "Expressing creativity and understanding shapes better by drawing.",
            "image_path": "https://source.unsplash.com/500x500/?drawing",
            "type": "CORE"
          },
          {
            "name": "Shapes and Patterns",
            "description": "Exploring the fascinating patterns created by shapes.",
            "image_path": "https://source.unsplash.com/500x500/?patterns",
            "type": "CORE"
          },
          {
            "name": "Introduction to Space",
            "description": "Understanding the concept of space and how it relates to shapes.",
            "image_path": "https://source.unsplash.com/500x500/?space",
            "type": "CORE"
          },
          {
            "name": "Shape Matching",
            "description": "Strengthening understanding of shapes with fun and engaging matching activities.",
            "image_path": "https://source.unsplash.com/500x500/?matching",
            "type": "CORE"
          },
          {
            "name": "The Geometry of Nature",
            "description": "Discovering how shapes and geometry appear naturally in our surroundings.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-nature",
            "type": "ELECTIVE"
          },
          {
            "name": "Shapes in Architecture",
            "description": "Exploring how shapes contribute to beautiful structures and buildings.",
            "image_path": "https://source.unsplash.com/500x500/?architecture",
            "type": "ELECTIVE"
          },
          {
            "name": "Space in Art",
            "description": "Understanding the concept of space in the world of art.",
            "image_path": "https://source.unsplash.com/500x500/?art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Measurement Marvels",
        "description": "Unlocking the magic of measurements and understanding their vital role in everyday life.",
        "image_path": "https://source.unsplash.com/500x500/?measurement",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Importance of Measurement",
            "description": "Grasping the fundamental concept of measurement and its relevance in our day-to-day life.",
            "image_path": "https://source.unsplash.com/500x500/?importance-measurement",
            "type": "CORE"
          },
          {
            "name": "Length and Height",
            "description": "Learning to measure length and height using common tools.",
            "image_path": "https://source.unsplash.com/500x500/?ruler",
            "type": "CORE"
          },
          {
            "name": "Weight Wonders",
            "description": "Delving into the concept of weight and learning to compare the weight of different objects.",
            "image_path": "https://source.unsplash.com/500x500/?weight",
            "type": "CORE"
          },
          {
            "name": "Volume and Capacity",
            "description": "Exploring the intriguing world of volume and capacity with fun, practical examples.",
            "image_path": "https://source.unsplash.com/500x500/?volume-capacity",
            "type": "CORE"
          },
          {
            "name": "Time Telling",
            "description": "Mastering the art of telling time and understanding the significance of time management.",
            "image_path": "https://source.unsplash.com/500x500/?clock",
            "type": "CORE"
          },
          {
            "name": "Temperature Talk",
            "description": "Diving into the concept of temperature and learning about thermometers.",
            "image_path": "https://source.unsplash.com/500x500/?thermometer",
            "type": "CORE"
          },
          {
            "name": "Money Matters",
            "description": "Introducing the concept of money and the basics of counting coins and bills.",
            "image_path": "https://source.unsplash.com/500x500/?money",
            "type": "CORE"
          },
          {
            "name": "Measurement in Cooking",
            "description": "Learning about measurements in a fun and practical way through cooking and baking.",
            "image_path": "https://source.unsplash.com/500x500/?cooking",
            "type": "ELECTIVE"
          },
          {
            "name": "Estimation Essentials",
            "description": "Developing the skill of estimating measurements for different objects.",
            "image_path": "https://source.unsplash.com/500x500/?estimation",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement in Art",
            "description": "Appreciating the role of measurement in the creation of beautiful art.",
            "image_path": "https://source.unsplash.com/500x500/?art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Data and Probability",
        "description": "Stepping into the fascinating world of data interpretation and the fundamentals of probability.",
        "image_path": "https://source.unsplash.com/500x500/?data",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Data",
            "description": "Introducing the concept of data and its significance in making decisions.",
            "image_path": "https://source.unsplash.com/500x500/?data-understanding",
            "type": "CORE"
          },
          {
            "name": "Collecting Data",
            "description": "Learning the art of collecting data through observations and surveys.",
            "image_path": "https://source.unsplash.com/500x500/?data-collection",
            "type": "CORE"
          },
          {
            "name": "Picturing Data",
            "description": "Visualizing data using pictures and diagrams to make information easier to understand.",
            "image_path": "https://source.unsplash.com/500x500/?data-visualization",
            "type": "CORE"
          },
          {
            "name": "Bar Graph Basics",
            "description": "Discovering how bar graphs can make interpreting data a breeze.",
            "image_path": "https://source.unsplash.com/500x500/?bar-graph",
            "type": "CORE"
          },
          {
            "name": "The Pie Chart Puzzle",
            "description": "Exploring pie charts and learning to interpret them.",
            "image_path": "https://source.unsplash.com/500x500/?pie-chart",
            "type": "CORE"
          },
          {
            "name": "Introduction to Probability",
            "description": "Unveiling the concept of probability and its role in predicting outcomes.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Probability in Games",
            "description": "Understanding how probability influences the outcomes of simple games.",
            "image_path": "https://source.unsplash.com/500x500/?games",
            "type": "CORE"
          },
          {
            "name": "Data in Nature",
            "description": "Exploring how data is represented and used in the natural world.",
            "image_path": "https://source.unsplash.com/500x500/?nature",
            "type": "ELECTIVE"
          },
          {
            "name": "Weather and Data",
            "description": "Learning about data collection and interpretation through weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "ELECTIVE"
          },
          {
            "name": "Sports and Statistics",
            "description": "Understanding the crucial role data and probability play in sports.",
            "image_path": "https://source.unsplash.com/500x500/?sports",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Adventures in Addition and Subtraction",
        "description": "Exploring the intriguing world of addition and subtraction to solve everyday problems.",
        "image_path": "https://source.unsplash.com/500x500/?math",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Addition",
            "description": "Learning the concept of addition and its use in combining quantities.",
            "image_path": "https://source.unsplash.com/500x500/?addition",
            "type": "CORE"
          },
          {
            "name": "Introduction to Subtraction",
            "description": "Understanding the concept of subtraction as taking away quantities.",
            "image_path": "https://source.unsplash.com/500x500/?subtraction",
            "type": "CORE"
          },
          {
            "name": "Addition Facts to 10",
            "description": "Mastering the basic addition facts for numbers up to 10.",
            "image_path": "https://source.unsplash.com/500x500/?addition-facts",
            "type": "CORE"
          },
          {
            "name": "Subtraction Facts to 10",
            "description": "Getting to grips with basic subtraction facts for numbers up to 10.",
            "image_path": "https://source.unsplash.com/500x500/?subtraction-facts",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction Word Problems",
            "description": "Applying addition and subtraction skills to solve practical word problems.",
            "image_path": "https://source.unsplash.com/500x500/?word-problems",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction with Pictures",
            "description": "Using pictures to make understanding addition and subtraction even easier.",
            "image_path": "https://source.unsplash.com/500x500/?math-pictures",
            "type": "CORE"
          },
          {
            "name": "Mental Math Magic",
            "description": "Sharpening mental math skills for quick addition and subtraction.",
            "image_path": "https://source.unsplash.com/500x500/?mental-math",
            "type": "CORE"
          },
          {
            "name": "Addition and Subtraction in Games",
            "description": "Practicing addition and subtraction skills in the context of fun and engaging games.",
            "image_path": "https://source.unsplash.com/500x500/?math-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Music",
            "description": "Discovering how addition and subtraction are used in the world of music.",
            "image_path": "https://source.unsplash.com/500x500/?music",
            "type": "ELECTIVE"
          },
          {
            "name": "Addition and Subtraction in Nature",
            "description": "Exploring real-world examples of addition and subtraction in nature.",
            "image_path": "https://source.unsplash.com/500x500/?nature",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Geometry Gems",
        "description": "Embarking on a vibrant journey into the world of shapes, lines, and angles.",
        "image_path": "https://source.unsplash.com/500x500/?geometry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Shapes Around Us",
            "description": "Identifying and classifying common shapes in our environment.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "CORE"
          },
          {
            "name": "Fun with Lines",
            "description": "Exploring different types of lines: straight, curved, wavy, and more.",
            "image_path": "https://source.unsplash.com/500x500/?lines",
            "type": "CORE"
          },
          {
            "name": "Angles and Turns",
            "description": "Understanding the basics of angles and how they are involved in everyday movements.",
            "image_path": "https://source.unsplash.com/500x500/?angles",
            "type": "CORE"
          },
          {
            "name": "Pattern Play",
            "description": "Discovering and creating exciting patterns using geometric shapes.",
            "image_path": "https://source.unsplash.com/500x500/?patterns",
            "type": "CORE"
          },
          {
            "name": "2D and 3D Shapes",
            "description": "Distinguishing between two-dimensional and three-dimensional shapes and their properties.",
            "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
            "type": "CORE"
          },
          {
            "name": "Symmetry in Shapes",
            "description": "Recognizing symmetry in various shapes and understanding its beauty.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry",
            "type": "CORE"
          },
          {
            "name": "Sorting and Categorizing Shapes",
            "description": "Learning to sort and categorize shapes based on their attributes.",
            "image_path": "https://source.unsplash.com/500x500/?sort-shapes",
            "type": "CORE"
          },
          {
            "name": "Shapes in Art",
            "description": "Appreciating the role of shapes in creating beautiful pieces of art.",
            "image_path": "https://source.unsplash.com/500x500/?art",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry in Architecture",
            "description": "Exploring how geometry contributes to stunning architectural designs.",
            "image_path": "https://source.unsplash.com/500x500/?architecture",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry in Nature",
            "description": "Observing the beautiful geometrical patterns found in nature.",
            "image_path": "https://source.unsplash.com/500x500/?nature",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Time Travelers",
        "description": "Diving into the concept of time, from seconds to seasons, and learning to master the clock.",
        "image_path": "https://source.unsplash.com/500x500/?clock",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Tick-Tock: Understanding the Clock",
            "description": "Learning to read the hours and minutes on a traditional analog clock.",
            "image_path": "https://source.unsplash.com/500x500/?analog-clock",
            "type": "CORE"
          },
          {
            "name": "Digital Time",
            "description": "Exploring digital clocks and how they display time differently.",
            "image_path": "https://source.unsplash.com/500x500/?digital-clock",
            "type": "CORE"
          },
          {
            "name": "A.M. and P.M.: Splitting the Day",
            "description": "Understanding the difference between A.M. and P.M. and when to use each.",
            "image_path": "https://source.unsplash.com/500x500/?day-night",
            "type": "CORE"
          },
          {
            "name": "Days, Weeks, and Months",
            "description": "Learning about the calendar and how days, weeks, and months are organized.",
            "image_path": "https://source.unsplash.com/500x500/?calendar",
            "type": "CORE"
          },
          {
            "name": "The Four Seasons",
            "description": "Discovering the four seasons and how they change throughout the year.",
            "image_path": "https://source.unsplash.com/500x500/?seasons",
            "type": "CORE"
          },
          {
            "name": "Telling Time in Daily Life",
            "description": "Applying time-reading skills to real-world situations like schedules and events.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life",
            "type": "CORE"
          },
          {
            "name": "Time for Play: Games with Time",
            "description": "Playing fun games that help strengthen time-reading skills.",
            "image_path": "https://source.unsplash.com/500x500/?time-games",
            "type": "CORE"
          },
          {
            "name": "Time in Music",
            "description": "Learning how time signatures in music correlate with the concept of time.",
            "image_path": "https://source.unsplash.com/500x500/?music",
            "type": "ELECTIVE"
          },
          {
            "name": "Historical Times",
            "description": "Exploring historical periods and how time helps us understand history.",
            "image_path": "https://source.unsplash.com/500x500/?history",
            "type": "ELECTIVE"
          },
          {
            "name": "Time in Space",
            "description": "Discovering how astronauts keep track of time in space.",
            "image_path": "https://source.unsplash.com/500x500/?space",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Money Matters",
        "description": "Embarking on an exciting journey to understand the value and importance of money.",
        "image_path": "https://source.unsplash.com/500x500/?money",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What is Money?",
            "description": "Learning the basics of money, its purposes, and the different forms it takes.",
            "image_path": "https://source.unsplash.com/500x500/?coins",
            "type": "CORE"
          },
          {
            "name": "Identifying Coins",
            "description": "Exploring and identifying the various types of coins and their values.",
            "image_path": "https://source.unsplash.com/500x500/?coin-collection",
            "type": "CORE"
          },
          {
            "name": "Identifying Bills",
            "description": "Understanding different denominations of paper money and recognizing their values.",
            "image_path": "https://source.unsplash.com/500x500/?paper-money",
            "type": "CORE"
          },
          {
            "name": "Making Change",
            "description": "Learning to calculate change and understand the importance of saving and spending wisely.",
            "image_path": "https://source.unsplash.com/500x500/?change",
            "type": "CORE"
          },
          {
            "name": "Price Tags and Shopping",
            "description": "Applying money understanding in a shopping scenario by interpreting price tags and calculating totals.",
            "image_path": "https://source.unsplash.com/500x500/?shopping",
            "type": "CORE"
          },
          {
            "name": "Money in Games",
            "description": "Engaging in games that reinforce concepts of money and change.",
            "image_path": "https://source.unsplash.com/500x500/?board-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Money in Different Cultures",
            "description": "Exploring how different cultures around the world use and view money.",
            "image_path": "https://source.unsplash.com/500x500/?world-money",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Magic of Fractions",
        "description": "Embarking on an enchanting journey into the world of fractions, exploring halves, quarters and more.",
        "image_path": "https://source.unsplash.com/500x500/?fractions",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Fraction Fundamentals",
            "description": "Introducing the concept of fractions as parts of a whole.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-basic",
            "type": "CORE"
          },
          {
            "name": "Halves and Wholes",
            "description": "Exploring the concept of halves and understanding that two halves make a whole.",
            "image_path": "https://source.unsplash.com/500x500/?half",
            "type": "CORE"
          },
          {
            "name": "Quarters and Fourths",
            "description": "Learning about quarters or fourths and how four quarters make up a whole.",
            "image_path": "https://source.unsplash.com/500x500/?quarter",
            "type": "CORE"
          },
          {
            "name": "Fraction Fun with Food",
            "description": "Using food items like pizza and cake to understand and visualize fractions.",
            "image_path": "https://source.unsplash.com/500x500/?food-fraction",
            "type": "CORE"
          },
          {
            "name": "Fractions in Daily Life",
            "description": "Identifying the use of fractions in everyday scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life",
            "type": "CORE"
          },
          {
            "name": "Fraction Art",
            "description": "Creating beautiful art while learning and practicing fractions.",
            "image_path": "https://source.unsplash.com/500x500/?art",
            "type": "ELECTIVE"
          },
          {
            "name": "Fraction Games",
            "description": "Engaging in interactive games that reinforce understanding of fractions.",
            "image_path": "https://source.unsplash.com/500x500/?games",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Solving Puzzles",
        "description": "Stepping into a world of logic and problem-solving through engaging and fun puzzles.",
        "image_path": "https://source.unsplash.com/500x500/?puzzles",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "What is a Puzzle?",
            "description": "Understanding the concept of puzzles and the skills they help develop.",
            "image_path": "https://source.unsplash.com/500x500/?puzzle",
            "type": "CORE"
          },
          {
            "name": "Jigsaw Joy",
            "description": "Experiencing the joy of solving jigsaw puzzles and the lessons they teach.",
            "image_path": "https://source.unsplash.com/500x500/?jigsaw",
            "type": "CORE"
          },
          {
            "name": "Puzzling Patterns",
            "description": "Identifying and creating patterns through puzzle-solving activities.",
            "image_path": "https://source.unsplash.com/500x500/?pattern",
            "type": "CORE"
          },
          {
            "name": "Mazes and Labyrinths",
            "description": "Navigating mazes and labyrinths, honing logical thinking and decision-making skills.",
            "image_path": "https://source.unsplash.com/500x500/?maze",
            "type": "CORE"
          },
          {
            "name": "Crossword Conundrums",
            "description": "Solving crossword puzzles to improve vocabulary and cognitive skills.",
            "image_path": "https://source.unsplash.com/500x500/?crossword",
            "type": "CORE"
          },
          {
            "name": "Puzzles in Nature",
            "description": "Discovering natural patterns and sequences that create nature‘s own puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?nature",
            "type": "ELECTIVE"
          },
          {
            "name": "Puzzle Creation",
            "description": "Creating our own puzzles to challenge friends and family while understanding puzzle design.",
            "image_path": "https://source.unsplash.com/500x500/?puzzle-creation",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
  {
    "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
    "topics_data": [
      {
        "name": "Mastery of Basic Operations",
        "description": "Laying the solid foundation of addition and subtraction while introducing multiplication and division to unlock the world of mathematics.",
        "image_path": "https://source.unsplash.com/500x500/?math,operations",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Advanced Addition",
            "description": "Deepening the understanding of addition with larger numbers and more complex problems.",
            "image_path": "https://source.unsplash.com/500x500/?math,addition",
            "type": "CORE"
          },
          {
            "name": "Subtraction with Regrouping",
            "description": "Learning the magic of regrouping to conquer any subtraction problem.",
            "image_path": "https://source.unsplash.com/500x500/?math,subtraction",
            "type": "CORE"
          },
          {
            "name": "Introduction to Multiplication",
            "description": "Stepping into the world of multiplication, understanding it as repeated addition.",
            "image_path": "https://source.unsplash.com/500x500/?math,multiplication",
            "type": "CORE"
          },
          {
            "name": "Basics of Division",
            "description": "Exploring division as the inverse of multiplication, forming the initial concept.",
            "image_path": "https://source.unsplash.com/500x500/?math,division",
            "type": "CORE"
          },
          {
            "name": "Number Patterns",
            "description": "Spotting patterns in numbers to predict what comes next, honing logical reasoning.",
            "image_path": "https://source.unsplash.com/500x500/?math,patterns",
            "type": "CORE"
          },
          {
            "name": "Word Problems",
            "description": "Applying mathematical operations to real-world scenarios, making math meaningful and fun.",
            "image_path": "https://source.unsplash.com/500x500/?math,word-problems",
            "type": "CORE"
          },
          {
            "name": "Speed Maths",
            "description": "Developing swift calculation skills to solve math problems quickly and efficiently.",
            "image_path": "https://source.unsplash.com/500x500/?math,speed",
            "type": "CORE"
          },
          {
            "name": "Puzzle Solving",
            "description": "Sharpening problem-solving skills and exercising the mind with challenging math puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?math,puzzle",
            "type": "ELECTIVE"
          },
          {
            "name": "Math Through Games",
            "description": "Making math enjoyable and intuitive through games that reinforce basic operations.",
            "image_path": "https://source.unsplash.com/500x500/?math,games",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Everyday Life",
            "description": "Connecting math to everyday life, demonstrating its usefulness and practicality.",
            "image_path": "https://source.unsplash.com/500x500/?math,everyday",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Understanding Shapes and Spaces",
        "description": "Exploring the diverse and exciting world of geometry, where math meets imagination.",
        "image_path": "https://source.unsplash.com/500x500/?geometry,shapes",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "2D Shapes Around Us",
            "description": "Identifying and understanding the properties of two-dimensional shapes in our environment.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,2dshapes",
            "type": "CORE"
          },
          {
            "name": "Introduction to 3D Shapes",
            "description": "Stepping into the three-dimensional world, recognizing and learning about different 3D shapes.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,3dshapes",
            "type": "CORE"
          },
          {
            "name": "Lines and Angles",
            "description": "Uncovering the mysteries of lines and angles, the basic building blocks of shapes.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,lines,angles",
            "type": "CORE"
          },
          {
            "name": "Understanding Symmetry",
            "description": "Exploring symmetry in shapes, understanding its beauty and significance in math and nature.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,symmetry",
            "type": "CORE"
          },
          {
            "name": "Spatial Reasoning",
            "description": "Developing spatial reasoning skills, navigating and understanding the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,spatialreasoning",
            "type": "CORE"
          },
          {
            "name": "Fractions with Shapes",
            "description": "Introducing fractions using shapes, making complex concepts tangible and simple.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,fractions",
            "type": "CORE"
          },
          {
            "name": "Pattern Blocks",
            "description": "Using pattern blocks for hands-on exploration of shapes and space.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,patternblocks",
            "type": "CORE"
          },
          {
            "name": "Geometry in Architecture",
            "description": "Discovering the role of geometry in architecture, bridging math and the physical world.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,architecture",
            "type": "ELECTIVE"
          },
          {
            "name": "Tangram Puzzles",
            "description": "Solving tangram puzzles to understand shape properties and improve spatial reasoning.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,tangram",
            "type": "ELECTIVE"
          },
          {
            "name": "Art in Geometry",
            "description": "Creating art using geometric shapes, blending creativity with mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Exploring Data and Probability",
        "description": "Venturing into the fascinating realm of data, probability, and statistics, enabling logical reasoning and decision making.",
        "image_path": "https://source.unsplash.com/500x500/?data,probability",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Data",
            "description": "Understanding the basics of data and how it helps us comprehend the world.",
            "image_path": "https://source.unsplash.com/500x500/?data,introduction",
            "type": "CORE"
          },
          {
            "name": "Creating Graphs",
            "description": "Learning to represent data visually with graphs for easy understanding and analysis.",
            "image_path": "https://source.unsplash.com/500x500/?graphs,data",
            "type": "CORE"
          },
          {
            "name": "Interpreting Graphs",
            "description": "Developing skills to interpret and draw conclusions from different types of graphs.",
            "image_path": "https://source.unsplash.com/500x500/?graphs,interpretation",
            "type": "CORE"
          },
          {
            "name": "Probability Basics",
            "description": "Stepping into the intriguing world of probability, understanding chance and likelihood.",
            "image_path": "https://source.unsplash.com/500x500/?probability,basics",
            "type": "CORE"
          },
          {
            "name": "Probability Games",
            "description": "Playing games to reinforce concepts of probability, making learning fun and engaging.",
            "image_path": "https://source.unsplash.com/500x500/?probability,games",
            "type": "CORE"
          },
          {
            "name": "Introduction to Statistics",
            "description": "Dipping toes into statistics, understanding how it helps us make sense of data.",
            "image_path": "https://source.unsplash.com/500x500/?statistics,introduction",
            "type": "CORE"
          },
          {
            "name": "Collecting and Organizing Data",
            "description": "Learning to collect and organize data effectively for better analysis and understanding.",
            "image_path": "https://source.unsplash.com/500x500/?data,organization",
            "type": "CORE"
          },
          {
            "name": "Data in Everyday Life",
            "description": "Appreciating the role of data in our daily lives, enhancing practical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?data,everyday",
            "type": "ELECTIVE"
          },
          {
            "name": "Probability and Decision Making",
            "description": "Understanding how probability influences decision making in real-life situations.",
            "image_path": "https://source.unsplash.com/500x500/?probability,decision",
            "type": "ELECTIVE"
          },
          {
            "name": "Data and Sports",
            "description": "Exploring the role of data and statistics in sports, making math relevant and interesting.",
            "image_path": "https://source.unsplash.com/500x500/?data,sports",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Numbers and Place Values",
        "description": "Diving deep into the world of numbers, understanding their structure, and the importance of place values.",
        "image_path": "https://source.unsplash.com/500x500/?numbers,placevalues",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Identifying Numbers",
            "description": "Enhancing recognition and understanding of larger numbers and their properties.",
            "image_path": "https://source.unsplash.com/500x500/?numbers,identification",
            "type": "CORE"
          },
          {
            "name": "Introduction to Place Values",
            "description": "Unveiling the significance of position in a number, introducing place values.",
            "image_path": "https://source.unsplash.com/500x500/?placevalues,introduction",
            "type": "CORE"
          },
          {
            "name": "Practicing Place Values",
            "description": "Strengthening the grasp of place values through active practice and challenging exercises.",
            "image_path": "https://source.unsplash.com/500x500/?placevalues,practice",
            "type": "CORE"
          },
          {
            "name": "Number Comparisons",
            "description": "Comparing and ordering numbers, understanding their relative sizes and relationships.",
            "image_path": "https://source.unsplash.com/500x500/?numbers,comparison",
            "type": "CORE"
          },
          {
            "name": "Rounding and Estimation",
            "description": "Learning to round numbers and estimate results, valuable tools for mental math.",
            "image_path": "https://source.unsplash.com/500x500/?rounding,estimation",
            "type": "CORE"
          },
          {
            "name": "Skip Counting",
            "description": "Mastering skip counting, a stepping stone towards multiplication and division.",
            "image_path": "https://source.unsplash.com/500x500/?skipcounting",
            "type": "CORE"
          },
          {
            "name": "Number Sequences",
            "description": "Unraveling patterns in number sequences, boosting logical thinking and problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?numbersequences",
            "type": "CORE"
          },
          {
            "name": "Number Fun with Puzzles",
            "description": "Applying number sense to solve engaging puzzles, making learning fun.",
            "image_path": "https://source.unsplash.com/500x500/?numbers,puzzles",
            "type": "ELECTIVE"
          },
          {
            "name": "Numbers in Real Life",
            "description": "Connecting number concepts to real-life situations, enhancing understanding and relevance.",
            "image_path": "https://source.unsplash.com/500x500/?numbers,reallife",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Large Numbers",
            "description": "Adventuring into the world of large numbers, appreciating the vastness of our number system.",
            "image_path": "https://source.unsplash.com/500x500/?large,numbers",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Mastering Operations",
        "description": "Journey into the realm of mathematical operations, building a strong foundation in addition, subtraction, multiplication, and division.",
        "image_path": "https://source.unsplash.com/500x500/?math,operations",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Addition and Subtraction Review",
            "description": "Revisiting the fundamental concepts of addition and subtraction, cementing the understanding of these operations.",
            "image_path": "https://source.unsplash.com/500x500/?addition,subtraction",
            "type": "CORE"
          },
          {
            "name": "Advanced Addition and Subtraction",
            "description": "Advancing into more complex addition and subtraction problems, including those with multiple digits and regrouping.",
            "image_path": "https://source.unsplash.com/500x500/?advanced,addition,subtraction",
            "type": "CORE"
          },
          {
            "name": "Introduction to Multiplication",
            "description": "Entering the world of multiplication, understanding it as repeated addition.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication,introduction",
            "type": "CORE"
          },
          {
            "name": "Practicing Multiplication",
            "description": "Practicing multiplication problems, using arrays and skip counting to solidify understanding.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication,practice",
            "type": "CORE"
          },
          {
            "name": "Introduction to Division",
            "description": "Exploring division as sharing or grouping, laying a foundation for this operation.",
            "image_path": "https://source.unsplash.com/500x500/?division,introduction",
            "type": "CORE"
          },
          {
            "name": "Practicing Division",
            "description": "Solving simple division problems, reinforcing the concept through engaging exercises.",
            "image_path": "https://source.unsplash.com/500x500/?division,practice",
            "type": "CORE"
          },
          {
            "name": "Fact Families",
            "description": "Studying fact families to understand the relationship between addition, subtraction, multiplication, and division.",
            "image_path": "https://source.unsplash.com/500x500/?fact,families",
            "type": "CORE"
          },
          {
            "name": "Math Operations in Real Life",
            "description": "Applying mathematical operations to solve real-world problems, enhancing understanding and applicability.",
            "image_path": "https://source.unsplash.com/500x500/?math,realworld",
            "type": "ELECTIVE"
          },
          {
            "name": "Problem Solving with Operations",
            "description": "Using all four operations to solve challenging math problems, boosting critical thinking skills.",
            "image_path": "https://source.unsplash.com/500x500/?problem,solving",
            "type": "ELECTIVE"
          },
          {
            "name": "Operations Fun with Games",
            "description": "Reinforcing operation concepts through engaging games, making learning enjoyable.",
            "image_path": "https://source.unsplash.com/500x500/?math,games",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Introduction to Fractions",
        "description": "Embarking on a journey into fractions, fostering an understanding of parts and wholes.",
        "image_path": "https://source.unsplash.com/500x500/?fractions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What is a Fraction?",
            "description": "Introducing the concept of fractions as parts of a whole, paving the way for more complex learning.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,concept",
            "type": "CORE"
          },
          {
            "name": "Fractional Parts",
            "description": "Identifying fractions of shapes and numbers, reinforcing the understanding of parts and wholes.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,parts",
            "type": "CORE"
          },
          {
            "name": "Equivalent Fractions",
            "description": "Discovering equivalent fractions, enhancing the understanding of fraction relationships.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,equivalent",
            "type": "CORE"
          },
          {
            "name": "Fraction Number Line",
            "description": "Placing fractions on a number line, improving spatial understanding of fractions.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,numberline",
            "type": "CORE"
          },
          {
            "name": "Comparing Fractions",
            "description": "Learning to compare fractions, bolstering conceptual understanding and analytical skills.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,compare",
            "type": "CORE"
          },
          {
            "name": "Adding Simple Fractions",
            "description": "Taking the first steps into adding simple fractions, laying a strong foundation for future math learning.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,addition",
            "type": "CORE"
          },
          {
            "name": "Fraction Fun with Food",
            "description": "Applying fractions to food scenarios, making learning relatable and fun.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,food",
            "type": "CORE"
          },
          {
            "name": "Fractions in Real Life",
            "description": "Understanding the role of fractions in everyday life, connecting learning to practical situations.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,reallife",
            "type": "ELECTIVE"
          },
          {
            "name": "Visualizing Fractions",
            "description": "Using visuals to understand fractions better, enhancing learning through imagery.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,visualize",
            "type": "ELECTIVE"
          },
          {
            "name": "Fraction Games",
            "description": "Reinforcing fraction concepts through engaging games, making learning an enjoyable process.",
            "image_path": "https://source.unsplash.com/500x500/?fraction,games",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Introduction to Money",
        "description": "Navigating the world of money, fostering an understanding of its value, and developing essential counting skills.",
        "image_path": "https://source.unsplash.com/500x500/?money",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Recognizing Coins",
            "description": "Learning to recognize different coins and understanding their values.",
            "image_path": "https://source.unsplash.com/500x500/?coins",
            "type": "CORE"
          },
          {
            "name": "Recognizing Notes",
            "description": "Learning to recognize different banknotes and understanding their values.",
            "image_path": "https://source.unsplash.com/500x500/?banknotes",
            "type": "CORE"
          },
          {
            "name": "Counting Money",
            "description": "Practicing counting money to strengthen understanding of value and basic arithmetic skills.",
            "image_path": "https://source.unsplash.com/500x500/?counting,money",
            "type": "CORE"
          },
          {
            "name": "Making Change",
            "description": "Understanding how change works, reinforcing subtraction skills and application to real-life scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?change,money",
            "type": "CORE"
          },
          {
            "name": "Money Word Problems",
            "description": "Solving word problems involving money, enhancing problem-solving and critical thinking skills.",
            "image_path": "https://source.unsplash.com/500x500/?money,problems",
            "type": "CORE"
          },
          {
            "name": "Saving and Spending",
            "description": "Introducing the concepts of saving and spending money wisely, laying the foundation for financial literacy.",
            "image_path": "https://source.unsplash.com/500x500/?saving,spending",
            "type": "CORE"
          },
          {
            "name": "Planning a Budget",
            "description": "Exploring the concept of budgeting, fostering planning and decision-making skills.",
            "image_path": "https://source.unsplash.com/500x500/?budget",
            "type": "CORE"
          },
          {
            "name": "History of Money",
            "description": "Exploring the fascinating history of money, enhancing knowledge and appreciation of economics.",
            "image_path": "https://source.unsplash.com/500x500/?history,money",
            "type": "ELECTIVE"
          },
          {
            "name": "Money in Different Cultures",
            "description": "Understanding how money varies across cultures, promoting global awareness and understanding.",
            "image_path": "https://source.unsplash.com/500x500/?money,cultures",
            "type": "ELECTIVE"
          },
          {
            "name": "Fun with Money Games",
            "description": "Using games to practice money concepts, making learning an enjoyable experience.",
            "image_path": "https://source.unsplash.com/500x500/?money,games",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Discovering Patterns",
        "description": "Unraveling the magic of patterns, fostering logical thinking and problem-solving skills.",
        "image_path": "https://source.unsplash.com/500x500/?patterns",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Identifying Patterns",
            "description": "Learning to recognize and describe simple patterns in everyday life and mathematics.",
            "image_path": "https://source.unsplash.com/500x500/?identify,patterns",
            "type": "CORE"
          },
          {
            "name": "Creating Patterns",
            "description": "Constructing patterns using objects, numbers, and shapes, fostering creativity and understanding of sequences.",
            "image_path": "https://source.unsplash.com/500x500/?create,patterns",
            "type": "CORE"
          },
          {
            "name": "Number Patterns",
            "description": "Discovering patterns in numbers, reinforcing counting, addition, and subtraction skills.",
            "image_path": "https://source.unsplash.com/500x500/?number,patterns",
            "type": "CORE"
          },
          {
            "name": "Patterns in Nature",
            "description": "Exploring the beautiful patterns found in nature, connecting mathematical learning with the natural world.",
            "image_path": "https://source.unsplash.com/500x500/?nature,patterns",
            "type": "CORE"
          },
          {
            "name": "Geometric Patterns",
            "description": "Identifying and creating geometric patterns, enhancing spatial reasoning and geometric understanding.",
            "image_path": "https://source.unsplash.com/500x500/?geometric,patterns",
            "type": "CORE"
          },
          {
            "name": "Patterns in Time",
            "description": "Recognizing patterns in time and calendars, bolstering understanding of time concepts.",
            "image_path": "https://source.unsplash.com/500x500/?time,patterns",
            "type": "CORE"
          },
          {
            "name": "Patterns in Music and Art",
            "description": "Exploring patterns in music and art, promoting interdisciplinary learning.",
            "image_path": "https://source.unsplash.com/500x500/?music,art,patterns",
            "type": "CORE"
          },
          {
            "name": "Pattern Detective",
            "description": "Solving mysteries and riddles using pattern recognition, enhancing critical thinking and problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?detective,patterns",
            "type": "ELECTIVE"
          },
          {
            "name": "Mathematical Predictions with Patterns",
            "description": "Using patterns to make predictions, promoting logical reasoning and predictive skills.",
            "image_path": "https://source.unsplash.com/500x500/?predictions,patterns",
            "type": "ELECTIVE"
          },
          {
            "name": "Pattern Art Projects",
            "description": "Creating beautiful artwork using patterns, making learning fun and engaging.",
            "image_path": "https://source.unsplash.com/500x500/?art,patterns",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Math in Our World",
        "description": "Connecting mathematics with everyday experiences, fostering an understanding of practical applications.",
        "image_path": "https://source.unsplash.com/500x500/?math,world",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Math in Cooking",
            "description": "Exploring how math is used in cooking, making learning relatable and practical.",
            "image_path": "https://source.unsplash.com/500x500/?math,cooking",
            "type": "CORE"
          },
          {
            "name": "Math in Sports",
            "description": "Discovering the role of math in sports, promoting a connection between physical activity and learning.",
            "image_path": "https://source.unsplash.com/500x500/?math,sports",
            "type": "CORE"
          },
          {
            "name": "Math in Nature",
            "description": "Uncovering the math found in the natural world, enhancing an appreciation for nature and mathematics.",
            "image_path": "https://source.unsplash.com/500x500/?math,nature",
            "type": "CORE"
          },
          {
            "name": "Math in Art",
            "description": "Exploring the relationship between art and mathematics, promoting interdisciplinary learning.",
            "image_path": "https://source.unsplash.com/500x500/?math,art",
            "type": "CORE"
          },
          {
            "name": "Math in Music",
            "description": "Understanding the role of mathematics in music, fostering a connection between auditory learning and math.",
            "image_path": "https://source.unsplash.com/500x500/?math,music",
            "type": "CORE"
          },
          {
            "name": "Math on a Shopping Trip",
            "description": "Applying math skills to real-life shopping scenarios, enhancing understanding of practical money concepts.",
            "image_path": "https://source.unsplash.com/500x500/?math,shopping",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Architecture",
            "description": "Exploring the role of mathematics in architectural design, promoting a connection between visual learning and math.",
            "image_path": "https://source.unsplash.com/500x500/?math,architecture",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fun with Math Games",
        "description": "Exploring mathematics through engaging games, encouraging enthusiasm for learning and strengthening problem-solving skills.",
        "image_path": "https://source.unsplash.com/500x500/?math,games",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Number Puzzles",
            "description": "Solving number puzzles to reinforce understanding of numbers and develop logical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?number,puzzles",
            "type": "CORE"
          },
          {
            "name": "Shape and Pattern Games",
            "description": "Playing games involving shapes and patterns to enhance spatial reasoning and recognition skills.",
            "image_path": "https://source.unsplash.com/500x500/?shape,pattern,games",
            "type": "CORE"
          },
          {
            "name": "Math Memory Games",
            "description": "Improving memory and mathematical knowledge through fun and challenging memory games.",
            "image_path": "https://source.unsplash.com/500x500/?math,memory,games",
            "type": "CORE"
          },
          {
            "name": "Money and Change Games",
            "description": "Applying knowledge of money and change in game scenarios, reinforcing practical money skills.",
            "image_path": "https://source.unsplash.com/500x500/?money,change,games",
            "type": "CORE"
          },
          {
            "name": "Fractions and Decimals Games",
            "description": "Playing games involving fractions and decimals, promoting understanding and application of these key concepts.",
            "image_path": "https://source.unsplash.com/500x500/?fractions,decimals,games",
            "type": "CORE"
          },
          {
            "name": "Problem-Solving Challenge",
            "description": "Taking on problem-solving challenges to enhance critical thinking and perseverance in tackling mathematical problems.",
            "image_path": "https://source.unsplash.com/500x500/?problem-solving,challenges",
            "type": "ELECTIVE"
          },
          {
            "name": "Math and Art Projects",
            "description": "Combining math and art in creative projects, fostering connections between mathematical concepts and artistic expression.",
            "image_path": "https://source.unsplash.com/500x500/?math,art,projects",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
  {
    "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
    "topics_data": [
      {
        "name": "Adventures in Multiplication",
        "description": "Embarking on a mathematical journey that builds a deeper understanding of multiplication through creative problem-solving.",
        "image_path": "https://source.unsplash.com/500x500/?multiplication",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Times Table Tales",
            "description": "Developing a solid grasp of multiplication tables through engaging stories and memorable illustrations.",
            "image_path": "https://source.unsplash.com/500x500/?times-tables",
            "type": "CORE"
          },
          {
            "name": "Multiplication through Arrays",
            "description": "Using arrays as a powerful visual tool to make sense of multiplication.",
            "image_path": "https://source.unsplash.com/500x500/?arrays",
            "type": "CORE"
          },
          {
            "name": "Patterns in Multiplication",
            "description": "Discovering exciting patterns and connections within multiplication to foster a deeper understanding.",
            "image_path": "https://source.unsplash.com/500x500/?patterns",
            "type": "CORE"
          },
          {
            "name": "Multiplying with Zero and One",
            "description": "Mastering the special rules for multiplying with zero and one through fun, interactive exercises.",
            "image_path": "https://source.unsplash.com/500x500/?multiply-zero-one",
            "type": "CORE"
          },
          {
            "name": "Double and Half Multiplication",
            "description": "Exploring the magic of doubling and halving in multiplication to build number sense.",
            "image_path": "https://source.unsplash.com/500x500/?double-half",
            "type": "CORE"
          },
          {
            "name": "Word Problems in Multiplication",
            "description": "Applying multiplication skills to real-world problems, enhancing practical problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?word-problems",
            "type": "CORE"
          },
          {
            "name": "Multiplication and Division Connection",
            "description": "Understanding the inverse relationship between multiplication and division to foster number flexibility.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division",
            "type": "CORE"
          },
          {
            "name": "Multiplication in Daily Life",
            "description": "Identifying and applying multiplication in daily life scenarios to promote mathematical literacy.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life",
            "type": "ELECTIVE"
          },
          {
            "name": "Multiplication Games",
            "description": "Making multiplication practice fun and engaging through a variety of games and puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Multiplication through Art",
            "description": "Using art as a medium to explore multiplication, fostering creativity and mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?math-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Journey into Division",
        "description": "Diving into the fascinating world of division, nurturing mathematical understanding through practical applications and engaging activities.",
        "image_path": "https://source.unsplash.com/500x500/?division",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Basics of Division",
            "description": "Unveiling the magic of division through interactive exercises and simple explanations.",
            "image_path": "https://source.unsplash.com/500x500/?division-basics",
            "type": "CORE"
          },
          {
            "name": "Division and Sharing",
            "description": "Understanding division as a method of equal sharing and distribution with fun practical exercises.",
            "image_path": "https://source.unsplash.com/500x500/?sharing",
            "type": "CORE"
          },
          {
            "name": "Remainders in Division",
            "description": "Decoding the mystery of remainders in division through engaging stories and problems.",
            "image_path": "https://source.unsplash.com/500x500/?remainders",
            "type": "CORE"
          },
          {
            "name": "Division Tables",
            "description": "Mastering division tables through dynamic activities and memorable techniques.",
            "image_path": "https://source.unsplash.com/500x500/?division-tables",
            "type": "CORE"
          },
          {
            "name": "Division in Daily Life",
            "description": "Recognizing and utilizing division in everyday scenarios, promoting practical mathematical literacy.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life-division",
            "type": "CORE"
          },
          {
            "name": "Division Word Problems",
            "description": "Applying division skills to real-world problems, enhancing critical thinking and problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?division-word-problems",
            "type": "CORE"
          },
          {
            "name": "Multiplication and Division Relationship",
            "description": "Exploring the fascinating interplay between multiplication and division, fostering numerical flexibility.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division",
            "type": "CORE"
          },
          {
            "name": "Division Games",
            "description": "Turning division practice into a fun adventure with interactive games and challenges.",
            "image_path": "https://source.unsplash.com/500x500/?division-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Division through Art",
            "description": "Using art to delve deeper into division, inspiring creativity and mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?math-art",
            "type": "ELECTIVE"
          },
          {
            "name": "Advanced Division Techniques",
            "description": "Learning advanced division strategies to solve complex problems, nurturing mathematical prowess.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-division",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fractions Fundamentals",
        "description": "Journeying into the intriguing world of fractions, fostering comprehension and mathematical fluency through engaging experiences.",
        "image_path": "https://source.unsplash.com/500x500/?fractions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What are Fractions?",
            "description": "An exciting introduction to the concept of fractions, using relatable examples and visuals.",
            "image_path": "https://source.unsplash.com/500x500/?fractions-basics",
            "type": "CORE"
          },
          {
            "name": "Fractions and Division",
            "description": "Linking fractions with division to deepen understanding and promote number sense.",
            "image_path": "https://source.unsplash.com/500x500/?fractions-division",
            "type": "CORE"
          },
          {
            "name": "Equivalent Fractions",
            "description": "Exploring the concept of equivalent fractions through fun activities and visual aids.",
            "image_path": "https://source.unsplash.com/500x500/?equivalent-fractions",
            "type": "CORE"
          },
          {
            "name": "Fractions on a Number Line",
            "description": "Mastering the placement and meaning of fractions on a number line for better comprehension.",
            "image_path": "https://source.unsplash.com/500x500/?number-line",
            "type": "CORE"
          },
          {
            "name": "Comparing and Ordering Fractions",
            "description": "Learning to compare and order fractions, enhancing problem-solving skills and mathematical reasoning.",
            "image_path": "https://source.unsplash.com/500x500/?compare-fractions",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Fractions",
            "description": "Diving into the operations of adding and subtracting fractions, strengthening mathematical competence.",
            "image_path": "https://source.unsplash.com/500x500/?add-subtract-fractions",
            "type": "CORE"
          },
          {
            "name": "Fraction Word Problems",
            "description": "Applying fractions knowledge to solve real-world problems, enhancing practical problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-word-problems",
            "type": "CORE"
          },
          {
            "name": "Fractions in Daily Life",
            "description": "Identifying and applying fractions in daily life scenarios to promote mathematical literacy.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life-fractions",
            "type": "ELECTIVE"
          },
          {
            "name": "Fraction Games",
            "description": "Making fraction practice fun and engaging through a variety of games and puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Fractions through Art",
            "description": "Using art as a medium to explore fractions, fostering creativity and mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?math-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Mastering Measurement",
        "description": "Stepping into the practical world of measurement, building foundational skills through hands-on experiences and real-world applications.",
        "image_path": "https://source.unsplash.com/500x500/?measurement",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Basics of Measurement",
            "description": "Introducing the fundamental concepts of measurement, establishing a solid foundation for further exploration.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-basics",
            "type": "CORE"
          },
          {
            "name": "Measuring Length",
            "description": "Understanding and applying techniques for measuring length, promoting accuracy and precision.",
            "image_path": "https://source.unsplash.com/500x500/?length-measurement",
            "type": "CORE"
          },
          {
            "name": "Measuring Weight",
            "description": "Exploring the concept of weight and how to measure it accurately in various contexts.",
            "image_path": "https://source.unsplash.com/500x500/?weight-measurement",
            "type": "CORE"
          },
          {
            "name": "Measuring Volume",
            "description": "Delving into the measurement of volume, building practical skills with hands-on activities.",
            "image_path": "https://source.unsplash.com/500x500/?volume-measurement",
            "type": "CORE"
          },
          {
            "name": "Time and its Measurement",
            "description": "Mastering the measurement of time, enhancing punctuality and time management skills.",
            "image_path": "https://source.unsplash.com/500x500/?time-measurement",
            "type": "CORE"
          },
          {
            "name": "Measurement Units and Conversions",
            "description": "Learning about different measurement units and the art of conversion, fostering mathematical flexibility.",
            "image_path": "https://source.unsplash.com/500x500/?units-conversion",
            "type": "CORE"
          },
          {
            "name": "Measurement Word Problems",
            "description": "Applying measurement skills to solve real-world problems, enhancing practical problem-solving capabilities.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-word-problems",
            "type": "CORE"
          },
          {
            "name": "Measurements in Cooking",
            "description": "Integrating measurement skills into cooking activities, making learning practical and enjoyable.",
            "image_path": "https://source.unsplash.com/500x500/?cooking-measurement",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement Games",
            "description": "Transforming measurement practice into fun with engaging games and challenges.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Measurement through Art",
            "description": "Using art as a medium to understand measurement, fostering creativity and mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Navigating Numbers",
        "description": "Embarking on an immersive journey through the universe of numbers, enhancing comprehension and number sense.",
        "image_path": "https://source.unsplash.com/500x500/?numbers",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Number Patterns",
            "description": "Exploring intriguing patterns in numbers, fostering critical thinking and pattern recognition.",
            "image_path": "https://source.unsplash.com/500x500/?number-patterns",
            "type": "CORE"
          },
          {
            "name": "Odd and Even Numbers",
            "description": "Understanding the concept of odd and even numbers through engaging exercises and examples.",
            "image_path": "https://source.unsplash.com/500x500/?odd-even",
            "type": "CORE"
          },
          {
            "name": "Prime and Composite Numbers",
            "description": "Diving into the exciting world of prime and composite numbers, building a robust understanding.",
            "image_path": "https://source.unsplash.com/500x500/?prime-composite",
            "type": "CORE"
          },
          {
            "name": "Place Value",
            "description": "Mastering the concept of place value to enhance number sense and mathematical fluency.",
            "image_path": "https://source.unsplash.com/500x500/?place-value",
            "type": "CORE"
          },
          {
            "name": "Rounding Numbers",
            "description": "Learning the technique of rounding numbers, promoting estimation skills and mathematical comprehension.",
            "image_path": "https://source.unsplash.com/500x500/?rounding",
            "type": "CORE"
          },
          {
            "name": "Comparing and Ordering Numbers",
            "description": "Comparing and ordering numbers to enhance problem-solving skills and mathematical reasoning.",
            "image_path": "https://source.unsplash.com/500x500/?compare-order",
            "type": "CORE"
          },
          {
            "name": "Number Word Problems",
            "description": "Applying numbers knowledge to solve real-world problems, fostering practical problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?number-word-problems",
            "type": "CORE"
          },
          {
            "name": "Numbers in Everyday Life",
            "description": "Recognizing the use of numbers in everyday scenarios to promote mathematical literacy.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life-numbers",
            "type": "ELECTIVE"
          },
          {
            "name": "Number Games",
            "description": "Turning numbers practice into a fun adventure with engaging games and challenges.",
            "image_path": "https://source.unsplash.com/500x500/?number-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Numbers through Art",
            "description": "Understanding numbers in a creative way, using art as a medium to inspire mathematical comprehension.",
            "image_path": "https://source.unsplash.com/500x500/?math-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Geometry Gems",
        "description": "Discovering the fascinating world of shapes and their properties, nurturing spatial awareness and critical thinking skills.",
        "image_path": "https://source.unsplash.com/500x500/?geometry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Shapes",
            "description": "Delving into the basics of shapes, their types, and their properties.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "CORE"
          },
          {
            "name": "Polygons and their Properties",
            "description": "Exploring the characteristics of polygons and understanding their classifications.",
            "image_path": "https://source.unsplash.com/500x500/?polygons",
            "type": "CORE"
          },
          {
            "name": "Circles and their Parts",
            "description": "Understanding the properties of circles and their components such as radius, diameter, and circumference.",
            "image_path": "https://source.unsplash.com/500x500/?circle",
            "type": "CORE"
          },
          {
            "name": "Angles and Lines",
            "description": "Learning about various types of angles and lines and how to identify them.",
            "image_path": "https://source.unsplash.com/500x500/?angles-lines",
            "type": "CORE"
          },
          {
            "name": "Symmetry and Reflections",
            "description": "Exploring the concept of symmetry and reflections in shapes and figures.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry",
            "type": "CORE"
          },
          {
            "name": "Three-Dimensional Shapes",
            "description": "Introducing three-dimensional shapes and learning about their properties and real-world examples.",
            "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
            "type": "CORE"
          },
          {
            "name": "Geometry Word Problems",
            "description": "Applying geometric concepts to solve real-world problems, building critical thinking skills.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-problems",
            "type": "CORE"
          },
          {
            "name": "Shapes in Daily Life",
            "description": "Identifying and understanding the use of shapes in everyday scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?shapes-daily-life",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry Games",
            "description": "Practicing geometric concepts through engaging games and activities.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Geometry through Art",
            "description": "Using art as a medium to understand and apply geometric concepts creatively.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Data Dynamics",
        "description": "Uncovering the world of data collection, interpretation, and presentation, fostering analytical thinking and decision-making skills.",
        "image_path": "https://source.unsplash.com/500x500/?data",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Data",
            "description": "Introduction to the world of data, understanding its importance and uses.",
            "image_path": "https://source.unsplash.com/500x500/?understanding-data",
            "type": "CORE"
          },
          {
            "name": "Data Collection Methods",
            "description": "Exploring various data collection methods, learning how to gather information effectively.",
            "image_path": "https://source.unsplash.com/500x500/?data-collection",
            "type": "CORE"
          },
          {
            "name": "Reading and Interpreting Graphs",
            "description": "Mastering the skills to read and interpret different types of graphs.",
            "image_path": "https://source.unsplash.com/500x500/?graphs",
            "type": "CORE"
          },
          {
            "name": "Creating Graphs",
            "description": "Learning how to represent data visually through graphs and charts.",
            "image_path": "https://source.unsplash.com/500x500/?creating-graphs",
            "type": "CORE"
          },
          {
            "name": "Understanding Tables and Charts",
            "description": "Introducing tables and charts as effective tools for data representation.",
            "image_path": "https://source.unsplash.com/500x500/?tables-charts",
            "type": "CORE"
          },
          {
            "name": "Probability Basics",
            "description": "Introduction to the fascinating world of probability, building a solid foundation for future exploration.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Data Interpretation Word Problems",
            "description": "Applying data interpretation skills to solve real-world problems, fostering critical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?data-problems",
            "type": "CORE"
          },
          {
            "name": "Data in Everyday Life",
            "description": "Understanding the role of data in everyday scenarios to promote data literacy.",
            "image_path": "https://source.unsplash.com/500x500/?data-life",
            "type": "ELECTIVE"
          },
          {
            "name": "Data Games",
            "description": "Practicing data skills through engaging games and activities.",
            "image_path": "https://source.unsplash.com/500x500/?data-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Data through Projects",
            "description": "Working on projects that require data collection and analysis, integrating learning with hands-on experiences.",
            "image_path": "https://source.unsplash.com/500x500/?data-projects",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Mastery of Measurement",
        "description": "Embarking on a practical journey of understanding measurements and their applications in the real world.",
        "image_path": "https://source.unsplash.com/500x500/?measurement",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Units of Measurement",
            "description": "Learning about different units of measurement and their appropriate usage.",
            "image_path": "https://source.unsplash.com/500x500/?units-measurement",
            "type": "CORE"
          },
          {
            "name": "Measuring Length",
            "description": "Mastering the skills to measure length using different units and tools.",
            "image_path": "https://source.unsplash.com/500x500/?measuring-length",
            "type": "CORE"
          },
          {
            "name": "Measuring Weight",
            "description": "Exploring the concept of weight and how to measure it accurately.",
            "image_path": "https://source.unsplash.com/500x500/?measuring-weight",
            "type": "CORE"
          },
          {
            "name": "Measuring Capacity",
            "description": "Understanding capacity and learning how to measure it in different units.",
            "image_path": "https://source.unsplash.com/500x500/?measuring-capacity",
            "type": "CORE"
          },
          {
            "name": "Measuring Time",
            "description": "Learning about time, reading clocks, and calculating elapsed time.",
            "image_path": "https://source.unsplash.com/500x500/?measuring-time",
            "type": "CORE"
          },
          {
            "name": "Conversion of Units",
            "description": "Practicing the conversion of units within the same measurement system.",
            "image_path": "https://source.unsplash.com/500x500/?conversion-units",
            "type": "CORE"
          },
          {
            "name": "Measurement Word Problems",
            "description": "Applying measurement concepts to solve real-world problems, enhancing problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-problems",
            "type": "CORE"
          },
          {
            "name": "Measurements in Daily Life",
            "description": "Recognizing the use of measurements in everyday scenarios to reinforce practical knowledge.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life-measurements",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement Games",
            "description": "Practicing measurement skills through engaging games and challenges.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Measurement through DIY Projects",
            "description": "Applying measurement knowledge in creative DIY projects, promoting hands-on learning.",
            "image_path": "https://source.unsplash.com/500x500/?measurement-projects",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fun with Fractions",
        "description": "Diving into the delightful world of fractions through fun and engaging activities.",
        "image_path": "https://source.unsplash.com/500x500/?fractions",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Understanding Fractions",
            "description": "Building a solid understanding of fractions and their significance.",
            "image_path": "https://source.unsplash.com/500x500/?understanding-fractions",
            "type": "CORE"
          },
          {
            "name": "Identifying Fractions",
            "description": "Mastering the skills to identify fractions in various forms and contexts.",
            "image_path": "https://source.unsplash.com/500x500/?identifying-fractions",
            "type": "CORE"
          },
          {
            "name": "Equivalent Fractions",
            "description": "Learning about equivalent fractions and how to find them.",
            "image_path": "https://source.unsplash.com/500x500/?equivalent-fractions",
            "type": "CORE"
          },
          {
            "name": "Comparing and Ordering Fractions",
            "description": "Understanding how to compare and order fractions correctly.",
            "image_path": "https://source.unsplash.com/500x500/?comparing-fractions",
            "type": "CORE"
          },
          {
            "name": "Fractions in Daily Life",
            "description": "Recognizing the use of fractions in daily life to apply learning in a practical context.",
            "image_path": "https://source.unsplash.com/500x500/?fractions-life",
            "type": "CORE"
          },
          {
            "name": "Fraction Games",
            "description": "Applying fraction knowledge through exciting games and puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Creative Fraction Art",
            "description": "Exploring fractions through creative art projects, promoting conceptual understanding and creativity.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-art",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Amazing Algebra",
        "description": "Embarking on a thrilling journey into the realm of algebra, sparking curiosity and building strong analytical skills.",
        "image_path": "https://source.unsplash.com/500x500/?algebra",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Introduction to Algebra",
            "description": "Getting acquainted with the basics of algebra and its importance.",
            "image_path": "https://source.unsplash.com/500x500/?introduction-algebra",
            "type": "CORE"
          },
          {
            "name": "Understanding Variables",
            "description": "Learning about variables and their role in algebraic expressions.",
            "image_path": "https://source.unsplash.com/500x500/?variables",
            "type": "CORE"
          },
          {
            "name": "Simple Algebraic Expressions",
            "description": "Mastering the skills to create and solve simple algebraic expressions.",
            "image_path": "https://source.unsplash.com/500x500/?algebraic-expressions",
            "type": "CORE"
          },
          {
            "name": "Basic Algebraic Operations",
            "description": "Understanding how to perform basic operations using algebraic expressions.",
            "image_path": "https://source.unsplash.com/500x500/?algebraic-operations",
            "type": "CORE"
          },
          {
            "name": "Solving Algebraic Equations",
            "description": "Learning to solve basic algebraic equations, enhancing problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?solving-equations",
            "type": "CORE"
          },
          {
            "name": "Algebra Puzzles",
            "description": "Applying algebraic knowledge through challenging puzzles and games.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-puzzles",
            "type": "ELECTIVE"
          },
          {
            "name": "Algebra in Daily Life",
            "description": "Identifying the role of algebra in daily life to reinforce practical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-life",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
  {
    "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
    "topics_data": [
      {
        "name": "Exploring the Universe of Numbers",
        "description": "A journey into the infinite expanse of the number system, inspiring the understanding and mastery of fundamental arithmetic.",
        "image_path": "https://source.unsplash.com/500x500/?numbers",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Number Line Navigation",
            "description": "Master the art of traversing the number line, discovering the world of positive and negative integers.",
            "image_path": "https://source.unsplash.com/500x500/?number-line",
            "type": "CORE"
          },
          {
            "name": "Adventures in Addition",
            "description": "Embark on a thrilling adventure in the land of addition, exploring how numbers combine to form bigger numbers.",
            "image_path": "https://source.unsplash.com/500x500/?addition",
            "type": "CORE"
          },
          {
            "name": "The Subtraction Expedition",
            "description": "Set off on an enlightening expedition, unearthing the secrets of subtraction and its role in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?subtraction",
            "type": "CORE"
          },
          {
            "name": "Multiplication Magic",
            "description": "Step into the magical world of multiplication and discover how numbers multiply to create magic.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication",
            "type": "CORE"
          },
          {
            "name": "Diving into Division",
            "description": "Plunge into the realm of division, understanding how it splits numbers and contributes to a balanced world.",
            "image_path": "https://source.unsplash.com/500x500/?division",
            "type": "CORE"
          },
          {
            "name": "Fractions Unveiled",
            "description": "Unveil the intriguing world of fractions, understanding their significance and usage in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?fractions",
            "type": "CORE"
          },
          {
            "name": "Decoding Decimals",
            "description": "Decode the complex world of decimals, breaking down their mysteries and their role in precise calculations.",
            "image_path": "https://source.unsplash.com/500x500/?decimals",
            "type": "CORE"
          },
          {
            "name": "Quest for Prime Numbers",
            "description": "Embark on a quest to discover prime numbers, the building blocks of the mathematical world.",
            "image_path": "https://source.unsplash.com/500x500/?prime-numbers",
            "type": "ELECTIVE"
          },
          {
            "name": "Introduction to Algebra",
            "description": "Take a sneak peek into the intriguing world of Algebra, understanding the concept of variables and their role in equations.",
            "image_path": "https://source.unsplash.com/500x500/?algebra",
            "type": "ELECTIVE"
          },
          {
            "name": "The Geometry of Shapes",
            "description": "Discover the world of shapes and their geometric properties, applying this understanding in a variety of real-life situations.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Magic of Geometry",
        "description": "A magical journey into the world of shapes and spaces, inspiring a deep understanding of how geometry fits into everyday life.",
        "image_path": "https://source.unsplash.com/500x500/?geometry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Shape Adventure",
            "description": "Venture into the realm of shapes, discovering their unique properties and characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "CORE"
          },
          {
            "name": "Angling for Angles",
            "description": "Discover the intriguing world of angles and how they shape our perception of spaces around us.",
            "image_path": "https://source.unsplash.com/500x500/?angles",
            "type": "CORE"
          },
          {
            "name": "Perimeter Perceptions",
            "description": "Explore the concept of perimeter, understanding its applications in real-life scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?perimeter",
            "type": "CORE"
          },
          {
            "name": "The Area Adventure",
            "description": "Delve into the world of areas, discovering how to measure the space inside boundaries.",
            "image_path": "https://source.unsplash.com/500x500/?area",
            "type": "CORE"
          },
          {
            "name": "Voyage through Volumes",
            "description": "Embark on a voyage through volumes, understanding how to measure space in three dimensions.",
            "image_path": "https://source.unsplash.com/500x500/?volume",
            "type": "CORE"
          },
          {
            "name": "Symmetry in Sight",
            "description": "Uncover the beauty of symmetry in shapes and patterns, appreciating its presence in the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry",
            "type": "CORE"
          },
          {
            "name": "Coordinates and You",
            "description": "Navigate the world of coordinates, grasping their role in positioning and direction.",
            "image_path": "https://source.unsplash.com/500x500/?coordinates",
            "type": "CORE"
          },
          {
            "name": "Introduction to Trigonometry",
            "description": "Take a first step into the world of trigonometry, understanding the relationships between angles and sides of a triangle.",
            "image_path": "https://source.unsplash.com/500x500/?trigonometry",
            "type": "ELECTIVE"
          },
          {
            "name": "The Circle Circus",
            "description": "Join the circle circus, discovering the magic of pi and the properties of circles.",
            "image_path": "https://source.unsplash.com/500x500/?circles",
            "type": "ELECTIVE"
          },
          {
            "name": "Tesselations: Patterns Unfolded",
            "description": "Unfold the beautiful patterns in tessellations, exploring their symmetry and applications.",
            "image_path": "https://source.unsplash.com/500x500/?tessellation",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Cracking the Code of Algebra",
        "description": "An exciting journey into the world of Algebra, simplifying the complex and mysterious codes of mathematical language.",
        "image_path": "https://source.unsplash.com/500x500/?algebra",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Alphabet in Math",
            "description": "Discover the secret language of algebra, where letters and symbols unite to express mathematical relationships.",
            "image_path": "https://source.unsplash.com/500x500/?alphabet-math",
            "type": "CORE"
          },
          {
            "name": "Equations Unveiled",
            "description": "Unveil the essence of equations, learning to balance and solve them in an interactive way.",
            "image_path": "https://source.unsplash.com/500x500/?equations",
            "type": "CORE"
          },
          {
            "name": "The X-Factor",
            "description": "Understand the concept of 'x', demystifying the most infamous and misunderstood character in Algebra.",
            "image_path": "https://source.unsplash.com/500x500/?x-factor",
            "type": "CORE"
          },
          {
            "name": "Fun with Functions",
            "description": "Explore the dynamic world of functions, understanding how they map inputs to outputs and model real-life situations.",
            "image_path": "https://source.unsplash.com/500x500/?functions",
            "type": "CORE"
          },
          {
            "name": "Decoding Inequalities",
            "description": "Decode the complex world of inequalities, understanding their significance in expressing a range of possibilities.",
            "image_path": "https://source.unsplash.com/500x500/?inequalities",
            "type": "CORE"
          },
          {
            "name": "Expressions Explored",
            "description": "Journey through the world of expressions, learning to simplify and evaluate them using mathematical operations.",
            "image_path": "https://source.unsplash.com/500x500/?expressions",
            "type": "CORE"
          },
          {
            "name": "Adventures in Algebraic Fractions",
            "description": "Embark on an adventurous exploration of algebraic fractions, understanding how to simplify and solve them.",
            "image_path": "https://source.unsplash.com/500x500/?algebraic-fractions",
            "type": "CORE"
          },
          {
            "name": "Introduction to Quadratic Equations",
            "description": "Step into the captivating world of quadratic equations, understanding their unique properties and solutions.",
            "image_path": "https://source.unsplash.com/500x500/?quadratic-equations",
            "type": "ELECTIVE"
          },
          {
            "name": "The Geometry of Algebra",
            "description": "Discover how algebra can be visualized geometrically, linking abstract concepts with concrete shapes.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-geometry",
            "type": "ELECTIVE"
          },
          {
            "name": "Real-Life Applications of Algebra",
            "description": "Explore the many real-world applications of algebra, showing its relevance and utility in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-applications",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Data Interpretation and Probability",
        "description": "An insightful journey into the world of data and probability, fostering critical thinking and decision-making skills.",
        "image_path": "https://source.unsplash.com/500x500/?data-probability",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Becoming a Data Detective",
            "description": "Develop your detective skills as you learn to collect, sort, and interpret data in meaningful ways.",
            "image_path": "https://source.unsplash.com/500x500/?data-detective",
            "type": "CORE"
          },
          {
            "name": "Graphs Galore",
            "description": "Discover the world of graphs, learning how to create and interpret bar graphs, line graphs, and pie charts.",
            "image_path": "https://source.unsplash.com/500x500/?graphs",
            "type": "CORE"
          },
          {
            "name": "Mean, Median, and Mode Magic",
            "description": "Uncover the magic of mean, median, and mode, and learn how they can provide different perspectives on data.",
            "image_path": "https://source.unsplash.com/500x500/?mean-median-mode",
            "type": "CORE"
          },
          {
            "name": "Probability Play",
            "description": "Step into the exciting playground of probability, exploring chances, likelihood, and predictions.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Making Sense of Statistics",
            "description": "Gain the skills to make sense of statistics, using data to make informed decisions and predictions.",
            "image_path": "https://source.unsplash.com/500x500/?statistics",
            "type": "CORE"
          },
          {
            "name": "Sampling and Surveys",
            "description": "Learn how to design and conduct a survey, and understand how sampling can represent a larger population.",
            "image_path": "https://source.unsplash.com/500x500/?sampling-surveys",
            "type": "CORE"
          },
          {
            "name": "Understanding Outliers",
            "description": "Explore outliers, those extraordinary pieces of data, and understand their impact on data analysis.",
            "image_path": "https://source.unsplash.com/500x500/?outliers",
            "type": "CORE"
          },
          {
            "name": "Introduction to Hypothesis Testing",
            "description": "Take a first step into hypothesis testing, using data to make informed predictions and conclusions.",
            "image_path": "https://source.unsplash.com/500x500/?hypothesis-testing",
            "type": "ELECTIVE"
          },
          {
            "name": "Data in the Digital Age",
            "description": "Discover how data is used in the digital age, from personalizing online experiences to making global decisions.",
            "image_path": "https://source.unsplash.com/500x500/?digital-data",
            "type": "ELECTIVE"
          },
          {
            "name": "Making Predictions with Probability",
            "description": "Explore how probability can help us make predictions about real-world events and make informed decisions.",
            "image_path": "https://source.unsplash.com/500x500/?probability-predictions",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Journey into Measurements",
        "description": "An adventurous journey into the world of measurements, honing practical skills for everyday use.",
        "image_path": "https://source.unsplash.com/500x500/?measurements",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Mastering Length",
            "description": "Embark on a quest to master measurements of length, exploring inches, feet, yards, and miles.",
            "image_path": "https://source.unsplash.com/500x500/?length-measurement",
            "type": "CORE"
          },
          {
            "name": "Mission Mass",
            "description": "Embark on a mission to understand mass, learning about grams, kilograms, and metric units.",
            "image_path": "https://source.unsplash.com/500x500/?mass-measurement",
            "type": "CORE"
          },
          {
            "name": "Voyage through Volume",
            "description": "Set sail on a voyage through volume, discovering liters, cubic units, and the concept of capacity.",
            "image_path": "https://source.unsplash.com/500x500/?volume-measurement",
            "type": "CORE"
          },
          {
            "name": "Time Travelers",
            "description": "Become a time traveler, mastering minutes, hours, days, and years, and understanding the concept of elapsed time.",
            "image_path": "https://source.unsplash.com/500x500/?time-measurement",
            "type": "CORE"
          },
          {
            "name": "Temperature Trail",
            "description": "Follow the trail of temperature, understanding Fahrenheit and Celsius scales and their real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?temperature-measurement",
            "type": "CORE"
          },
          {
            "name": "Unveiling Units of Measure",
            "description": "Unveil the mystery of different units of measure, learning to convert between standard and metric systems.",
            "image_path": "https://source.unsplash.com/500x500/?units-measurement",
            "type": "CORE"
          },
          {
            "name": "Practical Measurements",
            "description": "Apply your knowledge of measurements in practical scenarios, from cooking to construction.",
            "image_path": "https://source.unsplash.com/500x500/?practical-measurements",
            "type": "CORE"
          },
          {
            "name": "Measuring the Natural World",
            "description": "Explore how measurements help us understand the natural world, from climate science to animal biology.",
            "image_path": "https://source.unsplash.com/500x500/?nature-measurement",
            "type": "ELECTIVE"
          },
          {
            "name": "Introduction to Scientific Measurements",
            "description": "Step into the world of scientific measurements, understanding precision, accuracy, and the tools scientists use.",
            "image_path": "https://source.unsplash.com/500x500/?scientific-measurement",
            "type": "ELECTIVE"
          },
          {
            "name": "The Mathematics of Map Making",
            "description": "Discover the mathematics behind map-making, including scale, projection, and distance measurement.",
            "image_path": "https://source.unsplash.com/500x500/?map-math",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Magic of Shapes: Exploring Geometry",
        "description": "A magical exploration into the world of shapes, their properties, and how they shape our world.",
        "image_path": "https://source.unsplash.com/500x500/?geometry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Getting to Know Shapes",
            "description": "Meet the vast family of shapes, from simple 2D shapes to complex 3D structures, and learn to classify them.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "CORE"
          },
          {
            "name": "Angles Among Us",
            "description": "Uncover the secret world of angles around us, learning to measure and classify them.",
            "image_path": "https://source.unsplash.com/500x500/?angles",
            "type": "CORE"
          },
          {
            "name": "Polygon Party",
            "description": "Join the polygon party, exploring everything from triangles to decagons, and understanding their properties.",
            "image_path": "https://source.unsplash.com/500x500/?polygons",
            "type": "CORE"
          },
          {
            "name": "Circles: The Endless Shape",
            "description": "Delve into the endless world of circles, understanding their unique properties and elements.",
            "image_path": "https://source.unsplash.com/500x500/?circles",
            "type": "CORE"
          },
          {
            "name": "Symmetry and Patterns",
            "description": "Discover the beauty of symmetry and patterns in shapes, and explore their presence in art and nature.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry",
            "type": "CORE"
          },
          {
            "name": "The Space in Shapes: Understanding Volume",
            "description": "Step into 3D geometry to understand volume and learn how to calculate the space inside various shapes.",
            "image_path": "https://source.unsplash.com/500x500/?volume",
            "type": "CORE"
          },
          {
            "name": "Shapes in Motion: Introduction to Transformations",
            "description": "Set shapes in motion as you learn about transformations, including translation, rotation, and reflection.",
            "image_path": "https://source.unsplash.com/500x500/?transformations",
            "type": "CORE"
          },
          {
            "name": "Making Shapes: An Introduction to Geometric Constructions",
            "description": "Learn to construct geometric shapes using a compass and straightedge, just like ancient mathematicians.",
            "image_path": "https://source.unsplash.com/500x500/?geometric-constructions",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometric Art",
            "description": "Merge creativity and math by creating stunning geometric art, understanding the role of shapes in design.",
            "image_path": "https://source.unsplash.com/500x500/?geometric-art",
            "type": "ELECTIVE"
          },
          {
            "name": "Shapes in the Real World",
            "description": "Recognize the role of shapes in the real world, from architecture to nature, and even in outer space.",
            "image_path": "https://source.unsplash.com/500x500/?shapes-real-world",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Deciphering Decimals and Fractions",
        "description": "A thrilling adventure into the world of decimals and fractions, building confidence in handling parts of a whole.",
        "image_path": "https://source.unsplash.com/500x500/?decimals-fractions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Fractions",
            "description": "Embark on a journey of understanding fractions, learning how they represent parts of a whole.",
            "image_path": "https://source.unsplash.com/500x500/?fractions",
            "type": "CORE"
          },
          {
            "name": "Fun with Decimals",
            "description": "Dive into the world of decimals, understanding how they express fractions in a different way.",
            "image_path": "https://source.unsplash.com/500x500/?decimals",
            "type": "CORE"
          },
          {
            "name": "From Fractions to Decimals",
            "description": "Learn to convert fractions to decimals, understanding their interconnectedness.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-to-decimal",
            "type": "CORE"
          },
          {
            "name": "From Decimals to Fractions",
            "description": "Discover the way to convert decimals to fractions, enhancing flexibility in mathematical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?decimal-to-fraction",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Fractions",
            "description": "Master the art of adding and subtracting fractions, exploring like and unlike denominators.",
            "image_path": "https://source.unsplash.com/500x500/?adding-subtracting-fractions",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Decimals",
            "description": "Become proficient at adding and subtracting decimals, understanding place value.",
            "image_path": "https://source.unsplash.com/500x500/?adding-subtracting-decimals",
            "type": "CORE"
          },
          {
            "name": "Multiplying and Dividing Fractions",
            "description": "Take a leap into multiplying and dividing fractions, recognizing patterns and strategies.",
            "image_path": "https://source.unsplash.com/500x500/?multiplying-dividing-fractions",
            "type": "CORE"
          },
          {
            "name": "Multiplying and Dividing Decimals",
            "description": "Understand the process of multiplying and dividing decimals, solving problems in context.",
            "image_path": "https://source.unsplash.com/500x500/?multiplying-dividing-decimals",
            "type": "CORE"
          },
          {
            "name": "Fraction and Decimal Word Problems",
            "description": "Apply your knowledge of fractions and decimals to solve challenging real-world problems.",
            "image_path": "https://source.unsplash.com/500x500/?word-problems",
            "type": "ELECTIVE"
          },
          {
            "name": "Fractions and Decimals in the Real World",
            "description": "Explore the presence and significance of fractions and decimals in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?fractions-decimals-real-world",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The World of Algebra",
        "description": "A thrilling adventure into the world of algebra, where numbers and letters come together to solve problems.",
        "image_path": "https://source.unsplash.com/500x500/?algebra",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Algebra",
            "description": "Step into the world of algebra, where numbers meet letters in mathematical expressions.",
            "image_path": "https://source.unsplash.com/500x500/?introduction-algebra",
            "type": "CORE"
          },
          {
            "name": "Understanding Variables",
            "description": "Get to know variables, the mysterious stand-ins for unknown numbers in algebraic expressions.",
            "image_path": "https://source.unsplash.com/500x500/?variables",
            "type": "CORE"
          },
          {
            "name": "Creating and Simplifying Expressions",
            "description": "Learn to create and simplify algebraic expressions, honing your ability to represent and solve problems.",
            "image_path": "https://source.unsplash.com/500x500/?algebraic-expressions",
            "type": "CORE"
          },
          {
            "name": "Solving Simple Equations",
            "description": "Dive into the process of solving simple equations, finding the values of variables that make the equation true.",
            "image_path": "https://source.unsplash.com/500x500/?simple-equations",
            "type": "CORE"
          },
          {
            "name": "Using Algebra to Solve Word Problems",
            "description": "Use your algebraic skills to solve real-world problems, discovering the practical side of algebra.",
            "image_path": "https://source.unsplash.com/500x500/?word-problems-algebra",
            "type": "CORE"
          },
          {
            "name": "Inequalities and Their Graphs",
            "description": "Explore inequalities, which are like equations but with less strict relationships, and learn to represent them on number lines.",
            "image_path": "https://source.unsplash.com/500x500/?inequalities",
            "type": "CORE"
          },
          {
            "name": "Patterns and Sequences",
            "description": "Delve into patterns and sequences, discovering how algebra can represent and predict patterns.",
            "image_path": "https://source.unsplash.com/500x500/?patterns-sequences",
            "type": "CORE"
          },
          {
            "name": "Fun with Functions",
            "description": "Meet functions, the machines of algebra that take in numbers and spit out results according to certain rules.",
            "image_path": "https://source.unsplash.com/500x500/?functions",
            "type": "ELECTIVE"
          },
          {
            "name": "Algebra in Everyday Life",
            "description": "Discover how algebra is part of everyday life, from shopping deals to sports statistics.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-life",
            "type": "ELECTIVE"
          },
          {
            "name": "Algebra Puzzles",
            "description": "Tackle fun and challenging algebra puzzles, enhancing problem-solving skills and mathematical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?algebra-puzzles",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Math in Nature",
        "description": "A fascinating journey into the natural world, uncovering the hidden mathematical patterns and principles that shape life on Earth.",
        "image_path": "https://source.unsplash.com/500x500/?math-nature",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Numbers in Nature",
            "description": "Discover how numbers appear in nature, from the number of petals on a flower to the spirals in a pinecone.",
            "image_path": "https://source.unsplash.com/500x500/?numbers-nature",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry in Nature",
            "description": "Explore the occurrence of geometric shapes in the natural world, from the hexagons of a honeycomb to the symmetry of a snowflake.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-nature",
            "type": "ELECTIVE"
          },
          {
            "name": "The Golden Ratio and Fibonacci Sequence",
            "description": "Unveil the mystery of the Golden Ratio and Fibonacci Sequence, and their surprising presence in natural structures.",
            "image_path": "https://source.unsplash.com/500x500/?golden-ratio-fibonacci",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Animal Behaviors",
            "description": "Investigate how animals use math in their daily lives, from bee dances to bird migrations.",
            "image_path": "https://source.unsplash.com/500x500/?animal-behavior",
            "type": "ELECTIVE"
          },
          {
            "name": "Fractals in Nature",
            "description": "Delve into the world of fractals, complex shapes that look similar at any scale, and see how they occur in nature.",
            "image_path": "https://source.unsplash.com/500x500/?fractals",
            "type": "ELECTIVE"
          },
          {
            "name": "Calculating Climate: How Math Helps Us Understand Weather",
            "description": "Learn how mathematicians use complex calculations to predict the weather and understand climate patterns.",
            "image_path": "https://source.unsplash.com/500x500/?climate-math",
            "type": "ELECTIVE"
          },
          {
            "name": "Conservation Mathematics: How Math Helps Us Protect Wildlife",
            "description": "Discover how math plays a role in wildlife conservation, from estimating population sizes to tracking animal movements.",
            "image_path": "https://source.unsplash.com/500x500/?conservation-math",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in the Stars: Intro to Astronomy",
            "description": "Explore the use of mathematics in the study of the stars, understanding how astronomers use math to explore the universe.",
            "image_path": "https://source.unsplash.com/500x500/?astronomy",
            "type": "ELECTIVE"
          },
          {
            "name": "Patterns in Chaos: Introduction to Chaos Theory",
            "description": "Step into the intriguing world of chaos theory, understanding how seemingly random events can have underlying patterns.",
            "image_path": "https://source.unsplash.com/500x500/?chaos-theory",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Math in Games and Puzzles",
        "description": "An entertaining journey through the world of games and puzzles, understanding how mathematical thinking shapes strategy and decision-making.",
        "image_path": "https://source.unsplash.com/500x500/?games-puzzles",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Problem-Solving and Logic Puzzles",
            "description": "Challenge your problem-solving skills with a range of logic puzzles, from Sudoku to nonograms.",
            "image_path": "https://source.unsplash.com/500x500/?logic-puzzles",
            "type": "ELECTIVE"
          },
          {
            "name": "The Math Behind Card Games",
            "description": "Discover the math behind popular card games, understanding probability, strategy, and decision-making.",
            "image_path": "https://source.unsplash.com/500x500/?card-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Math and Strategy Board Games",
            "description": "Explore strategy board games like chess and checkers, understanding the mathematical concepts behind them.",
            "image_path": "https://source.unsplash.com/500x500/?board-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Video Games",
            "description": "Delve into the world of video games, seeing how mathematical models and algorithms shape the games we play.",
            "image_path": "https://source.unsplash.com/500x500/?video-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Puzzles and the Mind: Enhancing Cognitive Skills",
            "description": "Learn how solving puzzles enhances cognitive skills and nurtures mathematical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?puzzles-mind",
            "type": "ELECTIVE"
          },
          {
            "name": "Coding Games: Introduction to Programming Logic",
            "description": "Get an introduction to programming logic by coding simple games, using math to create interactive experiences.",
            "image_path": "https://source.unsplash.com/500x500/?coding-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Creating Your Own Math Puzzles",
            "description": "Bring out your creativity by creating your own math puzzles, understanding the principles of puzzle design.",
            "image_path": "https://source.unsplash.com/500x500/?creating-puzzles",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Sports Strategy",
            "description": "Explore how math shapes sports strategy, from optimizing player positions to analyzing performance statistics.",
            "image_path": "https://source.unsplash.com/500x500/?sports-strategy",
            "type": "ELECTIVE"
          },
          {
            "name": "Game Theory: Strategic Decision Making",
            "description": "Step into the fascinating world of game theory, understanding how strategic decisions can be analyzed mathematically.",
            "image_path": "https://source.unsplash.com/500x500/?game-theory",
            "type": "ELECTIVE"
          },
          {
            "name": "Escape Room Challenges: Problem-Solving Under Pressure",
            "description": "Tackle escape room challenges, honing your problem-solving skills under pressure and time constraints.",
            "image_path": "https://source.unsplash.com/500x500/?escape-room",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
  {
    "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
    "topics_data": [
      {
        "name": "Exploring Fractions and Decimals",
        "description": "Dive into the fascinating world of fractions and decimals, and discover the beauty of numbers.",
        "image_path": "https://source.unsplash.com/500x500/?fractions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Fractions",
            "description": "A gentle step into the world of fractions, setting the stage for more complex calculations.",
            "image_path": "https://source.unsplash.com/500x500/?fractions",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Fractions",
            "description": "Enhance your mathematical skill set by learning the principles of adding and subtracting fractions.",
            "image_path": "https://source.unsplash.com/500x500/?add-subtract-fractions",
            "type": "CORE"
          },
          {
            "name": "Multiplying Fractions",
            "description": "Discover the joy of multiplying fractions, a key skill for advanced mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?multiply-fractions",
            "type": "CORE"
          },
          {
            "name": "Dividing Fractions",
            "description": "Take on the challenge of dividing fractions, a critical skill for future mathematicians.",
            "image_path": "https://source.unsplash.com/500x500/?divide-fractions",
            "type": "CORE"
          },
          {
            "name": "Introduction to Decimals",
            "description": "Embark on the journey of understanding decimals, an important tool for precise calculations.",
            "image_path": "https://source.unsplash.com/500x500/?decimals",
            "type": "CORE"
          },
          {
            "name": "Converting Fractions to Decimals",
            "description": "Master the art of converting fractions to decimals, essential for real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?convert-fractions-decimals",
            "type": "CORE"
          },
          {
            "name": "Converting Decimals to Fractions",
            "description": "Learn to convert decimals to fractions, an important skill for mathematical fluency.",
            "image_path": "https://source.unsplash.com/500x500/?convert-decimals-fractions",
            "type": "CORE"
          },
          {
            "name": "Applying Fractions and Decimals",
            "description": "See fractions and decimals come alive through real-world applications, making mathematics fun and practical.",
            "image_path": "https://source.unsplash.com/500x500/?apply-fractions-decimals",
            "type": "ELECTIVE"
          },
          {
            "name": "Fraction and Decimal Word Problems",
            "description": "Sharpen your problem-solving skills by tackling word problems involving fractions and decimals.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-decimal-word-problems",
            "type": "ELECTIVE"
          },
          {
            "name": "Fraction and Decimal Puzzles",
            "description": "Challenge your understanding of fractions and decimals with exciting puzzles and brainteasers.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-decimal-puzzles",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Mastering Multiplication and Division",
        "description": "Embark on a journey to conquer multiplication and division, two fundamental pillars of mathematics.",
        "image_path": "https://source.unsplash.com/500x500/?multiplication,division",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Multiplication Review",
            "description": "Revisiting the art of multiplication to strengthen understanding and technique.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication",
            "type": "CORE"
          },
          {
            "name": "Division Review",
            "description": "Going back to the basics of division, laying the foundation for more complex operations.",
            "image_path": "https://source.unsplash.com/500x500/?division",
            "type": "CORE"
          },
          {
            "name": "Multiplication with Large Numbers",
            "description": "Enhance your multiplication skills with the introduction of larger numbers.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-large-numbers",
            "type": "CORE"
          },
          {
            "name": "Long Division",
            "description": "Master the technique of long division, a crucial skill for dividing larger numbers.",
            "image_path": "https://source.unsplash.com/500x500/?long-division",
            "type": "CORE"
          },
          {
            "name": "Multiplication and Division Word Problems",
            "description": "Apply your skills to solve word problems involving multiplication and division.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division-word-problems",
            "type": "CORE"
          },
          {
            "name": "Multiplication and Division in Everyday Life",
            "description": "Discover the practical uses of multiplication and division in everyday scenarios.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division-life",
            "type": "CORE"
          },
          {
            "name": "Multiplication and Division Puzzles",
            "description": "Challenge your understanding with puzzles and brainteasers centered around multiplication and division.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division-puzzles",
            "type": "CORE"
          },
          {
            "name": "Advanced Multiplication Techniques",
            "description": "Explore more sophisticated multiplication techniques for complex calculations.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-multiplication",
            "type": "ELECTIVE"
          },
          {
            "name": "Advanced Division Techniques",
            "description": "Learn advanced division techniques that make complex calculations easier.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-division",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Patterns in Multiplication and Division",
            "description": "Uncover fascinating patterns in multiplication and division, adding a new dimension to these operations.",
            "image_path": "https://source.unsplash.com/500x500/?multiplication-division-patterns",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Geometry and Shapes",
        "description": "Step into the captivating world of geometry and explore the beauty of shapes, angles, and patterns.",
        "image_path": "https://source.unsplash.com/500x500/?geometry,shapes",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Geometry",
            "description": "Embark on the exciting journey of geometry, discovering shapes, lines, and points.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-introduction",
            "type": "CORE"
          },
          {
            "name": "Understanding Angles",
            "description": "Learn the concept of angles, an essential element of geometric understanding.",
            "image_path": "https://source.unsplash.com/500x500/?angles",
            "type": "CORE"
          },
          {
            "name": "Types of Shapes",
            "description": "Discover the diversity of shapes in our world and learn how to classify them.",
            "image_path": "https://source.unsplash.com/500x500/?shapes",
            "type": "CORE"
          },
          {
            "name": "Properties of Shapes",
            "description": "Explore the fascinating properties of different shapes, enhancing your understanding of geometry.",
            "image_path": "https://source.unsplash.com/500x500/?shapes-properties",
            "type": "CORE"
          },
          {
            "name": "Understanding Symmetry",
            "description": "Uncover the intriguing concept of symmetry, a crucial aspect of many natural and man-made shapes.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry",
            "type": "CORE"
          },
          {
            "name": "Perimeter and Area",
            "description": "Learn how to calculate the perimeter and area of shapes, essential skills for real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?perimeter,area",
            "type": "CORE"
          },
          {
            "name": "Volume of Shapes",
            "description": "Discover how to calculate the volume of different shapes, bringing your geometry skills to the next level.",
            "image_path": "https://source.unsplash.com/500x500/?volume",
            "type": "CORE"
          },
          {
            "name": "Advanced Geometric Concepts",
            "description": "Delve deeper into the realm of geometry, exploring more complex concepts and principles.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-geometry",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry in Architecture",
            "description": "Discover the role of geometry in architecture, showcasing its practical applications.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-architecture",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry Puzzles and Challenges",
            "description": "Test your understanding of geometry with engaging puzzles and challenges.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-puzzles",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Data Analysis and Probability",
        "description": "Discover the fascinating world of data analysis and probability, and understand how they influence decision-making.",
        "image_path": "https://source.unsplash.com/500x500/?data,probability",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Data Analysis",
            "description": "Start your journey in data analysis, understanding how data is collected, sorted, and interpreted.",
            "image_path": "https://source.unsplash.com/500x500/?data-analysis",
            "type": "CORE"
          },
          {
            "name": "Graphing Data",
            "description": "Learn to visually present data using bar graphs, line graphs, and pie charts.",
            "image_path": "https://source.unsplash.com/500x500/?data-graphs",
            "type": "CORE"
          },
          {
            "name": "Interpreting Data",
            "description": "Develop the ability to interpret data, a vital skill in today‘s data-driven world.",
            "image_path": "https://source.unsplash.com/500x500/?data-interpretation",
            "type": "CORE"
          },
          {
            "name": "Introduction to Probability",
            "description": "Dive into the exciting world of probability, understanding its fundamental principles and applications.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Predicting Outcomes",
            "description": "Learn how probability is used to predict outcomes in a variety of contexts.",
            "image_path": "https://source.unsplash.com/500x500/?predicting-outcomes",
            "type": "CORE"
          },
          {
            "name": "Data Analysis and Probability in Daily Life",
            "description": "Discover how data analysis and probability play a role in everyday decision-making.",
            "image_path": "https://source.unsplash.com/500x500/?data-analysis-daily-life",
            "type": "CORE"
          },
          {
            "name": "Data Analysis and Probability Challenges",
            "description": "Put your understanding to the test with engaging data analysis and probability challenges.",
            "image_path": "https://source.unsplash.com/500x500/?data-probability-challenges",
            "type": "CORE"
          },
          {
            "name": "Advanced Probability Concepts",
            "description": "Explore more complex probability concepts, enhancing your mathematical skills.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-probability",
            "type": "ELECTIVE"
          },
          {
            "name": "Probability Puzzles and Games",
            "description": "Have fun while learning with probability-based puzzles and games.",
            "image_path": "https://source.unsplash.com/500x500/?probability-puzzles",
            "type": "ELECTIVE"
          },
          {
            "name": "Data Analysis Project",
            "description": "Put your data analysis skills into practice with a real-world project.",
            "image_path": "https://source.unsplash.com/500x500/?data-analysis-project",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fractions and Decimals",
        "description": "Embark on the journey of understanding fractions and decimals, an essential step in the world of mathematics.",
        "image_path": "https://source.unsplash.com/500x500/?fractions,decimals",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Fractions",
            "description": "Delve into the world of fractions, grasping their basics and intricacies.",
            "image_path": "https://source.unsplash.com/500x500/?fractions",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Fractions",
            "description": "Master the art of adding and subtracting fractions, vital for solving real-world problems.",
            "image_path": "https://source.unsplash.com/500x500/?adding-fractions",
            "type": "CORE"
          },
          {
            "name": "Understanding Decimals",
            "description": "Embark on the journey of understanding decimals and their place in the number system.",
            "image_path": "https://source.unsplash.com/500x500/?decimals",
            "type": "CORE"
          },
          {
            "name": "Adding and Subtracting Decimals",
            "description": "Get a grasp on adding and subtracting decimals, an essential tool in numerical calculations.",
            "image_path": "https://source.unsplash.com/500x500/?adding-decimals",
            "type": "CORE"
          },
          {
            "name": "Converting Fractions to Decimals",
            "description": "Learn the art of converting fractions to decimals and vice versa, an important skill in mathematics.",
            "image_path": "https://source.unsplash.com/500x500/?converting-fractions-decimals",
            "type": "CORE"
          },
          {
            "name": "Fraction and Decimal Word Problems",
            "description": "Enhance your problem-solving skills by tackling word problems involving fractions and decimals.",
            "image_path": "https://source.unsplash.com/500x500/?fraction-decimal-word-problems",
            "type": "CORE"
          },
          {
            "name": "Fractions and Decimals in Daily Life",
            "description": "Explore the numerous ways fractions and decimals are used in daily life, enhancing their practical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?fractions-decimals-daily-life",
            "type": "CORE"
          },
          {
            "name": "Multiplying and Dividing Fractions",
            "description": "Take your knowledge of fractions to the next level by learning how to multiply and divide them.",
            "image_path": "https://source.unsplash.com/500x500/?multiplying-fractions",
            "type": "ELECTIVE"
          },
          {
            "name": "Multiplying and Dividing Decimals",
            "description": "Dive deeper into the world of decimals with multiplication and division.",
            "image_path": "https://source.unsplash.com/500x500/?multiplying-decimals",
            "type": "ELECTIVE"
          },
          {
            "name": "Advanced Fraction and Decimal Problems",
            "description": "Challenge your understanding with complex problems involving fractions and decimals.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-fraction-decimal-problems",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Ratios and Proportions",
        "description": "Discover the fascinating world of ratios and proportions, key tools for understanding relationships between numbers.",
        "image_path": "https://source.unsplash.com/500x500/?ratios,proportions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Ratios",
            "description": "Delve into the concept of ratios, learning how they are used to compare quantities.",
            "image_path": "https://source.unsplash.com/500x500/?ratios",
            "type": "CORE"
          },
          {
            "name": "Creating Ratios",
            "description": "Learn how to create ratios from real-world scenarios and how to interpret them.",
            "image_path": "https://source.unsplash.com/500x500/?creating-ratios",
            "type": "CORE"
          },
          {
            "name": "Understanding Proportions",
            "description": "Embark on the journey of understanding proportions and their significance in mathematical applications.",
            "image_path": "https://source.unsplash.com/500x500/?proportions",
            "type": "CORE"
          },
          {
            "name": "Solving Proportions",
            "description": "Master the technique of solving proportions, an essential skill for various mathematical problems.",
            "image_path": "https://source.unsplash.com/500x500/?solving-proportions",
            "type": "CORE"
          },
          {
            "name": "Ratios and Proportions in Real Life",
            "description": "Explore the applications of ratios and proportions in daily life, enhancing your understanding and interest.",
            "image_path": "https://source.unsplash.com/500x500/?ratios-proportions-life",
            "type": "CORE"
          },
          {
            "name": "Ratio and Proportion Problems",
            "description": "Tackle a range of problems involving ratios and proportions, refining your problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?ratio-proportion-problems",
            "type": "CORE"
          },
          {
            "name": "Advanced Concepts in Ratios and Proportions",
            "description": "Unravel more complex concepts in ratios and proportions, taking your knowledge to a higher level.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-ratios-proportions",
            "type": "CORE"
          },
          {
            "name": "Ratios and Proportions in Geometry",
            "description": "Discover the crucial role of ratios and proportions in the study of geometry.",
            "image_path": "https://source.unsplash.com/500x500/?ratios-proportions-geometry",
            "type": "ELECTIVE"
          },
          {
            "name": "Ratios and Proportions in Data Analysis",
            "description": "Learn how ratios and proportions are used in data analysis, an essential field in today‘s digital age.",
            "image_path": "https://source.unsplash.com/500x500/?ratios-proportions-data",
            "type": "ELECTIVE"
          },
          {
            "name": "Ratios and Proportions Challenges",
            "description": "Test your understanding of ratios and proportions with challenging problems and exercises.",
            "image_path": "https://source.unsplash.com/500x500/?ratios-proportions-challenges",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Geometry and Spatial Sense",
        "description": "Step into the captivating realm of geometry and spatial sense, building a strong foundation for higher mathematical learning.",
        "image_path": "https://source.unsplash.com/500x500/?geometry,spatial-sense",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Shapes and Figures",
            "description": "Explore various shapes and figures, understanding their properties and classifications.",
            "image_path": "https://source.unsplash.com/500x500/?shapes,figures",
            "type": "CORE"
          },
          {
            "name": "Angles and Lines",
            "description": "Master the concept of angles and lines, which form the basis of geometry.",
            "image_path": "https://source.unsplash.com/500x500/?angles,lines",
            "type": "CORE"
          },
          {
            "name": "Perimeter and Area",
            "description": "Delve into the calculation of perimeters and areas, integral components in the understanding of space and shape.",
            "image_path": "https://source.unsplash.com/500x500/?perimeter,area",
            "type": "CORE"
          },
          {
            "name": "Volume of Solids",
            "description": "Learn how to calculate the volume of solids, expanding your knowledge of geometric concepts.",
            "image_path": "https://source.unsplash.com/500x500/?volume",
            "type": "CORE"
          },
          {
            "name": "Coordinate Geometry",
            "description": "Uncover the principles of coordinate geometry, a fundamental part of mathematical analysis.",
            "image_path": "https://source.unsplash.com/500x500/?coordinate-geometry",
            "type": "CORE"
          },
          {
            "name": "Spatial Visualization",
            "description": "Enhance your spatial visualization skills, which are crucial in comprehending geometric concepts.",
            "image_path": "https://source.unsplash.com/500x500/?spatial-visualization",
            "type": "CORE"
          },
          {
            "name": "Geometry in Real Life",
            "description": "Discover the role of geometry in real-life situations, illustrating its practical applications.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-real-life",
            "type": "CORE"
          },
          {
            "name": "Advanced Geometry Problems",
            "description": "Test your understanding of geometric concepts with a series of advanced problems.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-geometry",
            "type": "ELECTIVE"
          },
          {
            "name": "Construction and Transformation of Shapes",
            "description": "Learn the techniques of construction and transformation of shapes, expanding your geometry skills.",
            "image_path": "https://source.unsplash.com/500x500/?shapes-transformation",
            "type": "ELECTIVE"
          },
          {
            "name": "Geometry Challenges",
            "description": "Embark on a series of challenging geometry tasks, designed to boost your mathematical prowess.",
            "image_path": "https://source.unsplash.com/500x500/?geometry-challenges",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Data Analysis and Probability",
        "description": "Dive into the world of data analysis and probability, vital skills in the age of information and uncertainty.",
        "image_path": "https://source.unsplash.com/500x500/?data-analysis,probability",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Data",
            "description": "Learn the fundamentals of data, its types, and how it can be collected and organized for analysis.",
            "image_path": "https://source.unsplash.com/500x500/?understanding-data",
            "type": "CORE"
          },
          {
            "name": "Graphical Representation of Data",
            "description": "Discover the art of visualizing data through various types of graphs and charts.",
            "image_path": "https://source.unsplash.com/500x500/?graphs,charts",
            "type": "CORE"
          },
          {
            "name": "Interpreting Data",
            "description": "Develop the ability to interpret data, a key skill in making informed decisions.",
            "image_path": "https://source.unsplash.com/500x500/?interpreting-data",
            "type": "CORE"
          },
          {
            "name": "Introduction to Probability",
            "description": "Explore the concept of probability, understanding its theory and real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Experiments and Outcomes",
            "description": "Learn how to conduct simple probability experiments and determine their outcomes.",
            "image_path": "https://source.unsplash.com/500x500/?experiments,outcomes",
            "type": "CORE"
          },
          {
            "name": "Probability in Real Life",
            "description": "Discover the role of probability in everyday life, making sense of uncertainty and risk.",
            "image_path": "https://source.unsplash.com/500x500/?probability-real-life",
            "type": "CORE"
          },
          {
            "name": "Data Analysis and Probability Problems",
            "description": "Sharpen your skills through a series of data analysis and probability problems.",
            "image_path": "https://source.unsplash.com/500x500/?data-probability-problems",
            "type": "CORE"
          },
          {
            "name": "Advanced Data Analysis Techniques",
            "description": "Dive deeper into data analysis techniques, unlocking the power of data in decision-making.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-data-analysis",
            "type": "ELECTIVE"
          },
          {
            "name": "Advanced Probability Concepts",
            "description": "Uncover more complex concepts in probability, furthering your understanding of chance and uncertainty.",
            "image_path": "https://source.unsplash.com/500x500/?advanced-probability",
            "type": "ELECTIVE"
          },
          {
            "name": "Data Analysis and Probability Challenges",
            "description": "Take on a set of challenging problems in data analysis and probability, testing your understanding and skills.",
            "image_path": "https://source.unsplash.com/500x500/?data-probability-challenges",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Math in Art and Nature",
        "description": "Explore the surprising and beautiful connections between mathematics, art, and nature.",
        "image_path": "https://source.unsplash.com/500x500/?math,art,nature",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Symmetry in Art and Nature",
            "description": "Discover the concepts of symmetry in the world of art and nature, understanding its mathematical roots.",
            "image_path": "https://source.unsplash.com/500x500/?symmetry,art,nature",
            "type": "CORE"
          },
          {
            "name": "Patterns and Sequences",
            "description": "Learn about patterns and sequences found in nature and their mathematical explanations.",
            "image_path": "https://source.unsplash.com/500x500/?patterns,sequences",
            "type": "CORE"
          },
          {
            "name": "Geometry in Art and Nature",
            "description": "Explore how geometric shapes and principles are used in art and occur naturally in the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,art,nature",
            "type": "CORE"
          },
          {
            "name": "The Golden Ratio",
            "description": "Delve into the fascinating golden ratio, a mathematical phenomenon seen in art, nature, and architecture.",
            "image_path": "https://source.unsplash.com/500x500/?golden-ratio",
            "type": "CORE"
          },
          {
            "name": "Fractals in Nature",
            "description": "Discover the concept of fractals, recurring patterns that are self-similar across different scales, found in nature.",
            "image_path": "https://source.unsplash.com/500x500/?fractals",
            "type": "CORE"
          },
          {
            "name": "Math and Music",
            "description": "Uncover the mathematical structure behind music, enhancing your appreciation of the art form.",
            "image_path": "https://source.unsplash.com/500x500/?math,music",
            "type": "ELECTIVE"
          },
          {
            "name": "Mathematical Art Projects",
            "description": "Engage in creative art projects that incorporate mathematical principles, nurturing your artistic and mathematical abilities.",
            "image_path": "https://source.unsplash.com/500x500/?math,art-projects",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Math and Games",
        "description": "Discover the engaging and interactive side of mathematics through a variety of games and puzzles.",
        "image_path": "https://source.unsplash.com/500x500/?math,games",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Mathematical Puzzles",
            "description": "Enjoy a range of exciting puzzles that help strengthen your mathematical problem-solving skills.",
            "image_path": "https://source.unsplash.com/500x500/?math,puzzles",
            "type": "CORE"
          },
          {
            "name": "Probability in Games",
            "description": "Learn how probability is used in games, and how understanding it can improve your strategy.",
            "image_path": "https://source.unsplash.com/500x500/?probability,games",
            "type": "CORE"
          },
          {
            "name": "Number Games",
            "description": "Engage with a variety of number games that enhance your understanding of mathematical concepts.",
            "image_path": "https://source.unsplash.com/500x500/?number-games",
            "type": "CORE"
          },
          {
            "name": "Geometry in Games",
            "description": "Discover how geometric principles play a role in certain games, adding a new layer of intrigue.",
            "image_path": "https://source.unsplash.com/500x500/?geometry,games",
            "type": "CORE"
          },
          {
            "name": "Math and Strategy Games",
            "description": "Explore a variety of strategy games with underlying mathematical principles, fostering logical thinking.",
            "image_path": "https://source.unsplash.com/500x500/?math,strategy-games",
            "type": "CORE"
          },
          {
            "name": "Creating Mathematical Games",
            "description": "Design your own games that incorporate mathematical concepts, combining creativity with mathematical understanding.",
            "image_path": "https://source.unsplash.com/500x500/?create,math-games",
            "type": "ELECTIVE"
          },
          {
            "name": "Math Games Challenges",
            "description": "Take on a series of challenges in math games, testing your skills and fostering enjoyment in learning.",
            "image_path": "https://source.unsplash.com/500x500/?math-games,challenges",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  }
]'::json
);
---- Science ✅
SELECT create_complete_curriculum(
  'Comprehensive K-5',
  '2c0970f3-18fe-491f-879e-82e43d50bb57'::uuid,
  'CORE'::module_type,
  '[
  {
    "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
    "topics_data": [
      {
        "name": "Exploring Nature",
        "description": "Igniting the natural curiosity of kindergarteners, promoting exploration, and fostering a sense of wonder for the natural world.",
        "image_path": "https://source.unsplash.com/500x500/?nature-kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Plants",
            "description": "An interactive journey to discover various types of plants and their parts, nurturing a love for green life.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "Adventures in Animal Kingdom",
            "description": "A virtual safari introducing the diverse animal kingdom and instilling the importance of co-existence.",
            "image_path": "https://source.unsplash.com/500x500/?animal",
            "type": "CORE"
          },
          {
            "name": "Understanding Weather",
            "description": "A playful introduction to different types of weather and how they impact our daily life.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "The Colorful World of Flowers",
            "description": "A vibrant exploration of flowers, their colors, and how they play an essential role in nature.",
            "image_path": "https://source.unsplash.com/500x500/?flowers",
            "type": "CORE"
          },
          {
            "name": "All About Seasons",
            "description": "Understanding the magic of changing seasons and how it affects the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?seasons",
            "type": "CORE"
          },
          {
            "name": "Day and Night",
            "description": "Learning the concept of day and night, sun and moon, in a fun and interactive way.",
            "image_path": "https://source.unsplash.com/500x500/?day-night",
            "type": "CORE"
          },
          {
            "name": "Magnificent Mini-beasts",
            "description": "Getting up close with insects and learning about their important role in our ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?insects",
            "type": "CORE"
          },
          {
            "name": "Introduction to Habitats",
            "description": "An exciting adventure through different habitats and the diverse creatures that call them home.",
            "image_path": "https://source.unsplash.com/500x500/?habitats",
            "type": "ELECTIVE"
          },
          {
            "name": "Beautiful Butterflies",
            "description": "Unraveling the magical journey of caterpillar to butterfly and understanding the concept of metamorphosis.",
            "image_path": "https://source.unsplash.com/500x500/?butterflies",
            "type": "ELECTIVE"
          },
          {
            "name": "Seeds and Growth",
            "description": "A hands-on lesson in planting seeds, understanding their growth, and appreciating the miracle of life.",
            "image_path": "https://source.unsplash.com/500x500/?seeds",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Our Bodies and Health",
        "description": "Creating a strong foundation of understanding our bodies, promoting good health, hygiene, and instilling a sense of care towards self and others.",
        "image_path": "https://source.unsplash.com/500x500/?kids-health",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Our Five Senses",
            "description": "An engaging exploration of the five senses, helping kindergarteners understand how we perceive the world.",
            "image_path": "https://source.unsplash.com/500x500/?five-senses",
            "type": "CORE"
          },
          {
            "name": "Keeping Clean",
            "description": "Teaching the importance of hygiene, personal cleanliness, and good habits to stay healthy.",
            "image_path": "https://source.unsplash.com/500x500/?cleanliness",
            "type": "CORE"
          },
          {
            "name": "Our Teeth and Their Care",
            "description": "An introduction to the role of teeth, proper brushing techniques, and the significance of oral hygiene.",
            "image_path": "https://source.unsplash.com/500x500/?teeth",
            "type": "CORE"
          },
          {
            "name": "Healthy Eating",
            "description": "Cultivating an understanding of nutritious foods, the food pyramid, and why balanced meals are essential.",
            "image_path": "https://source.unsplash.com/500x500/?healthy-eating",
            "type": "CORE"
          },
          {
            "name": "Fun with Exercise",
            "description": "Promoting the benefits of physical activity through fun, exercise-related games and activities.",
            "image_path": "https://source.unsplash.com/500x500/?exercise",
            "type": "CORE"
          },
          {
            "name": "Sleep and Rest",
            "description": "Learning about the importance of sufficient sleep and rest for our bodies and minds.",
            "image_path": "https://source.unsplash.com/500x500/?sleep",
            "type": "CORE"
          },
          {
            "name": "Body Parts and Their Functions",
            "description": "A fun-filled journey to learn about different body parts and their basic functions.",
            "image_path": "https://source.unsplash.com/500x500/?body-parts",
            "type": "CORE"
          },
          {
            "name": "Understanding Feelings",
            "description": "Building emotional intelligence by identifying and expressing different feelings and emotions.",
            "image_path": "https://source.unsplash.com/500x500/?feelings",
            "type": "ELECTIVE"
          },
          {
            "name": "Safety First",
            "description": "Teaching basic safety rules at home, school, and outdoors to ensure a safe environment for children.",
            "image_path": "https://source.unsplash.com/500x500/?safety",
            "type": "ELECTIVE"
          },
          {
            "name": "Our Beautiful Skin Colors",
            "description": "Celebrating diversity by recognizing and appreciating different skin colors and ethnicities.",
            "image_path": "https://source.unsplash.com/500x500/?diversity",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Space and Beyond",
        "description": "Igniting a love for the cosmos by introducing the fascinating world of stars, planets, and the mysteries of space.",
        "image_path": "https://source.unsplash.com/500x500/?space-kids",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Night Sky",
            "description": "A tour of the night sky, exploring constellations, stars, and the moon.",
            "image_path": "https://source.unsplash.com/500x500/?night-sky",
            "type": "CORE"
          },
          {
            "name": "Meet the Planets",
            "description": "An exciting journey through our solar system, introducing the unique characteristics of each planet.",
            "image_path": "https://source.unsplash.com/500x500/?planets",
            "type": "CORE"
          },
          {
            "name": "The Amazing Sun",
            "description": "Understanding the sun‘s importance, its role in day and night, and how it affects life on earth.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Space Explorers",
            "description": "Learning about astronauts, their training, space missions, and life in space.",
            "image_path": "https://source.unsplash.com/500x500/?astronaut",
            "type": "CORE"
          },
          {
            "name": "Moon Phases",
            "description": "Exploring the moon‘s phases, its craters and the concept of lunar months.",
            "image_path": "https://source.unsplash.com/500x500/?moon-phases",
            "type": "CORE"
          },
          {
            "name": "What is Gravity?",
            "description": "Introducing the concept of gravity in a fun and engaging manner.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "Asteroids and Comets",
            "description": "Unraveling the mysteries of asteroids and comets and their impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?asteroids",
            "type": "CORE"
          },
          {
            "name": "Aliens and Life Beyond",
            "description": "A playful exploration of the idea of extraterrestrial life and its possibilities.",
            "image_path": "https://source.unsplash.com/500x500/?aliens",
            "type": "ELECTIVE"
          },
          {
            "name": "Rocket Science Basics",
            "description": "Diving into the basics of rocket science with easy and fun activities.",
            "image_path": "https://source.unsplash.com/500x500/?rocket-science",
            "type": "ELECTIVE"
          },
          {
            "name": "Star Stories",
            "description": "Learning about different constellations and their associated mythologies and stories.",
            "image_path": "https://source.unsplash.com/500x500/?constellations",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Understanding Matter",
        "description": "Introducing the exciting world of matter, its various states, and understanding how it changes from one form to another.",
        "image_path": "https://source.unsplash.com/500x500/?matter",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What is Matter?",
            "description": "A simple and fun introduction to the concept of matter and its presence in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?matter",
            "type": "CORE"
          },
          {
            "name": "Solids All Around Us",
            "description": "Exploring solids, their characteristics, and examples in our surrounding environment.",
            "image_path": "https://source.unsplash.com/500x500/?solids",
            "type": "CORE"
          },
          {
            "name": "World of Liquids",
            "description": "Understanding liquids, their properties, and how they differ from solids.",
            "image_path": "https://source.unsplash.com/500x500/?liquids",
            "type": "CORE"
          },
          {
            "name": "Gases in our Life",
            "description": "Unveiling the invisible world of gases, their properties, and significance in our life.",
            "image_path": "https://source.unsplash.com/500x500/?gases",
            "type": "CORE"
          },
          {
            "name": "Changing States: Melting and Freezing",
            "description": "Exploring how matter changes state, specifically focusing on melting and freezing.",
            "image_path": "https://source.unsplash.com/500x500/?melting-freezing",
            "type": "CORE"
          },
          {
            "name": "Changing States: Evaporation and Condensation",
            "description": "Understanding the process of evaporation and condensation through engaging experiments.",
            "image_path": "https://source.unsplash.com/500x500/?evaporation-condensation",
            "type": "CORE"
          },
          {
            "name": "Mixing and Separating",
            "description": "Exploring how different forms of matter mix together and how they can be separated.",
            "image_path": "https://source.unsplash.com/500x500/?mixing-separating",
            "type": "CORE"
          },
          {
            "name": "Density: A Float and Sink Experiment",
            "description": "Introducing the concept of density through a fun and interactive float and sink experiment.",
            "image_path": "https://source.unsplash.com/500x500/?density",
            "type": "ELECTIVE"
          },
          {
            "name": "Invisible Forces: Magnets",
            "description": "Discovering the invisible force of magnets and their everyday applications.",
            "image_path": "https://source.unsplash.com/500x500/?magnets",
            "type": "ELECTIVE"
          },
          {
            "name": "Dissolving Matters",
            "description": "Understanding the process of dissolving through simple and safe experiments.",
            "image_path": "https://source.unsplash.com/500x500/?dissolving",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Adventures in Earth Science",
        "description": "Creating a sense of awe for our planet through the exploration of landforms, water bodies, and the rock cycle.",
        "image_path": "https://source.unsplash.com/500x500/?earth-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Land We Live On",
            "description": "Understanding different landforms and appreciating the beauty and diversity of our planet‘s terrain.",
            "image_path": "https://source.unsplash.com/500x500/?landforms",
            "type": "CORE"
          },
          {
            "name": "The Water Around Us",
            "description": "Exploring the various bodies of water, their characteristics, and the role they play in our lives.",
            "image_path": "https://source.unsplash.com/500x500/?water-bodies",
            "type": "CORE"
          },
          {
            "name": "Rocks and Minerals",
            "description": "Learning about different types of rocks and minerals, their formation, and uses.",
            "image_path": "https://source.unsplash.com/500x500/?rocks-minerals",
            "type": "CORE"
          },
          {
            "name": "The Rock Cycle",
            "description": "Unraveling the journey of a rock through the rock cycle, understanding how it transforms over time.",
            "image_path": "https://source.unsplash.com/500x500/?rock-cycle",
            "type": "CORE"
          },
          {
            "name": "Fossils: Stories in Stone",
            "description": "Introducing the concept of fossils, how they are formed, and what they tell us about Earth‘s past.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "CORE"
          },
          {
            "name": "Volcanoes and Earthquakes",
            "description": "Exploring the phenomena of volcanoes and earthquakes, their causes, and effects on our planet.",
            "image_path": "https://source.unsplash.com/500x500/?volcanoes-earthquakes",
            "type": "CORE"
          },
          {
            "name": "The Soil Beneath Our Feet",
            "description": "Investigating the composition of soil, its layers, and the role it plays in our environment.",
            "image_path": "https://source.unsplash.com/500x500/?soil",
            "type": "CORE"
          },
          {
            "name": "The Wonders of Sand",
            "description": "Understanding the properties of sand, its origin, and applications through fun hands-on experiments.",
            "image_path": "https://source.unsplash.com/500x500/?sand",
            "type": "ELECTIVE"
          },
          {
            "name": "Formation of Islands",
            "description": "Learning about the creation of islands and exploring some of the most unique islands on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?islands",
            "type": "ELECTIVE"
          },
          {
            "name": "Mysteries of Caves",
            "description": "Discovering the formation of caves, their types, and the creatures that inhabit them.",
            "image_path": "https://source.unsplash.com/500x500/?caves",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Magic of Weather",
        "description": "Cultivating a sense of wonder about the ever-changing weather, its patterns, and effects on our daily life.",
        "image_path": "https://source.unsplash.com/500x500/?weather",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Sunshine and Shadows",
            "description": "Understanding sunlight, its effects on temperature, and the formation of shadows.",
            "image_path": "https://source.unsplash.com/500x500/?sunshine",
            "type": "CORE"
          },
          {
            "name": "Clouds and Rain",
            "description": "Exploring different types of clouds, how rain is formed, and its importance.",
            "image_path": "https://source.unsplash.com/500x500/?clouds",
            "type": "CORE"
          },
          {
            "name": "Winds and Storms",
            "description": "Learning about winds, storms, and how weather conditions change.",
            "image_path": "https://source.unsplash.com/500x500/?storm",
            "type": "CORE"
          },
          {
            "name": "Seasons and Change",
            "description": "Understanding the four seasons, how they change, and their impact on the environment.",
            "image_path": "https://source.unsplash.com/500x500/?seasons",
            "type": "CORE"
          },
          {
            "name": "Snow and Ice",
            "description": "Discovering the science behind snow and ice, its formation and fun facts.",
            "image_path": "https://source.unsplash.com/500x500/?snow",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle",
            "description": "Understanding the water cycle, how it works, and its importance for life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Weather Instruments",
            "description": "Learning about different instruments that are used to measure weather conditions.",
            "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
            "type": "CORE"
          },
          {
            "name": "Extreme Weather Phenomena",
            "description": "A fascinating introduction to extreme weather phenomena like tornadoes, hurricanes, and blizzards.",
            "image_path": "https://source.unsplash.com/500x500/?extreme-weather",
            "type": "ELECTIVE"
          },
          {
            "name": "Reading a Weather Map",
            "description": "Learning to interpret weather symbols and read a basic weather map.",
            "image_path": "https://source.unsplash.com/500x500/?weather-map",
            "type": "ELECTIVE"
          },
          {
            "name": "Weather and Climate Change",
            "description": "Discussing climate change, its effects on weather patterns, and how we can help.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Plants and Their Friends",
        "description": "Nurturing an appreciation for plants, understanding their life cycle, and exploring the creatures that live among them.",
        "image_path": "https://source.unsplash.com/500x500/?plants",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Magic of Seeds",
            "description": "Understanding seeds, their structure, and the journey they take to become a plant.",
            "image_path": "https://source.unsplash.com/500x500/?seeds",
            "type": "CORE"
          },
          {
            "name": "Parts of a Plant",
            "description": "Learning about the different parts of a plant and their functions.",
            "image_path": "https://source.unsplash.com/500x500/?plant-parts",
            "type": "CORE"
          },
          {
            "name": "Flowers and Fruits",
            "description": "Exploring the world of flowers and fruits, their purpose, and how they form.",
            "image_path": "https://source.unsplash.com/500x500/?flowers-fruits",
            "type": "CORE"
          },
          {
            "name": "Plants and Sunlight",
            "description": "Discovering the importance of sunlight for plants and the process of photosynthesis.",
            "image_path": "https://source.unsplash.com/500x500/?sunlight-photosynthesis",
            "type": "CORE"
          },
          {
            "name": "Plant Defenses",
            "description": "Learning about various ways plants protect themselves from pests and harsh conditions.",
            "image_path": "https://source.unsplash.com/500x500/?plant-defenses",
            "type": "CORE"
          },
          {
            "name": "Plant Needs and Care",
            "description": "Understanding the needs of a plant and learning how to care for plants at home.",
            "image_path": "https://source.unsplash.com/500x500/?plant-care",
            "type": "CORE"
          },
          {
            "name": "The Role of Insects",
            "description": "Exploring the important role of insects in the life of plants, including pollination.",
            "image_path": "https://source.unsplash.com/500x500/?insects-pollination",
            "type": "CORE"
          },
          {
            "name": "Exploring Moss and Ferns",
            "description": "Introduction to moss and ferns, understanding their life cycle and unique characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?moss-ferns",
            "type": "ELECTIVE"
          },
          {
            "name": "Plants and Medicine",
            "description": "Learning about medicinal plants and their uses in treating various ailments.",
            "image_path": "https://source.unsplash.com/500x500/?medicinal-plants",
            "type": "ELECTIVE"
          },
          {
            "name": "Gardening at Home",
            "description": "Encouraging hands-on learning by growing a plant from a seed at home.",
            "image_path": "https://source.unsplash.com/500x500/?home-gardening",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Wonders of Space",
        "description": "Embarking on a cosmic journey to explore our solar system, the stars, and the vastness of space.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Our Solar System",
            "description": "An engaging introduction to our solar system, exploring the sun, planets, and their moons.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "The Moon and its Phases",
            "description": "Understanding the moon, its phases, and its impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "Stars and Constellations",
            "description": "Discovering the beauty of stars and constellations, their stories, and how to identify them in the night sky.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "Day and Night",
            "description": "Learning about the Earth‘s rotation, why we have day and night, and the concept of time zones.",
            "image_path": "https://source.unsplash.com/500x500/?day-night",
            "type": "CORE"
          },
          {
            "name": "The Sun, Our Star",
            "description": "Exploring the sun, its importance, and safety measures when observing the sun.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "The Wonders of Gravity",
            "description": "Understanding gravity, how it works, and its role in our solar system.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "Earth, Our Home",
            "description": "Learning about Earth‘s unique features that make it suitable for life.",
            "image_path": "https://source.unsplash.com/500x500/?earth",
            "type": "CORE"
          },
          {
            "name": "Comets, Asteroids and Meteors",
            "description": "Unveiling the mysteries of comets, asteroids, and meteors, and their interactions with our planet.",
            "image_path": "https://source.unsplash.com/500x500/?comets-asteroids",
            "type": "ELECTIVE"
          },
          {
            "name": "Space Exploration",
            "description": "Exploring the history of space exploration, major achievements, and future plans.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "ELECTIVE"
          },
          {
            "name": "Astronauts and Space Travel",
            "description": "Learning about astronauts, their training, and the experience of space travel.",
            "image_path": "https://source.unsplash.com/500x500/?astronauts",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Inventions and Innovations",
        "description": "Unveiling the magic of science through the lens of remarkable inventions and technological advancements.",
        "image_path": "https://source.unsplash.com/500x500/?inventions",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "The Wheel and Its Uses",
            "description": "Exploring the invention of the wheel and its wide range of applications.",
            "image_path": "https://source.unsplash.com/500x500/?wheel",
            "type": "CORE"
          },
          {
            "name": "Inventors and Their Inventions",
            "description": "Inspiring young minds with stories of renowned inventors and their groundbreaking inventions.",
            "image_path": "https://source.unsplash.com/500x500/?inventors",
            "type": "CORE"
          },
          {
            "name": "Simple Machines Around Us",
            "description": "Identifying and understanding the uses of simple machines in our daily life.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "CORE"
          },
          {
            "name": "The Magic of Electricity",
            "description": "Introducing the concept of electricity, its generation, and its role in powering our world.",
            "image_path": "https://source.unsplash.com/500x500/?electricity",
            "type": "CORE"
          },
          {
            "name": "Internet and Computers",
            "description": "Exploring the world of computers and the internet, and understanding their significance in the modern world.",
            "image_path": "https://source.unsplash.com/500x500/?computers-internet",
            "type": "CORE"
          },
          {
            "name": "Robotics and AI",
            "description": "A peek into the fascinating world of robotics and artificial intelligence.",
            "image_path": "https://source.unsplash.com/500x500/?robotics-ai",
            "type": "ELECTIVE"
          },
          {
            "name": "Green Energy Innovations",
            "description": "Discussing the importance of green energy innovations for a sustainable future.",
            "image_path": "https://source.unsplash.com/500x500/?green-energy",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Scientific Wonders of the Ancient World",
        "description": "Exploring ancient civilizations‘ scientific knowledge and marvels, fostering an appreciation for their ingenuity.",
        "image_path": "https://source.unsplash.com/500x500/?ancient-world",
        "type": "ELECTIVE",
        "lessons_data": [
          {
            "name": "Egyptian Pyramids and Mathematics",
            "description": "Learning about the Egyptian pyramids and the ancient Egyptians‘ understanding of mathematics.",
            "image_path": "https://source.unsplash.com/500x500/?egyptian-pyramids",
            "type": "CORE"
          },
          {
            "name": "Greek Philosophers and Natural Sciences",
            "description": "Exploring the contributions of ancient Greek philosophers to the natural sciences.",
            "image_path": "https://source.unsplash.com/500x500/?greek-philosophers",
            "type": "CORE"
          },
          {
            "name": "Roman Engineering and Architecture",
            "description": "Understanding the marvels of Roman engineering and architecture, like aqueducts and the Colosseum.",
            "image_path": "https://source.unsplash.com/500x500/?roman-engineering",
            "type": "CORE"
          },
          {
            "name": "Astronomy in Ancient Civilizations",
            "description": "Exploring the understanding and significance of astronomy in various ancient civilizations.",
            "image_path": "https://source.unsplash.com/500x500/?ancient-astronomy",
            "type": "CORE"
          },
          {
            "name": "Medicine in the Ancient World",
            "description": "Understanding the development of medicine and health practices in ancient civilizations.",
            "image_path": "https://source.unsplash.com/500x500/?ancient-medicine",
            "type": "CORE"
          },
          {
            "name": "Ancient Indian Science and Technology",
            "description": "Exploring the scientific and technological advancements of ancient India, including Ayurveda and zero‘s concept.",
            "image_path": "https://source.unsplash.com/500x500/?ancient-india",
            "type": "ELECTIVE"
          },
          {
            "name": "Chinese Inventions and Discoveries",
            "description": "Learning about significant inventions and discoveries from ancient China, like paper and the compass.",
            "image_path": "https://source.unsplash.com/500x500/?ancient-china",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
    {
    "level_id": "ca0b37a7-47c4-4abb-81a3-64e84f803abd",
    "topics_data": [
      {
        "name": "Exploring the Natural World",
        "description": "Igniting a passion for the environment through the fascinating world of plants, animals, and ecosystems.",
        "image_path": "https://source.unsplash.com/500x500/?nature",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Wonders of Plant Life",
            "description": "Discover the magic of photosynthesis and the lifecycle of a plant.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "Amazing Animal Adaptations",
            "description": "Explore how animals have adapted to survive in their environments.",
            "image_path": "https://source.unsplash.com/500x500/?animals",
            "type": "CORE"
          },
          {
            "name": "The Web of Life: Introduction to Ecosystems",
            "description": "Unravel the complex relationships between plants, animals, and the environment in an ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystem",
            "type": "CORE"
          },
          {
            "name": "Earth‘s Biomes",
            "description": "Venture through desert, rainforest, tundra, and other biomes to see the diversity of life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?biomes",
            "type": "CORE"
          },
          {
            "name": "Water Cycle Wonders",
            "description": "Understand how water travels from Earth to the sky and back in an amazing journey.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Weather Patterns",
            "description": "Explore how weather forms and how it impacts the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "Beneath Our Feet: Introduction to Geology",
            "description": "Journey to the center of the Earth and discover the secrets beneath the ground we walk on.",
            "image_path": "https://source.unsplash.com/500x500/?geology",
            "type": "CORE"
          },
          {
            "name": "Creepy Crawlies: Introduction to Insects",
            "description": "Get a closer look at the smallest creatures and their role in our ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?insects",
            "type": "ELECTIVE"
          },
          {
            "name": "Garden to Table: Grow Your Own Food",
            "description": "Learn about the lifecycle of a plant by growing your own vegetables.",
            "image_path": "https://source.unsplash.com/500x500/?gardening",
            "type": "ELECTIVE"
          },
          {
            "name": "Birds of a Feather: Bird Watching Basics",
            "description": "Discover the wide world of birds and learn some basics of bird watching.",
            "image_path": "https://source.unsplash.com/500x500/?birds",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "Adventures in Physical Science",
        "description": "Fostering an understanding of the physical world by exploring the wonders of matter, force, and energy.",
        "image_path": "https://source.unsplash.com/500x500/?physical-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What‘s the Matter: An Introduction to States of Matter",
            "description": "Discover the fascinating world of solids, liquids, and gases and how they transform.",
            "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
            "type": "CORE"
          },
          {
            "name": "Push and Pull: Introduction to Forces",
            "description": "Understand the basics of forces and see how they shape our everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?forces",
            "type": "CORE"
          },
          {
            "name": "Energy All Around: Understanding Energy Forms",
            "description": "Explore the various forms of energy and how they impact our world.",
            "image_path": "https://source.unsplash.com/500x500/?energy",
            "type": "CORE"
          },
          {
            "name": "Light it Up: Basics of Light and Shadows",
            "description": "Investigate the properties of light and how shadows form.",
            "image_path": "https://source.unsplash.com/500x500/?light-and-shadows",
            "type": "CORE"
          },
          {
            "name": "Sound Waves: The Science of Sound",
            "description": "Unravel the mystery of sound, how it‘s produced, and how it travels.",
            "image_path": "https://source.unsplash.com/500x500/?sound-waves",
            "type": "CORE"
          },
          {
            "name": "Magnets and More: Exploring Magnetism",
            "description": "Discover the fascinating world of magnets and the invisible force of magnetism.",
            "image_path": "https://source.unsplash.com/500x500/?magnet",
            "type": "CORE"
          },
          {
            "name": "Simple Machines: Making Work Easier",
            "description": "Learn about simple machines and see how they make our work easier.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "CORE"
          },
          {
            "name": "The Power of Wind: Wind Energy Basics",
            "description": "Explore the power of wind and how we can harness it to create energy.",
            "image_path": "https://source.unsplash.com/500x500/?wind-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Solar Science: Understanding Solar Energy",
            "description": "Discover the immense power of the sun and how we can use it for clean energy.",
            "image_path": "https://source.unsplash.com/500x500/?solar-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "The Magic of Mirrors: Reflection and Refraction",
            "description": "Dive into the science behind mirrors, lenses, and how light interacts with them.",
            "image_path": "https://source.unsplash.com/500x500/?mirrors",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "Our Changing Earth",
        "description": "Encouraging a deeper appreciation for the planet through the study of its changes and processes over time.",
        "image_path": "https://source.unsplash.com/500x500/?earth-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Rock Cycle: Understanding Rocks and Minerals",
            "description": "Embark on a journey through time to discover the story of Earth as told by rocks and minerals.",
            "image_path": "https://source.unsplash.com/500x500/?rocks",
            "type": "CORE"
          },
          {
            "name": "From Mountains to Valleys: Exploring Landforms",
            "description": "Learn about various landforms and the natural processes that shape our Earth.",
            "image_path": "https://source.unsplash.com/500x500/?landforms",
            "type": "CORE"
          },
          {
            "name": "Volcanoes and Earthquakes: Earth‘s Restless Surface",
            "description": "Discover the dynamic nature of our planet through the study of volcanoes and earthquakes.",
            "image_path": "https://source.unsplash.com/500x500/?volcanoes",
            "type": "CORE"
          },
          {
            "name": "The Power of Wind and Water: Erosion and Weathering",
            "description": "Explore how wind and water change the landscape over time through erosion and weathering.",
            "image_path": "https://source.unsplash.com/500x500/?erosion",
            "type": "CORE"
          },
          {
            "name": "Fossils: Windows to the Past",
            "description": "Unearth the mysteries of the past by studying fossils and what they tell us about extinct life.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "CORE"
          },
          {
            "name": "The Ocean‘s Depths: Introduction to Oceanography",
            "description": "Dive into the world of oceans, exploring their depth, creatures, and importance to Earth.",
            "image_path": "https://source.unsplash.com/500x500/?ocean",
            "type": "CORE"
          },
          {
            "name": "Caring for Our Planet: Basics of Conservation",
            "description": "Understand our role in preserving our planet and learn basic conservation practices.",
            "image_path": "https://source.unsplash.com/500x500/?conservation",
            "type": "CORE"
          },
          {
            "name": "Space Rocks: Introduction to Meteors and Asteroids",
            "description": "Journey into space to learn about meteors and asteroids and their impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?meteors",
            "type": "ELECTIVE"
          },
          {
            "name": "Nature‘s Fury: Understanding Storms and Tornadoes",
            "description": "Discover the science behind storms, tornadoes, and other extreme weather phenomena.",
            "image_path": "https://source.unsplash.com/500x500/?storms",
            "type": "ELECTIVE"
          },
          {
            "name": "Amazing Caves: Exploring Underground Ecosystems",
            "description": "Take a journey underground to explore caves and the unique life they harbor.",
            "image_path": "https://source.unsplash.com/500x500/?caves",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "The Mysteries of Space",
        "description": "Inspiring awe and wonder as we delve into the vast expanse of the cosmos, exploring planets, stars, and beyond.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Journey to the Moon: Introduction to the Lunar Cycle",
            "description": "Travel to our closest celestial neighbor and discover the phases of the moon.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "Our Home: Understanding Earth and Its Rotation",
            "description": "Learn about Earth, how it rotates, and the impact it has on day and night.",
            "image_path": "https://source.unsplash.com/500x500/?earth",
            "type": "CORE"
          },
          {
            "name": "Blinking Stars: Introduction to Constellations",
            "description": "Venture into the night sky to learn about stars and constellations.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "The Sun: Our Local Star",
            "description": "Discover the power and importance of our nearest star - the Sun.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Exploring our Solar System: Planets and More",
            "description": "Journey through our solar system, learning about the planets and their unique characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?planets",
            "type": "CORE"
          },
          {
            "name": "The Mystery of Black Holes",
            "description": "Dive into the intriguing world of black holes and their role in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?black-hole",
            "type": "CORE"
          },
          {
            "name": "Comets, Asteroids, and Meteors: Space Debris",
            "description": "Uncover the facts about the different types of space debris and their impacts on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?meteor",
            "type": "CORE"
          },
          {
            "name": "Alien Worlds: Exoplanets and the Search for Life",
            "description": "Explore the concept of exoplanets and the exciting search for extraterrestrial life.",
            "image_path": "https://source.unsplash.com/500x500/?exoplanets",
            "type": "ELECTIVE"
          },
          {
            "name": "Galaxies Far, Far Away",
            "description": "Embark on an intergalactic journey to understand what galaxies are and how they form.",
            "image_path": "https://source.unsplash.com/500x500/?galaxies",
            "type": "ELECTIVE"
          },
          {
            "name": "Space Exploration: Past, Present, and Future",
            "description": "Learn about the history and future of space exploration, from the moon landing to Mars rovers and beyond.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "The Magic of Life",
        "description": "Cultivating an understanding and appreciation for life in all its forms, from tiny cells to complex ecosystems.",
        "image_path": "https://source.unsplash.com/500x500/?biology",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Building Blocks of Life: Introduction to Cells",
            "description": "Explore cells, the smallest units of life, and discover how they work together to create living organisms.",
            "image_path": "https://source.unsplash.com/500x500/?cells",
            "type": "CORE"
          },
          {
            "name": "Plants: More than Meets the Eye",
            "description": "Discover the fascinating world of plants, from photosynthesis to various plant parts.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "Amazing Animals: Understanding Animal Classifications",
            "description": "Learn about the diversity of animal life and how we classify different animal species.",
            "image_path": "https://source.unsplash.com/500x500/?animals",
            "type": "CORE"
          },
          {
            "name": "The Human Body: Our Bodies, Our Selves",
            "description": "Explore the human body, learning about different organs and systems that keep us alive and healthy.",
            "image_path": "https://source.unsplash.com/500x500/?human-body",
            "type": "CORE"
          },
          {
            "name": "Insect Investigations: The World of Bugs",
            "description": "Delve into the world of insects, exploring their unique features and their role in ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?insects",
            "type": "CORE"
          },
          {
            "name": "Under the Sea: Marine Life and Habitats",
            "description": "Journey under the sea to explore diverse marine life and their habitats.",
            "image_path": "https://source.unsplash.com/500x500/?marine-life",
            "type": "CORE"
          },
          {
            "name": "The Cycle of Life: Understanding Life Cycles",
            "description": "Learn about the life cycles of different organisms, from plants and insects to mammals.",
            "image_path": "https://source.unsplash.com/500x500/?life-cycles",
            "type": "CORE"
          },
          {
            "name": "Feathered Friends: Introduction to Birds",
            "description": "Discover the world of birds, exploring their features, behaviors, and the concept of migration.",
            "image_path": "https://source.unsplash.com/500x500/?birds",
            "type": "ELECTIVE"
          },
          {
            "name": "Furry Friends: Introduction to Mammals",
            "description": "Learn about mammals, their distinguishing features, and diverse adaptations.",
            "image_path": "https://source.unsplash.com/500x500/?mammals",
            "type": "ELECTIVE"
          },
          {
            "name": "Beneath the Soil: Unearthing Soil Creatures",
            "description": "Investigate the world beneath the soil and meet the creatures that call it home.",
            "image_path": "https://source.unsplash.com/500x500/?soil",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "The Power of Energy",
        "description": "Sparking curiosity about the invisible force that powers our world, from the heat of the sun to electricity at the flip of a switch.",
        "image_path": "https://source.unsplash.com/500x500/?energy",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Sunshine and Shadows: Understanding Light and Heat Energy",
            "description": "Discover the energy of light and heat, exploring how sunlight creates shadows and warms our world.",
            "image_path": "https://source.unsplash.com/500x500/?sunlight",
            "type": "CORE"
          },
          {
            "name": "Energy in Motion: Introduction to Kinetic Energy",
            "description": "Learn about kinetic energy and see it in action through various activities and experiments.",
            "image_path": "https://source.unsplash.com/500x500/?motion",
            "type": "CORE"
          },
          {
            "name": "Sound Waves: The Energy of Sound",
            "description": "Explore sound energy, understanding how sound waves travel and create the sounds we hear.",
            "image_path": "https://source.unsplash.com/500x500/?sound-waves",
            "type": "CORE"
          },
          {
            "name": "The Power of Water: Understanding Hydroelectric Energy",
            "description": "Learn how moving water creates energy, exploring the concept of hydroelectric power.",
            "image_path": "https://source.unsplash.com/500x500/?hydroelectric",
            "type": "CORE"
          },
          {
            "name": "Harnessing the Wind: The Power of Wind Energy",
            "description": "Discover how wind can generate power and explore its use in producing electricity.",
            "image_path": "https://source.unsplash.com/500x500/?wind-energy",
            "type": "CORE"
          },
          {
            "name": "The Mighty Atom: An Introduction to Atomic Energy",
            "description": "Learn about the power hidden within atoms and the principles of atomic energy.",
            "image_path": "https://source.unsplash.com/500x500/?atom",
            "type": "CORE"
          },
          {
            "name": "From Food to Fuel: The Energy in Living Things",
            "description": "Explore how plants and animals use food for energy and survival.",
            "image_path": "https://source.unsplash.com/500x500/?food-energy",
            "type": "CORE"
          },
          {
            "name": "Electricity at Home: Understanding Electrical Energy",
            "description": "Discover how electricity powers our lives, from lights to appliances, and learn about safety around electricity.",
            "image_path": "https://source.unsplash.com/500x500/?electricity",
            "type": "ELECTIVE"
          },
          {
            "name": "Roller Coasters and Cars: Energy in Motion",
            "description": "Learn about the transformation of potential energy to kinetic energy in roller coasters and cars.",
            "image_path": "https://source.unsplash.com/500x500/?roller-coaster",
            "type": "ELECTIVE"
          },
          {
            "name": "The Future of Energy: Exploring Sustainable Energy Sources",
            "description": "Learn about sustainable energy sources and how they can power the future in a cleaner, greener way.",
            "image_path": "https://source.unsplash.com/500x500/?sustainable-energy",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "Wonders of Weather",
        "description": "Engaging young minds in understanding the dynamic nature of our atmosphere and the weather patterns that impact our everyday lives.",
        "image_path": "https://source.unsplash.com/500x500/?weather",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Weather: Sunny, Rainy, Cloudy, and More",
            "description": "Introduce the concept of weather and the different types we experience throughout the year.",
            "image_path": "https://source.unsplash.com/500x500/?weather-types",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle: Evaporation, Condensation, and Precipitation",
            "description": "Explore the water cycle and how it affects our weather and the world around us.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Cloudy with a Chance: An Introduction to Clouds",
            "description": "Learn about different types of clouds and what they can tell us about upcoming weather.",
            "image_path": "https://source.unsplash.com/500x500/?clouds",
            "type": "CORE"
          },
          {
            "name": "The Power of Wind: Understanding Wind and Weather",
            "description": "Discover the role of wind in weather and how it‘s created.",
            "image_path": "https://source.unsplash.com/500x500/?wind",
            "type": "CORE"
          },
          {
            "name": "Temperature Tells a Story: Understanding Heat and Cold",
            "description": "Learn about temperature, how it‘s measured, and its impact on weather and our lives.",
            "image_path": "https://source.unsplash.com/500x500/?temperature",
            "type": "CORE"
          },
          {
            "name": "Storm Chasers: Introduction to Storms and Severe Weather",
            "description": "Investigate storms and severe weather, learning about safety and preparation.",
            "image_path": "https://source.unsplash.com/500x500/?storm",
            "type": "CORE"
          },
          {
            "name": "Seasons and Changes: How Weather Changes Throughout the Year",
            "description": "Understand how and why weather changes with the seasons.",
            "image_path": "https://source.unsplash.com/500x500/?seasons",
            "type": "CORE"
          },
          {
            "name": "Snowflakes and Snowstorms: The Science of Snow",
            "description": "Discover the science behind snow, why it forms, and its role in the ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?snow",
            "type": "ELECTIVE"
          },
          {
            "name": "Rainbows and Refraction: The Magic of Light and Rain",
            "description": "Learn about the beautiful phenomenon of rainbows, how they form, and the science behind it.",
            "image_path": "https://source.unsplash.com/500x500/?rainbows",
            "type": "ELECTIVE"
          },
          {
            "name": "Hurricanes and Tornadoes: Power of Extreme Weather",
            "description": "Explore the formation and impact of hurricanes and tornadoes, and learn about safety measures.",
            "image_path": "https://source.unsplash.com/500x500/?hurricanes",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "The Fantastic Forces",
        "description": "Encouraging young scientists to discover the invisible pushes and pulls that keep our world in motion.",
        "image_path": "https://source.unsplash.com/500x500/?forces",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Push and Pull: Introduction to Forces",
            "description": "Learn the basic concepts of force, exploring how pushes and pulls can move objects.",
            "image_path": "https://source.unsplash.com/500x500/?push-pull",
            "type": "CORE"
          },
          {
            "name": "Gravity: The Force That Keeps Us Grounded",
            "description": "Discover gravity, the force that keeps us on Earth and governs the movements of the planets.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "Friction: The Force That Slows Us Down",
            "description": "Explore friction, a force that resists motion and plays a crucial role in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?friction",
            "type": "CORE"
          },
          {
            "name": "Magnets: The Invisible Force",
            "description": "Learn about the fascinating world of magnets and the forces they exert.",
            "image_path": "https://source.unsplash.com/500x500/?magnets",
            "type": "CORE"
          },
          {
            "name": "Up, Up and Away: Exploring Lift and Air Resistance",
            "description": "Discover how forces like lift and air resistance allow birds, planes, and even seeds to fly.",
            "image_path": "https://source.unsplash.com/500x500/?air-resistance",
            "type": "CORE"
          },
          {
            "name": "Buoyancy: Why Things Float",
            "description": "Explore buoyancy, the force that allows objects to float on water.",
            "image_path": "https://source.unsplash.com/500x500/?buoyancy",
            "type": "CORE"
          },
          {
            "name": "Inertia: Why Things Keep Moving or Stay Still",
            "description": "Learn about inertia, the tendency of objects to keep doing what they‘re doing, whether it‘s moving or staying still.",
            "image_path": "https://source.unsplash.com/500x500/?inertia",
            "type": "CORE"
          },
          {
            "name": "Simple Machines: Forces at Work",
            "description": "Discover simple machines and how they make work easier by manipulating force.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "ELECTIVE"
          },
          {
            "name": "Pressure: The Force That Can Crush or Propel",
            "description": "Explore pressure, the force that can crush a submarine or shoot water high into the air.",
            "image_path": "https://source.unsplash.com/500x500/?pressure",
            "type": "ELECTIVE"
          },
          {
            "name": "Centrifugal and Centripetal Forces: The Forces That Keep Things Spinning",
            "description": "Learn about the forces that keep objects spinning in a circle, from twirling a ball on a string to riding a roller coaster.",
            "image_path": "https://source.unsplash.com/500x500/?spinning",
            "type": "ELECTIVE"
          }
        ]
      },
            {
        "name": "Our Beautiful Planet",
        "description": "Helping students develop an appreciation for the natural beauty and complexity of Earth, our home in the universe.",
        "image_path": "https://source.unsplash.com/500x500/?earth",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Blue Marble: Introduction to Earth",
            "description": "Get introduced to Earth, learning about its position in the solar system, its structure, and why it‘s unique.",
            "image_path": "https://source.unsplash.com/500x500/?earth-globe",
            "type": "CORE"
          },
          {
            "name": "Landforms: The Shape of Our Planet",
            "description": "Explore different landforms on Earth, from mountains and valleys to plains and plateaus.",
            "image_path": "https://source.unsplash.com/500x500/?landforms",
            "type": "CORE"
          },
          {
            "name": "Water, Water, Everywhere: Oceans, Lakes, and Rivers",
            "description": "Learn about the different bodies of water on Earth, their importance, and the life they support.",
            "image_path": "https://source.unsplash.com/500x500/?bodies-of-water",
            "type": "CORE"
          },
          {
            "name": "Under the Ground: Exploring Earth‘s Crust",
            "description": "Dive beneath the surface to learn about Earth‘s crust, the soil that supports life, and what lies even deeper.",
            "image_path": "https://source.unsplash.com/500x500/?earth-crust",
            "type": "CORE"
          },
          {
            "name": "Earth‘s Atmosphere: The Air Around Us",
            "description": "Discover Earth‘s atmosphere, the layer of air that protects us and makes life possible.",
            "image_path": "https://source.unsplash.com/500x500/?atmosphere",
            "type": "CORE"
          },
          {
            "name": "Poles Apart: Life at the North and South Poles",
            "description": "Explore the North and South Poles, learning about the unique climates, animals, and people who live there.",
            "image_path": "https://source.unsplash.com/500x500/?poles",
            "type": "CORE"
          },
          {
            "name": "Desert Biomes: Hot, Dry, and Full of Life",
            "description": "Investigate desert biomes, learning how plants and animals adapt to survive in these extreme environments.",
            "image_path": "https://source.unsplash.com/500x500/?desert",
            "type": "CORE"
          },
          {
            "name": "Forests and Jungles: Earth‘s Green Lungs",
            "description": "Learn about forest and jungle biomes, the diverse life they contain, and their importance for the planet.",
            "image_path": "https://source.unsplash.com/500x500/?forests",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Wetlands: Earth‘s Natural Filters",
            "description": "Discover the vital role of wetlands, their diverse ecosystems, and how they protect our planet.",
            "image_path": "https://source.unsplash.com/500x500/?wetlands",
            "type": "ELECTIVE"
          },
          {
            "name": "Mountains: Reaching for the Sky",
            "description": "Explore mountain biomes, their unique ecosystems, and the impact they have on the planet.",
            "image_path": "https://source.unsplash.com/500x500/?mountains",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Amazing Animal Kingdom",
        "description": "Inviting young learners on a journey to explore the wide array of creatures that inhabit our planet and the fascinating world of animal behaviors, adaptations, and habitats.",
        "image_path": "https://source.unsplash.com/500x500/?animals",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Animals: Exploring the Animal Kingdom",
            "description": "Introduce the vast diversity of animals on Earth, discussing basic animal classifications.",
            "image_path": "https://source.unsplash.com/500x500/?animal-kingdom",
            "type": "CORE"
          },
          {
            "name": "Amazing Adaptations: How Animals Survive",
            "description": "Explore the concept of animal adaptations and how they help animals survive in their habitats.",
            "image_path": "https://source.unsplash.com/500x500/?animal-adaptations",
            "type": "CORE"
          },
          {
            "name": "Animals at Home: Exploring Animal Habitats",
            "description": "Discover the different types of habitats animals live in, from oceans and forests to deserts and tundras.",
            "image_path": "https://source.unsplash.com/500x500/?animal-habitats",
            "type": "CORE"
          },
          {
            "name": "Big and Small: Understanding Animal Sizes",
            "description": "Learn about the sizes of different animals, from the smallest insects to the largest mammals.",
            "image_path": "https://source.unsplash.com/500x500/?animal-sizes",
            "type": "CORE"
          },
          {
            "name": "Carnivores, Herbivores, and Omnivores: Animal Diets",
            "description": "Explore the different diets of animals, learning what carnivores, herbivores, and omnivores eat.",
            "image_path": "https://source.unsplash.com/500x500/?animal-diets",
            "type": "CORE"
          },
          {
            "name": "Animal Movements: Walk, Fly, Slither, and Swim",
            "description": "Discover how various animals move, including those that walk, fly, slither, hop, and swim.",
            "image_path": "https://source.unsplash.com/500x500/?animal-movements",
            "type": "CORE"
          },
          {
            "name": "The Cycle of Life: Animal Life Cycles",
            "description": "Learn about the life cycles of different animals, from birth to adulthood.",
            "image_path": "https://source.unsplash.com/500x500/?animal-life-cycles",
            "type": "CORE"
          },
          {
            "name": "Furry Friends: All About Mammals",
            "description": "Explore the world of mammals, their characteristics, and examples from around the world.",
            "image_path": "https://source.unsplash.com/500x500/?mammals",
            "type": "ELECTIVE"
          },
          {
            "name": "Feathered Friends: All About Birds",
            "description": "Learn about birds, their characteristics, and the amazing diversity of bird species.",
            "image_path": "https://source.unsplash.com/500x500/?birds",
            "type": "ELECTIVE"
          },
          {
            "name": "Scaly and Slimy: Reptiles and Amphibians",
            "description": "Discover the world of reptiles and amphibians, learning about their unique characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?reptiles",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
    {
    "level_id": "485fe542-3c7c-453b-9e18-7baf3c773004",
    "topics_data": [
      {
        "name": "Exploring the Wonders of Nature",
        "description": "Unveiling the secrets of nature through hands-on experiences, fostering a deep appreciation for biodiversity and ecosystems.",
        "image_path": "https://source.unsplash.com/500x500/?nature",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Plant Life",
            "description": "Discovering the intricacies of plant life cycles, their role in ecosystems, and the art of gardening.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "Bird Watching Basics",
            "description": "Learning to observe and identify different bird species while understanding their unique behaviors.",
            "image_path": "https://source.unsplash.com/500x500/?birds",
            "type": "CORE"
          },
          {
            "name": "Insect Investigation",
            "description": "Exploring the small world of insects and their incredible diversity, with a focus on life cycles and habitats.",
            "image_path": "https://source.unsplash.com/500x500/?insects",
            "type": "CORE"
          },
          {
            "name": "Fun with Fossils",
            "description": "Introducing paleontology by studying fossils, discussing what they tell us about Earth‘s history.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "CORE"
          },
          {
            "name": "Mysteries of Weather",
            "description": "Observing weather patterns, understanding their causes and effects, and learning how to forecast weather.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "The Rock Cycle",
            "description": "Exploring the rock cycle and the formation of different types of rocks, minerals and crystals.",
            "image_path": "https://source.unsplash.com/500x500/?rocks",
            "type": "CORE"
          },
          {
            "name": "The Magic of Photosynthesis",
            "description": "Diving into the process of photosynthesis, exploring how plants make their own food from sunlight.",
            "image_path": "https://source.unsplash.com/500x500/?photosynthesis",
            "type": "CORE"
          },
          {
            "name": "Introduction to Renewable Energy",
            "description": "Exploring the concept of renewable energy, focusing on how sun and wind can generate power.",
            "image_path": "https://source.unsplash.com/500x500/?renewable-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Beneath the Oceans",
            "description": "Discovering the fascinating world beneath the oceans, from coral reefs to deep-sea creatures.",
            "image_path": "https://source.unsplash.com/500x500/?ocean-life",
            "type": "ELECTIVE"
          },
          {
            "name": "The Story of Evolution",
            "description": "Unraveling the story of evolution, discussing how species adapt and change over time.",
            "image_path": "https://source.unsplash.com/500x500/?evolution",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Space and Beyond",
        "description": "Diving into the infinite universe, sparking imagination and curiosity about planets, stars, and galaxies.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Planet Parade",
            "description": "Learning about the eight planets of our solar system, their unique characteristics and orbits.",
            "image_path": "https://source.unsplash.com/500x500/?planets",
            "type": "CORE"
          },
          {
            "name": "Stellar Journey",
            "description": "Understanding stars, constellations, and galaxies, and how we observe them from Earth.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "The Moon and Its Phases",
            "description": "Discovering the moon, its phases, craters, and its relationship with Earth.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "The Sun: Our Stellar Neighbor",
            "description": "Exploring the Sun‘s role in our solar system, its properties, and importance for life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Asteroids, Meteors, and Comets",
            "description": "Understanding the differences between asteroids, meteors, and comets, and their impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?asteroids",
            "type": "CORE"
          },
          {
            "name": "Gravity and Its Wonders",
            "description": "Learning about the concept of gravity, its effects, and how it shapes the universe.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "The International Space Station",
            "description": "Introducing the International Space Station, its purpose, and life of astronauts aboard the station.",
            "image_path": "https://source.unsplash.com/500x500/?space-station",
            "type": "CORE"
          },
          {
            "name": "Space Exploration History",
            "description": "Journeying through the history of space exploration, from early astronomers to modern space missions.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "ELECTIVE"
          },
          {
            "name": "Aliens and the Search for Extraterrestrial Life",
            "description": "Exploring the possibility of life beyond Earth and the scientific search for extraterrestrial life.",
            "image_path": "https://source.unsplash.com/500x500/?aliens",
            "type": "ELECTIVE"
          },
          {
            "name": "Rovers on Mars",
            "description": "Understanding Mars rovers, their missions, and what they tell us about the Red Planet.",
            "image_path": "https://source.unsplash.com/500x500/?mars-rover",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Chemistry in Everyday Life",
        "description": "Diving into the world of atoms and molecules, discovering the magic of chemical reactions in everyday life.",
        "image_path": "https://source.unsplash.com/500x500/?chemistry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Matter and Its Properties",
            "description": "Exploring the concept of matter, its states and how it changes from one state to another.",
            "image_path": "https://source.unsplash.com/500x500/?matter",
            "type": "CORE"
          },
          {
            "name": "The Periodic Table: An Introduction",
            "description": "Introducing the periodic table, understanding elements, and their significance.",
            "image_path": "https://source.unsplash.com/500x500/?periodic-table",
            "type": "CORE"
          },
          {
            "name": "The World of Atoms and Molecules",
            "description": "Discovering atoms and molecules, their structure, and how they combine to form substances.",
            "image_path": "https://source.unsplash.com/500x500/?atoms",
            "type": "CORE"
          },
          {
            "name": "Fun with Chemical Reactions",
            "description": "Learning about chemical reactions through fun and safe experiments, observing changes in color, temperature, and states of matter.",
            "image_path": "https://source.unsplash.com/500x500/?chemical-reactions",
            "type": "CORE"
          },
          {
            "name": "Acids and Bases in Our Foods",
            "description": "Exploring the concept of acids and bases through examples in our daily diet.",
            "image_path": "https://source.unsplash.com/500x500/?acids-bases",
            "type": "CORE"
          },
          {
            "name": "The Magic of Mixtures and Solutions",
            "description": "Understanding the difference between mixtures and solutions, and exploring solubility.",
            "image_path": "https://source.unsplash.com/500x500/?mixtures",
            "type": "CORE"
          },
          {
            "name": "Exploring Crystals",
            "description": "Learning about crystal formation through salt and sugar crystallization experiments.",
            "image_path": "https://source.unsplash.com/500x500/?crystals",
            "type": "CORE"
          },
          {
            "name": "Chemistry in Cooking",
            "description": "Understanding the role of chemistry in cooking, from baking soda to caramelization.",
            "image_path": "https://source.unsplash.com/500x500/?cooking-chemistry",
            "type": "ELECTIVE"
          },
          {
            "name": "Amazing Polymers",
            "description": "Exploring polymers through hands-on experiments like making slime and understanding their uses in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?polymers",
            "type": "ELECTIVE"
          },
          {
            "name": "The Science of Soap",
            "description": "Learning about the chemistry behind soap and how it cleans, with a chance to make homemade soap.",
            "image_path": "https://source.unsplash.com/500x500/?soap",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Mysteries of Physics",
        "description": "Exploring the fundamental principles of physics, igniting curiosity about energy, forces, and motion through fun experiments.",
        "image_path": "https://source.unsplash.com/500x500/?physics",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Energy in Our Lives",
            "description": "Understanding the concept of energy, its forms, and how it changes from one form to another.",
            "image_path": "https://source.unsplash.com/500x500/?energy",
            "type": "CORE"
          },
          {
            "name": "The Power of Force",
            "description": "Learning about forces, the concept of push and pull, and understanding its effects on objects.",
            "image_path": "https://source.unsplash.com/500x500/?force",
            "type": "CORE"
          },
          {
            "name": "Making Things Move",
            "description": "Exploring the principles of motion through hands-on experiments and activities.",
            "image_path": "https://source.unsplash.com/500x500/?motion",
            "type": "CORE"
          },
          {
            "name": "The Magic of Magnets",
            "description": "Learning about magnets, their properties, and how they interact with each other.",
            "image_path": "https://source.unsplash.com/500x500/?magnets",
            "type": "CORE"
          },
          {
            "name": "Light and Shadows",
            "description": "Discovering the properties of light, its interaction with objects, and the creation of shadows.",
            "image_path": "https://source.unsplash.com/500x500/?light-shadows",
            "type": "CORE"
          },
          {
            "name": "Sound and Vibrations",
            "description": "Understanding sound, its production, and how it travels through different mediums.",
            "image_path": "https://source.unsplash.com/500x500/?sound",
            "type": "CORE"
          },
          {
            "name": "The World of Simple Machines",
            "description": "Exploring simple machines and their applications in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "CORE"
          },
          {
            "name": "Physics in Sports",
            "description": "Discovering the role of physics in sports and how understanding physics can improve performance.",
            "image_path": "https://source.unsplash.com/500x500/?sports-physics",
            "type": "ELECTIVE"
          },
          {
            "name": "The Wonders of Electricity",
            "description": "Understanding the basics of electricity, circuit building and safety precautions.",
            "image_path": "https://source.unsplash.com/500x500/?electricity",
            "type": "ELECTIVE"
          },
          {
            "name": "Physics in Music",
            "description": "Exploring the physics behind music, understanding how instruments create different pitches and tones.",
            "image_path": "https://source.unsplash.com/500x500/?music-physics",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Wonders of Weather and Climate",
        "description": "Discovering the dynamics of weather and climate, their influences on our daily lives and the planet.",
        "image_path": "https://source.unsplash.com/500x500/?weather",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Weather",
            "description": "Learning about weather patterns, symbols, and the factors that influence our daily weather.",
            "image_path": "https://source.unsplash.com/500x500/?weather-patterns",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle",
            "description": "Exploring the journey of water from the ground to the sky and back again, understanding evaporation, condensation, and precipitation.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Clouds and What They Tell Us",
            "description": "Learning about different types of clouds, their formation, and what they tell us about the weather.",
            "image_path": "https://source.unsplash.com/500x500/?clouds",
            "type": "CORE"
          },
          {
            "name": "Storms and Other Extreme Weather",
            "description": "Understanding storms, tornadoes, hurricanes, and other extreme weather conditions and safety measures to take.",
            "image_path": "https://source.unsplash.com/500x500/?storms",
            "type": "CORE"
          },
          {
            "name": "Climate Zones of the World",
            "description": "Exploring different climate zones around the world, understanding the unique weather patterns of each zone.",
            "image_path": "https://source.unsplash.com/500x500/?climate-zones",
            "type": "CORE"
          },
          {
            "name": "Climate Change and Its Effects",
            "description": "Learning about the concept of climate change, its causes, effects, and how we can help combat it.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
          },
          {
            "name": "Adaptation to Climate",
            "description": "Understanding how plants, animals, and humans adapt to their specific climates.",
            "image_path": "https://source.unsplash.com/500x500/?adaptation",
            "type": "CORE"
          },
          {
            "name": "Building a Weather Station",
            "description": "Hands-on project to build a simple weather station, using it to observe and record weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?weather-station",
            "type": "ELECTIVE"
          },
          {
            "name": "Weather Forecasting",
            "description": "Understanding the science behind weather forecasting and the tools meteorologists use.",
            "image_path": "https://source.unsplash.com/500x500/?weather-forecast",
            "type": "ELECTIVE"
          },
          {
            "name": "The Role of Oceans in Weather and Climate",
            "description": "Learning about the role of oceans in regulating weather and climate, understanding ocean currents and their effects.",
            "image_path": "https://source.unsplash.com/500x500/?oceans",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Magic of Ecosystems",
        "description": "Unveiling the complex web of life in various ecosystems, understanding biodiversity, and the significance of each organism‘s role.",
        "image_path": "https://source.unsplash.com/500x500/?ecosystems",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Ecosystems",
            "description": "Exploring the concept of ecosystems, their components, and how they function.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystems",
            "type": "CORE"
          },
          {
            "name": "Different Types of Ecosystems",
            "description": "Learning about various types of ecosystems, including forests, deserts, oceans, and more.",
            "image_path": "https://source.unsplash.com/500x500/?forest,desert,ocean",
            "type": "CORE"
          },
          {
            "name": "Food Chains and Food Webs",
            "description": "Understanding the flow of energy in an ecosystem through food chains and food webs.",
            "image_path": "https://source.unsplash.com/500x500/?food-chain",
            "type": "CORE"
          },
          {
            "name": "The Role of Plants in Ecosystems",
            "description": "Exploring the crucial role of plants in ecosystems, from providing oxygen to being a food source for animals.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "The Role of Animals in Ecosystems",
            "description": "Understanding the roles different animals play in various ecosystems, from pollinators to predators.",
            "image_path": "https://source.unsplash.com/500x500/?animals",
            "type": "CORE"
          },
          {
            "name": "The Impact of Humans on Ecosystems",
            "description": "Exploring how human activities can affect ecosystems positively and negatively, and discussing sustainable practices.",
            "image_path": "https://source.unsplash.com/500x500/?sustainable-practices",
            "type": "CORE"
          },
          {
            "name": "The Magic of Micro-ecosystems",
            "description": "Discovering micro-ecosystems, from a drop of pond water to the world under a rotting log.",
            "image_path": "https://source.unsplash.com/500x500/?micro-ecosystems",
            "type": "CORE"
          },
          {
            "name": "Creating a Mini Ecosystem",
            "description": "A fun hands-on project to create a mini ecosystem, observing it, and understanding how it works.",
            "image_path": "https://source.unsplash.com/500x500/?mini-ecosystem",
            "type": "ELECTIVE"
          },
          {
            "name": "Ecosystems in Danger: Endangered Species",
            "description": "Learning about endangered species, the threats they face, and discussing how we can help.",
            "image_path": "https://source.unsplash.com/500x500/?endangered-species",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Biomes of the World",
            "description": "Understanding the concept of biomes, exploring different types and the life forms they support.",
            "image_path": "https://source.unsplash.com/500x500/?biomes",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Unveiling the Universe",
        "description": "Embarking on a journey through the universe, understanding our place in it, and exploring the mysteries of space.",
        "image_path": "https://source.unsplash.com/500x500/?universe",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Our Place in the Universe",
            "description": "Understanding our planet‘s position in the solar system, galaxy, and the larger universe.",
            "image_path": "https://source.unsplash.com/500x500/?earth-universe",
            "type": "CORE"
          },
          {
            "name": "The Solar System",
            "description": "Exploring the planets, moons, asteroids, and comets that make up our solar system.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "The Sun: Our Nearest Star",
            "description": "Understanding the importance of the sun, its structure, and the energy it provides.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Moon Phases and Eclipses",
            "description": "Learning about the phases of the moon, solar and lunar eclipses, and their causes.",
            "image_path": "https://source.unsplash.com/500x500/?moon-phases",
            "type": "CORE"
          },
          {
            "name": "The Mystery of Black Holes",
            "description": "Unveiling the intriguing mysteries of black holes and their characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?black-holes",
            "type": "CORE"
          },
          {
            "name": "Constellations and Star Gazing",
            "description": "Identifying constellations, understanding their significance, and experiencing the joy of star gazing.",
            "image_path": "https://source.unsplash.com/500x500/?constellations",
            "type": "CORE"
          },
          {
            "name": "Space Exploration and Astronauts",
            "description": "Learning about the history of space exploration, the life of astronauts, and famous space missions.",
            "image_path": "https://source.unsplash.com/500x500/?astronauts",
            "type": "CORE"
          },
          {
            "name": "Understanding Telescopes",
            "description": "Learning about the operation of telescopes, their importance in astronomy, and how to use them for observation.",
            "image_path": "https://source.unsplash.com/500x500/?telescope",
            "type": "ELECTIVE"
          },
          {
            "name": "The Wonder of Comets, Meteors, and Asteroids",
            "description": "Exploring the fascinating world of comets, meteors, and asteroids and their roles in the solar system.",
            "image_path": "https://source.unsplash.com/500x500/?comets",
            "type": "ELECTIVE"
          },
          {
            "name": "Building a Solar System Model",
            "description": "A fun, hands-on project to build a model of the solar system, helping to visualize its vastness and the scale of celestial bodies.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system-model",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Amazing Human Body",
        "description": "Exploring the complexities and wonders of the human body, understanding how our organs and systems function together.",
        "image_path": "https://source.unsplash.com/500x500/?human-body",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Body Systems Overview",
            "description": "Understanding the different systems of the human body and how they work together.",
            "image_path": "https://source.unsplash.com/500x500/?body-systems",
            "type": "CORE"
          },
          {
            "name": "The Muscular and Skeletal Systems",
            "description": "Learning about our muscles and bones, how they provide support, enable movement, and protect vital organs.",
            "image_path": "https://source.unsplash.com/500x500/?skeleton,muscles",
            "type": "CORE"
          },
          {
            "name": "The Digestive System",
            "description": "Understanding the journey of food in the body, from intake to waste removal.",
            "image_path": "https://source.unsplash.com/500x500/?digestive-system",
            "type": "CORE"
          },
          {
            "name": "The Respiratory System",
            "description": "Learning about how we breathe, the journey of air into our bodies, and the role of lungs.",
            "image_path": "https://source.unsplash.com/500x500/?respiratory-system",
            "type": "CORE"
          },
          {
            "name": "The Circulatory System",
            "description": "Exploring the role of the heart, blood vessels, and blood in delivering oxygen and nutrients to the body.",
            "image_path": "https://source.unsplash.com/500x500/?circulatory-system",
            "type": "CORE"
          },
          {
            "name": "The Nervous System",
            "description": "Understanding the workings of the brain, spinal cord, and nerves, and how they control our actions and reactions.",
            "image_path": "https://source.unsplash.com/500x500/?nervous-system",
            "type": "CORE"
          },
          {
            "name": "The Sensory System",
            "description": "Exploring our senses, how they help us perceive the world around us, and the organs involved.",
            "image_path": "https://source.unsplash.com/500x500/?sensory-system",
            "type": "CORE"
          },
          {
            "name": "Building a Body Part Model",
            "description": "A hands-on activity to build a model of a human body part, enhancing understanding of its structure and function.",
            "image_path": "https://source.unsplash.com/500x500/?human-body-model",
            "type": "ELECTIVE"
          },
          {
            "name": "The Miracle of Human Life",
            "description": "Understanding human growth and development from birth to adulthood.",
            "image_path": "https://source.unsplash.com/500x500/?human-growth",
            "type": "ELECTIVE"
          },
          {
            "name": "Our Body’s Defense System",
            "description": "Learning about the immune system, how it fights off diseases, and the importance of hygiene.",
            "image_path": "https://source.unsplash.com/500x500/?immune-system",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Discovering Dinosaurs",
        "description": "Diving into the fascinating world of dinosaurs, understanding their life, characteristics, and what led to their extinction.",
        "image_path": "https://source.unsplash.com/500x500/?dinosaurs",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What are Dinosaurs?",
            "description": "Introduction to dinosaurs, their characteristics, and the time period they lived in.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaurs",
            "type": "CORE"
          },
          {
            "name": "Different Types of Dinosaurs",
            "description": "Learning about the variety of dinosaurs, from herbivores and carnivores to flying and aquatic dinosaurs.",
            "image_path": "https://source.unsplash.com/500x500/?different-dinosaurs",
            "type": "CORE"
          },
          {
            "name": "Dinosaur Fossils",
            "description": "Understanding how dinosaur fossils are formed, and what they tell us about the life of dinosaurs.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-fossils",
            "type": "CORE"
          },
          {
            "name": "Paleontologists: Dinosaur Detectives",
            "description": "Learning about the work of paleontologists and how they uncover the secrets of prehistoric life.",
            "image_path": "https://source.unsplash.com/500x500/?paleontology",
            "type": "CORE"
          },
          {
            "name": "The Mystery of Dinosaur Extinction",
            "description": "Exploring theories about why dinosaurs became extinct and the evidence supporting them.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-extinction",
            "type": "CORE"
          },
          {
            "name": "Dinosaurs and Birds: Are They Related?",
            "description": "Understanding the link between dinosaurs and birds, and why some scientists believe birds are living dinosaurs.",
            "image_path": "https://source.unsplash.com/500x500/?birds-dinosaurs",
            "type": "CORE"
          },
          {
            "name": "Dinosaur Habitats",
            "description": "Learning about the different environments dinosaurs lived in, from lush forests to arid deserts.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-habitats",
            "type": "CORE"
          },
          {
            "name": "Building a Dinosaur Diorama",
            "description": "A fun, hands-on project to create a diorama of a dinosaur habitat, using research and creativity.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-diorama",
            "type": "ELECTIVE"
          },
          {
            "name": "Creating a Dinosaur Fossil",
            "description": "An engaging activity to create a mock dinosaur fossil, understanding the fossilization process in a fun way.",
            "image_path": "https://source.unsplash.com/500x500/?fossil-making",
            "type": "ELECTIVE"
          },
          {
            "name": "The Dinosaur Timeline",
            "description": "Understanding the timeline of dinosaurs, from their first appearance to their extinction.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-timeline",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Exploring Weather and Climate",
        "description": "Understanding the fascinating world of weather and climate, their patterns, causes, and impacts on life on Earth.",
        "image_path": "https://source.unsplash.com/500x500/?weather,climate",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "What is Weather?",
            "description": "Understanding the basics of weather, elements that influence it, and its daily variations.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "Types of Weather",
            "description": "Exploring different types of weather conditions like sunny, rainy, windy, and snowy days, and understanding what causes them.",
            "image_path": "https://source.unsplash.com/500x500/?weather-types",
            "type": "CORE"
          },
          {
            "name": "What is Climate?",
            "description": "Understanding the concept of climate, how it differs from weather, and the factors that influence it.",
            "image_path": "https://source.unsplash.com/500x500/?climate",
            "type": "CORE"
          },
          {
            "name": "Different Climates Around the World",
            "description": "Learning about various climates around the world, from deserts and tropical rainforests to polar regions.",
            "image_path": "https://source.unsplash.com/500x500/?world-climates",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle",
            "description": "Understanding the water cycle and its role in weather patterns and climate.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Weather Instruments and Forecasting",
            "description": "Learning about instruments used to measure weather and the science behind weather forecasting.",
            "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
            "type": "CORE"
          },
          {
            "name": "Climate Change and Its Effects",
            "description": "Understanding the concept of climate change, its causes, and impacts on the planet.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
          },
          {
            "name": "Building a Homemade Weather Station",
            "description": "A hands-on project to build a simple weather station at home, to record and understand weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?weather-station",
            "type": "ELECTIVE"
          },
          {
            "name": "Extreme Weather Phenomena",
            "description": "Exploring extreme weather events like hurricanes, tornadoes, and blizzards, understanding what causes them and their effects.",
            "image_path": "https://source.unsplash.com/500x500/?extreme-weather",
            "type": "ELECTIVE"
          },
          {
            "name": "How Animals and Plants Adapt to Climate",
            "description": "Learning about how different plants and animals have adapted to survive in various climates around the world.",
            "image_path": "https://source.unsplash.com/500x500/?animals-plants-climate",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
    {
    "level_id": "0679cb12-dd80-4fea-9d01-64c141cba349",
    "topics_data": [
      {
        "name": "Exploring Ecosystems",
        "description": "An exciting dive into the interconnected world of plants, animals, and their environments, inspiring appreciation and understanding of nature‘s balance.",
        "image_path": "https://source.unsplash.com/500x500/?ecosystems",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Habitats",
            "description": "Learn about diverse habitats around the world and how they support unique forms of life.",
            "image_path": "https://source.unsplash.com/500x500/?habitats",
            "type": "CORE"
          },
          {
            "name": "Food Chains and Webs",
            "description": "Discover the interconnected relationships of predators and prey, and how energy flows in an ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?food-chain",
            "type": "CORE"
          },
          {
            "name": "Adaptation for Survival",
            "description": "Understand how organisms adapt to their environment to survive and thrive.",
            "image_path": "https://source.unsplash.com/500x500/?animal-adaptations",
            "type": "CORE"
          },
          {
            "name": "Decomposers in Action",
            "description": "Uncover the vital role of decomposers in recycling nutrients and sustaining life.",
            "image_path": "https://source.unsplash.com/500x500/?decomposers",
            "type": "CORE"
          },
          {
            "name": "Humans and Ecosystems",
            "description": "Explore how human activities impact ecosystems and what we can do to protect our planet.",
            "image_path": "https://source.unsplash.com/500x500/?environmental-impact",
            "type": "CORE"
          },
          {
            "name": "Ecological Conservation",
            "description": "Learn about efforts to protect ecosystems, species, and biodiversity around the world.",
            "image_path": "https://source.unsplash.com/500x500/?conservation",
            "type": "CORE"
          },
          {
            "name": "Ecosystems Project",
            "description": "Apply your knowledge to create a model of an ecosystem, demonstrating the relationships and interactions within it.",
            "image_path": "https://source.unsplash.com/500x500/?science-project",
            "type": "CORE"
          },
          {
            "name": "Extreme Habitats",
            "description": "Dive into extreme environments such as deserts and deep-sea vents, exploring how life adapts to survive.",
            "image_path": "https://source.unsplash.com/500x500/?extreme-habitats",
            "type": "ELECTIVE"
          },
          {
            "name": "Invasive Species",
            "description": "Understand the impact of invasive species on native ecosystems, and how humans can help.",
            "image_path": "https://source.unsplash.com/500x500/?invasive-species",
            "type": "ELECTIVE"
          },
          {
            "name": "Ecology in Action",
            "description": "A hands-on elective where students can observe and document local ecosystems in real time.",
            "image_path": "https://source.unsplash.com/500x500/?nature-exploration",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Wonders of Weather",
        "description": "Embark on a journey into the atmospheric world, understanding the fascinating science behind weather patterns and phenomena.",
        "image_path": "https://source.unsplash.com/500x500/?weather",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Weather",
            "description": "Discover the elements that make up the weather around us and how they interact with each other.",
            "image_path": "https://source.unsplash.com/500x500/?weather-introduction",
            "type": "CORE"
          },
          {
            "name": "Cloud Formations",
            "description": "Learn about the various types of clouds and what they can tell us about the weather.",
            "image_path": "https://source.unsplash.com/500x500/?clouds",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle",
            "description": "Understand the journey of water from the sea to the sky and back again in the continuous water cycle.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Weather Instruments & Measurements",
            "description": "Explore the tools that meteorologists use to measure and predict weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
            "type": "CORE"
          },
          {
            "name": "Stormy Weather",
            "description": "Learn about extreme weather phenomena, like tornadoes and hurricanes, and the science behind them.",
            "image_path": "https://source.unsplash.com/500x500/?stormy-weather",
            "type": "CORE"
          },
          {
            "name": "Weather and Climate Change",
            "description": "Investigate the impact of climate change on weather patterns and the environment.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
          },
          {
            "name": "Weather Forecasting",
            "description": "Learn the basics of weather prediction and the importance of accurate forecasts.",
            "image_path": "https://source.unsplash.com/500x500/?weather-forecasting",
            "type": "CORE"
          },
          {
            "name": "Climate Zones",
            "description": "Journey through Earth‘s diverse climate zones and understand their distinct weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?climate-zones",
            "type": "ELECTIVE"
          },
          {
            "name": "The Effects of Weather on Humans",
            "description": "Examine how weather affects our lives, from agriculture to lifestyle and even mood.",
            "image_path": "https://source.unsplash.com/500x500/?weather-effects",
            "type": "ELECTIVE"
          },
          {
            "name": "Creating a Weather Station",
            "description": "A hands-on project to design and build a simple weather station, applying your knowledge of weather instruments.",
            "image_path": "https://source.unsplash.com/500x500/?weather-station",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Magical World of Magnets",
        "description": "Embark on a journey of attraction and repulsion, and discover the invisible force that makes compasses point north.",
        "image_path": "https://source.unsplash.com/500x500/?magnet",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Magnetism Basics",
            "description": "An introduction to the unseen world of magnetism and its fundamental principles.",
            "image_path": "https://source.unsplash.com/500x500/?magnetism",
            "type": "CORE"
          },
          {
            "name": "Types of Magnets",
            "description": "Discover different types of magnets, including permanent, temporary, and electromagnets.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-magnets",
            "type": "CORE"
          },
          {
            "name": "Magnetic and Non-Magnetic Materials",
            "description": "Learn about materials that are magnetic and those that are not, and investigate why this is the case.",
            "image_path": "https://source.unsplash.com/500x500/?magnetic-materials",
            "type": "CORE"
          },
          {
            "name": "Earth‘s Magnetic Field",
            "description": "Explore how our planet acts like a giant magnet, and how it influences everything from navigation to auroras.",
            "image_path": "https://source.unsplash.com/500x500/?earth-magnetism",
            "type": "CORE"
          },
          {
            "name": "Magnetism in Everyday Life",
            "description": "Uncover the myriad of ways we use magnetism in our everyday life, from speakers to MRI machines.",
            "image_path": "https://source.unsplash.com/500x500/?magnetism-daily-life",
            "type": "CORE"
          },
          {
            "name": "Magnetic Fields and Forces",
            "description": "Delve into the concept of magnetic fields and learn how they interact to exert forces.",
            "image_path": "https://source.unsplash.com/500x500/?magnetic-fields",
            "type": "CORE"
          },
          {
            "name": "Creating a Compass",
            "description": "Apply your understanding of magnetism to create a simple homemade compass.",
            "image_path": "https://source.unsplash.com/500x500/?compass",
            "type": "CORE"
          },
          {
            "name": "Electricity and Magnetism",
            "description": "Investigate the close relationship between electricity and magnetism, introducing the concept of electromagnetism.",
            "image_path": "https://source.unsplash.com/500x500/?electromagnetism",
            "type": "ELECTIVE"
          },
          {
            "name": "Magnetic Levitation",
            "description": "Explore the fascinating concept of magnetic levitation and how it is used in technology like maglev trains.",
            "image_path": "https://source.unsplash.com/500x500/?maglev",
            "type": "ELECTIVE"
          },
          {
            "name": "Magnetism in Space",
            "description": "Learn about the role of magnetism in space, from the Sun‘s magnetic fields to interstellar magnetism.",
            "image_path": "https://source.unsplash.com/500x500/?space-magnetism",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Energy Everywhere",
        "description": "Unravel the mysteries of energy, exploring its different forms and how it powers the world around us.",
        "image_path": "https://source.unsplash.com/500x500/?energy",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Energy",
            "description": "A primer on what energy is and the importance it holds in our lives.",
            "image_path": "https://source.unsplash.com/500x500/?energy-introduction",
            "type": "CORE"
          },
          {
            "name": "Potential and Kinetic Energy",
            "description": "Explore the two fundamental forms of energy - potential and kinetic - and how they interact.",
            "image_path": "https://source.unsplash.com/500x500/?potential-kinetic-energy",
            "type": "CORE"
          },
          {
            "name": "Energy Conservation",
            "description": "Understand the concept of energy conservation and why energy cannot be created or destroyed.",
            "image_path": "https://source.unsplash.com/500x500/?energy-conservation",
            "type": "CORE"
          },
          {
            "name": "Energy Transformation",
            "description": "Discover how energy changes from one form to another, powering the processes in our world.",
            "image_path": "https://source.unsplash.com/500x500/?energy-transformation",
            "type": "CORE"
          },
          {
            "name": "Renewable Energy Sources",
            "description": "Learn about renewable sources of energy, such as wind, solar, and hydroelectric power.",
            "image_path": "https://source.unsplash.com/500x500/?renewable-energy",
            "type": "CORE"
          },
          {
            "name": "Non-Renewable Energy Sources",
            "description": "Investigate non-renewable energy sources, their impact on the environment, and the importance of moving towards renewable energy.",
            "image_path": "https://source.unsplash.com/500x500/?nonrenewable-energy",
            "type": "CORE"
          },
          {
            "name": "Energy in Our Lives",
            "description": "Examine how we use energy in our day-to-day lives, from transportation to electricity in our homes.",
            "image_path": "https://source.unsplash.com/500x500/?energy-use",
            "type": "CORE"
          },
          {
            "name": "Thermal Energy and Heat",
            "description": "Dive into the world of thermal energy, understanding how heat is transferred and why it‘s important.",
            "image_path": "https://source.unsplash.com/500x500/?thermal-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Sound Energy",
            "description": "Investigate how sound is a form of energy that travels in waves and enables us to hear.",
            "image_path": "https://source.unsplash.com/500x500/?sound-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Building an Energy Efficient House",
            "description": "A hands-on project where students design and build a model of an energy-efficient house.",
            "image_path": "https://source.unsplash.com/500x500/?energy-efficient-house",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "The Incredible Human Body",
        "description": "Take an extraordinary journey into the human body, discovering how each organ and system contributes to our amazing biological machinery.",
        "image_path": "https://source.unsplash.com/500x500/?human-body",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to the Human Body",
            "description": "An overview of the human body, understanding its organization and remarkable abilities.",
            "image_path": "https://source.unsplash.com/500x500/?human-body-introduction",
            "type": "CORE"
          },
          {
            "name": "The Skeletal System",
            "description": "Explore the skeletal system, understanding its role in providing support and protection to the body.",
            "image_path": "https://source.unsplash.com/500x500/?skeletal-system",
            "type": "CORE"
          },
          {
            "name": "The Muscular System",
            "description": "Discover the muscular system, learning how it enables movement and maintains posture.",
            "image_path": "https://source.unsplash.com/500x500/?muscular-system",
            "type": "CORE"
          },
          {
            "name": "The Digestive System",
            "description": "Journey through the digestive system, understanding how the body processes the food we eat.",
            "image_path": "https://source.unsplash.com/500x500/?digestive-system",
            "type": "CORE"
          },
          {
            "name": "The Circulatory System",
            "description": "Investigate the circulatory system, learning about the heart and the journey of blood through the body.",
            "image_path": "https://source.unsplash.com/500x500/?circulatory-system",
            "type": "CORE"
          },
          {
            "name": "The Respiratory System",
            "description": "Learn about the respiratory system and how it helps us to breathe and exchange gases with the environment.",
            "image_path": "https://source.unsplash.com/500x500/?respiratory-system",
            "type": "CORE"
          },
          {
            "name": "The Nervous System",
            "description": "Explore the nervous system, discovering how it controls and coordinates everything we do.",
            "image_path": "https://source.unsplash.com/500x500/?nervous-system",
            "type": "CORE"
          },
          {
            "name": "Human Senses",
            "description": "Investigate the incredible human senses, understanding how they help us perceive the world.",
            "image_path": "https://source.unsplash.com/500x500/?human-senses",
            "type": "ELECTIVE"
          },
          {
            "name": "The Immune System",
            "description": "Learn about the body‘s defense system, how it fights off infections, and the role of vaccines.",
            "image_path": "https://source.unsplash.com/500x500/?immune-system",
            "type": "ELECTIVE"
          },
          {
            "name": "Build-a-Body Activity",
            "description": "A hands-on project where students create a life-sized model of the human body, labeling major organs and systems.",
            "image_path": "https://source.unsplash.com/500x500/?body-model",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Rocks, Minerals, and Soils",
        "description": "Unearth the story of the Earth itself, delving into the fascinating world of rocks, minerals, and the soils they create.",
        "image_path": "https://source.unsplash.com/500x500/?rocks-minerals",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Rocks and Minerals",
            "description": "An introduction to the solid materials that make up our Earth, understanding their properties and classifications.",
            "image_path": "https://source.unsplash.com/500x500/?rocks-minerals-introduction",
            "type": "CORE"
          },
          {
            "name": "Igneous Rocks",
            "description": "Explore igneous rocks, understanding how they form from molten magma and the different types that exist.",
            "image_path": "https://source.unsplash.com/500x500/?igneous-rocks",
            "type": "CORE"
          },
          {
            "name": "Sedimentary Rocks",
            "description": "Discover sedimentary rocks, learning how they form over time and why they often contain fossils.",
            "image_path": "https://source.unsplash.com/500x500/?sedimentary-rocks",
            "type": "CORE"
          },
          {
            "name": "Metamorphic Rocks",
            "description": "Investigate metamorphic rocks, understanding how they are transformed by heat and pressure.",
            "image_path": "https://source.unsplash.com/500x500/?metamorphic-rocks",
            "type": "CORE"
          },
          {
            "name": "Minerals in Our Lives",
            "description": "Learn about the many ways we use minerals in our lives, from gemstones to everyday household items.",
            "image_path": "https://source.unsplash.com/500x500/?minerals-use",
            "type": "CORE"
          },
          {
            "name": "The Rock Cycle",
            "description": "Understand the rock cycle, discovering how rocks are constantly being formed, changed, and recycled.",
            "image_path": "https://source.unsplash.com/500x500/?rock-cycle",
            "type": "CORE"
          },
          {
            "name": "Introduction to Soils",
            "description": "Explore the world of soils, learning how they are formed and why they are important for life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?soil-introduction",
            "type": "CORE"
          },
          {
            "name": "Soil Composition and Layers",
            "description": "Investigate what soil is made of and the different layers that exist within a typical soil profile.",
            "image_path": "https://source.unsplash.com/500x500/?soil-composition",
            "type": "ELECTIVE"
          },
          {
            "name": "Soil and Plant Growth",
            "description": "Understand how soil supports plant growth, exploring the relationship between soil types and the plants that grow in them.",
            "image_path": "https://source.unsplash.com/500x500/?soil-plants",
            "type": "ELECTIVE"
          },
          {
            "name": "Rocks and Minerals Scavenger Hunt",
            "description": "A fun, hands-on activity where students go on a scavenger hunt to find and identify different rocks and minerals.",
            "image_path": "https://source.unsplash.com/500x500/?rocks-minerals-scavenger-hunt",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Weather and Climate",
        "description": "Navigate the complex world of meteorology, understanding how weather patterns and climate influence the planet.",
        "image_path": "https://source.unsplash.com/500x500/?weather-climate",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Weather",
            "description": "An overview of weather phenomena, understanding the factors that influence daily weather changes.",
            "image_path": "https://source.unsplash.com/500x500/?weather-introduction",
            "type": "CORE"
          },
          {
            "name": "Types of Weather",
            "description": "Explore various types of weather, from sunshine to storms, understanding their causes and effects.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-weather",
            "type": "CORE"
          },
          {
            "name": "Weather Instruments",
            "description": "Learn about the tools meteorologists use to measure weather conditions, like thermometers, barometers, and weather vanes.",
            "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
            "type": "CORE"
          },
          {
            "name": "Introduction to Climate",
            "description": "Distinguish between weather and climate, understanding how climate zones are determined.",
            "image_path": "https://source.unsplash.com/500x500/?climate-introduction",
            "type": "CORE"
          },
          {
            "name": "Climate Zones",
            "description": "Investigate the different climate zones of the world, learning about their distinct characteristics and wildlife.",
            "image_path": "https://source.unsplash.com/500x500/?climate-zones",
            "type": "CORE"
          },
          {
            "name": "Weather Forecasting",
            "description": "Learn about the science of weather forecasting, understanding how meteorologists predict weather changes.",
            "image_path": "https://source.unsplash.com/500x500/?weather-forecasting",
            "type": "CORE"
          },
          {
            "name": "Climate Change",
            "description": "Discuss climate change, its impacts on our planet, and the importance of sustainable actions.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
          },
          {
            "name": "Extreme Weather Phenomena",
            "description": "Explore extreme weather phenomena like hurricanes, tornadoes, and blizzards, understanding their causes and impacts.",
            "image_path": "https://source.unsplash.com/500x500/?extreme-weather",
            "type": "ELECTIVE"
          },
          {
            "name": "The Water Cycle and Weather",
            "description": "Learn about the water cycle and its influence on weather patterns and climate.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "ELECTIVE"
          },
          {
            "name": "Weather Station Project",
            "description": "A hands-on project where students create their own simple weather station to measure and track local weather conditions.",
            "image_path": "https://source.unsplash.com/500x500/?weather-station",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Space Exploration",
        "description": "Venture into the infinite cosmos, exploring our solar system, distant galaxies, and the history of space travel.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to the Solar System",
            "description": "Begin a journey through our solar system, learning about the sun, the planets, and their moons.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "The Moon and its Phases",
            "description": "Learn about Earth‘s moon, its phases, and why we only see one side of it.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "Stars and Galaxies",
            "description": "Explore the fascinating world of stars and galaxies, understanding how they form and what they‘re made of.",
            "image_path": "https://source.unsplash.com/500x500/?stars-galaxies",
            "type": "CORE"
          },
          {
            "name": "Astronauts and Space Missions",
            "description": "Celebrate the brave individuals who venture into space and learn about some of the most famous space missions.",
            "image_path": "https://source.unsplash.com/500x500/?astronauts",
            "type": "CORE"
          },
          {
            "name": "The International Space Station",
            "description": "Learn about the International Space Station, its purpose, and what life is like for the astronauts who live there.",
            "image_path": "https://source.unsplash.com/500x500/?space-station",
            "type": "CORE"
          },
          {
            "name": "The Life Cycle of a Star",
            "description": "Explore the birth, life, and death of stars, understanding how each stage influences the universe around it.",
            "image_path": "https://source.unsplash.com/500x500/?star-life-cycle",
            "type": "CORE"
          },
          {
            "name": "The Concept of Gravity",
            "description": "Discover the force that keeps our feet on the ground and the planets in orbit around the sun.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "The Mars Rover and Exploration",
            "description": "Explore Mars with the help of rovers, learning about its geography, the possibility of life, and plans for future human missions.",
            "image_path": "https://source.unsplash.com/500x500/?mars-rover",
            "type": "ELECTIVE"
          },
          {
            "name": "The Hubble Telescope and Space Discoveries",
            "description": "Learn about the Hubble Space Telescope and the amazing discoveries it has made possible.",
            "image_path": "https://source.unsplash.com/500x500/?hubble-telescope",
            "type": "ELECTIVE"
          },
          {
            "name": "Build a Rocket Project",
            "description": "A hands-on project where students design and build their own model rocket, exploring the principles of rocket science.",
            "image_path": "https://source.unsplash.com/500x500/?rocket-project",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Ecosystems and Biodiversity",
        "description": "Journey into the intricate network of life, exploring diverse ecosystems and the fascinating variety of life they support.",
        "image_path": "https://source.unsplash.com/500x500/?ecosystems",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Ecosystems",
            "description": "Delve into the concept of ecosystems, understanding their key components and the interactions within them.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystems-introduction",
            "type": "CORE"
          },
          {
            "name": "Types of Ecosystems",
            "description": "Explore various types of ecosystems, from forests and deserts to oceans and wetlands.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-ecosystems",
            "type": "CORE"
          },
          {
            "name": "Food Chains and Webs",
            "description": "Learn about food chains and food webs, understanding the flow of energy in an ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?food-chains",
            "type": "CORE"
          },
          {
            "name": "Animal and Plant Adaptations",
            "description": "Discover how animals and plants adapt to their environments, enabling their survival in different habitats.",
            "image_path": "https://source.unsplash.com/500x500/?animal-plant-adaptations",
            "type": "CORE"
          },
          {
            "name": "Biodiversity and Why it Matters",
            "description": "Explore the concept of biodiversity, understanding its importance and how it affects ecosystem health.",
            "image_path": "https://source.unsplash.com/500x500/?biodiversity",
            "type": "CORE"
          },
          {
            "name": "Endangered Species",
            "description": "Discuss endangered species and the threats they face, considering what we can do to help protect them.",
            "image_path": "https://source.unsplash.com/500x500/?endangered-species",
            "type": "CORE"
          },
          {
            "name": "Recycling and Conservation",
            "description": "Understand the importance of recycling and conservation in preserving our planet‘s resources and biodiversity.",
            "image_path": "https://source.unsplash.com/500x500/?recycling-conservation",
            "type": "CORE"
          },
          {
            "name": "Invasive Species",
            "description": "Learn about invasive species and their impact on native populations and ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?invasive-species",
            "type": "ELECTIVE"
          },
          {
            "name": "The Role of Bees in Ecosystems",
            "description": "Discover the critical role bees play in our ecosystems through pollination.",
            "image_path": "https://source.unsplash.com/500x500/?bees-ecosystem",
            "type": "ELECTIVE"
          },
          {
            "name": "Create an Ecosystem Project",
            "description": "A hands-on project where students create their own model ecosystem and monitor it over time.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystem-project",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Energy and Its Forms",
        "description": "Illuminate the concept of energy, its different forms, and how it powers the world around us.",
        "image_path": "https://source.unsplash.com/500x500/?energy",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Energy",
            "description": "Understand the concept of energy and how it is a key part of nearly everything we do.",
            "image_path": "https://source.unsplash.com/500x500/?energy-introduction",
            "type": "CORE"
          },
          {
            "name": "Potential and Kinetic Energy",
            "description": "Distinguish between potential and kinetic energy, learning about the energy of position and motion.",
            "image_path": "https://source.unsplash.com/500x500/?potential-kinetic-energy",
            "type": "CORE"
          },
          {
            "name": "Forms of Energy",
            "description": "Explore the different forms of energy, including mechanical, thermal, chemical, and electrical energy.",
            "image_path": "https://source.unsplash.com/500x500/?forms-of-energy",
            "type": "CORE"
          },
          {
            "name": "Energy Transformation",
            "description": "Learn about energy transformation and how energy changes from one form to another in everyday activities.",
            "image_path": "https://source.unsplash.com/500x500/?energy-transformation",
            "type": "CORE"
          },
          {
            "name": "Sources of Energy",
            "description": "Discover the various sources of energy, both renewable and nonrenewable, and how they‘re used to power our world.",
            "image_path": "https://source.unsplash.com/500x500/?sources-of-energy",
            "type": "CORE"
          },
          {
            "name": "Conservation of Energy",
            "description": "Explore the law of conservation of energy and how energy is neither created nor destroyed, only transformed.",
            "image_path": "https://source.unsplash.com/500x500/?conservation-of-energy",
            "type": "CORE"
          },
          {
            "name": "Energy Efficiency",
            "description": "Discuss energy efficiency and the importance of saving energy in our homes and communities.",
            "image_path": "https://source.unsplash.com/500x500/?energy-efficiency",
            "type": "CORE"
          },
          {
            "name": "Solar Energy",
            "description": "Learn about the power of the sun and how we harness solar energy for various uses.",
            "image_path": "https://source.unsplash.com/500x500/?solar-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Wind Energy",
            "description": "Explore how the power of the wind can be used to generate clean, renewable energy.",
            "image_path": "https://source.unsplash.com/500x500/?wind-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Energy Saving Project",
            "description": "A hands-on project where students develop a plan to save energy in their homes or school.",
            "image_path": "https://source.unsplash.com/500x500/?energy-saving",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
    {
    "level_id": "4af5ff40-a612-4114-b4fc-01ad0cd8fbf4",
    "topics_data": [
      {
        "name": "Exploring the Solar System",
        "description": "A thrilling journey through the cosmos that instills wonder, enhances scientific inquiry, and fosters an appreciation for the vastness of space.",
        "image_path": "https://source.unsplash.com/500x500/?solar-system",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding the Sun",
            "description": "An enlightening exploration of our closest star, its structure, and importance in the solar system.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Journey to the Moon",
            "description": "An exciting voyage to our moon, learning about its phases, craters, and relationship with Earth.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "The Blue Planet: Earth",
            "description": "Uncover the marvels of our home planet, its unique position in the solar system, and its diverse environments.",
            "image_path": "https://source.unsplash.com/500x500/?earth",
            "type": "CORE"
          },
          {
            "name": "Unveiling Mars: The Red Planet",
            "description": "A thrilling expedition to Mars, understanding its landscape, and discussing the possibility of life.",
            "image_path": "https://source.unsplash.com/500x500/?mars",
            "type": "CORE"
          },
          {
            "name": "Mysterious Gas Giants: Jupiter and Saturn",
            "description": "A captivating study of the largest planets in our solar system, their moons, and unique features.",
            "image_path": "https://source.unsplash.com/500x500/?jupiter,saturn",
            "type": "CORE"
          },
          {
            "name": "Ice Giants: Neptune and Uranus",
            "description": "Discover the cold, distant ice giants of our solar system, their fascinating features, and mysteries.",
            "image_path": "https://source.unsplash.com/500x500/?neptune,uranus",
            "type": "CORE"
          },
          {
            "name": "The Edge of the Solar System: Dwarf Planets",
            "description": "A journey to the edge of the solar system, understanding dwarf planets like Pluto, and the Kuiper Belt.",
            "image_path": "https://source.unsplash.com/500x500/?pluto",
            "type": "CORE"
          },
          {
            "name": "Asteroids, Meteors, and Comets: Small Bodies of the Solar System",
            "description": "An intriguing study of the smaller celestial bodies, their composition, and their impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?asteroids",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Space Missions and Spacecraft",
            "description": "An inspiring study of humanity‘s endeavors to explore the solar system, highlighting key missions and spacecraft.",
            "image_path": "https://source.unsplash.com/500x500/?spacecraft",
            "type": "ELECTIVE"
          },
          {
            "name": "Aliens and Life Beyond Earth",
            "description": "A thought-provoking discussion on the possibility of extraterrestrial life and our search for it.",
            "image_path": "https://source.unsplash.com/500x500/?aliens",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Marvels of Life Science",
        "description": "A captivating exploration into the diversity of life, sparking curiosity, and fostering a deep appreciation for all living things.",
        "image_path": "https://source.unsplash.com/500x500/?life-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Cells: The Building Blocks of Life",
            "description": "A microscopic journey into cells, exploring their structure, function, and importance in life.",
            "image_path": "https://source.unsplash.com/500x500/?cells",
            "type": "CORE"
          },
          {
            "name": "Plant Kingdom: From Tiny Seeds to Giant Trees",
            "description": "A fascinating exploration of the plant kingdom, understanding their life cycles, photosynthesis, and importance in ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
          },
          {
            "name": "Animal Kingdom: Diversity and Adaptations",
            "description": "A thrilling adventure into the animal kingdom, studying their diversity, behaviors, and adaptations to various environments.",
            "image_path": "https://source.unsplash.com/500x500/?animals",
            "type": "CORE"
          },
          {
            "name": "Underwater Life: The Wonders of Aquatic Ecosystems",
            "description": "A deep dive into aquatic ecosystems, revealing the life forms that dwell beneath the waves and their unique adaptations.",
            "image_path": "https://source.unsplash.com/500x500/?underwater-life",
            "type": "CORE"
          },
          {
            "name": "Flying High: The World of Birds and Insects",
            "description": "Exploring the fascinating world of birds and insects, their features, life cycles, and significant roles in the environment.",
            "image_path": "https://source.unsplash.com/500x500/?birds,insects",
            "type": "CORE"
          },
          {
            "name": "Humans: Anatomy and Physiology",
            "description": "Discovering the wonders of the human body, understanding its structure, functions, and amazing capabilities.",
            "image_path": "https://source.unsplash.com/500x500/?human-body",
            "type": "CORE"
          },
          {
            "name": "Interconnected Life: Ecosystems and Biodiversity",
            "description": "Unveiling the interconnectedness of life, understanding ecosystems, and the importance of biodiversity for Earth‘s survival.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystem",
            "type": "CORE"
          },
          {
            "name": "Endangered Species and Conservation",
            "description": "A critical look at endangered species, their threats, and the importance of conservation efforts.",
            "image_path": "https://source.unsplash.com/500x500/?endangered-species",
            "type": "ELECTIVE"
          },
          {
            "name": "Incredible Microorganisms: Friends and Foes",
            "description": "Exploring the world of microorganisms, understanding their roles, and their impact on health and disease.",
            "image_path": "https://source.unsplash.com/500x500/?microorganisms",
            "type": "ELECTIVE"
          },
          {
            "name": "Genetics: Decoding the Blueprint of Life",
            "description": "A fascinating look into genetics, understanding DNA, genes, and the basics of heredity.",
            "image_path": "https://source.unsplash.com/500x500/?dna",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Wonders of Earth Science",
        "description": "An awe-inspiring delve into the Earth‘s systems, stimulating curiosity, and fostering a love for our incredible planet.",
        "image_path": "https://source.unsplash.com/500x500/?earth-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Rock Cycle: The Story of Earth‘s Crust",
            "description": "A captivating journey through the rock cycle, understanding the formation, transformation, and significance of rocks.",
            "image_path": "https://source.unsplash.com/500x500/?rocks",
            "type": "CORE"
          },
          {
            "name": "Weather and Climate: Earth‘s Atmosphere in Action",
            "description": "A refreshing look into weather patterns and climate, understanding their causes and effects on life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "Water Cycle: The Journey of Water on Earth",
            "description": "Follow the fascinating journey of water on Earth, from evaporation to precipitation and beyond.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Volcanoes and Earthquakes: Unleashing Earth‘s Power",
            "description": "Experience the power of Earth with an in-depth look at volcanoes and earthquakes, their causes and impacts.",
            "image_path": "https://source.unsplash.com/500x500/?volcano,earthquake",
            "type": "CORE"
          },
          {
            "name": "Soil Science: The Ground Beneath Our Feet",
            "description": "Dig into the world of soil science, understanding its composition, types, and importance in ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?soil",
            "type": "CORE"
          },
          {
            "name": "Oceans: The World‘s Largest Ecosystem",
            "description": "Plunge into the vast oceans, discovering their zones, inhabitants, and importance in Earth‘s climate system.",
            "image_path": "https://source.unsplash.com/500x500/?ocean",
            "type": "CORE"
          },
          {
            "name": "Plate Tectonics: The Moving Earth",
            "description": "Embark on a journey to understand the movement of Earth‘s crust and the theory of plate tectonics.",
            "image_path": "https://source.unsplash.com/500x500/?plate-tectonics",
            "type": "CORE"
          },
          {
            "name": "Fossils: Window into Earth‘s History",
            "description": "Travel back in time by studying fossils, revealing past life forms and Earth‘s ancient environments.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "ELECTIVE"
          },
          {
            "name": "Climate Change: A Modern Challenge",
            "description": "Investigate the science behind climate change, its impacts, and solutions for a sustainable future.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "ELECTIVE"
          },
          {
            "name": "Natural Resources: Treasures of the Earth",
            "description": "Discover Earth‘s natural resources, their uses, and the importance of their conservation.",
            "image_path": "https://source.unsplash.com/500x500/?natural-resources",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Fundamentals of Physical Science",
        "description": "A dynamic investigation into the physical world that sparks wonder, ignites curiosity, and enhances problem-solving skills.",
        "image_path": "https://source.unsplash.com/500x500/?physical-science",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Force and Motion: The Push and Pull of the Universe",
            "description": "A lively exploration of force and motion, understanding their principles, and seeing them in action in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?force-motion",
            "type": "CORE"
          },
          {
            "name": "Energy: The Power that Drives the World",
            "description": "An electrifying look at energy, its types, transformation, and importance in powering life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?energy",
            "type": "CORE"
          },
          {
            "name": "Matter: The Stuff of the Universe",
            "description": "An intriguing journey into the world of matter, understanding its states, properties, and changes.",
            "image_path": "https://source.unsplash.com/500x500/?matter",
            "type": "CORE"
          },
          {
            "name": "Heat and Temperature: Feeling the Warmth and Cold",
            "description": "A hot exploration of heat and temperature, understanding their differences, measurements, and effects on matter.",
            "image_path": "https://source.unsplash.com/500x500/?heat",
            "type": "CORE"
          },
          {
            "name": "Sound: The Symphony of Vibrations",
            "description": "A harmonious study of sound, its production, propagation, and properties that affect its transmission.",
            "image_path": "https://source.unsplash.com/500x500/?sound",
            "type": "CORE"
          },
          {
            "name": "Light: Illuminating Our World",
            "description": "Shedding light on the nature of light, its properties, behavior, and significance in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?light",
            "type": "CORE"
          },
          {
            "name": "Electricity and Magnetism: The Invisible Forces",
            "description": "A charged exploration of electricity and magnetism, their principles, and applications in everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?electricity,magnetism",
            "type": "CORE"
          },
          {
            "name": "Simple Machines: Making Work Easier",
            "description": "A practical look at simple machines, understanding their types, functions, and importance in technology.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "ELECTIVE"
          },
          {
            "name": "Fluids: The Flow of Life",
            "description": "Dive into the world of fluids, studying their properties and the principles that govern their behavior.",
            "image_path": "https://source.unsplash.com/500x500/?fluids",
            "type": "ELECTIVE"
          },
          {
            "name": "Optics: The Science of Sight",
            "description": "A fascinating exploration into optics, understanding the behavior of light and the science behind sight.",
            "image_path": "https://source.unsplash.com/500x500/?optics",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Exploring the Universe",
        "description": "An astronomical adventure through the universe that stimulates curiosity, inspires imagination, and awakens a sense of wonder about the cosmos.",
        "image_path": "https://source.unsplash.com/500x500/?universe",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Solar System: Our Cosmic Neighborhood",
            "description": "A galactic journey through our solar system, exploring the planets, moons, asteroids, and comets that orbit our Sun.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "Sun: The Star of Life",
            "description": "Illuminate the mysteries of the Sun, its structure, energy production, and crucial role in sustaining life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?sun",
            "type": "CORE"
          },
          {
            "name": "Earth‘s Moon: Our Constant Companion",
            "description": "Embark on a lunar exploration to learn about the moon‘s phases, surface, and influence on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "Stars: The Twinkling Mysteries of the Night",
            "description": "Venture into the starry night to unravel the mysteries of stars, their life cycles, and constellations.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "Galaxies: Cities of Stars",
            "description": "Journey through the cosmos to learn about galaxies, their types, structure, and the mysteries of black holes.",
            "image_path": "https://source.unsplash.com/500x500/?galaxies",
            "type": "CORE"
          },
          {
            "name": "The Universe: The Grand Cosmic Tapestry",
            "description": "Delve into the wonders of the universe, exploring its origin, structure, and the theories about its ultimate fate.",
            "image_path": "https://source.unsplash.com/500x500/?universe",
            "type": "CORE"
          },
          {
            "name": "Exploration of Space: Man‘s Quest Beyond Earth",
            "description": "Trace the milestones of space exploration, from the first human-made object in space to current missions to Mars.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "CORE"
          },
          {
            "name": "Astronomical Instruments: Tools for Skygazing",
            "description": "Investigate the tools of astronomy, from telescopes to satellites, that enable us to explore the universe.",
            "image_path": "https://source.unsplash.com/500x500/?telescope",
            "type": "ELECTIVE"
          },
          {
            "name": "Space Weather: Impact on Earth and Spacecraft",
            "description": "Examine the phenomenon of space weather, its causes, and its impact on Earth and space missions.",
            "image_path": "https://source.unsplash.com/500x500/?space-weather",
            "type": "ELECTIVE"
          },
          {
            "name": "Exoplanets: Search for Alien Worlds",
            "description": "Venture into the hunt for exoplanets and the search for life beyond Earth.",
            "image_path": "https://source.unsplash.com/500x500/?exoplanets",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Unleashing Engineering",
        "description": "A hands-on exploration of engineering principles that fosters creativity, enhances critical thinking, and introduces the technology shaping our future.",
        "image_path": "https://source.unsplash.com/500x500/?engineering",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Engineering Design Process: Solving Real-World Problems",
            "description": "A practical introduction to the engineering design process, honing problem-solving skills and fostering innovation.",
            "image_path": "https://source.unsplash.com/500x500/?engineering-design",
            "type": "CORE"
          },
          {
            "name": "Materials Science: Choosing the Right Material for the Job",
            "description": "An insightful look into materials science, exploring the properties, structure, and applications of different materials in engineering.",
            "image_path": "https://source.unsplash.com/500x500/?materials",
            "type": "CORE"
          },
          {
            "name": "Civil Engineering: Building the World Around Us",
            "description": "A hands-on exploration of civil engineering, focusing on the principles of design and construction of infrastructure.",
            "image_path": "https://source.unsplash.com/500x500/?civil-engineering",
            "type": "CORE"
          },
          {
            "name": "Mechanical Engineering: Making Things Move",
            "description": "Dive into the world of mechanical engineering, learning about machines, kinematics, and thermodynamics.",
            "image_path": "https://source.unsplash.com/500x500/?mechanical-engineering",
            "type": "CORE"
          },
          {
            "name": "Electrical Engineering: Powering Our Lives",
            "description": "An electrifying journey through electrical engineering, understanding circuits, electricity generation, and electronic devices.",
            "image_path": "https://source.unsplash.com/500x500/?electrical-engineering",
            "type": "CORE"
          },
          {
            "name": "Aerospace Engineering: Soaring Above the Sky",
            "description": "A thrilling voyage into aerospace engineering, studying the principles of flight and the technology behind aircraft and spacecraft.",
            "image_path": "https://source.unsplash.com/500x500/?aerospace-engineering",
            "type": "CORE"
          },
          {
            "name": "Robotics: The Future is Now",
            "description": "Step into the future with an exciting introduction to robotics, studying their design, programming, and applications in society.",
            "image_path": "https://source.unsplash.com/500x500/?robotics",
            "type": "CORE"
          },
          {
            "name": "Biomedical Engineering: Enhancing Life",
            "description": "Discover biomedical engineering, learning about medical devices, prosthetics, and breakthroughs in medical technology.",
            "image_path": "https://source.unsplash.com/500x500/?biomedical-engineering",
            "type": "ELECTIVE"
          },
          {
            "name": "Environmental Engineering: Protecting Our Planet",
            "description": "Explore environmental engineering, understanding its role in waste management, pollution control, and sustainable development.",
            "image_path": "https://source.unsplash.com/500x500/?environmental-engineering",
            "type": "ELECTIVE"
          },
          {
            "name": "Computer Engineering: The Digital Revolution",
            "description": "Immerse in the digital world with an overview of computer engineering, learning about computer hardware, networks, and cybersecurity.",
            "image_path": "https://source.unsplash.com/500x500/?computer-engineering",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Marvels of Mathematics",
        "description": "A fascinating journey into the world of numbers that nurtures logical thinking, inspires problem-solving skills, and reveals the beauty of patterns and shapes.",
        "image_path": "https://source.unsplash.com/500x500/?mathematics",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Numbers: The Language of the Universe",
            "description": "Delve into the intriguing world of numbers, their types, properties, and the role they play in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?numbers",
            "type": "CORE"
          },
          {
            "name": "Geometry: Shapes and Patterns in Our World",
            "description": "Explore the beauty of geometry, understanding shapes, their properties, and the role they play in design and nature.",
            "image_path": "https://source.unsplash.com/500x500/?geometry",
            "type": "CORE"
          },
          {
            "name": "Measurement: Quantifying Our World",
            "description": "A practical look at the concept of measurement, understanding units, accuracy, and the importance of measurements in various fields.",
            "image_path": "https://source.unsplash.com/500x500/?measurement",
            "type": "CORE"
          },
          {
            "name": "Data Analysis: Making Sense of Information",
            "description": "A hands-on introduction to data analysis, understanding data collection, organization, interpretation, and presentation.",
            "image_path": "https://source.unsplash.com/500x500/?data-analysis",
            "type": "CORE"
          },
          {
            "name": "Probability: Predicting the Chance of Events",
            "description": "Dive into the world of probability, understanding the likelihood of events, random experiments, and practical applications.",
            "image_path": "https://source.unsplash.com/500x500/?probability",
            "type": "CORE"
          },
          {
            "name": "Fractions and Decimals: Breaking Down the Whole",
            "description": "Explore the world of fractions and decimals, their relationship, operations, and use in practical situations.",
            "image_path": "https://source.unsplash.com/500x500/?fractions,decimals",
            "type": "CORE"
          },
          {
            "name": "Algebra: The Power of the Unknown",
            "description": "A fun introduction to algebra, understanding variables, equations, and their use in solving real-world problems.",
            "image_path": "https://source.unsplash.com/500x500/?algebra",
            "type": "CORE"
          },
          {
            "name": "Math in Nature: The Fibonacci Sequence and Golden Ratio",
            "description": "Discover the magic of math in nature, studying the Fibonacci sequence, golden ratio, and their presence in the natural world.",
            "image_path": "https://source.unsplash.com/500x500/?fibonacci,golden-ratio",
            "type": "ELECTIVE"
          },
          {
            "name": "Math in Art and Architecture: From Pyramids to Fractals",
            "description": "Explore the interplay of math in art and architecture, from the geometric designs of pyramids to the fractals in modern art.",
            "image_path": "https://source.unsplash.com/500x500/?art,architecture",
            "type": "ELECTIVE"
          },
          {
            "name": "Logic and Puzzles: The Joy of Problem Solving",
            "description": "A stimulating look at logic and puzzles, learning about logical reasoning, problem-solving, and the joy of puzzles.",
            "image_path": "https://source.unsplash.com/500x500/?puzzles",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Dynamic Earth",
        "description": "A deep dive into Earth‘s dynamic systems, fostering a sense of wonder for our home planet, and encouraging a desire for its preservation.",
        "image_path": "https://source.unsplash.com/500x500/?earth",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Plate Tectonics: The Moving Earth",
            "description": "Explore the theory of plate tectonics, understanding continental drift, sea-floor spreading, and the creation of geological features.",
            "image_path": "https://source.unsplash.com/500x500/?plate-tectonics",
            "type": "CORE"
          },
          {
            "name": "Volcanoes and Earthquakes: Unleashing Earth‘s Power",
            "description": "Delve into the dynamic processes of volcanoes and earthquakes, learning their causes, effects, and significance in Earth‘s system.",
            "image_path": "https://source.unsplash.com/500x500/?volcanoes,earthquakes",
            "type": "CORE"
          },
          {
            "name": "Weathering and Erosion: Shaping the Land",
            "description": "Investigate the effects of weathering and erosion on landscapes, understanding their role in shaping geological features.",
            "image_path": "https://source.unsplash.com/500x500/?weathering,erosion",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle: Earth‘s Lifeline",
            "description": "Explore the water cycle, understanding evaporation, condensation, precipitation, and the vital role of water in Earth‘s system.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Climate and Weather: Earth‘s Changing Moods",
            "description": "Discover the complexities of weather and climate, studying their patterns, effects, and the impact of climate change on our planet.",
            "image_path": "https://source.unsplash.com/500x500/?climate,weather",
            "type": "CORE"
          },
          {
            "name": "Rocks and Minerals: Earth‘s Building Blocks",
            "description": "Unearth the fascinating world of rocks and minerals, studying their formation, classification, and uses in our lives.",
            "image_path": "https://source.unsplash.com/500x500/?rocks,minerals",
            "type": "CORE"
          },
          {
            "name": "Soil Science: The Ground Beneath Our Feet",
            "description": "Dig into soil science, understanding soil formation, composition, importance in agriculture, and role in carbon sequestration.",
            "image_path": "https://source.unsplash.com/500x500/?soil",
            "type": "CORE"
          },
          {
            "name": "Fossils: Windows to the Past",
            "description": "Journey back in time with fossils, learning about their formation, types, and what they tell us about Earth‘s history.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "ELECTIVE"
          },
          {
            "name": "Natural Disasters: Nature‘s Fury",
            "description": "Explore natural disasters, understanding their causes, effects, and the science behind predicting and mitigating them.",
            "image_path": "https://source.unsplash.com/500x500/?natural-disasters",
            "type": "ELECTIVE"
          },
          {
            "name": "Conservation and Sustainability: Our Role in Earth‘s Future",
            "description": "Embrace the principles of conservation and sustainability, understanding their importance in protecting our planet for future generations.",
            "image_path": "https://source.unsplash.com/500x500/?conservation,sustainability",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Technological Marvels",
        "description": "An inspiring exploration of the intersection between science and technology that sparks innovation, encourages digital literacy, and fuels the technologists of tomorrow.",
        "image_path": "https://source.unsplash.com/500x500/?technology",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Exploring Computer Science: The Digital Age",
            "description": "Dive into the world of computer science, exploring how computers work, coding basics, and the power of programming.",
            "image_path": "https://source.unsplash.com/500x500/?computer-science",
            "type": "CORE"
          },
          {
            "name": "Innovation in Transportation: Moving Forward",
            "description": "Investigate the evolution and future of transportation, exploring groundbreaking technologies like autonomous vehicles and hyperloops.",
            "image_path": "https://source.unsplash.com/500x500/?transportation",
            "type": "CORE"
          },
          {
            "name": "Digital Communication: Connecting the World",
            "description": "Explore digital communication, understanding its evolution, the internet, and its impact on how we interact and share information.",
            "image_path": "https://source.unsplash.com/500x500/?digital-communication",
            "type": "CORE"
          },
          {
            "name": "Space Technology: Reaching for the Stars",
            "description": "Delve into space technology, studying satellites, telescopes, space probes, and the future of space exploration.",
            "image_path": "https://source.unsplash.com/500x500/?space-technology",
            "type": "CORE"
          },
          {
            "name": "Artificial Intelligence: Machines that Think",
            "description": "Discover the fascinating world of artificial intelligence, learning about machine learning, robotics, and their potential to transform our world.",
            "image_path": "https://source.unsplash.com/500x500/?artificial-intelligence",
            "type": "CORE"
          },
          {
            "name": "Green Technology: Innovating for a Sustainable Future",
            "description": "Explore green technology, understanding renewable energy, sustainable design, and technology‘s role in mitigating climate change.",
            "image_path": "https://source.unsplash.com/500x500/?green-technology",
            "type": "CORE"
          },
          {
            "name": "Biotechnology: Improving Lives Through Science",
            "description": "Unveil the power of biotechnology, studying genetic engineering, pharmaceuticals, and the ethical implications of this powerful technology.",
            "image_path": "https://source.unsplash.com/500x500/?biotechnology",
            "type": "CORE"
          },
          {
            "name": "Cybersecurity: Safeguarding the Digital World",
            "description": "Grasp the importance of cybersecurity, understanding online threats, safety measures, and the role of cryptography in securing our digital world.",
            "image_path": "https://source.unsplash.com/500x500/?cybersecurity",
            "type": "ELECTIVE"
          },
          {
            "name": "Virtual Reality: Exploring New Dimensions",
            "description": "Immerse in the world of virtual reality, understanding its technology, applications, and potential to revolutionize learning and entertainment.",
            "image_path": "https://source.unsplash.com/500x500/?virtual-reality",
            "type": "ELECTIVE"
          },
          {
            "name": "Future of Technology: Trends and Predictions",
            "description": "Explore the future of technology, studying emerging trends like quantum computing, nanotechnology, and the Internet of Things.",
            "image_path": "https://source.unsplash.com/500x500/?future-technology",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Incredible Inventions",
        "description": "A journey through the world of inventions that celebrates human ingenuity, encourages critical thinking, and inspires creativity and innovation.",
        "image_path": "https://source.unsplash.com/500x500/?inventions",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "The Process of Invention: From Idea to Reality",
            "description": "Understand the process of invention, exploring ideation, design, prototyping, testing, and finally bringing an invention to market.",
            "image_path": "https://source.unsplash.com/500x500/?invention-process",
            "type": "CORE"
          },
          {
            "name": "Famous Inventors and Their Inventions: Inspiring Minds",
            "description": "Learn about famous inventors and their inventions that have significantly influenced our world and everyday life.",
            "image_path": "https://source.unsplash.com/500x500/?famous-inventors",
            "type": "CORE"
          },
          {
            "name": "Inventions that Changed the World: Milestones of Progress",
            "description": "Explore groundbreaking inventions that drastically changed the course of human history and continue to impact our lives today.",
            "image_path": "https://source.unsplash.com/500x500/?inventions",
            "type": "CORE"
          },
          {
            "name": "Inventions in Daily Life: Impact and Significance",
            "description": "Investigate common inventions that we encounter in our daily lives, understanding their working, evolution, and significance.",
            "image_path": "https://source.unsplash.com/500x500/?daily-life",
            "type": "CORE"
          },
          {
            "name": "Inventions in Science: Pushing Boundaries",
            "description": "Dive into the world of scientific inventions, understanding their role in advancing knowledge and improving human life.",
            "image_path": "https://source.unsplash.com/500x500/?science-inventions",
            "type": "CORE"
          },
          {
            "name": "Inventions in Technology: Shaping the Future",
            "description": "Discover how technological inventions are shaping our present and future, from AI and robotics to renewable energy and nanotechnology.",
            "image_path": "https://source.unsplash.com/500x500/?technology-inventions",
            "type": "CORE"
          },
          {
            "name": "The Patent System: Protecting Ideas",
            "description": "Understand the patent system, its importance in protecting inventions, and the process of obtaining a patent.",
            "image_path": "https://source.unsplash.com/500x500/?patent",
            "type": "CORE"
          },
          {
            "name": "Inventing for the Environment: Green Innovations",
            "description": "Explore inventions aimed at protecting the environment and promoting sustainability, inspiring eco-conscious innovation.",
            "image_path": "https://source.unsplash.com/500x500/?green-inventions",
            "type": "ELECTIVE"
          },
          {
            "name": "Inventing for Space: Beyond the Earth",
            "description": "Delve into the inventions designed for space exploration, understanding their function, challenges, and role in expanding our cosmic frontiers.",
            "image_path": "https://source.unsplash.com/500x500/?space-inventions",
            "type": "ELECTIVE"
          },
          {
            "name": "Becoming an Inventor: Your Path to Innovation",
            "description": "Learn about the qualities of an inventor, the skills required, and the steps you can take to become an inventor.",
            "image_path": "https://source.unsplash.com/500x500/?becoming-inventor",
            "type": "ELECTIVE"
          }
        ]
      }
    ]
  },
    {
    "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
    "topics_data": [
      {
        "name": "Exploring the Universe",
        "description": "A journey through the cosmos that unravels the mysteries of galaxies, stars, and planets.",
        "image_path": "https://source.unsplash.com/500x500/?universe",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Astronomy",
            "description": "The first steps into the cosmos, understanding the basics of astronomy and celestial observation.",
            "image_path": "https://source.unsplash.com/500x500/?astronomy",
            "type": "CORE"
          },
          {
            "name": "Understanding Solar System",
            "description": "Exploring our cosmic neighborhood: the Sun, planets, and their moons.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "Star Science",
            "description": "Dive deep into the world of stars: their formation, life, and eventual demise.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "Galaxy Exploration",
            "description": "A journey through our Milky Way, learning about its structure and other galaxies in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?galaxy",
            "type": "CORE"
          },
          {
            "name": "The Mystery of Black Holes",
            "description": "Discover the most mysterious objects in the universe, understanding their formation and impact on galaxies.",
            "image_path": "https://source.unsplash.com/500x500/?black-holes",
            "type": "CORE"
          },
          {
            "name": "Space Exploration History",
            "description": "A look back at the history of space exploration, from the first human flight to our ventures into deep space.",
            "image_path": "https://source.unsplash.com/500x500/?space-history",
            "type": "CORE"
          },
          {
            "name": "Future of Space Travel",
            "description": "Imagining the future of humanity in space, looking at potential advancements in space travel and colonization.",
            "image_path": "https://source.unsplash.com/500x500/?space-future",
            "type": "CORE"
          },
          {
            "name": "Astrobiology: Life Beyond Earth",
            "description": "Explore the possibilities of life existing beyond Earth and the search for extraterrestrial life.",
            "image_path": "https://source.unsplash.com/500x500/?astrobiology",
            "type": "ELECTIVE"
          },
          {
            "name": "Space Art and Mythology",
            "description": "Discover how space has inspired human art and mythology throughout the ages.",
            "image_path": "https://source.unsplash.com/500x500/?space-art",
            "type": "ELECTIVE"
          },
          {
            "name": "Inventors of Astronomy",
            "description": "Learn about the great minds that have expanded our understanding of the universe.",
            "image_path": "https://source.unsplash.com/500x500/?astronomers",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Life Sciences: Ecosystems and Biodiversity",
        "description": "Unraveling the interconnected web of life, exploring diverse ecosystems, and the species they support.",
        "image_path": "https://source.unsplash.com/500x500/?ecosystem",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Ecosystems",
            "description": "Explore the fundamental principles of ecosystems and understand how all organisms interact with each other and their environment.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystems",
            "type": "CORE"
          },
          {
            "name": "The Diversity of Life",
            "description": "Venture into the wide array of life forms on Earth and the role of biodiversity in maintaining a healthy planet.",
            "image_path": "https://source.unsplash.com/500x500/?biodiversity",
            "type": "CORE"
          },
          {
            "name": "Food Chains and Webs",
            "description": "Discover how energy flows and matter cycles through ecosystems via food chains and food webs.",
            "image_path": "https://source.unsplash.com/500x500/?food-chain",
            "type": "CORE"
          },
          {
            "name": "Population Dynamics",
            "description": "Learn about population ecology, examining how populations grow, shrink, and interact with their environment.",
            "image_path": "https://source.unsplash.com/500x500/?population-ecology",
            "type": "CORE"
          },
          {
            "name": "Biomes of the World",
            "description": "Travel through different biomes across the world, studying the unique organisms and climate that define each biome.",
            "image_path": "https://source.unsplash.com/500x500/?biomes",
            "type": "CORE"
          },
          {
            "name": "Human Impact on Ecosystems",
            "description": "Understand the effects of human activities on ecosystems and the importance of sustainable practices to preserve biodiversity.",
            "image_path": "https://source.unsplash.com/500x500/?human-impact",
            "type": "CORE"
          },
          {
            "name": "Conservation Biology",
            "description": "Learn about the importance of conservation biology and the strategies used to protect endangered species and habitats.",
            "image_path": "https://source.unsplash.com/500x500/?conservation",
            "type": "CORE"
          },
          {
            "name": "Biomimicry: Learning from Nature",
            "description": "Explore how innovations and designs can mimic nature‘s time-tested patterns and strategies.",
            "image_path": "https://source.unsplash.com/500x500/?biomimicry",
            "type": "ELECTIVE"
          },
          {
            "name": "Invasive Species",
            "description": "Investigate the role of invasive species in ecosystems, and how they can impact biodiversity.",
            "image_path": "https://source.unsplash.com/500x500/?invasive-species",
            "type": "ELECTIVE"
          },
          {
            "name": "The Role of Zoos and Aquariums",
            "description": "Discuss the roles zoos and aquariums play in conservation, education, and research.",
            "image_path": "https://source.unsplash.com/500x500/?zoos-aquariums",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Physical Science: Matter and Energy",
        "description": "A deep dive into the world of atoms and energy, understanding the building blocks of the universe.",
        "image_path": "https://source.unsplash.com/500x500/?physics",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Matter",
            "description": "Begin the journey into the world of matter, learning about atoms, elements, compounds, and mixtures.",
            "image_path": "https://source.unsplash.com/500x500/?atoms",
            "type": "CORE"
          },
          {
            "name": "States of Matter",
            "description": "Explore the different states of matter - solids, liquids, and gases, and the transformations between these states.",
            "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
            "type": "CORE"
          },
          {
            "name": "Chemical vs. Physical Changes",
            "description": "Distinguish between chemical and physical changes, understanding how matter interacts and transforms.",
            "image_path": "https://source.unsplash.com/500x500/?chemical-changes",
            "type": "CORE"
          },
          {
            "name": "Energy: Forms and Changes",
            "description": "Discover the different forms of energy, understanding how it can be converted, transferred, and conserved.",
            "image_path": "https://source.unsplash.com/500x500/?energy",
            "type": "CORE"
          },
          {
            "name": "Introduction to Electricity",
            "description": "Get charged up as you explore the fundamentals of electricity, circuits, and electromagnetism.",
            "image_path": "https://source.unsplash.com/500x500/?electricity",
            "type": "CORE"
          },
          {
            "name": "Heat and Thermodynamics",
            "description": "Feel the heat as you explore the concepts of heat, temperature, and the laws of thermodynamics.",
            "image_path": "https://source.unsplash.com/500x500/?heat",
            "type": "CORE"
          },
          {
            "name": "Light and Sound Waves",
            "description": "Explore the world of waves, understanding the properties of light and sound and how they interact with matter.",
            "image_path": "https://source.unsplash.com/500x500/?light-sound",
            "type": "CORE"
          },
          {
            "name": "The Magic of Magnets",
            "description": "Understand the fundamentals of magnetism, exploring the properties and uses of magnets.",
            "image_path": "https://source.unsplash.com/500x500/?magnets",
            "type": "ELECTIVE"
          },
          {
            "name": "Nuclear Energy: Pros and Cons",
            "description": "Investigate the science of nuclear energy, its benefits, risks, and impact on society.",
            "image_path": "https://source.unsplash.com/500x500/?nuclear-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Famous Physicists and their Discoveries",
            "description": "Get inspired by the life and work of famous physicists who have shaped our understanding of the physical world.",
            "image_path": "https://source.unsplash.com/500x500/?physicists",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Earth Sciences: Geology and Weather",
        "description": "Embark on a journey to the center of the Earth, exploring the forces that shape our planet and the skies above us.",
        "image_path": "https://source.unsplash.com/500x500/?geology",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Earth‘s Layers",
            "description": "Journey to the center of the Earth, learning about the crust, mantle, and core that make up our planet.",
            "image_path": "https://source.unsplash.com/500x500/?earth-layers",
            "type": "CORE"
          },
          {
            "name": "Plate Tectonics",
            "description": "Explore the movement of Earth‘s crust, understanding the processes that cause earthquakes, volcanic eruptions, and the creation of mountain ranges.",
            "image_path": "https://source.unsplash.com/500x500/?plate-tectonics",
            "type": "CORE"
          },
          {
            "name": "Rocks and Minerals",
            "description": "Uncover the world beneath your feet, studying the formation, identification, and uses of rocks and minerals.",
            "image_path": "https://source.unsplash.com/500x500/?rocks-minerals",
            "type": "CORE"
          },
          {
            "name": "The Water Cycle",
            "description": "Follow a drop of water on its never-ending journey, exploring evaporation, condensation, and precipitation in the water cycle.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
          },
          {
            "name": "Weather and Climate",
            "description": "Dive into the forces that shape our weather and climate, understanding the importance of atmospheric conditions on life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
          },
          {
            "name": "Natural Disasters",
            "description": "Study the science behind natural disasters like earthquakes, tsunamis, hurricanes, and tornadoes, understanding their causes and impacts.",
            "image_path": "https://source.unsplash.com/500x500/?natural-disasters",
            "type": "CORE"
          },
          {
            "name": "Earth‘s Resources",
            "description": "Learn about the natural resources Earth provides, their uses, and the importance of conserving these resources for future generations.",
            "image_path": "https://source.unsplash.com/500x500/?natural-resources",
            "type": "CORE"
          },
          {
            "name": "Climate Change: Causes and Effects",
            "description": "Investigate the causes of climate change, its impacts, and how we can mitigate its effects.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "ELECTIVE"
          },
          {
            "name": "Exploring Fossils",
            "description": "Travel back in time, discovering how fossils form and what they tell us about Earth‘s past.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "ELECTIVE"
          },
          {
            "name": "The Wonderful World of Soil",
            "description": "Dig into the world of soil, understanding its formation, composition, and importance in ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?soil",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Astronomy: Exploring our Solar System and Beyond",
        "description": "Reach for the stars! Explore the mysteries of our solar system, galaxies, and the universe beyond.",
        "image_path": "https://source.unsplash.com/500x500/?astronomy",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Astronomy",
            "description": "Embark on a cosmic journey, learning about the basic concepts in astronomy and our place in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?universe",
            "type": "CORE"
          },
          {
            "name": "Our Solar System",
            "description": "Tour the solar system, exploring the sun, planets, moons, asteroids, and comets that orbit around us.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "The Sun and Stars",
            "description": "Illuminate the science of stars, learning about their formation, life cycle, and the importance of our own star - the Sun.",
            "image_path": "https://source.unsplash.com/500x500/?sun-stars",
            "type": "CORE"
          },
          {
            "name": "Galaxies and the Universe",
            "description": "Venture beyond our Milky Way, studying other galaxies and the overall structure of the universe.",
            "image_path": "https://source.unsplash.com/500x500/?galaxies",
            "type": "CORE"
          },
          {
            "name": "Gravity and Orbits",
            "description": "Learn about the force that keeps planets in orbit, understanding the fundamental role of gravity in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?gravity-orbits",
            "type": "CORE"
          },
          {
            "name": "The Moon and its Phases",
            "description": "Explore our closest celestial neighbor - the Moon, understanding its phases, eclipses, and its impact on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
          },
          {
            "name": "Space Exploration",
            "description": "Trace the history and future of space exploration, learning about major missions, spacecraft, and the search for extraterrestrial life.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "CORE"
          },
          {
            "name": "Asteroids, Meteors, and Comets",
            "description": "Investigate the small bodies of the solar system, understanding the differences and impact of asteroids, meteors, and comets.",
            "image_path": "https://source.unsplash.com/500x500/?asteroids",
            "type": "ELECTIVE"
          },
          {
            "name": "The Possibility of Alien Life",
            "description": "Explore the potential for life beyond Earth, discussing where we might find extraterrestrial life and what it might look like.",
            "image_path": "https://source.unsplash.com/500x500/?alien-life",
            "type": "ELECTIVE"
          },
          {
            "name": "Famous Astronomers and their Discoveries",
            "description": "Get inspired by the astronomers who have expanded our understanding of the universe, exploring their lives, work and discoveries.",
            "image_path": "https://source.unsplash.com/500x500/?astronomers",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Environmental Science: The Interconnectedness of Life",
        "description": "Unearth the wonders of the natural world, understanding how living things interact with each other and their environment.",
        "image_path": "https://source.unsplash.com/500x500/?environment",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Ecosystems",
            "description": "Explore the complex networks of life, understanding the relationships between organisms and their environment in different ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystems",
            "type": "CORE"
          },
          {
            "name": "Food Chains and Food Webs",
            "description": "Discover the flow of energy in ecosystems, studying how organisms are interconnected through food chains and food webs.",
            "image_path": "https://source.unsplash.com/500x500/?food-chains",
            "type": "CORE"
          },
          {
            "name": "Biomes of the World",
            "description": "Journey through the biomes of the world, learning about the unique climates, plants, and animals found in each one.",
            "image_path": "https://source.unsplash.com/500x500/?biomes",
            "type": "CORE"
          },
          {
            "name": "Biodiversity and Conservation",
            "description": "Learn about the importance of biodiversity, the threats it faces, and how we can help conserve our planet‘s species.",
            "image_path": "https://source.unsplash.com/500x500/?biodiversity",
            "type": "CORE"
          },
          {
            "name": "Human Impact on the Environment",
            "description": "Investigate the impact of human activities on the environment, exploring topics like pollution, deforestation, and climate change.",
            "image_path": "https://source.unsplash.com/500x500/?human-impact",
            "type": "CORE"
          },
          {
            "name": "Recycling and Waste Management",
            "description": "Learn about waste and recycling, understanding the importance of reducing, reusing, and recycling in protecting our planet.",
            "image_path": "https://source.unsplash.com/500x500/?recycling",
            "type": "CORE"
          },
          {
            "name": "Renewable Energy",
            "description": "Explore renewable sources of energy like solar, wind, and hydroelectric power, understanding their benefits and how they work.",
            "image_path": "https://source.unsplash.com/500x500/?renewable-energy",
            "type": "CORE"
          },
          {
            "name": "Water Pollution and Conservation",
            "description": "Dive into the issues of water pollution and conservation, understanding the importance of clean water and how we can protect this vital resource.",
            "image_path": "https://source.unsplash.com/500x500/?water-pollution",
            "type": "ELECTIVE"
          },
          {
            "name": "Endangered Species and Extinction",
            "description": "Investigate the causes and consequences of species extinction, and learn about efforts to protect endangered species.",
            "image_path": "https://source.unsplash.com/500x500/?endangered-species",
            "type": "ELECTIVE"
          },
          {
            "name": "The Importance of Bees",
            "description": "Discover the crucial role that bees play in our ecosystems and the threats they face.",
            "image_path": "https://source.unsplash.com/500x500/?bees",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Physical Sciences: Energy and Forces",
        "description": "Unleash the power of physical science, exploring the concepts of energy, forces, and motion.",
        "image_path": "https://source.unsplash.com/500x500/?energy",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Understanding Energy",
            "description": "Discover the different forms of energy and how it can be transferred and transformed.",
            "image_path": "https://source.unsplash.com/500x500/?energy-forms",
            "type": "CORE"
          },
          {
            "name": "Forces and Motion",
            "description": "Examine the laws of motion, exploring how forces affect the movement of objects.",
            "image_path": "https://source.unsplash.com/500x500/?forces-motion",
            "type": "CORE"
          },
          {
            "name": "Gravity: The Force of Attraction",
            "description": "Dive into the force that keeps our feet on the ground and the planets in orbit.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
          },
          {
            "name": "Electricity and Magnetism",
            "description": "Learn about the fascinating world of electricity and magnetism and how they are related.",
            "image_path": "https://source.unsplash.com/500x500/?electricity-magnetism",
            "type": "CORE"
          },
          {
            "name": "Light and Sound",
            "description": "Explore the properties of light and sound, understanding how they travel and interact with matter.",
            "image_path": "https://source.unsplash.com/500x500/?light-sound",
            "type": "CORE"
          },
          {
            "name": "Thermal Energy and Heat",
            "description": "Discover the science of heat, learning how thermal energy is transferred and how it affects matter.",
            "image_path": "https://source.unsplash.com/500x500/?thermal-energy",
            "type": "CORE"
          },
          {
            "name": "The Science of Simple Machines",
            "description": "Investigate simple machines and how they make our work easier by changing the force or distance involved.",
            "image_path": "https://source.unsplash.com/500x500/?simple-machines",
            "type": "CORE"
          },
          {
            "name": "Nuclear Energy: Pros and Cons",
            "description": "Examine the principles of nuclear energy, understanding its potential benefits and risks.",
            "image_path": "https://source.unsplash.com/500x500/?nuclear-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "The Power of Wind Energy",
            "description": "Learn about the harnessing of wind power, studying how wind turbines work and their impact on the environment.",
            "image_path": "https://source.unsplash.com/500x500/?wind-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "Understanding Friction",
            "description": "Explore the force of friction, understanding its effects on motion and its applications in daily life.",
            "image_path": "https://source.unsplash.com/500x500/?friction",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Chemistry: The World of Atoms and Molecules",
        "description": "Dive into the world of chemistry, discovering how atoms combine to form the myriad of materials in our universe.",
        "image_path": "https://source.unsplash.com/500x500/?chemistry",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Chemistry",
            "description": "Step into the fascinating world of chemistry, understanding the basic principles that govern the interactions of matter.",
            "image_path": "https://source.unsplash.com/500x500/?chemistry-intro",
            "type": "CORE"
          },
          {
            "name": "Atoms and Elements",
            "description": "Discover atoms, the building blocks of matter, and elements, the purest form of matter in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?atoms",
            "type": "CORE"
          },
          {
            "name": "The Periodic Table",
            "description": "Explore the periodic table, a powerful tool that organizes all the known elements based on their properties.",
            "image_path": "https://source.unsplash.com/500x500/?periodic-table",
            "type": "CORE"
          },
          {
            "name": "Chemical Reactions",
            "description": "Learn about chemical reactions, how they occur, and the different types that exist.",
            "image_path": "https://source.unsplash.com/500x500/?chemical-reactions",
            "type": "CORE"
          },
          {
            "name": "States of Matter",
            "description": "Investigate the different states of matter, understanding how temperature and pressure affect a substance‘s state.",
            "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
            "type": "CORE"
          },
          {
            "name": "Acids, Bases, and pH",
            "description": "Dive into the world of acids and bases, learning about their properties and the importance of pH.",
            "image_path": "https://source.unsplash.com/500x500/?acids-bases",
            "type": "CORE"
          },
          {
            "name": "Mixtures and Solutions",
            "description": "Explore the concepts of mixtures and solutions, understanding their differences and how they are formed.",
            "image_path": "https://source.unsplash.com/500x500/?mixtures-solutions",
            "type": "CORE"
          },
          {
            "name": "Chemical Energy and Heat",
            "description": "Learn about the role of energy in chemical reactions, understanding endothermic and exothermic processes.",
            "image_path": "https://source.unsplash.com/500x500/?chemical-energy",
            "type": "ELECTIVE"
          },
          {
            "name": "The Chemistry of Food and Cooking",
            "description": "Uncover the chemistry in your kitchen, learning how chemical reactions contribute to the food we eat and how we cook it.",
            "image_path": "https://source.unsplash.com/500x500/?food-chemistry",
            "type": "ELECTIVE"
          },
          {
            "name": "The Chemistry of Polymers",
            "description": "Discover polymers, large molecules made of repeating subunits, that make up many of the materials in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?polymers",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Space Science: A Journey Through the Cosmos",
        "description": "Embark on an adventure through the cosmos, exploring our solar system, galaxies, and the universe beyond.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Space Science",
            "description": "Launch into the world of space science, understanding the key principles that guide our exploration of the universe.",
            "image_path": "https://source.unsplash.com/500x500/?space-intro",
            "type": "CORE"
          },
          {
            "name": "Our Solar System",
            "description": "Explore our solar system, learning about the sun, planets, moons, and other celestial objects that call it home.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
          },
          {
            "name": "The Life Cycle of Stars",
            "description": "Discover the life cycle of stars, understanding how they form, evolve, and eventually die.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
          },
          {
            "name": "Galaxies and the Universe",
            "description": "Journey beyond our solar system, exploring the structure of galaxies and the vast universe that contains them.",
            "image_path": "https://source.unsplash.com/500x500/?galaxies",
            "type": "CORE"
          },
          {
            "name": "The Physics of Space Travel",
            "description": "Learn about the physics that govern space travel, understanding how we overcome the challenges of exploring the cosmos.",
            "image_path": "https://source.unsplash.com/500x500/?space-travel",
            "type": "CORE"
          },
          {
            "name": "Astronomy and Telescopes",
            "description": "Dive into the science of astronomy, learning how telescopes help us observe the universe and make exciting discoveries.",
            "image_path": "https://source.unsplash.com/500x500/?telescopes",
            "type": "CORE"
          },
          {
            "name": "Alien Life and Exoplanets",
            "description": "Explore the possibility of alien life, learning about the search for exoplanets and the conditions necessary for life.",
            "image_path": "https://source.unsplash.com/500x500/?exoplanets",
            "type": "CORE"
          },
          {
            "name": "Space Exploration History",
            "description": "Journey through the history of space exploration, from the first telescopes to recent Mars rovers and future plans.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "ELECTIVE"
          },
          {
            "name": "The Moon Landing",
            "description": "Relive the excitement of the moon landing, exploring the science, technology, and impact of this historic event.",
            "image_path": "https://source.unsplash.com/500x500/?moon-landing",
            "type": "ELECTIVE"
          },
          {
            "name": "Black Holes and Neutron Stars",
            "description": "Discover the most extreme objects in the universe, learning about the formation and properties of black holes and neutron stars.",
            "image_path": "https://source.unsplash.com/500x500/?black-holes",
            "type": "ELECTIVE"
          }
        ]
      },
      {
        "name": "Environmental Science: Caring for Our Planet",
        "description": "Discover the importance of environmental science in preserving our planet for future generations.",
        "image_path": "https://source.unsplash.com/500x500/?environment",
        "type": "CORE",
        "lessons_data": [
          {
            "name": "Introduction to Environmental Science",
            "description": "Begin your journey into environmental science, understanding how we study and interact with our natural world.",
            "image_path": "https://source.unsplash.com/500x500/?environment-intro",
            "type": "CORE"
          },
          {
            "name": "Ecosystems and Biodiversity",
            "description": "Explore ecosystems and biodiversity, learning about the complex interactions between organisms and their environment.",
            "image_path": "https://source.unsplash.com/500x500/?ecosystems",
            "type": "CORE"
          },
          {
            "name": "Climate Change",
            "description": "Investigate climate change, understanding its causes, effects, and the science behind global warming.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
          },
          {
            "name": "Conservation and Sustainability",
            "description": "Discover the importance of conservation and sustainability, learning how we can protect and preserve our natural resources.",
            "image_path": "https://source.unsplash.com/500x500/?conservation",
            "type": "CORE"
          },
          {
            "name": "Pollution and Waste Management",
            "description": "Learn about pollution and waste management, understanding the impact of human activity on our planet and ways to mitigate it.",
            "image_path": "https://source.unsplash.com/500x500/?pollution",
            "type": "CORE"
          },
          {
            "name": "Water and Soil Science",
            "description": "Delve into the science of water and soil, learning about their importance in supporting life and maintaining ecosystems.",
            "image_path": "https://source.unsplash.com/500x500/?soil-water",
            "type": "CORE"
          },
          {
            "name": "Energy and the Environment",
            "description": "Examine the role of energy in our lives, exploring the environmental impact of different energy sources and the importance of renewable energy.",
            "image_path": "https://source.unsplash.com/500x500/?renewable-energy",
            "type": "CORE"
          },
          {
            "name": "Forests and Deforestation",
            "description": "Learn about the crucial role of forests, understanding the impacts and causes of deforestation, and strategies for forest conservation.",
            "image_path": "https://source.unsplash.com/500x500/?forests",
            "type": "ELECTIVE"
          },
          {
            "name": "Ocean Science and Marine Conservation",
            "description": "Dive into ocean science, learning about marine ecosystems, threats to ocean health, and the importance of marine conservation.",
            "image_path": "https://source.unsplash.com/500x500/?ocean-conservation",
            "type": "ELECTIVE"
          },
          {
            "name": "Urban Ecology",
            "description": "Explore urban ecology, understanding how cities can coexist with nature and the importance of green spaces in urban areas.",
            "image_path": "https://source.unsplash.com/500x500/?urban-ecology",
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
-- Right Now, your job is to create the first topic and ALL the lessons for those topics for Kindergarten English.
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
-- }
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

-- Our goal is to create 8 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 5 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called Comprehensive K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first topic and ALL the lessons for those topics for Kindergarten Social Studies.
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
-- }
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
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for Kindergarten Physical Development.
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
-- }
-- Every subject has 6 levels (Kindergarten, 1, 2, 3, 4, 5). Every level has 9 topics (7 CORE and 2 ELECTIVE). Every topic has 7 lessons (5 CORE and 2 ELECTIVE). Create the 7 lessons (5 CORE and 2 ELECTIVE) for the first 2 topics for Kindergarten Physical Development.
--
-- Here is what the JSON output should look like:
-- ```
-- {
--        "name": "Topic name",
--        "description": "Short inspiring description",
--        "image_path": "https://source.unsplash.com/500x500/?topic-name",
--        "type": "CORE",
--        "lessons_data": [
--            {
--                "name": "Lesson name",
--                "description": "Short inspiring description",
--                "image_path": "https://source.unsplash.com/500x500/?lesson-name",
--                "type": "CORE"
--            },
--           // . . .
--        ]
-- },
-- // . . .
-- ```

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
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for Kindergarten Creative Arts.
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
-- }
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
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for Kindergarten Social Emotional Learning.
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
-- }
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
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for Kindergarten Computer Science.
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
-- }
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

