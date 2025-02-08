const allClasses = [{className: 'Behind the Scenes of a Freshman at UIUC', time: '10:00am-10:50am', room: '0216', capacity: 1, description: 'An insider\'s perspective on navigating the exciting journey of freshman year at the University of Illinois at Urbana-Champaign (UIUC)! Throughout this semester-long exploration, you will delve into various aspects of campus life, gaining invaluable insights into dorm food, dorm halls, classes, clubs, student life, and fun activities to do on campus.', classIndex: 0},
{className: 'WCS: Developing a Problem Solving Mindset in CS', time: '11:00am-11:50am', room: '1214', capacity: 1, description: 'Learn what it\'s like to problem solve and think critically about challenging issues as a computer scientist and engineer! Join us for an interactive session where you will learn the thought process behind iterative programming and developing, debugging, and thorough testing while following along and completing a “machine project” of your own! Bring your own laptop!', classIndex: 1},
{className: 'How to get a SWE Internship ', time: '2:00pm-2:50pm', room: '1302', capacity: 1, description: 'A beginner\'s guide to getting a SWE internship, including interview prep, networking, resume format, applying online, and deciding where to apply. This course comes with a light presentation, a fun activity, and an open-ended conversation with any questions you have. Bring your own laptop!', classIndex: 13},
{className: 'Computational Media!', time: '10:00am-10:50am', room: '1304', capacity: 1, description: 'An overview of how computer science is being used in media today! You\'ll learn about the different applications of computer science in media, such as audio, images, and video. Later,  you\'ll experiment with different audio and image algorithms.', classIndex: 3},];

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