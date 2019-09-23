const middle = function(inputArray) {
  let midArray = [];

  if (inputArray.length <= 2) {
    return midArray;
  }

  const midIndex = inputArray.length / 2;

  if (Number.isInteger(midIndex)) {
    midArray.push(inputArray[midIndex - 1]);
    midArray.push(inputArray[midIndex]);
  } else {
    midArray.push(inputArray[Math.ceil(midIndex - 1)]);
  }

  return midArray;
};

module.exports = middle;