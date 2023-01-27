'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrSquare = arr.slice();
  for (let i = 0; i < arrSquare.length; i += 1) {
    arrSquare[i] = arrSquare[i] * arrSquare[i];
  }
  return arrSquare;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
