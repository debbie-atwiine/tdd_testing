const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Tests on the multiply function', () => {

    it('should multiply 1 and 1 to get 1', () => {
        assert.equal(multiply(1, 1), 1)
    });

    it('should multiply 2 and 2 to get 4', () => {
        assert.equal(multiply(2, 2), 4)
    });

    it('should multiply 3 and 3 to get 9', () => {
        assert.equal(multiply(3, 3), 9)
    });

    it('should multiply 4 and 4 to get 16', () => {
        assert.equal(multiply(4, 4), 16)
    });

    it('should multiply 23 and 45 to get 1035', () => {
        assert.equal(multiply(23, 45), 23 * 45)
    });

    it('should multiply 7 and 8 to get 56', () => {
        assert.equal(multiply(7, 8), 56)
    });

});