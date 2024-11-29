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
