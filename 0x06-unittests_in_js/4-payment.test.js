/**
 * Test suite for sendPaymentRequestToApi method.
 */
const sinon = require('sinon');  // Import sinon for stubbing and spying
const { expect } = require('chai');  // Import expect from Chai assertion library
const Utils = require('./utils');  // Import utility functions
const sendPaymentRequestToAPi = require('./4-payment');  // Import the function to test

describe('sendPaymentRequestToApi', function() {
  describe('#stubbed Utils.calculateNumber()', function() {
    it('should return 10 when called by sendPaymentRequestToAPI', function() {
      const stub = sinon.stub(Utils, 'calculateNumber');  // Create a stub for Utils.calculateNumber
      const spy = sinon.spy(console, 'log');  // Create a spy for console.log
      stub.withArgs('SUM', 100, 20).returns(10);  // Define behavior for the stub

      sendPaymentRequestToAPi(100, 20);  // Call the function being tested

      expect(stub.calledOnce).to.equal(true);  // Check if stub was called once
      expect(stub.calledWith('SUM', 100, 20)).to.equal(true);  // Check if stub was called with correct arguments
      expect(spy.calledWith('The total is: 10')).to.equal(true);  // Check if console.log was called with the expected message

      stub.restore();  // Restore original function after the test
      spy.restore();  // Restore original console.log after the test
    });
  });
});
