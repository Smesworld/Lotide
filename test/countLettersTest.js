const countLetters = require("../countLetters");
const assert = require('chai').assert;

describe("#countLetters", () => {
  const result1 = countLetters("loopylighthouse");

  it("returns 2 for l given loopylighthouse", () => {
    assert.strictEqual(result1["l"], 2);
  });

  it("returns undefined for r given loopylighthouse", () => {
    assert.strictEqual(result1["r"], undefined);
  });

  it("returns {'l': 1, 'o': 2, 'p': 1} given 'loop'", () => {
    assert.deepEqual(countLetters("loop"), {"l": 1, "o": 2, "p": 1});
  });
});