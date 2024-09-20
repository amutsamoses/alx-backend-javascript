/**
 * Adds two numbers
 * @param   {number}  a
 * @param   {number}  b
 * @returns {number}  -  The sum of a and b
 */
function calculateNumber(a, b) {
  const numOne = Math.round(a);
  const numTwo = Math.round(b);
  return numOne + numTwo;
}

module.exports = calculateNumber;
