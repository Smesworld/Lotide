const eqArrays = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) {
    equal = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
      equal = eqArrays(firstArray[i], secondArray[i]);
    } else if (firstArray[i] !== secondArray[i]) {
      equal = false;
    }
  }

  return equal;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎ Assertion Passed: ", actual, " === ", expected, " ✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎");
  } else {
    console.log("✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎ Assertion Failed: ", actual, " !== ", expected, " ✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎");
  }
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([], i => i), []);
assertArraysEqual(map(words, word => word[word.length - 1]), ["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, word => word + " des"), ["ground des", "control des", "to des", "major des", "tom des"]);