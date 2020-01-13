const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe('#assertEqual', () => {
  it('should return a pass when the values are equal', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"), "✨: Lighthouse Labs === Lighthouse Labs"); 
  });
  it('should return a fail when the values are not equal', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), "🚨: Lighthouse Labs !== Bootcamp");
  });
  it ('should parse arrays into strings and sanely compare the results', () => {
    assert.strictEqual(assertEqual([1, 2, 3], [1, 2, 3]), "✨: 1,2,3 === 1,2,3");
    assert.strictEqual(assertEqual([1, 2, 3], [6, 6, 6]), "🚨: 1,2,3 !== 6,6,6");
  });
});