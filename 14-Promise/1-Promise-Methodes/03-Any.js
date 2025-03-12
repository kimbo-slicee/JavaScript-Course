/*
* The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned
*  promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of
* the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of
* rejection reasons.
*/
function promise1 (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve("First Function")
        },3000)
    })
}
function promise2 (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second Function")
        },2000)
    })
}
function promise3 (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Last Function")
        },5000)
    })
}
Promise.any([promise1(),promise2(),promise3()]).then((values)=>{
    console.log(values)
})