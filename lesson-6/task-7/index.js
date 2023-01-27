'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = (arr) => {
  let sumOfNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfNumber += arr[i];
  }
  return sumOfNumber > 100;
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true
