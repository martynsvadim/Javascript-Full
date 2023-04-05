import { arr } from './index';

it('index of the element from array', () => {
  const result = arr[2]();
  expect(result).toEqual(2);
});

it('index of the element from array', () => {
  const result = arr[5]();
  expect(result).toEqual(5);
});
