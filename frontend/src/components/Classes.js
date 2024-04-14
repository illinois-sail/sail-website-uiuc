const allClasses = [{className: 'Behind the Scenes of a Freshman at UIUC', time: '10:00am-10:50am', room: '0216', capacity: 30, description: 'An insider\'s perspective on navigating the exciting journey of freshman year at the University of Illinois at Urbana-Champaign (UIUC)! Throughout this semester-long exploration, you will delve into various aspects of campus life, gaining invaluable insights into dorm food, dorm halls, classes, clubs, student life, and fun activities to do on campus.', classIndex: 0},
                    {className: 'WCS: Developing a Problem Solving Mindset in CS', time: '10:00am-10:50am', room: '1214', capacity: 21, description: 'Learn what it\'s like to problem solve and think critically about challenging issues as a computer scientist and engineer! Join us for an interactive session where you will learn the thought process behind iterative programming and developing, debugging, and thorough testing while following along and completing a “machine project” of your own! Bring your own laptop!', classIndex: 1},
                    {className: 'How to get a SWE Internship ', time: '10:00am-10:50am', room: '1302', capacity: 20, description: 'A beginner\'s guide to getting a SWE internship, including interview prep, networking, resume format, applying online, and deciding where to apply. This course comes with a light presentation, a fun activity, and an open-ended conversation with any questions you have. Bring your own laptop!', classIndex: 13},
                    {className: 'Computational Media!', time: '10:00am-10:50am', room: '1304', capacity: 20, description: 'An overview of how computer science is being used in media today! You\'ll learn about the different applications of computer science in media, such as audio, images, and video. Later,  you\'ll experiment with different audio and image algorithms.', classIndex: 3},
                    {className: 'Introduction to Graph Theory: Graph Theory in the Real World ', time: '10:00am-10:50am', room: '2102', capacity: 10, description: 'Unlock the power of graph theory through learning essential graph algortihms and their real-life applications to enhance your problem solving skills. Bring your own laptop with Python installed!', classIndex: 4},
                    {className: 'Vim: CLI editing like a pro', time: '10:00am-10:50am', room: '2124', capacity: 15, description: 'Become an effective programmer by learning command line editing tools! Bring your own laptop!', classIndex: 5},
                    {className: 'Cybersecurity Ninja Training ', time: '10:00am-10:50am', room: '2405', capacity: 21, description: 'Learn the various aspects of computer security by hacking through a fun, interactive narrative!', classIndex: 6},
                    {className: 'Programming Killer AI Bots ', time: '10:00am-10:50am', room: '2406', capacity: 20, description: 'Teach a program how to intelligently play borad games such as chess, checkers, or scrabble through programming!', classIndex: 7},
                    {className: 'Inside the Mind of a Hacker', time: '10:00am-10:50am', room: '2407', capacity: 15, description: 'Launch into cybersecurity with a beginner-friendly introduction to the adversarial mindset to learn how to think like a hacker.', classIndex: 8},
                    {className: 'Adding Numbers with Circuits!', time: '10:00am-10:50am', room: '3102', capacity: 12, description: 'Learn how a 2-bit binary adder circuit works! In this class,  you\'ll be able to wire up your own circuit to add numbers! Hardware familiarity recommended!', classIndex: 9},
                    {className: 'Introduction to Algorithms', time: '10:00am-10:50am', room: '3124', capacity: 20, description: 'Explore algorithms in computer science and their applications to graph theory and machine learning! Discussion on Dijkstra\'s Algorithm, Gradient Descent, and more!', classIndex: 10},
                    {className: 'Wordle with a Twist', time: '10:00am-10:50am', room: '3401', capacity: 20, description: 'Just a little bit of code can do a lot! Use Python to customize Wordle to what you want it to be! Bring your own laptop and phone!', classIndex: 11},
                    {className: 'BlinkTastic: Arduino LED Light Show', time: '10:00am-10:50am', room: '4102', capacity: 12, description: 'Learn how to use Arduino in a bunch of different ways through computer science concepts, with a finale of a free-for-all light show! CS Principles familiarity recommended!', classIndex: 12},
                    
                    {className: 'What is AI? Answers to the Big Questions!', time: '11:00am-11:50am', room: '0216', capacity: 20, description: 'AI is more vast and applicable than you thought...Learn about what AI is, how it works, and its applications! Bring your own laptop!', classIndex: 14},
                    {className: 'Intro to Quantum Computing', time: '11:00am-11:50am', room: '1214', capacity: 21, description: 'Get a high-level intro to Quantum Computing! How is it different from Classical Computing? What are its applications? Bring your own laptop!', classIndex: 15},
                    {className: 'Circuits to Code: A Primer on Computer Architecture', time: '11:00am-11:50am', room: '1302', capacity: 20, description: 'A fly-by overview of the basics of computer architecture. You\'ll learn what computer architecture is and what you can expect from a computer engineering degree at UIUC. Work your way through logic gates and binary to understand the basics of an 8-bit computer.', classIndex: 16},
                    {className: 'Seeking Opportunities at UIUC', time: '11:00am-11:50am', room: '1304', capacity: 20, description: 'The ability to recognize and capitalize on opportunities is incredibly important and this course aims to help you do so within the school setting and explore specific opportunities at U of I. We are here to empower you and help you identify opportunities and establish meaningful connections!', classIndex: 17},
                    {className: 'WCS: What is it like to be a Woman in CS', time: '11:00am-11:50am', room: '1404', capacity: 30, description: 'What is it like being a woman in computer science and engineering? Join us for an interactive session where we\'ll show you how to build a support system and community, increase your own confidence, deal with failure, as well as seek out career and mentorship opportunities. This will be followed by personal stories of women in CS at UIUC along with an open Q&A Panel!', classIndex: 18},
                    {className: 'Introduction to Data Structures ', time: '11:00am-11:50am', room: '2102', capacity: 10, description: 'This class will focus on some real problems you face and guide you on how you can use data structures in software to solve them! Bring your own laptop and Python familiarity recommended!', classIndex: 19},
                    {className: 'CS outside the classroom', time: '11:00am-11:50am', room: '2405', capacity: 20, description: 'Take a deep dive into how recruitment season for internships and careers works and an overview of Engineering RSOs on campus!', classIndex: 21},
                    {className: 'Intro to Python', time: '11:00am-11:50am', room: '2406', capacity: 20, description: 'Start your programming journey with Python! Learn about Jupyter Notebooks, solve open-ended problems, and get a general intro to Python. Bring your own laptop!', classIndex: 22},
                    {className: 'Robotics for IOT', time: '11:00am-11:50am', room: '3102', capacity: 10, description: 'Learn about the basics of robotics through both physical examples as well as the theory behind them!', classIndex: 24},
                    {className: 'Day in the Life of a Software Engineer', time: '11:00am-11:50am', room: '3124', capacity: 20, description: 'Have you ever wondered what the heck a software engineer even does? Don\'t fret! This workshop will cover what software engineers actually do. We will talk about what we did during our internships and provide unfiltered advice on the field.', classIndex: 25},
                    {className: 'Theoretical Foundations of Functional Programming', time: '11:00am-11:50am', room: '3401', capacity: 20, description: 'Get a crash course into the theory of Functional Programming through demos, interactive exercises, and the lambda calculus behind it!', classIndex: 26},
                    {className: 'Introduction to Computer Graphics', time: '11:00am-11:50am', room: '4102', capacity: 15, description: 'Learn the basics of computer graphics through Rasters, Rasterization, and WebGL! Bring your own phone and Python familiarity recommended!', classIndex: 27},
                    {className: 'Streaming and Visualizing Geospatial Data in Real-time: An Introductory Crash Course', time: '11:00am-11:50am', room: '2407', capacity: 20, description: 'Learn about how location-based data is transmitted over computer networks of satellites, sensors and our very own computers! Students will gain insight about how companies like Google, Netflix, Spotify, DoorDash, etc. use geospatial data. Includes a hands-on activity using GPS coordinates in real-time to make maps. Laptops, would also recommend students create a separate email address before the class as they may need to create several free accounts for websites we interact with. Previous basic programming experience recommended.', classIndex: 20},
                    
                    {className: 'Recursion and Induction', time: '2:00pm-2:50pm', room: '0216', capacity: 20, description: 'Explore the concepts of recursion and induction by tackling problems and designing algorithms using these approaches.', classIndex: 28},
                    {className: 'RPG Game Development using Javascript with Codédex', time: '2:00pm-2:50pm', room: '1404', capacity: 30, description: 'Build an RPG Game from top-to-bottom using Javascript Libraries! Learn about Game Design, Art, Music, and Production for a simple RPG game, and how you can use Codédex to learn Javascript and level up your coding knowledge! Bring your own laptop!', classIndex: 2},
                    {className: 'CybersecYOUrity: A Guide to Navigating Your Digital World through Cybersecurity Adventures and Pop Culture', time: '2:00pm-2:50pm', room: '1214', capacity: 20, description: 'Learn why cybersecurity is important and how it affects YOU. Understand the realities of how cybersecurity works in the real world!', classIndex: 29},
                    {className: 'Software to Silicon: How Your Code Actually Works', time: '2:00pm-2:50pm', room: '1302', capacity: 20, description: 'Behind every program are layers and layers of complicated systems! This course will let you see what goes under the hood of your computer program. Bring your own laptop and CS Principles familiarity recommended!', classIndex: 30},
                    {className: 'WCS: Cyphers in Computer Science', time: '2:00pm-2:50pm', room: '1304', capacity: 20, description: 'Join us for a fun, interactive session on the basics of cryptography and cyphers! We will present a tutorial on how to get started with encryption through Python followed by an interactive workshop where you will learn more about the algorithms that go behind cyphers in computer science and engineering! Bring your own laptop!', classIndex: 31},
                    {className: 'AI Alignment', time: '2:00pm-2:50pm', room: '2405', capacity: 20, description: 'Combine CS + Philosophy and learn about AI ethics! The class will be in lecture format, with discussion questions for you to discuss in groups!', classIndex: 34},
                    // {className: 'CANCELLED: Intro to Algorithms', time: '2:00pm-2:50pm', room: '2102', capacity: 14, description: 'Explore algorithms in computer science! Precalculus completion recommended!', classIndex: 32},
                    {className: 'Binary Search Analysis and Applications', time: '2:00pm-2:50pm', room: '2124', capacity: 15, description: 'Learn the intracacies of Binary Search, and the multitucde of problem-solving applications it can have, especially in coding interviews! CS Principles familiarity recommended!', classIndex: 33},
                    {className: 'Resource Wizardry: Unlocking Academic Magic', time: '2:00pm-2:50pm', room: '2406', capacity: 30, description: 'How to make the most out of the resources offered in CS at UIUC! Tips and tricks for on-campus tutoring, office hours, and website-based learning. Bring your own laptop!', classIndex: 35},
                    {className: 'Intro to Machine Learning with Kaggle Titantic Dataset', time: '2:00pm-2:50pm', room: '2102', capacity: 20, description: 'Learn the basics of machine learning using Python and how to use Kaggle datasets to your advantage. Bring your own laptop and Python familiarity recommended!', classIndex: 36},
                    {className: 'Intro to Javascript with p5.js', time: '2:00pm-2:50pm', room: '3102', capacity: 14, description: 'Get an intro to the JavaScript Language in the context of p5.js and learn how to creatively make your own graphics with it! Bring your own laptop!', classIndex: 37},
                    {className: 'Taste the Flavors of Computer Science', time: '2:00pm-2:50pm', room: '3124', capacity: 26, description: 'Find the different pathways to be pursued in computer science such as SWE, Product Management, Quantitative Trading, and more, learning through interactive examples! Bring your own laptop!', classIndex: 38},
                    {className: 'Build Your Own Chatbot', time: '2:00pm-2:50pm', room: '0218', capacity: 20, description: 'Build your own chatbot with Python and tools provided by the Hugging Face platform! In this workshop, you\'ll learn more about generative AI and the use of APIs. Python familiarity recommended. Recommended to bring your own laptop!', classIndex: 39},
                    {className: 'Data Structures Overview', time: '2:00pm-2:50pm', room: '4102', capacity: 14, description: 'This overview will relate to real world examples of base fundamentals of data structures in Computer Science with intuitive examples and similar practice problems of CS courses here at UIUC. Bring your own laptop!', classIndex: 40},
                ]

