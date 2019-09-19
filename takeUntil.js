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

const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }

  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

assertArraysEqual(takeUntil(data1, x => x === 5), [1, 2]);
assertArraysEqual(takeUntil(data2, x => x[0] === "H"), ["I've", "been", "to"]);