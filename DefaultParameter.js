// *****What is difference between parameters and default parameters?******
// Default parameters allow you to initialize parameters with default values
// Regular parameters do not have default values and need to be provided when the function is called.

// *********How to define a default parameter and can we override that?****
function printName1(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

printName1(); 
printName1('muawia'); 
// *******What is the data type of parameter?*******
// In JavaScript, the data type of a function parameter is not explicitly defined, meaning parameters are dynamically typed. This flexibility allows parameters to accept any type of data, including:

// Primitive Types: string, number, boolean, null, undefined, symbol, and bigint
// Objects: objects, arrays, functions, dates, etc.
// Define a function that takes 2 parameter out of which 1 is required and 1 parameter is optional, If you pass 1 as a parameter it should retun 4 and if you pass 1 and 2 as parameter it will return 3.
function parameter(a,b=1){
    return a+b
}
console.log(parameter(2))
console.log(parameter(6,7))

