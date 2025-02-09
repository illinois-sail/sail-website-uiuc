const allClasses = [
    // In-person classes at 10:00am, 11:00am, 2:00pm
    {className: 'test1', time: '10:00am-10:50am', room: '0216', capacity: 1, description: 'test', classIndex: 0},
    {className: 'test2', time: '10:00am-10:50am', room: '0305', capacity: 1, description: 'test', classIndex: 1},
    {className: 'test3', time: '10:00am-10:50am', room: '0407', capacity: 1, description: 'test', classIndex: 2},

    {className: 'test4', time: '11:00am-11:50am', room: '1214', capacity: 1, description: 'test', classIndex: 3},
    {className: 'test5', time: '11:00am-11:50am', room: '0223', capacity: 1, description: 'test', classIndex: 4},
    {className: 'test6', time: '11:00am-11:50am', room: '0320', capacity: 1, description: 'test', classIndex: 5},

    {className: 'test7', time: '2:00pm-2:50pm', room: '1302', capacity: 1, description: 'test', classIndex: 6},
    {className: 'test8', time: '2:00pm-2:50pm', room: '1506', capacity: 1, description: 'test', classIndex: 7},
    {className: 'test9', time: '2:00pm-2:50pm', room: '1408', capacity: 1, description: 'test', classIndex: 8},

    // Virtual classes at 12:30pm, 1:30pm
    {className: 'test10', time: '12:30pm-1:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 9},
    {className: 'test11', time: '12:30pm-1:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 10},
    {className: 'test12', time: '12:30pm-1:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 11},

    {className: 'test13', time: '1:30pm-2:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 12},
    {className: 'test14', time: '1:30pm-2:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 13},
    {className: 'test15', time: '1:30pm-2:20pm', room: 'virtual', capacity: 1, description: 'test', classIndex: 14}
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