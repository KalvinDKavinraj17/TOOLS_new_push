//Splice
//syntax:
//var_nname.splice(index,counter[0,1],value)
// 0 - new value push and update
// 1 - override or replace and update
const weeks = ["Sunday","Monday","Tuesday","Thursday","Saturday"]
weeks.splice(3,0,"Wednessday")
weeks.splice(5,0,"Friday")
console.log(weeks);


//String Methods:
//length:
let str = "java"
console.log(str.length);

//split
var spl = "hello world!"
var spl2 = spl.split(" ")
console.log(spl2);

//join:
var j = spl2.join(' ')
console.log(j);

//reverse:
var val = "Javascript"
var rev = val.split('').reverse().join('')
console.log(rev);

//includes:
var inc = "newyork"
var find = inc.includes("new")  //it is case sensitive and also the order of finding cannot be changed
console.log(find)

//toUppercase:
var up = "Javascript"
console.log(up.toUpperCase());

//toLowercase
var low = "CHENNAI"
console.log(low.toLowerCase());

//indexof: only the first occirence index position is shown in the output if there is duplicate values
var idx = 'trendnologies'
console.log(idx.indexOf("e"));

//lastIndexOf - only the last occurance index position of the requested value is shown for duplicate values
var lidx = "trendnologies"
console.log(lidx.lastIndexOf("e"));

//charAt
var char = "happy"
console.log(char.charAt(3))

//substring:
var sub = "annanagar"
console.log(sub.substring(4))

//startswtih
var sw = "Police"
console.log(sw.startsWith("p"));

//endswith
var ew = "Police"
console.log(ew.endsWith("e"));

//trim: trims out only the blank space of the string
var tr =" happy "
console.log(tr);
console.log(tr.trim());
console.log(rev.trimStart());
console.log(tr.trimEnd());

//replace
var rep = "hello world"
console.log(rep.replace("hello",'welcome'));




