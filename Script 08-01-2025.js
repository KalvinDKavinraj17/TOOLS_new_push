// Functions: block of code

// Types of functions:

//Function Statement or declaration
//Syntax:-
// function function_name(){
// code}
// function_name()

function home(){
    console.log('Relatives')
    console.log('Birthdayboy')
}
home()

//parameter - like a vairable_name
//arguments - like a value

function box(x){              // x is the parameter
    console.log(x)
}
box(100)                     // 100 is the argument

function cylinder(x){
    return x
}
console.log(box(100))
//when return is used in a function the function can be called only by using the print statement


//Function expression : storing a function in a variable name (does not require a function name)

var bigbox = function () {   //anonymous function
    console.log("Teddy bear here!!")
}
bigbox()


//Immediate Invoke function expression

(function(x){
    console.log(x)
})(10)           
// Error will come as the function will try to pick up the address of the previous variable. This  function will try to allocate the memory of another variable name or function name

var store = (function(x){
    console.log(x)
})(10)


//Arrow function : short hand syntax
//syntax :
//() => {}

var arr = (x) => {console.log(x)}
arr('hello')


//Task
//1. Arrow function to find the square of a number
// const square = (num) => num * num;

// console.log(square(5))
// console.log(square(10))

//2. Hello xyz how are you? // here the xyz and ? must be used as a parameter and called back

// const greet = (name, punctuation) => {
//     console.log('Hello ' + name + ' how are you' + punctuation);
// };
// greet("xyz", "?");

//Operator:
//Arithmatic operator: Add+, Sub-, Multi*, Div/, Mod%, Exponent **, increment++, Decrement--
var num = 2
num -- //2-1
console.log(num)

//Assignment operator
var num1 = 10
num1+=5 //10+=5
console.log(num1)

//Comparison operator: < lessthan, >greaterthan, <= lessthanorequalto, >= greaterthanorequalto

var  a = 10
var b= 10
console.log(a>=b)

//Logical operator
//Equality operator
//Ternary operator
