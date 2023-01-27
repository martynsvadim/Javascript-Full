'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i += 1) {
    if (copyArr[i] % 2 === 0) {
      copyArr[i] = copyArr[i] + delta;
    }
  }
  return copyArr;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
