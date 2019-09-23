const eqArrays = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) {
    equal = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    const isArray1 = Array.isArray(firstArray[i]);
    const isArray2 = Array.isArray(secondArray[i]);
    if (isArray1 && isArray2) {
      equal = eqArrays(firstArray[i], secondArray[i]);
    } else if (firstArray[i] !== secondArray[i]) {
      equal = false;
    }
  }

  return equal;
};

module.exports = eqArrays;