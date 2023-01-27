function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sumOfMaxMin = Math.max.apply(null, arr) + Math.min.apply(null, arr);
  return sumOfMaxMin > 1000;
}
