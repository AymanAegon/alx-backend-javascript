const { expect } = require('chai');
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
  let fun;
  beforeEach(function () {
    if (!fun) {
      fun = sinon.spy(console);
    }
  });
  afterEach(function () {
    fun.log.resetHistory();
  });

  it('checks function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(fun.log.calledWith('The total is: 120')).to.be.true;
    expect(fun.log.calledOnce).to.be.true;
  });

  it('checks function', () => {
    sendPaymentRequestToApi(10, 10);
    expect(fun.log.calledWith('The total is: 20')).to.be.true;
    expect(fun.log.calledOnce).to.be.true;
  });
});
