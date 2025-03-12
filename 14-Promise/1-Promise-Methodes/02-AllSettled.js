/*
* The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This
* returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an
* array of objects that describe the outcome of each promise.
*/

const f1=()=>{
    let counter=0
    return new Promise((resolve, reject)=>{
        if(counter>5){
            resolve(counter)
        }else {
            reject("Counter is Less Then 5")
        }
    })
}
const f2=()=>{
    let age=35
    return new Promise((resolve, reject)=>{
        if(age<18){
            return("You Are so young go build your Self");
        }else {
            reject(Error("you are old like me ):"));
        }
    })
}

const f3=()=>{
    let user={name:"me",add:"New York"};
    return new Promise((resolve, reject)=>{
        if(!user){
            reject(Error("there is no User"));
            return;
        }
        resolve(user)
    })
}
Promise.allSettled([f1(),f2(),f3()]).then((values)=>{
    values.forEach(ele=>console.log(ele.status))// rejected rejected fulfilled

}).catch((err)=>console.log(err));