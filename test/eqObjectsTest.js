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