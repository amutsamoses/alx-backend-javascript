/**
 * Adds two numbers
 * @param   {number}  a
 * @param   {number}  b
 * @returns {number}  -  The sum of a and b
 */
function calculateNumber(a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  return num1 + num2;
}

module.exports = calculateNumber;
