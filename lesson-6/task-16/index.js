function removeDuplicates(array) {
  let newArray = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (!inArray(newArray, array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function inArray(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return true;
    }
  }
  return false;
}

console.log(removeDuplicates([3, 1, 1, 1, 1, 5, 6, 5, 8]));
