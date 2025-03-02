const allClasses = [
    {className: 'Hackathons 101: Everything You Need To Know', time: '10:00am-10:50am', room: 'Siebel 216', capacity: 93, description: 'Description coming soon!', classIndex: 0},
    {className: 'Python Games', time: '10:00am-10:50am', room: 'Siebel 218', capacity: 47, description: 'Description coming soon!', classIndex: 1},
    {className: 'LeetCode for Beginners', time: '10:00am-10:50am', room: 'Siebel 220', capacity: 48, description: 'Description coming soon!', classIndex: 2},
    {className: 'Motion Planning for Robotics and More', time: '10:00am-10:50am', room: 'Siebel 222', capacity: 48, description: 'Description coming soon!', classIndex: 3},
    {className: 'Cracking the Linux Kernel', time: '10:00am-10:50am', room: 'Siebel 1302', capacity: 48, description: 'Description coming soon!', classIndex: 4},
    {className: 'Intro to Python', time: '10:00am-10:50am', room: 'Siebel 1304', capacity: 46, description: 'Description coming soon!', classIndex: 5},
    {className: 'Applying to Internships 101', time: '10:00am-10:50am', room: 'Siebel 1404', capacity: 200, description: 'Description coming soon!', classIndex: 6},
    {className: 'Making a Python-powered Website', time: '10:00am-10:50am', room: 'Siebel 2102', capacity: 14, description: 'Description coming soon!', classIndex: 7},
    {className: 'Recommendation System using Python', time: '10:00am-10:50am', room: 'Siebel 2124', capacity: 20, description: 'Description coming soon!', classIndex: 8},
    {className: 'Recruiting 101: How to Get a Job/Internship', time: '10:00am-10:50am', room: 'Siebel 2405', capacity: 70, description: 'Description coming soon!', classIndex: 9},
    {className: 'Live Coding Music', time: '10:00am-10:50am', room: 'Siebel 2407', capacity: 20, description: 'Description coming soon!', classIndex: 10},
    {className: 'Discord Bot with Python', time: '10:00am-10:50am', room: 'Siebel 3102', capacity: 14, description: 'Description coming soon!', classIndex: 11},
    {className: 'Thinking Abstractly', time: '10:00am-10:50am', room: 'Siebel 3124', capacity: 20, description: 'Description coming soon!', classIndex: 12},
    {className: 'Optimization Algorithms', time: '10:00am-10:50am', room: 'Siebel 3401', capacity: 22, description: 'Description coming soon!', classIndex: 13},
    {className: 'Hacking Language Models', time: '10:00am-10:50am', room: 'Siebel 4102', capacity: 14, description: 'Description coming soon!', classIndex: 14},
    {className: 'Binary and Digital Logic: The Unsung Heroes of Computing', time: '10:00am-10:50am', room: 'Siebel 4407', capacity: 20, description: 'Description coming soon!', classIndex: 15},
    
    
    {className: 'Intro to Deep Learning', time: '11:00am-11:50am', room: 'Siebel 216', capacity: 93, description: 'Description coming soon!', classIndex: 16},
    {className: 'How to Make Your Own App', time: '11:00am-11:50am', room: 'Siebel 218', capacity: 47, description: 'Description coming soon!', classIndex: 17},
    {className: 'Forensic Files: The Coding Edition', time: '11:00am-11:50am', room: 'Siebel 220', capacity: 48, description: 'Description coming soon!', classIndex: 18},
    {className: 'Motion Planning for Robotics and More', time: '11:00am-11:50am', room: 'Siebel 222', capacity: 48, description: 'Description coming soon!', classIndex: 19},
    {className: 'Cracking the Linux Kernel', time: '11:00am-11:50am', room: 'Siebel 1302', capacity: 48, description: 'Description coming soon!', classIndex: 20},
    {className: 'Overcoming Imposter Syndrome in Tech', time: '11:00am-11:50am', room: 'Siebel 1304', capacity: 46, description: 'Description coming soon!', classIndex: 21},
    {className: 'Software to Silicon: How Your Code Actually Works', time: '11:00am-11:50am', room: 'Siebel 1404', capacity: 200, description: 'Description coming soon!', classIndex: 22},
    {className: 'Making A Web Game', time: '11:00am-11:50am', room: 'Siebel 2102', capacity: 14, description: 'Description coming soon!', classIndex: 23},
    {className: 'Logic & Math for CS', time: '11:00am-11:50am', room: 'Siebel 2124', capacity: 20, description: 'Description coming soon!', classIndex: 24},
    {className: 'Programming Killer AI Bots', time: '11:00am-11:50am', room: 'Siebel 2405', capacity: 70, description: 'Description coming soon!', classIndex: 25},
    {className: 'Recruiting 101 - How to land an internship', time: '11:00am-11:50am', room: 'Siebel 2407', capacity: 20, description: 'Description coming soon!', classIndex: 26},
    {className: 'Discord Chatbot 101', time: '11:00am-11:50am', room: 'Siebel 3102', capacity: 14, description: 'Description coming soon!', classIndex: 27},
    {className: 'Hands-on Cybersecurity', time: '11:00am-11:50am', room: 'Siebel 3124', capacity: 20, description: 'Description coming soon!', classIndex: 28},
    {className: 'Randomized Algorithms', time: '11:00am-11:50am', room: 'Siebel 3401', capacity: 22, description: 'Description coming soon!', classIndex: 29},
    {className: 'Walkthrough of CS-Major at UIUC', time: '11:00am-11:50am', room: 'Siebel 4102', capacity: 14, description: 'Description coming soon!', classIndex: 30},
    {className: 'Behind the Scenes of a Freshman in CS', time: '11:00am-11:50am', room: 'Siebel 4407', capacity: 20, description: 'Description coming soon!', classIndex: 31},
    
    
    {className: 'Intro to Machine Learning - Neural Networks', time: '2:00pm-2:50pm', room: 'Siebel 216', capacity: 93, description: 'Description coming soon!', classIndex: 32},
    {className: 'Beadsort (learn sorting algorithms hands-on)', time: '2:00pm-2:50pm', room: 'Siebel 218', capacity: 47, description: 'Description coming soon!', classIndex: 33},
    {className: 'Looking Forward, Planning Ahead', time: '2:00pm-2:50pm', room: 'Siebel 220', capacity: 48, description: 'Description coming soon!', classIndex: 34},
    {className: 'Motion Planning for Robotics and More', time: '2:00pm-2:50pm', room: 'Siebel 222', capacity: 48, description: 'Description coming soon!', classIndex: 35},
    {className: 'Cracking the Linux Kernel', time: '2:00pm-2:50pm', room: 'Siebel 1302', capacity: 48, description: 'Description coming soon!', classIndex: 36},
    {className: 'No BS College Advice for Ambitious Freshmen', time: '2:00pm-2:50pm', room: 'Siebel 1304', capacity: 46, description: 'Description coming soon!', classIndex: 37},
    {className: 'Build Your Own AI', time: '2:00pm-2:50pm', room: 'Siebel 1404', capacity: 200, description: 'Description coming soon!', classIndex: 38},
    {className: 'Secrets Without Sharing: A Hands-On Intro to Zero-Knowledge Proofs', time: '2:00pm-2:50pm', room: 'Siebel 2102', capacity: 14, description: 'Description coming soon!', classIndex: 39},
    {className: 'Creating a website with GitHub pages and Jekyll', time: '2:00pm-2:50pm', room: 'Siebel 2124', capacity: 20, description: 'Description coming soon!', classIndex: 40},
    
    
    {className: 'Intro to Data Structures', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 41},
    {className: 'Motion Planning for Robotics and More', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 42},
    {className: 'Intro to Python', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 43},
    {className: 'Programming Killer AI Bots', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 44},
    {className: 'Overcoming Imposter Syndrome in Tech', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 45},
    {className: 'Intro to Machine Learning - Neural Networks', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 46},
    {className: 'Build Your Own AI', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 47},
    {className: 'Hackathons 101: Everything You Need To Know', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 48},
    {className: 'Inside the Mind of a Hacker', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 49},
    {className: 'Creating a website with GitHub pages and Jekyll', time: '12:30pm-1:20pm', room: 'Zoom', capacity: 20, description: 'Description coming soon!', classIndex: 50},
    
    
    {className: 'Careers in CS', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 51},
    {className: 'Motion Planning for Robotics and More', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 52},
    {className: 'Python, Pandas, and Predictions', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 25, description: 'Description coming soon!', classIndex: 53},
    {className: 'Making A Web Game', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 54},
    {className: 'Intro to Hackathons or Hackathon 101', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 30, description: 'Description coming soon!', classIndex: 55},
    {className: 'Looking Forward, Planning Ahead', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 56},
    {className: 'Software to Silicon: How Your Code Actually Works', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 57},
    {className: "What's the Plot?", time: '1:30pm-2:20pm', room: 'Zoom', capacity: 20, description: 'Description coming soon!', classIndex: 58},
    {className: 'Intro to Game Development in Roblox Studio', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 59},
    {className: 'Introduction to Computer Architecture', time: '1:30pm-2:20pm', room: 'Zoom', capacity: 40, description: 'Description coming soon!', classIndex: 60}
  ];  


// if class has no zoom link, set as null
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