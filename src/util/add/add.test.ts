import add from 'util/add';

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
