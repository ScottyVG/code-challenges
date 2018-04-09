const assert = require('assert');

const digitalPlumber01 = require('./day12-a');
const digitalPlumber02 = require('./day12-b');

describe('Day 12 - Part a: Digital Plumber', () => {
  it('Calculate the number of connected pipes to 0', () => {
    const list =
      `0 <-> 2
       1 <-> 1
       2 <-> 0, 3, 4
       3 <-> 2, 4
       4 <-> 2, 3, 6
       5 <-> 6
       6 <-> 4, 5`;

    assert.equal(digitalPlumber01(list), 6);
  });
});

describe('Day 12 - Part b: Digital Plumber', () => {
	it('Calculate the number of groups', () => {
		const list =
			`0 <-> 2
				1 <-> 1
				2 <-> 0, 3, 4
				3 <-> 2, 4
				4 <-> 2, 3, 6
				5 <-> 6
				6 <-> 4, 5`;

		assert.equal(digitalPlumber02(list), 2);
	});
});