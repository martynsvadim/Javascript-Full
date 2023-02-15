const user = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

const copyObj = (user) => Object.assign({}, user);

console.log(copyObj(user));
