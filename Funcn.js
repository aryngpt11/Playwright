// Block of code to demonstrate function declaration and invocation in JavaScript

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
let a=greet("Alice"); // Invoking the function with an argument
console.log(a); // Output: Hello, Alice!

// Function expression  Anonymous function
const square = function(num) {
    return num * num;
}   
let result=square(4); // Invoking the function with an argument
console.log(result); // Output: 16

const add = function(x, y) {
    return x + y;
}   
let b=add(5, 10); // Invoking the function with arguments
console.log(b); // Output: 15

// Arrow function
const multiply = (x, y) => x * y;
let c=multiply(3, 7); // Invoking the function with arguments
console.log(c); // Output: 21

// Function with default parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
let d=greetUser(); // Invoking the function without an argument
console.log(d); // Output: Welcome, Guest!

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}       
let e=sum(1, 2, 3, 4, 5); // Invoking the function with multiple arguments
console.log(e); // Output: 15

// Function with callback
function processArray(arr, callback) {
    return arr.map(callback);
}   
let f=processArray([1, 2, 3], (num) => num * 2); // Invoking the function with an array and a callback  
console.log(f); // Output: [2, 4, 6]

// Function with closure
function outerFunction() {
    let count = 0;  
    return function innerFunction() {
        count++;
        return count;
    }           
}
let counter = outerFunction();     