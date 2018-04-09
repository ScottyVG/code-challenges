const assert = require('assert');

const twistyTrampolines01 = require('./day05-a');
const twistyTrampolines02 = require('./day05-b');

describe('Day 5 - Part a: A Maze of Twisty Trampolines, All Alike', () => {
	it('should properly calculate steps', () => {
		const offsets = 
		  `0
		   3
		   0
		   1
		  -3`;
		
		assert.equal(5, twistyTrampolines01(offsets));
	  });
});
describe('Day 5 - Part b: A Maze of Twisty Trampolines, All Alike', () => {
	it('should properly calculate other steps', () => {
		const offsets = 
		  `0
		   3
		   0
		   1
		  -3`;
		
		assert.equal(10, twistyTrampolines02(offsets));
	  });
});
