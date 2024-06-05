// // What is self-invoke / Immediate invoke function expression?*******
// // A self-invoking function, also known as an immediately invoked function expression (IIFE), is a function that is defined and invoked at the same time. 
// How can you write that? Give example using function keyword and arrow function?
(function(name){
console.log(`Hello ${name}`)
})('hamza')
let a=((name)=>{
    console.log(`Hello ${name}`)
})('muawia')
// What are built in functions and enlist all built in functions for array and string?
 
 toString()
 at()
 join()
 pop()
 push()
 shift()
 unshift()
 concat()
 copyWithin()
 flat()
splice()
 toSpliced()
 slice() 

//  *****string method******

  charAt()
 charCodeAt()
 at()
 
slice()
 substring()
 substr()
 Templates
 toUpperCase()
 toLowerCase()
 concat()
 trim()
  trimStart()
 trimEnd()
 padStart()
 padEnd()
  repeat()
 replace()
 replaceAll()
 split()
// *********What is the benefit of using built in functions?*********
// Built-in functions are often optimized for performance by the language implementers. They are usually written in highly efficient code and have been thoroughly tested for edge cases and performance considerations. 9