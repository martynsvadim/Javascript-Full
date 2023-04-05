import { createArrayOfFunction } from './index';

it('function argument undefined', () => {
  const result = createArrayOfFunction();
  expect(result).toEqual([]);
});

it('function argument string', () => {
  const result = createArrayOfFunction('');
  expect(result).toEqual(null);
});

it('function argument array', () => {
  const result = createArrayOfFunction([]);
  expect(result).toEqual(null);
});

it('array length 5', () => {
  const result = createArrayOfFunction(5)[3]();
  expect(result).toEqual(3);
});
