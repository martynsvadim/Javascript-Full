import bar from './index';

let foo = bar();

it('get return foo', () => {
  const result = foo;
  expect(result).toEqual(1);
});
