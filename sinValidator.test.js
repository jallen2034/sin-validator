"use strict";
exports.__esModule = true;
// Import the necessary dependencies and functions for testing
var sinValidator_1 = require("./helpers/sinValidator");
// Unit tests for the validation methods
describe('validateExactSinLength', function () {
    test('returns true when the SIN length is exactly 9 digits: 046454286', function () {
        var result = (0, sinValidator_1.validateExactSinLength)('046454286');
        expect(result).toBe(true);
    });
    test('returns false when the SIN length is not 9 digits: 0464543', function () {
        var result = (0, sinValidator_1.validateExactSinLength)('0464543');
        expect(result).toBe(false);
    });
});
describe('isSecondDigitSumDivisibleBy10', function () {
    test('returns true when the sum of every 2nd digit in the SIN is divisible by 10', function () {
        var result = (0, sinValidator_1.isSecondDigitSumDivisibleBy10)('046454286');
        expect(result).toBe(true);
    });
    test('returns false when the sum of every 2nd digit in the SIN is not divisible by 10', function () {
        var result = (0, sinValidator_1.isSecondDigitSumDivisibleBy10)('046454296');
        expect(result).toBe(false);
    });
});
describe('splitAndAddDigits', function () {
    test('correctly splits and pushes the digits', function () {
        var newSin = [];
        (0, sinValidator_1.splitAndAddDigits)(16, newSin);
        expect(newSin).toEqual([1, 6]);
    });
});
describe('isEvenIndex', function () {
    test('returns true if the current index of a SIN digit is the second digit', function () {
        var result = (0, sinValidator_1.isEvenIndex)(2);
        expect(result).toBe(false);
    });
    test('returns false if the current index of a SIN digit is not the second digit', function () {
        var result = (0, sinValidator_1.isEvenIndex)(3);
        expect(result).toBe(true);
    });
});
describe('getSplitDigits', function () {
    test('returns an array of split digits from a SIN', function () {
        var result = (0, sinValidator_1.getSplitDigits)('046454286');
        expect(result).toMatchObject([0, 8, 6, 8, 5, 8, 2, 1, 6, 6]);
    });
});
describe('calculateSum', function () {
    test('calculates the sum of digits correctly', function () {
        var digits = [1, 2, 3, 4];
        var result = (0, sinValidator_1.calculateSum)(digits);
        expect(result).toBe(10);
    });
});
describe('validateSin', function () {
    test('returns "Valid SIN ✅" when the SIN is valid (046454286)', function () {
        var result = (0, sinValidator_1.validateSin)('046454286');
        expect(result).toBe('Valid SIN ✅');
    });
    test('returns "Not a valid SIN ❌" when the SIN is not 9 digits long (0464543)', function () {
        var result = (0, sinValidator_1.validateSin)('0464543');
        expect(result).toBe('Not a valid SIN ❌');
    });
    test('returns "Not a valid SIN ❌" when the SIN is the correct length but not valid (046454296)', function () {
        var result = (0, sinValidator_1.validateSin)('046454296');
        expect(result).toBe('Not a valid SIN ❌');
    });
});
