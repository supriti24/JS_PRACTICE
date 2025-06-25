
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0);  
// console.log(sum);  // 10

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
let passresult = testResults.reduce((acc,num)=>num==='pass'? acc+1:acc,0);
let failresult = testResults.reduce((acc,num)=>num==='fail'? acc+1:acc,0);
let skipresult = testResults.reduce((acc,num)=>num==='skipped'? acc+1:acc,0);
console.log("pass: "+passresult);
console.log("fail: "+failresult);
console.log("skipped: "+skipresult);
