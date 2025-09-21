# Contact List Using TypeScript

## Project Description

This is a web-based script written in TypeScript that demonstrates how to work with various data types, particularly with an array of contact objects. It includes:
- Creating and displaying contact information
- Adding, modifying, and deleting object properties
- Performing arithmetic operations
- Using Math.random() to generate a random contact
- Displaying the current date and time
- Rendering all output directly to the web page using the DOM: each message is added as a new <p> element inside the #contact-container.

## Use of Strict Mode "use strict"

TypeScript automatically enables strict mode during compilation if the following is set in tsconfig.json:
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true
  }
}
- "strict": true enables a suite of strict type-checking options, including alwaysStrict
- The compiled main.js file will automatically include "use strict" at the top
- This ensures safer execution and prevents common JavaScript pitfalls.

## Project Structure

├── index.html          // Main HTML entry point
├── main.ts             // TypeScript logic
├── main.js             // Compiled JavaScript output
├── tsconfig.json       // TypeScript configuration
├── package.json        // Project metadata and dependencies
├── package-lock.json   // Locked versions of installed packages
├── node_modules/       // Installed libraries
└── README.md           // Project documentation


## How to Run
1. Initialize the project:
```bash npm init -y ```
2. Install TypeScript:
```bash npm install typescript --save-dev ```
3. Create TypeScript configuration file:
```bash npx tsc --init ```
4. Create a new main.ts file and write your logic inside it.
5. Gompile main.ts to generate main.js file:
```bash npx tsc main.ts  ```
6. Compile TypeScript to JavaScript:
```bash npx tsc ```
7. Link the compiled script in index.html:
"<script src="main.js" type="module"></script>"
8. Open index.html in your browser to see the output

## 🔗 Output Link

This is the link to the output results:
 https://....
