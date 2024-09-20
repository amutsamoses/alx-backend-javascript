/**
 * Test suite for sendPaymentRequestToApi method.
 */
const sinon = require('sinon');  // Import sinon for spying
const { expect } = require('chai');  // Import expect from Chai assertion library
const Utils = require('./utils');  // Import utility functions
const sendPaymentRequestToAPi = require('./5-payment');  // Import the function to test

describe('sendPaymentRequestToApi', function() {
  describe('#pys Utils.calculateNumber()', function() {
    let spy;  // Declare a variable for the spy

    beforeEach(function() {
      spy = sinon.spy(console, 'log');  // Create a spy for console.log before each test
    });

    afterEach(function() {
      spy.restore();  // Restore original console.log after each test
    });

    it('should return 120 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(100, 20);  // Call the function being tested
      expect(spy.calledWith('The total is: 120')).to.equal(true);  // Check if console.log was called with the expected message
      expect(spy.calledOnce).to.equal(true);  // Check if console.log was called once
    });

    it('should return 20 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(10, 10);  // Call the function being tested
      expect(spy.calledWith('The total is: 20')).to.equal(true);  // Check if console.log was called with the expected message
      expect(spy.calledOnce).to.equal(true);  // Check if console.log was called once
    });
  });
});
