// scrip that test the function Calcunumber
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and return the sum of two numbers 1 + 3 = 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should round and return the sum of two numbers 1 + 3.7 = 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should round and return the sum of two numbers 1.2 + 3.7 = 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should round and return the sum of two numbers 1.5 + 3.7 = 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should round and return the sum of two numbers -2 + 4 = 2', () => {
    assert.equal(calculateNumber(-2, 4), 2);
  });
  it('should round and return the sum of two numbers 2.6 + -4.7 = -2', () => {
    assert.equal(calculateNumber(2.6, -4.7), -2);
  });
  it('should round and return the sum of two numbers -2.5 + -7.5 = -9', () => {
    assert.equal(calculateNumber(-2.5, -7.5), -9);
  });
});
