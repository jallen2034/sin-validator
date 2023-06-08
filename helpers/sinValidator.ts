// validate that a A SIN will be exactly 9 digits long.
import {DIVISIBILITY_CHECK, SIN_LENGTH} from "./constants";

export const validateExactSinLength = (sin: string): boolean => {
  return sin.length === SIN_LENGTH;
}

export const splitAndAddDigits = (num: number, newSin: number[]): void => {
  const separatedDigits: number[] = String(num).split("").map(Number);
  for (let separatedDigit of separatedDigits) {
    newSin.push(separatedDigit);
  }
};

export const isEvenIndex = (i: number) => {
  return i % 2 === 1;
}

export const getSplitDigits = (sin: string): number[] => {
  const splitDigits: number[] = [];
  for (let i = 0; i < sin.length; i++) {
    const currentDigit: number = parseInt(sin[i]);
    if (isEvenIndex(i)) {
      const multipliedDigit: number = currentDigit * 2;
      multipliedDigit >= DIVISIBILITY_CHECK
        ? splitAndAddDigits(multipliedDigit, splitDigits)
        : splitDigits.push(multipliedDigit);
    } else {
      splitDigits.push(currentDigit);
    }
  }
  return splitDigits;
};

export const calculateSum = (digits: number[]): number => {
  return digits.reduce((sum, digit) => sum + digit, 0);
};

/* Validates if the sum of every 2nd digit in the SIN, multiplied by 2 and then added together, is divisible by 10.
 * Note: Digits greater than 9 are split into their individual values (e.g., 16 = 1 + 6, 13 = 1 + 3, etc.). */
export const isSecondDigitSumDivisibleBy10 = (sin: string): boolean => {
  const splitDigits = getSplitDigits(sin);
  const sumOfSplitDigits = calculateSum(splitDigits);
  return sumOfSplitDigits % 10 === 0; // Check if the sum is divisible by 10
};

export const validateSin = (sin: string): string => {
  let isValidSin: boolean;
  const errorMessage: string = 'Not a valid SIN ❌';
  isValidSin = validateExactSinLength(sin);
  if (!isValidSin) {
    return errorMessage;
  }
  isValidSin = isSecondDigitSumDivisibleBy10(sin);
  if (!isValidSin) {
    return errorMessage;
  }
  return 'Valid SIN ✅';
}

// Retrieve the SIN from the command line arguments
const sin: string = process.argv[2];

if (!sin) {
  console.log("You need to input a valid sin number!")
} else {
  const validationMessage: string = validateSin(sin); // Validate the SIN
  console.log(validationMessage);  // Print the validation result
}
