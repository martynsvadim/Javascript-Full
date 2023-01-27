'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  let sumOfArray = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sumOfArray += arr[i];
  }
  return sumOfArray;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
