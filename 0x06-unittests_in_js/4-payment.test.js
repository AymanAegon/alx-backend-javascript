const { expect } = require('chai');
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
  it('checks function', () => {
    const fun = sinon.spy(console);
    const func = sinon.stub(Utils);

    func.calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(func.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(func.calculateNumber.calledOnce).to.be.true;
    expect(fun.log.calledWith('The total is: 10')).to.be.true;
    expect(fun.log.calledOnce).to.be.true;
    func.calculateNumber.restore();
    fun.log.restore();
  });
});
