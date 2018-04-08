const assert = require('assert');
const challenge = require('./challenge');

describe('/r/dailyprogrammer: clone-setup', () => {
	it('challenge.js works correctly', () => {
        const input =
            `test`;

        assert.equal('test', challenge(input));
	});	
});