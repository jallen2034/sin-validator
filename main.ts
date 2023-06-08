// Retrieve the SIN from the command line arguments
import {validateSin} from "./helpers/sinValidator";

const sin: string = process.argv[2]; // Get sin from command line arguments
if (sin) {
  const validationMessage: string = validateSin(sin); // Validate the SIN
  console.log(validationMessage);  // Print the validation result
} else {
  console.log("You need to input a valid sin number!")
}