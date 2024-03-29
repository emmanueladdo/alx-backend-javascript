// functin takes 3 argument and return operational
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should round and return the sum of two numbers 1 + 3 = 4', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should round and return the sum of two numbers 1 + 3.7 = 5', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should round and return the sum of two numbers 1.2 + 3.7 = 5', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should round and return the sum of two numbers 1.5 + 3.7 = 6', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should round and return the sum of two numbers -2 + 4 = 2', () => {
      assert.equal(calculateNumber('SUM', -2, 4), 2);
    });
    it('should round and return the sum of two numbers 2.6 + -4.7 = -2', () => {
      assert.equal(calculateNumber('SUM', 2.6, -4.7), -2);
    });
    it('should round and return the sum of two numbers -2.5 + -7.5 = -9', () => {
      assert.equal(calculateNumber('SUM', -2.5, -7.5), -9);
    });
  });
  describe('subtract', () => {
    it('should round and return the sum of two numbers 3 - 1 = 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    it('should round and return the sum of two numbers 1 - 3.7 = -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should round and return the sum of two numbers 1.2 - 3.7 = -3', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should round and return the sum of two numbers 1.5 - 3.7 = -2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should round and return the sum of two numbers -2 - 4 = -6', () => {
      assert.equal(calculateNumber('SUBTRACT', -2, 4), -6);
    });
    it('should round and return the sum of two numbers 2.6 - -4.7 = 8', () => {
      assert.equal(calculateNumber('SUBTRACT', 2.6, -4.7), 8);
    });
    it('should round and return the sum of two numbers -2.5 - -7.5 = -9', () => {
      assert.equal(calculateNumber('SUBTRACT', -2.5, -7.5), 5);
    });
  });
  describe('divide', () => {
    it('should round and return the sum of two numbers 3 / 1 = 3', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
    });
    it('should round and return the sum of two numbers 1 / 3.7 = 0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should round and return the sum of two numbers 1.2 / 3.7 = 0.25', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('should round and return the sum of two numbers 1.5 / 3.7 = 0.5', () => {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it('should round and return the sum of two numbers -2 / 4 = -0.5', () => {
      assert.equal(calculateNumber('DIVIDE', -2, 4), -0.5);
    });
    it('should round and return the sum of two numbers 2.6 / -4.7 = -0.6', () => {
      assert.equal(calculateNumber('DIVIDE', 2.6, -4.7), -0.6);
    });
    it('should round and return the sum of two numbers -2.5 / -5 = 0.4', () => {
      assert.equal(calculateNumber('DIVIDE', -2.5, -5), 0.4);
    });
    it('should return Error 1.4 / 0 = Error', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
