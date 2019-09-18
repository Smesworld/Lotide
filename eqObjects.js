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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let equivalent = true;

  if (keys1.length !== keys2.length) {
    equivalent = false;
  }

  for (const key in object1) {
    if (!keys2.includes(key)) {
      equivalent = false;
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      equivalent = eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      equivalent = false;
    }
  }

  return equivalent;
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const ac = {a: "1", c: "3"};
assertEqual(eqObjects(ab, ac), false);

const aB = {a: "1", b: "20"};
assertEqual(eqObjects(ab, aB), false);

const complex1 = {foo: true, bar: 5, nope: "How we doin"};
const complex2 = {bar: 5, foo: true, nope: "How we doin"};
assertEqual(eqObjects(complex1, complex2), true);

const complex3 = {foo: 5, bar: true, nope: "How we doin"};
assertEqual(eqObjects(complex1, complex3), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { c: "1", d: 4 };
assertEqual(eqObjects(cd, cd3), false);