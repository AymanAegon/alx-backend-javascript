const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function() {
  it("checks equality", function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it("checks equality", function() {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it("checks equality", function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it("checks equality", function() {
    expect(calculateNumber('SUBTRACT', 4.2, 2.7)).to.equal(1);
  });
  it("checks equality", function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it("checks equality", function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
