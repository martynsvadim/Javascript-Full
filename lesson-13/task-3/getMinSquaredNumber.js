export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const newArray = arr.map((num) => num * num);
  return Math.min(...newArray);
};
