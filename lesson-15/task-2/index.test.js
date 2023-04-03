import { createCalculator } from './index.js';

const calculator = createCalculator();
const calculatorNext = createCalculator();

calculator.getMemo(); // 0
calculator.add(3);
calculator.getMemo(); // 3
calculator.decrease(5);
calculator.getMemo(); // -2

calculatorNext.add(5);
calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2
calculator.reset();
calculator.getMemo(); // 0

calculatorNext.getMemo(); // 5

it('the calculator getMemo', () => {
  const result = calculator.getMemo();
  expect(result).toEqual(0);
});

it('the calculator add number 3', () => {
  const result = calculator.add(3);
  expect(result).toEqual(3);
});

it('the calculator getMemo2', () => {
  const result = calculator.getMemo();
  expect(result).toEqual(3);
});

it('the calculatorNext getMemo', () => {
  const result = calculatorNext.getMemo();
  expect(result).toEqual(5);
});

it('the calculator decrease number 5', () => {
  const result = calculator.decrease(5);
  expect(result).toEqual(-2);
});

it('the calculator getMemo', () => {
  const result = calculator.getMemo();
  expect(result).toEqual(-2);
});

it('the calculator reset', () => {
  const result = calculator.reset();
  expect(result).toEqual(0);
});
