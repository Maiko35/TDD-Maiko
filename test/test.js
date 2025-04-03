// test/test.js
const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});

it('should return 2 when multiplying 1 and 2', () => {
    expect(multiply(1,2)).to.equal(2);
});

it('should return 6 when multiplying 2 and 3', ()=>{
    expect(multiply(2,3)).to.equal(6);
});

it('should return 6 when multiplying 2 and 3', ()=>{
    expect(multiply(2,3)).to.equal(6);
});