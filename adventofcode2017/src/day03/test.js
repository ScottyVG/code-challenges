const assert = require('assert');

const spiralMemory01 = require('./day03-a');
const spiralMemory02 = require('./day03-b');

describe('Day 3 - Part a: Spiral Memory', () => {
	it('Calculate Spiral Memory correctly to 1', () => {  
		assert.equal(0, spiralMemory01(1));
	  });
	  
	  it('Calculate Spiral Memory correctly to 12', () => {  
		assert.equal(3, spiralMemory01(12));
	  });
	  
	  it('Calculate Spiral Memory correctly to 23', () => {  
		assert.equal(2, spiralMemory01(23));
	  });
	  
	  it('Calculate Spiral Memory correctly to 1024', () => {  
		assert.equal(31, spiralMemory01(1024));
	  });
});

describe('Day 3 - Part b: Spiral Memory', () => {
	it('Calculate Spiral Memory correctly to 10', () => {
		assert.equal(11, spiralMemory02(10));
	  });
	  
	  it('Calculate Spiral Memory correctly to 59', () => {
		assert.equal(122, spiralMemory02(59));
	  });
});
