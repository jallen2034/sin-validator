import {
  calculateSum,
  getSplitDigits,
  isEvenIndex,
  isSecondDigitSumDivisibleBy10,
  splitAndAddDigits,
  validateExactSinLength,
  validateSin
} from "./helpers/sinValidator";

describe('validateExactSinLength', () => {
  test('returns true when the SIN length is exactly 9 digits: 046454286', () => {
    const result = validateExactSinLength('046454286');
    expect(result).toBe(true);
  });

  test('returns false when the SIN length is not 9 digits: 0464543', () => {
    const result = validateExactSinLength('0464543');
    expect(result).toBe(false);
  });
});

describe('isSecondDigitSumDivisibleBy10', () => {
  test('returns true when the sum of every 2nd digit in the SIN is divisible by 10', () => {
    const result = isSecondDigitSumDivisibleBy10('046454286');
    expect(result).toBe(true);
  });

  test('returns false when the sum of every 2nd digit in the SIN is not divisible by 10', () => {
    const result = isSecondDigitSumDivisibleBy10('046454296');
    expect(result).toBe(false);
  });
});

describe('splitAndAddDigits', () => {
  test('correctly splits and pushes the digits', () => {
    let newSin = [];
    splitAndAddDigits(16, newSin);
    expect(newSin).toEqual([1, 6]);
  });
});

describe('isEvenIndex', () => {
  test('returns true if the current index of a SIN digit is the second digit', () => {
    const result = isEvenIndex(2);
    expect(result).toBe(false);
  });

  test('returns false if the current index of a SIN digit is not the second digit', () => {
    const result = isEvenIndex(3);
    expect(result).toBe(true);
  });
});

describe('getSplitDigits', () => {
  test('returns an array of split digits from a SIN', () => {
    const result = getSplitDigits('046454286');
    expect(result).toMatchObject([0, 8, 6, 8, 5, 8, 2, 1, 6, 6]);
  });
});

describe('calculateSum', () => {
  test('calculates the sum of digits correctly', () => {
    const digits = [1, 2, 3, 4];
    const result = calculateSum(digits);
    expect(result).toBe(10);
  });
});

describe('validateSin', () => {
  test('returns "Valid SIN ✅" when the SIN is valid (046454286)', () => {
    const result = validateSin('046454286');
    expect(result).toBe('Valid SIN ✅');
  });

  test('returns "Not a valid SIN ❌" when the SIN is not 9 digits long (0464543)', () => {
    const result = validateSin('0464543');
    expect(result).toBe('Not a valid SIN ❌');
  });

  test('returns "Not a valid SIN ❌" when the SIN is the correct length but not valid (046454296)', () => {
    const result = validateSin('046454296');
    expect(result).toBe('Not a valid SIN ❌');
  });
});