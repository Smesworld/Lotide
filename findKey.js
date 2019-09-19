const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎ Assertion Passed: ${actual} === ${expected} ✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎`);
  } else {
    console.log(`✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎ Assertion Failed: ${actual} !== ${expected} ✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎`);
  }
};

const findKey = function(inputObject, callback) {
  for (const item in inputObject) {
    if (callback(inputObject[item])) {
      return item;
    }
  }
};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data, x => x.stars === 2), "noma");
assertEqual(findKey(data, x => x.stars > 2), "Akaleri");
assertEqual(findKey(data, x => x.stars > 4), undefined);
assertEqual(findKey([1, 2, 3, 4, 5], x => x % 4 === 0), "3");
