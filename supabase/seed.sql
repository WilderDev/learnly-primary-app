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
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Warning', 'PENDING', 'Welcome to Learnly Warning!', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Error', 'PENDING', 'Welcome to Learnly Error!', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Success', 'PENDING', 'Welcome to Learnly! Success', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Billing', 'PENDING', 'Welcome to Learnly! Billing', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Community', 'PENDING', 'Welcome to Learnly! Community', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Chat', 'PENDING', 'Welcome to Learnly! Chat', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Lesson', 'PENDING', 'Welcome to Learnly! Lesson', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Event', 'PENDING', 'Welcome to Learnly! Event', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.'),
('185f2f83-d63a-4c9b-b4a0-7e4a885799e3', 'Other', 'PENDING', 'Welcome to Learnly! Other', 'Welcome to Learnly! We are excited to have you join our community of parents and teachers. We are here to help you and your child succeed. Please let us know if you have any questions or feedback.');

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
(code, name, description, image_url)
VALUES
('MATH', 'Mathmatics', 'The universal language that deciphers the complex riddles of the cosmos, providing the foundation for logic and reason in a world of chaos.', '/images/subjects/math.jpg'),
('SCI', 'Science', 'A ceaseless journey of discovery, asking questions of the universe and uncovering its intricate, beautiful truths one experiment at a time.', '/images/subjects/science.jpg'),
('ENG', 'English', 'The soulful dance of words that paints vivid pictures, tells profound stories, and bridges the gap between human hearts and minds.', '/images/subjects/english.jpg'),
('SS', 'Social Studies', 'A living tapestry of human experience, weaving together history, geography, culture, and society to understand our collective past and shape a better future.', '/images/subjects/social-studies.jpg'),
('ART', 'Art', 'The unspoken language of human emotion, a canvas for individual expression, and a mirror reflecting society’s soul.', '/images/subjects/art.jpg'),
('MUS', 'Music', 'An ethereal symphony of emotions that transcends boundaries, unites hearts, and resonates with the deepest chords of our shared humanity.', '/images/subjects/music.jpg'),
('PE', 'Physical Education', 'The celebration of human potential, teaching us the harmony of mind and body, and the joy of movement and resilience.', '/images/subjects/physical-education.jpg'),
('HTH', 'Health', 'The precious cornerstone of life, emphasizing the interconnectedness of physical, mental, and social well-being for a fulfilled existence.', '/images/subjects/health.jpg'),
('COMPSCI', 'Computer Science', 'The pulsating heart of modern innovation, scripting the future in lines of code and unlocking boundless possibilities in a digital world.', '/images/subjects/computer-science.jpg'),
('SEL', 'Social Emotional Learning', 'The compass guiding us through the landscape of human emotions, fostering empathy, resilience, and personal growth, one interaction at a time.', '/images/subjects/social-emotional-learning.jpg'),
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

-- Little Learners | Comprehensive K-5 | Little Experimentors | STEM K-5 | etc...
-- Learning Paths (4)
-- INSERT INTO learning_paths
-- ()
-- VALUES
-- ()
-- ()
-- ()
-- ()


