const splitText = (text, len) => {
  const strArray = [];
  let startPosition = 0;
  if (typeof text !== 'string') {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArray.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArray.join('\n');
};

console.log(splitText('dfdjfdgdjgj'));
