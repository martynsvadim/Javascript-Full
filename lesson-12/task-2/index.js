const reverseString = (str = '') => {
  if (!str === 'string') {
    return null;
  }
  return str.split('').reverse();
};

console.log(reverseString('I am ukrainian'));
