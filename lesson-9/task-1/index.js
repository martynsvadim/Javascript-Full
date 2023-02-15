const user = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

const getAdults = (user) =>
  Object.entries(user)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults(user));
