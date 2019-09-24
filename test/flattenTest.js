const flatten = require("../flatten");
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6, 7] given [[1, [2], 3], [4, 5], 6, [[7]]]", () => {
    assert.deepEqual(flatten([[1, [2], 3], [4, 5], 6, [[7]]]), [1, 2, 3, 4, 5, 6, 7]);
  });

  it("returns [] given []", () => {
    assert.deepEqual(flatten([]), []);
  });

});
