const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

describe("#tail", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns drama when given The Wire from bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when given That '70s Show from bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
