import { describe, test } from 'jest';

describe("SIN Validation", () => {
  // validate that a SIN will be exactly 9 digits long.
  describe("validateExactSinLength", () => {
    test("should return true for SIN with exact 9 digits", () => {
      expect(validateExactSinLength("046454296")).toBe(true);
    });

    test("should return false for SIN with less than 9 digits", () => {
      expect(validateExactSinLength("12345678")).toBe(false);
    });

    test("should return false for SIN with more than 9 digits", () => {
      expect(validateExactSinLength("1234567890")).toBe(false);
    });
  });

  // When every 2nd digit in the SIN multiplied by 2, and then added together, the sum should be divisible by 10.
  // Note any digit over 9 will be separated into its individual values when added up. 16 = 1 + 6, 13 = 1 + 3 , etc.
  describe("validateSumOfSecondDigitsDivisibleBy10", () => {
    test("should return true for valid SIN with sum of second digits divisible by 10", () => {
      expect(validateSumOfSecondDigitsDivisibleBy10("046454296")).toBe(true);
    });

    test("should return false for SIN with sum of second digits not divisible by 10", () => {
      expect(validateSumOfSecondDigitsDivisibleBy10("123456789")).toBe(false);
    });
  });

  // validate if all the SIN digits after being added up can be divided by 10 evenly
  describe("validateSumOfDigitsDivisibleBy10", () => {
    test("should return true for valid SIN with sum of digits divisible by 10", () => {
      expect(validateSumOfDigitsDivisibleBy10("046454296")).toBe(true);
    });

    test("should return false for SIN with sum of digits not divisible by 10", () => {
      expect(validateSumOfDigitsDivisibleBy10("123456788")).toBe(false);
    });
  });

  // validate if a SIN is valid or not
  describe("validateSin", () => {
    test("should return 'Valid SIN' for a valid SIN", () => {
      expect(validateSin("046454296")).toBe("Valid SIN ✅");
    });

    test("should return 'Not a valid SIN' for an invalid SIN", () => {
      expect(validateSin("123456788")).toBe("Not a valid SIN ❌");
    });
  });
});