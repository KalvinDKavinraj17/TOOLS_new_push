//Callback - Passing the function into the another functions argument is called callback function
function name1(){
    console.log('vijay');
}
function greets(x){
    console.log("Hello Welome!!");
    x()
}
greets(name1)

//Multiple callback functions - uses arrow function
function box1(x){
    console.log("Very Big Box");
    x()
}
function box2(y){
    console.log("Big Box");    
    y()
}
function box3(z){
    console.log("Medium size box");
    z()
}
function box4(){
    console.log("Small box");    
}
box1(()=>{box2(()=>{box3(box4)})})

//Set time function - executes the code only after the specified time
//1sec = 1000 millisecond
setTimeout(()=>{
    console.log("bomb blast")
},3000)

//asyncronise
function box1(x){
    setTimeout(() => {
        console.log("Very Big Box");
    }, 2000);
}
function box2(y){
    setTimeout(() => {
        console.log("Big Box");    
    }, 3000);
}
function box3(z){
    setTimeout(() => {
        console.log("Medium size box");
    }, 5000);
}
function box4(){
    setTimeout(() => {
        console.log("Small box");    
    }, 1000);
}
box1()
box2()
box3()
box4()

//syncronise using the callbackHell function
function box1(x){
    setTimeout(() => {
        console.log("Very Big Box");
        x()
    }, 2000);
}
function box2(y){
    setTimeout(() => {
        console.log("Big Box");    
        y()
    }, 3000);
}
function box3(z){
    setTimeout(() => {
        console.log("Medium size box");
        z()
    }, 5000);
}
function box4(){
    setTimeout(() => {
        console.log("Small box");    
    }, 1000);
}
box1(()=>{box2(()=>{box3(box4)})})


//Promise - convers async to sync
//Syntax
//return new Promise((resolve,reject)=>{
    //Async code
//})
//resolve - .then()
//reject - .catch()

function watercan(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Watercan is filled")
        }, 3000);
    })
}
function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Room is cleaned")
        }, 1000);
    })
}
function trash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("trash is out")
        }, 2000);
    })
}
watercan().then(val => {console.log(val); return roomclean()})
          .then(val2 => {console.log(val2); return trash()})
          .then(val3 => {console.log(val3);console.log("all task done")})
