export const reverseArray = (numbers) =>
  !Array.isArray(numbers) ? null : numbers.slice().reverse();

export const withdraw = (clients, balances, client, amount) => {
  const result = clients.indexOf(client);
  return balances[result] < amount ? -1 : balances[result] - amount;
};

export const getAdults = (obj) => {
  const copyObj = {};

  for (let key in obj) obj[key] >= 18 ? (copyObj[key] = obj[key]) : copyObj;

  return copyObj;
};
