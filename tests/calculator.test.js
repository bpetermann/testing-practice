const calculator = require('../code/calculator.js');

test('takes two numbers, adds b to a', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('takes two numbers, subtracts b from a', () => {
  expect(calculator.subtract(4,6)).toBe(-2);
});

test('takes two numbers, divides a by b', () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

test('takes two numbers, multiplies a with b', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  