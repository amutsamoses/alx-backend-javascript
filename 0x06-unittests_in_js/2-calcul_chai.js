/**
 * Performs specified arithmetic operation on two rounded numbers.
 * @param   {string}  type  - 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param   {number}  a     - First number.
 * @param   {number}  b     - Second number.
 * @returns {number|string} - Result of operation or 'Error' for division by zero.
 * @throws  {Error}         - For unsupported operation types.
 */
function calculateNumber(type, a, b) {
  const numOne = Math.round(a);  // Round first number
  const numTwo = Math.round(b);  // Round second number

  switch (type) {
    case 'SUM':
      return numOne + numTwo;  // Return sum of rounded numbers
    case 'SUBTRACT':
      return numOne - numTwo;  // Return difference of rounded numbers
    case 'DIVIDE':
      if (!numTwo) return 'Error';  // Handle division by zero
      return numOne / numTwo;  // Return quotient of rounded numbers
    default:
      throw new Error('Operation not supported. Type must be SUM, SUBTRACT or DIVIDE');  // Invalid type
  }
}

module.exports = calculateNumber;  // Export function
