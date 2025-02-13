//While loop -entry level condition checking loop
//Syntax
let count = 0 //initialization
while(count<5){  // Condition
    console.log(count); //print
    count++ // itration
    
}

//Do-while- exit level condition checking loop
let docount=5
do{
    console.log(docount);
    docount++
}while(docount<5)


//If-Elase
//syntax
//if(condition){}else{}
let age = 20
if(age>=18){
    console.log('He is eligible to vote')
}
else{
    console.log("he is not eligible to vote");
}


//Else-if
let mark = 65
if(mark>=90 && mark<=100){
    console.log("Grade A")
}
else if(mark>=80){
    console.log('Grade B');
}
else if(mark >=70){
    console.log('Grade C');    
}
else if(mark>=60){
    console.log("Grade D")
}
else if(mark>=50){
    console.log('Grade E');
}
else {console.log('Fail');
}


//Task: Array [14,53,23,12,121] find the maximum number

let numbers = [14, 53, 23, 12, 121];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber)


//Array methods:

//Push - is used to push the values to the last position of the array
var bc = ['jai','gopal','hari','kali']
bc.push('sabari','logan')
console.log(bc);

//Pop- is used to remove the last value in the array
bc.pop()
console.log(bc);

//unshift - it will add the values tot he begining of the array
var roll = ['jai','gopal','hari','kali']
roll.unshift("vijay")
console.log(roll);

//shift - it removes the first value from an array
roll.shift()
console.log(roll);

//concat - is used to merge tow or more array
const veg = ['Carrot', 'Beetroot','Cucumber']
const fruits = ['apple','pineapple','mango']
const cosmetics = ['Perfume', 'Powder']
const cover = veg.concat(fruits,cosmetics)

//sort - assending and desending
//ascending order
const num = [5,2,3,7,8,1,10,9,4,6]
num.sort((a,b)=>a-b)
console.log(num)
//descending order
const num1 = [5,2,3,7,8,1,10,9,4,6]
num1.sort((a,b)=>b-a)
console.log(num1)

//slice
const birds = ['pigeon','vulture','eagle','peacock','parrot']
const sl = birds.slice(2,-2)
console.log(sl);


