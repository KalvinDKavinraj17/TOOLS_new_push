//Logical operator

//&& AND
//|| OR
// ! not

var num = 10
var num1 = 20
console.log(num!=20)

//Equality operator

//Double equals ==
//It checks only the value not the datatype
var db = 10
var db1 = "10"

console.log(db==db1)

//Triple equals ===
//It will check both the value and datatype
var te = 10
var te1 = '10'
console.log(te===te1)

//Ternary operatror
//Syntax : 
//(condition) ? "statement_true" : "statement_false"
var age = 18
var limit = (age>=18) ? 'He is eligible' : 'He is not eligible'
console.log(limit)

//Using logical operators
var age = 1000
var limit = (age >= 18 && age <= 70) ? 'He is eligible' : 'He is not eligible'
console.log(limit)

//Task- Ternary operator called using function and the age must be passed as argument

function checkAge(age) {
    return age >= 18 ? "You are an adult." : "You are a minor.";
}

let age = 20;
console.log(checkAge(age));

age = 15;
console.log(checkAge(age));


//Loop: code will run continously untill the condition is met
//for loop
//Syntax:
//for(initialization;condition;iteration[increment++, decrement--]){
// code
//}
for(var i=0;i<5;i++){
    console.log(i)
}

//STEPS how the code runs
//step 1 => i=0 ---> 0>5 [true] --> print:0 - 0++=1
//step 2 => i=1 ---> 1>5 [true] --> print:1 - 1++=2
//step 3 => i=2 ---> 2>5 [true] --> print:2 - 2++=3
//step 4 => i=3 ---> 3>5 [true] --> print:3 - 3++=4
//step 5 => i=4 ---> 4>5 [true] --> print:4 - 4++=5
//step 6 => i=5 ---> 5>5 [false] [the operation ends and the loop stops]

// Task print in reverse for the same for loop

for(var i=5;i>0;i--){
    console.log(i)
}

//string looping
let str = 'happy'
for(var i=0; i<str.length;i++){
    console.log(str[i])
}

//reverse stringlooping
let str2 = "javascript"
for(i=str2.length;i>=0;i--){
    console.log(str2[i])
}
//Above code will give first value as undefined as the 10th index is not present
//changed code
let str3 = "javascript"
for(i=str3.length-1;i>=0;i--){
    console.log(str3[i])
}

//reverse the string and show in one line
let str4='javascript'
let store=''
for(var i=str4.length-1 ; i>=0; i--){
    store += str4[i]
}
console.log(store)

//with numbers
//let numstore = 0
//for(let i=0;i<=5;i++){
//numstore +=
//}
//console.log(numstore)

//Task loop print the even numbers between 0-10
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Task loop print the odd numbers between 0-10
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}