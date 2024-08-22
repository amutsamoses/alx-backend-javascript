/**
 * Adds, subtracts or divides two numbers depending
 * on operator type specified
 * @param   {string}  type  - SUM, SUBTRACT, or DIVIDE
 * @param   {number}  a
 * @param   {number}  b
 * @returns {number}  -  The result of operation of a and b
 */
function calculateNumber(type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  switch (type) {
    case 'SUM':
      return num1 + num2;
    case 'SUBTRACT':
      return num1 - num2;
    case 'DIVIDE':
      if (!num2) return 'Error';
      return num1 / num2;
    default:
      throw new Error('Operation not supported. Type must be SUM, SUBTRACT or DIVIDE');
  }
}

module.exports = calculateNumber;
