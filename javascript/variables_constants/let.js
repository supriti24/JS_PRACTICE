function exampleLet()
{
    let name = "Supriti";
    if(true){
        let name = "Shubhi"; // different variable,block-scoped, value get replaced for new name variable
        console.log('first console: ' + name); //
    }
    console.log('second console: '+ name); // still in the function 
                                         // so it remains the same variable with the latest value.
}

exampleLet();
