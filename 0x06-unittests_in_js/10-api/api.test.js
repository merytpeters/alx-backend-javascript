const chai = require('chai');
const request = require('request');
const { expect } = chai;
const app = require('./api');

describe('Login endpoint', function() {
  it('should return correct message with username', function(done) {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', function() {
  it('should return correct payment methods', function(done) {
    request.get('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
