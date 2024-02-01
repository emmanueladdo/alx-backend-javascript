// Script to test
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { calculateNumber } = require('./utils');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });

  it('should have two arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('should be called once with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it('should console log with the correct sum parameter', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
