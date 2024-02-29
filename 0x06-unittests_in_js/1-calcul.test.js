const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function() {
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 2.7), 1);
  });
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("checks equality", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
