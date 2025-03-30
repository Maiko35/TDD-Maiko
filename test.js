// test/test.js
const { expect } = require('chai');
const multiply = require('./multiply');

describe('Multiply Function', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});
