// API Available
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

  describe('gET /available_payments JSON string', () => {
    it('responds with 200 and correct JSON string', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}',
        );
        done();
      });
    }));
  });

  describe('gET /available_payments JSON parsed', () => {
    it('responds with 200 and correct JSON object when parsed', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    }));
  });

  describe('pOST /login with body', () => {
    it('responds with 200 and correct name Betty', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    }));
  });

  describe('pOST /login with no body', () => {
    it('responds with 200 and correct name Undefined', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    }));
  });
});
