# SIN Validator

This project provides a SIN (Social Insurance Number) validation utility. It allows you to validate SIN numbers to determine if they are valid or not.

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js (v16.14.0)
- npm (Node Package Manager) (8.3.1)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the dependencies:

`npm install`

This command will install the required dependencies.

The project has the following dev dependencies:

- **ts-node**: "^10.3.0"
- **typescript**: "^4.9.5"
- **@types/jest**: "^29.5.2"
- **@types/node**: "^20.2.5"
- **jest**: "^29.5.0"
- **ts-jest**: "^29.1.0"

Make sure to run `npm install` to install both the project dependencies and the dev dependencies.

## Usage

To run the project and validate a SIN, follow these steps:

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the following command:

`ts-node main.ts <SIN>`

Replace `<SIN>` with the SIN number you want to validate. For example: 046454286

This command will validate the SIN and print the validation result on screen for you.

## Running Tests

To run the test suite, use the following command:

`npm test`

This command will execute the unit tests and display the results.
