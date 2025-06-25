// Primitive types store values directly in the variable, 
// string // number // boolean // null // undefined // symbol

let name = "John Doe";
console.log("name has type of "+typeof name);  // Output: string

let age = 30;
console.log("age has type of "+typeof age);  // Output: number

let price = 99.99;
console.log("price has type of "+typeof price);  // Output: number

let isMarried = false; // A boolean type has two possible values: true or false. 
//It is often used in conditional statements.
console.log("isMarried has type of "+typeof isMarried);  // Output: boolean

let car = null; // The null value represents an intentional absence of any object value. 
//It is often used when an object or variable is expected to be empty.
console.log("car has type of "+typeof car);  // Output: object (this is a quirk in JavaScript)

let salary; // A variable that has been declared but has not yet been assigned a value holds the value undefined.
console.log("salary has type of "+typeof salary);  // Output: undefined

let sym1 = Symbol("identifier");
let sym2 = Symbol("identifier");
// A symbol is a unique and immutable primitive value 
// that is often used as the key for object properties.
console.log(sym1 === sym2);  // Output: false (symbols are always unique)
console.log("sym1 has type of "+typeof sym1);  // Output: symbol







