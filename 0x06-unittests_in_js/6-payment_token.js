/**
 * Checks state of payment token
 * @param   {boolean} success
 * @returns {promise}
 */
function getPaymentTokenFromAPI(success) {
  if (success) return Promise.resolve({ data: 'Successful response from the API' });
}

module.exports = getPaymentTokenFromAPI;
