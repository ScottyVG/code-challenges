const assert = require('assert');

const streamProcessing01 = require('./day09-a');
const streamProcessing02 = require('./day09-b');

describe('Day 9 - Part a: Stream Processing', () => {
  it('should properly determine {} score', () => {
    assert.equal(streamProcessing01('{}'), 1);
  });

  it('should properly determine {{{}}} score', () => {
    assert.equal(streamProcessing01('{{{}}}'), 6);
  });

  it('should properly determine {{},{}} score', () => {
    assert.equal(streamProcessing01('{{},{}}'), 5);
  });

  it('should properly determine {{{},{},{{}}}} score', () => {
    assert.equal(streamProcessing01('{{{},{},{{}}}}'), 16);
  });

  it('should properly determine {<a>,<a>,<a>,<a>} score', () => {
    assert.equal(streamProcessing01('{<a>,<a>,<a>,<a>}'), 1);
  });

  it('should properly determine {{<ab>},{<ab>},{<ab>},{<ab>}} score', () => {
    assert.equal(streamProcessing01('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 9);
  });

  it('should properly determine {{<!!>},{<!!>},{<!!>},{<!!>}} score', () => {
    assert.equal(streamProcessing01('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 9);
  });

  it('should properly determine {{<a!>},{<a!>},{<a!>},{<ab>}} score', () => {
    assert.equal(streamProcessing01('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 3);
  });
});

describe('Day 9 - Part b: Stream Processing', () => {
  it('should properly determine <> characters', () => {
    assert.equal(streamProcessing02('<>'), 0);
  });

  it('should properly determine <random characters> characters', () => {
    assert.equal(streamProcessing02('<random characters>'), 17);
  });

  it('should properly determine <<<<> characters', () => {
    assert.equal(streamProcessing02('<<<<>'), 3);
  });

  it('should properly determine <{!>}> characters', () => {
    assert.equal(streamProcessing02('<{!>}>'), 2);
  });

  it('should properly determine <!!> characters', () => {
    assert.equal(streamProcessing02('<!!>'), 0);
  });

  it('should properly determine <!!!>> characters', () => {
    assert.equal(streamProcessing02('<!!!>>'), 0);
  });

  it('should properly determine <{o"i!a,<{i<a> characters', () => {
    assert.equal(streamProcessing02('<{o"i!a,<{i<a>'), 10);
  });
});
