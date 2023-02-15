const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = (obj) => {
  const valueArray = Object.values(obj).flat();
  const nameArray = valueArray.reduce((acc, item) => {
    return (acc = [...acc, item.name]);
  }, []);

  return nameArray;
};

console.log(getPeople(rooms));
