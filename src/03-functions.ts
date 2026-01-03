/*
This file covers the most important beginner concepts in functions:
- Function declaration with types
- Optional parameters (?)
- Default parameters
- Arrow functions
- Void return type
- Union types in parameters
- Function types
*/
// 1. Basic function with typed parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(5, 10);
console.log("Sum:", sum); // Output: Sum: 15

// 2. Function with optional parameter
function greet(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Harry"));           // Output: Hello, Harry!
console.log(greet("Harry", "Mr."));   // Output: Hello, Mr. Harry!

// 3. Function with default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5));       // Output: 10 (uses default b=2)
console.log(multiply(5, 3));    // Output: 15

// 4. Arrow function
const divide = (x: number, y: number): number => {
    if (y === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return x / y;
};

console.log(divide(10, 2));     // Output: 5

// 5. Function with void return type (does not return anything)
function logMessage(message: string): void {
    console.log("Log:", message);
}

logMessage("This is a simple log message.");

// 6. Function using union types
function formatInput(input: string | number): string {
    if (typeof input === "number") {
        return `Number: ${input}`;
    } else {
        return `String: ${input}`;
    }
}

console.log(formatInput(123));   // Output: Number: 123
console.log(formatInput("TS"));  // Output: String: TS

// 7. Function type example
let calculator: (x: number, y: number) => number;

calculator = add;
console.log("Calculator add:", calculator(2, 3)); // Output: 5

calculator = multiply;
console.log("Calculator multiply:", calculator(4, 5)); // Output: 20
