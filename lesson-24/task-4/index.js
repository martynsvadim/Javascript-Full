const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Jack', birthDate: '02/14/2010' },
  { name: 'Ann', birthDate: '02/14/2010' },
];

export const studentsBirthDays = (students) => {
  const obj = students.reduce((acc, elem) => {
    const monthNumber = new Date(elem.birthDate).getMonth();
    const monthElemName = month[monthNumber];

    if (acc.hasOwnProperty(monthElemName)) {
      return {
        ...acc,
        [monthElemName]: [...acc[monthElemName], elem.name],
      };
    } else {
      return { ...acc, [monthElemName]: [elem.name] };
    }
  }, {});
  return obj;
};

console.log(studentsBirthDays(students));
