/**
 * Express app test suite
 */
const { expect } = require('chai'); // Importing Chai's expect for assertions
const request = require('request'); // Importing request module for making HTTP requests

const HOST = '127.0.0.1'; // Defining the host for the test
const PORT = '7865'; // Defining the port for the test

describe('Express app test suite', function() { // Starting the test suite
  it('should return home page', function(done) { // Test case for home page
    request.get(`http://${HOST}:${PORT}/`, (error, res, body) => { // Making a GET request to the home page
      if (error) expect(res.statusCode).to.not.equal(200); // If there's an error, status code should not be 200
      expect(res.statusCode).to.equal(200); // Expecting status code to be 200 for a successful response
      expect(body).to.equal('Welcome to the payment system'); // Expecting the response body to match the expected string
      done(); // Signaling that the test is complete
    });
  });
});
