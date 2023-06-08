// validate that a A SIN will be exactly 9 digits long.
import {DIVISIBILITY_CHECK, SIN_LENGTH} from "../constants";

export const validateExactSinLength = (sin: string): boolean => {
  return sin.length === SIN_LENGTH;
}

/* Split any number greater than 10 into separate digits, then add them together
 * For instance, take "12", split it into 1 and 2, then add 1 + 2 to obtain 3
 * and push that added value into the newSin array */
export const splitAndAddDigits = (num: number, newSin: number[]): void => {
  const separatedDigits: number[] = String(num).split("").map(Number);
  for (let separatedDigit of separatedDigits) {
    newSin.push(separatedDigit);
  }
};

export const isEvenIndex = (i: number) => {
  return i % 2 === 1;
}

/* Multiply every second digit by 2 and split digits over 9 into individual values
 * For example: 0 4 6 4 5 4 2 8 6 -> 0 4 6 4 5 4 2 8 6 -> 0 + 8 + 6 + 8 + 5 + 8 + 2 + 1 + 6 + 6 */
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

// Calculate the sum of all digits in the 'digits' array using a reducer function
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

// Main function to validate if a sin is valid or not
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