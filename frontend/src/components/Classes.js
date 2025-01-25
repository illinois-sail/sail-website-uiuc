const allClasses = [{className: 'Test', time: 'Test', room: 'Test', capacity: 30, description: 'Test', classIndex: 0}];

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