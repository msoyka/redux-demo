import { total } from './total';

test('total', () => {
  const value = total(5, 20);
  expect(value).toBe('$25');
});
