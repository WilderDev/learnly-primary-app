-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called STEM K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for level 4 Mathematics.
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

--- STEM K-5
---- Mathematics
SELECT create_complete_curriculum(
  'STEM K-5',
  'b408d3b0-ca53-4385-9c38-388508f6f777'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": [
        {
          "name": "Numbers and Counting",
          "description": "Planting the seeds of numerical literacy through counting and basic number sense.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Numbers 1-10",
              "description": "Dive into the world of numbers and learn to recognize and count from 1 to 10.",
              "image_path": "https://source.unsplash.com/500x500/?number-1-10",
              "type": "CORE"
            },
            {
              "name": "Exploring Counting Patterns",
              "description": "Identify patterns and sequences in counting, boosting cognitive development.",
              "image_path": "https://source.unsplash.com/500x500/?counting-patterns",
              "type": "CORE"
            },
            {
              "name": "Counting with Everyday Objects",
              "description": "Apply your counting skills in real-life scenarios using everyday objects.",
              "image_path": "https://source.unsplash.com/500x500/?counting-objects",
              "type": "CORE"
            },
            {
              "name": "Introduction to Number Lines",
              "description": "Discover number lines as a visual aid to understand the order and value of numbers.",
              "image_path": "https://source.unsplash.com/500x500/?number-line",
              "type": "CORE"
            },
            {
              "name": "Counting Beyond 10",
              "description": "Boost your counting prowess by learning to count beyond 10.",
              "image_path": "https://source.unsplash.com/500x500/?counting",
              "type": "CORE"
            },
            {
              "name": "Interactive Counting Games",
              "description": "Play fun games to reinforce counting skills and promote mathematical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?counting-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Counting with Music",
              "description": "Combine music and numbers to make counting an enjoyable activity.",
              "image_path": "https://source.unsplash.com/500x500/?music-counting",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Shapes and Patterns",
          "description": "Exploring the world of shapes and patterns to enhance spatial reasoning and creativity.",
          "image_path": "https://source.unsplash.com/500x500/?shapes",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Recognizing Basic Shapes",
              "description": "Learn about different basic shapes and how to recognize them in your surroundings.",
              "image_path": "https://source.unsplash.com/500x500/?basic-shapes",
              "type": "CORE"
            },
            {
              "name": "Fun with Pattern Blocks",
              "description": "Use pattern blocks to create and explore different shapes and designs.",
              "image_path": "https://source.unsplash.com/500x500/?pattern-blocks",
              "type": "CORE"
            },
            {
              "name": "Shapes in Our World",
              "description": "Discover the application of shapes in real-world objects around us.",
              "image_path": "https://source.unsplash.com/500x500/?shapes-world",
              "type": "CORE"
            },
            {
              "name": "Creating Patterns",
              "description": "Exercise your creativity by designing unique patterns using different shapes.",
              "image_path": "https://source.unsplash.com/500x500/?creating-patterns",
              "type": "CORE"
            },
            {
              "name": "Sorting and Classifying Shapes",
              "description": "Learn to classify and sort shapes based on their attributes and properties.",
              "image_path": "https://source.unsplash.com/500x500/?sorting-shapes",
              "type": "CORE"
            },
            {
              "name": "Natures Shapes and Patterns",
              "description": "Explore the fascinating shapes and patterns found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?nature-patterns",
              "type": "ELECTIVE"
            },
            {
              "name": "Building with Shapes",
              "description": "Learn about the role of shapes in construction and design by building your own structures.",
              "image_path": "https://source.unsplash.com/500x500/?building-shapes",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Addition and Subtraction",
          "description": "Unveiling the magic of addition and subtraction to nurture mathematical thinking.",
          "image_path": "https://source.unsplash.com/500x500/?addition-subtraction",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Addition",
              "description": "Discover the concept of addition through fun activities and practical examples.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-addition",
              "type": "CORE"
            },
            {
              "name": "Interactive Addition Games",
              "description": "Play interactive games to reinforce your understanding of addition.",
              "image_path": "https://source.unsplash.com/500x500/?addition-games",
              "type": "CORE"
            },
            {
              "name": "Introduction to Subtraction",
              "description": "Step into the world of subtraction with engaging visuals and exercises.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-subtraction",
              "type": "CORE"
            },
            {
              "name": "Interactive Subtraction Games",
              "description": "Engage in games that help understand and practice the concept of subtraction.",
              "image_path": "https://source.unsplash.com/500x500/?subtraction-games",
              "type": "CORE"
            },
            {
              "name": "Addition and Subtraction in Daily Life",
              "description": "Apply addition and subtraction concepts to solve real-life problems.",
              "image_path": "https://source.unsplash.com/500x500/?addition-subtraction-life",
              "type": "CORE"
            },
            {
              "name": "Story Problems: Addition and Subtraction",
              "description": "Improve problem-solving skills by solving story-based addition and subtraction problems.",
              "image_path": "https://source.unsplash.com/500x500/?story-problems",
              "type": "ELECTIVE"
            },
            {
              "name": "Math Magic: Addition and Subtraction Tricks",
              "description": "Learn interesting math tricks related to addition and subtraction.",
              "image_path": "https://source.unsplash.com/500x500/?math-tricks",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurements and Comparisons",
          "description": "Navigating the world of measurements and comparisons to enhance logical reasoning and observational skills.",
          "image_path": "https://source.unsplash.com/500x500/?measurements",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Measurements",
              "description": "Understand the basic concept of measurements and their necessity in our daily lives.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-measurements",
              "type": "CORE"
            },
            {
              "name": "Comparing Lengths and Heights",
              "description": "Explore and compare the lengths and heights of different objects around you.",
              "image_path": "https://source.unsplash.com/500x500/?comparing-lengths",
              "type": "CORE"
            },
            {
              "name": "Comparing Weights",
              "description": "Experience the concept of weight by comparing different objects.",
              "image_path": "https://source.unsplash.com/500x500/?comparing-weights",
              "type": "CORE"
            },
            {
              "name": "Comparing Volumes",
              "description": "Learn about volume by comparing the capacity of different containers.",
              "image_path": "https://source.unsplash.com/500x500/?comparing-volumes",
              "type": "CORE"
            },
            {
              "name": "Measurements in Everyday Life",
              "description": "Understand the importance of measurements in day-to-day activities and tasks.",
              "image_path": "https://source.unsplash.com/500x500/?measurements-life",
              "type": "CORE"
            },
            {
              "name": "Exploring Measuring Tools",
              "description": "Get hands-on experience with different tools used for measurement.",
              "image_path": "https://source.unsplash.com/500x500/?measuring-tools",
              "type": "ELECTIVE"
            },
            {
              "name": "Measurement-Based Projects",
              "description": "Apply your understanding of measurements to complete interesting projects.",
              "image_path": "https://source.unsplash.com/500x500/?measurement-projects",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Sorting and Classifying",
          "description": "Delving into the art of sorting and classifying, fundamental for logical thinking and organization skills.",
          "image_path": "https://source.unsplash.com/500x500/?sorting",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Sorting",
              "description": "Learn the basic concept of sorting and its importance in everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-sorting",
              "type": "CORE"
            },
            {
              "name": "Sorting Objects by Shape and Size",
              "description": "Practice sorting objects based on their shapes and sizes, enhancing observational skills.",
              "image_path": "https://source.unsplash.com/500x500/?sorting-shapes-sizes",
              "type": "CORE"
            },
            {
              "name": "Sorting Objects by Color",
              "description": "Boost your cognitive skills by sorting objects based on their color.",
              "image_path": "https://source.unsplash.com/500x500/?sorting-colors",
              "type": "CORE"
            },
            {
              "name": "Introduction to Classifying",
              "description": "Discover the concept of classifying objects based on shared characteristics.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-classifying",
              "type": "CORE"
            },
            {
              "name": "Classifying Objects in Nature",
              "description": "Apply classification skills to group natural objects based on common features.",
              "image_path": "https://source.unsplash.com/500x500/?classifying-nature",
              "type": "CORE"
            },
            {
              "name": "Interactive Sorting and Classifying Games",
              "description": "Enjoy engaging games that reinforce sorting and classifying concepts.",
              "image_path": "https://source.unsplash.com/500x500/?sorting-classifying-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Sorting and Classifying in Daily Life",
              "description": "Understand the role of sorting and classifying in everyday situations.",
              "image_path": "https://source.unsplash.com/500x500/?sorting-classifying-life",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Understanding Time",
          "description": "Embarking on a journey through time, understanding days, weeks, and the concept of clocks.",
          "image_path": "https://source.unsplash.com/500x500/?time",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Days of the Week",
              "description": "Grasp the concept of a week and learn the names of the seven days.",
              "image_path": "https://source.unsplash.com/500x500/?days-of-the-week",
              "type": "CORE"
            },
            {
              "name": "The Four Seasons",
              "description": "Explore the changing seasons over a year and understand their unique characteristics.",
              "image_path": "https://source.unsplash.com/500x500/?four-seasons",
              "type": "CORE"
            },
            {
              "name": "Introduction to Clocks",
              "description": "Meet the clock! Learn to identify the hour and minute hands and their functions.",
              "image_path": "https://source.unsplash.com/500x500/?clocks",
              "type": "CORE"
            },
            {
              "name": "Telling Time to the Hour",
              "description": "Learn to read the time on analog clocks to the nearest hour.",
              "image_path": "https://source.unsplash.com/500x500/?telling-time",
              "type": "CORE"
            },
            {
              "name": "Time in Our Daily Routine",
              "description": "Understand the role of time in our daily activities and routines.",
              "image_path": "https://source.unsplash.com/500x500/?daily-routine",
              "type": "CORE"
            },
            {
              "name": "Story Time: Clocks and Time",
              "description": "Engage with story-based activities to understand the concept of time better.",
              "image_path": "https://source.unsplash.com/500x500/?story-time",
              "type": "ELECTIVE"
            },
            {
              "name": "Creating a Personalized Schedule",
              "description": "Design your own daily schedule while learning to manage and understand time.",
              "image_path": "https://source.unsplash.com/500x500/?personal-schedule",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Money Basics",
          "description": "A primer into the world of money, understanding its value and the basics of buying and selling.",
          "image_path": "https://source.unsplash.com/500x500/?money",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "What is Money?",
              "description": "Discover the concept of money, its importance, and how its used in our daily lives.",
              "image_path": "https://source.unsplash.com/500x500/?what-is-money",
              "type": "CORE"
            },
            {
              "name": "Understanding Coin Values",
              "description": "Learn about different coins and their respective values.",
              "image_path": "https://source.unsplash.com/500x500/?coin-values",
              "type": "CORE"
            },
            {
              "name": "Understanding Bill Values",
              "description": "Get familiar with various bills and understand their value.",
              "image_path": "https://source.unsplash.com/500x500/?bill-values",
              "type": "CORE"
            },
            {
              "name": "Making Simple Purchases",
              "description": "Simulate simple transactions to understand the basics of buying and selling.",
              "image_path": "https://source.unsplash.com/500x500/?simple-purchases",
              "type": "CORE"
            },
            {
              "name": "Money Math: Adding and Subtracting Money",
              "description": "Combine math with money understanding by adding and subtracting bills and coins.",
              "image_path": "https://source.unsplash.com/500x500/?money-math",
              "type": "CORE"
            },
            {
              "name": "Playing Shop: A Real Life Money Game",
              "description": "Experience using money through a fun and interactive shop game.",
              "image_path": "https://source.unsplash.com/500x500/?playing-shop",
              "type": "ELECTIVE"
            },
            {
              "name": "Saving and Spending: A Basic Introduction",
              "description": "Learn the basic concepts of saving and spending money wisely.",
              "image_path": "https://source.unsplash.com/500x500/?saving-spending",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math in Nature",
          "description": "Discovering the hidden math in nature, exploring patterns, shapes, and numbers in the world around us.",
          "image_path": "https://source.unsplash.com/500x500/?nature-math",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Finding Shapes in Nature",
              "description": "Explore the outdoors to find and identify different shapes in natural objects.",
              "image_path": "https://source.unsplash.com/500x500/?shapes-in-nature",
              "type": "CORE"
            },
            {
              "name": "Counting in Nature",
              "description": "Practice counting with the help of elements in nature, from petals on a flower to leaves on a tree.",
              "image_path": "https://source.unsplash.com/500x500/?counting-nature",
              "type": "CORE"
            },
            {
              "name": "Nature‘s Patterns",
              "description": "Uncover the beautiful patterns in nature and see how they repeat over and over.",
              "image_path": "https://source.unsplash.com/500x500/?patterns-nature",
              "type": "CORE"
            },
            {
              "name": "Symmetry in Nature",
              "description": "Discover the concept of symmetry by observing balance and reflection in natural elements.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry-nature",
              "type": "CORE"
            },
            {
              "name": "Outdoor Math Activities",
              "description": "Engage in fun outdoor activities that help reinforce your mathematical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?outdoor-math",
              "type": "ELECTIVE"
            },
            {
              "name": "Creating Art from Nature",
              "description": "Use natural elements to create artwork while practicing counting, sorting, and pattern-making.",
              "image_path": "https://source.unsplash.com/500x500/?nature-art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math in Music",
          "description": "Unveiling the intersection of mathematics and music, exploring rhythm, pattern, and pitch through fun activities.",
          "image_path": "https://source.unsplash.com/500x500/?music-math",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Rhythm and Counting",
              "description": "Learn to recognize and replicate rhythms, reinforcing counting skills in a fun way.",
              "image_path": "https://source.unsplash.com/500x500/?rhythm-counting",
              "type": "CORE"
            },
            {
              "name": "Patterns in Music",
              "description": "Identify patterns in songs and melodies, observing how they repeat and vary.",
              "image_path": "https://source.unsplash.com/500x500/?patterns-music",
              "type": "CORE"
            },
            {
              "name": "Understanding Pitch",
              "description": "Explore the concept of high and low pitches and connect it with the concept of 'more than' and 'less than'.",
              "image_path": "https://source.unsplash.com/500x500/?understanding-pitch",
              "type": "CORE"
            },
            {
              "name": "Making Musical Instruments",
              "description": "Create simple musical instruments and understand the math involved in their design.",
              "image_path": "https://source.unsplash.com/500x500/?making-instruments",
              "type": "CORE"
            },
            {
              "name": "Math-Based Music Games",
              "description": "Engage in music-themed games that enhance mathematical understanding and skills.",
              "image_path": "https://source.unsplash.com/500x500/?music-math-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Exploring Music Styles and Cultures",
              "description": "Learn about various music styles and cultures, integrating concepts of counting and patterns.",
              "image_path": "https://source.unsplash.com/500x500/?music-styles-cultures",
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
          "name": "Fun with Numbers",
          "description": "An enchanting journey into the world of numbers, instilling a fundamental understanding and love for arithmetic.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Discovering Numbers",
              "description": "Introducing the magical realm of numbers and their role in everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?numbers,kids",
              "type": "CORE"
            },
            {
              "name": "Counting and Comparing",
              "description": "Exploring the excitement of counting and comparing numbers.",
              "image_path": "https://source.unsplash.com/500x500/?counting",
              "type": "CORE"
            },
            {
              "name": "Patterns in Numbers",
              "description": "Unveiling the secrets of patterns hidden in numbers.",
              "image_path": "https://source.unsplash.com/500x500/?patterns",
              "type": "CORE"
            },
            {
              "name": "Numbers in Nature",
              "description": "Discovering how numbers make sense of the world around us.",
              "image_path": "https://source.unsplash.com/500x500/?nature,numbers",
              "type": "CORE"
            },
            {
              "name": "Amazing Arithmetic",
              "description": "A playful introduction to addition and subtraction.",
              "image_path": "https://source.unsplash.com/500x500/?arithmetic",
              "type": "CORE"
            },
            {
              "name": "Numbers in Music",
              "description": "Discovering how numbers are integral to the rhythm and structure of music.",
              "image_path": "https://source.unsplash.com/500x500/?music,numbers",
              "type": "ELECTIVE"
            },
            {
              "name": "Math and Art",
              "description": "Exploring how numbers and shapes form the basis of beautiful art.",
              "image_path": "https://source.unsplash.com/500x500/?art,numbers",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Shapes and Spaces",
          "description": "Embarking on a fascinating exploration of shapes and how they define the world we live in.",
          "image_path": "https://source.unsplash.com/500x500/?shapes",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Shapes Around Us",
              "description": "Recognizing and naming different shapes in our environment.",
              "image_path": "https://source.unsplash.com/500x500/?shapes,kids",
              "type": "CORE"
            },
            {
              "name": "Building with Shapes",
              "description": "Understanding how shapes come together to form objects and structures.",
              "image_path": "https://source.unsplash.com/500x500/?building,shapes",
              "type": "CORE"
            },
            {
              "name": "Symmetry in Shapes",
              "description": "Exploring the concept of symmetry in everyday shapes.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Shapes in Nature",
              "description": "Discovering the beautiful variety of shapes present in nature.",
              "image_path": "https://source.unsplash.com/500x500/?nature,shapes",
              "type": "CORE"
            },
            {
              "name": "Introduction to 3D Shapes",
              "description": "Diving into the world of 3D shapes and understanding their properties.",
              "image_path": "https://source.unsplash.com/500x500/?3dshapes",
              "type": "CORE"
            },
            {
              "name": "Shapes in Art",
              "description": "Exploring how artists use shapes to create stunning artwork.",
              "image_path": "https://source.unsplash.com/500x500/?art,shapes",
              "type": "ELECTIVE"
            },
            {
              "name": "Math Origami",
              "description": "Merging math and art through the Japanese art of paper folding.",
              "image_path": "https://source.unsplash.com/500x500/?origami",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Magical Measurement",
          "description": "An intriguing dive into the practicalities of measurement and its application in the real world.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Length",
              "description": "Grasping the concept of length and learning how to measure it.",
              "image_path": "https://source.unsplash.com/500x500/?length",
              "type": "CORE"
            },
            {
              "name": "Weight Wonders",
              "description": "Investigating the concept of weight and learning to measure it.",
              "image_path": "https://source.unsplash.com/500x500/?weight",
              "type": "CORE"
            },
            {
              "name": "Fun with Time",
              "description": "Mastering the art of telling time and understanding its importance.",
              "image_path": "https://source.unsplash.com/500x500/?clock",
              "type": "CORE"
            },
            {
              "name": "Exploring Volume",
              "description": "Exploring the concept of volume and its application in everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?volume",
              "type": "CORE"
            },
            {
              "name": "Introduction to Money",
              "description": "Understanding the value of money and basic transactions.",
              "image_path": "https://source.unsplash.com/500x500/?money",
              "type": "CORE"
            },
            {
              "name": "Cooking and Measurement",
              "description": "Applying measurement concepts to prepare simple recipes.",
              "image_path": "https://source.unsplash.com/500x500/?cooking",
              "type": "ELECTIVE"
            },
            {
              "name": "Measurement in Sports",
              "description": "Exploring how measurements play a critical role in various sports.",
              "image_path": "https://source.unsplash.com/500x500/?sports",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data and Decisions",
          "description": "Unleashing the power of data and decision-making, instilling critical thinking skills.",
          "image_path": "https://source.unsplash.com/500x500/?data",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "What is Data?",
              "description": "Introducing the concept of data and how it helps us make decisions.",
              "image_path": "https://source.unsplash.com/500x500/?data,kids",
              "type": "CORE"
            },
            {
              "name": "Collecting Data",
              "description": "Learning the process of collecting data through surveys and observations.",
              "image_path": "https://source.unsplash.com/500x500/?data,collection",
              "type": "CORE"
            },
            {
              "name": "Organizing Data",
              "description": "Mastering the art of organizing data in lists and tables.",
              "image_path": "https://source.unsplash.com/500x500/?data,organizing",
              "type": "CORE"
            },
            {
              "name": "Graphing Data",
              "description": "Understanding how to represent data visually using bar and picture graphs.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Interpreting Data",
              "description": "Developing the skill to interpret data and make informed decisions.",
              "image_path": "https://source.unsplash.com/500x500/?data,interpretation",
              "type": "CORE"
            },
            {
              "name": "Data in Sports",
              "description": "Investigating how data is used in sports to improve performance.",
              "image_path": "https://source.unsplash.com/500x500/?sports,data",
              "type": "ELECTIVE"
            },
            {
              "name": "Data and Weather",
              "description": "Exploring how meteorologists use data to predict weather patterns.",
              "image_path": "https://source.unsplash.com/500x500/?weather,data",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Problem-Solving Puzzles",
          "description": "A stimulating voyage into the world of mathematical puzzles that enhances problem-solving skills and logical thinking.",
          "image_path": "https://source.unsplash.com/500x500/?puzzles",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Puzzles",
              "description": "Diving into the engaging world of puzzles and their different types.",
              "image_path": "https://source.unsplash.com/500x500/?puzzles,kids",
              "type": "CORE"
            },
            {
              "name": "Solving Number Puzzles",
              "description": "Unraveling the mysteries of number puzzles and their solutions.",
              "image_path": "https://source.unsplash.com/500x500/?numbers,puzzles",
              "type": "CORE"
            },
            {
              "name": "Shape Puzzles",
              "description": "Exploring the use of shapes in creating and solving engaging puzzles.",
              "image_path": "https://source.unsplash.com/500x500/?shapes,puzzles",
              "type": "CORE"
            },
            {
              "name": "Pattern Recognition",
              "description": "Strengthening problem-solving skills through pattern recognition in puzzles.",
              "image_path": "https://source.unsplash.com/500x500/?patterns,puzzles",
              "type": "CORE"
            },
            {
              "name": "Sequences and Series",
              "description": "Introducing sequences and series through intriguing puzzles.",
              "image_path": "https://source.unsplash.com/500x500/?sequences,series",
              "type": "CORE"
            },
            {
              "name": "Puzzles in Games",
              "description": "Discovering the role of puzzles and problem-solving in popular children‘s games.",
              "image_path": "https://source.unsplash.com/500x500/?games,puzzles",
              "type": "ELECTIVE"
            },
            {
              "name": "Creating Your Own Puzzle",
              "description": "Applying learned problem-solving strategies to create unique personal puzzles.",
              "image_path": "https://source.unsplash.com/500x500/?creativity,puzzles",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Tales of Time",
          "description": "A thrilling exploration of time, unraveling its secrets and understanding its role in our daily lives.",
          "image_path": "https://source.unsplash.com/500x500/?clock,time",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Time",
              "description": "Introducing the concept of time and how it‘s measured.",
              "image_path": "https://source.unsplash.com/500x500/?clock,kids",
              "type": "CORE"
            },
            {
              "name": "Telling the Time",
              "description": "Learning to read the time from analog and digital clocks.",
              "image_path": "https://source.unsplash.com/500x500/?clock,reading",
              "type": "CORE"
            },
            {
              "name": "Days, Weeks, and Months",
              "description": "Understanding the structure of days, weeks, and months in a year.",
              "image_path": "https://source.unsplash.com/500x500/?calendar",
              "type": "CORE"
            },
            {
              "name": "Time in Our Lives",
              "description": "Exploring how time affects our daily routines and activities.",
              "image_path": "https://source.unsplash.com/500x500/?daily,routine",
              "type": "CORE"
            },
            {
              "name": "Time Zones Around the World",
              "description": "Discovering the fascinating world of time zones and how they connect us globally.",
              "image_path": "https://source.unsplash.com/500x500/?world,clock",
              "type": "CORE"
            },
            {
              "name": "Time in History",
              "description": "Investigating historical events and understanding the concept of past, present, and future.",
              "image_path": "https://source.unsplash.com/500x500/?history,clock",
              "type": "ELECTIVE"
            },
            {
              "name": "Art and Time",
              "description": "Exploring how the concept of time is depicted in art.",
              "image_path": "https://source.unsplash.com/500x500/?art,clock",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Fraction Fun",
          "description": "An engaging journey into the world of fractions, discovering their importance and their real-world applications.",
          "image_path": "https://source.unsplash.com/500x500/?fractions",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "What is a Fraction?",
              "description": "Introducing the concept of fractions and their basic representation.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,basics",
              "type": "CORE"
            },
            {
              "name": "Understanding Numerator and Denominator",
              "description": "Understanding the roles of the numerator and the denominator in fractions.",
              "image_path": "https://source.unsplash.com/500x500/?numerator,denominator",
              "type": "CORE"
            },
            {
              "name": "Comparing Fractions",
              "description": "Learning to compare fractions using a variety of methods.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,comparing",
              "type": "CORE"
            },
            {
              "name": "Fractions in Everyday Life",
              "description": "Exploring the use of fractions in everyday situations and tasks.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,life",
              "type": "CORE"
            },
            {
              "name": "Fraction Art",
              "description": "Merging art and math by creating beautiful designs using fractions.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,art",
              "type": "CORE"
            },
            {
              "name": "Fraction Cooking",
              "description": "Understanding the role of fractions in cooking and baking.",
              "image_path": "https://source.unsplash.com/500x500/?fractions,cooking",
              "type": "ELECTIVE"
            },
            {
              "name": "Music and Fractions",
              "description": "Exploring how fractions are used in music notation and rhythm.",
              "image_path": "https://source.unsplash.com/500x500/?music,fractions",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math in Music",
          "description": "Discovering the magic of mathematics hidden in the rhythms and patterns of music.",
          "image_path": "https://source.unsplash.com/500x500/?music,math",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Patterns in Music",
              "description": "Identifying and understanding repetitive patterns in different musical genres.",
              "image_path": "https://source.unsplash.com/500x500/?music,patterns",
              "type": "CORE"
            },
            {
              "name": "Rhythm and Counting",
              "description": "Exploring how counting and fractions are used to create musical rhythms.",
              "image_path": "https://source.unsplash.com/500x500/?music,rhythm",
              "type": "CORE"
            },
            {
              "name": "Understanding Musical Scales",
              "description": "Introducing musical scales and the mathematics that creates them.",
              "image_path": "https://source.unsplash.com/500x500/?music,scales",
              "type": "CORE"
            },
            {
              "name": "Math and Musical Instruments",
              "description": "Learning about the mathematical principles used in the design of musical instruments.",
              "image_path": "https://source.unsplash.com/500x500/?music,instruments",
              "type": "CORE"
            },
            {
              "name": "Composing Your Own Song",
              "description": "Applying mathematical concepts to create a unique musical composition.",
              "image_path": "https://source.unsplash.com/500x500/?music,composition",
              "type": "ELECTIVE"
            },
            {
              "name": "Music and Emotions",
              "description": "Exploring how music can express a range of emotions and tell a story.",
              "image_path": "https://source.unsplash.com/500x500/?music,emotions",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry in Nature",
          "description": "Embarking on a fascinating journey to discover the wonderful patterns and shapes present in the natural world.",
          "image_path": "https://source.unsplash.com/500x500/?geometry,nature",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Patterns in Nature",
              "description": "Exploring and identifying the recurring patterns found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?patterns,nature",
              "type": "CORE"
            },
            {
              "name": "Shapes in Nature",
              "description": "Discovering the wide variety of shapes that occur naturally in our environment.",
              "image_path": "https://source.unsplash.com/500x500/?shapes,nature",
              "type": "CORE"
            },
            {
              "name": "Symmetry in Nature",
              "description": "Learning about the concept of symmetry through examples from nature.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry,nature",
              "type": "CORE"
            },
            {
              "name": "Fractals in Nature",
              "description": "Exploring the fascinating world of fractals and where they can be found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?fractals,nature",
              "type": "CORE"
            },
            {
              "name": "Nature Art",
              "description": "Creating beautiful art inspired by the geometric shapes and patterns found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?nature,art",
              "type": "ELECTIVE"
            },
            {
              "name": "Nature Walk",
              "description": "Applying learned concepts during a nature walk to observe and appreciate the geometry around us.",
              "image_path": "https://source.unsplash.com/500x500/?nature,walk",
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
          "name": "Numbers and Operations",
          "description": "Dive into the magical world of numbers and learn to manipulate them in new ways.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Place Value Wonders",
              "description": "Exploring the importance of each digit‘s position in a number.",
              "image_path": "https://source.unsplash.com/500x500/?place-value",
              "type": "CORE"
            },
            {
              "name": "Adding Mastery",
              "description": "Unlocking the secrets to quick and accurate addition.",
              "image_path": "https://source.unsplash.com/500x500/?adding",
              "type": "CORE"
            },
            {
              "name": "Subtraction Magic",
              "description": "Master the power of subtraction with ease and confidence.",
              "image_path": "https://source.unsplash.com/500x500/?subtraction",
              "type": "CORE"
            },
            {
              "name": "Multiplication Journey",
              "description": "Embark on an exciting journey to understand multiplication.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication",
              "type": "CORE"
            },
            {
              "name": "Dividing with Confidence",
              "description": "Discover the world of division without fear or hesitation.",
              "image_path": "https://source.unsplash.com/500x500/?division",
              "type": "CORE"
            },
            {
              "name": "Mental Math Magic",
              "description": "Enhance your mental agility through efficient mental math techniques.",
              "image_path": "https://source.unsplash.com/500x500/?mental-math",
              "type": "ELECTIVE"
            },
            {
              "name": "Numbers in Daily Life",
              "description": "Explore how numbers shape our daily lives in unexpected ways.",
              "image_path": "https://source.unsplash.com/500x500/?numbers-life",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry",
          "description": "Embark on a geometric journey to explore shapes, angles, and spaces.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Identifying Shapes",
              "description": "Familiarize yourself with different shapes and their unique characteristics.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Understanding Angles",
              "description": "Dive deep into the world of angles and learn how they work.",
              "image_path": "https://source.unsplash.com/500x500/?angles",
              "type": "CORE"
            },
            {
              "name": "Exploring Symmetry",
              "description": "Uncover the balanced beauty of symmetry in shapes and figures.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Area and Perimeter",
              "description": "Discover how to measure the space inside and around shapes.",
              "image_path": "https://source.unsplash.com/500x500/?area-perimeter",
              "type": "CORE"
            },
            {
              "name": "Three-Dimensional Shapes",
              "description": "Step into the third dimension to explore cubes, spheres, and more.",
              "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
              "type": "CORE"
            },
            {
              "name": "Fun with Tessellations",
              "description": "Create fascinating patterns by fitting shapes together perfectly.",
              "image_path": "https://source.unsplash.com/500x500/?tessellations",
              "type": "ELECTIVE"
            },
            {
              "name": "Geometry in Nature",
              "description": "Unearth the geometric secrets hidden within the natural world.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-nature",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurement",
          "description": "Step into the world of measurement, where size, distance and volume come to life.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Units of Length",
              "description": "Learn to measure how long or short things are in the world around you.",
              "image_path": "https://source.unsplash.com/500x500/?length",
              "type": "CORE"
            },
            {
              "name": "Weighing It Up",
              "description": "Discover how to weigh different objects and understand what mass means.",
              "image_path": "https://source.unsplash.com/500x500/?weight",
              "type": "CORE"
            },
            {
              "name": "Volume Ventures",
              "description": "Explore the concept of volume and learn how to measure it effectively.",
              "image_path": "https://source.unsplash.com/500x500/?volume",
              "type": "CORE"
            },
            {
              "name": "Time‘s Ticking",
              "description": "Understand the concept of time and how to measure it accurately.",
              "image_path": "https://source.unsplash.com/500x500/?time",
              "type": "CORE"
            },
            {
              "name": "Temperature Tales",
              "description": "Dive into the world of temperature and learn how to measure it correctly.",
              "image_path": "https://source.unsplash.com/500x500/?temperature",
              "type": "CORE"
            },
            {
              "name": "Comparing Sizes",
              "description": "Explore the art of comparing different sizes in a fun and engaging way.",
              "image_path": "https://source.unsplash.com/500x500/?sizes",
              "type": "ELECTIVE"
            },
            {
              "name": "Measurement in Cooking",
              "description": "Learn how measurement is an essential part of creating culinary masterpieces.",
              "image_path": "https://source.unsplash.com/500x500/?cooking-measurement",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data and Probability",
          "description": "Unleash your data detective skills and predict the future with probability.",
          "image_path": "https://source.unsplash.com/500x500/?data-probability",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Charting it Out",
              "description": "Discover how to use charts to represent and understand data.",
              "image_path": "https://source.unsplash.com/500x500/?charts",
              "type": "CORE"
            },
            {
              "name": "Picturing Probability",
              "description": "Unearth the chances of events happening using fun probability concepts.",
              "image_path": "https://source.unsplash.com/500x500/?probability",
              "type": "CORE"
            },
            {
              "name": "Tally Marks Triumph",
              "description": "Master the art of counting using tally marks.",
              "image_path": "https://source.unsplash.com/500x500/?tally-marks",
              "type": "CORE"
            },
            {
              "name": "Reading Graphs",
              "description": "Learn to interpret different types of graphs to extract valuable information.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Data in the Real World",
              "description": "Discover how data shapes our understanding of the world.",
              "image_path": "https://source.unsplash.com/500x500/?data",
              "type": "CORE"
            },
            {
              "name": "Creating Surveys",
              "description": "Explore the process of creating surveys and analyzing the results.",
              "image_path": "https://source.unsplash.com/500x500/?surveys",
              "type": "ELECTIVE"
            },
            {
              "name": "Making Predictions",
              "description": "Harness the power of probability to predict the outcomes of various scenarios.",
              "image_path": "https://source.unsplash.com/500x500/?predictions",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Money and Time",
          "description": "Venture into the practical world of money and time, equipping students with essential life skills.",
          "image_path": "https://source.unsplash.com/500x500/?money-time",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Money",
              "description": "Become acquainted with coins and notes and their different values.",
              "image_path": "https://source.unsplash.com/500x500/?money",
              "type": "CORE"
            },
            {
              "name": "Counting Money",
              "description": "Practice adding and subtracting money amounts to make purchases or give change.",
              "image_path": "https://source.unsplash.com/500x500/?counting-money",
              "type": "CORE"
            },
            {
              "name": "Money in Everyday Life",
              "description": "Recognize the role of money in daily activities and decision making.",
              "image_path": "https://source.unsplash.com/500x500/?shopping",
              "type": "CORE"
            },
            {
              "name": "Understanding Time",
              "description": "Discover how time is measured and the importance of punctuality.",
              "image_path": "https://source.unsplash.com/500x500/?clock",
              "type": "CORE"
            },
            {
              "name": "Telling Time",
              "description": "Learn how to read analog and digital clocks and understand the 24-hour format.",
              "image_path": "https://source.unsplash.com/500x500/?telling-time",
              "type": "CORE"
            },
            {
              "name": "Planning and Scheduling",
              "description": "Apply time management skills to create simple schedules and plans.",
              "image_path": "https://source.unsplash.com/500x500/?scheduling",
              "type": "ELECTIVE"
            },
            {
              "name": "Money and Time in Games",
              "description": "Apply understanding of money and time in fun and engaging game scenarios.",
              "image_path": "https://source.unsplash.com/500x500/?board-game",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Symmetry and Transformations",
          "description": "Journey through the captivating world of symmetry and transformations, where mathematics meets art.",
          "image_path": "https://source.unsplash.com/500x500/?symmetry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Symmetry",
              "description": "Discover the fascinating concept of symmetry and its prevalence in the world around us.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Symmetry in Nature",
              "description": "Explore how symmetry manifests in nature, from leaves to animals and beyond.",
              "image_path": "https://source.unsplash.com/500x500/?nature-symmetry",
              "type": "CORE"
            },
            {
              "name": "Reflections and Rotations",
              "description": "Dive into transformations by learning about reflections and rotations.",
              "image_path": "https://source.unsplash.com/500x500/?reflections-rotations",
              "type": "CORE"
            },
            {
              "name": "Translating Shapes",
              "description": "Learn how to move shapes without changing their form in translations.",
              "image_path": "https://source.unsplash.com/500x500/?translating-shapes",
              "type": "CORE"
            },
            {
              "name": "Symmetry in Design",
              "description": "Appreciate the role of symmetry in design, architecture, and art.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry-design",
              "type": "CORE"
            },
            {
              "name": "Creating Symmetric Art",
              "description": "Unleash your creativity by creating your own symmetrical artwork.",
              "image_path": "https://source.unsplash.com/500x500/?symmetric-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Exploring Tessellations",
              "description": "Dive into the mesmerizing world of tessellations, where math meets art.",
              "image_path": "https://source.unsplash.com/500x500/?tessellations",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry and Spatial Sense",
          "description": "Embark on a geometric journey, honing spatial awareness and a deeper understanding of the shapes and spaces that make up our world.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Geometry",
              "description": "Discover the foundations of geometry and the importance of shapes in our world.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Shapes Around Us",
              "description": "Identify various shapes in the environment and understand their properties.",
              "image_path": "https://source.unsplash.com/500x500/?shapes-environment",
              "type": "CORE"
            },
            {
              "name": "Understanding Angles",
              "description": "Dive into the world of angles and learn how to identify and measure them.",
              "image_path": "https://source.unsplash.com/500x500/?angles",
              "type": "CORE"
            },
            {
              "name": "Mapping and Directions",
              "description": "Navigate your way around by learning about maps, coordinates, and directions.",
              "image_path": "https://source.unsplash.com/500x500/?maps-directions",
              "type": "CORE"
            },
            {
              "name": "3D Shapes and Volume",
              "description": "Enter the world of 3D shapes and understand how to calculate volume.",
              "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
              "type": "CORE"
            },
            {
              "name": "Creating Geometric Art",
              "description": "Unleash your creativity by making your own artwork using geometric shapes.",
              "image_path": "https://source.unsplash.com/500x500/?geometric-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Building Models",
              "description": "Apply your knowledge of 3D shapes to build models of real-world structures.",
              "image_path": "https://source.unsplash.com/500x500/?building-models",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Real World Applications",
          "description": "Discover the fascinating application of math in the world around us, making connections between classroom learning and everyday life.",
          "image_path": "https://source.unsplash.com/500x500/?real-world-math",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Math in the Kitchen",
              "description": "Explore the exciting use of mathematics in cooking and baking.",
              "image_path": "https://source.unsplash.com/500x500/?kitchen-math",
              "type": "CORE"
            },
            {
              "name": "Math in Sports",
              "description": "Discover how mathematical concepts help in understanding and excelling in sports.",
              "image_path": "https://source.unsplash.com/500x500/?sports-math",
              "type": "CORE"
            },
            {
              "name": "Math in Music",
              "description": "Delve into the fascinating relationship between mathematics and music.",
              "image_path": "https://source.unsplash.com/500x500/?music-math",
              "type": "CORE"
            },
            {
              "name": "Math in Art",
              "description": "Discover how math concepts play an integral part in creating and understanding art.",
              "image_path": "https://source.unsplash.com/500x500/?art-math",
              "type": "CORE"
            },
            {
              "name": "Math in Nature",
              "description": "Explore the fascinating patterns and mathematical concepts found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?nature-math",
              "type": "ELECTIVE"
            },
            {
              "name": "Math in Games",
              "description": "Find out how math is a key component in the games we love to play.",
              "image_path": "https://source.unsplash.com/500x500/?games-math",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Problem Solving and Logic",
          "description": "Embark on a journey of mathematical mysteries and puzzles, enhancing critical thinking and problem-solving skills.",
          "image_path": "https://source.unsplash.com/500x500/?problem-solving",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Introduction to Problem Solving",
              "description": "Get to grips with the essential strategies to tackle mathematical problems.",
              "image_path": "https://source.unsplash.com/500x500/?problem-solving-intro",
              "type": "CORE"
            },
            {
              "name": "Math Puzzles",
              "description": "Challenge yourself with a variety of exciting math puzzles that test your logical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?math-puzzles",
              "type": "CORE"
            },
            {
              "name": "Math Riddles",
              "description": "Tickle your brain with intriguing math riddles and learn to solve them with logic.",
              "image_path": "https://source.unsplash.com/500x500/?math-riddles",
              "type": "CORE"
            },
            {
              "name": "Decision Making",
              "description": "Understand how to make informed decisions using mathematical reasoning.",
              "image_path": "https://source.unsplash.com/500x500/?decision-making",
              "type": "CORE"
            },
            {
              "name": "Math in Everyday Problems",
              "description": "Recognize how math can help solve everyday problems and dilemmas.",
              "image_path": "https://source.unsplash.com/500x500/?everyday-math",
              "type": "ELECTIVE"
            },
            {
              "name": "Advanced Math Puzzles",
              "description": "Take on a challenge with more complex math puzzles that require creative problem-solving.",
              "image_path": "https://source.unsplash.com/500x500/?advanced-math-puzzles",
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
          "name": "Multiplication Magic",
          "description": "Exploring the magic of multiplication, expanding minds with the wonders of repeated addition.",
          "image_path": "https://source.unsplash.com/500x500/?multiplication",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Multiplication Basics",
              "description": "Unfolding the basic principles of multiplication, setting the foundation of understanding.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication-basic",
              "type": "CORE"
            },
            {
              "name": "Tables Triumph",
              "description": "Mastering multiplication tables to speed up calculation and develop mental math skills.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication-tables",
              "type": "CORE"
            },
            {
              "name": "Multiplication Properties",
              "description": "Discovering the properties of multiplication, a key to simplifying complex calculations.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication-properties",
              "type": "CORE"
            },
            {
              "name": "Real-world Multiplication",
              "description": "Applying multiplication in real-world situations to see its practical use and significance.",
              "image_path": "https://source.unsplash.com/500x500/?real-world-multiplication",
              "type": "CORE"
            },
            {
              "name": "Multiplication Challenges",
              "description": "Stepping up to multiplication challenges that stimulate problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication-challenges",
              "type": "CORE"
            },
            {
              "name": "Times Tables Games",
              "description": "Engaging in fun and exciting times tables games that enhance multiplication fluency.",
              "image_path": "https://source.unsplash.com/500x500/?times-tables-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Multiplication Art",
              "description": "Creating beautiful art using multiplication, where math and creativity intersect.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication-art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Division Discovery",
          "description": "Venturing into the world of division, promoting critical thinking and logical reasoning.",
          "image_path": "https://source.unsplash.com/500x500/?division",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Division Basics",
              "description": "Breaking down the basic principles of division, promoting understanding and fluency.",
              "image_path": "https://source.unsplash.com/500x500/?division-basic",
              "type": "CORE"
            },
            {
              "name": "Division Properties",
              "description": "Unveiling the properties of division, a stepping stone to handle complex calculations.",
              "image_path": "https://source.unsplash.com/500x500/?division-properties",
              "type": "CORE"
            },
            {
              "name": "Real-world Division",
              "description": "Applying division in real-world scenarios to understand its practical implications.",
              "image_path": "https://source.unsplash.com/500x500/?real-world-division",
              "type": "CORE"
            },
            {
              "name": "Long Division",
              "description": "Demystifying long division, turning a daunting concept into a comprehensible one.",
              "image_path": "https://source.unsplash.com/500x500/?long-division",
              "type": "CORE"
            },
            {
              "name": "Division Challenges",
              "description": "Accepting division challenges that stimulate critical thinking and problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?division-challenges",
              "type": "CORE"
            },
            {
              "name": "Division Games",
              "description": "Engaging in thrilling division games, making learning an exciting journey.",
              "image_path": "https://source.unsplash.com/500x500/?division-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Divide and Conquer",
              "description": "Learning to divide large numbers with confidence, the ‘divide and conquer‘ strategy.",
              "image_path": "https://source.unsplash.com/500x500/?divide-and-conquer",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Fraction Fundamentals",
          "description": "Mastering the fundamentals of fractions, making complex concepts easy and fun.",
          "image_path": "https://source.unsplash.com/500x500/?fractions",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Fractions",
              "description": "Grasping the basic concept of fractions, an essential building block of mathematics.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-fractions",
              "type": "CORE"
            },
            {
              "name": "Adding and Subtracting Fractions",
              "description": "Learning the knack of adding and subtracting fractions, boosting mathematical agility.",
              "image_path": "https://source.unsplash.com/500x500/?add-subtract-fractions",
              "type": "CORE"
            },
            {
              "name": "Multiplying and Dividing Fractions",
              "description": "Mastering the art of multiplying and dividing fractions, enhancing numerical proficiency.",
              "image_path": "https://source.unsplash.com/500x500/?multiply-divide-fractions",
              "type": "CORE"
            },
            {
              "name": "Fraction-Decimal Conversion",
              "description": "Exploring the conversion between fractions and decimals, a critical skill in everyday math.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-decimal",
              "type": "CORE"
            },
            {
              "name": "Fraction Word Problems",
              "description": "Tackling word problems involving fractions, improving problem-solving and logical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-problems",
              "type": "CORE"
            },
            {
              "name": "Fun with Fraction Art",
              "description": "Creating visually stunning art using fractions, bridging the gap between math and creativity.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Fraction Games",
              "description": "Playing engaging fraction games, fostering a fun and interactive learning environment.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry Journey",
          "description": "Embarking on a journey through geometry, exploring shapes, patterns, and angles.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Shapes and Patterns",
              "description": "Understanding the beauty of shapes and patterns, the fundamental elements of geometry.",
              "image_path": "https://source.unsplash.com/500x500/?shapes-patterns",
              "type": "CORE"
            },
            {
              "name": "Angles and Lines",
              "description": "Exploring angles and lines, promoting spatial thinking and geometric reasoning.",
              "image_path": "https://source.unsplash.com/500x500/?angles-lines",
              "type": "CORE"
            },
            {
              "name": "Perimeter and Area",
              "description": "Learning to calculate perimeters and areas, applicable skills in real-world situations.",
              "image_path": "https://source.unsplash.com/500x500/?perimeter-area",
              "type": "CORE"
            },
            {
              "name": "3D Shapes",
              "description": "Discovering the wonders of 3D shapes, fostering spatial visualization and understanding.",
              "image_path": "https://source.unsplash.com/500x500/?3d-shapes",
              "type": "CORE"
            },
            {
              "name": "Geometry Challenges",
              "description": "Tackling geometry challenges that stimulate critical thinking and problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-challenges",
              "type": "CORE"
            },
            {
              "name": "Geometry in Nature",
              "description": "Observing and appreciating the presence of geometric patterns in nature, promoting environmental awareness.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-nature",
              "type": "ELECTIVE"
            },
            {
              "name": "Geometry Games",
              "description": "Playing fun geometry games that enhance learning and make the subject enjoyable.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data Interpretation Delight",
          "description": "Unveiling the delight of interpreting data, enhancing critical thinking and decision-making skills.",
          "image_path": "https://source.unsplash.com/500x500/?data",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Data",
              "description": "Grasping the basic concepts of data, a key to understanding the world around us.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-data",
              "type": "CORE"
            },
            {
              "name": "Charts and Graphs",
              "description": "Mastering the art of reading and interpreting charts and graphs, a crucial skill in data interpretation.",
              "image_path": "https://source.unsplash.com/500x500/?charts-graphs",
              "type": "CORE"
            },
            {
              "name": "Data Collection and Analysis",
              "description": "Learning data collection and analysis, fueling curiosity and scientific thinking.",
              "image_path": "https://source.unsplash.com/500x500/?data-collection",
              "type": "CORE"
            },
            {
              "name": "Real-world Data Interpretation",
              "description": "Applying data interpretation skills in real-world scenarios, fostering practical problem-solving abilities.",
              "image_path": "https://source.unsplash.com/500x500/?real-world-data",
              "type": "CORE"
            },
            {
              "name": "Data Interpretation Challenges",
              "description": "Tackling data interpretation challenges that stimulate critical thinking and enhance data literacy.",
              "image_path": "https://source.unsplash.com/500x500/?data-challenges",
              "type": "CORE"
            },
            {
              "name": "Fun with Data Visualization",
              "description": "Creating visually stunning data visualizations, combining creativity with data interpretation.",
              "image_path": "https://source.unsplash.com/500x500/?data-visualization",
              "type": "ELECTIVE"
            },
            {
              "name": "Data in Daily Life",
              "description": "Exploring the role of data in our daily life, fostering data-driven decision making.",
              "image_path": "https://source.unsplash.com/500x500/?daily-data",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Number Sense Nuances",
          "description": "Diving deeper into the nuances of number sense, fostering mental math skills and logical reasoning.",
          "image_path": "https://source.unsplash.com/500x500/?numbers",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Place Value",
              "description": "Delving into the concept of place value, an essential understanding in number sense.",
              "image_path": "https://source.unsplash.com/500x500/?place-value",
              "type": "CORE"
            },
            {
              "name": "Number Comparisons",
              "description": "Comparing and ordering numbers, a fundamental skill in mathematical operations.",
              "image_path": "https://source.unsplash.com/500x500/?number-comparisons",
              "type": "CORE"
            },
            {
              "name": "Rounding and Estimation",
              "description": "Mastering the art of rounding and estimation, promoting efficient calculation and number understanding.",
              "image_path": "https://source.unsplash.com/500x500/?rounding-estimation",
              "type": "CORE"
            },
            {
              "name": "Prime and Composite Numbers",
              "description": "Exploring the fascinating world of prime and composite numbers, a cornerstone in number theory.",
              "image_path": "https://source.unsplash.com/500x500/?prime-composite",
              "type": "CORE"
            },
            {
              "name": "Number Sense Challenges",
              "description": "Taking on number sense challenges, enhancing problem-solving skills and numerical proficiency.",
              "image_path": "https://source.unsplash.com/500x500/?number-challenges",
              "type": "CORE"
            },
            {
              "name": "Fun with Numbers",
              "description": "Engaging in fun activities and games that strengthen understanding and application of numbers.",
              "image_path": "https://source.unsplash.com/500x500/?fun-numbers",
              "type": "ELECTIVE"
            },
            {
              "name": "Number Puzzles",
              "description": "Solving intriguing number puzzles, boosting logical reasoning and cognitive skills.",
              "image_path": "https://source.unsplash.com/500x500/?number-puzzles",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurement Mastery",
          "description": "Exploring the world of measurements, a practical skill for scientific exploration and daily life.",
          "image_path": "https://source.unsplash.com/500x500/?measurement",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Measurements",
              "description": "Understanding the basics of measurements, an essential component in mathematical applications.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-measurement",
              "type": "CORE"
            },
            {
              "name": "Length, Weight, and Volume",
              "description": "Learning to measure length, weight, and volume, boosting practical mathematical skills.",
              "image_path": "https://source.unsplash.com/500x500/?length-weight-volume",
              "type": "CORE"
            },
            {
              "name": "Time and Temperature",
              "description": "Mastering the measurement of time and temperature, a crucial skill in everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?time-temperature",
              "type": "CORE"
            },
            {
              "name": "Units Conversion",
              "description": "Learning the art of converting between different units of measurement, promoting precision and accuracy.",
              "image_path": "https://source.unsplash.com/500x500/?units-conversion",
              "type": "CORE"
            },
            {
              "name": "Measurement Challenges",
              "description": "Taking on measurement challenges, fostering problem-solving skills and mathematical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?measurement-challenges",
              "type": "CORE"
            },
            {
              "name": "Creative Measurements",
              "description": "Using measurements in creative ways, making learning engaging and enjoyable.",
              "image_path": "https://source.unsplash.com/500x500/?creative-measurements",
              "type": "ELECTIVE"
            },
            {
              "name": "Measurements in Daily Life",
              "description": "Exploring the role of measurements in daily life, promoting real-world learning.",
              "image_path": "https://source.unsplash.com/500x500/?daily-measurements",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Mathematical Magic",
          "description": "Exploring the magical world of mathematics through fun puzzles and brain teasers.",
          "image_path": "https://source.unsplash.com/500x500/?math-magic",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Mathemagic Tricks",
              "description": "Learning surprising math tricks that seem like magic, making math fun and exciting.",
              "image_path": "https://source.unsplash.com/500x500/?math-tricks",
              "type": "CORE"
            },
            {
              "name": "Puzzles and Brain Teasers",
              "description": "Solving intriguing puzzles and brain teasers, promoting logical thinking and problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?math-puzzles",
              "type": "CORE"
            },
            {
              "name": "Math in Magic Squares",
              "description": "Discovering the fascinating world of magic squares, a unique blend of math and magic.",
              "image_path": "https://source.unsplash.com/500x500/?magic-squares",
              "type": "CORE"
            },
            {
              "name": "Mathematical Patterns",
              "description": "Unveiling the magic of mathematical patterns, enhancing understanding of number sequences and relationships.",
              "image_path": "https://source.unsplash.com/500x500/?math-patterns",
              "type": "CORE"
            },
            {
              "name": "Math Games",
              "description": "Playing stimulating math games that make learning an adventure.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Math Art",
              "description": "Creating beautiful art using mathematical patterns, merging creativity with mathematical concepts.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Money Matters",
          "description": "Venturing into the realm of finance, learning essential money management skills for practical life.",
          "image_path": "https://source.unsplash.com/500x500/?money",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Introduction to Money",
              "description": "Understanding the basics of money, the foundation for financial literacy.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-money",
              "type": "CORE"
            },
            {
              "name": "Adding and Subtracting Money",
              "description": "Mastering addition and subtraction with money, an essential skill for daily transactions.",
              "image_path": "https://source.unsplash.com/500x500/?adding-subtracting-money",
              "type": "CORE"
            },
            {
              "name": "Money Management",
              "description": "Learning the importance of managing money wisely, encouraging responsible financial habits.",
              "image_path": "https://source.unsplash.com/500x500/?money-management",
              "type": "CORE"
            },
            {
              "name": "Saving and Investing",
              "description": "Exploring the concepts of saving and investing, fostering a mindset of financial growth.",
              "image_path": "https://source.unsplash.com/500x500/?saving-investing",
              "type": "CORE"
            },
            {
              "name": "Money Games",
              "description": "Playing games that reinforce money skills, making learning about finance fun and engaging.",
              "image_path": "https://source.unsplash.com/500x500/?money-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Entrepreneurship for Kids",
              "description": "Introducing the basics of entrepreneurship, inspiring innovation and business skills.",
              "image_path": "https://source.unsplash.com/500x500/?entrepreneurship",
              "type": "ELECTIVE"
            }
          ]
        }
      ]
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