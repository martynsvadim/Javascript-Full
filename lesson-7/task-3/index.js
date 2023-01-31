const flatArray = (arr) =>
  arr.reduce((acc, item) => {
    return acc.concat(item).sort((a, b) => a - b);
  }, []);

console.log(flatArray([5, [1, 4, 3], 2, [0]]));
