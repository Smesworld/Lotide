const assertObjectsEqual = require("../assertObjectsEqual");

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