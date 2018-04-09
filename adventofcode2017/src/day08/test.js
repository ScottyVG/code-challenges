const assert = require('assert');

const registers01 = require('./day08-a');
const registers02 = require('./day08-b');

describe('Day 8 - Part a: I Heard You Like Registers', () => {
  it('Correctly calclulate the largest register', () => {
    const instructions =
      `b inc 5 if a > 1
       a inc 1 if b < 5
       c dec -10 if a >= 1
       c inc -20 if c == 10`;

    assert.equal(registers01(instructions), 1);
  });
});

describe('Day 8 - Part b: I Heard You Like Registers', () => {
  it('Correctly calclulate the highest value', () => {
    const instructions =
      `b inc 5 if a > 1
       a inc 1 if b < 5
       c dec -10 if a >= 1
       c inc -20 if c == 10`;

    assert.equal(registers02(instructions), 10);
  });
});