// Scrits to test API
const { expect } = require('chai');
const request = require('request');

describe('index Page', () => {
  it('should respond with the correct status code', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('should have the correct content of the body', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
    });
  });

  it('should have the corrent Content-Type', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the corrent Content-Length', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});
