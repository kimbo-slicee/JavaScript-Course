/*
* The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of
* the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the
* input's promises rejects, with this first rejection reason
*
* */
// Example
function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve( "First Task")
        },5000)
    })
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Task")
        },2000)
    })
}
function f3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("promise number 3 Failed")
        },1000)
    })
}
Promise.all([f1(),f2(),f3()]).then((value)=>{
    value.forEach(ele=>console.log(ele));
 }).catch((err)=>console.log(err));
// if one of this promises Failed all methode return the rejected message
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    reject(Error("p2_immediate_rejection"));
});

Promise.all([p1, p2]).then(
    (values) => console.log(values)
).catch(err=>console.log(err));

// If the iterable contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):