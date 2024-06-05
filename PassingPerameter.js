
// // What are parameters?
// // a special kind of variable used in a function to refer to one of the pieces of data provided as input to the function.
// What can be the name of parameter?
// We use parameters in function declarations to give functions the ability to receive input and perform actions based on that input. 
// How many parameters can be passed to a function?
// the number of parameters that can be passed to a function is technically unlimited. 
function example(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}

example(1, 2, 3, 4, 5);

// Exercise 1: Calculate the Sum of Numbers Create a function calculateSum that takes two parameters a and b. The function should return the sum of a and b.
let calculateSum=((a,b)=>a+b)
console.log(calculateSum(3,4))
// Check if a Number is Even Create a function isEven that takes one parameter number. The function should return true if the number is even and false otherwise.
let isEven=((a)=>a%2==0)
console.log(isEven(5))