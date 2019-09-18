const eqObjects = function(object1, object2) {
  //generate arrays of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let equivalent = true;

  //test if key arrays are same length
  if (keys1.length !== keys2.length) {
    equivalent = false;
  }

  for (const key in object1) {
    if (!keys2.includes(key)) {
      equivalent = false;
    } else if (object1[key] instanceof Object && object2[key] instanceof Object) {
      equivalent = eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      equivalent = false;
    }
  }

  return equivalent;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; //may not be needed with the "," format.

  if (eqObjects(actual, expected)) {
    console.log("✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎ Assertion Passed: ", inspect(actual), " === ", inspect(expected), " ✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎✔︎︎︎︎");
  } else {
    console.log("✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎ Assertion Failed: ", inspect(actual), " !== ", inspect(expected), " ✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎✖︎︎︎︎");
  }
};

const ab = {a: {c: "3"}, b: "2"};
const ba = {b: "2", a: {c: "3"}};
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: {e: ["2", 3, 4]} };
assertObjectsEqual(cd, cd2);

const cd3 = { c: "1", d: {e: ["2", 3, 4]} };
assertObjectsEqual(cd2, cd3);