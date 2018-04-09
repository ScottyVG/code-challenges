const assert = require('assert');

const highEntropyPassphrases01 = require('./day04-a');
const highEntropyPassphrases02 = require('./day04-b');

describe('Day 4 - Part a: High-Entropy Passphrases', () => {
    it('Evaluate High Entropy Passphrases correctly', () => {
        const passphrases =
            `aa bb cc dd ee
       aa bb cc dd aa
       aa bb cc dd aaa`;

        assert.equal(2, highEntropyPassphrases01(passphrases));
    });
});
describe('Part Two - Part b:  High-Entropy Passphrases', () => {
    it('Evaluate High Entropy Passphrases correctly', () => {
        const passphrases =
            `abcde fghij
        abcde xyz ecdab
        a ab abc abd abf abj
        iiii oiii ooii oooi oooo
        oiii ioii iioi iiio`;

        assert.equal(3, highEntropyPassphrases02(passphrases));
    });
});