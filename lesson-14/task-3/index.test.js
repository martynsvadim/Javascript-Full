import { add, decrease, reset, getMemo } from './index.js';

add(5);
decrease(3);
reset();
getMemo();

it('return is getMemo', () => {
  const result = getMemo();
  expect(result).toEqual(0);
});
