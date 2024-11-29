const getPaymentTokenFromAPI = require('./6-payment_token');
const assert =  require('assert');


describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response from the API', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Assert that the response data matches the expected input
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        // Indicate that the test is complete
        done();
      })
      .catch(err => {
        // If an error occurs, fail the test
        done(err);
      });
  });
})
