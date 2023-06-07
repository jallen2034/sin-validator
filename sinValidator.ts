// validate that a A SIN will be exactly 9 digits long.
export const validateExactSinLength = (sin: string) => {
  return sin.length === 9;
}

const handleSplitDigits = (num: number, newSin: number[]) => {
  const separatedDigits: number[] = String(num).split("").map(Number);
  for (let separatedDigit of separatedDigits) {
    newSin.push(separatedDigit);
  }
};

/* Validates if the sum of every 2nd digit in the SIN, multiplied by 2 and then added together, is divisible by 10.
 * Note: Digits greater than 9 are split into their individual values (e.g., 16 = 1 + 6, 13 = 1 + 3, etc.). */
export const validateSumOfSecondDigitsDivisibleBy10 = (sin: string) => {
  let splitDigits: number[] = [];
  let sumOfSplitDigits: number = 0;

  // Iterate over every digit in the SIN
  for (let i = 0; i < sin.length; i++) {
    const currentDigit: number = parseInt(sin[i]); // Current digit

    // Check if it is the 2nd digit of the sin we are looping through (odd index)
    if (i % 2 === 1) {
      const multipliedDigit: number = currentDigit * 2; // Multiply the digit by 2
      multipliedDigit >= 10 ? handleSplitDigits(multipliedDigit, splitDigits) : splitDigits.push(multipliedDigit);
    } else {
      splitDigits.push(currentDigit); // if not just push the current digit
    }
  }

  // Loop through the new array of split digits and sum them up
  for (let i = 0; i < splitDigits.length; i++) {
    sumOfSplitDigits += splitDigits[i];
  }

  // Check if the sum is divisible by 10
  return sumOfSplitDigits % 10 === 0;
};

// Validate if the sum of all the SIN's digits, after being added up, can be divided evenly by 10.
export const validateSumOfDigitsDivisibleBy10 = (sin: string) => {
  return true; // TODO
}

export const validateSin = (sin: string): string => {
  let isValidSin: boolean;
  const errorMessage: string = 'Not a valid SIN ❌';
  isValidSin = validateExactSinLength(sin);
  if (!isValidSin) {
    return errorMessage;
  }
  isValidSin = validateSumOfSecondDigitsDivisibleBy10(sin);
  if (!isValidSin) {
    return errorMessage;
  }
  isValidSin = validateSumOfDigitsDivisibleBy10(sin);
  if (!isValidSin) {
    return errorMessage;
  }
  return 'Valid SIN ✅';
}

// Retrieve the SIN from the command line arguments
const sin: string = process.argv[2];

// Validate the SIN
const validationMessage: string = validateSin(sin);

// Print the validation result
console.log(validationMessage);