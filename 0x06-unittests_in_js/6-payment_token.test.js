/**
 * Test suite for the `getPaymentTokenFromAPI` function
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  /**
   * asynchronous behavior of `getPaymentTokenFromAPI`
   */
  describe('#Async test', function () {
    /**
     * Test verifies the structure of the response from the payment API
     */
    it('should test response from payment API', function (done) {
      // Call the function with the expected argument (likely a boolean indicating success)
      getPaymentTokenFromAPI(true)
        .then((res) => {
          // Use Chai assertions to validate the response structure
          expect(res).to.be.an('object')
            .with.property('data', 'Successful response from the API');
          // Signal test completion after assertions
          done();
        });
    });
  });
});
