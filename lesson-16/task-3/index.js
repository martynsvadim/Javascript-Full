export const createArrayOfFunction = (integer) => {
  if (integer === undefined) {
    return [];
  }
  return typeof integer !== 'number'
    ? null
    : Array(integer)
        .fill()
        .map(
          (element, index) =>
            function () {
              return index;
            }
        );
};
