const assert = require('assert');

const memoryReallocation01 = require('./day06-a');
const memoryReallocation02 = require('./day06-b');

describe('Day 6 - Part a: Memory Reallocation', () => {
	it('Calculate steps properly', () => {
		const banks = '0 2 7 0';

		assert.equal(memoryReallocation01(banks), 5);
	});
});
describe('Day 6 - Part b: Memory Reallocation', () => {
	it('Calculate steps properly', () => {
		const banks = '0 2 7 0';

		assert.equal(memoryReallocation02(banks), 4);
	});
});