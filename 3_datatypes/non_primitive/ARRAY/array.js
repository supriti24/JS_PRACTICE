// An array is a special type of object used to store multiple values in a single variable. 
// Each value in an array is indexed starting from 0. 

let colors = ["red", "green", "blue"];
// console.log(colors[0]);  // Output: red
// console.log(colors.length);  // Output: 3
// console.log(typeof colors);  // Output: object

// For Loops
console.log("Traditional : ");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Modern
console.log("Modern : ");
for (let color of colors) { // (let <array_variable> of <array_name>)
    console.log(color);
}

// Foreach :
// array_name.forEach(function(<array_variable>){console.log(<array_variable>)})
console.log("Foreach : ");
colors.forEach(function(color) {
    console.log(color);
});

// Foreach using arrow function
// array_name.forEach(<array_variable> => console.log(<array_variable>))
 console.log("arrow fucntion : ");
 colors.forEach(color => console.log(color));

// For …in loop (not recommended)
console.log("For …in loop : ");
for (let index in colors) {
    console.log(colors[index]);
}






