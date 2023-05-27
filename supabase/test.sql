-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called STEM K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for level 5 Mathematics.
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
              "description": "Explore the concept of high and low pitches and connect it with the concept of ‘more than‘ and ‘less than‘.",
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
      "topics_data": [
        {
          "name": "Multiplication Mastery",
          "description": "Turning multiplication into an exciting adventure that fosters numerical fluency and confidence.",
          "image_path": "https://source.unsplash.com/500x500/?multiplication",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Times Tables Thrills",
              "description": "Delving into times tables, transforming them into enjoyable challenges.",
              "image_path": "https://source.unsplash.com/500x500/?times-table",
              "type": "CORE"
            },
            {
              "name": "Exploring Multiplicative Patterns",
              "description": "Discovering the fascinating patterns hidden within multiplication.",
              "image_path": "https://source.unsplash.com/500x500/?math-patterns",
              "type": "CORE"
            },
            {
              "name": "Multiply Large Numbers",
              "description": "Empowering learners to multiply larger numbers fearlessly.",
              "image_path": "https://source.unsplash.com/500x500/?large-numbers",
              "type": "CORE"
            },
            {
              "name": "Properties of Multiplication",
              "description": "Unraveling the intriguing properties of multiplication, including distributivity and associativity.",
              "image_path": "https://source.unsplash.com/500x500/?math-properties",
              "type": "CORE"
            },
            {
              "name": "Apply Multiplication in Real Life",
              "description": "Applying multiplication skills to solve real-world problems, boosting practical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Multiplication Art",
              "description": "Bridging the gap between art and mathematics through creative multiplication activities.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Game-based Multiplication",
              "description": "Cementing multiplication understanding through fun and engaging games.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Delving into Division",
          "description": "Making division delightful, fostering a solid understanding of splitting and sharing equally.",
          "image_path": "https://source.unsplash.com/500x500/?division",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Division Basics",
              "description": "Building a strong foundation in division through basic exercises.",
              "image_path": "https://source.unsplash.com/500x500/?division-basic",
              "type": "CORE"
            },
            {
              "name": "Division with Remainders",
              "description": "Decoding the concept of remainders in division, fostering advanced comprehension.",
              "image_path": "https://source.unsplash.com/500x500/?division-remainders",
              "type": "CORE"
            },
            {
              "name": "Long Division Adventure",
              "description": "Taking the learners on a journey through long division, simplifying complex calculations.",
              "image_path": "https://source.unsplash.com/500x500/?long-division",
              "type": "CORE"
            },
            {
              "name": "Division Facts and Strategies",
              "description": "Exploring efficient strategies forquick division, nurturing fast problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?division-strategies",
              "type": "CORE"
            },
            {
              "name": "Division in Everyday Life",
              "description": "Applying division skills to solve real-world problems, providing practical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Division Art",
              "description": "Using art to enrich learners‘ understanding of division concepts.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Division with Games",
              "description": "Incorporating games to solidify division understanding in an enjoyable way.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Fraction Fundamentals",
          "description": "Unlocking the mystery of fractions, empowering learners with the skills to handle part-whole relationships.",
          "image_path": "https://source.unsplash.com/500x500/?fractions",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Fractions",
              "description": "Demystifying the basic concepts of fractions and their representation.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-basic",
              "type": "CORE"
            },
            {
              "name": "Adding and Subtracting Fractions",
              "description": "Turning addition and subtraction of fractions into an enjoyable mathematical journey.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-addition",
              "type": "CORE"
            },
            {
              "name": "Comparing and Ordering Fractions",
              "description": "Building skills to compare and order fractions efficiently and accurately.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-comparison",
              "type": "CORE"
            },
            {
              "name": "Fraction to Decimal Conversion",
              "description": "Mastering the skill of converting fractions to decimals, enhancing numerical flexibility.",
              "image_path": "https://source.unsplash.com/500x500/?fraction-decimal",
              "type": "CORE"
            },
            {
              "name": "Real-life Fractions",
              "description": "Discovering the application of fractions in everyday life to boost practical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Fun with Fraction Art",
              "description": "Combining art with fractions to encourage creative understanding of mathematical concepts.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Fraction Games",
              "description": "Learning fractions through games, making learning fun and memorable.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry and Shapes",
          "description": "Venturing into the world of geometry, identifying shapes and understanding their properties.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Identifying Shapes",
              "description": "Recognizing and classifying various shapes in a fun and interactive manner.",
              "image_path": "https://source.unsplash.com/500x500/?shapes",
              "type": "CORE"
            },
            {
              "name": "Exploring Polygon Properties",
              "description": "Exploring the exciting properties of polygons and their classifications.",
              "image_path": "https://source.unsplash.com/500x500/?polygons",
              "type": "CORE"
            },
            {
              "name": "Geometry in Nature",
              "description": "Identifying geometrical patterns in nature, connecting mathematics to the real world.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-nature",
              "type": "CORE"
            },
            {
              "name": "Shapes and Angles",
              "description": "Diving into the relationship between shapes and angles, sharpening analytical skills.",
              "image_path": "https://source.unsplash.com/500x500/?angles",
              "type": "CORE"
            },
            {
              "name": "Practical Geometry",
              "description": "Applying knowledge of shapes and geometry to solve practical problems.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Geometric Art",
              "description": "Fusing art with geometry to stimulate creative thinking in mathematics.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Geometry Games",
              "description": "Making geometry tangible and fun through interactive games.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Dynamics of Data",
          "description": "Sailing on the sea of data, interpreting graphs and understanding measures of central tendency.",
          "image_path": "https://source.unsplash.com/500x500/?data",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Graphs",
              "description": "Demystifying the world of data visualization through graphs and charts.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Data Collection and Representation",
              "description": "Gathering data and representing it visually for easy understanding and interpretation.",
              "image_path": "https://source.unsplash.com/500x500/?data-collection",
              "type": "CORE"
            },
            {
              "name": "Mean, Median, Mode",
              "description": "Exploring the concept of mean, median, and mode to understand data better.",
              "image_path": "https://source.unsplash.com/500x500/?mean-median-mode",
              "type": "CORE"
            },
            {
              "name": "Probability Basics",
              "description": "Stepping into the intriguing world of probability, understanding chances and likelihood.",
              "image_path": "https://source.unsplash.com/500x500/?probability",
              "type": "CORE"
            },
            {
              "name": "Real-life Data Applications",
              "description": "Applying data interpretation skills to solve real-world problems and make decisions.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Data-driven Art",
              "description": "Creating art based on data interpretation to foster creativity in mathematics.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Data Games",
              "description": "Making data fun and engaging through interactive data-driven games.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Algebra Adventures",
          "description": "Embarking on an exciting algebra journey, discovering the power of symbols in mathematics.",
          "image_path": "https://source.unsplash.com/500x500/?algebra",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Algebra",
              "description": "Laying the foundation with an introduction to the basics of algebra.",
              "image_path": "https://source.unsplash.com/500x500/?introduction-algebra",
              "type": "CORE"
            },
            {
              "name": "Exploring Variables",
              "description": "Understanding the role and application of variables in mathematical expressions.",
              "image_path": "https://source.unsplash.com/500x500/?variables",
              "type": "CORE"
            },
            {
              "name": "Solving Simple Equations",
              "description": "Making sense of equations and finding solutions in a fun, interactive way.",
              "image_path": "https://source.unsplash.com/500x500/?equations",
              "type": "CORE"
            },
            {
              "name": "Algebraic Expressions",
              "description": "Building skills to express and solve problems algebraically.",
              "image_path": "https://source.unsplash.com/500x500/?algebraic-expressions",
              "type": "CORE"
            },
            {
              "name": "Applying Algebra in Real Life",
              "description": "Using algebra to solve real-world problems, providing practical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Algebra through Puzzles",
              "description": "Engaging with algebra through puzzles and games, making learning fun.",
              "image_path": "https://source.unsplash.com/500x500/?math-puzzles",
              "type": "ELECTIVE"
            },
            {
              "name": "Creative Algebra",
              "description": "Exploring the artistic side of algebra to stimulate creativity in problem-solving.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Measurement Mastery",
          "description": "Journeying into the practical realm of measurements, learning to quantify the world around us.",
          "image_path": "https://source.unsplash.com/500x500/?measurements",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Units of Measurement",
              "description": "Understanding the importance and application of different units of measurement.",
              "image_path": "https://source.unsplash.com/500x500/?units-measurement",
              "type": "CORE"
            },
            {
              "name": "Measuring Length, Weight, and Volume",
              "description": "Mastering the measurements of length, weight, and volume in everyday objects.",
              "image_path": "https://source.unsplash.com/500x500/?measurements",
              "type": "CORE"
            },
            {
              "name": "Understanding Scale",
              "description": "Exploring the concept of scale in maps and models, connecting measurement with representation.",
              "image_path": "https://source.unsplash.com/500x500/?scale-maps",
              "type": "CORE"
            },
            {
              "name": "Measurement Conversion",
              "description": "Developing conversion skills to navigate between different measurement units effortlessly.",
              "image_path": "https://source.unsplash.com/500x500/?conversion",
              "type": "CORE"
            },
            {
              "name": "Real-life Measurement Applications",
              "description": "Applying measurement skills to solve real-world problems, enhancing practical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-math",
              "type": "CORE"
            },
            {
              "name": "Fun with Measurement Games",
              "description": "Learning measurements through interactive games, making learning fun and tangible.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "ELECTIVE"
            },
            {
              "name": "Creative Measurements",
              "description": "Combining art with measurements to promote creativity and mathematical understanding.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math Magic Tricks",
          "description": "Unveiling the magic of mathematics, showcasing amazing tricks and shortcuts to amaze friends and family.",
          "image_path": "https://source.unsplash.com/500x500/?magic-tricks",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Number Tricks",
              "description": "Exploring fascinating number tricks that will make mathematics seem like magic.",
              "image_path": "https://source.unsplash.com/500x500/?number-tricks",
              "type": "CORE"
            },
            {
              "name": "Magic Squares",
              "description": "Delving into the world of magic squares, where numbers form amazing patterns.",
              "image_path": "https://source.unsplash.com/500x500/?magic-squares",
              "type": "CORE"
            },
            {
              "name": "Algebraic Magic Tricks",
              "description": "Using the power of algebra to create mind-boggling mathematical magic tricks.",
              "image_path": "https://source.unsplash.com/500x500/?algebra-tricks",
              "type": "CORE"
            },
            {
              "name": "Geometry Magic",
              "description": "Exploring the intriguing connections between magic tricks and geometric concepts.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-magic",
              "type": "CORE"
            },
            {
              "name": "Probability and Magic",
              "description": "Unveiling the role of probability in predicting outcomes and performing magic tricks.",
              "image_path": "https://source.unsplash.com/500x500/?probability-magic",
              "type": "CORE"
            },
            {
              "name": "Card Math Tricks",
              "description": "Uncovering the mathematics behind popular card tricks, blending entertainment with learning.",
              "image_path": "https://source.unsplash.com/500x500/?card-tricks",
              "type": "ELECTIVE"
            },
            {
              "name": "Math Magic in Real Life",
              "description": "Applying mathematical tricks to real-life scenarios, adding a dash of magic to everyday experiences.",
              "image_path": "https://source.unsplash.com/500x500/?real-life-magic",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math in Art and Nature",
          "description": "Exploring the aesthetic side of mathematics, witnessing its hidden presence in art and natural patterns.",
          "image_path": "https://source.unsplash.com/500x500/?math-art-nature",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Math and Symmetry",
              "description": "Discovering the concept of symmetry in art and nature, understanding its mathematical roots.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "Patterns in Nature",
              "description": "Observing and understanding the mathematical patterns inherent in natural phenomena.",
              "image_path": "https://source.unsplash.com/500x500/?patterns-nature",
              "type": "CORE"
            },
            {
              "name": "The Golden Ratio",
              "description": "Unraveling the mystery of the Golden Ratio and its omnipresence in art and nature.",
              "image_path": "https://source.unsplash.com/500x500/?golden-ratio",
              "type": "CORE"
            },
            {
              "name": "Fractals",
              "description": "Learning about fractals, the complex, repetitive patterns found in nature and mathematical theories.",
              "image_path": "https://source.unsplash.com/500x500/?fractals",
              "type": "CORE"
            },
            {
              "name": "Geometry in Art",
              "description": "Recognizing the role of geometric shapes and principles in artwork and design.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-art",
              "type": "CORE"
            },
            {
              "name": "Artistic Math Projects",
              "description": "Creating beautiful art projects that integrate and demonstrate mathematical concepts.",
              "image_path": "https://source.unsplash.com/500x500/?math-art-projects",
              "type": "ELECTIVE"
            },
            {
              "name": "Math Photography",
              "description": "Using photography to capture and explore mathematical patterns in everyday life.",
              "image_path": "https://source.unsplash.com/500x500/?math-photography",
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
          "name": "Advanced Arithmetic",
          "description": "Dive deeper into the world of numbers, enhancing skills with more complex calculations.",
          "image_path": "https://source.unsplash.com/500x500/?arithmetic",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Mastering Multiplication",
              "description": "An in-depth understanding of multiplication of larger numbers for advanced calculations.",
              "image_path": "https://source.unsplash.com/500x500/?multiplication",
              "type": "CORE"
            },
            {
              "name": "Delving into Division",
              "description": "A focus on division techniques to solve complex numerical problems.",
              "image_path": "https://source.unsplash.com/500x500/?division",
              "type": "CORE"
            },
            {
              "name": "Practical Problem Solving",
              "description": "Using arithmetic in real-life situations to improve problem-solving skills.",
              "image_path": "https://source.unsplash.com/500x500/?problem-solving",
              "type": "CORE"
            },
            {
              "name": "Fun with Fractions",
              "description": "A journey into the world of fractions to add, subtract, and compare fractional values.",
              "image_path": "https://source.unsplash.com/500x500/?fractions",
              "type": "CORE"
            },
            {
              "name": "Decimals Decoded",
              "description": "Understanding the value and use of decimals in daily life.",
              "image_path": "https://source.unsplash.com/500x500/?decimals",
              "type": "CORE"
            },
            {
              "name": "Arithmetic Art",
              "description": "Applying mathematical concepts creatively in an artistic context.",
              "image_path": "https://source.unsplash.com/500x500/?math-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Coding with Numbers",
              "description": "Introduction to using arithmetic in simple coding tasks.",
              "image_path": "https://source.unsplash.com/500x500/?coding-math",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Geometry & Measurement",
          "description": "Unlock the shapes and sizes of the world, exploring spatial understanding and measurement.",
          "image_path": "https://source.unsplash.com/500x500/?geometry",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Angles",
              "description": "Deepening the understanding of angles and their uses in geometry.",
              "image_path": "https://source.unsplash.com/500x500/?angles",
              "type": "CORE"
            },
            {
              "name": "Fantastic Polygons",
              "description": "Exploring the properties of polygons to deepen geometric understanding.",
              "image_path": "https://source.unsplash.com/500x500/?polygons",
              "type": "CORE"
            },
            {
              "name": "Mastering Measurement",
              "description": "Acquiring advanced techniques to measure distance, area, volume, and time.",
              "image_path": "https://source.unsplash.com/500x500/?measurement",
              "type": "CORE"
            },
            {
              "name": "Symmetry and Patterns",
              "description": "Identifying symmetry in shapes and creating patterns using geometric figures.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry",
              "type": "CORE"
            },
            {
              "name": "3D Geometry Exploration",
              "description": "Expanding geometric understanding into the third dimension.",
              "image_path": "https://source.unsplash.com/500x500/?3d-geometry",
              "type": "CORE"
            },
            {
              "name": "Artistic Applications of Geometry",
              "description": "Exploring the creative side of geometry by incorporating it into art.",
              "image_path": "https://source.unsplash.com/500x500/?geometry-art",
              "type": "ELECTIVE"
            },
            {
              "name": "Mathematical Origami",
              "description": "Applying geometric principles in the fascinating art of origami.",
              "image_path": "https://source.unsplash.com/500x500/?origami",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Data Analysis",
          "description": "Understanding the power of data and learning how to interpret and present it effectively.",
          "image_path": "https://source.unsplash.com/500x500/?data-analysis",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Creating Graphs",
              "description": "Learning how to represent data in various graphical formats.",
              "image_path": "https://source.unsplash.com/500x500/?graphs",
              "type": "CORE"
            },
            {
              "name": "Data Interpretation",
              "description": "Honing skills to interpret data from various sources and formats.",
              "image_path": "https://source.unsplash.com/500x500/?data-interpretation",
              "type": "CORE"
            },
            {
              "name": "Real-world Statistics",
              "description": "Understanding the use of statistics in real-world situations.",
              "image_path": "https://source.unsplash.com/500x500/?statistics",
              "type": "CORE"
            },
            {
              "name": "Probability Principles",
              "description": "Grasping the concept of probability and its applications.",
              "image_path": "https://source.unsplash.com/500x500/?probability",
              "type": "CORE"
            },
            {
              "name": "The Power of Predictions",
              "description": "Learning how data can be used to make informed predictions.",
              "image_path": "https://source.unsplash.com/500x500/?predictions",
              "type": "CORE"
            },
            {
              "name": "Sports Statistics",
              "description": "Applying data analysis skills to explore statistics in the sports world.",
              "image_path": "https://source.unsplash.com/500x500/?sports-statistics",
              "type": "ELECTIVE"
            },
            {
              "name": "Data and Environment",
              "description": "Understanding environmental data and its importance.",
              "image_path": "https://source.unsplash.com/500x500/?environmental-data",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Algebraic Thinking",
          "description": "Discover the fascinating world of algebra that provides a powerful tool for solving problems.",
          "image_path": "https://source.unsplash.com/500x500/?algebra",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Introduction to Variables",
              "description": "Learning about variables and their applications in algebra.",
              "image_path": "https://source.unsplash.com/500x500/?variables",
              "type": "CORE"
            },
            {
              "name": "Solving Simple Equations",
              "description": "Mastering the basic techniques for solving simple algebraic equations.",
              "image_path": "https://source.unsplash.com/500x500/?equations",
              "type": "CORE"
            },
            {
              "name": "Algebraic Expressions",
              "description": "Understanding and forming algebraic expressions to represent real-world situations.",
              "image_path": "https://source.unsplash.com/500x500/?algebraic-expressions",
              "type": "CORE"
            },
            {
              "name": "Function Fundamentals",
              "description": "Exploring the concept of functions and their importance in algebra.",
              "image_path": "https://source.unsplash.com/500x500/?functions",
              "type": "CORE"
            },
            {
              "name": "Graphing Equations",
              "description": "Learning how to represent algebraic equations on a graph.",
              "image_path": "https://source.unsplash.com/500x500/?graphing-equations",
              "type": "CORE"
            },
            {
              "name": "Algebra in Nature",
              "description": "Identifying and understanding algebraic patterns in nature.",
              "image_path": "https://source.unsplash.com/500x500/?math-nature",
              "type": "ELECTIVE"
            },
            {
              "name": "Coding with Algebra",
              "description": "Applying algebraic concepts to simple coding tasks.",
              "image_path": "https://source.unsplash.com/500x500/?coding-algebra",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Problem Solving & Logic",
          "description": "Unleashing the power of critical thinking and logical reasoning to solve mathematical problems.",
          "image_path": "https://source.unsplash.com/500x500/?logic",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Logical Reasoning",
              "description": "Developing logical reasoning skills to solve complex mathematical problems.",
              "image_path": "https://source.unsplash.com/500x500/?logical-reasoning",
              "type": "CORE"
            },
            {
              "name": "Mathematical Puzzles",
              "description": "Solving a variety of puzzles to foster critical thinking skills.",
              "image_path": "https://source.unsplash.com/500x500/?math-puzzles",
              "type": "CORE"
            },
            {
              "name": "Problem-Solving Strategies",
              "description": "Learning various strategies and approaches to tackle different mathematical problems.",
              "image_path": "https://source.unsplash.com/500x500/?problem-solving",
              "type": "CORE"
            },
            {
              "name": "Real-World Applications",
              "description": "Applying problem-solving and logical reasoning skills to real-world situations.",
              "image_path": "https://source.unsplash.com/500x500/?real-world-math",
              "type": "CORE"
            },
            {
              "name": "Mathematical Games",
              "description": "Exploring various mathematical games that stimulate logical thinking.",
              "image_path": "https://source.unsplash.com/500x500/?math-games",
              "type": "CORE"
            },
            {
              "name": "Chess and Mathematics",
              "description": "Understanding the connection between mathematics and chess strategy.",
              "image_path": "https://source.unsplash.com/500x500/?chess",
              "type": "ELECTIVE"
            },
            {
              "name": "Coding for Problem Solving",
              "description": "Using coding as a tool to enhance problem-solving skills in mathematics.",
              "image_path": "https://source.unsplash.com/500x500/?coding-math",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Financial Literacy",
          "description": "Laying the foundation for understanding finances, from basic transactions to smart money management.",
          "image_path": "https://source.unsplash.com/500x500/?financial-literacy",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Understanding Money",
              "description": "Learning about the concept and value of money, different currencies, and exchange rates.",
              "image_path": "https://source.unsplash.com/500x500/?money",
              "type": "CORE"
            },
            {
              "name": "Basics of Banking",
              "description": "An introduction to banking, including the concept of savings and checking accounts.",
              "image_path": "https://source.unsplash.com/500x500/?banking",
              "type": "CORE"
            },
            {
              "name": "Making Transactions",
              "description": "Understanding transactions, including debits, credits, and the use of checks and cards.",
              "image_path": "https://source.unsplash.com/500x500/?transactions",
              "type": "CORE"
            },
            {
              "name": "Introduction to Budgeting",
              "description": "Learning how to create a basic budget and understanding the importance of financial planning.",
              "image_path": "https://source.unsplash.com/500x500/?budgeting",
              "type": "CORE"
            },
            {
              "name": "Principles of Investing",
              "description": "A simple introduction to investing and how it can lead to growth over time.",
              "image_path": "https://source.unsplash.com/500x500/?investing",
              "type": "CORE"
            },
            {
              "name": "Entrepreneurship and Math",
              "description": "Applying financial literacy skills to understand the math behind running a small business.",
              "image_path": "https://source.unsplash.com/500x500/?entrepreneurship",
              "type": "ELECTIVE"
            },
            {
              "name": "Math and Philanthropy",
              "description": "Understanding how math helps in making informed decisions about charitable giving.",
              "image_path": "https://source.unsplash.com/500x500/?philanthropy",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Mathematical Exploration",
          "description": "Fostering a sense of adventure in the realm of mathematics, making connections and discoveries.",
          "image_path": "https://source.unsplash.com/500x500/?math-exploration",
          "type": "CORE",
          "lessons_data": [
            {
              "name": "Famous Mathematical Problems",
              "description": "Exploring historical mathematical problems and their significance in the field.",
              "image_path": "https://source.unsplash.com/500x500/?math-problems",
              "type": "CORE"
            },
            {
              "name": "Math in Nature",
              "description": "Discovering the amazing patterns and mathematical principles found in nature.",
              "image_path": "https://source.unsplash.com/500x500/?math-nature",
              "type": "CORE"
            },
            {
              "name": "Math and Music",
              "description": "Understanding the fascinating connections between mathematics and music.",
              "image_path": "https://source.unsplash.com/500x500/?math-music",
              "type": "CORE"
            },
            {
              "name": "Math and Architecture",
              "description": "Exploring how math is used in architecture to create stunning and stable structures.",
              "image_path": "https://source.unsplash.com/500x500/?math-architecture",
              "type": "CORE"
            },
            {
              "name": "Futuristic Math",
              "description": "Looking into future applications of math in technology, space exploration, and more.",
              "image_path": "https://source.unsplash.com/500x500/?futuristic-math",
              "type": "CORE"
            },
            {
              "name": "Math Magic Tricks",
              "description": "Learning mathematical magic tricks to amaze friends and family.",
              "image_path": "https://source.unsplash.com/500x500/?math-magic",
              "type": "ELECTIVE"
            },
            {
              "name": "Math in Other Cultures",
              "description": "Exploring how different cultures have understood and used mathematics throughout history.",
              "image_path": "https://source.unsplash.com/500x500/?math-cultures",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math and Sports",
          "description": "Understanding the fascinating connection between math and sports, from strategy to statistics.",
          "image_path": "https://source.unsplash.com/500x500/?math-sports",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Scorekeeping and Stats",
              "description": "Learning how statistics and math play a crucial role in sports scorekeeping.",
              "image_path": "https://source.unsplash.com/500x500/?scorekeeping",
              "type": "CORE"
            },
            {
              "name": "Game Strategy and Probability",
              "description": "Understanding how probability and mathematical thinking influence game strategies.",
              "image_path": "https://source.unsplash.com/500x500/?game-strategy",
              "type": "CORE"
            },
            {
              "name": "Sports Physics",
              "description": "Exploring the physics behind various sports and how math is involved.",
              "image_path": "https://source.unsplash.com/500x500/?sports-physics",
              "type": "CORE"
            },
            {
              "name": "Fantasy Sports and Math",
              "description": "Learning how to use mathematics to pick a winning fantasy sports team.",
              "image_path": "https://source.unsplash.com/500x500/?fantasy-sports",
              "type": "CORE"
            },
            {
              "name": "Sports and Geometry",
              "description": "Identifying the role of geometric principles in different sports.",
              "image_path": "https://source.unsplash.com/500x500/?sports-geometry",
              "type": "ELECTIVE"
            },
            {
              "name": "Math in Extreme Sports",
              "description": "Discovering the math behind the thrilling world of extreme sports.",
              "image_path": "https://source.unsplash.com/500x500/?extreme-sports",
              "type": "ELECTIVE"
            }
          ]
        },
        {
          "name": "Math and Arts",
          "description": "Exploring the captivating intersection of mathematics and various forms of art.",
          "image_path": "https://source.unsplash.com/500x500/?math-art",
          "type": "ELECTIVE",
          "lessons_data": [
            {
              "name": "Math in Visual Art",
              "description": "Understanding how mathematical concepts contribute to the creation of visual art.",
              "image_path": "https://source.unsplash.com/500x500/?visual-art",
              "type": "CORE"
            },
            {
              "name": "Geometry in Architecture",
              "description": "Learning about the important role of geometry in architectural design.",
              "image_path": "https://source.unsplash.com/500x500/?architecture",
              "type": "CORE"
            },
            {
              "name": "Math and Music Theory",
              "description": "Discovering the connections between mathematical principles and music theory.",
              "image_path": "https://source.unsplash.com/500x500/?music-theory",
              "type": "CORE"
            },
            {
              "name": "Symmetry and Patterns",
              "description": "Exploring the concepts of symmetry and patterns in various forms of art.",
              "image_path": "https://source.unsplash.com/500x500/?symmetry-patterns",
              "type": "CORE"
            },
            {
              "name": "Math and Dance",
              "description": "Understanding how mathematical concepts are utilized in choreography and dance performances.",
              "image_path": "https://source.unsplash.com/500x500/?dance",
              "type": "ELECTIVE"
            },
            {
              "name": "Film and Math",
              "description": "Exploring how mathematics influence aspects of filmmaking, from animation to special effects.",
              "image_path": "https://source.unsplash.com/500x500/?filmmaking",
              "type": "ELECTIVE"
            }
          ]
        }
      ]
    }
  ]'::json
);


