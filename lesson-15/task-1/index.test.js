import { makeCounter } from './index';

const counter1 = makeCounter();
const counter2 = makeCounter();

it('the counter1 is called once', () => {
  const result = counter1();
  expect(result).toEqual(0);
});

it('the counter1 is called twice', () => {
  const result = counter1();
  expect(result).toEqual(1);
});

it('the counter1 is called three times', () => {
  const result = counter1();
  expect(result).toEqual(2);
});

it('the counter2 is called once', () => {
  const result = counter2();
  expect(result).toEqual(0);
});
