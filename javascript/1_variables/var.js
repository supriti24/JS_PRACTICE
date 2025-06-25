// var is function-scoped, meaning it's accessible within the function it's defined in.


function exampleVar()
{
    var name = "Supriti";
    if(true){
        var name = "Shubhi"; // same variable,function-scoped, value gets replaced
        console.log('first console: ' + name); //
    }
    console.log('second console: '+ name); // still in the function 
                                         // so it remains the same variable with the latest value.
}

exampleVar();
// console.log(name); // OUTPUT : ReferenceError: name is not defined
