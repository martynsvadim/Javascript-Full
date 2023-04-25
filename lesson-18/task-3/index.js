export function sumOfSquares() {
  return [...arguments]
    .map((elem) => elem * elem)
    .reduce((acc, elem) => {
      return acc + elem;
    }, 0);
}

console.log(sumOfSquares(4, 5, 6));
