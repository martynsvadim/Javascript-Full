const numberDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return numberDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2023, 0, 1), 14);

console.log(result);
