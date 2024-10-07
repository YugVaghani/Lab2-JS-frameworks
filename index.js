// Importing functions from the utility file in the utils folder
import { greetUser, convertMeasurement, performMathOperation, advancedFunction } from '../utils/utilities.js';

// Invoking each function to demonstrate their usage
greetUser("Yug", "Vaghani"); // Expected output: "Welcome Yug Vaghani to Georgian College"
greetUser("Man", "Savani"); // Expected output: "Welcome Man Savani to Georgian College"

const convertedValue = convertMeasurement(30); // Example for Celsius to Fahrenheit
console.log(`Converted Value: ${convertedValue}`);

const mathResult = performMathOperation(5); // Example for calculating factorial of 5
console.log(`Math Result: ${mathResult}`);

const advancedResult = advancedFunction(10, 20); // Example of an advanced function
console.log(`Advanced Function Result: ${advancedResult}`);
