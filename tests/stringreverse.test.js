const reverseString = require('../code/stringreverse.js');

test('takes a string, returns it reversed', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

test('takes a longer string, returns it reversed', () => {
  expect(reverseString('A longer String to be reversed')).toBe('desrever eb ot gnirtS regnol A');
});
