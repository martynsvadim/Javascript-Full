function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    copyArr.push(arr[i]);
  }
  return copyArr;
}
