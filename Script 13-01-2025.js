//Object: Collection of key and value pairs
//{}

const obj = {
    name : "vijay",
    dep : "IT",
    exp : 4
}

//get the values in the object
console.log(obj.name)
console.log(obj.exp);
console.log(obj.dep);

//My name is billa

//Updating values in an Object
obj.name ="sakthi"
obj.dep = 'Non-IT'
obj.exp = 5
console.log(obj);


//Adding many variables in one object
var stdobj = [
    {
    name:'logan',
    age: 12
},
{
    name:'hari',
    age: 14
},
{
    name:'sakthi',
    age: 16
},
{
    name:'Kali',
    age: 13
}
]
console.log(stdobj);
//Pulling out only one object using index
console.log(stdobj[2]);
//pulling the variable on a particular object using indexing and key calling
console.log(stdobj[2].name);


//object destructuring
const objt = {
    name : "vijay",
    dep : 'IT',
    exp : 4
}
const {name,dep,exp} = objt
console.log(name,dep,exp);

//Task- create an object for office with 5 members- name dep,exp,id.no - I need to take the 3rd person and 4th person values seperatly
//2nd persons values only using obj 

const office = {
    members: [
        { name: "Rohit", department: "HR", experience: 5, id: 101 },
        { name: "Saravanan", department: "Finance", experience: 3, id: 102 },
        { name: "Ram", department: "IT", experience: 4, id: 103 },
        { name: "Devi", department: "Marketing", experience: 2, id: 104 },
        { name: "Sanjana", department: "Sales", experience: 6, id: 105 }
    ]
};

// Extract 3rd and 4th person's details
const thirdPerson = office.members[2];
const fourthPerson = office.members[3];

console.log("3rd Person:", thirdPerson);
console.log("4th Person:", fourthPerson);

// Extract 2nd person's details using object destructuring
const { members: [, secondPerson] } = office;

console.log("2nd Person:", secondPerson);


//formethods

//forEach - loops and read the array
//forIn - loops the object
//forOf - loop the string and also arrays

//forEach
//syntax:
//variable_name.forEach((value,index,acctualarray)=>)
var arr = ['sunday','monday','tuesday','wednessday']
arr.forEach((val,idx,accarr)=>console.log(val,idx,accarr))

//forIn
//Syntax:
//for(var_type var_name in obj_name){
//code
//}

var obj2 ={
    name: 'suriya',
    city : "newyork"
}
for(var x in obj2){
    console.log(x+'<=>'+obj2[x]);
    
}

//forOf
//syntax
//for(var_type var_name of str_name){
// code
//}
let str = 'hai'
for(var x of str){
    console.log(x);    
}


//MRF - map,reduce,filter

//Map
//syntax:
//variable_name.map((value,index,actualarray)=>operation)
var num = [1,2,3,4,5,6,7,8,9,10]
var map = num.map((val1,idx1,accarr1)=>val1*2)
console.log(map)
//the same will work for index but not for actual array as the actual array is in matrix form
var map2 = num.map((val1,idx1,accarr1)=>idx1*2)
console.log(map2);
//var map = num.map((val1,idx1,accarr1)=>accarr1*2) //this will show array full of NaN not a number

//Reduce
//syntax:
//variable_name.reduce((accumulator,value,index,actualarray)=> operation,accumulator.value)
var num3 = [1,2,3,4,5,6,7,8,9,10]
var reduce = num3.reduce((acc5,val5)=>acc5+val5,5)
console.log(reduce);

//filter
//syntax
//variable_name.filter((value,index,actualarray)=>)
var filter = num.filter((val,idx,accarr)=>val>5)
console.log(filter);

//Task to filter the even numbers and odd numbers of the given array
//even
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

//odd
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = arr.filter(num => num % 2 !== 0);

console.log("Odd Numbers:", oddNumbers);

