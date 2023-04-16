import { user } from './index';

it('get full name', () => {
  const result = user.getFullName();
  expect(result).toEqual('John Doe');
});
