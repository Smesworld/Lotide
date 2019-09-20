const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎ Assertion Passed: ${actual} === ${expected} ✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎`);
  } else {
    console.log(`✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎ Assertion Failed: ${actual} !== ${expected} ✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays([], ["a"]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
