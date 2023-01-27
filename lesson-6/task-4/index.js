/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const swapArray = numbers;
  const first = swapArray.shift(numbers[0]);
  swapArray.push(first);

  return swapArray;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
