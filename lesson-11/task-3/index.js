const splitString = (text = '', len = 10) => {
  if (!text === 'string' || len === 0) {
    return null;
  }

  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPosition += len;
  }
  let amountPoints = len - strArr[strArr.length - 1].length;
  let result = '.'.repeat(amountPoints);
  strArr[strArr.length - 1] = strArr[strArr.length - 1].concat(result);

  return strArr;
};

console.log(splitString('mountain2', 4));
