function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
