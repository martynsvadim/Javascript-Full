import getSum, { getSquaredNumbers, getOddNumbers } from './index.js';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3]);
  expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(3, 7);
  expect(result).toEqual(10);
});
