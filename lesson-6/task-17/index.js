function uniqueCount(array) {
  let newArray = [];
  let count = 0;
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (!inArray(newArray, array[i])) {
      newArray.push(array[i]);
      count += 1;
    }
  }
  return count;
}

function inArray(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return true;
    }
  }
  return false;
}

console.log(uniqueCount([3, 1, 1, 1, 1, 5, 6, 5, 8, 9]));
