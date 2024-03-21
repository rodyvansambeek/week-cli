# @rodys/week

A simple package to get the current ISO week number using CLI or in code. 

## Usage from CLI

This tool can also be run directly with `npx` on the command line, there's no need for a global installation. Simply run the following command in your terminal to use it:

```sh
npx @rodys/week
```

## Usage in Code
You can also use @rodys/week directly in your JavaScript or TypeScript projects to get the current ISO week number programmatically.

### Installation
To use it in code, you can install it using *nodejs*.

```sh
npm install @rodys/week
```

Then you can use it in your code:

```js
import getCurrentISOWeek from '@rodys/week';

// Get the current ISO week number
const weekNumber = getCurrentISOWeek(new Date());
console.log(`Current ISO week number: ${weekNumber}`);
```