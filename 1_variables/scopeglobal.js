var global = "I am global";
function funcGlobal(){
    var local = "I am Local";
    console.log(local);
    console.log("global inside block: " + global)
}

funcGlobal();
// console.log(local); // gives an error
console.log("global outside block: " + global)