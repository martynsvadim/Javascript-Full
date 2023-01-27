function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    arrCopy[i] = arr[i];
  }
  return arrCopy;
}

console.log(cloneArr([4, 5, 6, 8, 0]));
