const assert = require('assert');

const inverseCaptcha01 = require('./day01-a');
const inverseCaptcha02 = require('./day01-b');

describe('Day 1 - Part a: Inverse Captcha', () => {
	it('Calculate Inverse Captcha of 1122 correctly', () => {
		assert.equal(3, inverseCaptcha01('1122'));
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
describe('Day 1 - Part b: Inverse Captcha', () => {
	it('Calculate Inverse Captcha of 1212 correctly', () => {
		assert.equal(6, inverseCaptcha02('1212'));
	});
	
	it('Calculate Inverse Captcha of 1221 correctly', () => {
		assert.equal(0, inverseCaptcha02('1221'));
	});
	
	it('Calculate Inverse Captcha of 123425 correctly', () => {
		assert.equal(4, inverseCaptcha02('123425'));
	});
	
	it('Calculate Inverse Captcha of 123123 correctly', () => {
		assert.equal(12, inverseCaptcha02('123123'));
	});
	
	it('Calculate Inverse Captcha of 12131415 correctly', () => {
		assert.equal(4, inverseCaptcha02('12131415'));
	});
});