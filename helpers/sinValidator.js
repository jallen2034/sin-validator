"use strict";
exports.__esModule = true;
exports.validateSin = exports.isSecondDigitSumDivisibleBy10 = exports.calculateSum = exports.getSplitDigits = exports.isEvenIndex = exports.splitAndAddDigits = exports.validateExactSinLength = void 0;
// validate that a A SIN will be exactly 9 digits long.
var constants_1 = require("../constants");
var validateExactSinLength = function (sin) {
    return sin.length === constants_1.SIN_LENGTH;
};
exports.validateExactSinLength = validateExactSinLength;
/* Split any number greater than 10 into separate digits, then add them together
 * For instance, take "12", split it into 1 and 2, then add 1 + 2 to obtain 3
 * and push that added value into the newSin array */
var splitAndAddDigits = function (num, newSin) {
    var separatedDigits = String(num).split("").map(Number);
    for (var _i = 0, separatedDigits_1 = separatedDigits; _i < separatedDigits_1.length; _i++) {
        var separatedDigit = separatedDigits_1[_i];
        newSin.push(separatedDigit);
    }
};
exports.splitAndAddDigits = splitAndAddDigits;
var isEvenIndex = function (i) {
    return i % 2 === 1;
};
exports.isEvenIndex = isEvenIndex;
/* Multiply every second digit by 2 and split digits over 9 into individual values
 * For example: 0 4 6 4 5 4 2 8 6 -> 0 4 6 4 5 4 2 8 6 -> 0 + 8 + 6 + 8 + 5 + 8 + 2 + 1 + 6 + 6 */
var getSplitDigits = function (sin) {
    var splitDigits = [];
    for (var i = 0; i < sin.length; i++) {
        var currentDigit = parseInt(sin[i]);
        if ((0, exports.isEvenIndex)(i)) {
            var multipliedDigit = currentDigit * 2;
            multipliedDigit >= constants_1.DIVISIBILITY_CHECK
                ? (0, exports.splitAndAddDigits)(multipliedDigit, splitDigits)
                : splitDigits.push(multipliedDigit);
        }
        else {
            splitDigits.push(currentDigit);
        }
    }
    return splitDigits;
};
exports.getSplitDigits = getSplitDigits;
// Calculate the sum of all digits in the 'digits' array using a reducer function
var calculateSum = function (digits) {
    return digits.reduce(function (sum, digit) { return sum + digit; }, 0);
};
exports.calculateSum = calculateSum;
/* Validates if the sum of every 2nd digit in the SIN, multiplied by 2 and then added together, is divisible by 10.
 * Note: Digits greater than 9 are split into their individual values (e.g., 16 = 1 + 6, 13 = 1 + 3, etc.). */
var isSecondDigitSumDivisibleBy10 = function (sin) {
    var splitDigits = (0, exports.getSplitDigits)(sin);
    var sumOfSplitDigits = (0, exports.calculateSum)(splitDigits);
    return sumOfSplitDigits % 10 === 0; // Check if the sum is divisible by 10
};
exports.isSecondDigitSumDivisibleBy10 = isSecondDigitSumDivisibleBy10;
// Main function to validate if a sin is valid or not
var validateSin = function (sin) {
    var isValidSin;
    var errorMessage = 'Not a valid SIN ❌';
    isValidSin = (0, exports.validateExactSinLength)(sin);
    if (!isValidSin) {
        return errorMessage;
    }
    isValidSin = (0, exports.isSecondDigitSumDivisibleBy10)(sin);
    if (!isValidSin) {
        return errorMessage;
    }
    return 'Valid SIN ✅';
};
exports.validateSin = validateSin;