allClasses.push(
    { className: 'Resource Wizardry: Unlocking Academic Magic', time: '12:30pm-1:20pm', room: 'zoom', capacity: 50, description: 'How to make the most out of the resources offered in CS at UIUC! Tips and tricks for on-campus tutoring, office hours, and website-based learning.', classIndex: 41, zoomLink: "https://illinois.zoom.us/j/4229956350?pwd=cjVlUENIc094emJhOUp3bFdMOHZadz09"},
    { className: 'Personal Website Devlopment', time: '12:30pm-1:20pm', room: 'zoom', capacity: 20, description: 'A workshop on creating your personal website! By combining interpersonal and technical skills, this workshop will teach you personal branding and learning from your peers while building your own website.', classIndex: 42, zoomLink: "https://illinois.zoom.us/j/2267622501?pwd=YmVaZGZBL0pMZkFCM25oVDBid1M4Zz09&omn=86729935653"},
    { className: 'Vim: CLI editing like a pro', time: '12:30pm-1:20pm', room: 'zoom', capacity: 25, description: 'Become an effective programmer by learning command line editing tools!', classIndex: 43, zoomLink: "https://illinois.zoom.us/j/85867825835?pwd=ZGQyQXdKZHpaczA1ZjJxVElQUFhtQT09"},
    { className: 'RPG Game Development using Javascript with Codédex', time: '12:30pm-1:20pm', room: 'zoom', capacity: 100, description: 'Build an RPG Game from top-to-bottom using Javascript Libraries!', classIndex: 44, zoomLink: "https://illinois.zoom.us/j/3970722058?pwd=WGJQTjBjRUorN292dGIxd0tNTStSUT09"},
    { className: 'Inside the Mind of a Hacker', time: '12:30pm-1:20pm', room: 'zoom', capacity: 30, description: 'Launch into cybersecurity with a beginner-friendly introduction to the adversarial mindset to learn how to think like a hacker.', classIndex: 45, zoomLink: "https://illinois.zoom.us/j/8997938159?pwd=TE1GSHRoRGFtdEVGRDN6SG1VbUVPZz09"},
    { className: 'Programming Killer AI Bots', time: '12:30pm-1:20pm', room: 'zoom', capacity: 100, description: 'Teach a program how to intelligently play board games such as chess, checkers, or scrabble through programming!', classIndex: 46, zoomLink: "https://illinois.zoom.us/j/87475270006?pwd=SWhtYmwvWGlBZ3JUUGpwRnRFaFY5QT09"},
);

