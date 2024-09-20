/**
 * 0-calcul.js.calculateNumber test suite
 * 
 * This test suite verifies the functionality of the `calculateNumber` function 
 * from the `0-calcul.js` module. The function `calculateNumber` is expected 
 * to round its two input arguments and return their sum. The suite includes 
 * multiple test cases to validate the function's behavior with various types 
 * of inputs, covering both normal and edge cases.
 * 
 * Test cases:
 * 
 * 1. **Positive Numbers:**
 *    - Validates that the function correctly rounds and sums two positive numbers.
 *    - Scenarios include cases where one or both numbers are decimal values, and 
 *      the rounded result impacts the overall sum.
 * 
 * 2. **Negative Numbers:**
 *    - Checks if the function accurately rounds and sums two negative numbers.
 *    - Ensures that rounding works correctly even when dealing with negative values.
 * 
 * 3. **Mixed Positive and Negative Numbers:**
 *    - Tests how the function handles the sum of one positive and one negative number.
 *    - Includes scenarios where the absolute values are close, resulting in 
 *      different behaviors based on the rounding.
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber simple test suite', function() {
  
  describe('#Add positive numbers', function() {
    /**
     * Test case 1: Basic addition of two positive integers.
     * Input: (1, 3)
     * Expected Output: 4
     */
    it('should return 4', function() {
      assert.equal(calculateNumber(1, 3), 4);
    });

    /**
     * Test case 2: Adding an integer and a decimal number.
     * Input: (1, 3.7)
     * Expected Output: 5
     * Explanation: 3.7 is rounded to 4.
     */
    it('should return 5', function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });

    /**
     * Test case 3: Adding two decimal numbers.
     * Input: (1.2, 3.7)
     * Expected Output: 5
     * Explanation: 1.2 rounds to 1, and 3.7 rounds to 4.
     */
    it('should return 5', function() {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    /**
     * Test case 4: Adding a decimal number that rounds up.
     * Input: (1.5, 3.7)
     * Expected Output: 6
     * Explanation: 1.5 rounds to 2, and 3.7 rounds to 4.
     */
    it('should return 6', function() {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('#Add negative numbers', function() {
    /**
     * Test case 5: Adding two negative numbers.
     * Input: (-1.6, -3)
     * Expected Output: -5
     * Explanation: -1.6 rounds to -2, and -3 remains -3.
     */
    it('should return -5', function() {
      assert.equal(calculateNumber(-1.6, -3), -5);
    });

    /**
     * Test case 6: Adding two negative numbers with decimals.
     * Input: (-1.6, -3.6)
     * Expected Output: -6
     * Explanation: -1.6 rounds to -2, and -3.6 rounds to -4.
     */
    it('should return -6', function() {
      assert.equal(calculateNumber(-1.6, -3.6), -6);
    });
  });

  describe('#Add positive and negative numbers', function() {
    /**
     * Test case 7: Adding a positive and a negative integer.
     * Input: (-1, 3)
     * Expected Output: 2
     * Explanation: -1 remains -1, and 3 remains 3.
     */
    it('should return 2', function() {
      assert.equal(calculateNumber(-1, 3), 2);
    });

    /**
     * Test case 8: Adding a negative decimal and a positive integer.
     * Input: (-1.6, 3)
     * Expected Output: 1
     * Explanation: -1.6 rounds to -2, and 3 remains 3.
     */
    it('should return 1', function() {
      assert.equal(calculateNumber(-1.6, 3), 1);
    });
  });
});
