import getMinSquaredNumber from './getMinSquaredNumber.js';

it('array is ampty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('argument is a string', () => {
  const result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});

it('get the square of the minimum number from the array', () => {
  const result = getMinSquaredNumber([-2, 4.5, -9]);
  expect(result).toEqual(4);
});
