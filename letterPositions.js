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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello my name Jeff").e, [1, 12, 15]);
assertArraysEqual(letterPositions("hello").o, [1]);