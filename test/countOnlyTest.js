const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns 1 given Jason from firstNames { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Jason"], 1);
  });

  it("returns undefined given Karima from firstNames { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Karima"], undefined);
  });

});