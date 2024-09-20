/**
 * Test suite for sendPaymentRequestToApi method.
 */
const sinon = require('sinon');  // Import sinon for spying
const { expect } = require('chai');  // Import expect from Chai assertion library
const Utils = require('./utils');  // Import utility functions
const sendPaymentRequestToAPi = require('./3-payment');  // Import the function to test

describe('sendPaymentRequestToApi', function() {
  describe('#Utils.calculateNumber()', function() {
    it('should be called with args from sendPaymentRequestToApi', function() {
      const spy = sinon.spy(Utils, 'calculateNumber');  // Create a spy for Utils.calculateNumber
      sendPaymentRequestToAPi(100, 20);  // Call the function being tested
      expect(spy.calledOnce).to.equal(true);  // Check if spy was called once
      expect(spy.calledWith('SUM', 100, 20)).to.equal(true);  // Check if spy was called with correct arguments
      spy.restore();  // Restore original function after the test
    });
  });
});
