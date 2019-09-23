const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true given {a: '1', b: '2'}, {b: '2', a: '1'}", () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false given {a: '1', b: '2'}, {a: '1', b: '2', c: '3'}", () => {
    const ab = {a: "1", b: "2"};
    const abc = {a: "1", b: "2", c: "3"};
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("returns true { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }]", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); 
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); 
  });
});

// const ac = {a: "1", c: "3"};
// assertEqual(eqObjects(ab, ac), false);

// const aB = {a: "1", b: "20"};
// assertEqual(eqObjects(ab, aB), false);

// const complex1 = {foo: true, bar: 5, nope: "How we doin"};
// const complex2 = {bar: 5, foo: true, nope: "How we doin"};
// assertEqual(eqObjects(complex1, complex2), true);

// const complex3 = {foo: 5, bar: true, nope: "How we doin"};
// assertEqual(eqObjects(complex1, complex3), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// const cd3 = { c: "1", d: 4 };
// assertEqual(eqObjects(cd, cd3), false);

// assertEqual();
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);