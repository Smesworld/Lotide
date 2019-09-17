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

const without = function(source, itemsToRemove) {
  let product = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      product.push(source[i]);
    }
  }

  return product;
};

assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 4, 5, "6", 4, 3, 2, 4, "e"], [2, 4, "e"]), [1, 3, 5, "6", 3]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);