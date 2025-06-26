let numbers = [1, 2, 3, 4, 5];
let oddNumbers = numbers.filter(num => num % 2 !== 0);  
let evenNumbers = numbers.filter(num => num % 2 === 0);  
console.log("odd Numbers : "+ oddNumbers);  // [2, 4]
console.log("even Numbers : "+evenNumbers); 

