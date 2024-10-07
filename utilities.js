// Function 1: Greets the user by concatenating firstName and lastName with a welcome message
export function greetUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College`);
}

// Function 2: Converts Celsius to Fahrenheit (or vice-versa)
export function convertMeasurement(value) {
    // Converting Celsius to Fahrenheit as an example
    return (value * 9/5) + 32;
}

// Function 3: Perform a math operation - here we calculate factorial as an example
export function performMathOperation(number) {
    if (number < 0) return "Factorial not defined for negative numbers";
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

// Function 4: An advanced function of choice, for example, calculating the Greatest Common Divisor (GCD)
export function advancedFunction(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
