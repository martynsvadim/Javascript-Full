export const getDiff = (startDate, endDate) => {
  const difference = new Date(startDate - endDate);
  const day = difference.getDate();
  const hour = difference.getHours();
  const minute = difference.getMinutes();
  const seconds = difference.getSeconds();

  const result = `${day}d ${hour}h ${minute}m ${seconds}s`;
  return result;
};

console.log(getDiff(new Date(), new Date(2022, 2, 4)));
