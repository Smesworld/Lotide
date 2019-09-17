const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎ Assertion Passed: ${actual} === ${expected} ✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎`);
  } else {
    console.log(`✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎ Assertion Failed: ${actual} !== ${expected} ✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎`);
  }
};

const flatten = function(source) {
  let product = [];

  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      product = product.concat(flatten(source[i]));

    } else {
      product.push(source[i]);

    }
  }

  return product;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, [2], 3], [4, 5], 6, [[7]]]), [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten(["all", "the", ["leaves", [3], "are"], "brown"]), ["all", "the", "leaves", 3, "are", "brown"]);