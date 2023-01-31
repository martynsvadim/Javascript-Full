const increaseEvenEl = (arr, delta) =>
  !Array.isArray(arr)
    ? null
    : arr.map((num) => (num % 2 === 0 ? num + delta : num));

console.log(increaseEvenEl([1, 14, 15, 18], 20)); // [1, 34, 15, 38]
