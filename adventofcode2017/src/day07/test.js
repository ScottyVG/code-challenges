const assert = require('assert');

const recursiveCircus01 = require('./day07-a');
const recursiveCircus02 = require('./day07-b');

describe('Day 7 - Part a: Recursive Circus', () => {
  it('Calculate the correct bottom program', () => {
    const instructions =
      `pbga (66)
       xhth (57)
       ebii (61)
       havc (66)
       ktlj (57)
       fwft (72) -> ktlj, cntj, xhth
       qoyq (66)
       padx (45) -> pbga, havc, qoyq
       tknk (41) -> ugml, padx, fwft
       jptl (61)
       ugml (68) -> gyxo, ebii, jptl
       gyxo (61)
       cntj (57)`;
    
    assert.equal(recursiveCircus01(instructions), 'tknk');
  });
});

describe('Day 7 - Part b: Recursive Circus', () => {
  it('Calculate the corret weight to balance', () => {
    const instructions =
      `pbga (66)
       xhth (57)
       ebii (61)
       havc (66)
       ktlj (57)
       fwft (72) -> ktlj, cntj, xhth
       qoyq (66)
       padx (45) -> pbga, havc, qoyq
       tknk (41) -> ugml, padx, fwft
       jptl (61)
       ugml (68) -> gyxo, ebii, jptl
       gyxo (61)
       cntj (57)`;

    assert.equal(recursiveCircus02(instructions), 60);
  });
});