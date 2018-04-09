const assert = require('assert');

const corruptionChecksum = require('./day02-a');
const corruptionChecksum2 = require('./day02-b');

describe('Day 2 - Part a: Corruption Checksum', () => {
	it('Calculate the Spreadsheet Checksum correctly', () => {
		const spreadsheet = 
		`5 1 9 5
		 7 5 3
		 2 4 6 8`;
		
		assert.equal(18, corruptionChecksum(spreadsheet));
	});
});
describe('Day 2 - Part b: Corruption Checksum', () => {
	it('Calculate the Spreadsheet Checksum correctly', () => {
		const spreadsheet = 
		`5 9 2 8
		 9 4 7 3
		 3 8 6 5`;
		
		assert.equal(9, corruptionChecksum2(spreadsheet));
	});
});