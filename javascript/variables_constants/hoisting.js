// Variables declared with var are hoisted to the top of their function or global scope 
// but initialized with undefined.

console.log(a); // Output: undefined
var a = '24-Nov-2025';
console.log(a); // Output: 24-Nov-2025

// Variables declared with let and const are also hoisted, 
// but they are not initialized. 
// Accessing them before their declaration results in a ReferenceError due to the "temporal dead zone."

console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 18;
console.log(b);  // 🟡 Not executed at all


console.log(c) // Output: 
const c = "charmy";
console.log(c) // Output: 

// ❗ What’s actually happening:
// As soon as the first console.log(b)/ console.log(c) is encountered:

// JavaScript throws a ReferenceError and JS execution stops here

// This is a runtime error, not just a warning

// So the second console.log(b) or console.log(c) never gets a chance to run.






