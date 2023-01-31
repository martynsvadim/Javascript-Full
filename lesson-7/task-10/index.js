const sumArr = (arr) =>
  !Array.isArray(arr) ? null : arr.reduce((acc, item) => acc + item);
