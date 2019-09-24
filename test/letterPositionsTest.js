const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns [1] for hello.e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [2, 3] for hello.l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("returns [1, 12, 15] for hello my name Jeff.e", () => {
    assert.deepEqual(letterPositions("hello my name Jeff").e, [1, 12, 15]);
  });
});