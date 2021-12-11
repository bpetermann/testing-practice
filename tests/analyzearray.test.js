const analyzeArray = require('../code/analyzearray');

test('takes an numbers-array, returns an object with properties: average, min, max, and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(
      {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      }
  );
});
