const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("numbers remains unchanged by tail()", () => {
    const numbers = [1, 2, 3];
    tail(numbers);
    assert.deepEqual(numbers, [1, 2, 3]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
