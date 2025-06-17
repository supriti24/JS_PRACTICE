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
