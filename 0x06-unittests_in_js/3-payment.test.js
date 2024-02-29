const { expect } = require('chai');
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const { calculateNumber } = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks function', () => {
    const fun = sinon.spy(sendPaymentRequestToApi);
    const original = sinon.spy(calculateNumber);
    fun(100, 20);
    original('SUM', 100, 20);
    expect(fun.calledWith(100, 20)).to.equal(original.calledWith('SUM', 100, 20));
    fun.restore();
    original.restore();
  });
});
