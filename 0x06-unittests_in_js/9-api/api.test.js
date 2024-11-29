const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
    const url = 'http://localhost:7865/';

    it('should return status code 200', (done) => {
        request.get(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request.get(url, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should have no error', (done) => {
        request.get(url, (error, response, body) => {
            expect(error).to.be.null;
            done();
        });
    });
});

describe('Cart page', () => {
  it('should return 200 and correct message for valid cart id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart id (non-number)', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 for missing cart id', (done) => {
    request.get('http://localhost:7865/cart/', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
