const { expect } = require('chai');
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
  it('checks function', () => {
    const fun = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(fun.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(fun.calculateNumber.calledOnce).to.be.true;
    fun.calculateNumber.restore();
  });
});
