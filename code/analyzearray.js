function analyzeArray(arr) {
  let object = { average: 0, min: 0, max: 0, length: 0 };
  const arraySort = arr.sort((a, b) => a - b);

  object.average = arr.reduce((a, b) => a + b) / arr.length;
  object.min = arraySort[0];
  object.max = arraySort[arr.length - 1];
  object.length = arr.length;
  
  return object;
}

module.exports = analyzeArray;
