const assert = require('assert');

const smallest = require('./app');

describe('Basic tests', () => {
	it('smallest', () => {
		assert.equal(3, inverseCaptcha01('1122'));
		testing(261235, [126235, 2, 0]);
    testing(209917, [29917, 0, 1]);
    testing(285365, [238565, 3, 1]);
    testing(269045, [26945, 3, 0]);
    testing(296837, [239687, 4, 1]);
	});
	
	it('Calculate Inverse Captcha of 1111 correctly', () => {
		assert.equal(4, inverseCaptcha01('1111'));
	});
	
	it('Calculate Inverse Captcha of 1234 correctly', () => {    
		assert.equal(0, inverseCaptcha01('1234'));
	});
	
	it('Calculate Inverse Captcha of 91212129 correctly', () => {    
		assert.equal(9, inverseCaptcha01('91212129'));
	});
});
