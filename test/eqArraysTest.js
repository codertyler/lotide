const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

});


