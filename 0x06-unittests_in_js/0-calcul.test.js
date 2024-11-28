const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
  it('should return the correct sum of positive numbers', function () {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should return the correct rounded sum of positive numbers', function(){
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should return the correct rounded sum of positive numbers', function(){
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should return the correct rounded sum of positive numbers', function(){
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
