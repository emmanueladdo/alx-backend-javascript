// Scrits to test API
const request = require('request');
const { expect } = require('chai');

describe('integration Testing', () => {
  describe('gET /', () => {
    it('code: 200 | Body: Welcome to the payment system', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    }));
  });

  describe('gET /cart/12', () => {
    it('responds with 200 and id 12 in msg', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    }));
  });

  describe('gET /cart/1', () => {
    it('responds with 200 and id 1 in msg', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    }));
  });

  describe('gET /cart/123', () => {
    it('responds with 200 and id 12 in msg', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    }));
  });

  describe('gET /cart/a12', () => {
    it('responds with 404', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });

  describe('gET /cart/a12b', () => {
    it('responds with 404', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12b',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });

  describe('gET /cart/12b', () => {
    it('responds with 404', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/12b',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });

  describe('gET /cart/hello', () => {
    it('responds with 404', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });

  describe('gET /cart/', () => {
    it('responds with 404', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    }));
  });
});