allClasses.push(
    { className: 'What is AI? Answers to the Big Questions!', time: '1:30pm-2:20pm', room: 'zoom', capacity: 100, description: 'Explore the fundamental questions and concepts behind Artificial Intelligence.', classIndex: 47, zoomLink: "https://illinois.zoom.us/j/2156078854?pwd=a0F0dVRvTHJlZnVRNVJSVFNnVUNpdz09"},
    { className: 'Behind the scenes of a freshman at UIUC', time: '1:30pm-2:20pm', room: 'zoom', capacity: 100, description: 'Get an insider\'s perspective on the life of a freshman at UIUC.', classIndex: 48, zoomLink: "https://illinois.zoom.us/j/6239633958?pwd=enJOdFBVRVRGTTl3aWwwNjBpUTJjZz09"},
    { className: 'Intro to Graph Theory (Real World Problems)', time: '1:30pm-2:20pm', room: 'zoom', capacity: 25, description: 'Discover how graph theory can be applied to solve real-world problems.', classIndex: 49, zoomLink: "https://illinois.zoom.us/j/3304629914?pwd=dFJvSjJQQVBXdnVMVE9BaTEyWFRHQT09"},
    { className: 'Your Spotify Wrapped API', time: '1:30pm-2:20pm', room: 'zoom', capacity: 30, description: 'Learn how to use the Spotify API to create your own personalized Spotify Wrapped experience.', classIndex: 50, zoomLink: "https://illinois.zoom.us/j/4227779831?pwd=QWphRFRLOXNYQi9aRmtnV0RybEFvZz09&omn=86366781017"},
    { className: 'Software to Silicon: How Your code Actually works?', time: '1:30pm-2:20pm', room: 'zoom', capacity: 40, description: 'Dive into the inner workings of software and hardware to understand how your code is executed.', classIndex: 51, zoomLink: "https://illinois.zoom.us/j/89347704150?pwd=RDRKUUxLMWRhbGJFVHo5N05QaWE1dz09"},
    { className: 'Wordle with a Twist!', time: '1:30pm-2:20pm', room: 'zoom', capacity: 40, description: 'Put a unique spin on the popular word-guessing game Wordle by creating your own version.', classIndex: 52, zoomLink: "https://illinois.zoom.us/j/6916935497?pwd=Uk1MbDJ3MlZxZGVFQ3NOUFNYWm5nZz09"},
);

// for any classes that do not have a zoom link, set the zoom link to null
allClasses.forEach((c, i) => {
    if (!c.zoomLink) {
        c.zoomLink = null;
    }
});

allClasses.forEach((c, i) => c.index = i);

const inPersonMorningClassesFirst = allClasses.filter(c => c.time === '10:00am-10:50am');
const inPersonMorningClassesSecond = allClasses.filter(c => c.time === '11:00am-11:50am');
const inPersonAfternoonClasses = allClasses.filter(c => c.time === '2:00pm-2:50pm');
const virtualMorningClasses = allClasses.filter(c => c.time === '12:30pm-1:20pm');
const virtualAfternoonClasses = allClasses.filter(c => c.time === '1:30pm-2:20pm');

export { inPersonMorningClassesFirst, inPersonMorningClassesSecond, inPersonAfternoonClasses, virtualMorningClasses, virtualAfternoonClasses};
export default allClasses;