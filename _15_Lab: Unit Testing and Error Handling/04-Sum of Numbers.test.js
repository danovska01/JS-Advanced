const { expect } = require('mocha');
const sum = require('./04-Sum of Numbers');

describe('Sum function', () => {
    it('should return 0 for an empty array', () => {
        const result = sum([]);
        expect(result).to.equal(0);
    });

    it('should return the sum of positive numbers', () => {
        const result = sum([1, 2, 3, 4, 5]);
        expect(result).to.equal(15);
    });

    it('should return the sum of negative numbers', () => {
        const result = sum([-1, -2, -3, -4, -5]);
        expect(result).to.equal(-15);
    });

    it('should return the correct sum for a mix of positive and negative numbers', () => {
        const result = sum([-1, 2, -3, 4, -5]);
        expect(result).to.equal(-3);
    });

    it('should return NaN for non-numeric values in the array', () => {
        const result = sum(['a', 1, 'b', 2, 'c']);
        expect(result).to.be.NaN;
    });

    it('should handle large numbers', () => {
        const result = sum([Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
        expect(result).to.equal(2 * Number.MAX_SAFE_INTEGER);
    });
});
