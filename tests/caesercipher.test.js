const caesarCipher = require('../code/caesercipher');

test('takes a string, returns it with each character offset by 1', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('another test, another offset', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 7)).toBe(
    'hijklmnopqrstuvwxyzabcdefg'
  );
});

test('also works with negative offset', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -2)).toBe(
    'yzabcdefghijklmnopqrstuvwx'
  );
});

test('special characters should stay the same', () => {
  expect(caesarCipher('[!@#$%^&*()')).toBe('[!@#$%^&*()');
});
