import { reverseArray, withdraw, getAdults } from './index';

//reverseArray

it('array is ampty', () => {
  const result = reverseArray('');
  expect(result).toEqual(null);
});

it('array is ampty', () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it('array is ampty', () => {
  const result = reverseArray(1, 2, 3, 4);
  expect(result).toEqual(null);
});

//withdraw
it('array is ampty', () => {
  const result = withdraw(['John', 'Ann'], [1200, 20], 'John', 1000);
  expect(result).toEqual(200);
});

it('array is ampty', () => {
  const result = withdraw(['John', 'Ann'], [1200, 20], 'John', 1300);
  expect(result).toEqual(-1);
});

it('withdrawal of funds in Ann', () => {
  const result = withdraw(['John', 'Ann'], [1200, 20], 'Ann', 10);
  expect(result).toEqual(10);
});

//getAdults
it('array is ampty', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('array is ampty', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('array is ampty', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