-- Our goal is to create 7 "CORE" topics and 2 "ELECTIVE" topic for every subject in the curriculum. And for every "CORE" topic create 5 "CORE" lessons and 2 "ELECTIVE" lessons. For every "ELECTIVE" topic, create 4 "CORE" lessons and 2 "ELECTIVE" lessons.
-- Every Topic and Lesson should have an inspiration one sentence descriptions like "A playful wonderland of learning that ignites curiosity, nurtures creativity, and lays the foundations for a lifelong love of exploration."
-- We are doing a curriculum called STEM K-5 split into 6 levels (Kindergarten, 1, 2, 3, 4, 5)
-- Right Now, your job is to create the first 4 topics and ALL the lessons for those topics for level 4 Science.
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



---- Science
SELECT create_complete_curriculum(
  'STEM K-5',
  '2c0970f3-18fe-491f-879e-82e43d50bb57'::uuid,
  'CORE'::module_type,
  '[
    {
      "level_id": "8787a66e-9e03-42c7-8870-ada6df021491",
      "topics_data": [
        {
    "name": "Introduction to Living Things",
    "description": "Igniting a sense of wonder about the living things around us, teaching kids the basics of life processes.",
    "image_path": "https://source.unsplash.com/500x500/?living-things",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "What is Life?",
            "description": "Discovering the fundamental characteristics of living organisms.",
            "image_path": "https://source.unsplash.com/500x500/?life",
            "type": "CORE"
        },
        {
            "name": "Understanding Animals",
            "description": "Exploring the diverse and exciting world of animals.",
            "image_path": "https://source.unsplash.com/500x500/?animals",
            "type": "CORE"
        },
        {
            "name": "Discovering Plants",
            "description": "Delving into the green and growing world of plants.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
        },
        {
            "name": "Human Body Basics",
            "description": "Learning about our bodies and the amazing things they can do.",
            "image_path": "https://source.unsplash.com/500x500/?human-body",
            "type": "CORE"
        },
        {
            "name": "Life Cycles",
            "description": "Understanding the circle of life by looking at different life cycles.",
            "image_path": "https://source.unsplash.com/500x500/?life-cycle",
            "type": "CORE"
        },
        {
            "name": "Pet Care",
            "description": "Teaching responsibility and empathy through basic pet care.",
            "image_path": "https://source.unsplash.com/500x500/?pets",
            "type": "ELECTIVE"
        },
        {
            "name": "Gardening Fun",
            "description": "Cultivating a love for nature through hands-on gardening activities.",
            "image_path": "https://source.unsplash.com/500x500/?gardening",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Exploring the Weather",
    "description": "Stimulating curiosity about the changing skies and the science behind weather patterns.",
    "image_path": "https://source.unsplash.com/500x500/?weather",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Sunny Days",
            "description": "Understanding the Sun‘s role in our lives and its effects on our weather.",
            "image_path": "https://source.unsplash.com/500x500/?sunny",
            "type": "CORE"
        },
        {
            "name": "Rain and Clouds",
            "description": "Discovering how rain forms and why clouds appear in the sky.",
            "image_path": "https://source.unsplash.com/500x500/?rain-clouds",
            "type": "CORE"
        },
        {
            "name": "Snow and Ice",
            "description": "Learning about the unique properties and phenomena of cold weather.",
            "image_path": "https://source.unsplash.com/500x500/?snow-ice",
            "type": "CORE"
        },
        {
            "name": "Wind Power",
            "description": "Discovering how the wind works and its powerful effects on the environment.",
            "image_path": "https://source.unsplash.com/500x500/?wind",
            "type": "CORE"
        },
        {
            "name": "Weather Safety",
            "description": "Learning about severe weather and how to stay safe.",
            "image_path": "https://source.unsplash.com/500x500/?weather-safety",
            "type": "CORE"
        },
        {
            "name": "Making a Weather Vane",
            "description": "Crafting a homemade weather vane to understand wind direction.",
            "image_path": "https://source.unsplash.com/500x500/?weathervane",
            "type": "ELECTIVE"
        },
        {
            "name": "Observing Weather Patterns",
            "description": "Keeping a weather diary to observe and record weather changes over time.",
            "image_path": "https://source.unsplash.com/500x500/?weather-pattern",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "The Wonder of Water",
    "description": "Diving into the fascinating world of water, its properties, and its vital role in the environment.",
    "image_path": "https://source.unsplash.com/500x500/?water",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Water in Our Lives",
            "description": "Understanding the importance of water and how we use it every day.",
            "image_path": "https://source.unsplash.com/500x500/?water-usage",
            "type": "CORE"
        },
        {
            "name": "The Water Cycle",
            "description": "Learning about evaporation, condensation, precipitation, and collection in the water cycle.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
        },
        {
            "name": "Water Bodies",
            "description": "Exploring different bodies of water, from oceans to streams.",
            "image_path": "https://source.unsplash.com/500x500/?water-bodies",
            "type": "CORE"
        },
        {
            "name": "Water Animals",
            "description": "Discovering the amazing creatures that live in water.",
            "image_path": "https://source.unsplash.com/500x500/?water-animals",
            "type": "CORE"
        },
        {
            "name": "Properties of Water",
            "description": "Exploring the unique properties of water, like its ability to change states from solid to liquid to gas.",
            "image_path": "https://source.unsplash.com/500x500/?properties-of-water",
            "type": "CORE"
        },
        {
            "name": "Water Art",
            "description": "Creating beautiful works of art using water and paint.",
            "image_path": "https://source.unsplash.com/500x500/?water-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Water Experiments",
            "description": "Performing fun, hands-on experiments to understand the properties of water.",
            "image_path": "https://source.unsplash.com/500x500/?water-experiments",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Let‘s Learn About Earth",
    "description": "Fostering a love for our planet and an understanding of its diverse environments and resources.",
    "image_path": "https://source.unsplash.com/500x500/?earth",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Landforms and Landscapes",
            "description": "Exploring the variety of shapes and types of land on our planet.",
            "image_path": "https://source.unsplash.com/500x500/?landforms",
            "type": "CORE"
        },
        {
            "name": "Oceans and Seas",
            "description": "Learning about the world‘s oceans, seas, and their importance to life on earth.",
            "image_path": "https://source.unsplash.com/500x500/?oceans",
            "type": "CORE"
        },
        {
            "name": "Rocks and Soil",
            "description": "Digging into the world beneath our feet by learning about rocks and soil.",
            "image_path": "https://source.unsplash.com/500x500/?rocks-soil",
            "type": "CORE"
        },
        {
            "name": "Recycling and Conservation",
            "description": "Understanding the importance of caring for our planet through recycling and conservation.",
            "image_path": "https://source.unsplash.com/500x500/?recycling",
            "type": "CORE"
        },
        {
            "name": "The Four Seasons",
            "description": "Discovering the four seasons and their impact on our planet and lives.",
            "image_path": "https://source.unsplash.com/500x500/?seasons",
            "type": "CORE"
        },
        {
            "name": "Earth Art",
            "description": "Creating unique art pieces using natural materials from the earth.",
            "image_path": "https://source.unsplash.com/500x500/?earth-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Building a Terrarium",
            "description": "Creating a mini-earth ecosystem in a jar to understand how nature works.",
            "image_path": "https://source.unsplash.com/500x500/?terrarium",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Stars and Space",
    "description": "Inspiring young minds to reach for the stars and learn about the mysteries of outer space.",
    "image_path": "https://source.unsplash.com/500x500/?space",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Introduction to Space",
            "description": "Embarking on a cosmic journey to understand the vastness of space.",
            "image_path": "https://source.unsplash.com/500x500/?universe",
            "type": "CORE"
        },
        {
            "name": "Meet the Planets",
            "description": "Taking a trip through our solar system to learn about the unique planets.",
            "image_path": "https://source.unsplash.com/500x500/?planets",
            "type": "CORE"
        },
        {
            "name": "Stars and Constellations",
            "description": "Uncovering the twinkling stars and their patterns in the night sky.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
        },
        {
            "name": "The Moon and Its Phases",
            "description": "Discovering our closest celestial neighbor and the different shapes it takes.",
            "image_path": "https://source.unsplash.com/500x500/?moon",
            "type": "CORE"
        },
        {
            "name": "Astronauts and Space Exploration",
            "description": "Learning about the brave astronauts who explore space and the vehicles they use.",
            "image_path": "https://source.unsplash.com/500x500/?astronaut",
            "type": "CORE"
        },
        {
            "name": "Space Art",
            "description": "Creating dazzling art inspired by the cosmos.",
            "image_path": "https://source.unsplash.com/500x500/?space-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Build Your Own Rocket",
            "description": "Designing and building a simple rocket for a fun introduction to physics and engineering.",
            "image_path": "https://source.unsplash.com/500x500/?rocket",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Discovering Dinosaurs",
    "description": "Stepping back in time to explore the prehistoric world of dinosaurs and how they lived.",
    "image_path": "https://source.unsplash.com/500x500/?dinosaurs",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "What Are Dinosaurs?",
            "description": "Unveiling the exciting world of dinosaurs and their unique characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur",
            "type": "CORE"
        },
        {
            "name": "Dinosaur Types",
            "description": "Exploring different types of dinosaurs and their distinctive features.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-types",
            "type": "CORE"
        },
        {
            "name": "Life of Dinosaurs",
            "description": "Discovering how dinosaurs lived, what they ate, and how they behaved.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-life",
            "type": "CORE"
        },
        {
            "name": "Fossils and Paleontology",
            "description": "Introducing the science of fossils and how we learn about dinosaurs today.",
            "image_path": "https://source.unsplash.com/500x500/?fossils",
            "type": "CORE"
        },
        {
            "name": "Extinction of Dinosaurs",
            "description": "Learning about the extinction event that ended the age of dinosaurs and its impact on life on Earth.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-extinction",
            "type": "CORE"
        },
        {
            "name": "Dinosaur Art and Crafts",
            "description": "Engaging creativity by crafting and drawing our favorite dinosaurs.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Building a Dinosaur Model",
            "description": "Constructing a simple dinosaur model to bring the prehistoric creatures to life.",
            "image_path": "https://source.unsplash.com/500x500/?dinosaur-model",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Incredible Insects",
    "description": "Buzzing into the small yet fascinating world of insects and their vital role in our ecosystem.",
    "image_path": "https://source.unsplash.com/500x500/?insects",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "What Are Insects?",
            "description": "Introducing the characteristics and life cycle of insects.",
            "image_path": "https://source.unsplash.com/500x500/?insects",
            "type": "CORE"
        },
        {
            "name": "Types of Insects",
            "description": "Exploring the diverse types of insects and their unique features.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-insects",
            "type": "CORE"
        },
        {
            "name": "Insect Habitats",
            "description": "Discovering where insects live and how they interact with their environment.",
            "image_path": "https://source.unsplash.com/500x500/?insect-habitat",
            "type": "CORE"
        },
        {
            "name": "Insects and the Environment",
            "description": "Understanding the vital role insects play in pollination and the ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?insects-environment",
            "type": "CORE"
        },
        {
            "name": "Insect Behavior",
            "description": "Studying how insects communicate, work together, and survive in the wild.",
            "image_path": "https://source.unsplash.com/500x500/?insect-behavior",
            "type": "CORE"
        },
        {
            "name": "Insect Art",
            "description": "Creating colorful and imaginative art inspired by the world of insects.",
            "image_path": "https://source.unsplash.com/500x500/?insect-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Building an Insect Model",
            "description": "Crafting a 3D insect model to understand their anatomy and diversity.",
            "image_path": "https://source.unsplash.com/500x500/?insect-model",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "The Joy of Plants",
    "description": "Cultivating an appreciation for the beauty of plants and their importance to life on Earth.",
    "image_path": "https://source.unsplash.com/500x500/?plants",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "What are Plants?",
            "description": "Introducing the diverse world of plants and their characteristics.",
            "image_path": "https://source.unsplash.com/500x500/?plants",
            "type": "CORE"
        },
        {
            "name": "Parts of a Plant",
            "description": "Discovering the different parts of a plant and their functions.",
            "image_path": "https://source.unsplash.com/500x500/?parts-of-plant",
            "type": "CORE"
        },
        {
            "name": "Plant Life Cycle",
            "description": "Learning about the stages of growth in a plant‘s life from seed to flowering.",
            "image_path": "https://source.unsplash.com/500x500/?plant-life-cycle",
            "type": "CORE"
        },
        {
            "name": "Types of Plants",
            "description": "Exploring the wide variety of plants, from towering trees to tiny mosses.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-plants",
            "type": "CORE"
        },
        {
            "name": "Plant Art",
            "description": "Creating art inspired by the diverse shapes, colors, and textures of plants.",
            "image_path": "https://source.unsplash.com/500x500/?plant-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Plant a Seed",
            "description": "Experiencing the joy of growing a plant from a seed and nurturing its growth.",
            "image_path": "https://source.unsplash.com/500x500/?planting-seed",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Weather Wonders",
    "description": "Unraveling the mysteries of weather and understanding its patterns and effects on the Earth.",
    "image_path": "https://source.unsplash.com/500x500/?weather",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "What is Weather?",
            "description": "An introductory exploration of the concept of weather and its role in our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?weather",
            "type": "CORE"
        },
        {
            "name": "Types of Weather",
            "description": "Learning about the different types of weather, from sunny days to stormy skies.",
            "image_path": "https://source.unsplash.com/500x500/?types-of-weather",
            "type": "CORE"
        },
        {
            "name": "Weather Patterns",
            "description": "Understanding how weather changes over time and the patterns that emerge.",
            "image_path": "https://source.unsplash.com/500x500/?weather-patterns",
            "type": "CORE"
        },
        {
            "name": "Impact of Weather",
            "description": "Examining how different types of weather impact the environment and human activities.",
            "image_path": "https://source.unsplash.com/500x500/?impact-of-weather",
            "type": "CORE"
        },
        {
            "name": "Weather Art",
            "description": "Expressing creativity by making art inspired by different weather conditions.",
            "image_path": "https://source.unsplash.com/500x500/?weather-art",
            "type": "ELECTIVE"
        },
        {
            "name": "Weather Station Model",
            "description": "Building a simple weather station model to understand how weather is observed and measured.",
            "image_path": "https://source.unsplash.com/500x500/?weather-station",
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
       "name": "Exploring the Environment",
       "description": "Inspiring a sense of wonder and respect for nature, while laying a foundation for understanding ecosystems.",
       "image_path": "https://source.unsplash.com/500x500/?nature",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "Introduction to Plants",
               "description": "Discovering the diverse world of plants and learning their basic structure.",
               "image_path": "https://source.unsplash.com/500x500/?plants",
               "type": "CORE"
           },
           {
               "name": "Animal Habitats",
               "description": "Exploring various animal habitats and understanding the adaptations creatures make to survive.",
               "image_path": "https://source.unsplash.com/500x500/?animal-habitat",
               "type": "CORE"
           },
           {
               "name": "Weather Patterns",
               "description": "Investigating the different weather patterns and the elements that create them.",
               "image_path": "https://source.unsplash.com/500x500/?weather",
               "type": "CORE"
           },
           {
               "name": "Seasonal Changes",
               "description": "Observing the changing seasons and the effects they have on our environment.",
               "image_path": "https://source.unsplash.com/500x500/?seasons",
               "type": "CORE"
           },
           {
               "name": "Earth‘s Water",
               "description": "Understanding the importance of water in our environment and its various forms.",
               "image_path": "https://source.unsplash.com/500x500/?water",
               "type": "CORE"
           },
           {
               "name": "Basic Astronomy",
               "description": "Gazing into the night sky to learn about the moon, stars, and planets.",
               "image_path": "https://source.unsplash.com/500x500/?night-sky",
               "type": "ELECTIVE"
           },
           {
               "name": "Simple Environmental Actions",
               "description": "Learning how we can help preserve and care for our environment in small ways.",
               "image_path": "https://source.unsplash.com/500x500/?environment-protection",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Introduction to Physics",
       "description": "Awakening curiosity about how things move, introducing basic physics concepts in a playful way.",
       "image_path": "https://source.unsplash.com/500x500/?physics",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "Pushes and Pulls",
               "description": "Exploring the forces of push and pull and how they move objects around us.",
               "image_path": "https://source.unsplash.com/500x500/?force",
               "type": "CORE"
           },
           {
               "name": "Gravity",
               "description": "Discovering the concept of gravity and its role in keeping us on the ground.",
               "image_path": "https://source.unsplash.com/500x500/?gravity",
               "type": "CORE"
           },
           {
               "name": "Light and Shadows",
               "description": "Learning about light, how it travels, and the shadows it creates.",
               "image_path": "https://source.unsplash.com/500x500/?light-shadows",
               "type": "CORE"
           },
           {
               "name": "Sound Waves",
               "description": "Investigating how sound is made and how it travels through different materials.",
               "image_path": "https://source.unsplash.com/500x500/?sound",
               "type": "CORE"
           },
           {
               "name": "Simple Machines",
               "description": "Identifying simple machines in our surroundings and understanding their purposes.",
               "image_path": "https://source.unsplash.com/500x500/?simple-machines",
               "type": "CORE"
           },
           {
               "name": "Magnets",
               "description": "Exploring the fascinating world of magnets and magnetic forces.",
               "image_path": "https://source.unsplash.com/500x500/?magnets",
               "type": "ELECTIVE"
           },
           {
               "name": "Introduction to Energy",
               "description": "Understanding the concept of energy and the different forms it can take.",
               "image_path": "https://source.unsplash.com/500x500/?energy",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Discovering Chemistry",
       "description": "Igniting a lifelong fascination with the building blocks of matter, through simple chemistry experiments.",
       "image_path": "https://source.unsplash.com/500x500/?chemistry",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "States of Matter",
               "description": "Exploring the three states of matter: solid, liquid, and gas.",
               "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
               "type": "CORE"
           },
           {
               "name": "Mixtures and Solutions",
               "description": "Investigating how different substances mix or don‘t mix with each other.",
               "image_path": "https://source.unsplash.com/500x500/?mixtures",
               "type": "CORE"
           },
           {
               "name": "Physical and Chemical Changes",
               "description": "Distinguishing between physical and chemical changes through simple experiments.",
               "image_path": "https://source.unsplash.com/500x500/?chemical-change",
               "type": "CORE"
           },
           {
               "name": "Acids and Bases",
               "description": "Understanding the properties of acids and bases using common household substances.",
               "image_path": "https://source.unsplash.com/500x500/?acids-bases",
               "type": "CORE"
           },
           {
               "name": "The Water Cycle",
               "description": "Learning about the water cycle and how it influences our planet‘s climate.",
               "image_path": "https://source.unsplash.com/500x500/?water-cycle",
               "type": "CORE"
           },
           {
               "name": "Introduction to Elements",
               "description": "Discovering the basic elements that make up our world.",
               "image_path": "https://source.unsplash.com/500x500/?elements",
               "type": "ELECTIVE"
           },
           {
               "name": "Kitchen Chemistry",
               "description": "Exploring chemical reactions with simple, safe experiments using kitchen ingredients.",
               "image_path": "https://source.unsplash.com/500x500/?kitchen-chemistry",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "The Wonders of Life Science",
       "description": "Cultivating an appreciation for life in all its forms, from the tiniest cell to the largest ecosystems.",
       "image_path": "https://source.unsplash.com/500x500/?life-science",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "Parts of a Plant",
               "description": "Exploring the parts of a plant and their functions in its growth.",
               "image_path": "https://source.unsplash.com/500x500/?plants",
               "type": "CORE"
           },
           {
               "name": "Animal Classification",
               "description": "Learning to classify animals based on their characteristics and behaviors.",
               "image_path": "https://source.unsplash.com/500x500/?animals",
               "type": "CORE"
           },
           {
               "name": "Human Body Basics",
               "description": "Introducing the basic body systems and their functions to maintain life.",
               "image_path": "https://source.unsplash.com/500x500/?human-body",
               "type": "CORE"
           },
           {
               "name": "Life Cycles",
               "description": "Understanding the different life cycles of plants and animals.",
               "image_path": "https://source.unsplash.com/500x500/?life-cycle",
               "type": "CORE"
           },
           {
               "name": "Food Chain and Webs",
               "description": "Exploring the interconnectedness of life through food chains and webs.",
               "image_path": "https://source.unsplash.com/500x500/?food-chain",
               "type": "CORE"
           },
           {
               "name": "Simple Cell Biology",
               "description": "Discovering the world of cells, the building blocks of all life.",
               "image_path": "https://source.unsplash.com/500x500/?cells",
               "type": "ELECTIVE"
           },
           {
               "name": "Biodiversity",
               "description": "Appreciating the vast array of life on Earth and understanding why it matters.",
               "image_path": "https://source.unsplash.com/500x500/?biodiversity",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Unveiling Earth Sciences",
       "description": "Sparkling interest in the planet we inhabit, from majestic mountains to the restless sea.",
       "image_path": "https://source.unsplash.com/500x500/?earth",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "Landforms and Bodies of Water",
               "description": "Identifying different types of landforms and bodies of water that make up Earth‘s surface.",
               "image_path": "https://source.unsplash.com/500x500/?landforms",
               "type": "CORE"
           },
           {
               "name": "Rocks and Minerals",
               "description": "Exploring the fascinating world of rocks and minerals and their various properties.",
               "image_path": "https://source.unsplash.com/500x500/?rocks-minerals",
               "type": "CORE"
           },
           {
               "name": "Volcanoes and Earthquakes",
               "description": "Understanding the causes and effects of volcanoes and earthquakes on our planet.",
               "image_path": "https://source.unsplash.com/500x500/?volcano",
               "type": "CORE"
           },
           {
               "name": "Weathering and Erosion",
               "description": "Learning about the natural processes of weathering and erosion and how they shape the Earth.",
               "image_path": "https://source.unsplash.com/500x500/?erosion",
               "type": "CORE"
           },
           {
               "name": "Introduction to Fossils",
               "description": "Discovering how fossils are formed and what they tell us about the past.",
               "image_path": "https://source.unsplash.com/500x500/?fossils",
               "type": "CORE"
           },
           {
               "name": "The Water Cycle",
               "description": "Understanding the water cycle and its crucial role in Earth‘s climate system.",
               "image_path": "https://source.unsplash.com/500x500/?water-cycle",
               "type": "ELECTIVE"
           },
           {
               "name": "Conserving Natural Resources",
               "description": "Learning about the importance of conserving natural resources for future generations.",
               "image_path": "https://source.unsplash.com/500x500/?conservation",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Adventures in Space Science",
       "description": "Launching imaginations into the cosmos, instilling a sense of awe and wonder about the universe.",
       "image_path": "https://source.unsplash.com/500x500/?space",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "The Solar System",
               "description": "Embarking on a tour of our solar system and learning about the planets and their features.",
               "image_path": "https://source.unsplash.com/500x500/?solar-system",
               "type": "CORE"
           },
           {
               "name": "The Moon and its Phases",
               "description": "Understanding the moon‘s different phases and their causes.",
               "image_path": "https://source.unsplash.com/500x500/?moon",
               "type": "CORE"
           },
           {
               "name": "Stars and Constellations",
               "description": "Studying the night sky to identify different stars and constellations.",
               "image_path": "https://source.unsplash.com/500x500/?stars",
               "type": "CORE"
           },
           {
               "name": "Astronauts and Space Travel",
               "description": "Learning about astronauts, their training, and how they travel to space.",
               "image_path": "https://source.unsplash.com/500x500/?astronaut",
               "type": "CORE"
           },
           {
               "name": "Earth‘s Rotation and Revolution",
               "description": "Exploring how Earth‘s rotation and revolution result in day and night and the changing seasons.",
               "image_path": "https://source.unsplash.com/500x500/?earth-rotation",
               "type": "CORE"
           },
           {
               "name": "The Concept of Gravity",
               "description": "Understanding the concept of gravity and its role in the universe.",
               "image_path": "https://source.unsplash.com/500x500/?gravity",
               "type": "ELECTIVE"
           },
           {
               "name": "Mars: The Red Planet",
               "description": "Delving into the mysteries of Mars, our neighboring planet.",
               "image_path": "https://source.unsplash.com/500x500/?mars",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "The Magic of Light and Color",
       "description": "Illuminating the nature of light and color, and exploring how they interact with our world.",
       "image_path": "https://source.unsplash.com/500x500/?light-color",
       "type": "CORE",
       "lessons_data": [
           {
               "name": "Sources of Light",
               "description": "Identifying different sources of light and understanding how they help us see.",
               "image_path": "https://source.unsplash.com/500x500/?light-sources",
               "type": "CORE"
           },
           {
               "name": "Reflection and Shadows",
               "description": "Exploring how light interacts with objects to create reflections and shadows.",
               "image_path": "https://source.unsplash.com/500x500/?reflection-shadow",
               "type": "CORE"
           },
           {
               "name": "Colors and Light",
               "description": "Understanding how light is responsible for the colors we see.",
               "image_path": "https://source.unsplash.com/500x500/?colors",
               "type": "CORE"
           },
           {
               "name": "Rainbows and Prisms",
               "description": "Learning about how rainbows form and using prisms to separate white light into colors.",
               "image_path": "https://source.unsplash.com/500x500/?rainbows",
               "type": "CORE"
           },
           {
               "name": "The Eye and Vision",
               "description": "Discovering how our eyes work to capture light and enable us to see.",
               "image_path": "https://source.unsplash.com/500x500/?eye",
               "type": "CORE"
           },
           {
               "name": "Light in Nature",
               "description": "Exploring bioluminescence and other natural phenomena related to light.",
               "image_path": "https://source.unsplash.com/500x500/?bioluminescence",
               "type": "ELECTIVE"
           },
           {
               "name": "Optical Illusions",
               "description": "Investigating optical illusions and what they reveal about how our brains process light and color.",
               "image_path": "https://source.unsplash.com/500x500/?optical-illusion",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Inventors and Inventions",
       "description": "Inspiring curiosity and creativity by studying remarkable inventors and their world-changing inventions.",
       "image_path": "https://source.unsplash.com/500x500/?inventions",
       "type": "ELECTIVE",
       "lessons_data": [
           {
               "name": "The Light Bulb",
               "description": "Learning about the invention of the light bulb and its impact on society.",
               "image_path": "https://source.unsplash.com/500x500/?light-bulb",
               "type": "CORE"
           },
           {
               "name": "The Telephone",
               "description": "Understanding the evolution of communication with the invention of the telephone.",
               "image_path": "https://source.unsplash.com/500x500/?telephone",
               "type": "CORE"
           },
           {
               "name": "The Airplane",
               "description": "Exploring the invention of the airplane and how it changed the way we travel.",
               "image_path": "https://source.unsplash.com/500x500/?airplane",
               "type": "CORE"
           },
           {
               "name": "The Computer",
               "description": "Appreciating the invention of the computer and its vast influence on our lives.",
               "image_path": "https://source.unsplash.com/500x500/?computer",
               "type": "CORE"
           },
           {
               "name": "Famous Inventors",
               "description": "Discovering the stories of famous inventors and their contributions to science and technology.",
               "image_path": "https://source.unsplash.com/500x500/?inventors",
               "type": "ELECTIVE"
           },
           {
               "name": "Kid Inventors",
               "description": "Encouraging innovative thinking by learning about inventions made by kids.",
               "image_path": "https://source.unsplash.com/500x500/?kid-inventors",
               "type": "ELECTIVE"
           }
       ]
},
{
       "name": "Wonders of Weather",
       "description": "Uncovering the dynamics of weather and gaining a deeper understanding of climate phenomena.",
       "image_path": "https://source.unsplash.com/500x500/?weather",
       "type": "ELECTIVE",
       "lessons_data": [
           {
               "name": "Weather Patterns",
               "description": "Exploring various weather patterns and learning about their impact on our planet.",
               "image_path": "https://source.unsplash.com/500x500/?weather-patterns",
               "type": "CORE"
           },
           {
               "name": "Types of Clouds",
               "description": "Identifying different types of clouds and understanding what they indicate about the weather.",
               "image_path": "https://source.unsplash.com/500x500/?clouds",
               "type": "CORE"
           },
           {
               "name": "Climate Zones",
               "description": "Studying different climate zones around the world and the weather patterns associated with them.",
               "image_path": "https://source.unsplash.com/500x500/?climate-zones",
               "type": "CORE"
           },
           {
               "name": "Natural Disasters",
               "description": "Learning about various natural disasters and understanding their causes and effects.",
               "image_path": "https://source.unsplash.com/500x500/?natural-disasters",
               "type": "CORE"
           },
           {
               "name": "Climate Change",
               "description": "Discussing the concept of climate change and its potential impacts on our planet.",
               "image_path": "https://source.unsplash.com/500x500/?climate-change",
               "type": "ELECTIVE"
           },
           {
               "name": "Weather Forecasting",
               "description": "Introducing the science behind weather forecasting and its importance in our daily lives.",
               "image_path": "https://source.unsplash.com/500x500/?weather-forecasting",
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
   "name": "Exploring Ecosystems",
   "description": "A magical journey into the interconnected world of plants, animals, and the environment.",
   "image_path": "https://source.unsplash.com/500x500/?ecosystems",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Ecosystems",
           "description": "Discover the magic of ecosystems and their crucial role in our environment.",
           "image_path": "https://source.unsplash.com/500x500/?forest",
           "type": "CORE"
       },
       {
           "name": "Forest Ecosystem",
           "description": "Explore the lush, green world of the forest ecosystem and its inhabitants.",
           "image_path": "https://source.unsplash.com/500x500/?forest",
           "type": "CORE"
       },
       {
           "name": "Aquatic Ecosystems",
           "description": "Dive into the fascinating world of water-based ecosystems and their unique lifeforms.",
           "image_path": "https://source.unsplash.com/500x500/?aquatic",
           "type": "CORE"
       },
       {
           "name": "Desert Ecosystem",
           "description": "Uncover the resilient life forms of the arid desert ecosystem.",
           "image_path": "https://source.unsplash.com/500x500/?desert",
           "type": "CORE"
       },
       {
           "name": "Polar Ecosystem",
           "description": "Explore the icy, extreme world of the polar ecosystem and its wildlife.",
           "image_path": "https://source.unsplash.com/500x500/?polar",
           "type": "CORE"
       },
       {
           "name": "Rainforest Ecosystem",
           "description": "Discover the diverse and vibrant life of the rainforest ecosystem.",
           "image_path": "https://source.unsplash.com/500x500/?rainforest",
           "type": "ELECTIVE"
       },
       {
           "name": "Grassland Ecosystem",
           "description": "Learn about the open landscapes of grassland ecosystems and the creatures that inhabit them.",
           "image_path": "https://source.unsplash.com/500x500/?grassland",
           "type": "ELECTIVE"
       }
   ]
},{
   "name": "Marvels of Matter",
   "description": "Embark on a fun-filled adventure into the microscopic world of atoms, molecules, and states of matter.",
   "image_path": "https://source.unsplash.com/500x500/?matter",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Matter",
           "description": "Discover the wonders of matter and its importance in the universe.",
           "image_path": "https://source.unsplash.com/500x500/?atoms",
           "type": "CORE"
       },
       {
           "name": "Understanding Atoms",
           "description": "Dive into the fascinating world of atoms, the building blocks of matter.",
           "image_path": "https://source.unsplash.com/500x500/?atoms",
           "type": "CORE"
       },
       {
           "name": "States of Matter",
           "description": "Explore the different states of matter: solid, liquid, and gas.",
           "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
           "type": "CORE"
       },
       {
           "name": "Changing States",
           "description": "Understand the process of how matter changes from one state to another.",
           "image_path": "https://source.unsplash.com/500x500/?changing-states",
           "type": "CORE"
       },
       {
           "name": "The Magic of Molecules",
           "description": "Learn about the amazing world of molecules and how they interact.",
           "image_path": "https://source.unsplash.com/500x500/?molecules",
           "type": "CORE"
       },
       {
           "name": "Matter in Daily Life",
           "description": "Identify the different forms of matter in our everyday lives.",
           "image_path": "https://source.unsplash.com/500x500/?daily-life",
           "type": "ELECTIVE"
       },
       {
           "name": "Fun Experiments with Matter",
           "description": "Experience the fun side of science with hands-on experiments involving matter.",
           "image_path": "https://source.unsplash.com/500x500/?science-experiments",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "The Energy Around Us",
   "description": "Discover the different forms of energy and learn how energy powers the world around us.",
   "image_path": "https://source.unsplash.com/500x500/?energy",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Energy",
           "description": "Discover the amazing world of energy and its importance in our lives.",
           "image_path": "https://source.unsplash.com/500x500/?energy",
           "type": "CORE"
       },
       {
           "name": "Kinetic Energy",
           "description": "Learn about kinetic energy and its role in movement.",
           "image_path": "https://source.unsplash.com/500x500/?kinetic-energy",
           "type": "CORE"
       },
       {
           "name": "Potential Energy",
           "description": "Explore potential energy and the concept of stored energy.",
           "image_path": "https://source.unsplash.com/500x500/?potential-energy",
           "type": "CORE"
       },
       {
           "name": "Heat Energy",
           "description": "Understand heat energy and how it affects the world around us.",
           "image_path": "https://source.unsplash.com/500x500/?heat-energy",
           "type": "CORE"
       },
       {
           "name": "Light Energy",
           "description": "Learn about light energy and how we see the world.",
           "image_path": "https://source.unsplash.com/500x500/?light-energy",
           "type": "CORE"
       },
       {
           "name": "Sound Energy",
           "description": "Experience the amazing world of sound energy and how it influences our lives.",
           "image_path": "https://source.unsplash.com/500x500/?sound-energy",
           "type": "ELECTIVE"
       },
       {
           "name": "Energy in Nature",
           "description": "Discover how energy drives the natural world around us.",
           "image_path": "https://source.unsplash.com/500x500/?nature-energy",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "Fascinating Life Cycles",
   "description": "Embark on a journey of discovery through the fascinating cycles of life in the natural world.",
   "image_path": "https://source.unsplash.com/500x500/?life-cycles",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Life Cycles",
           "description": "Discover the fascinating process of life cycles and their importance in nature.",
           "image_path": "https://source.unsplash.com/500x500/?life-cycle",
           "type": "CORE"
       },
       {
           "name": "Life Cycle of a Butterfly",
           "description": "Explore the magical transformation of a caterpillar into a beautiful butterfly.",
           "image_path": "https://source.unsplash.com/500x500/?butterfly",
           "type": "CORE"
       },
       {
           "name": "Life Cycle of a Frog",
           "description": "Learn about the fascinating journey from egg to tadpole to frog.",
           "image_path": "https://source.unsplash.com/500x500/?frog",
           "type": "CORE"
       },
       {
           "name": "Life Cycle of a Plant",
           "description": "Discover the amazing process of how a tiny seed grows into a mature plant.",
           "image_path": "https://source.unsplash.com/500x500/?plant",
           "type": "CORE"
       },
       {
           "name": "Life Cycle of a Bird",
           "description": "Understand the captivating journey from egg to adult bird.",
           "image_path": "https://source.unsplash.com/500x500/?bird",
           "type": "CORE"
       },
       {
           "name": "Life Cycle of a Mammal",
           "description": "Learn about the interesting life cycle stages of mammals.",
           "image_path": "https://source.unsplash.com/500x500/?mammal",
           "type": "ELECTIVE"
       },
       {
           "name": "Comparing Life Cycles",
           "description": "Compare and contrast the different life cycles in the animal kingdom.",
           "image_path": "https://source.unsplash.com/500x500/?life-cycles",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "The Wonders of Weather",
   "description": "Embark on a thrilling journey into the dynamics of weather and how it shapes our world.",
   "image_path": "https://source.unsplash.com/500x500/?weather",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Weather",
           "description": "Discover the fascinating world of weather and its impact on our lives.",
           "image_path": "https://source.unsplash.com/500x500/?weather",
           "type": "CORE"
       },
       {
           "name": "The Water Cycle",
           "description": "Explore the water cycle and its critical role in the Earth‘s weather systems.",
           "image_path": "https://source.unsplash.com/500x500/?water-cycle",
           "type": "CORE"
       },
       {
           "name": "Weather Patterns",
           "description": "Understand different weather patterns and how they affect the environment.",
           "image_path": "https://source.unsplash.com/500x500/?weather-patterns",
           "type": "CORE"
       },
       {
           "name": "Types of Clouds",
           "description": "Learn about the different types of clouds and what they indicate about the weather.",
           "image_path": "https://source.unsplash.com/500x500/?clouds",
           "type": "CORE"
       },
       {
           "name": "Storms and Weather Safety",
           "description": "Discover the power of storms and the importance of weather safety.",
           "image_path": "https://source.unsplash.com/500x500/?storms",
           "type": "CORE"
       },
       {
           "name": "Weather Instruments",
           "description": "Explore various weather instruments and how they help us predict weather.",
           "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
           "type": "ELECTIVE"
       },
       {
           "name": "Climate and Seasons",
           "description": "Learn about the influence of climate and the change of seasons on our planet.",
           "image_path": "https://source.unsplash.com/500x500/?seasons",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "Astronomy Adventures",
   "description": "Embark on a galactic journey to explore the mysteries of our universe, stars, and planets.",
   "image_path": "https://source.unsplash.com/500x500/?astronomy",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Astronomy",
           "description": "Launch into the fascinating world of astronomy and its significance in our lives.",
           "image_path": "https://source.unsplash.com/500x500/?space",
           "type": "CORE"
       },
       {
           "name": "Our Solar System",
           "description": "Take a voyage through our solar system and learn about its unique planets.",
           "image_path": "https://source.unsplash.com/500x500/?solar-system",
           "type": "CORE"
       },
       {
           "name": "The Mighty Sun",
           "description": "Understand the role of the sun, its structure, and how it impacts life on Earth.",
           "image_path": "https://source.unsplash.com/500x500/?sun",
           "type": "CORE"
       },
       {
           "name": "Moon Phases",
           "description": "Discover the lunar cycle and the various phases of the moon.",
           "image_path": "https://source.unsplash.com/500x500/?moon",
           "type": "CORE"
       },
       {
           "name": "Star Gazing",
           "description": "Learn about different constellations, their stories, and how to spot them in the night sky.",
           "image_path": "https://source.unsplash.com/500x500/?stars",
           "type": "CORE"
       },
       {
           "name": "Space Exploration",
           "description": "Learn about the history and future of human space exploration.",
           "image_path": "https://source.unsplash.com/500x500/?space-exploration",
           "type": "ELECTIVE"
       },
       {
           "name": "Aliens and Extraterrestrial Life",
           "description": "Discuss the possibilities of extraterrestrial life and our ongoing search for alien life forms.",
           "image_path": "https://source.unsplash.com/500x500/?aliens",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "Eco Explorers",
   "description": "Embark on an exciting journey to understand ecosystems and the delicate balance of life on Earth.",
   "image_path": "https://source.unsplash.com/500x500/?ecosystem",
   "type": "CORE",
   "lessons_data": [
       {
           "name": "Introduction to Ecosystems",
           "description": "Dive into the fascinating world of ecosystems and their importance for life on Earth.",
           "image_path": "https://source.unsplash.com/500x500/?ecosystem",
           "type": "CORE"
       },
       {
           "name": "Land Ecosystems",
           "description": "Explore the diverse land ecosystems, from dense forests to arid deserts.",
           "image_path": "https://source.unsplash.com/500x500/?land-ecosystem",
           "type": "CORE"
       },
       {
           "name": "Water Ecosystems",
           "description": "Learn about aquatic ecosystems, both freshwater and marine, and their rich biodiversity.",
           "image_path": "https://source.unsplash.com/500x500/?water-ecosystem",
           "type": "CORE"
       },
       {
           "name": "Food Chains and Webs",
           "description": "Understand food chains and food webs, and the roles different species play in these systems.",
           "image_path": "https://source.unsplash.com/500x500/?food-chain",
           "type": "CORE"
       },
       {
           "name": "Human Impact on Ecosystems",
           "description": "Discover how human activities affect ecosystems and what we can do to reduce negative impacts.",
           "image_path": "https://source.unsplash.com/500x500/?human-impact",
           "type": "CORE"
       },
       {
           "name": "Climate Change and Ecosystems",
           "description": "Discuss climate change, its effects on global ecosystems, and the importance of sustainability.",
           "image_path": "https://source.unsplash.com/500x500/?climate-change",
           "type": "ELECTIVE"
       },
       {
           "name": "Conservation and Protection of Ecosystems",
           "description": "Learn about conservation efforts and how we can help protect our planet‘s ecosystems.",
           "image_path": "https://source.unsplash.com/500x500/?conservation",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "Fun with Physics",
   "description": "Embark on a thrilling adventure into the world of physics, understanding the basic principles of motion, energy, and forces.",
   "image_path": "https://source.unsplash.com/500x500/?physics",
   "type": "ELECTIVE",
   "lessons_data": [
       {
           "name": "Introduction to Physics",
           "description": "Discover the intriguing world of physics and how it governs the world around us.",
           "image_path": "https://source.unsplash.com/500x500/?physics",
           "type": "CORE"
       },
       {
           "name": "Gravity and Its Effects",
           "description": "Learn about the force of gravity, its effects, and its importance in our daily lives.",
           "image_path": "https://source.unsplash.com/500x500/?gravity",
           "type": "CORE"
       },
       {
           "name": "Energy: Forms and Transformations",
           "description": "Explore the various forms of energy and how they transform from one to another.",
           "image_path": "https://source.unsplash.com/500x500/?energy",
           "type": "CORE"
       },
       {
           "name": "Forces and Motion",
           "description": "Understand the fundamental concepts of forces, and how they influence motion.",
           "image_path": "https://source.unsplash.com/500x500/?force",
           "type": "CORE"
       },
       {
           "name": "Sound and Light",
           "description": "Discover the fascinating world of sound and light, and their properties.",
           "image_path": "https://source.unsplash.com/500x500/?sound-light",
           "type": "ELECTIVE"
       },
       {
           "name": "Magnets and Magnetism",
           "description": "Explore the mysterious world of magnets and the invisible force of magnetism.",
           "image_path": "https://source.unsplash.com/500x500/?magnets",
           "type": "ELECTIVE"
       }
   ]
},
{
   "name": "Chemistry Capers",
   "description": "Dive into the exciting world of chemistry, exploring the magic of matter, reactions, and the elements around us.",
   "image_path": "https://source.unsplash.com/500x500/?chemistry",
   "type": "ELECTIVE",
   "lessons_data": [
       {
           "name": "Introduction to Chemistry",
           "description": "Unravel the world of chemistry, understanding the building blocks of matter.",
           "image_path": "https://source.unsplash.com/500x500/?chemistry",
           "type": "CORE"
       },
       {
           "name": "States of Matter",
           "description": "Explore the different states of matter: solids, liquids, and gases.",
           "image_path": "https://source.unsplash.com/500x500/?states-of-matter",
           "type": "CORE"
       },
       {
           "name": "Chemical vs Physical Changes",
           "description": "Understand the differences between physical and chemical changes through interesting experiments.",
           "image_path": "https://source.unsplash.com/500x500/?chemical-change",
           "type": "CORE"
       },
       {
           "name": "Mixtures and Solutions",
           "description": "Discover what makes a mixture and a solution, and learn about their properties.",
           "image_path": "https://source.unsplash.com/500x500/?solutions",
           "type": "CORE"
       },
       {
           "name": "Introduction to the Periodic Table",
           "description": "Get introduced to the periodic table, the organization of elements and its importance in chemistry.",
           "image_path": "https://source.unsplash.com/500x500/?periodic-table",
           "type": "ELECTIVE"
       },
       {
           "name": "Acids and Bases",
           "description": "Dive into the world of acids and bases, learning about their properties and uses.",
           "image_path": "https://source.unsplash.com/500x500/?acids-bases",
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
        "name": "Introduction to Ecology",
        "description": "Discovering the intricate relationships that form the backbone of our planet‘s diverse ecosystems.",
        "image_path": "https://source.unsplash.com/500x500/?ecology",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "The Web of Life",
                "description": "Understanding the interconnectedness of species in an ecosystem.",
                "image_path": "https://source.unsplash.com/500x500/?ecosystem",
                "type": "CORE"
            },
            {
                "name": "Habitat Exploration",
                "description": "Exploring different habitats and how they support the life forms within them.",
                "image_path": "https://source.unsplash.com/500x500/?habitat",
                "type": "CORE"
            },
            {
                "name": "Cycle of Matter",
                "description": "Learning about how matter cycles through an ecosystem.",
                "image_path": "https://source.unsplash.com/500x500/?matter-cycle",
                "type": "CORE"
            },
            {
                "name": "Energy Flow",
                "description": "Understanding how energy moves through an ecosystem.",
                "image_path": "https://source.unsplash.com/500x500/?energy-flow",
                "type": "CORE"
            },
            {
                "name": "Adaptation and Survival",
                "description": "Exploring how organisms adapt to their environments for survival.",
                "image_path": "https://source.unsplash.com/500x500/?adaptation",
                "type": "CORE"
            },
            {
                "name": "Ecosystem Disruptions",
                "description": "Exploring how human activities and natural events can disrupt ecosystems.",
                "image_path": "https://source.unsplash.com/500x500/?ecosystem-disruption",
                "type": "ELECTIVE"
            },
            {
                "name": "Conservation Practices",
                "description": "Learning about the importance of conservation and sustainable practices in protecting ecosystems.",
                "image_path": "https://source.unsplash.com/500x500/?conservation",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "Physics Fun",
        "description": "Unlocking the mysteries of the physical world through engaging, hands-on experiments.",
        "image_path": "https://source.unsplash.com/500x500/?physics",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Forces and Motion",
                "description": "Exploring the fundamental concepts of force, motion, and gravity.",
                "image_path": "https://source.unsplash.com/500x500/?forces-motion",
                "type": "CORE"
            },
            {
                "name": "Understanding Energy",
                "description": "Delving into the different forms of energy and their transformations.",
                "image_path": "https://source.unsplash.com/500x500/?energy",
                "type": "CORE"
            },
            {
                "name": "Sound and Light",
                "description": "Exploring how sound and light travel and interact with matter.",
                "image_path": "https://source.unsplash.com/500x500/?sound-light",
                "type": "CORE"
            },
            {
                "name": "Simple Machines",
                "description": "Learning about the six types of simple machines and their uses.",
                "image_path": "https://source.unsplash.com/500x500/?simple-machines",
                "type": "CORE"
            },
            {
                "name": "Heat and Temperature",
                "description": "Investigating the concepts of heat energy and temperature.",
                "image_path": "https://source.unsplash.com/500x500/?heat-temperature",
                "type": "CORE"
            },
            {
                "name": "Magnetism",
                "description": "Investigating the properties of magnets and magnetic fields.",
                "image_path": "https://source.unsplash.com/500x500/?magnetism",
                "type": "ELECTIVE"
            },
            {
                "name": "Electricity Basics",
                "description": "Getting introduced to the concepts of electrical energy and circuits.",
                "image_path": "https://source.unsplash.com/500x500/?electricity",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "The Wonders of Weather",
        "description": "Exploring weather patterns, climate zones, and the science behind everyday weather phenomena.",
        "image_path": "https://source.unsplash.com/500x500/?weather",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Understanding Weather",
                "description": "Investigating the basic elements that make up weather and how they are measured.",
                "image_path": "https://source.unsplash.com/500x500/?weather-elements",
                "type": "CORE"
            },
            {
                "name": "Climate and Climate Zones",
                "description": "Learning about the different climate zones and their characteristics.",
                "image_path": "https://source.unsplash.com/500x500/?climate-zones",
                "type": "CORE"
            },
            {
                "name": "Weather Instruments",
                "description": "Understanding how different weather instruments work and what they measure.",
                "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
                "type": "CORE"
            },
            {
                "name": "Weather Patterns",
                "description": "Exploring how weather patterns form and what influences them.",
                "image_path": "https://source.unsplash.com/500x500/?weather-patterns",
                "type": "CORE"
            },
            {
                "name": "Clouds and Precipitation",
                "description": "Discovering the different types of clouds and how they relate to weather conditions.",
                "image_path": "https://source.unsplash.com/500x500/?clouds",
                "type": "CORE"
            },
            {
                "name": "Extreme Weather",
                "description": "Learning about extreme weather events and their impact on the environment and human life.",
                "image_path": "https://source.unsplash.com/500x500/?extreme-weather",
                "type": "ELECTIVE"
            },
            {
                "name": "Climate Change",
                "description": "Understanding the causes and effects of climate change on our planet.",
                "image_path": "https://source.unsplash.com/500x500/?climate-change",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "Human Body Explorers",
        "description": "Embarking on a journey through the human body, learning about its amazing systems and functions.",
        "image_path": "https://source.unsplash.com/500x500/?human-body",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Introduction to the Human Body",
                "description": "An overview of the different systems that make up the human body.",
                "image_path": "https://source.unsplash.com/500x500/?body-systems",
                "type": "CORE"
            },
            {
                "name": "The Skeletal and Muscular System",
                "description": "Discovering how our bones and muscles work together to provide structure and movement.",
                "image_path": "https://source.unsplash.com/500x500/?skeleton-muscles",
                "type": "CORE"
            },
            {
                "name": "The Digestive System",
                "description": "Exploring how our bodies process food and extract nutrients.",
                "image_path": "https://source.unsplash.com/500x500/?digestive-system",
                "type": "CORE"
            },
            {
                "name": "The Respiratory System",
                "description": "Learning about how we breathe and how oxygen is used in our bodies.",
                "image_path": "https://source.unsplash.com/500x500/?respiratory-system",
                "type": "CORE"
            },
            {
                "name": "The Circulatory System",
                "description": "Investigating how our heart and blood vessels transport blood throughout our bodies.",
                "image_path": "https://source.unsplash.com/500x500/?circulatory-system",
                "type": "CORE"
            },
            {
                "name": "The Nervous System",
                "description": "Unveiling the wonders of the brain and the nervous system.",
                "image_path": "https://source.unsplash.com/500x500/?nervous-system",
                "type": "ELECTIVE"
            },
            {
                "name": "The Immune System",
                "description": "Understanding how our bodies fight off diseases and keep us healthy.",
                "image_path": "https://source.unsplash.com/500x500/?immune-system",
                "type": "ELECTIVE"
            }
        ]
    },
    {
    "name": "Space Explorers",
    "description": "Embarking on an interstellar journey to explore the celestial bodies and the vastness of space.",
    "image_path": "https://source.unsplash.com/500x500/?space",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "The Solar System",
            "description": "Discovering the planets, their moons, and other celestial bodies in our solar system.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
        },
        {
            "name": "Stars and Constellations",
            "description": "Exploring stars, constellations, and how they change throughout the year.",
            "image_path": "https://source.unsplash.com/500x500/?stars-constellations",
            "type": "CORE"
        },
        {
            "name": "Earth‘s Rotation and Revolution",
            "description": "Learning about Earth‘s rotation and revolution and how they impact our daily lives.",
            "image_path": "https://source.unsplash.com/500x500/?earth-rotation",
            "type": "CORE"
        },
        {
            "name": "The Moon and its Phases",
            "description": "Understanding the moon‘s phases and its role in the lunar calendar.",
            "image_path": "https://source.unsplash.com/500x500/?moon-phases",
            "type": "CORE"
        },
        {
            "name": "Introduction to Astronomy",
            "description": "An overview of astronomy as a science and its contribution to our understanding of space.",
            "image_path": "https://source.unsplash.com/500x500/?astronomy",
            "type": "CORE"
        },
        {
            "name": "Space Exploration History",
            "description": "Learning about the history of space exploration and its major milestones.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "ELECTIVE"
        },
        {
            "name": "The Future of Space Travel",
            "description": "Discussing the prospects, challenges, and ethics of future space travel and colonization.",
            "image_path": "https://source.unsplash.com/500x500/?space-travel",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Marine Wonders",
    "description": "Diving into the deep blue to explore the life, processes, and mysteries of our oceans.",
    "image_path": "https://source.unsplash.com/500x500/?ocean",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Ocean Zones and Life",
            "description": "Discovering the different zones of the ocean and the diverse organisms that inhabit them.",
            "image_path": "https://source.unsplash.com/500x500/?ocean-zones",
            "type": "CORE"
        },
        {
            "name": "Marine Ecosystems",
            "description": "Exploring various marine ecosystems, from the vibrant coral reefs to the quiet deep-sea floors.",
            "image_path": "https://source.unsplash.com/500x500/?marine-ecosystems",
            "type": "CORE"
        },
        {
            "name": "Ocean Currents and Climate",
            "description": "Understanding how ocean currents influence global weather and climate patterns.",
            "image_path": "https://source.unsplash.com/500x500/?ocean-currents",
            "type": "CORE"
        },
        {
            "name": "Tides and Waves",
            "description": "Learning about the formation of tides and waves and their impact on coastal life and landforms.",
            "image_path": "https://source.unsplash.com/500x500/?tides-waves",
            "type": "CORE"
        },
        {
            "name": "Marine Conservation",
            "description": "Discussing the importance of marine conservation and sustainable practices to preserve our oceans.",
            "image_path": "https://source.unsplash.com/500x500/?marine-conservation",
            "type": "CORE"
        },
        {
            "name": "Ocean Exploration",
            "description": "Learning about past and present explorations into the deep sea and their discoveries.",
            "image_path": "https://source.unsplash.com/500x500/?deep-sea-exploration",
            "type": "ELECTIVE"
        },
        {
            "name": "The Great Oceanic Migrations",
            "description": "Investigating the great migrations of various marine creatures across vast oceanic distances.",
            "image_path": "https://source.unsplash.com/500x500/?marine-migrations",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Incredible Insects",
    "description": "Embarking on a microscopic journey to discover the intricate world of insects and their roles in our ecosystem.",
    "image_path": "https://source.unsplash.com/500x500/?insects",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Introduction to Insects",
            "description": "Learning about the defining characteristics of insects and their diverse species.",
            "image_path": "https://source.unsplash.com/500x500/?insect-introduction",
            "type": "CORE"
        },
        {
            "name": "Insect Life Cycles",
            "description": "Understanding the different stages in the life cycle of various insects.",
            "image_path": "https://source.unsplash.com/500x500/?insect-life-cycle",
            "type": "CORE"
        },
        {
            "name": "Insect Habitats",
            "description": "Exploring the varied habitats of insects and how they adapt to their environments.",
            "image_path": "https://source.unsplash.com/500x500/?insect-habitats",
            "type": "CORE"
        },
        {
            "name": "Insects and Ecosystems",
            "description": "Investigating the roles insects play in pollination, decomposition, and as a food source in the ecosystem.",
            "image_path": "https://source.unsplash.com/500x500/?insects-ecosystem",
            "type": "CORE"
        },
        {
            "name": "Insect Behavior",
            "description": "Studying the fascinating behaviors of insects, from communication to migration.",
            "image_path": "https://source.unsplash.com/500x500/?insect-behavior",
            "type": "CORE"
        },
        {
            "name": "Beneficial and Harmful Insects",
            "description": "Learning about how some insects benefit our environment and how others can be harmful.",
            "image_path": "https://source.unsplash.com/500x500/?beneficial-insects",
            "type": "ELECTIVE"
        },
        {
            "name": "Insect Conservation",
            "description": "Discussing the importance of insect conservation and the threats many species face.",
            "image_path": "https://source.unsplash.com/500x500/?insect-conservation",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Inventors and Innovations",
    "description": "Appreciating the creative minds behind transformative scientific inventions and innovations that shaped our world.",
    "image_path": "https://source.unsplash.com/500x500/?inventions",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "History of Inventions",
            "description": "A journey through time to discover groundbreaking inventions and their impact on society.",
            "image_path": "https://source.unsplash.com/500x500/?history-of-inventions",
            "type": "CORE"
        },
        {
            "name": "Famous Inventors",
            "description": "Learning about famous inventors, their lives, and their monumental contributions to science and technology.",
            "image_path": "https://source.unsplash.com/500x500/?famous-inventors",
            "type": "CORE"
        },
        {
            "name": "The Process of Inventing",
            "description": "Understanding the process of invention, from ideation to patenting.",
            "image_path": "https://source.unsplash.com/500x500/?inventing-process",
            "type": "CORE"
        },
        {
            "name": "Impact of Inventions on Society",
            "description": "Examining how various inventions have influenced social, economic, and cultural aspects of our lives.",
            "image_path": "https://source.unsplash.com/500x500/?impact-of-inventions",
            "type": "CORE"
        },
        {
            "name": "Inventions and Sustainability",
            "description": "Discussing the role of inventions in promoting sustainable living and environmental conservation.",
            "image_path": "https://source.unsplash.com/500x500/?sustainable-inventions",
            "type": "ELECTIVE"
        },
        {
            "name": "Invention Project",
            "description": "A hands-on project that involves identifying a problem and inventing a solution.",
            "image_path": "https://source.unsplash.com/500x500/?invention-project",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Natural Disasters",
    "description": "Exploring the powerful forces of nature that lead to catastrophic events, and understanding their impact on the environment and society.",
    "image_path": "https://source.unsplash.com/500x500/?natural-disasters",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "Earthquakes",
            "description": "Learning about the causes and effects of earthquakes, and how they shape our planet‘s landscape.",
            "image_path": "https://source.unsplash.com/500x500/?earthquake",
            "type": "CORE"
        },
        {
            "name": "Volcanoes",
            "description": "Understanding the formation and eruption of volcanoes, and their impact on local ecosystems and climate.",
            "image_path": "https://source.unsplash.com/500x500/?volcano",
            "type": "CORE"
        },
        {
            "name": "Tornadoes",
            "description": "Exploring the formation and effects of tornadoes, including weather prediction and safety measures.",
            "image_path": "https://source.unsplash.com/500x500/?tornado",
            "type": "CORE"
        },
        {
            "name": "Floods",
            "description": "Investigating the causes of floods, their aftermath, and flood management strategies.",
            "image_path": "https://source.unsplash.com/500x500/?flood",
            "type": "CORE"
        },
        {
            "name": "Hurricanes",
            "description": "Discussing the formation and effects of hurricanes, including prediction methods and disaster management.",
            "image_path": "https://source.unsplash.com/500x500/?hurricane",
            "type": "ELECTIVE"
        },
        {
            "name": "Wildfires",
            "description": "Understanding the causes of wildfires, their impact on ecosystems, and ways to prevent them.",
            "image_path": "https://source.unsplash.com/500x500/?wildfire",
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
        "name": "The Wonders of Space",
        "description": "Exploring the vast expanse of the cosmos, unveiling the secrets of stars, planets, and galaxies.",
        "image_path": "https://source.unsplash.com/500x500/?space",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Astronomy Basics",
                "description": "Discover the foundations of astronomy and celestial navigation.",
                "image_path": "https://source.unsplash.com/500x500/?astronomy",
                "type": "CORE"
            },
            {
                "name": "Planetary Exploration",
                "description": "Dive into the fascinating study of planets in our solar system and beyond.",
                "image_path": "https://source.unsplash.com/500x500/?planets",
                "type": "CORE"
            },
            {
                "name": "The Stars and Us",
                "description": "Learn about the fascinating relationship between the stars and life on Earth.",
                "image_path": "https://source.unsplash.com/500x500/?stars",
                "type": "CORE"
            },
            {
                "name": "Galaxies Far Away",
                "description": "Investigate the diverse types of galaxies and their intriguing features.",
                "image_path": "https://source.unsplash.com/500x500/?galaxy",
                "type": "CORE"
            },
            {
                "name": "Understanding Space-Time",
                "description": "Grasp the fundamental concept of space-time, a key theory in modern physics.",
                "image_path": "https://source.unsplash.com/500x500/?spacetime",
                "type": "CORE"
            },
            {
                "name": "The Mystery of Black Holes",
                "description": "Demystify the phenomena of black holes and their significance in the universe.",
                "image_path": "https://source.unsplash.com/500x500/?blackhole",
                "type": "ELECTIVE"
            },
            {
                "name": "The Enigma of Dark Matter",
                "description": "Delve into the unsolved mysteries of dark matter and its role in shaping the universe.",
                "image_path": "https://source.unsplash.com/500x500/?darkmatter",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "The Marvels of Earth Science",
        "description": "Understanding our dynamic Earth, its geological processes, ecosystems, and the environment.",
        "image_path": "https://source.unsplash.com/500x500/?earth",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Our Living Planet",
                "description": "Explore the intricate web of life that makes Earth unique in the solar system.",
                "image_path": "https://source.unsplash.com/500x500/?ecosystem",
                "type": "CORE"
            },
            {
                "name": "Rock Cycle Journey",
                "description": "Uncover the transformation journey of rocks and minerals through the rock cycle.",
                "image_path": "https://source.unsplash.com/500x500/?rocks",
                "type": "CORE"
            },
            {
                "name": "Weather Wonders",
                "description": "Understand the complex systems that create our planet‘s weather patterns.",
                "image_path": "https://source.unsplash.com/500x500/?weather",
                "type": "CORE"
            },
            {
                "name": "The Water World",
                "description": "Discover the importance of Earth‘s water bodies and their influence on climate and life.",
                "image_path": "https://source.unsplash.com/500x500/?ocean",
                "type": "CORE"
            },
            {
                "name": "Volcanoes and Earthquakes",
                "description": "Explore the powerful forces of volcanoes and earthquakes that continuously shape our planet.",
                "image_path": "https://source.unsplash.com/500x500/?volcano",
                "type": "CORE"
            },
            {
                "name": "Fossil Fuels: Pros and Cons",
                "description": "Discuss the benefits and drawbacks of fossil fuels on our environment and society.",
                "image_path": "https://source.unsplash.com/500x500/?fossilfuels",
                "type": "ELECTIVE"
            },
            {
                "name": "The Intricacies of Soil",
                "description": "Learn about soil, its formation, and the crucial role it plays in our ecosystems.",
                "image_path": "https://source.unsplash.com/500x500/?soil",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "The Magic of Chemistry",
        "description": "Delve into the fascinating world of molecules, reactions, and the principles of Chemistry.",
        "image_path": "https://source.unsplash.com/500x500/?chemistry",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Elements and Compounds",
                "description": "Understand the fundamental building blocks of matter: elements and compounds.",
                "image_path": "https://source.unsplash.com/500x500/?elements",
                "type": "CORE"
            },
            {
                "name": "The Atom: A Tiny Universe",
                "description": "Explore the structure of atoms and how they form the basis of everything around us.",
                "image_path": "https://source.unsplash.com/500x500/?atom",
                "type": "CORE"
            },
            {
                "name": "The Power of Chemical Reactions",
                "description": "Learn about chemical reactions and how they drive natural and technological processes.",
                "image_path": "https://source.unsplash.com/500x500/?chemical-reactions",
                "type": "CORE"
            },
            {
                "name": "Solutions and Mixtures",
                "description": "Discover how substances interact to form mixtures and solutions in everyday life.",
                "image_path": "https://source.unsplash.com/500x500/?solutions",
                "type": "CORE"
            },
            {
                "name": "The pH Scale and Acidity",
                "description": "Explore the concept of pH, acidity, and alkalinity and their applications in daily life.",
                "image_path": "https://source.unsplash.com/500x500/?phscale",
                "type": "CORE"
            },
            {
                "name": "Chemistry in Cooking",
                "description": "Discover the role of chemistry in cooking and how it shapes the food we eat.",
                "image_path": "https://source.unsplash.com/500x500/?cooking",
                "type": "ELECTIVE"
            },
            {
                "name": "The Role of Chemistry in Art",
                "description": "Explore how chemical processes are key to various art forms and preservation techniques.",
                "image_path": "https://source.unsplash.com/500x500/?art",
                "type": "ELECTIVE"
            }
        ]
    },
    {
        "name": "Biology: The Study of Life",
        "description": "Immerse in the complexity and diversity of life from cells to ecosystems.",
        "image_path": "https://source.unsplash.com/500x500/?biology",
        "type": "CORE",
        "lessons_data": [
            {
                "name": "Cells: The Basic Units of Life",
                "description": "Explore the world of cells, the basic unit of life on Earth.",
                "image_path": "https://source.unsplash.com/500x500/?cells",
                "type": "CORE"
            },
            {
                "name": "Plant Life",
                "description": "Discover the diverse world of plants and their crucial role in our planet‘s ecosystem.",
                "image_path": "https://source.unsplash.com/500x500/?plants",
                "type": "CORE"
            },
            {
                "name": "Animal Kingdom",
                "description": "Investigate the intricate diversity of the animal kingdom, their habitats, and adaptations.",
                "image_path": "https://source.unsplash.com/500x500/?animals",
                "type": "CORE"
            },
            {
                "name": "The Human Body",
                "description": "Delve into the fascinating study of the human body and its complex systems.",
                "image_path": "https://source.unsplash.com/500x500/?humanbody",
                "type": "CORE"
            },
            {
                "name": "Introduction to Genetics",
                "description": "Understand the basics of genetics and its influence on the diversity of life.",
                "image_path": "https://source.unsplash.com/500x500/?genetics",
                "type": "CORE"
            },
            {
                "name": "Food Chain and Web",
                "description": "Learn about the complex relationships between organisms in an ecosystem.",
                "image_path": "https://source.unsplash.com/500x500/?foodchain",
                "type": "ELECTIVE"
            },
            {
                "name": "Microscopic Life",
                "description": "Dive into the world of microbes and their impact on health, food, and the environment.",
                "image_path": "https://source.unsplash.com/500x500/?microbes",
                "type": "ELECTIVE"
            }
        ]
    },
    {
    "name": "Physics: The Fundamental Forces",
    "description": "Embark on an intriguing journey into the laws that govern the universe - from tiny atoms to vast galaxies.",
    "image_path": "https://source.unsplash.com/500x500/?physics",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Introduction to Forces",
            "description": "Grasp the basic concepts of forces, how they work, and their effects on objects.",
            "image_path": "https://source.unsplash.com/500x500/?forces",
            "type": "CORE"
        },
        {
            "name": "Gravity: The Invisible Force",
            "description": "Dive into the enigmatic world of gravity, the force that holds the universe together.",
            "image_path": "https://source.unsplash.com/500x500/?gravity",
            "type": "CORE"
        },
        {
            "name": "The Power of Magnetism",
            "description": "Discover the fascinating properties of magnetism and its applications in technology.",
            "image_path": "https://source.unsplash.com/500x500/?magnet",
            "type": "CORE"
        },
        {
            "name": "Electricity: Charge and Current",
            "description": "Learn about electricity, its generation, and its fundamental role in modern life.",
            "image_path": "https://source.unsplash.com/500x500/?electricity",
            "type": "CORE"
        },
        {
            "name": "Light and Sound: Waves Around Us",
            "description": "Explore the science of waves, focusing on light and sound, and their applications.",
            "image_path": "https://source.unsplash.com/500x500/?light-sound",
            "type": "CORE"
        },
        {
            "name": "Thermodynamics: Heat and Energy",
            "description": "Investigate the fundamental concepts of thermodynamics, heat transfer, and energy conservation.",
            "image_path": "https://source.unsplash.com/500x500/?thermodynamics",
            "type": "ELECTIVE"
        },
        {
            "name": "The Mystery of Quantum Physics",
            "description": "Step into the strange world of quantum physics, the science of the very small.",
            "image_path": "https://source.unsplash.com/500x500/?quantum-physics",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Environmental Science: Our Impact on the Earth",
    "description": "Dive into the study of our interactions with the natural world and learn how we can make a positive impact.",
    "image_path": "https://source.unsplash.com/500x500/?environment",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Climate Change: Causes and Effects",
            "description": "Learn about the causes of climate change, its impacts, and what we can do to mitigate it.",
            "image_path": "https://source.unsplash.com/500x500/?climate-change",
            "type": "CORE"
        },
        {
            "name": "Renewable Energy",
            "description": "Explore the different types of renewable energy sources and their potential for a sustainable future.",
            "image_path": "https://source.unsplash.com/500x500/?renewable-energy",
            "type": "CORE"
        },
        {
            "name": "Conservation and Biodiversity",
            "description": "Understand the importance of biodiversity and conservation efforts to protect it.",
            "image_path": "https://source.unsplash.com/500x500/?conservation",
            "type": "CORE"
        },
        {
            "name": "Pollution and Its Effects",
            "description": "Discover the different types of pollution, their effects, and strategies to reduce them.",
            "image_path": "https://source.unsplash.com/500x500/?pollution",
            "type": "CORE"
        },
        {
            "name": "Sustainable Living",
            "description": "Learn practical ways to live more sustainably and reduce our environmental impact.",
            "image_path": "https://source.unsplash.com/500x500/?sustainable-living",
            "type": "CORE"
        },
        {
            "name": "Urban Greening",
            "description": "Explore the concept of urban greening and its benefits to environments and communities.",
            "image_path": "https://source.unsplash.com/500x500/?urban-greening",
            "type": "ELECTIVE"
        },
        {
            "name": "Water Conservation",
            "description": "Understand the importance of water conservation and practical ways to save water.",
            "image_path": "https://source.unsplash.com/500x500/?water-conservation",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Astronomy: The Universe and Beyond",
    "description": "Embark on an incredible journey through the cosmos, exploring planets, stars, galaxies, and the mysteries of the universe.",
    "image_path": "https://source.unsplash.com/500x500/?astronomy",
    "type": "CORE",
    "lessons_data": [
        {
            "name": "Our Solar System",
            "description": "Explore the unique planets and other celestial bodies that make up our solar system.",
            "image_path": "https://source.unsplash.com/500x500/?solar-system",
            "type": "CORE"
        },
        {
            "name": "The Life of Stars",
            "description": "Learn about the life cycle of stars, from nebulae to supernovae.",
            "image_path": "https://source.unsplash.com/500x500/?stars",
            "type": "CORE"
        },
        {
            "name": "Galaxies Far Far Away",
            "description": "Discover the vastness of galaxies and the secrets they hold.",
            "image_path": "https://source.unsplash.com/500x500/?galaxies",
            "type": "CORE"
        },
        {
            "name": "Black Holes and Other Cosmic Phenomena",
            "description": "Dive into the mysteries of black holes and other incredible phenomena in the universe.",
            "image_path": "https://source.unsplash.com/500x500/?black-holes",
            "type": "CORE"
        },
        {
            "name": "Space Exploration and Technology",
            "description": "Investigate the advancements in space technology and mankind‘s journey beyond Earth.",
            "image_path": "https://source.unsplash.com/500x500/?space-exploration",
            "type": "CORE"
        },
        {
            "name": "Extraterrestrial Life: Possibilities and Search",
            "description": "Explore the possibility of life beyond Earth and the efforts to find it.",
            "image_path": "https://source.unsplash.com/500x500/?extraterrestrial-life",
            "type": "ELECTIVE"
        },
        {
            "name": "Astrophotography: Capturing the Cosmos",
            "description": "Discover the art of astrophotography and learn to capture the beauty of the night sky.",
            "image_path": "https://source.unsplash.com/500x500/?astrophotography",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Weather and Climate: Nature‘s Symphony",
    "description": "Unravel the intricate dance of atmospheric conditions that shapes the world‘s weather and climate patterns.",
    "image_path": "https://source.unsplash.com/500x500/?weather",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "The Water Cycle: Nature‘s Recycling System",
            "description": "Learn about the water cycle, its stages, and its pivotal role in weather patterns.",
            "image_path": "https://source.unsplash.com/500x500/?water-cycle",
            "type": "CORE"
        },
        {
            "name": "Cloud Formations and Their Meanings",
            "description": "Identify different types of clouds and what they tell us about upcoming weather.",
            "image_path": "https://source.unsplash.com/500x500/?clouds",
            "type": "CORE"
        },
        {
            "name": "Weather Instruments and Predictions",
            "description": "Get to know the tools meteorologists use to measure weather conditions and forecast future weather.",
            "image_path": "https://source.unsplash.com/500x500/?weather-instruments",
            "type": "CORE"
        },
        {
            "name": "Understanding Climate Zones",
            "description": "Explore the variety of climate zones on Earth and how they influence life.",
            "image_path": "https://source.unsplash.com/500x500/?climate-zones",
            "type": "CORE"
        },
        {
            "name": "The Science of Storms",
            "description": "Discover the powerful forces behind thunderstorms, tornadoes, hurricanes, and other extreme weather events.",
            "image_path": "https://source.unsplash.com/500x500/?storms",
            "type": "ELECTIVE"
        },
        {
            "name": "Careers in Meteorology",
            "description": "Explore various career paths in meteorology and the exciting opportunities they offer.",
            "image_path": "https://source.unsplash.com/500x500/?meteorology",
            "type": "ELECTIVE"
        }
    ]
},
{
    "name": "Robotics: Engineering the Future",
    "description": "Dive into the captivating world of robotics, where science, technology, and creativity intersect.",
    "image_path": "https://source.unsplash.com/500x500/?robotics",
    "type": "ELECTIVE",
    "lessons_data": [
        {
            "name": "Introduction to Robotics",
            "description": "Uncover the basics of robotics, exploring their design, function, and real-world applications.",
            "image_path": "https://source.unsplash.com/500x500/?robots",
            "type": "CORE"
        },
        {
            "name": "Robotics and Coding",
            "description": "Learn how coding brings robots to life, enabling them to perform a variety of tasks.",
            "image_path": "https://source.unsplash.com/500x500/?coding",
            "type": "CORE"
        },
        {
            "name": "AI and Robotics",
            "description": "Delve into how artificial intelligence is revolutionizing the field of robotics.",
            "image_path": "https://source.unsplash.com/500x500/?AI",
            "type": "CORE"
        },
        {
            "name": "Robots in Space Exploration",
            "description": "Explore the vital role of robots in expanding our knowledge of the universe.",
            "image_path": "https://source.unsplash.com/500x500/?space-robots",
            "type": "CORE"
        },
        {
            "name": "Robots in Everyday Life",
            "description": "Examine how robots are transforming industries, from healthcare to agriculture.",
            "image_path": "https://source.unsplash.com/500x500/?robots-life",
            "type": "ELECTIVE"
        },
        {
            "name": "Ethics in Robotics",
            "description": "Discuss the ethical considerations in robotics as they play an increasingly influential role in our society.",
            "image_path": "https://source.unsplash.com/500x500/?robotics-ethics",
            "type": "ELECTIVE"
        }
    ]
}






      ]
    },
    {
      "level_id": "0dde57ef-c3ed-4d50-b3c1-82ceeaa0d5aa",
      "topics_data": []
    }
  ]'::json
);
