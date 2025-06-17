function exampleConst()
{
    const name = "Supriti";
    if(true){
        let name = "Shubhi"; // block-scoped variable is considered new so value get replaced
        console.log('first console: ' + name); //
        
    }
    console.log('second console: '+ name); // in function but outside block 
                                           // so const variable value is taken
    // if(true){
    //     name = "Pushti"; // // This will throw an error because `const` 
    //     console.log('third console: ' + name); // 
    // }
}
exampleConst();
