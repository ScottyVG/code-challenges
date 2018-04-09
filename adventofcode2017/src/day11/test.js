const assert = require('assert');

const hexEd01 = require('./day11-a');

describe('Day 11 - Part a: Hex Ed', () => {
  it('Calculate "ne,ne,ne" to the fewest number of steps in the hex grid', () => {
    assert.equal(hexEd01('ne,ne,ne'), 3);
  });

  it('Calculate "ne,ne,sw,sw" to the fewest number of steps in the hex grid', () => {
    assert.equal(hexEd01('ne,ne,sw,sw'), 0);
  });

  it('Calculate "ne,ne,s,s" to the fewest number of steps in the hex grid', () => {
    assert.equal(hexEd01('ne,ne,s,s'), 2);
  });

  it('Calculate "se,sw,se,sw,sw" to the fewest number of steps in the hex grid', () => {
    assert.equal(hexEd01('se,sw,se,sw,sw'), 3);
  });
});