const arrAverage = (arr) =>
  !Array.isArray(arr)
    ? null
    : arr.reduce((acc, item) => acc + item) / arr.length;
