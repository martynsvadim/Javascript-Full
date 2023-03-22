import { calc } from './calculator.js';

it('adding numbers', () => {
  const result = calc('4 + 5');
  expect(result).toEqual('4 + 5 = 9');
});

it('subtracting numbers', () => {
  const result = calc('5 - 4');
  expect(result).toEqual('5 - 4 = 1');
});

it('multiplication of numbers', () => {
  const result = calc('4 * 5');
  expect(result).toEqual('4 * 5 = 20');
});

it('division of numbers', () => {
  const result = calc('20 / 5');
  expect(result).toEqual('20 / 5 = 4');
});

it('argument is not a string', () => {
  const result = calc(20 / 5);
  expect(result).toEqual(null);
});
