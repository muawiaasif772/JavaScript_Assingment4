// Exercise 1: Calculate the Sum of Numbers Create a function calculateSum that takes 1, 2, 3, 4, 5 as arguments and returns their 15.
function calculate(a,b,c,d,e){
return a+b+c+d+e
}
console.log(calculate(1,2,3,4,5))
// concatenate Strings Create a function concatenateStrings that takes ("JavaScript", " ", "is", " ", "fun") strings as input and returns their concatenation as "JavaScript is fun".
function concatenateStrings(...strings) {
    return strings.join('');
}

 console.log( concatenateStrings("JavaScript", " ", "is", " ", "fun"));
//  Find the Largest Number Create a function findLargestNumber that takes (2, -3, 8, 15, -5) as arguments and returns the largest number 15.
function findLargestNumber(...numbers){
    return Math.max(...numbers)
}

console.log(findLargestNumber(34,12,4,44,5,6,6,8,99))
 
