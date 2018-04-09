const assert = require('assert');

const packetScanner01 = require('./day13-a');
const packetScanner02 = require('./day13-b');

describe('Day 13 - Part a: Packet Scanner', () => {
	it('Calculate trip severity correctly', () => {
		const list = `0: 3
                  1: 2
                  4: 4
                  6: 4`;

		assert.equal(packetScanner01(list), 24);
	});
});

describe('Day 13 - Part b: Packet Scanner', () => {
	it('Calculate picosecond delay to safely pass through correctly', () => {
		const list = `0: 3
                    1: 2
                    4: 4
                    6: 4`;
		assert.equal(packetScanner02(list), 10);
	});
});