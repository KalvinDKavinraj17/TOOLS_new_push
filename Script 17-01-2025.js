function watercan(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const water = true
            if(water){
                resolve('water can is filled')
            }else{
                reject('water can is not filled')
            }
        }, 3000);
    })
}
function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const rc = true
            if(rc){
                resolve('room is cleaned')
            }else{
                reject('room is not cleaned')
            }
        }, 1000);
    })
}
function trash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const tr = false
            if(tr){
                resolve('trash is taken out')
            }else{
                reject('trash is not taken out')
            }
        }, 2000);
    })
}
watercan().then(val => {console.log(val); return roomclean()})
          .then(val2=> {console.log(val2); return trash()})
          .catch(err => {console.log(err); console.log("all task done");})

//async and await - keyword
//async - it will return promise
//await-it will wait for promise

async function work(){

    try{

        var watercans = await watercan()
        console.log(watercans)

        var roomscleans = await roomclean()
        console.log(roomscleans)

        var garbage = await trash()
        console.log(garbage)

    }catch(err){
        console.log(err)
    }
}
work()


//inheritance
//class
class Recipiebook{
    maggie(){
        console.log("maggie masala")
        console.log('noodles')
    }
    sandwidch(){
        console.log("bread")
        console.log('Cheese')
    }
}
//object
var chef = new Recipiebook();
chef.maggie()
chef.sandwidch()