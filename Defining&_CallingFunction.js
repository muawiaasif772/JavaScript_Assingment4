// // A function is a block of 'reusable code' that is used several times in the JavaScript program where it is defined. 
// ******answer-2*********
// Function scope in JavaScript refers to the scope of variables and functions that are defined within a function. Variables and functions declared with the var keyword have function scope. Variables declared inside a function are accessible only within that function and any nested functions.

//  Function Declaration
function printName1(name) {
    console.log(`Hello, ${name}!`);
}

printName1('muawia asif');
// Function Expression
let printName2 = function(name) {
    console.log(`Hello, ${name}!`);
};

printName2("hamza asif");
// // Arrow Function
const printName3 = (name) => {
    console.log(`Hello, ${name}!`);
};
printName3('talha')
// // Shorter form of arrow function
const printName4 = name => console.log(`Hello, ${name}!`);

printName4("usman");
// Immediately Invoked Function Expression
(function(name){
console.log(`Hello ${name}!`)
})('zakria')
// method defination in object
let person={
    city:'TMP',
    printName5:function(name){
  console.log(`Hello ${name} !`)
    },
    age:12
}
person.printName5('Asif')
// constructor function
function Persons(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Hello, ${this.name}!`);
    };
}
const myname = new Persons("adnan");
myname.greet();


