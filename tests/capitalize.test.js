const capitalize = require('../code/capitalize.js');

test('takes a string, returns it with capitalized first char', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});

test('takes a string, returns it with capitalized first char', () => {
  expect(capitalize('working')).toBe('Working');
});
