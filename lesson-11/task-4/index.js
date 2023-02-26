const countOccurrences = (text, str) => {
  let result = 0;
  if (text === undefined) {
    text = '';
  }
  if (str === '') {
    return null;
  }
  const arr = text.split(' ');
  arr.forEach((elem) => {
    if (elem.includes(str)) {
      result += 1;
    }
  });

  return result;
};

console.log(countOccurrences('oms arom foms', 'o'));
